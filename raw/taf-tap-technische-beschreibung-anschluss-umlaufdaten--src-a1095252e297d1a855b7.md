# TAF/TAP Technische Beschreibung Anschluss-/Umlaufdaten

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12598392/439d86e8d3bdf53f1054018648b483b6/Technische-Beschreibung-Objektinfo-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12598392/439d86e8d3bdf53f1054018648b483b6/Technische-Beschreibung-Objektinfo-data.pdf)
- Quellen-Schlüssel: `src-a1095252e297d1a855b7`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-anschluss-umlaufdaten--src-a1095252e297d1a855b7.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 7.2 vom 22.04.26
TECHNISCHE BESCHREIBUNG
Empfang von Anschluss- und
Umlaufinformationen gem.
TAF/TAP TSI
Object Info Message
1

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
2 Schnittstellenbeschreibung 3
2.1 Antrag auf Meldungsaustausch 3
3 Beschreibung der Meldungen 4
3.1 Meldungsversand 4
3.2 Meldungsinhalt 4
3.3 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern 5
3.4 Meldungsaufbau 6
3.4.1 TAF/TAP Object Info Message 7
4 Rahmenbedingungen 12
5 Ansprechpartner und Impressum 13
Änderungsverfolgung
Datum Änderung
19.10.2021 • Ersterstellung
22.07.2022 • Hinweis zu Betriebsstellen mit mehreren PrimaryLocationCodes
• Information zur Nutzung TAF/TAP-Identifier
19.04.2023 • Anpassung Hinweise zu laufenden ChangeRequest in Europa
• Detaillierung Hinweise zu gelieferten Soll-Zeiten
• Aufnahme Informationen zu TAF/TAP-Identifiern
04.07.2023 • Anpassung Datum Produktivsetzung, Hinweise TAF/TAP-Identifier
13.12.2023 • Hinweise zu führenden Nullen im Element OTN, Sollzeiten und Sendefris-
ten
• Umstellung DB Netz AG auf DB InfraGO AG
08.04.2024 • Anpassung Datum Produktivsetzung
• Schärfung Erläuterung zu Identifiernutzung und optionalen Feldern in Mel-
dungsschema
03.07.2024 • Aufnahme zusätzlicher xsd-Version 3.4.1.0
20.09.2024 • Anpassung Nutzungsbeginn TAF/TAP-Identifier auf 12/2026
30.09.2024 • Schärfung einiger Formulierungen, keine fachlichen Änderungen
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
Mittels der hier beschriebenen TAF/TAP Object Info Message können EVU aktuelle Anschluss-
und Umlaufinformationen elektronisch an die DB InfraGO AG übergeben. Diese Informationen
werden in den Systemen der DB InfraGO AG zur besseren Information der Disponenten sowie
zur Qualitätsverbesserung der Zuglaufprognose eingesetzt. Der Versand dieser Meldung an die
DB InfraGO AG ist optional.
Unter Anschlussinformationen ist die Information zu verstehen, dass eine Zugbeziehung zwi-
schen zwei Züge existiert, die eine geplante Reisekette darstellt. Dies stellt noch keinen konkre-
ten Anschlusswunsch des EVU dar (etwa das Herstellen eines Anschlusses auf Kosten der Ver-
spätung eines Zuges). Die Vereinbarung über das Herstellen eines Anschlusses erfolgt weiter-
hin in direkter Absprache mit den zuständigen Mitarbeitern der DB InfraGO AG.
Unter Umlaufbeziehungen ist die Information zu verstehen, dass ein Fahrzeug von einem Zug-
lauf nach dessen Ende auf einen anderen übergeht (zB das Fahrzeug, welches für den enden-
den Zug 1234 verwendet wurde, auch für den an gleicher Stelle beginnenden Zug 6789 einge-
setzt wird). Umlaufbeziehungen haben eine direkte Auswirkung auf die Prognose (eine Ver-
spätung beim endenden Zug wird für den beginnenden Folge-Zug berücksichtigt). Daher ist
eine aktive Abmeldung von nicht länger existierenden Umlaufbeziehungen erforderlich.
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
Die Meldung kann bis zu sieben Tage vor Abfahrt des Zuges an die DB InfraGO gesendet wer-
den. Innerhalb dieses Zeitfensters sollte die Meldung möglichst zeitnah nach Bekanntwerden
einer Änderung beim EVU versandt werden.
3.2 Meldungsinhalt
Die Meldungsinhalte entsprechen den europäischen Vorgaben. Eine detaillierte Beschreibung
findet sich im europäischen „TAP TSI and TAF TSI Sector Handbook for the Communication
between Railway Undertakings and Infrastructure Managers (RU/IM Telematics Sector Hand-
book)“ bzw. den jeweiligen Folgedokumenten. Die Dokumente werden von der Joint Sector
Group und der European Railway Agency (ERA) auf ihrer Website veröffentlicht.
Die in der TAF/TAP Object Info Message bei DB InfraGO verwendeten Elemente sowie weitere
meldungsspezifische Angaben sind im Folgenden beschrieben. Alle ausgeschlossen bzw. nicht
benannten Elemente können übergeben werden, eine Verarbeitung durch die DB InfraGO er-
folgt jedoch nicht. Aktuelle Umlauf- und Anschlussinformationen sind wie in untenstehender Ta-
belle beschrieben in der Struktur der „TrainActivity“ der ObjectInfoMessage zu übergeben. In
der europäischen Codeliste der TrainActivity sind zahlreiche Aktivitäten des Zuges an einer Be-
triebsstelle für verschiedene Anwendungsfälle vermerkt. Für den vorliegenden Fall werden die
folgenden dort enthaltenen Codes verwendet:
• 0044: Umlauf des Fahrzeugs aus dieser Zugfahrt auf eine folgende Zugfahrt (dasselbe
Fahrzeug wird nach Abschluss dieser Fahrt für eine andere verwendet; „Zug 1234 endet in
dieser Betriebsstelle und fährt als Zug 5678 weiter“)
• 0045: Umlauf dieses Fahrzeugs von einer vorherigen Zugfahrt (das für diese Fahrt vorgese-
hene Fahrzeug wird vorher für eine andere Fahrt verwendet; „Zug 5678 nutzt das Fahrzeug
des in dieser Betriebsstelle endenden Zuges 1234“)
• 0046: Anschluss auf einen anderen Zug („Reisende/Güter aus diesem Zug 1234 gehen in
dieser Betriebsstelle auf Zug 5678“)
• 0047: Anschluss von einem anderen Zug („Reisende/Güter für diesen Zug 5678 kommen an
dieser Betriebsstelle von Zug 1234“)
Hierbei ist jede Verknüpfung (Umlauf oder Anschluss) zwischen zwei Zügen nur einmal – also
entweder mit Code 0044 oder 0045, bzw. Code 0046 oder 0047 anzugeben. Für die jeweils ver-
knüpften Züge gilt stets die zuletzt empfangene Nachricht.
Die Angabe einer neuen Verknüpfung zweier Züge oder deren Aktualisierung erfolgt mit Messa-
geStatus 1 (Neu) oder 2 (Modifikation); Nachrichten mit diesen beiden Status werden gleich be-
handelt. Die Löschung einer zuvor angegebenen Verknüpfung erfolgt mit MessageStatus 3.
Für eine korrekte Verarbeitung müssen die in der Meldung angegebenen Referenz-Betriebsstel-
len/PLC (PrimaryLocationCodes) den Betriebsstellen aus der Trassenbestellung bzw. dem Dis-
pofahrplan aus der aktuellen PathDetails message der DB InfraGO an ein EVU entsprechen.
Dieses stellt aber keine Verpflichtung zur Verarbeitung der PathDetails message für die Zuliefe-
rer der ObjectInfo message dar. Bei Betriebsstellen mit mehreren PLC können die Meldungen
in der Regel auch dann korrekt zugeordnet werden, wenn (zB durch einen Gleiswechsel) kurz-
fristig ein anderer PrimaryLocationCode innerhalb derselben Betriebsstelle befahren wird.
Die TAF/TAP Object Info Message ist gemäß TAF/TAP TSI Meldungsschema („TAF TSI XSD
Schema“) Version 3.4.1.0 oder DB-InfraGO-xsd-Schema bereitzustellen, welches auf der
Homepage der DB InfraGO verfügbar ist.
4

## Seite 5

Das Schema auf der Homepage der DB InfraGO basiert auf der europäischen TAF/TAP TSI
XSD Version 3.0.2.0 der RNE und beinhaltet zusätzliche Elemente in der TrainActivity für die
ObjectInfo message, wie sie bereits teilweise mit ChangeRequest 275 bei RNE/ERA umgesetzt
wurden. Eine vollständige Angleichung war zum Zeitpunkt der Veröffentlichung mittels Change-
Request in Europa beantragt. Ebenso wurde die in der LocationFileDataset message verwen-
dete „ValditiyPeriod“ in „ValidityPeriodType“ umbenannt, um Verwechslung mit dem gleichnami-
gen Element zu verhindern, welches in zahlreichen anderen Meldungen verwendet wird (not-
wendig bis zur Umsetzung ChangeRequest 193/194). Des Weiteren wurde der namespace an-
gepasst um die Erzeugung der xsd durch DB InfraGO Rechnung zu tragen.
Die Änderungen aus den genannten ChangeRequest sind in der europäischen XSD Version
3.4.1.0 bereits enthalten, so dass hier keine Anpassung erforderlich ist.
Die europäischen Meldungsschemata sind auf den Websites der Joint Sector Group (JSG) un-
ter http://taf-jsg.info/?page_id=172 veröffentlicht. Auf der angegebenen Internetseite gelangt
man durch einen Klick auf den Link am Textende auf den Ablageort der Meldungsschemata.
Die untenstehende tabellarische Darstellung des Meldungsaufbaus beruht auf dem Schema
von der Homepage der DB InfraGO. Etwaige Unterschiede im Aufbau der beiden Versionen ha-
ben keine Auswirkung auf den fachlichen Inhalt, welcher in den Feldern der Version 3.4.1.0
analog zur Version DB InfraGO ist.
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
Als einzige im betrieblichen Kontext verwendete Meldung, besitzt die ObjectInfo message in der
europäischen Vorgabe eine Verpflichtung zur Angabe von Identifiern. Diese Felder können mit
Dummy-Werten korrekten Formats gefüllt werden. Sofern auch nach 12/2026 hier noch Dummy-
Werte verwendet werden, muss das Feld „Company“ dennoch den korrekten OrganisationCode
des sendenden EVU beinhalten. Bei Verwendung eines erfundenen Codes ist eine zufällige Über-
einstimmung mit einem tatsächlich existierenden Code und in Folge der falschen Zuordnung der
Meldung nicht ausgeschlossen.
Die Angabe der PathID ist nicht notwendig, diese wird bei DB InfraGO nicht verarbeitet und in
einer eingehenden Meldung ignoriert.
5

## Seite 6

Für DB InfraGO ist die Verarbeitung der OTN/Zugnummer bei eingehenden TAF/TAP-Meldungen
entweder mit (analog Darstellung Zugnummer in UIC-Telegrammen) oder ohne führenden Nullen
möglich.
3.4 Meldungsaufbau
Im Folgenden sind die bei der DB InfraGO AG verwendeten Datenelemente der Meldungen auf-
geführt. Zur Vereinfachung der Meldungsverwaltung bei den Kunden (Verwendung derselben
Ausprägung der Meldung bei mehreren Abnehmern) ist die Übermittlung weiterer Datenelemente
gemäß des europäischen TAF/TAP-Meldungsschemas möglich. Solche zusätzlichen Elemente
werden bei der Verarbeitung in den Systemen der DB InfraGO AG ignoriert.
6

## Seite 7

3.4.1 TAF/TAP Object Info Message
Die folgenden Datenelemente gemäß Meldungsschema sind zu übergeben. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Meldungs-
schema (xsd) optional sind (kursiv in untenstehender Tabelle = optionales Element bei DB InfraGO, restliche Felder sind Pflichtfelder).
Hierbei ist zu beachten, dass einige Felder zwar nicht durch DB InfraGO ausgewertet werden, jedoch ein Pflichtfeld gemäß der europäischen xsd
darstellen. Für eine erfolgreiche Ausgangs- und Eingangsvalidierung bei Meldungsversand müssen diese Felder mit Dummy-Werten gefüllt werden. Die
Felder sind in der Spalte Bemerkungen entsprechend gekennzeichnet.
ObjectInfoMessage
ME E1 E2 E3 E4 E5 Beispiel Bemerkung
MessageHeader
MessageReference -
MessageType 8501
MessageTypeVersion 3.0.2.0 Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-23T08:22:39+1:00
Sender 9999 Sender: EVU
Recipient 0080 Empfänger
MessageStatus
Status 1 (neu) und 2 (modification) werden beide als neu behandelt und
MessageStatus 1 überschreiben ältere Meldungen. Status 3 zur Löschung ("Abmeldung") ei-
ner bestehenden Verknüpfung zweier Züge.
AdministrativeContactInformation
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
Name
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026. Vor
diesem Zeitpunkt kann in die Struktur (Pflichtfelder gem. europ. xsd) ein
Identifier
Dummy-Wert mit richtiger Struktur eingetragen werden.
ReferenceTrainID des Basis-Zuges.
-tu N g n u z r e d O
A
T /F A T b
-n
e d P- I jec
b
a r e ifit tTy
6
2 /2 0 1 2 pe TR TR = Train
7

## Seite 8

ObjectInfoMessage
Company 1234 OrganisationCode des Ersteller-EVU
Core --ABCD123456 Kernelement
Variant 00 Variante für ReferenceTrainID immer "00"
TimetableYear 2023 Fahrplanjahr für diesen Zug
Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im Ausland
StartDate 2023-03-17
abweichend vom Betriebstag bei DB InfraGO sein)
ObjectInfoType
ObjectInfoType U (Update) Nur U (Update) zulässig
TrainInformationExtended
Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026. Vor
diesem Zeitpunkt kann in die Struktur (Pflichtfelder gem. europ. xsd) ein
PlannedTransportIdentifiers
Dummy-Wert mit richtiger Struktur eingetragen werden.
ReferenceTrainID des Basis-Zuges (Dopplung zu Sektion "Identifier").
-n
e ObjectType TR TR = Train
d
P-
I
6
A T 2 0 2 Company 1234 OrganisationCode des Ersteller-EVU
/F
A
/2
1 Core --ABCD123456 Kernelement
T b
ra Variant 00 Variante für ReferenceTrainID immer "00"
e
d r e
g
n
ifit TimetableYear 2023 Fahrplanjahr für diesen Zug
u
z Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im Ausland
tu StartDate 2023-03-17
abweichend vom Betriebstag bei DB InfraGO sein)
N
TrainInformation
Mindestens 2 Einträge notwendig (xsd-Pflicht). Sollte nur ein An-
schluss/Umlauf mitgeteilt werden sollen, ist ein zweiter Eintrag ohne
PlannedJourneyLocation
TrainActivity einzufügen, um die xsd-Vorgabe zu erfüllen (Einträge ohne
TrainActivity werden von DB InfraGO nicht ausgewertet).
CountryCodeISO DE Ländercode
LocationPrimaryCode 14535 Fahrplanpunkt
TimingAtLocation Ankunftszeit bzw. Abfahrtszeit
Timing
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
Time
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
8

## Seite 9

ObjectInfoMessage
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
Offset
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Re-
gel-Soll gemäß Fahrplanung (ReferenceLocationDateTime) als auch des
Dispo-Soll gemäß aktueller Disposition (BookedLocationDateTime) mög-
BookedLocationDateTime 2020-03-23T11:23:39+1:00
lich. Die Auswahl muss inner-halb einer Meldung konsistent sein (Verwen-
dung von Regel-Soll oder Dispo-Soll bei allen Angaben zur Fahrplanzeit)
um eine korrekte Zuordnung zu ermöglichen.
TrainActivity Umlauf oder Anschluss
0044 Umlauf auf anderen Zug (Fahrzeug geht auf anderen Zug über)
0045 Umlauf von anderem Zug (Fahrzeug kommt von anderem Zug)
TrainActivityType 0044
0046 Reisende/Güter gehen zu anderem Zug
0047 Reisende/Güter kommen von anderem Zug
Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026. Vor
diesem Zeitpunkt diese Struktur nicht befüllen.
AssociatedAttachedTrainID
ReferenceTrainID des entsprechend "TrainActivityType" verknüpften ande-
ren Zuges
P-
6
ObjectType TR TR = Train
A2
T0 Company 1234 OrganisationCode des Ersteller-EVU
r e
d
/F
A T
/2
1
b
a
r
2
C
Va
o
r
r
i
e
a nt
-
0
-
0
C DEF123456 K
V
e
a
r
r
n
ia
e
n
le
te
m
f
e
ü
n
r
t
R eferenceTrainID immer "00"
g n
u
e ifitn TimetableYear 2023 Fahrplanjahr für diesen Zug
z tu N e d I StartDate 2023-03-17 D ab a w tu e m ic h d e e n r d u r v s o p m rü n B g e l t i r c i h e e b n st a A g b f b a e h i r t D d B e s In Z fr u a g G e O s s (k e a in n ) n bei Abfahrt im Ausland
Zugnummer des entsprechend "TrainActivityType" verknüpften anderen
AssociatedAttachedOTN 4811
Zuges. Diese kann mit oder ohne führenden Nullen verarbeitet werden.
Entsprechend CR 275 bei RNE/ERA - TimingAtLocation für den verknüpf-
AssociatedAttachedTimingAtLocation
ten Zug
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
Time
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
Offset
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
9

## Seite 10

ObjectInfoMessage
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Re-
gel-Soll gemäß Fahrplanung (ReferenceLocationDateTime) als auch des
Dispo-Soll gemäß aktueller Disposition (BookedLocationDateTime) mög-
BookedLocationDateTime 2020-03-23T11:25:00+1:00
lich. Die Auswahl muss inner-halb einer Meldung konsistent sein (Verwen-
dung von Regel-Soll oder Dispo-Soll bei allen Angaben zur Fahrplanzeit)
um eine korrekte Zuordnung zu ermöglichen.
Entsprechend CR 357 bei RNE/ERA. Nur bei Anschlüssen zu verwenden,
AssociatedAttachedLocationIdent falls der verknpüfte Zug in anderer Betriebsstelle verkehrt (Beispiel Hanau
Nord/Süd)
CountryCodeISO DE Ländercode
LocationPrimaryCode 14537 Fahrplanpunkt
Entsprechend ChangeRequest 275 bei RNE/ERA - optional - Umlaufken-
FreeTextField
nung
Zugnummer des Basis-Zuges. Diese kann mit oder ohne führenden Nullen
OperationalTrainNumber 4711
verarbeitet werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
PlannedCalender
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
ValidityPeriod
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
StartDateTime
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
PathPlanningReferenceLocation
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
CountryCodeISO
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO,
LocationPrimaryCode
hier kann ein Dummy-Wert mit richtiger Struktur eingetragen werden.
10

## Seite 11

Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
Ebene 4
Ebene 5
11

## Seite 12

4 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden Rahmenbedingungen zu beachten:
 Der Versand der Object Info Message durch einen Dienstleister oder anderes EVU im
Auftrag des ResponsibleRU ist zulässig. Dies ist mit der DB InfraGO AG bei Anmeldung
zur Information mitzuteilen.
 Andere Eisenbahninfrastrukturunternehmen haben durch die Mitnutzung der Dispositi-
onssysteme Einsicht in die Daten.
 Die Meldungen werden bis vsl. Dezember 2026 (Fahrplanwechsel) ohne TAF/TAP Iden-
tifier empfangen. Davor erfolgt Identifikation des Entsprechend ist die Zugnummer („Ope-
rationalTrainNumber“) zu verwenden.
 Die Zuverlässigkeit der Daten und Datenlieferung ist für die Akzeptanz in der Betriebsfüh-
rung unerlässlich.
 Der Datenversender benötigt eine statische im Internet sichtbare IP-Adresse oder einen
per öffentlichen DNS auflösbaren Hostnamen. Als Transportprotokoll ist https zu verwen-
den (Port standardmäßig 443).
 Der Empfang der Meldungen wird gemäß den europäischen Spezifikationen des Common
Interface quittiert.
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).
12

## Seite 13

[Hier eingeben]
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
