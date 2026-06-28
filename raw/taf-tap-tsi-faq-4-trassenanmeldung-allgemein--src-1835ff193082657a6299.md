# 4. Trassenanmeldung allgemein

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920#llmwiki-section=4-trassenanmeldung-allgemein`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/TAF-TAP-TSI-FAQ-13868920)
- Quellen-Schlüssel: `src-1835ff193082657a6299`
- Abschnitts-Slug: `4-trassenanmeldung-allgemein`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

### Wie weit (zeitlich, fachlich, prozessual) reicht der Kanalzwang?

Bei einer Trassenbestellung über das Webportal oder via Formular (Vordruck nach Ril 402.0202A01-A03) erfolgt keine Kommunikation über die PathOS Schnittstelle. Man muss sich die InfraGO-Angebote aus dem Portal manuell holen bzw. eine OIM (ObjectInfoMessage) exportieren. Wenn der Trassenbestellprozess so gestartet wurde, erfolgt prozessual bis zum Trassennutzungsvertrag keine Kommunikation über die PathOS Schnittstelle (ausgenommen KOMBau).

### Würde eine Netzausgelöste Änderung nach Vertrag dann wieder über die Schnittstelle kommen?

Der Kanalzwang gilt bis zum Abschluss des jeweiligen Prozesses; bei einer über das Portal initiierten Trassenbestellung bis zum Vertragsschluss. Währenddessen erfolgt die Kommunikation ausschließlich über den Startkanal. Nach Vertragsschluss werden netzausgelöste Änderungen (NAÄ) initial parallel über CI und Portal bereitgestellt (sofern ein CI existiert). Der weitere NAÄ-Prozess richtet sich nach Ihrer ersten Reaktion: Reagieren Sie über das CI (z. B. per RCM), wird der Prozess über das CI fortgeführt; andernfalls über das Portal. Unabhängig davon erfolgt die Kommunikation zu GPE und FPE grundsätzlich ohne Kanalzwang; eine Reaktion ist jederzeit entweder über das CI oder über die KomBau möglich.

### Wird Click & Ride mit Einführung von TAF/TAP weitergeführt?

Ja. Click & Ride wird künftig für TAF/TAP ertüchtigt. Am generellen Anwendungsfall für C&R ändert sich durch die TAF/TAP Einführung nichts. Für das Fahrplanjahr 2025 und 2026 bleibt Click&Ride parallel zu TPN als Eingangskanal verfügbar.

### Bis wann kann TPN für GelV 2026 noch genutzt werden?

TPN bleibt bis zum Fahrplanwechsel am 13.12.2026 produktiv für GelV verfügbar.

### Legt man im PlannedCalendar fest, ob es sich um Regeltrassen oder Ad-hoc Trassen handelt?

Nein. Ob es sich um einen Regel- oder Sonderzug handelt, ergibt sich aus dem Bestellzeitpunkt und den bestellten Verkehrstagen. Daher muss das EVU dies nicht gesondert angeben.

### Wie stellt man den Bezug von Zug und Gegenzug her? Beispiel: ein EVU will 3x von A nach B und zurück fahren mit jeweils 15 Min. Aufenthalt, dann stehen diese Trassen in Bezug zueinander?

Man kann auf eine Vor- oder Nachleistung referenzieren. Dies geschieht über die TrainActivityCodes 0044 bzw. 0045. Sie können dabei über die OTN oder die TrainID auf den anderen Zug verweisen.

### Betrifft die Umstellung von TAF/TAP TSI auch die Trassenabrechnung? Verändern sich dadurch Dateiformate (heute CSV) und Inhalte?

In den Abrechnungssystemen wird aktuell der Umgang mit den neuen Identifikatoren geprüft.

Ganz grob gesprochen soll die Abrechnung mit Attributen aus TAF/TAP TSI erweitert und eventuell vorhandene Attribute durch die jeweiligen neuen ausgetauscht werden. Das trifft zum einen unsere internen Systeme aber auch die CSV-Dateien. Grundsätzlich werden wir erstmal die Dateien weiter im CSV-Format verwenden, analog zu heute.

Perspektivisch gibt es die Idee mit der Umstellung der Abrechnung auf TAF/TAP TSI künftig die Abrechnungsdaten komfortabel in einem Webportal zur Verfügung zu stellen. Der Zeitpunkt der Umsetzung ist aber offen, das aktuelle LB-Portal bleibt also weiterhin der gewohnte Kanal.
