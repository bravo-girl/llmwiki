const form = document.querySelector("#ask-form");
const question = document.querySelector("#question");
const result = document.querySelector("#result");
const status = document.querySelector("#status");
const answer = document.querySelector("#answer");
const meta = document.querySelector("#meta");
const button = form.querySelector("button");
const maintenanceWarning = document.querySelector("#maintenance-warning");

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

if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");

fetch("/api/health")
  .then((response) => response.json())
  .then((health) => {
    if (!health.githubToken?.warning) return;
    maintenanceWarning.textContent = health.githubToken.warning;
    maintenanceWarning.hidden = false;
  })
  .catch(() => {});
