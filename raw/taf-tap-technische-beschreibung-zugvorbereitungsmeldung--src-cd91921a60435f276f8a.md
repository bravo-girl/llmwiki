# TAF/TAP Technische Beschreibung Zugvorbereitungsmeldung

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12598396/243bc25415eb1ecae491418380e6a844/TAF-TAP-Technische-Beschreibung-Zugvorbereitungsmeldung-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12598396/243bc25415eb1ecae491418380e6a844/TAF-TAP-Technische-Beschreibung-Zugvorbereitungsmeldung-data.pdf)
- Quellen-Schlüssel: `src-cd91921a60435f276f8a`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-zugvorbereitungsmeldung--src-cd91921a60435f276f8a.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 6.2 vom 22.04.26
TECHNISCHE BESCHREIBUNG
Empfang der
Zugvorbereitungsmeldung
gem. TAF/TAP TSI
TAF/TAP TrainReady message
1

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
2 Schnittstellenbeschreibung 3
2.1 Antrag auf Meldungsaustausch 3
3 Beschreibung der Meldungen 4
3.1 Meldungsversand 4
3.2 Meldungsinhalt 4
3.3 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern 4
3.4 Meldungsaufbau 5
3.4.1 TAF/TAP TrainReadyMessage 6
4 Rahmenbedingungen 7
5 Ansprechpartner und Impressum 8
Änderungsverfolgung
Datum Änderung
06.12.2021 • Ersterstellung
08.02.2022 • Fehlerkorrektur
19.04.2023 • Information zur Nutzung TAF/TAP-Identifier
04.07.2023 • Anpassung Datum Produktivsetzung, Hinweise TAF/TAP-Identifier
13.12.2023 • Umstellung DB Netz AG auf DB InfraGO AG
08.04.2024 • Anpassung Datum Produktivsetzung
• Schärfung Erläuterung zu optionalen Feldern in Meldungsschema
03.07.2024 • Aufnahme zusätzlicher xsd-Version 3.4.1.0
20.09.2024 • Anpassung Nutzungsbeginn TAF/TAP-Identifier auf 12/2026
27.03.2025 • Ansprechpartner Produktmanagement
• Anpassung Datum Produktivsetzung TTT auf Basis OTN
04.06.2025 • Änderung Antragsstellung Meldungsaustausch
29.09.2025 • Hinweis zu verwendbaren XSD-Versionen in Meldungsaufbau
22.04.2026 • Änderung Begrifflichkeit CompanyCode zu OrganisationCode
2

## Seite 3

1 Allgemeines
Auf Grundlage der EU-Verordnungen 1305/2014 Technical Specification for Interoperability –
Telematics Applications for Freight (TAF TSI) und 454/2011 Telematics Applications for Pass-
enger Services (TAP TSI) sind die Akteure des europäischen Eisenbahnsektors verpflichtet,
den Austausch bestimmter Datenmeldungen in einem europäisch einheitlich definierten Format
zu unterstützen. Die vorgesehenen Meldungen sind den o.g. Verordnungen der Europäischen
Union, bzw. deren Revisionen zu entnehmen. Meldungsformat und -inhalt entsprechen den Vor-
gaben gemäß TAF/TAP TSI, bzw. der Abstimmungen in den europäischen Gremien.
Die Abgabe des im weiteren Verlauf genauer beschriebenen Datensatzes Zugvorbereitung
(TAF/TAP TrainReadyMessage), dient der Information des EIU durch das EVU zur Abfahrtbe-
reitschaft eines Zuges. Fachlicher Inhalt und Ablauf ist analog zum bestehenden Verfahren, ins-
besondere über GSM-R. Die bestehenden Meldewege bleiben auch nach Einführung der
TAF/TAP TrainReadyMessage bestehen, die hier beschriebene Meldung stellt damit lediglich
eine optionale Alternative zu diesen dar. Grundsätzlich kann die TAF/TAP TrainReadyMessage
an allen Betriebsstellen genutzt werden, an denen die Verwendung von GSM-R möglich ist.
2 Schnittstellenbeschreibung
Als Grundlage des Datenaustausches hat die auf europäischer Ebene bei RailNet Europe ein-
gerichtete Common Components Group das sogenannte Common Interface als Standardsoft-
ware entwickelt. Alternativ kann eine selbst entwickelte Schnittstelle oder Software von Drittan-
bietern zum Einsatz kommen, welche die Funktionen des Common Interface exakt nachbilden.
Die Beschreibung der Schnittstelle ist der Produktbeschreibung des Common Interface, bzw.
den entsprechenden Dokumenten der TAF/TAP TSI Common Components Group zu entneh-
men, welche von dieser erhältlich sind. Informationen sind auch auf der Homepage der RailNet
Europe (TAF/TAP TSI) verfügbar.
Auf Seiten DB InfraGO fungiert der Betriebsdatenverteiler als Common Interface.
2.1 Antrag auf Meldungsaustausch
Anträge auf den Austausch von TAF/TAP-Meldungen mit der DB InfraGO können über das
Infraportal mittels tool zur BDV Anmeldung gestellt werden. Der Link ist auf den Seiten des Be-
triebs der DB InfraGO TAF/TAP-Homepage (www.dbinfrago.com/taf-tap-tsi) hinterlegt. Dies ist
dieselbe Seite auf welcher auch diese Technische Beschreibung zum Download bereitsteht.
3

## Seite 4

3 Beschreibung der Meldungen
3.1 Meldungsversand
Der Zeitpunkt des Meldungsversands durch das EVU ist analog zu den bestehenden Verfahren
vor Abfahrt des Zuges gem. Richtlinie Ril. 420.0200 Abschnitt 3 (2).
3.2 Meldungsinhalt
Die Meldungsinhalte entsprechen den europäischen Vorgaben. Eine detaillierte Beschreibung
findet sich im europäischen „TAP TSI and TAF TSI Sector Handbook for the Communication
between Railway Undertakings and Infrastructure Managers (RU/IM Telematics Sector Hand-
book)“ bzw. den jeweiligen Folgedokumenten. Die Dokumente werden von der Joint Sector
Group und der European Railway Agency (ERA) auf ihrer Website veröffentlicht.
Die in der TAF/TAP TrainReadyMessage bei DB InfraGO verwendeten Elemente sowie weitere
meldungsspezifische Angaben sind im Folgenden beschrieben. Alle ausgeschlossen bzw. nicht
benannten Elemente können übergeben werden, eine Verarbeitung durch die DB InfraGO er-
folgt jedoch nicht.
Die TAF/TAP TrainReadyMessage ist wahlweise gemäß TAF/TAP TSI Meldungsschema („TAF
TSI XSD Schema“) Version 3.0.2.0 oder Version 3.4.1.0 bereitzustellen. Die europäischen Mel-
dungsschemata sind auf den Websites der Joint Sector Group (JSG) unter http://taf-
jsg.info/?page_id=172 veröffentlicht. Auf der angegebenen Internetseite gelangt man durch ei-
nen Klick auf den Link am Textende auf den Ablageort der Meldungsschemata. Die untenste-
hende tabellarische Darstellung des Meldungsaufbaus beruht auf Version 3.0.2.0. Etwaige Un-
terschiede im Aufbau der beiden Versionen haben keine Auswirkung auf den fachlichen Inhalt,
welcher in den Feldern der Version 3.4.1.0 analog zur Version 3.0.2.0 ist.
Es ist zu beachten, dass im europäischen Meldungsschema eine Vielzahl von Datenfeldern in
den Meldungen optional sind. Hintergrund ist, dass die Meldungen für möglichst viele Ge-
schäftsfälle der verschiedenen Unternehmen in der EU nutzbar sein sollen. Hierdurch ist be-
dingt, dass solche „xsd-optionalen-Felder“ im Datenaustausch zwischen einzelnen Unterneh-
men benötigt werden, also dort verpflichtend sind. So gibt es auch im Meldungsaustausch mit
der DB InfraGO AG einzelne solcher Felder, die in den untenstehenden Beschreibungen der
Meldungen enthalten sind. Das Füllen weiterer Felder ist unkritisch, da diese bei Eingang der
Meldung beim Empfänger einfach ignoriert werden können.
3.3 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern
Die volle Einführung der TAF/TAP-Objekte (ReferenceTrain und Path) mit den dazugehörigen
Identifikatoren (ReferenceTrainID und PathID) ist für den Bereich Betrieb der DB InfraGO für
12/2026 geplant. Sie kommen zusätzlich zum OTN-Identifier (Zugnummer+Betriebstag) zum Ein-
satz, welche bis dahin die einzige Identifikation des Zuges darstellt. Diese Zeitachse erfolgt in
Abstimmung mit den Planungen bei der Fahrplanung/Trassenanmeldung. Die Darstellung der
Identifierstrukturen in den untenstehenden Meldungsbeschreibungen ist demnach bis dahin nur
nachrichtlich.
Bei Meldungen, die von den EVU an DB InfraGO versendet werden, ist gemäß europäischer
Vorgabe stets die aktuelle ReferenceTrainID anzugeben. Dies stellt den Standardfall dar. Alter-
nativ können auch nach 12/2026 bei DB InfraGO eingehende TAF/TAP-Meldungen verarbeitet
werden, welche nur die OTN-Identifier enthalten. Auch nach 12/2026 muss der OTN-Identifier
stets mit angegeben werden. Dies gilt bis die TAF/TAP-Identifier in der Breite des Marktes sicher
und fehlerfrei verwendet werden und keine Gefahr zu erwarten ist, Informationen bei DB InfraGO
oder den EVU aufgrund von fehlerhaften oder Dummy-Werten dem falschen Zug zuzuordnen.
Die Angabe der PathID ist nicht notwendig, diese wird bei DB InfraGO nicht verarbeitet und in
einer eingehenden Meldung ignoriert.
4

## Seite 5

Für DB InfraGO ist die Verarbeitung der OTN/Zugnummer bei eingehenden TAF/TAP-Meldungen
entweder mit (analog Darstellung Zugnummer in UIC-Telegrammen) oder ohne führenden Nullen
möglich.
3.4 Meldungsaufbau
Im Folgenden sind die bei der DB InfraGO AG verwendeten Datenelemente der Meldungen auf-
geführt. Zur Vereinfachung der Meldungsverwaltung bei den Kunden (Verwendung derselben
Ausprägung der Meldung bei mehreren Abnehmern) ist die Übermittlung weiterer Datenelemente
gemäß des europäischen TAF/TAP-Meldungsschemas möglich. Solche zusätzlichen Elemente
werden bei der Verarbeitung in den Systemen der DB InfraGO AG ignoriert.
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
5

## Seite 6

3.4.1 TAF/TAP TrainReadyMessage
Die folgenden Datenelemente gemäß Meldungsschema sind zu übergeben. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Meldungs-
schema (xsd) optional sind (kursiv in untenstehender Tabelle = optionales Element bei DB InfraGO, restliche Felder sind Pflichtfelder).
TrainReadyMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4500
MessageTypeVersion 3.0.2.0 Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T08:22:39+1:00
Sender 9999 Sender: EVU
Recipient 0080 Empfänger DB InfraGO
MessageStatus -
MessageStatus 1 Nur 1 (neu)
TransportOperationalIdentifiers Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026.
r
e
ifitn
ObjectType TR TR = Train
e
d
P-
I
6
Company 1234 OrganisationCode des Ersteller-EVU
A2
T0 Core --ABCD123456 Kernelement
/F
A
/2
2
T
r e
1
b
a
Variant 00 Variante für ReferenceTrainID immer "00"
d TimetableYear 2023 Fahrplanjahr für diesen Zug
g
n
u Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im Aus-
z StartDate 2023-03-17
tu land abweichend vom Betriebstag bei DB InfraGO sein)
N
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
TrainReadyStatus -
TrainReady 1 Nur 1 (Zug ist vorbereitet)
6

## Seite 7

4 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden Rahmenbedingungen zu beachten:
 Die TAF/TAP TrainReady message kann an allen Betriebsstellen genutzt werden, an de-
nen die Verwendung von GSM-R möglich ist. Dort, wo heute andere Verfahren verwendet
werden, sind diese auch weiterhin zu nutzen.
 Die hier beschriebene Meldung stellt lediglich eine optionale Alternative zum bestehen-
den Meldeweg über GSM-R dar, der vollumfänglich erhalten bleibt.
 Die Meldungen werden bis vsl. Dezember 2026 (Fahrplanwechsel) ohne TAF/TAP Iden-
tifier empfangen. Entsprechend ist die Zugnummer („OperationalTrainNumber“) zu ver-
wenden.
 Die Zuverlässigkeit der Daten und Datenlieferung ist für die Akzeptanz in der Betriebsfüh-
rung unerlässlich.
 Der Datenversender benötigt eine statische im Internet sichtbare IP-Adresse oder einen
per öffentlichen DNS auflösbaren Hostnamen. Als Transportprotokoll ist https zu verwen-
den (Port standardmäßig 443).
 Der Empfang der Meldungen wird gemäß den Spezifikationen des Common Interface
quittiert.
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).

## Seite 8

5 Ansprechpartner und Impressum
Betrieb
DB InfraGO AG
Zentrale fachliche Betriebsführung
Helpdesk ZFBF
Pfarrer-Perabo-Platz 2-5
60326 Frankfurt am Main
Produktmanagement
DB InfraGO AG
Produktmanagement
Adam-Riese-Str. 11-13
60327 Frankfurt am Main
Impressum
DB InfraGO AG
Produkt- und Preismanagement
Adam-Riese-Str. 11-13
60327 Frankfurt am Main
8
