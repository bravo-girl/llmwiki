interface Env {
  ASSETS: Fetcher;
  AI: Ai;
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
  GEMMA_MODEL: string;
  AUTO_WRITE: string;
  GIT_PROVIDER: string;
}

interface GitFile {
  path: string;
  content: string;
  sha?: string;
}

interface RouteDecision {
  paths: string[];
}

interface AgentResult {
  answer: string;
  citations: string[];
  edits: Array<{ path: string; content: string }>;
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store"
};

const MODEL_LIMIT_MESSAGE =
  "Das kostenlose Tageskontingent ist ausgeschöpft. Das Wiki bleibt lesbar und arbeitet ab 00:00 UTC wieder.";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({ ok: true, model: env.GEMMA_MODEL, storage: env.GIT_PROVIDER });
    }

    if (url.pathname === "/api/ask" && request.method === "POST") {
      return handleQuestion(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "not_found" }, 404);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleQuestion(request: Request, env: Env): Promise<Response> {
  if (env.GIT_PROVIDER !== "github") {
    return json({ error: "unsupported_git_provider" }, 500);
  }

  let question = "";
  try {
    const body = (await request.json()) as { question?: unknown };
    question = typeof body.question === "string" ? body.question.trim() : "";
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  if (!question || question.length > 4000) {
    return json({ error: "invalid_question", message: "Die Frage muss 1 bis 4000 Zeichen enthalten." }, 400);
  }

  try {
    const [schema, index] = await Promise.all([
      readGitFile(env, "AGENTS.md"),
      readGitFile(env, "index.md")
    ]);

    const route = await routeQuestion(env, question, schema.content, index.content);
    const pages = await Promise.all(route.paths.slice(0, 8).map((path) => readGitFile(env, path)));
    const result = await answerAndMaintain(env, question, schema.content, index.content, pages);

    const committed: string[] = [];
    if (env.AUTO_WRITE === "true") {
      for (const edit of result.edits.slice(0, 12)) {
        if (!isWritableWikiPath(edit.path)) continue;
        await writeGitFile(env, edit.path, edit.content, `llm-wiki: integrate question`);
        committed.push(edit.path);
      }
    }

    return json({
      answer: result.answer,
      citations: result.citations,
      updated: committed
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/quota|neurons|rate.?limit|429/i.test(message)) {
      return json({ error: "free_quota_exhausted", message: MODEL_LIMIT_MESSAGE }, 503);
    }
    console.error(message);
    return json({ error: "agent_failed", message: "Der Wiki-Agent konnte die Anfrage nicht verarbeiten." }, 502);
  }
}

async function routeQuestion(env: Env, question: string, schema: string, index: string): Promise<RouteDecision> {
  const prompt = `Du navigierst ein dateibasiertes LLM-Wiki. Wähle ausschließlich vorhandene relevante Markdown-Pfade aus index.md.\n\nSCHEMA:\n${schema}\n\nINDEX:\n${index}\n\nFRAGE:\n${question}\n\nAntworte ausschließlich als JSON: {"paths":["wiki/...md"]}`;
  const output = await runModel(env, prompt, 700);
  const parsed = parseModelJson<RouteDecision>(output);
  return { paths: Array.isArray(parsed.paths) ? parsed.paths.filter(isReadableWikiPath) : [] };
}

async function answerAndMaintain(
  env: Env,
  question: string,
  schema: string,
  index: string,
  pages: GitFile[]
): Promise<AgentResult> {
  const context = pages.map((page) => `--- ${page.path} ---\n${page.content}`).join("\n\n");
  const prompt = `Du bist der alleinige Maintainer eines Karpathy-LLM-Wikis. Befolge AGENTS.md. Beantworte die Frage aus dem Wiki und nenne die verwendeten Markdown-Pfade. Wenn die Frage zu dauerhaft wertvoller Synthese führt, liefere vollständige neue Inhalte für die betroffenen Wiki-Dateien sowie index.md und log.md. Verändere niemals raw/ oder AGENTS.md. Erfinde keine Quellen.\n\nAGENTS.md:\n${schema}\n\nindex.md:\n${index}\n\nRELEVANTE SEITEN:\n${context || "Keine vorhandenen Seiten gefunden."}\n\nFRAGE:\n${question}\n\nAntworte ausschließlich als JSON mit diesem Schema:\n{"answer":"...","citations":["wiki/...md"],"edits":[{"path":"wiki/...md","content":"vollständiger Dateiinhalt"}]}`;
  const output = await runModel(env, prompt, 5000);
  const parsed = parseModelJson<AgentResult>(output);
  return {
    answer: typeof parsed.answer === "string" ? parsed.answer : "Keine Antwort erzeugt.",
    citations: Array.isArray(parsed.citations) ? parsed.citations.filter((item): item is string => typeof item === "string") : [],
    edits: Array.isArray(parsed.edits)
      ? parsed.edits.filter((edit) => edit && typeof edit.path === "string" && typeof edit.content === "string")
      : []
  };
}

async function runModel(env: Env, prompt: string, maxTokens: number): Promise<string> {
  const response = (await env.AI.run(env.GEMMA_MODEL as keyof AiModels, {
    messages: [
      { role: "system", content: "Gib valides JSON ohne Markdown-Codeblock aus." },
      { role: "user", content: prompt }
    ],
    max_tokens: maxTokens,
    temperature: 0.2,
    response_format: { type: "json_object" },
    chat_template_kwargs: { enable_thinking: false }
  })) as {
    response?: string;
    choices?: Array<{ message?: { content?: string | null } }>;
  };

  const content = response.response ?? response.choices?.[0]?.message?.content;
  if (!content) throw new Error("Empty model response");
  return content;
}

async function readGitFile(env: Env, path: string): Promise<GitFile> {
  const response = await githubFetch(env, `/contents/${encodeGitPath(path)}?ref=${encodeURIComponent(env.GITHUB_BRANCH)}`);
  if (!response.ok) throw new Error(`GitHub read failed for ${path}: ${response.status}`);
  const data = (await response.json()) as { content?: string; encoding?: string; sha?: string };
  if (!data.content || data.encoding !== "base64") throw new Error(`Invalid GitHub content for ${path}`);
  return { path, content: decodeBase64Utf8(data.content), sha: data.sha };
}

async function writeGitFile(env: Env, path: string, content: string, message: string): Promise<void> {
  let current: GitFile | undefined;
  try {
    current = await readGitFile(env, path);
  } catch (error) {
    if (!/404/.test(String(error))) throw error;
  }

  const response = await githubFetch(env, `/contents/${encodeGitPath(path)}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: encodeBase64Utf8(content),
      branch: env.GITHUB_BRANCH,
      ...(current?.sha ? { sha: current.sha } : {})
    })
  });
  if (!response.ok) throw new Error(`GitHub write failed for ${path}: ${response.status} ${await response.text()}`);
}

function githubFetch(env: Env, path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(`https://api.github.com/repos/${encodeURIComponent(env.GITHUB_OWNER)}/${encodeURIComponent(env.GITHUB_REPO)}${path}`, {
    ...init,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "content-type": "application/json",
      "user-agent": "llmwiki-worker",
      "x-github-api-version": "2022-11-28",
      ...init.headers
    }
  });
}

function parseModelJson<T>(value: string): T {
  const cleaned = value.trim().replace(/^```json\s*/i, "").replace(/\s*```$/, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("Model returned no JSON object");
  return JSON.parse(cleaned.slice(start, end + 1)) as T;
}

function isReadableWikiPath(path: unknown): path is string {
  return typeof path === "string" && /^wiki\/[a-zA-Z0-9_./-]+\.md$/.test(path) && !path.includes("..");
}

function isWritableWikiPath(path: string): boolean {
  return isReadableWikiPath(path) || path === "index.md" || path === "log.md";
}

function encodeGitPath(path: string): string {
  return path.split("/").map(encodeURIComponent).join("/");
}

function decodeBase64Utf8(value: string): string {
  const binary = atob(value.replace(/\n/g, ""));
  return new TextDecoder().decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)));
}

function encodeBase64Utf8(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), { status, headers: JSON_HEADERS });
}
