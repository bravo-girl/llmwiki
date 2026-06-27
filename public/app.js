const form = document.querySelector("#ask-form");
const question = document.querySelector("#question");
const result = document.querySelector("#result");
const status = document.querySelector("#status");
const answer = document.querySelector("#answer");
const meta = document.querySelector("#meta");
const button = form.querySelector("button");
const maintenanceWarning = document.querySelector("#maintenance-warning");
const ingestForm = document.querySelector("#ingest-form");
const adminKey = document.querySelector("#admin-key");
const sourceFile = document.querySelector("#source-file");
const ingestResult = document.querySelector("#ingest-result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  result.hidden = false;
  button.disabled = true;
  status.textContent = "Das Wiki denkt und prüft seine Markdown-Seiten …";
  answer.textContent = "";
  meta.textContent = "";

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: question.value })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Die Anfrage ist fehlgeschlagen.");

    status.textContent = "Antwort aus dem LLM-Wiki";
    answer.textContent = data.answer;
    const details = [];
    if (data.citations?.length) details.push(`Gelesen: ${data.citations.join(", ")}`);
    if (data.updated?.length) details.push(`Aktualisiert: ${data.updated.join(", ")}`);
    meta.textContent = details.join(" · ");
  } catch (error) {
    status.textContent = "Momentan nicht verfügbar";
    answer.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});

ingestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = sourceFile.files?.[0];
  if (!file) return;
  const ingestButton = ingestForm.querySelector("button");
  ingestButton.disabled = true;
  ingestResult.hidden = false;
  ingestResult.textContent = "Quelle wird gespeichert und von Gemma in die Wissensbasis eingearbeitet …";

  try {
    const content = await file.text();
    const response = await fetch("/api/admin/ingest", {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-key": adminKey.value },
      body: JSON.stringify({ filename: file.name, content })
    });
    const data = await response.json();
    if (!response.ok) {
      const stored = data.sourceStored ? ` Die Originalquelle liegt bereits unter ${data.rawPath}.` : "";
      throw new Error((data.message || "Der Ingest ist fehlgeschlagen.") + stored);
    }
    ingestResult.textContent = `${data.rawCreated ? "Gespeichert" : "Erneut verarbeitet"}: ${data.rawPath}. ${data.summary} Aktualisiert: ${data.updated.join(", ") || "keine Synthese"}.`;
    sourceFile.value = "";
  } catch (error) {
    ingestResult.textContent = error.message;
  } finally {
    ingestButton.disabled = false;
  }
});

if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");

fetch("/api/health")
  .then((response) => response.json())
  .then((health) => {
    if (!health.githubToken?.warning) return;
    maintenanceWarning.textContent = health.githubToken.warning;
    maintenanceWarning.hidden = false;
  })
  .catch(() => {});
