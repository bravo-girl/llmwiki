# 2. Identifikatoren und Objekte

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920#llmwiki-section=2-identifikatoren-und-objekte`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920)
- Quellen-Schlüssel: `src-bfdaa0123f24538379f9`
- Abschnitts-Slug: `2-identifikatoren-und-objekte`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

### Gibt es noch so etwas wie Kundennummern und in welchem TAF/TAP-Objekt stecken diese? Hintergrund: bisher unterscheiden einige EVU Linien mit den zugehörigen Zügen nach Kundennummer

Die Kundennummern-Logik der DB InfraGO wird mit der Einführung von TAF/TAF TSI im Fahrplan 2027 nicht geändert. Diese Informationen stecken allerdings formal in keinem TAF/TAP Objekt, sondern sind ein zusätzlicher Parameter in Deutschland bei der DB InfraGO AG.

### Ist die ReferenceTrainID die interne Referenznummer der EVU, die vom EIU übernommen wird? Werden Zugnummern damit obsolet?

Die ReferenceTrainID ist ein Element der EVU und wird vom EIU übernommen - das stimmt. Zugnummern wird es weiterhin geben, nur heißen diese künftig OTN, sind aber weitestgehend wie heute. Die ReferenceTrainID ist allerdings die durchgängige Identifikation und somit in keiner Weise eine reine "interne" Referenznummer.

### Kann/sollte eine ReferenceTrainID mehrfach vergeben werden, wenn z.B. ein Zuglauf abgeändert wird oder gestrandet ist und ist das z.B. auch für 20h-Bestellungen verwendbar zur besseren Identifikation?

Generell kann eine ReferenceTrainID mehrmals verwendet werden, allerdings muss sie immer je Verkehrstag eindeutig sein. Wird sie wiederholt verwendet, so müssen die zugehörigen Anmeldungen „zusammengehören“ (hinsichtlich Zug, Route, Zeiten etc.) und kein Verkehrstag darf doppelt vorkommen.

### Kann die ReferenceTrainID auch grenzüberschreitend genutzt werden bzw. sollte es ggf. sogar? Wie sieht es EVU-übergreifend aus an z.B. Übergabepunkten?

Ja, sie soll auch grenzüberschreitend genutzt werden. Das federführende EVU (LeadRU) legt ReferenceTrainID und RouteID fest und kommuniziert sie an die Partner-EVU, welche diese dann wiederum in den entsprechenden Anmeldesystemen angeben müssen.
