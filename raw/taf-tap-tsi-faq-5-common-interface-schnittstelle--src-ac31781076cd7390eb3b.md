# 5. Common Interface / Schnittstelle

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920#llmwiki-section=5-common-interface-schnittstelle`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920)
- Quellen-Schlüssel: `src-ac31781076cd7390eb3b`
- Abschnitts-Slug: `5-common-interface-schnittstelle`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

### Wenn mehrere Kundennummern demselben Company Code zugewiesen sind, können diese Kunden dann dasselbe Common Interface verwenden? Gibt es eine gute Möglichkeit die Nachrichten dann im Common Interface nach Kundennummer zu routen?

Auch hier gilt, generell können mehrere Kundennummern einen Company Code verwenden (z.B. wenn diese in der DB InfraGO-Logik einer Hauptkundennummer zugeordnet sind).

Ein Common Interface ist immer auf Ebene Company Code angelegt und kann dementsprechend auch von mehreren Kundennummern verwendet werden (gilt dann auch für die entsprechenden Softwares).

DB InfraGO-seitig routen wir auf Ebene Company Code, d.h. bei uns wird EIN Empfänger je Company Code hinterlegt. Ein Routing nach Kundennummern sollte dann entsprechend auf Kundenseite (im CI bzw. nach dem CI) erfolgen.

### Ist es richtig, dass ujBau-Nachrichten ausschließlich über das Fahrplan-CI eines EVU (und nicht etwa über das CI für operativen Betrieb) gesendet werden?

Die Nachrichten für den Prozess zum unterjährigen Bau erfolgen nur über das Fahrplan-CI. Im Anschluss an den Bauprozess erfolgt die Aktualisierung des Vertrages dann über pathOS, es bleibt also bei dem gleichen CI. Der Versand der Nachrichten zum unterjährigen Bau erfolgt nicht über das CI des operativen Betriebs.

### Wie werden die neuen betrieblichen Nachrichten von einem EVU technisch an die DB InfraGO AG übermittelt?

Diese Meldungen werden vom Common Interface des EVU an das Common Interface (Betriebsdatenverteiler, BDV) der DB InfraGO gesendet. Dies sind die gleichen Schnittstellen, die auch bei TAF/TAP-Meldungen von DB InfraGO an die EVU genutzt werden - nur eben in umgekehrter Richtung.
