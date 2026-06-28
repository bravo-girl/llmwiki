# Anlage 3: xsd-Kompatibilität und Abweichungen vom Zielzustand

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13705104/0a7223a5b01b88daf42617537c3c63eb/Anlage-3-Uebersicht-der-Kompatibilitaet-der-xsd-Versionen-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13705104/0a7223a5b01b88daf42617537c3c63eb/Anlage-3-Uebersicht-der-Kompatibilitaet-der-xsd-Versionen-data.pdf)
- Quellen-Schlüssel: `src-3b721ac065e40b2569e5`
- Abrufdatum: 2026-06-27
- Original: [[anlage-3-xsd-kompatibilitat-und-abweichungen-vom-zielzustand--src-3b721ac065e40b2569e5.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

EVU-Schnittstelle des Bestellsystems („pa-
thOS“)
Anlage 3
Übersicht der Kompatibilität
der xsd-Versionen und Abweichungen vom
Zielzustand
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
Version 4.6.3
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
1
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 2

Historie / Änderungen
Version Bearbeitet/ ge- Beschreibung der Änderungen/Bemerkungen Datum
ändert von
4.1.0 Initiale Fassung 23.07.2019
4.1.1 Zuordnung xsd-Version 2.2.4 25.02.2020
4.2.0 Zuordnung xsd-Version 2.5.0.0 26.02.2021
4.3.0 Zuordnung xsd-Version 3.0.2.0 16.08.2021
4.4.0 Zuordnung xsd-Version 3.1.0.1 28.02.2022
4.4.1 Zuordnung xsd-Version 3.2.0.0 18.08.2022
4.4.2 Zuordnung xsd-Version 3.3.0.0 10.05.2023
4.5.0 Zuordnung xsd-Version 3.5.0.0 17.07.2024
4.6.0 Entfernung von Kompatibilitäten veralteter xsd- 17.04.2025
Versionen
4.6.1 Aufnahme der Einschränkungen zur Sicherstellung 14.07.2025
des GoLives für die Netzfahrplanphase 2027
4.6.2 Erweiterung der Einschränkungen aus Version 11.09.2025
4.6.1
4.6.3 DB InfraGO AG Keine Anpassungen 18.12.2025
Fabian Sommer
2
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 3

1 Vorgaben zur Kompatibilität und Anwendung der Dokumentation
Die Dokumentation für die Schnittstelle zum Bestellsystem der DB InfraGO („pathOS“) besteht aus einem Hauptdokument und mehreren Anlagen (siehe
Hauptdokument, Kapitel 3.1). Alle zueinander gehörenden Dokumente haben immer die gleiche Versionsnummer. Änderungen an den Dokumenten sind
jeweils in der Änderungshistorie des betreffenden Dokuments aufgeführt, die Sie am Anfang jedes Dokuments finden.
Die folgende Tabelle enthält eine Übersicht der Versionen der Dokumentation für die EVU-Schnittstelle des Bestellsystems der DB InfraGO („pathOS“).
Jeder dieser Versionen ist die jeweilige der Dokumentation zu Grunde liegende Version der xsd zugeordnet. Zusätzlich sind alle kompatiblen xsd-
Versionen benannt, die für den in dieser Dokumentation beschriebenen Nachrichtenaustausch ebenfalls genutzt werden können.
Versionsnummer Veröffentlicht Anzuwenden Basiert auf Kompatible
SST- am ab xsd-Version xsd-Versionen
Dokumentation
4.6.3 18.12.2025 13.03.2026 3.5.0.0 keine
3
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 4

2 Vorübergehende, notwendige Abweichungen vom Soll
Die EVU-SST-Dokumente (Hauptdokument ergänzt um die Anlagen 1, 4,8 und 9) bilden die fachlichen Vorgaben für die Prozesse zur Durchführung der
Trassenbestellung und -vergabe.
Sie beschreiben den aktuell bekannten Soll-Zustand einer finalen TAF/TAP TSI Umsetzung an der Schnittstelle der DB InfraGO AG.
Dieser Soll-Zustand ist bei der ersten Inbetriebnahme nicht erreichbar, weswegen im Folgenden die Einschränkungen und Anpassungen aufgeführt sind,
die zu beachten sind.
Es bleibt davon aber unbenommen das Ziel, den Soll-Zustand in späteren Produktivsetzungen sukzessiv zu erreichen.
4
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 5

Thema Referenz Beschreibung Vorübergehende Lösung
Rahmenvertragsvergabe Hauptdokument, Kap. Derzeit werden keine neuen Rahmenverträge Änderungen an bestehenden Rahmenverträgen
und -änderung 5.4 geschlossen. Sobald über eine Wiedereinfüh- müssen über Kanäle abseits von TTT durchge-
rung von Rahmenverträgen entschieden ist, führt werden. Das genaue Prozedere wird durch
wird die Implementierung hierzu stattfinden. die bekannten Ansprechpartner kommuniziert. Die
Dies betrifft auch die Änderung an bestehen- Referenzierung von Rahmenvertragskapazitäten
den Rahmenverträgen. muss nach dem Verfahren aus Kap. 5.4.17 und
5.4.18 unter Angabe einer PathID mit RoR-Code
„DE07“ angegeben werden.
Kurzfristige Fahrlagen- Hauptdokument, Kap. Möglichkeit zur Buchung von automatisiert Das Produkt wird weiterhin ausschließlich über die
beratung mit Bu- 5.5 erzeugten Trassenvorschlägen ohne manuel- Click&Ride-App angeboten.
chungsoption len Eingriff.
Prozesse für Nebenleis- Hauptdokument, Kap. 6 Skizzierte Prozesse für die Nebenleistungen Die Prozesse sind bis auf Weiteres nicht über die
tungen Fahrplan- und Betriebsprogrammstudien, dargestellten Prozesse durchführbar. Es gelten
Fahrplanzeiten usw. sollen unter Verwendung die bisherigen Verfahren.
des TAF/TAP TSI Standards über das CI
oder pathOS durchführbar sein.
Änderung der Aus- Hauptdokument, Kap. Wenn im Rahmen der Trassenkonstruktion Das heutige Vorgehen muss beibehalten werden.
gangsregion im Tras- 5.2 und 5.3 die Startbetriebsstelle in einer anderen Regi- Muss durch eine Änderung der Startbetriebsstelle
senangebot on (alt Ausgangsniederlassung) verschoben die Region geändert werden, ist vom Kunde eine
werden muss, kann kein Angebot erzeugt neue Trasse zu bestellen und die erste Trasse zu
werden. stornieren. Die ReferenceTrainID, sowie die OTN
kann, sofern die entsprechenden Regeln einge-
halten werden, beibehalten werden. Dies gilt nicht
für netzausgelöste Änderungen im unterjährigen
Baufahrplan.
Änderung der Startbe- Hauptdokument Kap 5.3 Eine Änderung an der Startbetriebsstelle, die Das heutige Verfahren muss beibehalten werden.
triebsstelle nach Ver- zu einer Änderung der Start-Region (alt Aus- Ändert sich durch die Änderung nach Vertrags-
tragsschluss gangsniederlassung) führen würde, kann schluss die Ausgangsregion, ist in Absprache mit
nicht entgegengenommen werden. der DB InfraGO die Trasse zu stornieren und neu
zu bestellen. Die ReferenceTrainID, sowie die
OTN kann, sofern die entsprechenden Regeln
5
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 6

Thema Referenz Beschreibung Vorübergehende Lösung
eingehalten werden, beibehalten werden.
Die gesamte Einschränkung gilt nicht für netz-
ausgelöste Änderungen aus dem unterjährigen
Baufahrplan.“
Beginn der Trasse am Hauptdokument, Eine vom Kunden bestellte Startbetriebsstelle Bestellte Verkehrstage können von Seiten DB
Vortag Kap.Kap 5.2 und 5.3 in kann unter der Verwendung des OffsetToRe- InfraGO im Rahmen der Konstruktion nicht auf
Verbindung mit Abb. 2 ference im Rahmen der Konstruktion auf den den Vortag verschoben werden. Eine Anwendung
Vortag verschoben werden. Dadurch verän- des OffsetToReference ist in diesen Fällen nicht
dert sich der Verkehrstag des Pathes auf den möglich.
Vortag und damit unter Umständen auf einen
Zeitpunkt außerhalb des Kalenders des Refe-
renceTrains. Mit der Angabe des OffsetToRe-
ference ist die Eindeutigkeit wieder herge-
stellt
Verwendung von Frei- Anlage 1 und Anlage 10, In den Nachrichtentypen unter TAF/TAP TSI Notwendige Informationen für die Konstruktion
textfeldern in den Nach- alle Nachrichtentypen, sind an mehrere Stellen „FreeTextField“- sind in den dafür vorgesehenen Standardfeldern
richten Tabelle 17, Datenfelder vorgesehen. Diese sind auf Mes- vorzunehmen. Sind darüber hinaus weitere Anga-
sage-Ebene und in den Strukturen „Administ- ben zu machen, sind diese in das Feld „FreeText-
rativeContactInformation“ sowie Plan- Field“ auf Message-Ebene einzutragen.
nedJourneyLocation innnerhalb der Train-
und PathInformation zu finden. Die Felder auf
Messageebene sind wie beschrieben, für die
definierten Geschäftsvorfälle zu verwenden.
Die Informationen in den „FreeTextField“-
Feldern „AdministrativeContactInformation
und der PlannedJourneyLocation werden
ignoriert
Ermittlung der Gesamt- Anlage 1, Anlage 10 Laut TAF/TAP TSI ist vom Besteller die Last Die Last und Länge des Triebfahrzeugs wird
länge und Gesamtlast und Länge von Triebfahrzeug, Wagenzug durch die Stammdaten bei der DB InfraGO über-
und Gesamtzug zu übermitteln und dies für schrieben und führt dann auch womöglich zu einer
die Konstruktion zu verwenden. geänderten Gesamtzuglast und -länge.
Entfall Route- Hauptdokument Kap 5.6 Durch die Trennung des Gesamtzuglaufs Der Prozess zur Änderung der Route wird bis auf
(Route)von der jeweiligen Trasse im Verant- Weiteres von DB InfraGO nicht unterstützt. Nach
6
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 7

Thema Referenz Beschreibung Vorübergehende Lösung
Updateprozesse wortungsbereichs des jeweiliges EIU muss der initialen Trassenbestellungen werden keine
bei notwendigen Änderungen an den Tras- Änderungen an der Route mehr vorgenommen.
senanteilen geprüft werden, ob die Route Durch die Änderung der Route notwendige zeitli-
noch zur Trasse passt. Falls nicht, muss der che Aufteilungen von Trassen werden nicht
Route-Updateprozess durchgeführt werden. durchgeführt.
Entfall UpdateLinkMes- Hauptdokument Die Nachricht kann zur Änderung von Ver- Keine vorübergehende Lösung. Es wird ein Kon-
sage knüpfungen zwischen Trassen (Pathes) und zept zur Verwendung der UpdateLinkMessage
Kap. 3
ReferenceTrains verwendet werden. Entge- entworfen, mit dem Markt konsultiert und danach
gen der bisher beschriebenen Nicht- veröffentlicht.
Verwendung aus der Dokumentation existiert
der Entschluss, die UpdateLinkMessage be-
reits im Fahrplan zu verwenden.
Nur eine AffectedSec- Hauptdokument, Kap. 3, Die europäische xsd sieht die mehrfache Entgegen dem europäischen Standard kann von
tion Anlage 1, Nachrichten Verwendung der Struktur „AffectedSection“ Seiten der DB InfraGO nur eine Struktur „Affec-
PathNotAvailable und innerhalb der Nachrichten PathNotAvailable tedSection“ je Nachricht entgegengenommen
PathCanceled und PathCanceled vor. werden. Sollten mehrere Stornierungssachverhal-
te kommuniziert werden, müssen diese in ge-
trennten Nachrichten gesendet werden. Ebenso
wird die DB InfraGo für die netzausgelöste Stor-
nierung oder Änderung immer nur einmal die
Struktur „AffectedSection“ verwenden.
Die DB InfraGO strebt die Änderung des europäi-
schen Standards an.
Kein Base64 Kodierung ERA-TD-104 In den mitgeltenden technischen Dokumen- Die InfraGO wird diese Kodierungsverfahren bis
ten zur TAF/TAP TSI ist in TD-104 die Kodie- auf Weiteres nicht umsetzen. Es gelten die Fest-
rungsverfahren mit Base64 vorgeschrieben. legungen aus den Anlagen zu dieser Schnittstelle.
Antriebsart von Hybrid- Anlage 1, Anlage 10 Der Wechsel der verwendeten Antriebsart ist Das bisherige Verfahren (Darstellung der An-
Tfz mit der Angabe im Feld „TypeOfUsedHybrid- triebsart über Tfz-Baureihenvarianten) bleibt bis
PowerUnit“ anzugeben. Ein Wechsel des auf Weiteres bestehen. Dabei wird ein Wechsel
Triebfahrzeugs ist nicht notwendig. der Antriebsart als Triebfahrzeugwechsel darge-
stellt, was auch bei Durchfahrt erfolgen kann. Die
Angabe im Feld „TypeofUsedHybridPowerUnit“ ist
ebenfalls anzugeben. Bei Abweichung ist die ver-
7
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 8

Thema Referenz Beschreibung Vorübergehende Lösung
wendete Baureihennummer maßgebend.
Ignorieren von Train- Anlage 1, Tabelle 20 & Angaben in den Attributen TrainType, Traf- Angaben in TrainType, TrafficType und Commer-
Type, TrafficType und Kap.4.3.4 ficType und CommercialTrafficType be- cialTrafficType werden bis auf weiteres ignoriert
CommercialTrafficType schreiben die Trassenanmeldung zu Gunsten von zggHauptnummer, zggUnter-
nummer und zggKurzbez. Sind diese Angaben in
der PRM enthalten, werden diese zu Gunsten der
Zuggattungsangaben nachrangig behandelt und
nicht verwendet.
ResponsibleIM Anlage 1, Tabelle 20 Die Angabe ist für den Startbahnhof und ggf. Die Angabe ResponsibleIM wird immer dann mit
“Struktur PlannedJour- an jeder Netzgrenze anzugeben und be- dem Wert für die DB InfraGO befüllt, wenn die DB
neyLocation Datenfel- zeichnet das für den nachfolgenden Abschnitt InfraGO den Laufpunkt konstruiert hat. Hierzu wird
der” verantwortliche EIU. der Company Code/Organisation Code der DB
InfraGO an jedem Laufpunkt abweichend zur ak-
tuellen Spezifikation wiederholt statt nur am ersten
Laufpunkt.
Hierbei gilt: Der erste Laufpunkt mit Company
Code/Organisation Code der DB InfraGO ent-
spricht dem so genannten Einbruchspunkt, wel-
cher heute in TPN existiert. Der letzte Laufpunkt
mit Company Code/Organisation Code der DB
InfraGO, entspricht dem so genannten Aus-
bruchspunkt. Innerhalb der PathInformation einer
PathDetails-Message kann sich dies wiederholen.
An allen anderen Laufpunkten bleibt der Wert für
ResponsibleIM entweder leer oder ist durch den
Company Code/Organisation Code eines anderen
EIU befüllt.
Abweichend zur Spezifikation muss, solange die-
se Einschränkung gilt, am ersten Laufpunkt der
PathInformation kein ResponsibleIM angegeben
sein.
Abfragen von Objekten Hauptdokument, Kap Unter Verwendung des ObjectInfoType „R“ Zum GoLive wird es nur möglich sein, für einzelne
mit Hilfe der ObjectIn- können zu einem Objekt alle beim jeweiligen PathIDs die jeweiligen Informationen bei der DB
8
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3

## Seite 9

Thema Referenz Beschreibung Vorübergehende Lösung
foMessage 7.1 Partner vorhandenen Informationen abgefragt InfraGO AG abzurufen. Eine Abfrage über ein
werden. gruppierendes Objekt wie Route, ReferenceTrain
oder CaseReference wird nicht möglich sein.
Zugnummernregeln Hauptdokument Kap Anwendung der ReasonofReferenceCodes Die Regel wird bis auf Weiteres ausgesetzt und
4.5.1 1006 und 1007 für die Vergabe der gleichen nicht verwendet. Die Bestellung hat entweder mit
Zugnummer von getrennten PathRequests unterschiedlichen Zugnummern oder ohne Zug-
für einen Verkehrstag nummer zu erfolgen oder die Fahrlage ist als ein
PathRequest zu versenden.
Das Trassenangebot der DB InfraGO AG wird
entsprechend der eingegangenen Anfrage ver-
sendet.
Verwendung mehrerer Keine Nach europäischem Standard ist es darstell- Von Seiten DB InfraGO AG wird dieses Vorgehen
OTN in einer PathRe- bar, dass sich die OTN innerhalb der Struktur nicht unterstützt. Die am ersten Laufwegspunkt
questMessage „PathInformation“ ändert. angegebene OTN ist für die gesamte Fahrlage
bindend. Soll die Fahrlage mit unterschiedlichen
OTN verkehren, ist dies unter Verwendung einer
weiteren PathRequestMessage anzuwenden und
zu begründen.
9
Anlage 3 Übersicht der Kompatibilität der xsd-Versionen und Abweichungen vom Zielzustand, Version 4.6.3
