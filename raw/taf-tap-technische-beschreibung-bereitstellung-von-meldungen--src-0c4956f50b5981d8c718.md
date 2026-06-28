# TAF/TAP Technische Beschreibung Bereitstellung von Meldungen zum Dispositionsfahrplan und Ausfall/Teilausfall _v5.5

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-db-infrago-ag-an-evu-11089210`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12598318/e371ec965ed01ed7d6619ded0db170fc/Technische-Beschreibung-Bereitstellung-von-Meldungen-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12598318/e371ec965ed01ed7d6619ded0db170fc/Technische-Beschreibung-Bereitstellung-von-Meldungen-data.pdf)
- Quellen-Schlüssel: `src-0c4956f50b5981d8c718`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-bereitstellung-von-meldungen-zum-disposi--src-0c4956f50b5981d8c718.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 5.5 vom 05.06.26
TECHNISCHE BESCHREIBUNG
Bereitstellung von Meldungen zum
Dispositionsfahrplan und Ausfall/
Teilausfall gem. TAF/TAP TSI
TAF/TAP PathDetails message
TAF/TAP PathSectionNotification message

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
2 Schnittstellenbeschreibung 3
2.1 Antrag auf Meldungsaustausch 3
3 Beschreibung der Meldungen 4
3.1 Meldungsinhalt 4
3.1.1 Zusätzliche Hinweise für Path Details message 4
3.2 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern 4
3.3 Meldungsaufbau 6
3.3.1 Path Details Message 7
3.3.2 Path Section Notification Message 12
4 Rahmenbedingungen 15
5 Ansprechpartner und Impressum 16
Änderungsverfolgung
Datum Änderung
03.04.2023 • Ersterstellung
19.04.2023 • Fehlerkorrektur, keine fachliche Änderung
03.07.2023 • Anpassung Datum Produktivsetzung, Hinweise TAF/TAP-Identifier, Rahmenbedin-
gung (Gültigkeit heutiger Verfahren)
18.07.2023 • Hinweise zu PathSectionNotification und Identifiern
13.12.2023 • Hinweise zu Soll-Zeiten, Anstoßpunkte PathDetails message und Abdeckungsbe-
reich Path-Objekt
• Umstellung DB Netz AG auf DB InfraGO AG
08.04.2024 • Anpassung Datum Produktivsetzung, StartDateTime
• Aufnahme NetworkSpecificParameter(NSP), ResponsibleRU, ResponsibleIM
• Wegfall TrainActivity
13.05.2024 • Anpassung Element Time von Regel-Soll auf Dispo-Zeit auf Basis europ. Best-
Practice
03.07.2024 • Aufnahme zusätzlicher xsd-Version 3.4.1.0
• Anpassung Beschreibung NSP Tagesfahrplan-ID
• Aufnahme weiterer Hinweise zu Meldungsinhalten und Anstoßpunkten
21.08.2024 • Ergänzung Hinweise zu Durchfahrtskennung in PathDetails message
20.09.2024 • Anpassung Nutzungsbeginn TAF/TAP-Identifier auf 12/2026
• Aufnahme NSP für Regel-Soll (ReferencedLocationDateTime)
28.10.2024 • Entfall Testhinweis auf Antragsformular
27.03.2025 • Ansprechpartner Produktmanagement
• Anpassung Datum Produktivsetzung TTT auf Basis OTN
04.06.2025 • Änderung Antragsstellung Meldungsaustausch
29.09.2025 • Hinweis zu verwendbaren XSD-Versionen in Meldungsaufbau
11.02.2026 • Ergänzende Hinweise zum Umgang mit TTT-Identifiern und Trigger Versand Path
Details message
• Ergänzung NetworkSpecificParameters in PathDetails message
23.02.2026 • Korrektur Schaubild Systemverhalten Umleitungen (PathDetails msg)
22.04.2026 • Änderung CompanyCode zu OrganisationCode, Hinweis zu Related Identifier
05.06.2026 • Anpassung PrimaryLocationName
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
3.1 Meldungsinhalt
Die Meldungsinhalte entsprechen den europäischen Vorgaben. Eine detaillierte Beschreibung
findet sich im europäischen „TAP TSI and TAF TSI Sector Handbook for the Communication
between Railway Undertakings and Infrastructure Managers (RU/IM Telematics Sector Hand-
book)“ bzw. den jeweiligen Folgedokumenten. Die Dokumente werden von der Joint Sector
Group und der European Railway Agency (ERA) auf ihrer Website veröffentlicht.
Die in den Meldungen bei DB InfraGO verwendeten Elemente sowie weitere meldungsspezifi-
sche Angaben sind im Folgenden beschrieben.
Die TAF/TAP werden wahlweise gemäß TAF/TAP TSI Meldungsschema („TAF TSI XSD
Schema“) Version 3.0.2.0 oder Version 3.4.1.0 bereitgestellt. Die europäischen Meldungssche-
mata sind auf den Websites der Joint Sector Group (JSG) unter http://taf-jsg.info/?page_id=172
veröffentlicht. Auf der angegebenen Internetseite gelangt man durch einen Klick auf den Link
am Textende auf den Ablageort der Meldungsschemata. Die untenstehende tabellarische Dar-
stellung des Meldungsaufbaus beruht auf Version 3.0.2.0. Etwaige Unterschiede im Aufbau der
beiden Versionen haben keine Auswirkung auf den fachlichen Inhalt, welcher in den Feldern der
Version 3.4.1.0 analog zur Version 3.0.2.0 ist.
In der Path Details Message werden Durchfahrten in beiden Versionen unterschiedlich angege-
ben, da in der Zeit dazwischen eine neue Durchfahrtskennung aufgenommen wurde. Details
dazu finden sich im untenstehenden Meldungsaufbau.
Es ist zu beachten, dass im europäischen Meldungsschema eine Vielzahl von Datenfeldern in
den Meldungen optional sind. Hintergrund ist, dass die Meldungen für möglichst viele Ge-
schäftsvorfälle der verschiedenen Unternehmen in der EU nutzbar sein sollen. Hierdurch ist be-
dingt, dass solche „xsd-optionalen-Felder“ im Datenaustausch zwischen einzelnen Unterneh-
men benötigt werden, also dort verpflichtend sind. So gibt es auch im Meldungsaustausch mit
der DB InfraGO AG einzelne solcher Felder, die in den untenstehenden Beschreibungen der
Meldungen enthalten sind. Das Füllen weiterer Felder ist unkritisch, da diese bei Eingang der
Meldung beim Empfänger einfach ignoriert werden können.
3.1.1 Zusätzliche Hinweise für Path Details message
Entsprechend europäischer Best-Practice werden in der PathDetails message die Dispositions-
fahrplanzeiten („Dispo-Soll“) ausgegeben. Eine Angabe des Regel-Soll ist europäisch nicht vor-
gesehen. Im Dispositionsfahrplan sind wie auch beim Regel-Soll in einzelnen Fällen negative
Zeitsprünge möglich. Insgesamt sind im Dispositionsfahrplan jedoch mit weniger negativen Zeit-
sprüngen zu rechnen als im Regel-Soll.
Ebenfalls ist es in einzelnen Fällen möglich, dass eine PathDetails message für einen ursprüng-
lich geplanten und dann wieder ausgelegten Zug gesendet wird. In so einem Fall würde die ent-
sprechende PathDetails message mit dem Status „gelöscht“ (MessageStatus 3 = deleted) ver-
sandt.
3.2 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern
Die volle Einführung der TAF/TAP-Objekte (ReferenceTrain und Path) mit den dazugehörigen
Identifikatoren (ReferenceTrainID und PathID) ist für den Bereich Betrieb der DB InfraGO für
12/2026 geplant. Sie kommen zusätzlich zum OTN-Identifier (Zugnummer+Betriebstag) zum Ein-
satz, welche bis dahin die einzige Identifikation des Zuges darstellt. Diese Zeitachse erfolgt in
Abstimmung mit den Planungen bei der Fahrplanung/Trassenanmeldung. Die Darstellung der
Identifierstrukturen in den untenstehenden Meldungsbeschreibungen ist demnach bis dahin nur
nachrichtlich.
4

## Seite 5

Bis 12/2026 wird die Path Details Message auf Basis der Zugnummer/OTN-Identifier für den ge-
samten Laufweg des Zuges auf dem Gebiet der DB InfraGO gesendet werden (analog zum Ta-
gesfahrplan). Ab 12/2026 wird der Path für das Gebiet der DB InfraGO übermittelt. Konkret wer-
den ausländische Abschnitte zwischen der Netzgrenze und im Ausland liegender Fahrplankon-
struktionsgrenzen nicht übermittelt. Dies ist ein Unterschied zur PathDetails message aus dem
Bereich Fahrplanung der DB InfraGO AG und darin begründet, dass die PathDetails aus dem
Betrieb die aktuelle dispositive Planung des Zuges abbildet. Diese Information kann DB InfraGO
für Streckenabschnitte unter der dispositiven Verwaltung anderer EIU jedoch nicht gesichert wei-
tergeben, da sie ihr selbst teils nicht oder nicht aktuell vorliegt. Informationen zur aktuellen dispo-
sitiven Planung müssen vom jeweiligen zuständigen EIU bezogen werden.
Anteile inländischer EIU werden der Durchgängigkeit halber übermittelt, sofern die Path-Kon-
struktion dort durch DB InfraGO erfolgt.
Analog dazu bezieht sich auch die Path Section Notification Message bis 12/2026 auf den ge-
samten Laufweg des Zuges auf dem Gebiet der DB InfraGO und ab 12/2026 auf den jeweiligen
Path („Trassenabschnitt“).
Bei Meldungen, die von DB InfraGO versendet werden, sind stets die aktuelle ReferenceTrainID,
PathID und OTN-Identifier angegeben. Falls vorhanden werden andere zugehörige Refe-
renceTrainIDs und PathIDs zusätzlich in der Struktur für „Related-Identifers“ übermittelt. Dies ist
in den untenstehenden Meldungsbeschreibungen aufgeführt. Zugehörige Identifier werden ge-
nutzt, um anzugeben, dass zwei Objekte mit demselben Zuglauf in Verbindung stehen. Auch
nach 12/2026 werden die bei DB InfraGO vergebenen Trassen/Path in der Regel den gesamten
Laufweg des Zuges auf dem Gebiet der DB InfraGO umfassen. Ausnahmen können sich plane-
risch zB ergeben, wenn der Zug aus dem DB InfraGO Gebiet aus- und wieder einbricht (dann
zwei Trassen/Path für die Abschnitte bei DB InfraGO). Für Details vgl. die TAF/TAP-Dokumente
des Bereichs Fahrplanung der DB InfraGO AG. Während der dispositiven Erstellung eines neuen
Paths kann es aufgrund des schrittweisen Vorgehens (Stafette) dazu kommen, dass verschie-
dene Regionalbereiche im Bereich der DB InfraGO AG einem Zuglauf jeweils eigene Paths zu-
weisen müssen. Für die Durchführung der Zugfahrt ist dies unerheblich, da diese Paths direkt
aneinander anschließen.
Im Betrieb entstehen zusätzliche Trassen/Path-Objekte vor allem in den folgenden Fällen:
• Umleitungen (2. Path beginnt am ersten Punkt der Umleitungsstrecke und endet am Zielort
auf dem Gebiet der DB InfraGO bzw. der Ausbruchsbetriebsstelle)
• Bei Trennungen des Zuglaufs (zB Busersatzverkehr mit Einsatz eines zweiten Zugs, um
die Fahrgäste am Zielort des Busverkehrs wieder aufzunehmen) wird diesem zweiten Zug
ein neuer Path zugewiesen.
• Bei Doppelführungen wird dem nicht kuppelbaren, unplanmäßig selbstständig verkehren-
dem Zugteil ein neuer Path zugewiesen.
Neue Path-Objekte werden stets durch DB InfraGO erzeugt und die zugehörige Path-ID in den
TAF/TAP-Meldungen übermittelt.
Darüber hinaus entstehen zusätzliche ReferenceTrain-Objekte vor allem in den folgenden Fällen:
• Bei Trennung des Zuglaufs (zB Busersatzverkehr) wie oben beschrieben, wird dem zweiten
Zug eine neue ReferenceTrainID zugewiesen
• Bei Doppelführungen für den ungeplant unabhängig verkehrenden Zugteil
• Bei Ersatzzügen, sofern nicht einfach ein Tausch von Rollmaterial unter Beibehaltung der
Trassencharakteristika und der Zugnummer durch das EVU erfolgt. Dann wird dies gemäß
europäischen Vorgaben als Änderung der Zugcharakteristik behandelt.
Neue ReferenceTrain-Objekte werden nur im Rahmen des akuten Störfallgeschehens durch DB
InfraGO erzeugt, ansonsten obliegt dies den EVU. Die neu erzeugte ReferenceTrainID trägt den
5

## Seite 6

OrganisationCode der DB InfraGO (zB TR/0080/D12345678ABC/[Telefonnummer entfernt]) und wird
von DB InfraGO in den TAF/TAP-Meldungen übermittelt.
Die vorherigen ReferenceTrain-ID und Path-ID auf den tagescharfen Path wird als zugehörige
Identifier (Related Identifier) als Referenz mit übertragen. Mögliche Related Identifier auf den
Jahres-ReferenceTrain bzw. Path aus dem Bereich Fahrplanung werden aus den dortigen Sys-
temen übertragen und sind nicht Teil der Lieferung aus dem Betrieb. Related Identifier werden
genutzt, um anzugeben, dass zwei Objekte mit demselben Zuglauf in Verbindung stehen (zB bei
Doppelführungen, dispositiver Umleitung).
Die beschriebene Handhabung der Identifier ergibt sich aus den europäischen Vorgaben, insbe-
sondere TAF/TAP Sector Handbook, Annex 13 (http://taf-jsg.info/?page_id=280).
3.3 Meldungsaufbau
Im Folgenden sind die von der DB InfraGO AG zur Verfügung gestellte Datenfelder in den jewei-
ligen Meldungen aufgeführt. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Mel-
dungsschema (xsd) optional sind.
Ferner werden sogenannte NetworkSpecificParameter verwendet. Dies sind im europäischen
TAF/TAP-Schema vorgesehen flexible Felder, welche für netzwerk-spezifische Inhalte verwendet
werden können. DB InfraGO nutzt diese in der betrieblichen PathDetails message um zusätzliche
Informationen bereitzustellen, die über die europäischen Inhalte hinausgehen und von einigen
Abnehmern benötigt werden. Abnehmer, welche diese Informationen nicht benötigen können
diese Felder ignorieren.
Legende für die folgenden Tabellen:
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
6

## Seite 7

3.3.1 Path Details Message
PathDetailsMessage
ME E1 E2 E3 E4 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 2003
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0
MessageTypeVersion 3.0.2.0
bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2022-10-17T12:39:51+02:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des Ele- fraGO immer "50". Kann vom Empfänger ausgewer-
50
ments "Sender") tet werden, falls erkannt werden muss, aus welchem
Bereich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
AdministrativeContactInformation -
Name DB InfraGO
Identifiers - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die ak-
PlannedTransportIdentifiers -
tuell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann
StartDate 2023-03-17 bei Abfahrt im Ausland abweichend vom Betriebstag
bei DB InfraGO sein)
ObjectType PA PA = Path
6
2
0 OrganisationCode des Ersteller-EIU (hier immer DB
2 Company 0080
/2 InfraGO)
1
b a Core ---XYZ456789 Kernelement
r
e
ifitn V
ze
a
u
ri
g
a
t
n
e
t
n
e
T
d
r
e
a
s
s s
P
e
a
n
th
/P
.
a
B
t
e
h
i
i
i
s
m
t d
D
a
B
s
I
e
n
r
f
s
r
t
a
e
G
Z
O
e i
B
ch
e
e
tr
n
ie
d
b
e
e
r
r
V
-
ari-
e
d ant stets eine Zahl. Bei Erzeugung in der Fahrpla-
P-I Variant 02
nung der DB InfraGO, ist es ein Buchstabe. Das
A zweite Zeichen kann jeweils Zahl oder Buchstabe
T
/F sein.
A
T
r
TimetableYear 2023 Fahrplanjahr für diese Trasse
e
d
g StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
n
u z Falls vorhanden: Weitere zugehörige ReferenceTrai-
tu
RelatedPlannedTransportIdentifiers - nIDs und PathIDs außer den aktuellen unter "Plan-
N
nedTransportIdentifiers".
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
Grund der Referenzierung von RelatedPlan-
nedTransportIdentifiers. In der Disposion immer
ReasonOfReference 5001
5001 (= Referenzierung auf Basis betrieblicher Be-
lange/Störfällen)
7

## Seite 8

PathDetailsMessage
MessageStatus 1 new/Neu
TypeOfRequest 3 immer "3=Modification/Modifikation"
TypeOfInformation 22 immer "22=booked/gebucht"
PathInformation -
Wiederholende Struktur, mindestens zwei Betriebs-
PlannedJourneyLocation -
stellen
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationSubsidiaryCode 301 Betriebliche Gleisbezeichnung
LocationSubsidiaryCode > Loca- Immer 01 = Track
01
tionSubsidiaryTypeCode Attribut von LocationSubsidiaryTypeCode
Unternehmen, welches den Code generiert hat (hier
AllocationCompany 0080
DB InfraGO)
ALA=Actual Location Arrival (ge-
plante Ankunftszeit) Keine Verwendung anderer Codes im Betrieb.
ALD=Actual Location Departure Angabe geplante Durchfahrtszeit gem. europ. Vor-
TimingAtLocation (geplante Abfahrtszeit) gabe:
Nur xsd Version 3.4.1.0: xsd Version 3.0.2.0: Zeitpunkt=ALA=ALD;
ART=Actual Run Through xsd Version 3.4.1.0: Zeitpunkt=ART;
(geplante Durchfahrtszeit)
Timing -
Zeit (ohne Datum) gemäß aktueller Disposition
Time 06:40:54+02:00
("Dispo-Soll")
Offset 0 Offset relativ zum Betriebstag
Sollzeit gemäß aktueller Disposition ("Dispo-Soll");
berücksichtigt zB dispositive Umleitungen oder Einle-
BookedLocationDateTime 2022-10-17T06:40:54+02:00
gung von Zusatzhalten, jedoch keine Verspätungen
(diese werden in der Prognose abgebildet)
Für die Zugfahrt verantwortliches EVU (durchführen-
des EVU), kein etwaiger Subunternehmer. Angabe
ResponsibleRU 9999 durch EVU bei Trassenanmeldung gemäß TAF/TAP
TSI ab 12/2026, bis dahin wird hier übergangsweise
der Besteller der Trasse eingetragen.
ResponsibleIM 0080 Verantwortliches EIU
OperationalTrainNumber 4711 Zugnummer
Der Wert im Feld "Name" ist in dieser
Struktur zur Angabe weiterer Informationen.
Struktur nicht als Beispiel zu verste-
Nutzung hier zur Angabe des Regel-Solls an einer
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im
Betriebsstelle zusätzlich zur Sollzeit gem. aktueller
Feld "Value" ist hingegen ein Bei-
Disposition im Element "BookedLocationDateTime".
spiel.
Name ReferencedLocationDateTime_ALA Regel-Soll Ankunft
Ankunftszeit gemäß Regel-Soll.
Bei Umleitungen (kein Regel-Soll vorhanden) wird
das
Feld auf der Umleitungsstrecke mit dem ermittelten
Umleitungsfahrplan (zu Beginn der Umleitung ermit-
teltes
Soll) gefüllt.
Value 2022-10-17T06:40:54+02:00
Gefüllt bei Ankünften und Durchfahrten. Bei Durch-
fahrt identischer Wert wie ReferencedLocationDa-
teTime_ALA und ReferencedLocationDa-
teTime_ART. Dopplung damit die unterschiedlichen
Logiken für Durchfahrten aus XSD-Version 3.0.2.0
und 3.4.1.0 (siehe auch Element "TimingAtLocation")
abgeildet werden können.
Der Wert im Feld "Name" ist in dieser
Struktur zur Angabe weiterer Informationen.
Struktur nicht als Beispiel zu verste-
Nutzung hier zur Angabe des Regel-Solls an einer
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im
Betriebsstelle zusätzlich zur Sollzeit gem. aktueller
Feld "Value" ist hingegen ein Bei-
Disposition im Element "BookedLocationDateTime".
spiel.
Name ReferencedLocationDateTime_ALD Regel-Soll Abfahrt
8

## Seite 9

PathDetailsMessage
Abfahrtszeit gemäß Regel-Soll.
Bei Umleitungen (kein Regel-Soll vorhanden) wird
das
Feld auf der Umleitungsstrecke mit dem ermittelten
Umleitungsfahrplan (zu Beginn der Umleitung ermit-
Value 2022-10-17T06:40:54+02:00
teltes
Soll) gefüllt.
Gefüllt bei Abfahrten und Durchfahrten. Siehe Erläu-
terungen bei ReferencedLocationDateTime_ALA
bzw. Regel-Soll Ankunft.
Der Wert im Feld "Name" ist in dieser
Struktur zur Angabe weiterer Informationen.
Struktur nicht als Beispiel zu verste-
Nutzung hier zur Angabe des Regel-Solls an einer
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im
Betriebsstelle zusätzlich zur Sollzeit gem. aktueller
Feld "Value" ist hingegen ein Bei-
Disposition im Element "BookedLocationDateTime".
spiel.
Name ReferencedLocationDateTime_ART Regel-Soll Durchfahrt
Durchfahrtszeit gemäß Regel-Soll.
Bei Umleitungen (kein Regel-Soll vorhanden) wird
das
Value 2022-10-17T06:40:54+02:00 Feld auf der Umleitungsstrecke mit dem ermittelten
Umleitungsfahrplan (zu Beginn der Umleitung ermit-
teltes
Soll) gefüllt.
Gem. europ. Schema nur in xsd Version 3.4.1.0;
Im Betrieb Verwendung von:
01 = origin (Start-/ Einbruchsbetriebsstelle)
JourneyLocationTypeCode 01
02 = intermediate (Dazwischen liegende Betriebs-
stelle)
03 = destination (Ziel-/ Ausbruchsbetriebsstelle)
PlannedCalendar -
ValidityPeriod -
Startpunkt des Paths (=erste Abfahrt/Einbruch des
StartDateTime 2022-10-17T06:40:54+02:00 Zugs auf Gebiet der DB InfraGO) gem. aktueller Dis-
position ("Dispo-Soll", BookedLocationDateTime)
Struktur zur Angabe weiterer Informationen.
Der Wert im Feld "Name" ist in dieser Nutzung hier zur Versorgung des Train Information
Struktur nicht als Beispiel zu verste- System (TIS) der RailNet Europe (RNE) gemäß in-
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im ternationaler Abstimmung mit RNE und anderen EIU.
Feld "Value" ist hingegen ein Bei- Diese Felder können bei Bedarf auch von anderen
spiel. Empfängern genutzt werden.
Element auf Kundenwunsch zu-/abschaltbar.
Referenz-Zugnummer für RNE TIS
Name ReferenceOperationalTrainNumber (bei DB InfraGO stets identisch zur OperationalTrain-
Number)
Value 4711
Struktur zur Angabe weiterer Informationen.
Der Wert im Feld "Name" ist in dieser Nutzung hier zur Versorgung des Train Information
Struktur nicht als Beispiel zu verste- System (TIS) der RailNet Europe (RNE) gemäß in-
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im ternationaler Abstimmung mit RNE und anderen EIU.
Feld "Value" ist hingegen ein Bei- Diese Felder können bei Bedarf auch von anderen
spiel. Empfängern genutzt werden.
Element auf Kundenwunsch zu-/abschaltbar.
Name TrainType Art des Zuges (Fahrgastverkehr, Güterverkehr, etc.)
Value 1
Der Wert im Feld "Name" ist in dieser Struktur zur Angabe weiterer Informationen.
Struktur nicht als Beispiel zu verste- Nutzung hier zur Angabe der bei der DB InfraGO ge-
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im bräuchlichen Kundennummer für den Fall, dass
Feld "Value" ist hingegen ein Bei- diese von einem Abnehmer benötigt wird.
spiel. Element auf Kundenwunsch zu-/abschaltbar.
Name DBInfraGO-RUcustomerID Kundennummer des Bestellers
Value 12345
Der Wert im Feld "Name" ist in dieser Struktur zur Angabe weiterer Informationen.
Struktur nicht als Beispiel zu verste- Nutzung hier zur Angabe der bei der DB InfraGO ge-
NetworkSpecificParameter hen, sondern festgelegt. Der Wert im bräuchlichen Tagesfahrplan-ID für den Fall, dass
Feld "Value" ist hingegen ein Bei- diese von einem Abnehmer benötigt wird.
spiel. Element auf Kundenwunsch zu-/abschaltbar.
Name DBInfraGO-DailyTimetableID Tagesfahrplan-ID (fID)
9

## Seite 10

PathDetailsMessage
Aufbau anhand des Beispiels:
6789=Zugnummer
7=Ausgangsregionalbereich
Value 6789_7_20231217 20231217=Betriebstag gemäß Fahrplan (keine Än-
derung durch dispositive Anpassung des Abfahrtzeit-
punkts). Datum auf der ersten Betriebsstelle DB In-
fraGO oder ggf. im direkt angrenzenden Fremdnetz.
Die Meldung wird in den folgenden Fällen versandt:
 Initiale Erstellung des Tagesfahrplans bzw. nach 12/2026 des tagesscharfen Path-Objekts
(also der „Tages-Trasse“).
 Änderung des Laufwegs des Zuges. Dies sind Änderung der Abfolge der Betriebsstellen
z.B. durch Umleitung, Ausfall/Teilausfall oder Änderungen bei der Gleisbelegung in Be-
triebsstellen.
 Änderung der Haltepolitik (Ein-/Auslegen eines Halts) oder der Halteart (Umwandlung ei-
nes Betriebs- in einen Verkehrshalt)
 Dispositiv-geplante Änderungen der Halte-, Durchfahrts- oder Ankunfts-/Abfahrtszeiten
ohne Änderung des Laufwegs des Zuges.
Zusätzliche Auslöser des Meldungsversands, ergeben sich ab 12/2026 mit der Einführung der
europäischen Objekte (ReferenceTrain-ID und Path-ID). Diese beziehen sich auf Annex 13 des
europäische TAF/TAP Sector Handbook, welches auf der Homepage der Joint Sector Group
(http://taf-jsg.info/?page_id=172) verfügbar ist. Die Auslöser sind:
 Vergabe einer neuen ReferenceTrain-ID und Path-ID bei Doppelführungen und einlegen
eines Ersatzzuges:
 Teilung eines Zuglaufs (ggf. mit Busersatzverkehr):
10

## Seite 11

 Umleitungen:
Die neuen Identifier werden auf den betreffenden Streckenabschnitten dann auch in den übrigen
TAF/TAP-Meldungen (Prognose, Gleiswechsel, TCM/PTCM, etc.) verwendet.
Beachten sie hierzu bitte auch die Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Iden-
tifiern in dieser Technischen Beschreibung. Ferner ist die Verwendung der ReferenceTrain-ID
und Path-ID auch in den Videos zum betrieblichen Meldungsaustausch auf der TAF/TAP-Home-
page der DB InfraGO www.dbinfrago.com/taf-tap-tsi dargestellt (Kachel „Über TAF/TAP TSI“ >
Abschnitt 6. „TAF/TAP im Betrieb“).
Die Meldung wird bei Auftreten einer Änderung während der Zugfahrt wie auch bis zu drei Tage
vor Abfahrt des Zuges versandt. Je nach aktueller Arbeitslast in den Betriebszentralen, kann der
Versand der Meldung zeitverzögert erfolgen (vgl. auch Hinweise in Kap. 5).
11

## Seite 12

3.3.2 Path Section Notification Message
PathSectionNotificationMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 2501
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 be-
MessageTypeVersion 3.0.2.0
stellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+01:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut fraGO immer "50". Kann vom Empfänger ausgewertet
50
des Elements "Sender") werden, falls erkannt werden muss, aus welchem Be-
reich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
AdministrativeContactInformation -
Name DB InfraGO AG Immer "DB InfraGO AG"
Identifiers - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die aktu-
PlannedTransportIdentifiers -
ell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann bei
StartDate 2023-03-17 Abfahrt im Ausland abweichend vom Betriebstag bei
DB InfraGO sein)
6 ObjectType PA PA = Path
2
0
2 OrganisationCode des Ersteller-EIU (hier immer DB In-
/2
1
Company 0080
fraGO)
b
a Core ---XYZ456789 Kernelement
r
e
ifitn V
te
a
n
r i
T
a
r
n
a
t
s
e
s
d
e
e
n
s
/P
P
a
a
th
th
i
.
s
B
t
e
d
i
a
i
s
m
e
D
rs
B
te
I n
Z
f
e
ra
ic
G
h
O
en
B
d
e
e
t
r
r i
V
eb
a r
e
ia
rz
n
e
t
ug-
e
d Variant 02 stets eine Zahl. Bei Erzeugung in der Fahrplanung der
P-I
DB InfraGO, ist es ein Buchstabe. Das zweite Zeichen
A T kann jeweils Zahl oder Buchstabe sein.
/F
A TimetableYear 2023 Fahrplanjahr für diese Trasse
T
r
e StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
d
g
n Falls vorhanden: Weitere zugehörige ReferenceTrai-
u z RelatedPlannedTransportIdentifiers - nIDs und PathIDs außer den aktuellen unter "Plan-
tu
nedTransportIdentifiers".
N
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
Grund der Referenzierung von RelatedPlannedTrans-
ReasonOfReference 5001 portIdentifiers. In der Disposion immer 5001 (= Refe-
renzierung auf Basis betrieblicher Belange/Störfällen)
MessageStatus -
12

## Seite 13

PathSectionNotificationMessage
MessageStatus 1
TypeOfInformation 51 Immer "51" (path deactivated)
AffectedSection - Von Ausfall/Teilausfall betroffener Teil der Trasse
StartOfSection Beginn des Ausfalls/Teilausfalls
CountryCodeISO DE Ländercode
LocationPrimaryCode 10871 Code der Betriebsstelle
PrimaryLocationName Berlin Hauptbahnhof-Lehrter Bf Langname der Betriebsstelle
BookedLocationDateTime 2022-02-25T04:57:12+01:00 Sollzeit gemäß aktueller Disposition.
EndOfSection Ende des Ausfalls/Teilausfalls
CountryCodeISO DE Ländercode
LocationPrimaryCode 11005 Code der Betriebsstelle
PrimaryLocationName Berlin Gesundbrunnen Langname der Betriebsstelle
BookedLocationDateTime 2022-02-25T05:01:11+01:00 Sollzeit gemäß aktueller Disposition
OperationalTrainNumberIdentifier
OperationalTrainNumber 18907 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledTimeAtHandover 2022-02-25T04:57:12+01:00
gel-Soll
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledDateTimeAtTransfer 2022-02-25T05:27:54+01:00
gel-Soll
PlannedCalendar
ValidityPeriod
Startpunkt des Paths (=erste Abfahrt/Einbruch des
StartDateTime 2022-02-25T04:57:12+01:00 Zugs auf Gebiet der DB InfraGO) gem. aktueller Dispo-
sition ("Dispo-Soll", BookedLocationDateTime)
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledDateTimeAtTransfer 2022-02-25T05:27:54+01:00 gel-Soll. Dopplung mit gleichem Feld in "Operational-
TrainNumberIdentifier".
13

## Seite 14

Die Meldung wird in den folgenden Fällen versandt:
 Die Meldung wird bei Auftreten einer Änderung während der Zugfahrt wie auch bis zu drei
Tage vor Abfahrt des Zuges versandt. Je nach aktueller Arbeitslast in den Betriebszent-
ralen, kann der Versand der Meldung zeitverzögert erfolgen (vgl. auch Hinweise in Kap.
5).
 Auslegung eines oder mehrerer Trassenpunkte des geplanten Laufwegs des Zuges
(„Ausfall/Teilausfall“) durch das EIU nach Abstimmung mit dem EVU. Also immer dann,
wenn entweder eine einzelne oder mehrere Betriebsstellen am Anfang oder Ende des
geplanten Laufwegs entfallen oder der Zug überhaupt nicht verkehrt und komplett ausfällt.
Das Auslegen einzelner Halte auf dem Laufweg (Durchfahrt statt Halt) führt hingegen nicht
zum Versand einer Path Section Notification Message. Über so einen Fall wird das EVU
mittels einer Path Details Message informiert.
 Ein Versand erfolgt auch in den bei der PathDetails message erläuterten Fällen des Stö-
rungsmanagements
Hinweise:
 Teilausfall: Gemäß europäischer Vorgabe beginnt/endet der in der Meldung angegebene
ausfallende Abschnitt an der letzten/ersten befahrenen Betriebsstelle.
Endet ein Zug also beispielweise vorzeitig in einer Betriebsstelle D, so findet diese sich
als Beginn des ausfallenden Abschnitts (StartOfSection) in der Meldung. Das zugehörige
Element BookedLocationDateTime enthält dann Zeit der nicht mehr stattfindenden Ab-
fahrt von Betriebsstelle D.
Beginnt ein Zug später in einer Betriebsstelle D statt A, so ist Betriebsstelle D das Ende
des ausfallenden Abschnitts (EndOfSection) in der Meldung. Das zugehörige Element
BookedLocationDateTime enthält dann Zeit der nicht mehr stattfindenden Ankunft in Be-
triebsstelle D.
14

## Seite 15

4 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden grundsätzlichen Rahmenbedingungen
zu beachten
 Der konkrete individuelle Bereitstellungszeitpunkt der Meldungen für einen Kunden wird
mit diesem im Rahmen der Bearbeitung der Bestellung abgesprochen.
 Die Meldungen werden bis bis vsl. Dezember 2026 (Fahrplanwechsel) ohne TAF/TAP
Identifier versandt.
 Der Versand der Meldungen führt zu keiner Änderung der heutigen Verfahren der Abstim-
mung zwischen den Betriebszentralen und den EVU über den Zug betreffende Maßnah-
men wie z.B. Umleitungen, (Teil-)Ausfälle, etc.
 Der Versand einer Path Details oder Path Section Notification Message beruht in man-
chen Fällen auf einer manuellen Eingabe in der Disposition (zB Eingabe einer Umleitung).
Insbesondere in den ersten Jahren der Produktivsetzung kann es hier zu einer zeitverzö-
gerten Bereitstellung der Meldungen kommen. Grund ist, dass die Regelung des Verkehrs
im Sinne eines stabilen Betriebs Vorrang vor der Eingabe von Daten in die Systeme ge-
nießt.
 Der Datenabnehmer benötigt eine statische im Internet sichtbare IP-Adresse oder einen
per öffentlichen DNS auflösbaren Hostnamen. Der Port ist standardmäßig 443 (https).
 Der Empfang der Meldungen wird gemäß den Spezifikationen des Common Interface vom
Empfangssystem beim Kunden quittiert.
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).
 Eine direkte Weiterleitung der Meldungen an Dritte ist nicht zugelassen.
15

## Seite 16

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
16
