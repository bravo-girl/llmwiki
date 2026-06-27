# LLM-Wiki-Schema

## Rollen

- `llm-wiki.md` ist die unveränderliche lokale Referenz des Karpathy-Grundprinzips. Niemals verändern.
- `raw/` enthält unveränderliche Originalquellen. Niemals verändern.
- `wiki/` enthält ausschließlich vom LLM gepflegte Synthesen.
- `index.md` ist der inhaltliche Einstieg und wird bei Wiki-Änderungen aktualisiert.
- `log.md` protokolliert Ingests, wertvolle Queries und Lint-Läufe chronologisch.

## Query

1. Lies zuerst `index.md`.
2. Lies nur die für die Frage relevanten Wiki-Seiten.
3. Beantworte aus vorhandener Evidenz und nenne die verwendeten Dateipfade.
4. Wenn eine Antwort dauerhaft wertvolle Synthese enthält, integriere sie in `wiki/`.
5. Erfinde keine Quellen und stelle Unsicherheit ausdrücklich dar.

## Schreibregeln

- Schreibe vollständige, eigenständig verständliche Markdown-Seiten.
- Verwende relative Markdown-Links zwischen verwandten Seiten.
- Bewahre bestehende belegte Aussagen, sofern neue Evidenz sie nicht widerlegt.
- Aktualisiere bei Änderungen `index.md` und ergänze `log.md`.
- Verändere weder `llm-wiki.md` noch Dateien unter `raw/`.
