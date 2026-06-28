# Welche Überhöhungsfehlbeträge der Strecke werden zur Ermittlung des Static Speed Profiles (SSP) verwendet und welche anderen ETCS-Zugarten (Train category) mit geringerem Überhöhungsfehlbetrag sind vorhanden, für die die ETCS-Streckeneinrichtung ein SSP bereitstellen kann?

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634#llmwiki-section=welche-uberhohungsfehlbetrage-der-strecke-werden-zur-ermittlung-des-stat`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634)
- Quellen-Schlüssel: `src-655bf4c55c26023087a5`
- Abschnitts-Slug: `welche-uberhohungsfehlbetrage-der-strecke-werden-zur-ermittlung-des-stat`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

**ETCS-Level 1**
Längs- und Querneigungen werden nicht verwendet. Wegen Subset 026 (3.7.1.1 + 3.7.2.3) muss aber ein Gradientenprofil ohne Neigung übertragen werden.

**ETCS-Level 2**
Es werden die Überhöhungsfehlbeträge entsprechend den folgende ETCS-Zugarten unterstützt:

- PASS 3 (Reisezug mit 150 mm Überhöhungsfehlbetrag)
- FP 3 (Güterzug in Bremsstellung P mit 130 mm Überhöhungsfehlbetrag)
- FG 3(Güterzug in Bremsstellung G mit 130 mm Überhöhungsfehlbetrag)

Hinweis: Die Fahrzeuge müssen mindestens der ETCS-Zugart PASS3, FP3 oder FG3 entsprechen. Fahrzeuge mit einer niedrigeren ETCS-Zugart dürfen auf Strecken mit ETCS-Level 2 der DB InfraGO AG nicht eingesetzt werden.
