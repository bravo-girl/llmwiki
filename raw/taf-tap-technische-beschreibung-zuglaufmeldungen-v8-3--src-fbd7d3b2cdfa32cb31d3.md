# TAF/TAP Technische Beschreibung Zuglaufmeldungen_v8.3

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-db-infrago-ag-an-evu-11089210`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12598316/ea323f8ad1e8f9228f0d4fac43e802b2/Technische-Beschreibung-Zuglaufmeldung-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12598316/ea323f8ad1e8f9228f0d4fac43e802b2/Technische-Beschreibung-Zuglaufmeldung-data.pdf)
- Quellen-Schlüssel: `src-fbd7d3b2cdfa32cb31d3`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-zuglaufmeldungen-v8-3--src-fbd7d3b2cdfa32cb31d3.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 8.3 vom 05.06.26
TECHNISCHE BESCHREIBUNG
Bereitstellung von Meldungen zum Zug-
lauf gem. TAF/TAP TSI
TAF/TAP RunningInformation message
TAF/TAP RunningForecast message
TAF/TAP RunningInterruption message
TAF/TAP TrainDealyCause message
TAF/TAP ChangeOfTrack message

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
2 Schnittstellenbeschreibung 3
2.1 Antrag auf Meldungsaustausch 3
3 Beschreibung der Meldungen 4
3.1 Meldungsinhalt 4
3.2 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern 4
3.3 Meldungsaufbau 5
3.3.1 Train Running Information Message 6
3.3.2 Train Running Forecast Message 8
3.3.3 Train Delay Cause Message 10
3.3.4 Change of Track Message 13
3.3.5 Train Running Interruption Message 15
4 Rahmenbedingungen 17
5 Ansprechpartner und Impressum 18
Änderungsverfolgung
Datum Änderung
14.10.2021 • Ersterstellung
10.12.2021 • Behebung textueller Fehler, keine inhaltliche Änderung
21.03.2022 • Anpassung Zeitachse
• Aufnahme CI_InstanceNumber
22.07.2022 • Information zur Nutzung TAF/TAP-Identifier
03.04.2023 • Aufnahme Informationen zu TAF/TAP-Identifiern
19.04.2023 • Fehlerkorrektur, keine fachliche Änderung
04.07.2023 • Anpassung Datum Produktivsetzung, Hinweise TAF/TAP-Identifier
13.12.2023 • Hinweise zu Soll-Zeiten, Schwellwert Versand Prognosemeldung
• Wegfall führender Nullen im Element OTN (Zugnummer)
• Umstellung DB Netz AG auf DB InfraGO AG
08.04.2024 • Anpassung Datum Produktivsetzung und Gleisangaben in Meldungen
• Schärfung Erläuterung zu optionalen Feldern in Meldungsschema
03.07.2024 • Aufnahme zusätzlicher xsd-Version 3.4.1.0
20.09.2024 • Anpassung Nutzungsbeginn TAF/TAP-Identifier auf 12/2026
10.10.2024 • Ergänzung SenderReference in TrainDelayCause
28.10.2024 • Entfall Testhinweis auf Antragsformular
• Hinweis zu Gebrauch MessageStatus in TrainDelayCause
27.03.2025 • Ansprechpartner Produktmanagement
• Anpassung Datum Produktivsetzung TTT auf Basis OTN
04.06.2025 • Änderung Antragsstellung Meldungsaustausch
29.09.2025 • Hinweis zu verwendbaren XSD-Versionen in Meldungsaufbau
22.04.2026 • Hinweis TrainRunningInformation message bei Umleitungen
• Änderung Begrifflichkeit CompanyCode zu OrganisationCode
• Hinweis zu Related Identifier
05.06.2026 • Anpassung Location, PrimaryLocationName
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
Die DB InfraGO AG bietet für die Informationen zum Zuglauf die folgenden Meldungen gemäß
TAF/TAP TSI an:
 Zugstandort (Train Running Information message)
 Zuglaufprognose (Train Running Forecast message)
 Zusatzverspätung mit Begründung (Delay Cause message)
 Gleiswechsel (Change of Track message)
 Zuglaufunterbrechung (Train Running Interruption message)
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
Es ist zu beachten, dass im europäischen Meldungsschema eine Vielzahl von Datenfeldern in
den Meldungen optional sind. Hintergrund ist, dass die Meldungen für möglichst viele Ge-
schäftsfälle der verschiedenen Unternehmen in der EU nutzbar sein sollen. Hierdurch ist be-
dingt, dass solche „xsd-optionalen-Felder“ im Datenaustausch zwischen einzelnen Unterneh-
men benötigt werden, also dort verpflichtend sind. So gibt es auch im Meldungsaustausch mit
der DB InfraGO AG einzelne solcher Felder, die in den untenstehenden Beschreibungen der
Meldungen enthalten sind. Das Füllen weiterer Felder ist unkritisch, da diese bei Eingang der
Meldung beim Empfänger einfach ignoriert werden können.
3.2 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern
Die volle Einführung der TAF/TAP-Objekte (ReferenceTrain und Path) mit den dazugehörigen
Identifikatoren (ReferenceTrainID und PathID) ist für den Bereich Betrieb der DB InfraGO für
12/2026 geplant. Sie kommen zusätzlich zum OTN-Identifier (Zugnummer+Betriebstag) zum Ein-
satz, welche bis dahin die einzige Identifikation des Zuges darstellt. Diese Zeitachse erfolgt in
Abstimmung mit den Planungen bei der Fahrplanung/Trassenanmeldung. Die Darstellung der
Identifierstrukturen in den untenstehenden Meldungsbeschreibungen ist demnach bis dahin nur
nachrichtlich.
Bei Meldungen, die von DB InfraGO versendet werden, sind stets die aktuelle ReferenceTrainID,
PathID und OTN-Identifier angegeben. Falls vorhanden, werden vorherige ReferenceTrainID und
PathID auf den tagescharfen Path wird als zugehörige Identifier (Related Identifier) als Referenz
mit übertragen. Mögliche Related Identifier auf den Jahres-ReferenceTrain bzw. Path aus dem
Bereich Fahrplanung werden aus den dortigen Systemen übertragen und sind nicht Teil der Lie-
ferung aus dem Betrieb. Dies ist in den untenstehenden Meldungsbeschreibungen aufgeführt.
Related Identifier werden genutzt, um anzugeben, dass zwei Objekte mit dem selben Zuglauf in
Verbindung stehen (zB bei Doppelführungen, dispositiver Umleitung). Die beschriebene Handha-
bung der Identifier ergibt sich aus den europäischen Vorgaben, insbesondere TAF/TAP Sector
Handbook, Annex 13 (http://taf-jsg.info/?page_id=280). Weitere Informationen finden sich auch
in der „Technischen Beschreibung zur Bereitstellung von Meldungen zum Dispositionsfahrplan
und Ausfall/ Teilausfall“, welche analog zu der vorliegenden auf der TAF/TAP-webpage der DB
InfraGO verfügbar ist.
Auch nach 12/2026 werden die bei DB InfraGO vergebenen Trassen/Path in der Regel den ge-
samten Laufweg des Zuges auf dem Gebiet der DB InfraGO umfassen. Ausnahmen können sich
planerisch zB ergeben, wenn der Zug aus dem DB InfraGO Gebiet aus- und wieder einbricht
(dann zwei Trassen/Path für die Abschnitte bei DB InfraGO). Für Details vgl. die TAF/TAP-
4

## Seite 5

Dokumente des Bereichs Fahrplanung der DB InfraGO AG. Während der dispositiven Erstellung
eines neuen Paths kann es aufgrund des schrittweisen Vorgehens (Stafette) dazu kommen, dass
verschiedene Regionalbereiche im Bereich der DB InfraGO AG einem Zuglauf jeweils eigene
Paths zuweisen müssen. Für die Durchführung der Zugfahrt ist dies unerheblich, da diese Paths
direkt aneinander anschließen.
3.3 Meldungsaufbau
Im Folgenden sind die von der DB InfraGO AG zur Verfügung gestellte Datenfelder in den jewei-
ligen Meldungen aufgeführt. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Mel-
dungsschema (xsd) optional sind.
Legende für die folgenden Tabellen:
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
5

## Seite 6

3.3.1 Train Running Information Message
TrainRunningInformationMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4005
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 be-
MessageTypeVersion 3.0.2.0
stellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+1:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des fraGO immer "50". Kann vom Empfänger ausgewertet
50
Elements "Sender") werden, falls erkannt werden muss, aus welchem Be-
reich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
MessageStatus -
MessageStatus 1
TrainOperationalIdentification - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die aktu-
TransportOperationalIdentifiers -
ell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann bei
6
StartDate 2023-03-17 Abfahrt im Ausland abweichend vom Betriebstag bei DB
2 InfraGO sein)
0
2
/2
1 ObjectType PA PA = Path
b
a OrganisationCode des Ersteller-EIU (hier immer DB In-
r e
Company 0080
fraGO)
ifitn
Core ---XYZ456789 Kernelement
e
d
P A
-I V
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
u
s
g
te
-
ts
T Variant 02 eine Zahl. Bei Erzeugung in der Fahrplanung der DB In-
/F
A fraGO, ist es ein Buchstabe. Das zweite Zeichen kann
T jeweils Zahl oder Buchstabe sein.
r
e
d
g
TimetableYear 2023 Fahrplanjahr für diese Trasse
n
u StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
z
tu
N Falls vorhanden: Weitere zugehörige ReferenceTrai-
RelatedTransportOperationalIdentifi-
- nIDs und PathIDs außer den aktuellen unter "Plan-
ers
nedTransportIdentifiers".
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00
gel-Soll
6

## Seite 7

TrainRunningInformationMessage
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00
gel-Soll
TrainLocationReport - Betriebsstelle, für die diese Meldung gilt
Location
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationSubsidiaryIdentification
LocationSubsidiaryCode 301 Betriebliche Gleisbezeichnung
LocationSubsidiaryCode >
Immer 1 = Track
LocationSubsidiaryType- 1
Attribut von LocationSubsidiaryTypeCode
Code
AllocationCompany 0080 Unternehmen, welches den Code generiert hat
LocationDateTime 2020-03-24T09:41:39+1:00 Ist-Zeit
TrainLocationStatus 04 Zuglaufpunktstatus
Sollzeit gemäß aktueller Disposition ("Dispo-Soll"); be-
rücksichtigt zB dispositive Umleitungen oder Einlegung
BookedLocationDateTime 2020-03-24T09:39:39+1:00
von Zusatzhalten, jedoch keine Verspätungen (diese
werden in der Prognose abgebildet)
Sollzeit gemäß Regel-Soll (Abrechnungsrelevant)
Bei Umleitungen (kein Regel-Soll vorhanden) wird das
ReferencedLocationDateTime 2020-03-24T09:31:39+1:00 Feld auf der Umleitungsstrecke mit dem ermittelten Um-
leitungsfahrplan (zu Beginn der Umleitung ermitteltes
Soll) gefüllt.
TrainDelay
AgainstReferenced +0010 Delta-t gegenüber ReferencedLocationDateTime
Ausbruchsbetriebsstelle bei grenzüberschreitenden Zü-
TransferPoint - gen gem. Dispositionsfahrplan (reflektiert mögliche Än-
derung durch Umleitung)
CountryCodeISO DE Ländercode
LocationPrimaryCode 18271 Code der Betriebsstelle
PrimaryLocationName Passau DB-Grenze Langname der Betriebsstelle
TransfereeIM -
Betreiber der benachbarten Infrastruktur bei grenzüber-
TransfereeIM 9999
schreitenden Zügen
Die Meldung erfolgt bei Ankunft, Ab- oder Durchfahrt in allen Meldepunkten.
Sofern Züge umgeleitet werden und die Umleitungsstrecke bereits befahren bevor ein Fahrplan
technisch in den Systemen verfügbar ist, werden die folgenden Felder in dieser Zeit nicht befüllt:
o BookedLocationDateTime
o ReferencedLocationDateTime
o TrainDelay > AgainstReferenced
7

## Seite 8

3.3.2 Train Running Forecast Message
TrainRunningForecastMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4004
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0
MessageTypeVersion 3.0.2.0
bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+1:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des fraGO immer "50". Kann vom Empfänger ausgewer-
50
Elements "Sender") tet werden, falls erkannt werden muss, aus welchem
Bereich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
MessageStatus -
MessageStatus 1
TrainOperationalIdentification - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die
TransportOperationalIdentifiers -
aktuell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann
6
StartDate 2023-03-17 bei Abfahrt im Ausland abweichend vom Betriebstag
2 bei DB InfraGO sein)
0
2
/2
ObjectType PA PA = Path
1
b a
r e
Company 0080 O
In
r
f
g
ra
a
G
ni
O
sa
)
tionCode des Ersteller-EIU (hier immer DB
ifitn
Core ---XYZ456789 Kernelement
e
d Variante des Path. Bei im DB InfraGO Betrieb er-
P-I
zeugten Trassen/Path ist das erste Zeichen der Vari-
A ant stets eine Zahl. Bei Erzeugung in der Fahrpla-
T Variant 02
/F nung der DB InfraGO, ist es ein Buchstabe. Das
A zweite Zeichen kann jeweils Zahl oder Buchstabe
T
r sein.
e
d
g
TimetableYear 2023 Fahrplanjahr für diese Trasse
n
u z StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
tu
N Falls vorhanden: Weitere zugehörige ReferenceTrai-
RelatedTransportOperationalIdentifi-
- nIDs und PathIDs außer den aktuellen unter "Plan-
ers
nedTransportIdentifiers".
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem.
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00
Regel-Soll
8

## Seite 9

TrainRunningForecastMessage
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem.
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00
Regel-Soll
TrainLocationReport - Betriebsstelle für die diese Meldung gilt
Location
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationDateTime 2020-03-24T09:41:39+1:00 Prognostizierte Zeit an der Betriebsstelle
TrainLocationStatus 04 Zuglaufpunktstatus
Sollzeit gemäß aktueller Disposition ("Dispo-Soll");
berücksichtigt zB dispositive Umleitungen oder Einle-
BookedLocationDateTime 2020-03-24T09:39:39+1:00
gung von Zusatzhalten, jedoch keine Verspätungen
(diese werden in der Prognose abgebildet)
Sollzeit gemäß Regel-Soll (Abrechnungsrelevant)
Bei Umleitungen (kein Regel-Soll vorhanden) wird
ReferencedLocationDateTime 2020-03-24T09:31:39+1:00 das Feld auf der Umleitungsstrecke mit dem ermittel-
ten Umleitungsfahrplan (zu Beginn der Umleitung er-
mitteltes Soll) gefüllt.
TrainDelay
AgainstReferenced +0010 Delta-t gegenüber ReferencedLocationDateTime
Ausbruchsbetriebsstelle bei grenzüberschreitenden
TransferPoint - Zügen gem. Dispositionsfahrplan (reflektiert mögli-
che Änderung durch Umleitung)
CountryCodeISO DE Ländercode
LocationPrimaryCode 18271 Code der Betriebsstelle
PrimaryLocationName Passau DB-Grenze Langname der Betriebsstelle
TransfereeIM -
Betreiber der benachbarten Infrastruktur bei grenz-
TransfereeIM 9999
überschreitenden Zügen
Die Meldung wird abgegeben, sobald die Abweichung zum letzten übermittelten Prognosewert
für eine Betriebsstelle größer oder gleich 60 Sekunden beträgt.
Die Meldung wird grundsätzlich für alle Halt-/Übergabe-/End-Betriebsstellen im Zuglauf abgege-
ben. Die Abgabe für weitere Betriebsstellen kann auf Antrag geprüft werden.
9

## Seite 10

3.3.3 Train Delay Cause Message
TrainDelayCauseMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4001
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0
MessageTypeVersion 3.0.2.0
bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+1:00
ID der Zusatzverspätung zur Korrelation bei Ände-
SenderReference rung/Löschen (numerisch, in der Regel 7 Stellen,
max. 9 Stellen)
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des fraGO immer "50". Kann vom Empfänger ausgewer-
50
Elements "Sender") tet werden, falls erkannt werden muss, aus welchem
Bereich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
MessageStatus -
- Erstellen einer Kodierung > Status 1 (neu erzeugen)
- Änderungen bestehender Kodierungen > Status 2
(Änderung)
- Löschen einer Kodierungen > Status 3 (löschen)
MessageStatus 1
- Beim Splitten einer bestehenden Kodierung wird für
den bereits kodierten Anteil eine Meldung mit Status
2 verschickt. Für den nicht kodierten Anteil wird keine
Meldung verschickt.
TrainOperationalIdentification - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die ak-
TransportOperationalIdentifiers -
tuell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
6 TimetableYear 2023 Fahrplanjahr für diesen Zug
2
0
2 Datum der ursprünglichen Abfahrt des Zuges (kann
/2
1 StartDate 2023-03-17 bei Abfahrt im Ausland abweichend vom Betriebstag
b bei DB InfraGO sein)
a
r
e ifitn ObjectType PA P
O
A
rg
=
a n
P
is
a
a
th
ti onCode des Ersteller-EIU (hier immer DB
e Company 0080
d InfraGO)
P-I
A Core ---XYZ456789 Kernelement
T
/F
Variante des Path. Bei im DB InfraGO Betrieb er-
A
T zeugten Trassen/Path ist das erste Zeichen der Vari-
r e ant stets eine Zahl. Bei Erzeugung in der Fahrpla-
d Variant 02
g
nung der DB InfraGO, ist es ein Buchstabe. Das
n zweite Zeichen kann jeweils Zahl oder Buchstabe
u
z sein.
tu
N
TimetableYear 2023 Fahrplanjahr für diese Trasse
StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
Falls vorhanden: Weitere zugehörige ReferenceTrai-
RelatedTransportOperationalIdentifi-
- nIDs und PathIDs außer den aktuellen unter "Plan-
ers
nedTransportIdentifiers".
ObjectType PA
Vgl. Beschreibung PA = Path oben.
Company 0080
10

## Seite 11

TrainDelayCauseMessage
Core ---XYZ456789
Variant 01
TimetableYear 2023
StartDate 2023-03-17
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem.
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00
Regel-Soll
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem.
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00
Regel-Soll
DelayEventReport -
DelayLocation
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
TrainLocationStatus 04 Zuglaufpunktstatus
DelayCauseTime
Verspätungsgrund gemäß europäischer Codeliste
DelayCause 25
(UIC Leaflet 450-2)
DelayMinutes 10 Höhe der Zusatzverspätung
DelayEventDateTime 2020-03-24T09:31:39+1:00 Zeitpunkt, zu der die Verspätung aufgetreten ist
InternalReferenceIdentifier 26 Verspätungsgrund gemäß Codeliste DB InfraGO
Ausbruchsbetriebsstelle bei grenzüberschreitenden
TransferPoint - Zügen gem. Dispositionsfahrplan (reflektiert mögliche
Änderung durch Umleitung)
CountryCodeISO DE Ländercode
LocationPrimaryCode 18271 Code der Betriebsstelle
PrimaryLocationName Passau DB-Grenze Langname der Betriebsstelle
TransfereeIM -
Betreiber der benachbarten Infrastruktur bei grenz-
TransfereeIM 9999
überschreitenden Zügen
Die Meldung wird bei Bedarf - Begründung einer (anteiligen)Verspätung - für die betreffende Be-
triebsstelle abgegeben. Gemäß Vorgaben des o.g. TAF/TAP TSI Sector Handbook wird die Ver-
spätungscodierung nach UIC Merkblatt 450-2 verwendet. Zusätzlich wird die Codierung gemäß
der bekannten Codeliste der DB InfraGO übergeben.
Hinweis für den Gebrauch des Elements MessageStatus in der TrainDelayCause message:
• Erstellen einer Kodierung:
Status 1 (Neuanlage)
• Löschen einer Kodierung:
Status 3 (löschen)
• Änderung der Kodierungen der Verspätungsursache eines Zuges (Umkodierung):
o Bei direkter Änderung der Kodierung/Verspätungsursache am einzelnen Ver-
spätungsdatensatz:
Löschnachricht (Status 3) für den alten Datensatz und Versand neue Nachricht im
Status 1 (Neuanlage)
o Bei indirekter Änderung der Kodierung/Verspätungsursache durch Anpassungen am
der Verspätung zugrunde liegenden Störfall:
Status 2 (Änderung)
• Änderung der anteiligen Verspätungsminuten (ohne Änderung der Kodierung):
Status 2 (Änderung)
11

## Seite 12

• Beim Splitten einer bestehenden Kodierung wird für bereits kodierte Anteile eine Meldung
mit Status 2 (Änderung) verschickt. Entsteht durch das Splitten eine neue Kodierung so wird
diese mit Status 1 (Neuanlage) gesendet. Für etwaige zunächst nicht kodierte Anteile wird
keine Meldung verschickt.
• Zusammenfassen zweier Kodierungen:
Löschen (Status 3) für einen entfallenden Datensatz und Änderung (Status 2) des verblei-
benden Datensatzes für die entsprechend geänderten Verspätungsminuten
• Änderung der europäischen Kodierung im Feld DelayCause wegen Änderung des Mappings
der Codeliste DB InfraGO auf die europäischen Codes ohne sonstige Änderungen:
Status 2 (Änderung)
12

## Seite 13

3.3.4 Change of Track Message
ChangeOfTrackMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4504
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 be-
MessageTypeVersion 3.0.2.0
stellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+1:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des fraGO immer "50". Kann vom Empfänger ausgewertet
50
Elements "Sender") werden, falls erkannt werden muss, aus welchem Be-
reich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
MessageStatus -
MessageStatus 1
TrainOperationalIdentification - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die aktu-
TransportOperationalIdentifiers -
ell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann bei
6
StartDate 2023-03-17 Abfahrt im Ausland abweichend vom Betriebstag bei
2 DB InfraGO sein)
0
2
/2
1 ObjectType PA PA = Path
b
a OrganisationCode des Ersteller-EIU (hier immer DB In-
r e
Company 0080
fraGO)
ifitn
Core ---XYZ456789 Kernelement
e
d
P A
-I V
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
T Variant 02 stets eine Zahl. Bei Erzeugung in der Fahrplanung der
/F
A DB InfraGO, ist es ein Buchstabe. Das zweite Zeichen
T kann jeweils Zahl oder Buchstabe sein.
r
e
d
g
TimetableYear 2023 Fahrplanjahr für diese Trasse
n
u StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
z
tu
N Falls vorhanden: Weitere zugehörige ReferenceTrai-
RelatedTransportOperationalIdentifi-
- nIDs und PathIDs außer den aktuellen unter "Plan-
ers
nedTransportIdentifiers".
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00
gel-Soll
13

## Seite 14

ChangeOfTrackMessage
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem.
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00
Regel-Soll
LocationPlannedTrack -
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationSubsidiaryIdentification
LocationSubsidiaryCode 308 Betriebliche Gleisbezeichnung
LocationSubsidiaryCode Immer 1 = Track
1
> LocationSubsidiaryTypeCode Attribut von LocationSubsidiaryTypeCode
AllocationCompany 0080
LocationActualTrack -
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationSubsidiaryIdentification
LocationSubsidiaryCode 307 Betriebliche Gleisbezeichnung
LocationSubsidiaryCode Immer 1 = Track
1
> LocationSubsidiaryTypeCode Attribut von LocationSubsidiaryTypeCode
AllocationCompany 0080
BookedLocationDateTime -
Zeitpunkt der Gleisnutzung gemäß aktueller Disposi-
tion ("Dispo-Soll"); berücksichtigt zB dispositive Umlei-
BookedLocationDateTime 2020-03-24T09:50:39+1:00 tungen oder Einlegung von Zusatzhalten, jedoch keine
Verspätungen (diese werden in der Prognose abgebil-
det)
TrainLocationStatus -
TrainLocationStatus 04 Zuglaufpunktstatus
Ausbruchsbetriebsstelle bei grenzüberschreitenden
TransferPoint - Zügen gem. Dispositionsfahrplan (reflektiert mögliche
Änderung durch Umleitung)
CountryCodeISO DE Ländercode
LocationPrimaryCode 18271 Code der Betriebsstelle
PrimaryLocationName Passau DB-Grenze Langname der Betriebsstelle
TransfereeIM -
Betreiber der benachbarten Infrastruktur bei grenz-
TransfereeIM 9999
überschreitenden Zügen
In der von DB InfraGO versandten Meldung wird im Feld des SubsidiaryLocationCode die be-
triebliche Gleisbezeichnung übergeben.
14

## Seite 15

3.3.5 Train Running Interruption Message
TrainRunningInterruptionMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 4006
Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 be-
MessageTypeVersion 3.0.2.0
stellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-24T09:41:39+1:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB In-
CI_InstanceNumber (Attribut des fraGO immer "50". Kann vom Empfänger ausgewertet
50
Elements "Sender") werden, falls erkannt werden muss, aus welchem Be-
reich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU/EIU
MessageStatus -
MessageStatus 1
TrainOperationalIdentification - Nutzung der TAF/TAP-Identifier ab 12/2026
DB InfraGO gibt bei ausgehenden Meldungen die aktu-
TransportOperationalIdentifiers -
ell genutzte ReferenceTrainID und PathID an.
ObjectType TR TR = Train
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann bei
6
StartDate 2023-03-17 Abfahrt im Ausland abweichend vom Betriebstag bei
2 DB InfraGO sein)
0
2
/2
1 ObjectType PA PA = Path
b
a OrganisationCode des Ersteller-EIU (hier immer DB In-
r e
Company 0080
fraGO)
ifitn
Core ---XYZ456789 Kernelement
e
d
P A
-I V
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
u
s
g
te
-
ts
T Variant 02 eine Zahl. Bei Erzeugung in der Fahrplanung der DB In-
/F
A fraGO, ist es ein Buchstabe. Das zweite Zeichen kann
T jeweils Zahl oder Buchstabe sein.
r
e
d
g
TimetableYear 2023 Fahrplanjahr für diese Trasse
n
u StartDate 2023-03-17 Datum der vorgesehenen Nutzung der Trasse
z
tu
N Falls vorhanden: Weitere zugehörige ReferenceTrai-
RelatedTransportOperationalIdentifi-
- nIDs und PathIDs außer den aktuellen unter "Plan-
ers
nedTransportIdentifiers".
ObjectType PA
Company 0080
Core ---XYZ456789
Vgl. Beschreibung PA = Path oben.
Variant 01
TimetableYear 2023
StartDate 2023-03-17
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer
Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00
gel-Soll
15

## Seite 16

TrainRunningInterruptionMessage
Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Re-
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00
gel-Soll
InterruptionPoint - Betriebsstelle für die diese Meldung gilt
Location
CountryCodeISO DE Ländercode
LocationPrimaryCode 18713 Code der Betriebsstelle
PrimaryLocationName Regensburg Hbf Langname der Betriebsstelle
LocationSubsidiaryIdentification
LocationSubsidiaryCode 301 Betriebliche Gleisbezeichnung
LocationSubsidiaryCode >
Immer 1 = Track
LocationSubsidiaryType- 1
Attribut von LocationSubsidiaryTypeCode
Code
AllocationCompany 0080 Unternehmen, welches den Code generiert hat
Interruption
InterruptionDateTime 2020-03-24T12:05:00+1:00 Zeitpunkt der Unterbrechung des Zuglaufs
Ausbruchsbetriebsstelle bei grenzüberschreitenden Zü-
TransferPoint - gen gem. Dispositionsfahrplan (reflektiert mögliche Än-
derung durch Umleitung)
CountryCodeISO DE Ländercode
LocationPrimaryCode 18271 Code der Betriebsstelle
PrimaryLocationName Passau DB-Grenze Langname der Betriebsstelle
TransfereeIM -
Betreiber der benachbarten Infrastruktur bei grenzüber-
TransfereeIM 9999
schreitenden Zügen
Die Meldung wird manuell ausgelöst. Um die Auswirkungen für den Kunden möglichst gering zu
halten, hat die Weiterführung des Eisenbahnverkehrs in der Disposition oberste Priorität. Die Er-
fassung der Dispositionshandlungen in den IT-Systemen mit Versand der Meldungen ist dabei
nachranging priorisiert.
Nach Versand der TrainRunningInterruption message werden keine weiteren Prognosemeldun-
gen (TrainRunningForecast message) mehr verschickt, solange der Zug seine Fahrt nicht fort-
setzt.
16

## Seite 17

4 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden grundsätzlichen Rahmenbedingungen
zu beachten
 Der konkrete individuelle Bereitstellungszeitpunkt der Meldungen für einen Kunden wird
mit diesem im Rahmen der Bearbeitung der Bestellung abgesprochen
 Die Meldungen werden bis vsl. Dezember 2026 (Fahrplanwechsel) ohne TAF/TAP Iden-
tifier gesendet. Entsprechend wird die Zugnummer+Abgangs-/Ankunftszeitpunkt („Opera-
tionalTrainNumberIdentifier“) verwendet.
 Um die Auswirkungen für den Kunden möglichst gering zu halten, hat die Weiterführung
des Eisenbahnverkehrs in der Disposition oberste Priorität. Die Erfassung der Dispositi-
onshandlungen in den IT-Systemen mit Versand der Meldungen ist dabei nachranging
priorisiert
 Der Datenabnehmer benötigt eine statische im Internet sichtbare IP-Adresse oder einen
per öffentlichen DNS auflösbaren Hostnamen. Der Port ist standardmäßig 443 (https)
 Der Empfang der Meldungen wird gemäß den Spezifikationen des Common Interface vom
Empfangssystem beim Kunden quittiert
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).
 Eine direkte Weiterleitung der Meldungen an Dritte ist nicht zugelassen.
17

## Seite 18

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
18
