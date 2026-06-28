# Bedienerhandbuch TCM-Editor

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13444146/02cce81e3348857d022e9027ea7dc544/Bedienerhandbuch-TCM-Editor-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13444146/02cce81e3348857d022e9027ea7dc544/Bedienerhandbuch-TCM-Editor-data.pdf)
- Quellen-Schlüssel: `src-d9e2cc014c964d8ba2b8`
- Abrufdatum: 2026-06-27
- Original: [[bedienerhandbuch-tcm-editor--src-d9e2cc014c964d8ba2b8.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 1.0 vom 27.06.25
Bedienerhandbuch
TCM-Editor
Übermittlung von aktuellen Zugeigen-
schaften ohne Senden einer
TCM/PTCM gem. TAF/TAP TSI

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 3
1.1 Dokument zur Erläuterung fachlicher Inhalte 3
2 Grundlegende Informationen 4
3 Eingabeoptionen 6
3.1 Manuelle Eingabe 6
3.2 Hochladen einer csv-Datei 8
3.3 Hochladen einer xml-Datei 10
4 Historie mit Anzeige von Verarbeitungsfehlern 12
4.1 Nutzung der Historie 12
4.1.1 Anzeige von Verarbeitungsfehlern 12
5 Testmöglichkeiten 13
Änderungsverfolgung
Datum Änderung
27.06.2025 • Ersterstellung

## Seite 3

1 Allgemeines
Auf Grundlage der EU-Verordnungen 1305/2014 Technical Specification for Interoperability –
Telematics Applications for Freight (TAF TSI) und 454/2011 Telematics Applications for Pass-
enger Services (TAP TSI) sind die Akteure des europäischen Eisenbahnsektors verpflichtet,
den Austausch bestimmter Datenmeldungen in einem europäisch einheitlich definierten Format
zu unterstützen. Die vorgesehenen Meldungen sind den o.g. Verordnungen der Europäischen
Union, bzw. deren Revisionen zu entnehmen. Meldungsformat und -inhalt entsprechen den Vor-
gaben gemäß TAF/TAP TSI, bzw. der Abstimmungen in den europäischen Gremien.
Die Übermittlung der tatsächlich vorhandenen Zugeigenschaften (insbesondere der fahrdynami-
schen Eigenschaften) können als Update der Angaben aus der Trassenanmeldung verstanden
werden. Diese Daten werden bei DB InfraGO vor allem als Basis für die Prognoserechnung ge-
nutzt. Die aktuellen Daten sind gegenüber der bislang vorwiegend verwendeten Plandaten eine
deutliche bessere Grundlage für eine akkurate Prognose für unsere Kunden und die eigenen
Mitarbeiter (zB in der Disposition). In der TAF/TAP TSI werden diese Daten in den Meldungen
Zugeigenschaften (TAF Train Composition Message, TCM bzw. TAP PassengerTrainComposi-
tionMessage, PTCM) abgebildet.Die Übermittlung dieser Meldungen an die DB InfraGO AG
wird ab 12/2025 aufgrund des hohen Mehrwerts verpflichtend.
Sollten zum jeweiligen Übermittlungszeitpunkt der TCM/PTCM die aktuellen Daten des Zuges
nicht rechtzeitig vorliegen, so ist stattdessen die Übermittlung von, zu diesem Zeitpunkt, aktuel-
len vorliegenden Plandaten (z.B. Tagesplanung) zulässig. Sind in Sonderfällen (z.B. kleiner
Grenzverkehr, unzureichende Mitteilung von Daten seitens anderer EVU bei Übernahme eines
Zuges) nur die in der Trassenanmeldung angegebenen Daten verfügbar, so kann von der Über-
mittlung abgesehen werden, da diese der DB InfraGO bereits vorliegen. Sofern das EVU sicher-
stellen kann, dass die aktuellen Daten des Zuges denen aus der Trassenanmeldung entspre-
chen, so ist eine Übermittlung derselben nicht notwendig. Dies gilt insbesondere für kurzfristige
Trassenanmeldungen im ad-hoc Verkehr. Ebenso ist eine leicht zeitverzögerte Bereitstellung
der Meldungen in Sonderfällen zulässig. Diese Ausnahmeregelungen werden in den kommen-
den Jahren evaluiert und ggf. ein Auslaufen beschlossen. Eine Änderung wird mit entsprechen-
dem Vorlauf bekannt gegeben.
Es sind nur die Anteile des Zuglaufs auf dem Netz der DB InfraGO anzugeben. Bei ein- bzw.
ausbrechenden Zügen beginnt/endet der entsprechende Abschnitt an der Betriebsstelle der Netz-
grenze. Alternativ kann auch eine Betriebsstelle gewählt werden, welche im Netz der DB InfraGO
möglichst nah an der Netzgrenze liegt.
Für EVU, welche den Versand einer TCM bzw. PTCM gemäß TAF/TAP TSI nicht ermöglichen
können oder wollen, stellt die DB InfraGO AG als Alternative den hier beschriebenen TCM-Edi-
tor zur Verfügung.
1.1 Dokument zur Erläuterung fachlicher Inhalte
Die dabei für die Abgabe der Zugeigenschaften geforderten Inhalte, Fristen, etc. gelten analog
zu den Angaben in der Technischen Beschreibung der TCM/PTCM „Empfang von aktuellen Zu-
geigenschaften gem. TAF/TAP TSI“ (im Folgenden nur „Technische Beschreibung“ genannt),
welche daher auch für den TCM-Editor relevant ist. Die Technische Beschreibung steht auf der
Homepage der DB InfraGO (www.dbinfrago.com/taf-tap-tsi) im Bereich „Betrieb: Meldungen
EVU an DB InfraGO AG“ zum Herunterladen bereit. Technische Hinweise wie zum Beispiel zur
Funktion der TAF/TAP-Schnittstelle Common Interface sind bei Nutzung des TCM-Editors nicht
notwendig.
Das hier vorliegende Dokument enthält dagegen die Hinweise für die Bedienung des TCM-Edi-
tors und geht nicht auf die fachlichen Details der Technischen Beschreibung ein.

## Seite 4

2 Grundlegende Informationen
Der TCM-Editor erlaubt die manuelle Eingabe der Zugeigenschaften auf stationären und mobi-
len Endgeräten und bietet ferner die Möglichkeit des Hochladens einer vordefinierten csv-Datei
(comma-separated-values) oder der TCM/PTCM als xml-Datei (Extensible Markup Language).
Diese drei Optionen werden unten genauer beschrieben.
Bei der manuellen Eingabe sowie der csv-Datei wurden für die Bezeichnung der anzugebenden
Informationen deutsche Begriffe gewählt. Die folgende Tabelle enthält für diese Begriffe die ent-
sprechenden englischen Bezeichnungen der einzelnen Felder der TCM/PTCM. Dies ermöglicht
die bessere Zuordnung zu Angaben in der Technischen Beschreibung der TCM/PTCM „Emp-
fang von aktuellen Zugeigenschaften gem. TAF/TAP TSI“ sowie in englischsprachigen, europäi-
schen Vorgaben.
Deutsche Feld-Bezeichnung
Englische Bezeichnung gemäß TAF/TAP TSI
im TCM-Editor
Fahrtinformation
Zugnummer/OTN OperationalTrainNumber
Regel-Soll erste DB-Bst ScheduledTimeAtHandover
Regel-Soll letzte DB-Bst ScheduledDateTimeAtTransfer
Abschnitt
Betriebsstelle
JourneySectionOrigin>LocationPrimaryCode
(im Bereich „Abschnittsbeginn“)
Ländercode
JourneySectionOrigin>CountryCodeISO
(im Bereich „Abschnittsbeginn“)
Abfahrtszeit
JourneySectionOrigin>BookedLocationDateTime
(im Bereich „Abschnittsbeginn“)
Betriebsstelle
JourneySectionDestination>LocationPrimaryCode
(im Bereich „Abschnittsende“)
Ländercode
JourneySectionDestination>CountryCodeISO
(im Bereich „Abschnittsende“)
Ankunftszeit
JourneySectionDestination>BookedLocationDateTime
(im Bereich „Abschnittsende“)
Triebfahrzeuginformationen
Triebfahrzeugrolle/Traction
TractionMode
Mode
Ländercode CountryCode
Baureihennummer SeriesNumber
Variantennummer SerialNumber
Angetriebenes Fahrzeug
PoweredLocomotiveOrTrainset
(nur bei TAP,PTCM)
Zuginformationen
Gesamtzuggewicht TrainWeight
Gesamtzuglänge TrainLength
Höchstgeschwindigkeit TrainMaxSpeed

## Seite 5

Genutzte Bremsstellung Ge-
BrakeType
samtzug
Aktuelle Bremshundertstel Ge-
BrakingRatio
samtzug
Anzahl der Fahrzeuge NumberOfVehicles
Zugbeeinflussungssysteme TrainCCSystem
Wagennummern
WagonNumberFreight
(nur bei TAF,TCM)
Beschreibungsrichtung
DirectionOfDescription
(nur bei TAP,PTCM)
Zugart
UnitCount
(nur bei TAP,PTCM)
Zug ist wendefähig
PushPullTrain
(nur bei TAP,PTCM)
Zug fährt mit Neigetechnik
TiltingFunction
(nur bei TAP,PTCM)

## Seite 6

3 Eingabeoptionen
Im Folgenden werden die drei Eingabeoptionen der Zugeigenschaften (manuell, Hochladen der
csv-Datei, Hochladen der xml-Datei) näher beschrieben.
3.1 Manuelle Eingabe
Die manuelle Eingabe erfolgt durch das Aufrufen der entsprechenden Maske für Güterverkehr
(GV-Zug) bzw. Personenverkehr (PV-Zug). Die Eingabemasken sind so gestaltet, dass sie auch
auf mobilen Endgeräten nutzbar sind.
Hinweise für einzelne Felder werden unten rechts bzw. an den Feldern im Formular angezeigt,
Hinweise zu den fachlichen Hintergründen sind der Technischen Beschreibung zu entnehmen.
Die Eingabemasken unterscheiden sich zwischen Güterverkehr (TCM) und Personenverkehr
(PTCM) in wenigen Punkten. Dies ist in der leicht unterschiedliche Ausgestaltung der entspre-
chenden TAF/TAP-Meldungen im europäischen Standard begründet.
Güterverkehr (TCM):

## Seite 7

Personenverkehr (PTCM):
Ein Abschnitt bezeichnet immer einen Teil des Laufwegs des Zuges, auf dem sich die angege-
benen Daten nicht verändern. Bei Änderungen eines oder mehrerer Daten wie zum Beispiel durch
das Absetzen von Wagen, ist ein neuer Abschnitt anzulegen. Es können mehrere Abschnitte
zusammen übermittelt werden. Grundsätzlich sind nur Abschnitte mit Betriebsstellen auf dem
Netz der DB InfraGO anzugeben. Die Angabe ausländischer Ländercodes ist nur für Betriebs-
stellen der DB InfraGO vorgesehen, die auf ausländischem Staatsgebiet liegen.

## Seite 8

Durch einen Klick auf “Senden” werden die eingegebenen Daten verarbeitet und eine TCM/PTCM
an die TAF/TAP-Datenschnittstelle der DB InfraGO (Betriebsdatenverteiler, BDV) zur weiteren
Nutzung übermittelt. Dies ist erst nach der Eingabe aller verpflichtenden Informationen möglich.
Ebenfalls ist es möglich, eingegebene Daten als Vorlage zu speichern oder als xml- bzw. csv-
Datei zu exportieren.
Vorlagen:
Eingegebene Zugeigenschaften können als Vorlage für weitere Eingaben (zB für ähnliche Züge)
unten links im Formular gespeichert oder im xml oder csv-Format exportiert werden.
Gespeicherte Vorlagen können dann auf der Startseite abgerufen werden:
3.2 Hochladen einer csv-Datei
Die Funktion zum Hochladen einer csv-Datei ist wegen der leicht unterschiedlichen Inhalte der
TCM und PTCM ebenfalls in Güterverkehr (GV) und Personenverkehr (PV) aufgeteilt.

## Seite 9

Für die Übermittlung der Zugeigenschaften via csv-Datei ist das Template der DB InfraGO zu
nutzen. Dieses Template besteht aus drei einzelnen csv-Dateien, die zueinander in Zusammen-
hang stehen. Die Aufteilung in drei einzelne Dateien erleichtert die Nutzung aus Gründen der
Hierarchie in Zuordnung und Aufbau der Daten. Ferner wird es so möglich, Triebfahrzeuge und
Züge (Zugnummern) als stabilere Daten in je einer extra Datei zu halten und für die volatileren
Angaben zu Abschnitten in der dritten Datei nur zu referenzieren. Dies verhindert mehrfache
Neueingaben derselben Informationen für verschiedene Abschnitte eines Zuglaufs.
Die Zuordnung der Buttons zu den csv-Dateien ist dabei wie folgt:
o Züge auswählen: train_ident.csv
o Abschnitte auswählen: journey_sections.csv
o Triebfahrzeuge auswählen: loco_ident.csv (optional)
Hierbei ist die „journey_sections.csv“ die führende Datei, in der Angaben wie die Zugnummer in
„train_ident.csv“ und Angaben zum Triebfahrzeug in „loco_ident.csv“ mittels Referenzen den je-
weiligen Streckenabschnitten zugeordnet werden können. Bei den in den csv-Musterdateien be-
reits vorhanden Werten handelt es sich um Beispielwerte als Ausfüllhilfe. Diese müssen vor Ein-
gabe der tatsächlichen Zugeigenschaften gelöscht werden.
Die csv-Felder “Zug-Referenz” und “LocoIdent-Referenz” sind numerische Referenznummern
und können frei vergeben werden. Sie dienen dazu den Abschnitten in “journey_sections.csv”
Triebfahrzeuge und Züge zuzuordnen. Bei Mehrfachzuordnung von Triebfahrzeugen wird die
“LocoIdent-Referenz” im kommasepariert angegeben.
Beispiel “journey_sections.csv”:
Beispiel “loco_ident.csv”:
Welche Angaben in den csv-Dateien verpflichtend bzw. optional sind kann entweder der Techni-
schen Beschreibung oder dem Formular für die manuelle Eingabe entnommen werden.

## Seite 10

Fehlerhafte Angaben in den csv-Dateien werden nach dem Hochladen in einer Liste angezeigt:
Die korrekte Zuordnung kann nach erfolgreichem Hochladen und vor dem Versenden durch eine
Vorprüfung (zB semantisch korrekte Befüllung der Felder) getestet werden. Fachliche Inhalte
werden dabei nicht geprüft.
3.3 Hochladen einer xml-Datei
Sollen die Zugeigenschaften mittels einer xml-Datei hochgeladen werden, so ist das unter der
Funktion „Zug importieren (xml)“ möglich.
Die hochzuladende xml-Datei muss einer TCM/PTCM mit den von DB InfraGO geforderten Inhal-
ten im europäischen xsd-Schema 3.0.2.0 entsprechen. Soll die Funktion zur Meldung reduzierter
Bremshundertstel (vgl. Technischen Beschreibung der TCM/PTCM „Empfang von aktuellen Zu-
geigenschaften gem. TAF/TAP TSI“) genutzt werden, so ist die durch DB InfraGO angepasste

## Seite 11

xsd zu verwenden. Diese steht auf der Homepage der DB InfraGO (www.dbinfrago.com/taf-tap-
tsi) im Bereich „Betrieb: Meldungen EVU an DB InfraGO AG“ zum Herunterladen bereit. Dort und
in der Technischen Beschreibung sind weitere Informationen zu finden.

## Seite 12

4 Historie mit Anzeige von Verarbeitungsfehlern
Den Nutzern steht eine Historie der über den TCM-Editor versendeten Meldungen zur Verfü-
gung. In der Historie können versendete Daten eingesehen und bei Bedarf für die Erstellung ei-
nes neuen Zuges verwendet werden. Ferner werden hier etwaige Fehler bei der Verarbeitung
der Meldungen bei DB InfraGO angezeigt.
Die Historie umfasst den Zeitraum der letzten 14 Monate, ältere Daten werden gelöscht. Pro
Monat werden bis zu 100 Meldungen vorgehalten.
4.1 Nutzung der Historie
Der Aufruf der Historie erfolgt über die Startseite:
In der Historie können Meldungen ausgewählt und wiederum als Vorlage für eine neue Meldung
genutzt werden.
4.1.1 Anzeige von Verarbeitungsfehlern
Sollte die Verarbeitung der TCM/PTCM trotz erfolgreicher Validierung im TCM-Editor in den Dis-
positionssystemen der DB InfraGO nicht erfolgreich sein, so wird dieser Fehler in der Historie an
der entsprechenden Meldung angezeigt. Ein solcher Fehler kann beispielsweise auftreten, wenn
Betriebsstellen aus der TCM/PTCM nicht den Betriebsstellen im Fahrplan dieses Zuges im Dis-
posystem zugeordnet werden können oder Baureihennummer und -variante eines Triebfahr-
zeugs nicht ermittelbar sind. Die angezeigten Fehlercodes (im Beispiel unten „5070“) entsprechen
denen in der Technischen Beschreibung der Fehlermeldung „Empfang und Versand der Fehler-
meldung gem. TAF/TAP TSI“. Diese steht auf der Homepage der DB InfraGO (www.dbin-
frago.com/taf-tap-tsi) im Bereich „Betrieb: Meldungen DB InfraGO AG an EVU“ zum Herunterla-
den bereit.

## Seite 13

5 Testmöglichkeiten
Es besteht die Möglichkeit im TCM-Editor einen Testmodus zu nutzen.
Dieser Testmodus bietet die Möglichkeit die Funktionen des TCM-Editors kennenzulernen und
auszuprobieren ohne Gefahr zu laufen aus Versehen produktiv Eigenschaften eines realen Zu-
ges zu verändern. Es stehen alle Funktionen inklusive der Validierung zur Verfügung. Das Ver-
senden von Nachrichten ist aus diesem Modus heraus nicht möglich.
Der Testmodus wird auf allen Seiten durch eine geänderte Kopfzeile kenntlich gemacht.
Impressum
DB InfraGO AG
Adam-Riese-Straße 11-13
60327 Frankfurt
Sitz der Gesellschaft: Frankfurt am Main
Registergericht: Frankfurt am Main, HRB 50879
USt-IdNr.: DE 199861757
