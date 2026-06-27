import { createHash } from "node:crypto";
import { appendFile, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourcesRoot = process.env.LLMWIKI_SOURCES_ROOT
  ? path.resolve(process.env.LLMWIKI_SOURCES_ROOT)
  : path.join(root, "quellen");
const sourceDirectory = path.join(sourcesRoot, "1");
const manifestPath = path.join(sourcesRoot, "quellen.txt");
const snapshotPath = path.join(sourcesRoot, "komplett-ingest-snapshot.json");
const historyPath = path.join(sourcesRoot, "komplett-ingest-historie.txt");
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

async function exists(file) {
  try { await stat(file); return true; } catch { return false; }
}

function metadata(markdown, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(new RegExp(`^\\s*-\\s*${escaped}:\\s*(?:\\x60([^\\x60]+)\\x60|(.+))\\s*$`, "mi"));
  return (match?.[1] ?? match?.[2])?.trim() ?? null;
}

function linkedOriginal(markdown) {
  return markdown.match(/^\s*-\s*Original:\s*\[\[([^\]]+\.pdf)\]\]\s*$/mi)?.[1] ?? null;
}

function internalLinks(markdown) {
  return [...markdown.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => match[1]);
}

function contentBody(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let started = false;
  const body = [];
  for (const line of lines.slice(1)) {
    if (!started) {
      if (!line.trim() || /^\s*-\s*(Quellenart|Discovery-URL|Quellen-ID|Original-URL|Quellen-Schlüssel|Abschnitts-Slug|Abrufdatum|Dokumentstand laut PDF|Original):/i.test(line) || /^\s*>/.test(line)) continue;
      started = true;
    }
    body.push(line.replace(/[ \t]+$/g, ""));
  }
  return body.join("\n").trim();
}

const manifestUrls = (await readFile(manifestPath, "utf8"))
  .split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
if (!(await exists(sourceDirectory))) {
  throw new Error("Komplett-Ingest unvollständig: gemeinsame Quellenbasis quellen/1 fehlt.");
}

const files = (await readdir(sourceDirectory)).filter((file) => file.endsWith(".md")).sort();
const markdownByFile = new Map();
for (const file of files) markdownByFile.set(file, await readFile(path.join(sourceDirectory, file), "utf8"));

const indexes = [...markdownByFile]
  .filter(([, markdown]) => /^\s*-\s*Ingest:\s*`false`\s*$/mi.test(markdown))
  .map(([file, markdown]) => ({ file, markdown, discoveryUrl: metadata(markdown, "Discovery-URL") }));
for (const url of manifestUrls) {
  const matching = indexes.filter((index) => index.discoveryUrl === url);
  if (matching.length !== 1) throw new Error(`Komplett-Ingest unvollständig: ${url} benötigt genau einen passenden Quellenindex in quellen/1.`);
}
if (indexes.length !== manifestUrls.length) {
  throw new Error("Komplett-Ingest unvollständig: quellen/1 enthält verwaiste oder doppelte Quellenindizes.");
}

const references = new Map();
for (const index of indexes) {
  for (const linkedFile of internalLinks(index.markdown).filter((file) => file.endsWith(".md"))) {
    if (!references.has(linkedFile)) references.set(linkedFile, new Set());
    references.get(linkedFile).add(index.discoveryUrl);
  }
}

const sources = [];
const seenIds = new Set();
for (const [file, markdown] of markdownByFile) {
  if (/^\s*-\s*Ingest:\s*`false`\s*$/mi.test(markdown)) continue;
  const fullPath = path.join(sourceDirectory, file);
  const sourceId = metadata(markdown, "Quellen-ID");
  const sourceKey = metadata(markdown, "Quellen-Schlüssel");
  const sourceType = metadata(markdown, "Quellenart");
  if (!sourceId || !sourceKey || !sourceType) throw new Error(`Unvollständige Quellenmetadaten: ${path.relative(root, fullPath)}`);
  if (seenIds.has(sourceId)) throw new Error(`Doppelte Quellen-ID: ${sourceId}`);
  seenIds.add(sourceId);
  const expectedKey = `src-${sha256(sourceId).slice(0, 20)}`;
  if (sourceKey !== expectedKey || !file.includes(sourceKey)) throw new Error(`Falscher oder fehlender Quellen-Schlüssel in ${file}`);
  const discoveryUrls = [...(references.get(file) ?? [])].sort();
  if (!discoveryUrls.length) throw new Error(`Nicht indizierte Quelle in quellen/1: ${file}`);

  const pdfName = linkedOriginal(markdown);
  const pdfPath = pdfName ? path.join(sourceDirectory, pdfName) : null;
  if (pdfName && !(await exists(pdfPath))) throw new Error(`Verlinktes Original fehlt: ${pdfName}`);
  const binarySha256 = pdfPath ? sha256(await readFile(pdfPath)) : null;
  const bodySha256 = sha256(contentBody(markdown));
  const contentSha256 = sha256(`${bodySha256}\n${binarySha256 ?? ""}`);
  sources.push({
    sourceId, sourceKey, sourceType,
    file: path.relative(root, fullPath).replaceAll("\\", "/"),
    bodySha256, binarySha256, contentSha256, discoveryUrls,
  });
}
sources.sort((a, b) => a.sourceId.localeCompare(b.sourceId));

let previous = { sources: [] };
if (await exists(snapshotPath)) previous = JSON.parse(await readFile(snapshotPath, "utf8"));
const oldById = new Map(previous.sources.map((source) => [source.sourceId, source]));
const newById = new Map(sources.map((source) => [source.sourceId, source]));
const added = sources.filter((source) => !oldById.has(source.sourceId));
const deleted = previous.sources.filter((source) => !newById.has(source.sourceId));
const unchanged = sources.filter((source) => oldById.get(source.sourceId)?.contentSha256 === source.contentSha256);
const changed = sources.filter((source) => oldById.has(source.sourceId) && oldById.get(source.sourceId).contentSha256 !== source.contentSha256);

const timestamp = new Date().toISOString();
await writeFile(snapshotPath, `${JSON.stringify({ version: 2, generatedAt: timestamp, manifest: manifestUrls, sources }, null, 2)}\n`, "utf8");
const labels = [["NEU", added], ["GEÄNDERT", changed], ["GELÖSCHT", deleted], ["UNVERÄNDERT", unchanged]];
const history = [
  `=== Komplett-Ingest ${timestamp} ===`,
  `Discovery-URLs: ${manifestUrls.length}`,
  `Themen aktuell: ${sources.length}`,
  `Neu: ${added.length} | Geändert: ${changed.length} | Gelöscht: ${deleted.length} | Unverändert: ${unchanged.length}`,
  "",
];
for (const [label, entries] of labels) {
  history.push(`${label} (${entries.length})`);
  history.push(...(entries.length ? entries.map((entry) => `- ${entry.sourceKey} | ${entry.sourceType} | ${entry.sourceId} | ${entry.file}`) : ["- keine"]));
  history.push("");
}
await appendFile(historyPath, `${history.join("\n")}\n`, "utf8");
console.log(JSON.stringify({ total: sources.length, added: added.length, changed: changed.length, deleted: deleted.length, unchanged: unchanged.length }));
