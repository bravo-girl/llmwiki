import { createHash } from "node:crypto";
import { appendFile, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";


const root = process.cwd();
const sourcesRoot = process.env.LLMWIKI_SOURCES_ROOT
  ? path.resolve(process.env.LLMWIKI_SOURCES_ROOT)
  : path.join(root, "quellen");
const manifestPath = path.join(sourcesRoot, "quellen.txt");
const snapshotPath = path.join(sourcesRoot, "komplett-ingest-snapshot.json");
const historyPath = path.join(sourcesRoot, "komplett-ingest-historie.txt");

const sha256 = (value) => createHash("sha256").update(value).digest("hex");

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

function metadata(markdown, name) {
  const match = markdown.match(new RegExp(`^\\s*-\\s*${name}:\\s*(?:\\x60([^\\x60]+)\\x60|(.+))\\s*$`, "mi"));
  return (match?.[1] ?? match?.[2])?.trim() ?? null;
}

function linkedOriginal(markdown) {
  return markdown.match(/^\s*-\s*Original:\s*\[\[([^\]]+\.pdf)\]\]\s*$/mi)?.[1] ?? null;
}

function contentBody(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let started = false;
  const body = [];
  for (const line of lines.slice(1)) {
    if (!started) {
      if (!line.trim() || /^\s*-\s*(Quellenart|Discovery-URL|Quellen-ID|Original-URL|Quellen-Schlüssel|Abschnitts-Slug|Abrufdatum|Dokumentstand laut PDF|Original):/i.test(line) || /^\s*>/.test(line)) {
        continue;
      }
      started = true;
    }
    body.push(line.replace(/[ \t]+$/g, ""));
  }
  return body.join("\n").trim();
}

const manifestUrls = (await readFile(manifestPath, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

const sources = [];
const seenIds = new Set();
for (let line = 1; line <= manifestUrls.length; line += 1) {
  const directory = path.join(sourcesRoot, String(line));
  if (!(await exists(directory))) {
    throw new Error(`Komplett-Ingest unvollständig: Verzeichnis quellen/${line} für ${manifestUrls[line - 1]} fehlt.`);
  }
  const files = (await readdir(directory)).filter((file) => file.endsWith(".md")).sort();
  const indexes = [];
  for (const file of files) {
    const markdown = await readFile(path.join(directory, file), "utf8");
    if (/^\s*-\s*Ingest:\s*`false`\s*$/mi.test(markdown)) indexes.push({ file, markdown });
  }
  if (indexes.length !== 1 || metadata(indexes[0].markdown, "Discovery-URL") !== manifestUrls[line - 1]) {
    throw new Error(`Komplett-Ingest unvollständig: quellen/${line} benötigt genau einen passenden Quellenindex mit Ingest: false.`);
  }
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const markdown = await readFile(fullPath, "utf8");
    if (/^\s*-\s*Ingest:\s*`false`\s*$/mi.test(markdown)) continue;
    const sourceId = metadata(markdown, "Quellen-ID");
    const sourceKey = metadata(markdown, "Quellen-Schlüssel");
    const sourceType = metadata(markdown, "Quellenart");
    if (!sourceId || !sourceKey || !sourceType) {
      throw new Error(`Unvollständige Quellenmetadaten: ${path.relative(root, fullPath)}`);
    }
    if (seenIds.has(sourceId)) throw new Error(`Doppelte Quellen-ID: ${sourceId}`);
    seenIds.add(sourceId);
    const expectedKey = `src-${sha256(sourceId).slice(0, 20)}`;
    if (sourceKey !== expectedKey) throw new Error(`Falscher Quellen-Schlüssel in ${file}`);

    const pdfName = linkedOriginal(markdown);
    const pdfPath = pdfName ? path.join(directory, pdfName) : null;
    const binarySha256 = pdfPath && await exists(pdfPath) ? sha256(await readFile(pdfPath)) : null;
    const bodySha256 = sha256(contentBody(markdown));
    const contentSha256 = sha256(`${bodySha256}\n${binarySha256 ?? ""}`);
    sources.push({
      sourceId,
      sourceKey,
      sourceType,
      file: path.relative(root, fullPath).replaceAll("\\", "/"),
      bodySha256,
      binarySha256,
      contentSha256,
      discoveryLine: line,
      discoveryUrl: manifestUrls[line - 1],
    });
  }
}
sources.sort((a, b) => a.sourceId.localeCompare(b.sourceId));

let previous = { sources: [] };
if (await exists(snapshotPath)) previous = JSON.parse(await readFile(snapshotPath, "utf8"));
const oldById = new Map(previous.sources.map((source) => [source.sourceId, source]));
const newById = new Map(sources.map((source) => [source.sourceId, source]));

const added = sources.filter((source) => !oldById.has(source.sourceId));
const deleted = previous.sources.filter((source) => !newById.has(source.sourceId));
const unchanged = sources.filter((source) => oldById.get(source.sourceId)?.contentSha256 === source.contentSha256);
const changed = sources.filter((source) => {
  const old = oldById.get(source.sourceId);
  return old && old.contentSha256 !== source.contentSha256;
});

const timestamp = new Date().toISOString();
const snapshot = {
  version: 1,
  generatedAt: timestamp,
  manifest: manifestUrls,
  sources,
};
await writeFile(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

const labels = [
  ["NEU", added],
  ["GEÄNDERT", changed],
  ["GELÖSCHT", deleted],
  ["UNVERÄNDERT", unchanged],
];
const history = [
  `=== Komplett-Ingest ${timestamp} ===`,
  `Discovery-URLs: ${manifestUrls.length}`,
  `Themen aktuell: ${sources.length}`,
  `Neu: ${added.length} | Geändert: ${changed.length} | Gelöscht: ${deleted.length} | Unverändert: ${unchanged.length}`,
  "",
];
for (const [label, entries] of labels) {
  history.push(`${label} (${entries.length})`);
  history.push(...(entries.length
    ? entries.map((entry) => `- ${entry.sourceKey} | ${entry.sourceType} | ${entry.sourceId} | ${entry.file}`)
    : ["- keine"]));
  history.push("");
}
await appendFile(historyPath, `${history.join("\n")}\n`, "utf8");

console.log(JSON.stringify({ total: sources.length, added: added.length, changed: changed.length, deleted: deleted.length, unchanged: unchanged.length }));
