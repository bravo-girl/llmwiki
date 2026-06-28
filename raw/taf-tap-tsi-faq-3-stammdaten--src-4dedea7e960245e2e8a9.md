# 3. Stammdaten

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920#llmwiki-section=3-stammdaten`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920)
- Quellen-Schlüssel: `src-4dedea7e960245e2e8a9`
- Abschnitts-Slug: `3-stammdaten`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

### Wo sind die aktuellen Infrastrukturstammdaten zu finden?

Die aktuellen Stammdaten sind unter folgendem Link auf unserer Webseite abrufbar:[Fahrplan: EVU-Schnittstelle](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208)

### Kann bzw. muss jedes EVU einen Company Code/Organisation Code beantragen?

Ja. Bis zum 31.12.2025 ist für den TAF/TAP-Nachrichtenaustausch für jedes beteiligte Unternehmen zwingend ein Company Code erforderlich. Dieser kann ohne großen Aufwand und derzeit kostenfrei bei der UIC beantragt werden. Ab dem 1.1.2026 wird die ERA diese Aufgabe übernehmen und der Company Code durch den Organisation Code ersetzt. Alle Telematics Stakeholder, die vor dem 01.01.2026 einen Company Code besitzen, müssen bei der ERA oder noch besser über das EBA einen gleichlautenden Organisation Code beantragen. Unternehmen des deutschen Eisenbahnsektors, die bisher weder über einen Company Code noch über einen Organisation Code verfügen, beantragen bitte bis zum 01.01.2026 einen Organisation Code, entweder über die ERA oder das EBA. Über folgenden Link kann der Antrag bei der ERA gestellt werden:[Antrag ERA](https://www.era.europa.eu/domains/registers/ocr_en).

Über folgenden Link kann der Antrag beim EBA gestellt werden:[Antrag EBA](https://www.eba.bund.de/DE/Themen/Fahrzeugeinstellungsregister/OCR/ocr_node.html)

Wir empfehlen Ihnen dringend die Beantragung über das EBA, da Sie einen direkten Ansprechpartner mit Kommunikation in deutscher Sprache haben, der Sie in allen Belangen unterstützt. Besondere Aufmerksamkeit gilt für die EVUs. Sind Sie EVU und beantragen die Angleichung Ihres Organisation Codes an den Company Code, dann müssen Sie nach Anpassung des Organisation Code auch die Einträge im Nationalen und Europäischen Fahrzeugeinstellungsregister (NVR/EVR) aktualisieren.

Anschließend muss der Company Code/Organisation Code an die Eisenbahninfrastrukturunternehmen gemeldet werden. Im Falle einer Angleichung des Organisation Code an den Company Code muss keine Meldung erfolgen, da der bisher unter dem Namen Company Code hinterlegte Code gleichbleibt. Bei der DB InfraGO bitte direkt an die Kundenberatung melden. Mehr kann im aktuellen Flyer auf der Informationsplattform nachgelesen werden.

Leider gibt es weiterhin eine hohe Anzahl an EVU, die entweder keinen Company Code/Organisation Code haben oder diesen noch nicht an die DB InfraGO gemeldet haben. Da der Company Code/Organisation Code mit TAF/TAP ein verpflichtendes Element wird, ist es nicht zielführend, diesen aus (persönlichen) Gründen zu verweigern. Mit Einführung von TAF/TAP wird der Company Code/Organisation Code voraussichtlich via INB als Pflicht-Element im G-INV verankert.

### Können einem Company Code mehrere der heutigen Kundennummern zugeordnet sein? So, wie ein EVU heute verschiedene Kundennummern für die Trassenanmeldung nutzen kann?

Ja - der Company Code ist ein vorgegebenes Element der TAF/TAP bzw. EU-Vorgaben. Jedes EVU (bzw. jedes Unternehmen), was an TAF/TAP beteiligt ist, benötigt zwingend (!) einen solchen Code. Die Kundennummern-Logik ist DB InfraGO-eigen. In der Regel gibt es je EVU/ZB eine Hauptkundennummer (für die es dann einen Company Code gibt) mit untergeordneten Kundennummern. Diese Kundennummern können gemeinsam den Company Code der Hauptkundennummer verwenden.

### Wird der Company Code/Organisation Code bei einem Betreiberwechsel automatisch an den neuen Betreiber übertragen oder muss dieser neu beantragt/vergeben werden?

Nein, bei einem Betreiberwechsel gilt der Company Code bzw. Organisation Code des neuen Betreibers.

Hat der neue Betreiber noch keinen Company Code/Organisation Code, muss er für den TAF/TAP-Nachrichtenaustausch bis zum 31.12.2025 einen Company Code bei der UIC und für den TAF/TAP-Nachrichtenaustausch ab dem 01.01.2026 bei der ERA oder noch besser bei dem EBA beantragen.

Im Kundendialog vom Juni 25 wurde darüber informiert, dass die EVU für die Anwendung von TAF/TAP TSI nun anstelle eines Company Codes ab dem 01.01.2026 einen Organisation-Code benötigen, der möglichst mit dem Company-Code übereinstimmen sollte. Unsere EVU verfügen bereits seit 2021 über einen Organisation-Code (damals auf Anforderung des EBA beantragt). Dieser setzt sich aus Ziffern und Buchstaben zusammen und entspricht nicht dem erst später beantragten Company-Code. Könnten Sie bitte darlegen, welche Auswirkungen die Beibehaltung des vorhandenen alphanummerischen Organisation-Codes hätte.

Sollten Sie ab dem 01.01.2026 über einen vom Company Code abweichenden Organisation Code verfügen, wird der TAF/TAP-Nachrichtenaustausch nicht funktionieren. Alle IT-Systeme und Referenzdatenbanken sind mit den Company Codes der Unternehmen gespeist. Im Nachrichtenaustausch für fahrplanerisch und betrieblich relevanten Meldungen erwarten die Systeme diesen hinterlegten Code. Senden Sie nun einen abweichenden Code, weil der Organisation Code nicht dem Company Code entspricht, kann man Sie im Nachrichtenaustausch nicht identifizieren.

### Können weiterhin die bisherigen Bezeichnungen und Ril100-Codes bzw. DS100 Codes genutzt werden?

Im Webportal von pathOS können die Laufwegspunkte auch mit Ril100-Code oder dem Klarnamen angegeben werden und werden automatisch dem PLC zugeordnet. Wer eine Schnittstellenlösung entwickelt, muss hingegen den PLC als eindeutigen Schlüssel verwenden. Die zusätzliche Angabe des Klarnamens in der Schnittstelle erleichtert die Lesbarkeit der xml-Datei, ist aber nicht unbedingt erforderlich.
