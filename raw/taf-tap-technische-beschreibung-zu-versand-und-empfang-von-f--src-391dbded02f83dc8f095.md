# TAF/TAP Technische Beschreibung zu Versand und Empfang von Fehlermeldungen _v2.4

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-db-infrago-ag-an-evu-11089210`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13084274/3b166ae3985b61396108c905538d1a3f/TAF-TAP-Technische-Beschreibung-zu-Versand-und-Empfang-von-Fehlermeldungen-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13084274/3b166ae3985b61396108c905538d1a3f/TAF-TAP-Technische-Beschreibung-zu-Versand-und-Empfang-von-Fehlermeldungen-data.pdf)
- Quellen-Schlüssel: `src-391dbded02f83dc8f095`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-zu-versand-und-empfang-von-fehlermeldung--src-391dbded02f83dc8f095.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

1
[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 2.4 vom 05.06.26
TECHNISCHE BESCHREIBUNG
Empfang und Versand
der Fehlermeldung
gem. TAF/TAP TSI
TAF/TAP Error message
1

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
2 Schnittstellenbeschreibung 3
2.1 Antrag auf Meldungsaustausch 3
3 Beschreibung der Meldungen 4
3.1 Meldungsversand durch die DB InfraGO 4
3.2 Meldungsempfang durch die DB InfraGO 4
3.3 Meldungsinhalt 4
3.4 Bezug zur fehlerverursachenden Meldung 5
3.5 Meldungsaufbau 5
3.5.1 TAF/TAP ErrorMessage 6
3.5.2 Übersicht Inhalte Struktur „Error“ 8
4 Rahmenbedingungen 12
5 Ansprechpartner und Impressum 13
Änderungsverfolgung
Datum Änderung
20.09.2024 • Ersterstellung
04.10.2024 • Ergänzung CI InstanceNumber
28.10.2024 • Entfall Testhinweis auf Antragsformular
27.03.2025 • Ansprechpartner Produktmanagement
• Anpassung Datum Produktivsetzung TTT auf Basis OTN
04.06.2025 • Änderung Antragsstellung Meldungsaustausch
29.09.2025 • Hinweis zu verwendbaren XSD-Versionen in Meldungsaufbau
24.11.2025 • Anpassung der Severity Levels einiger Fehlercodes
• Entfall TrainCC-System
22.04.2026 • Änderung Begrifflichkeit CompanyCode zu OrganisationCode
• Hinweis zu Related Identifier
05.06.2026 • Erweiterung Liste Error Codes für TCM/PTCM
2

## Seite 3

1 Allgemeines
Auf Grundlage der EU-Verordnungen 1305/2014 Technical Specification for Interoperability –
Telematics Applications for Freight (TAF TSI) und 454/2011 Telematics Applications for Passen-
ger Services (TAP TSI) sind die Akteure des europäischen Eisenbahnsektors verpflichtet, den
Austausch bestimmter Datenmeldungen in einem europäisch einheitlich definierten Format zu
unterstützen. Die vorgesehenen Meldungen sind den o.g. Verordnungen der Europäischen
Union, bzw. deren Revisionen zu entnehmen. Meldungsformat und -inhalt entsprechen den Vor-
gaben gemäß TAF/TAP TSI, bzw. der Abstimmungen in den europäischen Gremien.
Die Abgabe des im weiteren Verlauf genauer beschriebenen Datensatzes Fehlermeldung
(TAF/TAP ErrorMessage) dient der Information, dass Empfang/Verarbeitung einer eingehenden
TAF/TAP-Meldung bei einem Akteur (DB InfraGO oder EVU) fehlgeschlagen ist. Entsprechend
wird die ErrorMessage dann vom jeweiligen EVU oder DB InfraGO an den Absender der fehler-
haften TAF/TAP-Meldung geschickt.
2 Schnittstellenbeschreibung
Als Grundlage des Datenaustausches hat die auf europäischer Ebene bei RailNet Europe einge-
richtete Common Components Group das sogenannte Common Interface als Standardsoftware
entwickelt. Alternativ kann eine selbst entwickelte Schnittstelle oder Software von Drittanbietern
zum Einsatz kommen, welche die Funktionen des Common Interface exakt nachbilden.
Die Beschreibung der Schnittstelle ist der Produktbeschreibung des Common Interface, bzw. den
entsprechenden Dokumenten der TAF/TAP TSI Common Components Group zu entnehmen,
welche von dieser erhältlich sind. Informationen sind auch auf der Homepage der RailNet Europe
(TAF/TAP TSI) verfügbar.
Auf Seiten DB InfraGO fungiert der Betriebsdatenverteiler als Common Interface.
2.1 Antrag auf Meldungsaustausch
Anträge auf den Austausch von TAF/TAP-Meldungen mit der DB InfraGO können über das
Infraportal mittels tool zur BDV Anmeldung gestellt werden. Der Link ist auf den Seiten des Be-
triebs der DB InfraGO TAF/TAP-Homepage (www.dbinfrago.com/taf-tap-tsi) hinterlegt. Dies ist
dieselbe Seite auf welcher auch diese Technische Beschreibung zum Download bereitsteht.
3

## Seite 4

3 Beschreibung der Meldungen
3.1 Meldungsversand durch die DB InfraGO
Der Meldungsversand erfolgt, wenn eine eingegangenen TAF/TAP-Meldung in den Dispositions-
systemen der DB InfraGO nicht verarbeitet werden kann. Bei Anwendungen außerhalb des di-
rekten TAF/TAP-Umfelds wie zB bei der TCM/PTCM mit der Nutzung der MBR-Funktion oder
Zulieferung Wagennummern im Rahmen des Schienenlärmschutzgesetzes, kann nur die seman-
tische Prüfung (Felder sind mit dem korrekten Zeichenformat gefüllt) erfolgen, nicht jedoch eine
auf fachliche Korrektheit der Inhalte.
DB InfraGO versendet die Error message nach automatischer Prüfung und Feststellen eines Feh-
lers in einer der folgenden Meldungstypen in der Regel innerhalb weniger Minuten:
▪ ObjectInfo message (in der Regel in der Kommunikation EVU <> DB InfraGO)
▪ TrainComposition message (in der Regel in der Kommunikation EVU <> DB InfraGO)
▪ PassengerTrainComposition message (in der Regel in der Kommunikation EVU <>
DB InfraGO)
▪ TrainReady message (in der Regel in der Kommunikation EVU <> DB InfraGO)
▪ TrainRunningInformation message (in der Regel in der Kommunikation EIU <> DB
InfraGO)
▪ TrainRunningForecastmessage (in der Regel in der Kommunikation EIU <> DB In-
fraGO)
In einzelnen Fällen zB bei Bauzuständen kann es dazu kommen, dass Soll-Daten ggf. einen an-
deren Stand als die in den eingehenden Meldungen enthaltenen Werte aufweisen und eine Prü-
fung mit anschließendem Versand der Error message nicht erfolgen kann.
3.2 Meldungsempfang durch die DB InfraGO
Der Meldungsversand von Error messages durch alle Akteure (zB EIU und EVU) soll in der Regel
zeitnah nach Feststellen eines Fehlers in einer eingegangenen TAF/TAP-Meldung erfolgen. Der
genaue Ablauf, technische Aufbau, etc. obliegt im Rahmen der europäischen Vorgaben dem je-
weiligen Unternehmen. In der weiteren Dokumentation werden daher nur die Error message be-
schrieben, welche durch die DB InfraGO versendet werden.
Die DB InfraGO fordert keine Error message von EVU oder anderen Partnern im Datenaustausch
ein, die Bereitstellung ist optional. Eine bei DB InfraGO eingehende Error message wird in den
Systemen geloggt und steht dann für einige Zeit für Analysen bereit.
3.3 Meldungsinhalt
Die Meldungsinhalte entsprechen den europäischen Vorgaben. Eine detaillierte Beschreibung
findet sich im europäischen „TAP TSI and TAF TSI Sector Handbook for the Communication
between Railway Undertakings and Infrastructure Managers (RU/IM Telematics Sector Hand-
book)“ bzw. den jeweiligen Folgedokumenten. Die Dokumente werden von der Joint Sector Group
und der European Railway Agency (ERA) auf ihrer Website veröffentlicht.
Die in der TAF/TAP ErrorMessage bei DB InfraGO verwendeten Elemente sowie weitere mel-
dungsspezifische Angaben sind im Folgenden beschrieben. Alle ausgeschlossen bzw. nicht be-
nannten Elemente können übergeben werden, eine Verarbeitung durch die DB InfraGO erfolgt
jedoch nicht.
Die TAF/TAP ErrorMessage kann wahlweise gemäß TAF/TAP TSI Meldungsschema („TAF TSI
XSD Schema“) Version 3.0.2.0 oder Version 3.4.1.0 bei DB InfraGO gesendet bzw. empfangen
4

## Seite 5

werden. Die europäischen Meldungsschemata sind auf den Websites der Joint Sector Group
(JSG) unter http://taf-jsg.info/?page_id=172 veröffentlicht. Auf der angegebenen Internetseite ge-
langt man durch einen Klick auf den Link am Textende auf den Ablageort der Meldungsschemata.
Die untenstehende tabellarische Darstellung des Meldungsaufbaus beruht auf Version 3.0.2.0.
Etwaige Unterschiede im Aufbau der beiden Versionen haben keine Auswirkung auf den fachli-
chen Inhalt, welcher in den Feldern der Version 3.4.1.0 analog zur Version 3.0.2.0 ist.
Es ist zu beachten, dass im europäischen Meldungsschema eine Vielzahl von Datenfeldern in
den Meldungen optional sind. Hintergrund ist, dass die Meldungen für möglichst viele Geschäfts-
fälle der verschiedenen Unternehmen in der EU nutzbar sein sollen. Hierdurch ist bedingt, dass
solche „xsd-optionalen-Felder“ im Datenaustausch zwischen einzelnen Unternehmen benötigt
werden, also dort verpflichtend sind. So gibt es auch im Meldungsaustausch mit der DB InfraGO
AG einzelne solcher Felder, die in den untenstehenden Beschreibungen der Meldungen enthalten
sind. Das Füllen weiterer Felder ist unkritisch, da diese bei Eingang der Meldung beim Empfänger
einfach ignoriert werden können.
3.4 Bezug zur fehlerverursachenden Meldung
In der Error message ist der Meldungskopf inklusive des technisch eindeutigen „MessageIdenti-
fier“ der Meldung angegeben, die eingangsseitig als fehlerhaft erkannt wurde. Mit Hilfe dieser
Informationen können die jeweiligen Unternehmen die entsprechende Meldung in ihren eigenen
Systemen identifizieren.
Ab Einführung der TAF/TAP-Identifier werden die in der eingehenden Meldung vom Kunden an-
gegebenen ReferenceTrainID und PathID ebenfalls in der Error message zurückgegeben.
3.5 Meldungsaufbau
Im Folgenden sind die von der DB InfraGO AG zur Verfügung gestellte Datenfelder in den jewei-
ligen Meldungen aufgeführt. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Mel-
dungsschema (xsd) optional sind. Folgenden sind die bei der DB InfraGO AG verwendeten Da-
tenelemente der Meldungen aufgeführt.
5

## Seite 6

3.5.1 TAF/TAP ErrorMessage
Die folgenden Datenelemente gemäß Meldungsschema werden bei DB InfraGO verwendet. Kursiv in untenstehender Tabelle = optionales Element,
welches nicht immer gesetzt wird.
ErrorMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 9000
MessageTypeVersion 3.0.2.0 Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2023-03-24T08:22:39+1:00
Sender 0080 Sender: DB InfraGO
Für Meldungen aus der Betriebsführung der DB InfraGO immer "50".
CI_InstanceNumber (Attribut
50 Kann vom Empfänger ausgewertet werden, falls erkannt werden
des Elements "Sender")
muss, aus welchem Bereich der DB InfraGO eine Meldung kommt.
Recipient 9999 Empfänger: EVU
MessageStatus -
MessageStatus 1 Nur 1 (neu)
AdministrativeContactInformation -
Name DB InfraGO Information über den Absender/Erzeuger dieser Error message
Meldungsreferenz aus Meldungskopf der fehlerverursachenden Mel-
ErrorCauseReference -
dung
MessageReference -
MessageType 3003
MessageTypeVersion 3.0.2.0
MessageIdentifier 3a34567g-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2023-03-24T08:19:12+1:00
Inhalt des Elements "SenderReference" der fehlerverursachenden
MessageSenderReference -
Nachricht, falls das Feld dort vom EVU gefüllt wurde
Error - Beschreibung des Fehlers
TypeOfError Fehlerart (fachlich/technisch/beides)
6

## Seite 7

ErrorMessage
Schwere des Fehlers: 1=Warnung/Warning=Meldung konnte (teil-
Severity weise) verarbeitet werden, 2=Fatal=Meldung konnte nicht verarbeitet
Elemente werden entsprechend werden
der untenstehenden Übersicht
ErrorCode gefüllt. Bezeichnung des Fehlers mittels Codeliste
FreeTextField Weitere Erläuterung/Hinweise (in deutscher Sprache)
Falls vorhanden: ReferenceTrainID sowie einer PathID aus der fehler-
TransportOperationalIdentifiers verursachenden Meldung.
Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2025.
-n
ObjectType TR TR = Train, PA = Path
e
d
P- I 6 Company 1234 OrganisationCode des Ersteller-EVU
A T 2 0 2 Core --ABCD123456 Kernelement
/F/2
A T 1 b Variant 00 Variante für ReferenceTrainID immer "00"
ra
e d r e TimetableYear 2023 Fahrplanjahr für diesen Zug
g
n
ifit
u Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im
z StartDate 2023-03-24
tu Ausland abweichend vom Betriebstag bei DB InfraGO sein)
N
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
7

## Seite 8

3.5.2 Übersicht Inhalte Struktur „Error“
In der folgenden Übersicht sind die Inhalte der oben genannten Meldungselemente „TypeOfEr-
ror“, „Severity“, „ErrorCode“ und „FreeTextField“ aus der Struktur „Error“ aufgeführt. Diese mög-
lichen Inhalte sind nach den auslösenden Meldungen sortiert.
Während die meisten TAF/TAP-Meldungen eher fachliche Inhalte transportieren, so sind es bei
der Error message eher technische. Es sei daher darauf hingewiesen, dass zum Verständnis
der Fehlerbeschreibungen eine tiefere Kenntnis der TAF/TAP-Meldungsstrukturen und ihren
Elementen und Begrifflichkeiten notwendig ist.
Nachrichtentyp Type Se- Error FreeTextField
OfEr- verity Code
ror
TrainRunningInformation- 2 2 5028 Löschmeldungen für Zugnummer <Ope-
Message rationalTrainNumber> und Betriebs-
und tag/Start <ScheduledTimeAtTransfer>
TrainRunningForecast- nicht unterstützt.
Message 2 2 5029 Datums-Zeit-Angabe ohne Zeitzone.
(i.d.R. in der Kommunika- 1 2 5029 Delta-T nicht ermittelbar für Zugnummer
tion EIU <> DB InfraGO) <OperationalTrainNumber> und Be-
triebstag/Start <ScheduledTimeAtTrans-
fer>.
1 2 5040 Fahrplan unbekannt für Zugnummer
<OperationalTrainNumber> und Be-
triebstag/Start <MessageDateTime>.
ObjectInfoMessage 2 2 5029 Datums-Zeit-Angabe ohne Zeitzone.
(Ist-Anschluss und Ist-Um- 1 2 5040 Ist-Meldung ist unvollständig (Operatio-
lauf) nalTrainNumber).
(i.d.R. in der Kommunika- 1 2 5040 Ist-Meldung ist unvollständig (TrainActi-
tion EVU <> DB InfraGO) vity/AssociatedAttachedOTN).
1 2 5042 Betriebsstelle zu Location <CountryCo-
deISO> und<LocationPrimaryCode> ist
unbekannt.
1 2 5052 Ist-Meldung ist unvollständig (ALA muss
vor ALD liegen).
1 2 5052 Ist-Meldung ist unvollständig (TimingAt-
Location/Timing/BookedLocationDa-
teTime mit TimingQualifierCode ALA
oder ALD (abhängig vom TrainActivi-
tyType)).
1 2 5052 Ist-Meldung ist unvollständig (TrainActi-
vity/AssociatedAttachedTimingAtLoca-
tion/TimingAtLocation/Timing/BookedLo-
cationDateTime mit TimingQualifierCode
ALA oder ALD (abhängig vom TrainActi-
vityType)).
1 2 5110 Zugfahrtverknüpfung [ID Zugfahrtver-
knüpfung] nicht anwendbar aufgrund der
zugeordneten Fahrpläne von Zubringer
und Abbringer.
TrainReadyMessage 2 2 5028 ZVM-Änderungs-/ Löschmeldungen wer-
(i.d.R. in der Kommunika- den nicht unterstützt.
tion EVU <> DB InfraGO) 1 2 5005 Meldungszeitpunkt <MessageDa-
teTime> liegt in der Zukunft.
1 2 5035 TrainReadyStatus 0 (not ready) für Zug-
nummer <OperationalTrainNumber> und

## Seite 9

Nachrichtentyp Type Se- Error FreeTextField
OfEr- verity Code
ror
Betriebstag/Start <MessageDateTime>
nicht unterstützt.
1 2 5040 Fahrplan unbekannt für Zugnummer
<OperationalTrainNumber> und Be-
triebstag/Start <MessageDateTime>.
1 2 5214 Keine ZVM erwartet für Zugnummer
<OperationalTrainNumber> und Be-
triebstag/Start <MessageDateTime>.
2 2 5029 Datums-Zeit-Angabe ohne Zeitzone.
PassengerTrainComposi- 1 1 6400 Bremshundertstel-Verringerung fehlge-
tionMessage schlagen: + <Meldungsdetails>
(i.d.R. in der Kommunika- 1 2 5040 Ist-Meldung ist unvollständig (Operatio-
tion EVU <> DB InfraGO) nalTrainNumberIdentifier).
1 2 5029 Ist-Meldung ist unvollständig
(ScheduledTimeAtHandover).
1 2 5029 Ist-Meldung ist unvollständig (BookedLo-
cationDateTime).
1 2 5040 Ist-Meldung ist unvollständig (Passen-
gerTrainData).
1 2 5173 Ist-Meldung ist unvollständig (TrainMax-
Speed).
1 2 5178 Ist-Meldung ist unvollständig (Brake-
Type).
1 2 5076 Ist-Meldung ist unvollständig (Serial-
Number).
1 2 5077 Ist-Meldung ist unvollständig (Traction-
Mode).
1 2 5040 Ist-Meldung ist unvollständig (Powered-
LocomotiveOrTrainset).
1 1 5070 Triebfahrzeug nicht eindeutig ermittel-
bar.
1 2 5042 Betriebsstelle zu Location <CountryCo-
deISO> und<LocationPrimaryCode> ist
unbekannt.
1 2 5178 Nicht unterstützter Bremstyp (Brake-
Type) mit Wert %s.
1 2 5002 MessageType '%s' ist nicht unterstuetzt.
1 2 5028 MessageStatus '%s' ist nicht unterstu-
etzt.
1 2 5040 Die Zugnummer (OperationalTrainNum-
ber) ist keine gueltige Zahl.
2 2 5029 Datums-Zeit-Angabe ohne Zeitzone.
1 1 5029 Die ScheduledTimeAtHandover liegt
<Minuten> Minuten hinter der Abfahrts-
zeit laut Fahrplan. Da Züge des Perso-
nenverkehrs in der Regel nicht vor Plan
verkehren, erfolgt die Verarbeitung von
PTCM bei DB InfraGO ab 1h vor Plan-
abfahrt um Verwirrung durch etwaige
vorherige Updates zu vermeiden.
Stimmt die ScheduledTimeAtHandover
nicht mit der Planabfahrt überein, so
können sich hieraus zeitliche Unstim-
migkeiten ergeben.
9

## Seite 10

Nachrichtentyp Type Se- Error FreeTextField
OfEr- verity Code
ror
1 1 5040 Invalide Zuginformationen: LZB mit we-
niger als 56 Brh
1 2 5040 Invalide Zuginformationen:
• Gesamtzuglänge nicht zwischen
einschließlich 10 m und 835 m
• Gesamtzuggewicht nicht zwi-
schen einschließlich 10 t und
8.350 t
• Meterlast des Gesamtzugs nicht
zwischen einschließlich 0,7 t/m
und 10,0 t/m
• Länge pro Einheit nicht kleiner
450 m
• Anzahl Wagen nicht zwischen 0
und 100
• Anzahl TFZ nicht größer 0
• Zugnummer nicht zwischen ein-
schließlich 2 und 99999
• Bremshundertstel nicht zwischen
einschließlich 6 und 230
• Höchstgeschwindigkeit nicht zwi-
schen einschließlich 10 km/h und
330 km/h
TrainCompositionMes- 1 1 6400 Bremshundertstel-Verringerung fehlge-
sage schlagen: + <Meldungsdetails>
(i.d.R. in der Kommunika- 1 2 5029 Ist-Meldung ist unvollständig
tion EVU <> DB InfraGO) (ScheduledTimeAtHandover).
1 2 5029 Ist-Meldung ist unvollständig (BookedLo-
cationDateTime).
1 2 5173 Ist-Meldung ist unvollständig (TrainMax-
Speed).
1 2 5178 Ist-Meldung ist unvollständig (Brake-
Type).
1 1 5070 Ist-Meldung ist unvollständig (Number-
OfVehicles).
1 2 5076 Ist-Meldung ist unvollständig (LocoTy-
peNumber).
1 2 5076 Ist-Meldung ist unvollständig (Serial-
Number).
1 2 5077 Ist-Meldung ist unvollständig (Traction-
Mode).
1 1 5070 Triebfahrzeug nicht eindeutig ermittel-
bar.
1 2 5042 Betriebsstelle zu Location <CountryCo-
deISO> und<LocationPrimaryCode> ist
unbekannt.
1 2 5178 Nicht unterstützter Bremstyp (Brake-
Type) mit Wert %s.
1 2 5002 MessageType '%s' ist nicht unterstuetzt.
1 2 5028 MessageStatus '%s' ist nicht unterstu-
etzt.
1 2 5040 Die Zugnummer (OperationalTrainNum-
ber) ist keine gueltige Zahl.
10

## Seite 11

Nachrichtentyp Type Se- Error FreeTextField
OfEr- verity Code
ror
2 2 5029 Datums-Zeit-Angabe ohne Zeitzone.
1 1 5040 Invalide Zuginformationen: LZB mit we-
niger als 56 Brh
1 2 5040 Invalide Zuginformationen:
• Gesamtzuglänge nicht zwischen
einschließlich 10 m und 835 m
• Gesamtzuggewicht nicht zwi-
schen einschließlich 10 t und
8.350 t
• Meterlast des Gesamtzugs nicht
zwischen einschließlich 0,7 t/m
und 10,0 t/m
• Länge pro Einheit nicht kleiner
450 m
• Anzahl Wagen nicht zwischen 0
und 100
• Anzahl TFZ nicht größer 0
• Zugnummer nicht zwischen ein-
schließlich 2 und 99999
• Bremshundertstel nicht zwischen
einschließlich 6 und 230
• Höchstgeschwindigkeit nicht zwi-
schen einschließlich 10 km/h und
330 km/h
11

## Seite 12

4 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden Rahmenbedingungen zu beachten:
 Der Datenempfänger, bzw- sender benötigt eine statische im Internet sichtbare IP-Ad-
resse oder einen per öffentlichen DNS auflösbaren Hostnamen. Als Transportprotokoll ist
https zu verwenden (Port standardmäßig 443).
 Der Empfang der Meldungen wird gemäß den Spezifikationen des Common Interface
quittiert.
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).
12

## Seite 13

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
13
