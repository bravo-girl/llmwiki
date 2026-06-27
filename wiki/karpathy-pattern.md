# Das Karpathy-LLM-Wiki-Muster

Dieses Dokument beschreibt ein Muster für den Aufbau persönlicher Wissensbasen mithilfe von LLMs, das über herkömmliches RAG (Retrieval-Augmented Generation) hinausgeht. Das Ziel ist die Erstellung eines **persistenten, kumulativen Artefakts** ([../raw/karpathy-llm-wiki.md](../raw/karpathy-llm-wiki.md)).

## Kernkonzept: Kumulation statt bloßer Abfrage

Im Gegensatz zu Standard-RAG-Systemen, die bei jeder Anfrage Wissen aus Rohdokumenten neu extrahieren müssen, baut dieses Muster ein strukturiertes, miteinander verlinktes Wiki auf. Das LLM fungiert als „Programmierer“, das die Wissensbasis (den „Code“) pflegt, während der Mensch die Quellen kuratiert und die Analyse steuert.

Der entscheidende Vorteil ist, dass das Wissen einmal synthetisiert und dann aktuell gehalten wird, anstatt es bei jeder Query neu herleiten zu müssen. Widersprüche werden markiert, Querverweise gesetzt und Zusammenfassungen kontinuierlich aktualisiert.

## Architektur

Das System besteht aus drei Schichten ([../raw/karpathy-llm-wiki.md](../raw/karpathy-llm-wiki.md)):

1.  **Raw Sources (Rohquellen):** Unveränderliche Dokumente (Artikel, Paper, Daten), die als „Source of Truth“ dienen.
2.  **The Wiki:** Eine Verzeichnisstruktur aus LLM-generierten Markdown-Dateien (Zusammenfassungen, Entitätsseiten, Konzepte). Das LLM besitzt und pflegt diese Schicht.
3.  **The Schema:** Eine Konfigurationsdatei (wie `AGENTS.md`), die dem LLM die Struktur, Konventionen und Workflows vorgibt.

## Operative Prozesse

Um die Wissensbasis lebendig zu halten, werden drei Hauptoperationen durchgeführt:

-   **Ingest (Aufnahme):** Neue Quellen werden gelesen, diskutiert und in das Wiki integriert. Dies umfasst das Erstellen neuer Seiten und das Aktualisieren bestehender Entitäten und des Index.
-   **Query (Abfrage):** Fragen werden gegen das Wiki gestellt. Ein wesentlicher Aspekt ist, dass wertvolle Antworten (z. B. Vergleiche oder Analysen) als neue Seiten zurück in das Wiki geschrieben werden können, um die Wissensbasis zu erweitern.
-   **Lint (Qualitätsprüfung):** Periodische Überprüfung des Wikis auf Widersprüche, veraltete Behauptungen, „Waisen-Seiten“ (Orphan Pages) oder fehlende Querverweise.

## Navigation und Verwaltung

-   **index.md:** Ein inhaltsorientierter Katalog aller Wiki-Seiten zur schnellen Navigation.
-   **log.md:** Ein chronologisches Protokoll aller Ingests, Queries und Lint-Läufe.

## Anwendungsbereiche

Das Muster ist modular und kann für verschiedene Kontexte genutzt werden, darunter:
-   **Persönliche Entwicklung:** Tracking von Zielen, Gesundheit oder Psychologie.
-   **Forschung:** Tiefgehende Arbeit an wissenschaftlichen Themen über lange Zeiträume.
-   **Lektüre:** Begleitendes Wiki zum Aufbau von Charakter- und Themennetzwerken bei Büchern.
-   **Business:** Interne Wissensbasen aus Meetings, Slack-Threads und Dokumenten.

*Hinweis: Die Implementierung (Tools wie Obsidian, Dataview oder CLI-Suche) ist optional und hängt vom jeweiligen Anwendungsfall ab.*