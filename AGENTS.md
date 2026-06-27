# LLM-Wiki-Schema

## Rollen

- `llm-wiki.md` ist die unveränderliche lokale Referenz des Karpathy-Grundprinzips. Niemals verändern.
- `raw/` enthält unveränderliche Originalquellen. Niemals verändern.
- Neue Dateien unter `raw/` tragen den aus ihrer eindeutigen Quellen-ID abgeleiteten Schlüssel im Namen: `<titel>--src-<sha256-kurz>.md`.
- `wiki/` enthält ausschließlich vom LLM gepflegte Synthesen.
- `index.md` ist der inhaltliche Einstieg und wird bei Wiki-Änderungen aktualisiert.
- `log.md` protokolliert Ingests, wertvolle Queries und Lint-Läufe chronologisch.

## Komplett-Ingest aus `quellen/quellen.txt`

- `quellen/quellen.txt` ist das Importmanifest und enthält pro nichtleerer Zeile genau eine kanonische HTTP- oder HTTPS-URL.
- Die URL in Zeile `n` ist nur eine Discovery-URL und wird vollständig und reproduzierbar in `quellen/n/` aufbereitet; sie ist nicht selbst die einzige Ingest-Einheit.
- Extrahiere alle fachlichen HTML-Abschnitte quellentreu und abschnittsweise; fasse sie nicht zusammen und paraphrasiere sie nicht.
- Speichere jeden HTML-Fachabschnitt als eigene Markdown-Datei. Seine kanonische Quellen-ID lautet `<discovery-url>#llmwiki-section=<stabiler-abschnittsslug>` und erhält dadurch einen eigenen `Source-Key`.
- Übernimm keine Navigation, Seitenrahmen, Kontakte, personenbezogenen Daten, Impressums-, Datenschutz- oder Social-Media-Inhalte.
- Ermittle alle im fachlichen Artikelbereich direkt verlinkten PDFs, lade die unveränderten Originale herunter und erzeuge für jedes PDF eine vollständige, nach Seiten oder Tabellen strukturierte Markdown-Transkription.
- Behandle jedes PDF anhand seiner kanonischen PDF-URL als eigenständiges Thema mit eigenem `Source-Key`.
- Gib jeder erzeugten Quelldatei einen stabilen URL-basierten Schlüssel im Namen: `<titel>--src-<erste-20-hexzeichen-von-sha256-der-kanonischen-url>.<endung>`.
- Jede Markdown-Quelle enthält `Quellen-ID`, `Quellen-Schlüssel`, Abrufdatum, einen anklickbaren `Original-URL`-Markdown-Link und bei PDFs zusätzlich einen `[[Wikilink]]` auf das lokale Original.
- Verknüpfe lokal erzeugte Markdown- und PDF-Dateien mit `[[Wikilinks]]` und prüfe alle internen sowie externen Links.
- Erzeuge pro Discovery-URL einen reinen Quellenindex mit Wikilinks auf alle Themen. Markiere ihn mit `Ingest: false`; er wird niemals als Wissensquelle ingestiert.
- Ein „komplett ingest“ verarbeitet alle Manifestzeilen nach diesen Regeln und prüft vor der Verarbeitung jeden einzelnen Abschnitts- oder PDF-Schlüssel gegen die `Source-Key`-Einträge mit `Status: completed` in `log.md`. Überspringe nur bereits abgeschlossene Themen, niemals pauschal die gesamte Discovery-URL.
- Erzeuge die Gesamtlauf-Historie erst nach erfolgreicher Aufbereitung aller Manifestzeilen mit `npm run history:complete-ingest`. Der Lauf muss abbrechen, sobald ein nummeriertes Quellenverzeichnis oder sein passender, mit `Ingest: false` gesperrter Quellenindex fehlt.
- `quellen/komplett-ingest-snapshot.json` hält den letzten vollständigen Themenbestand samt Inhalts- und PDF-Hashes. `quellen/komplett-ingest-historie.txt` protokolliert je Lauf die Kategorien `NEU`, `GEÄNDERT`, `GELÖSCHT` und `UNVERÄNDERT` mit Quellen-ID, Schlüssel, Typ und Dateipfad.
- Ein Thema gilt als unverändert, wenn Quellen-ID und Inhaltsfingerabdruck übereinstimmen. Eine PDF fließt zusätzlich binär in den Fingerabdruck ein. Gleiche ID mit neuem Fingerabdruck gilt als geändert und darf als neue Version erneut verarbeitet werden.
- Die Aufbereitung unter `quellen/` allein überträgt noch nichts nach `raw/` oder `wiki/` und veröffentlicht nichts, sofern dies nicht zusätzlich verlangt wird.

## Query

1. Lies zuerst `index.md`.
2. Lies nur die für die Frage relevanten Wiki-Seiten.
3. Beantworte aus vorhandener Evidenz und nenne die verwendeten Dateipfade.
4. Wenn eine Antwort dauerhaft wertvolle Synthese enthält, integriere sie in `wiki/`.
5. Erfinde keine Quellen und stelle Unsicherheit ausdrücklich dar.

## Schreibregeln

- Schreibe vollständige, eigenständig verständliche Markdown-Seiten.
- Verwende relative Markdown-Links zwischen verwandten Seiten.
- Bewahre vorhandene `Original-URL`-Links unverändert als anklickbare Markdown-Quellenangaben.
- Bewahre bestehende belegte Aussagen, sofern neue Evidenz sie nicht widerlegt.
- Aktualisiere bei Änderungen `index.md` und ergänze `log.md`.
- Verändere weder `llm-wiki.md` noch Dateien unter `raw/`.
- Verarbeite eine in `log.md` als `Status: completed` protokollierte `Source-Key` niemals erneut.
