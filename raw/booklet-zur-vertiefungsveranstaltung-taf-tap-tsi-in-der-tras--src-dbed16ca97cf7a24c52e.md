# Booklet zur Vertiefungsveranstaltung TAF/TAP TSI in der Trassenanmeldung – Januar 2024

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12662024/af7d2da3914e7759a1f9bde0edf75efe/Booklet-zur-Vertiefungsveranstaltung-TAF-TAP-TSI-in-der-Trassenanmeldung-Januar-2024-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12662024/af7d2da3914e7759a1f9bde0edf75efe/Booklet-zur-Vertiefungsveranstaltung-TAF-TAP-TSI-in-der-Trassenanmeldung-Januar-2024-data.pdf)
- Quellen-Schlüssel: `src-dbed16ca97cf7a24c52e`
- Abrufdatum: 2026-06-28
- Original: [[booklet-zur-vertiefungsveranstaltung-taf-tap-tsi-in-der-trassenanmeldung--src-dbed16ca97cf7a24c52e.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

TAF/TAP TSI @ DB InfraGO AG.
Vertiefungsveranstaltung Trassenanmeldung.
Booklet im Nachgang zum 17.01.2024 und 25.01.2024
Aktualisierung April 2024: Zugangsdaten
Testumgebung + Zeitplan + DB InfraGO-Links
DB InfraGO AG | Januar 2024 1

## Seite 2

Aktualisierung April 2024
Aktualisierung April 2024
(die ursprünglichen Folien sind noch unverändert in der
Unterlage. Es wurden nicht alle Folien überarbeitet!)
DB InfraGO AG | April 2024 2

## Seite 3

Aktualisierung April 2024
Übersicht Umstellung auf TAF/TAP TSI.
Die Gesamtplanung der DB InfraGO bis 2026.
STAND APRIL 2024
2022 2023 2024 2025 2026
TAF/TAP TSI im Fahrplan („Planning“)
~ Q1/25: 04-09/25:
Anmeldung Netzfahrplan für das Fahrplanjahr 2026
„Soft-Release“ Phase II
03/25:
Gelegenheitsverkehr für das Fahrplanjahr 2026 Go-Live (Phase I)
GelV ab 09/25
Q3/22: Stammdaten im
Stammdatenbereitstellung
neuen Format (zum Test)
Q1/24: Mai 24: Stammdaten vollständig
Schulungsmaßnahmen und Bereitstellung Material Stammdaten-Schnittstelle live
Okt 24: Schulungsplattform live
Userverwaltung im Kundenportal (via SuperUser und EinfachBahn)
tbd – abhängig von NuR
Testphasen des Neuen Bestellsystems Seit 08/21: Test SST & Seit 02/22: Test im Portal – Testumgebung bleibt online und wird fortlaufend aktualisiert
TAF/TAP TSI im Betrieb („Operations“)
Sukzessive Einführung betrieblicher Meldungen 02-03/25: 12/25:
Meldungen auf Basis OTN/Zugnr. Alle Meldungen
Einführung PRISMA auf Basis
04/23: Test mit PRISMA-System 02-03/25: ReferenceTrainID
Go-Live PRISMA und PathID
(Verpflichtende Abgabe
Pilotbetrieb und Test der betrieblichen Meldungen unter TAF/TAP Seit 2015: Pilotbetrieb TCM/PTCM)
Zum Fahrplanjahr 2026: Einführung
Grundlegendes zu TAF/TAP TSI
TAF/TAP TSI bei der DB InfraGO AG
Beantragung Company Code – ab sofort Jeder beteiligte Akteur benötigt verbindlich einen Company Code wenn an TAF/TAP teilgenommen wird
Jedes EIU muss seine Betriebsstellen zusätzlich zur Ril100 mit PLC (& SLC) identifizieren. EVU müssen diese
Festlegung und Vergabe Primary Location Code (PLC) – ab sofort
verstehen
Update XSD-Schemata durch RNE inkl. Aktualisierung Schnittstellendokument DB InfraGO
Lfd. Aktualisierung: 2x pro Jahr (Winter/Sommer)
Revision der TSI (Änderungen aktuell in Ausarbeitung durch EU-Kommission)
Verabschiedung Inkraftsetzung
im RISC (geplant) (Q3/Q4 geplant)
DB InfraGO AG | April 2024 3

## Seite 4

Aktualisierung April 2024
Ab sofort kann das neue Webportal ausgiebig getestet werden.
Wir freuen uns über jedes Feedback und jede Idee.
ACHTUNG: NEUE DATEN AB APRIL 2024
1
Zugangsdaten zur Testumgebung
Diese Zugangsdaten stehen allen
▪ Link: https://bestellsystem-portal-test.dbinfrago.com/
Kunden zur Verfügung – achten Sie
▪ Username: [Kontaktangabe entfernt] also darauf, keine sensitiven
Informationen zu verwenden
▪ Passwort: Kaffee&Sahne
Weitere Informationen
▪ Es handelt sich um eine „lebende“ Testumgebung, die regelmäßig aktualisiert wird. Alle zurückgespielten
Angebote sind noch fiktiv, die Anbindung an die echte Konstruktion im Fahrplan folgt später.
▪ Sollte sich das Portal nach Login nicht direkt korrekt öffnen, im Menü auf „Vorgänge“ oder „Anmeldung“ klicken.
▪ Auf der Internetseite zum Neuen Bestellsystem finden Sie auch Erklärvideos zum Portal.
Feedback und Fragen
▪ Alle Fragen, Anregungen, Ideen, Feedback oder gefundene Fehler schicken Sie bitte einfach formlos
an das Postfach des Teams vom neuen Bestellsystem:
[Kontaktangabe entfernt]
DB InfraGO AG | April 2024 4

## Seite 5

Aktualisierung April 2024
Fachliche Details zur aktuellen Testumgebung.
Steuerworte für den „Mock“ und Tipps & Tricks.
Tipps & Tricks und Hinweise Steuerworte
▪ Die aktuell genutzte Testumgebung arbeitet weiterhin mit unserem ▪ Über das Freitextfeld unter Produkt-
sogenannten IFP-Mock, d.h. die Angebote werden nicht konstruiert, ausprägungen können bestimmte Fälle
sondern entsprechen im Normalfall exakt der Anmeldung „getriggert“ werden. Durch Eingabe von IFPMock:Steuerwort
„IFPMock:“ gefolgt vom jeweiligen
▪ Das Portal beherrscht mittlerweile auch die Tastatursteuerung – durch
Steuerwort, beeinflusst man für diese eine Anmeldung die Antworten
Drücken der Taste „Alt“ lassen sich die Kürzel anzeigen
▪ Auszug der aktuellen Steuerworte:
▪ Der Hilfemodus im Portal selbst ist an vielen Stellen bereits
implementiert – durch Drücken des oben rechts im Eingabe-Pop-Up − Multiple Es kommen 2 Angebote
einer Anmeldung öffnet sich dieser. Alle blau umrahmten Felder haben
− Nichtkonstruierbar Gesamte Anmeldung nicht konstruierbar
eine Erklärung – einfach drauf klicken
− TeilweiseNK 2 Angebote, 1 davon nicht konstruierbar
▪ Die Checkliste direkt neben dem Button „Anfrage absenden“ zeigt auf
− Via Es werden Zwischenlaufwegspunkte mitgeschickt
den ersten Blick ob man bei der Befüllung Punkte vergessen hat – nur
wenn sie grün ist, kann man abschicken: − Abw2 Es kommen Angebote mit Abweichungen
▪ Allerdings erfolgt NACH Absenden eine ▪ Darüber hinaus kann man auch den Netzfahrplan simulieren – hierzu
weitere Prüfung (so wie auch heute), die dann zusätzlich Aspekte wie muss der Eingangszeitpunkt manipuliert werden – dies erfolgt ebenfalls
korrekter Eingangszeitpunkt, korrekte Identifikatoren etc. prüft. über das Freitextfeld (ohne den Text „IFPMock:“):
Anschließend würde im Produktivbetrieb auch noch die
− Eingangszeitpunkt:2023-04-01T12:00:00 dies simuliert eine
Eingangsprüfung der Fahrplankonstruktion erfolgen
Anmeldung in der NEP1 und man bekommt mit zeitlicher
Verzögerung vorläufige Netzfahrplan-Angebote zurück
DB InfraGO AG | April 2024 5

## Seite 6

Aktualisierung April 2024
Übersicht der betrieblichen Meldungen unter TAF/TAP.
Einordnung gemäß Gesetzestext und Verbindlichkeit.
Meldungsname Deutsche Erläuterung Senderichtung Produktiv mit OTN Produktiv mit TAF/P-IDs
TAF/TAP-Gesetzestext: Pflichtmeldungen für EVU & EIU; DB InfraGO: Meldungen werden bereitgestellt, kein Zwang zur Verarbeitung durch EVU
• TrainRunningInformation message Zugstandort EIU > EVU [Telefonnummer entfernt]
• TrainRunningForecast message Prognose EIU > EVU [Telefonnummer entfernt]
• TrainDelayCause message Zusatzverspätung EIU > EVU [Telefonnummer entfernt]
• TrainRunningInterruption message Zuglauf unterbrochen EIU > EVU [Telefonnummer entfernt]
• Error message Meldung fehlerhaft Beidseitig - 12/2025
TAF/TAP-Gesetzestext: Verpflichtende Informationen, Verwendung der TAF/P-Meldungen optional; DB InfraGO: Meldungen alternativ zum etablierten Meldeweg
• ChangeOfTrack message Gleiswechsel EIU > EVU [Telefonnummer entfernt]
• TrainReady message Zugvorbereitungsmeldung EVU > EIU [Telefonnummer entfernt]
TAF/TAP-Gesetzestext: Keine Verpflichtung; DB InfraGO: Meldungen gemäß Fußnote verpflichtend, übrige Meldungen freiwillig
• TrainComposition message (TCM)* Zuginhaltsdaten, Güterverkehr EVU > EIU [Telefonnummer entfernt]
• PassengerTrainComposition message
Zuginhaltsdaten, Personenverkehr EVU > EIU [Telefonnummer entfernt]
(PTCM)*
• ObjectInfo message Anschluss-/Umlauf EVU > EIU [Telefonnummer entfernt]
• PathDetails message Dispositionsfahrplan EIU > EVU [Telefonnummer entfernt]
• PathSectionNotification message Ausfall/Teilausfall EIU > EVU [Telefonnummer entfernt]
• UpdateLink message Neuverlinkung Train/Path EVU > EIU - 12/2025
* Verpflichtung der TCM/PTCM-Messages über DB InfraGO AG Nutzungsbedingungen ab 12/2025
DB InfraGO AG | April 2024 6

## Seite 7

Ursprünglicher Foliensatz
DB InfraGO AG | April 2024 7

## Seite 8

Wissenswertes zur heutigen Vertiefungsveranstaltung.
Alles auf einen Blick.
Fokus: Vertiefung der Grundlagen und Diskussion der Fragestellung „Wie wird künftig in der
Trassenanmeldung mit TAF/TAP gearbeitet und wo braucht es eine neue Denkweise?“ – dafür
nutzen wir heute verschiedene Medien und Beispiele
Fragen einfach im F&A-Bereich einstellen & voten (per Daumen hoch) – Am Ende
haben wir ausreichend Zeit für die Antworten auf Ihre Fragen eingeplant
Die heutige Unterlage ist als eine Art „Nachschlagewerk“ aufgebaut und
liegt im Anschluss genau wie die aktuelle FAQ-Übersicht online auf unserer
TAF/TAP Informationsplattform unter Aktuelles & Events ab
Hinweis: Da TAF/TAP eine EU-Verordnung ist, nutzen wir an vielen
Stellen die neuen, vorgegebenen Begriffe in Englisch zur Eindeutigkeit.
DB InfraGO AG | Januar 2024 8

## Seite 9

Grundlegende Informationen.
Kundenveranstaltungen, Informationen und Unterlagen.
Informationsplattform TAF/TAP TSI:
▪ Allgemeine Unterlagen zu TAF/TAP – Plattform für alle Themen zu Betrieb und Fahrplan (inkl. Jeweiligen
Schnittstellen-Dokumenten)
▪ Link: https://www.dbinfrago.com/taf-tap-tsi
Events und Aktuelles rund um TAF/TAP TSI:
▪ Unterlagen zu allen TAF/TAP-Veranstaltungen, TAF/TAP-Newsletter und FAQ sowie Zugangsdaten für kommende
Veranstaltungen (aktuell noch nicht terminiert)
▪ Link: https://www.dbinfrago.com/taf-tap-tsi/events
Internetseite Neues Bestellsystem:
▪ Fachliche Details, Testzugang, Testfälle, Informationen für IT-Partner und künftig alle Informationen rund um
Schulungen (Videos, Präsentationen, Handbuch etc.) sowie Schulungsterminen
▪ Link: https://www.dbinfrago.com/neuesbestellsystem
DB InfraGO AG | Januar 2024 9

## Seite 10

Unsere heutige Agenda.
Der gemeinsame Weg.
Überblick & Einleitung 10‘
Grundlogik der neuen Objekte & Zusammenhänge 15‘
Von der Anmeldung bis zum Vertrag 30‘
Arbeiten mit Verträgen 10‘
Gemeinsame Fragerunde 25‘
Hinweis: Die in der Veranstaltung gezeigten zusätzlichen Animationen finden Sie
jeweils im passenden Kapitel (dazu gehört das rot hinterlegte Inhaltsverzeichnis)
DB InfraGO AG | Januar 2024 10

## Seite 11

Das neue Bestellsystem bis zum Fahrplanjahr 2026.
Aktuelle Zeitplanung.
Fahrplanjahr
2020 Ab Q3 2021 Ab Q2 2022 2024 2025
2026
Start Erste Erste Vorbereitung Portal & Bestellung
IT-Entwicklung Kundentests der Kundentests des Go-Live inkl. Schnittstelle ausschließlich über
Schnittstelle Online-Portals Schulungs- live mit neues Portal und
material und Modulen für Schnittstelle
Zugängen Anmeldephase
Nfpl. 2026
Keine
Ab September
Trassenanmeldung
Module für
über TPN mehr
GelV (Fplj.
2026) live
Den gesamten Zeitplan sowie die detaillierte
TPN weiterhin
Roadmap des Bestellsystems finden Sie immer
aktuell auf der TAF/TAP Informationsplattform relevant für
unterjährige
Trassen in 2025
DB InfraGO AG | Januar 2024 11

## Seite 12

Trassenanmeldung wie gewohnt über 2 Kanäle möglich.
Komfortables & modernes Webportal und technische Schnittstelle.
1
▪ Genau wie heute kann man künftig über eine Weboberfläche oder eigene IT via Schnittstelle bestellen.
▪ Heutiger Termin dreht sich um die grundlegende Logik von TAF/TAP – für beide Kanäle relevant. Alle, die
künftig Trassen bestellen sollten mit den Grundsätzen von TAF/TAP vertraut sein und sich darauf vorbereiten.
▪ Kontakt für alle Themen rund um das neue Bestellsystem: [Kontaktangabe entfernt]
Onlineportal / Weboberfläche
▪ Vollständig neues, TAF/TAP-konformes System mit modernem Layout und Design. Ablösung von TPN
zum Fahrplanjahr 2026. Tests jederzeit möglich – Zugangsdaten im Backup dieser Unterlage (und hier).
▪ Userverwaltung künftig über neues System mit Power-Usern – Details zu Schulungen kommen in 2024.
Technische Schnittstelle / Common Interface
▪ Auch eigene IT von EVU muss TAF/TAP konform implementiert werden: Alle technischen Details
in der Schnittstellendokumentation – wir sind seit 2021 in engem Austausch/Test mit IT-Partnern
▪ Jedes EVU sollte aktiv den Kontakt zum jeweiligen IT-Partner suchen
DB InfraGO AG | Januar 2024 12

## Seite 13

Grundlogik der neuen Objekte &
Zusammenhänge
DB InfraGO AG | Januar 2024 13

## Seite 14

Inhaltsverzeichnis.
1. Was passiert bei einer Trassenanmeldung?
2. Wie stellt sich das in TAF/TAP TSI dar?
3. Wo und wie werden die „Objekte“ genutzt?
4. Die Anwendung an drei Beispielen
DB InfraGO AG | Januar 2024 14

## Seite 15

Was passiert bei einer Trassenanmeldung?
Ich habe ein
Verkehrsbedürfnis!
EVU
DB InfraGO AG | Januar 2024 15

## Seite 16

Was passiert bei einer Trassenanmeldung?
Ich habe ein
Verkehrsbedürfnis!
Ich melde eine
Zugfahrt an!
EVU EIU
DB InfraGO AG | Januar 2024 16

## Seite 17

Was passiert bei einer Trassenanmeldung?
Ich habe ein
Verkehrsbedürfnis!
Ich melde eine
Zugfahrt an!
Hier ist Ihr
Trassenangebot!
EVU EIU
DB InfraGO AG | Januar 2024 17

## Seite 18

Was passiert bei einer Trassenanmeldung?
Ich habe ein
Verkehrsbedürfnis!
Ich melde eine
Zugfahrt an!
Hier ist Ihr
Find‘ ich gut Dann haben wir
Trassenangebot!
einen Vertrag
EVU EIU
DB InfraGO AG | Januar 2024 18

## Seite 19

Inhaltsverzeichnis.
1. Was passiert bei einer Trassenanmeldung?
2. Wie stellt sich das in TAF/TAP TSI dar?
3. Wo und wie werden die „Objekte“ genutzt?
4. Die Anwendung an drei Beispielen
DB InfraGO AG | Januar 2024 19

## Seite 20

Wie stellt sich das in TAF/TAP TSI dar?
Abbildung aller fachlich relevanten Elemente der
Ich habe ein
Verkehrsbedürfnis!
gewünschten Zugfahrt im Path im Status „Request“
EVU
PathRequestMessage enthält den gewünschten Path
Ich melde eine
sowie alle sonstigen anmeldungsrelevanten
Zugfahrt an!
Angaben
EVU
Fahrplanerische Umsetzung und Ausdetaillierung
Hier ist Ihr
wird als Path im Status „Final Offer“ zurückgegeben
Trassenangebot!
und ggf. als Vertrag gebucht
EIU
DB InfraGO AG | Januar 2024 20

## Seite 21

Das Path-Objekt durchläuft von Entwurf bis Vertrag
verschiedene Status der Ausdetaillierung und Verbindlichkeit
EIU konstruiert einen Fahrplan
<path> ?
? und bietet diesen prozesskonform
Status Entwurf
an
EVU
EVU beschreibt
die zu erbringende
Verkehrsleistung
EVU
EIU
<path> EVU
EIU <path>
Status Anmeldung
Status Angebot
<path>
Status Vorl. Angebot*
EVU
EIU
<path>
Meldet die Fahrt
beim betroffenen Status Vertrag
EIU an
EVU nimmt das Angebot an,
das EIU hebt das Angebot in den
Status Vertrag
* VNP/Vorläufiges Angebot nur im Netzfahrplan Phase 1 EVU
EIU
DB InfraGO AG | Januar 2024 21

## Seite 22

Inhaltsverzeichnis.
1. Was passiert bei einer Trassenanmeldung?
2. Wie stellt sich das in TAF/TAP TSI dar?
3. Wo und wie werden die „Objekte“ genutzt?
4. Die Anwendung an drei Beispielen
DB InfraGO AG | Januar 2024 22

## Seite 23

Die TAF/TAP TSI Objektwelt
Fachliche Beschreibung der zu planenden Verkehrsleistung
Fachliche Abbildung aller relevanten Elemente der
Ich habe ein gewünschten Zugfahrt als Path im Status „Request“
Verkehrsbedürfnis!
EVU <Path> im Status „Request“
- Beinhaltet die vollständige Beschreibung des
Verkehrsbedürfnisses mit
- erforderlichen Laufwegspunkten
(mind. Start und Ziel)
Ich melde eine
Zugfahrt an! - Zugcharakteristik
EVU (mind. am Start)
- Tageszeitangaben
(an mind. einem Laufwegspunkt)
<PlannedCalendar>
Hier ist Ihr
Trassenangebot!
- Definiert einen Verkehrszeitraum (mind. ein Tag)
- Enthält eine „Bitleiste“ die Verkehrstage innerhalb des
EIU Verkehrszeitraums definiert
DB InfraGO AG | Januar 2024 23

## Seite 24

Die TAF/TAP TSI Objektwelt
PathRequestMessage enthält den gewünschten Path
Ich habe ein sowie alle sonstigen anmeldungsrelevanten Daten
Verkehrsbedürfnis!
EVU <Path> im Status „Request“
<ReferenceTrainID> als Identifikationsmerkmal
- Vom EVU vergeben
Ich melde eine
- Wird als Grundlage für die betriebliche ReferenceTrainID
Zugfahrt an!
im gesamten Zuglauf verwendet
EVU
<Route> als „Steckbrief“ für den Laufweg
<PlannedCalendar>
Hier ist Ihr
Trassenangebot!
- Definiert einen Verkehrszeitraum (mind. ein Tag)
- Enthält eine „Bitleiste“ die Verkehrstage innerhalb des
EIU Verkehrszeitraums definiert
DB InfraGO AG | Januar 2024 24

## Seite 25

Exkurs: Route vs. Path im PathRequest
Zwei Sichten auf dieselbe Zugfahrt
Start A A Start
B Halt
<Path> im Status „Request“
C Durchfahrt
- Stellt den vom EVU gewünschten
<Route> als „Steckbrief“ für den
Fahrtverlauf mit allen
Laufweg
- Geografische Eckpunktdarstellung D Halt wesentlichen Anforderungen dar
- Beinhaltet die Zugcharakteristik
des Zuglaufs
- Beinhaltet detaillierte Angaben zu
- Muss Start, Ziel und Übergabe-Bst
E Halt
Anforderungen an den
aufzeigen
Betriebsstellen, wie etwa
F Durchfahrt Haltezeiten, TrainActivities
G Halt
Ziel H H Ziel
DB InfraGO AG | Januar 2024 25

## Seite 26

Die TAF/TAP TSI Objektwelt
Fahrplanerische Umsetzung der angemeldeten
Ich habe ein Zugfahrt mit allen planerischen Details
Verkehrsbedürfnis!
<Path> im Status „Final Offer“
EVU
- Hat eine vom EIU vergebene PathID
- Auskonstruierte Fahrplantrasse
Ich melde eine <PlannedCalendar>
Zugfahrt an!
- Kann eine Teilmenge des angemeldeten
EVU
PlannedCalendar sein
<ReferenceTrainID> als Identifikationsmerkmal
Hier ist Ihr
Trassenangebot!
<RouteID> als Verweis auf den „Laufwegssteckbrief“
EIU
DB InfraGO AG | Januar 2024 26

## Seite 27

Exkurs: PathRequest vs. PathDetails
Fahrtwunsch des EVU gegenüber dem Fahrplan des EIU
Start A A Start
Halt B B Halt
<Path> im Status „Request“
Durchfahrt C C Durchfahrt <Path> ab Status „Offer“
- Stellt den gewünschten
- Stellt den ausgeplanten
Fahrtverlauf mit allen
Fahrtverlauf mit allen
erforderlichen Anforderungen dar Halt D D Halt
durchfahrenen Betriebsstellen
- Beinhaltet die Zugcharakteristik
inklusive der zeitlichen Lage dar
- Beinhaltet detaillierte Angaben zu
Halt E E Halt - Beinhaltet die Zugcharakteristik
Anforderungen an den
- Stellt das Angebot bzw. nach
Betriebsstellen, wie etwa
Bestätigung durch EVU und EIU
Haltezeiten, TrainActivities Durchfahrt F F Durchfahrt
den E-INV/Trassenvertrag dar
Halt G G Halt
Ziel H H Ziel
DB InfraGO AG | Januar 2024 27

## Seite 28

Die Planung des Kunden startet beim Verkehrsbedürfnis.
ReferenceTrain und Route zusammen beschreiben dieses.
ReferenceTrain Route
▪ Mit dem ReferenceTrain definiert das EVU (LeadRU) ▪ Zusätzlich gibt es das Objekt „Route“, das den gesamten
zusammen mit ggf. weiteren beteiligten EVU in allgemeiner Laufweg, auch über verschiedene EIU hinweg, beinhaltet
Form eine geplante Verkehrsdienstleitung/Zugfahrt
▪ Die Route ist eine Vorgabe des EVU und Indikation für EIU
▪ Ein ReferenceTrain gilt über den gesamten Laufweg und
▪ Die Route beschreibt allgemein die Relation (z.B. von A über
bildet den geplanten Verkehrszeitraum ab
B nach C) und beinhaltet mindestens Start, Ziel und die
▪ Die dazugehörige ReferenceTrainID wird in der Handoverpoints (Fahrplanbearbeitungsgrenzen), also den
Kommunikation zwischen EVU und EIU verwendet (auch groben „geografischen Laufweg des Verkehrsbedürfnisses“-
über verschiedene Anmeldungen, die zur gleichen in etwa „wo will ich fahren?“)
„Zugfamilie“ gehören und bündelt damit mehrere Objekte)
▪ Insbesondere für Zugfahrten mit mehreren beteiligten EIU
▪ Primär betriebliche Relevanz, um einen tatsächlichen Zug ist die Route von Bedeutung, so dass jedes EIU den
zu identifizieren und zwar europaweit einheitlich Gesamtzuglauf von Start bis Ziel mit Handoverpoints kennt
▪ Bei einer Zugfahrt innerhalb eines Netzes enthält die Route
entsprechend nur Laufwegspunkte in diesem Netz
DB InfraGO AG | Januar 2024 28

## Seite 29

Die Trassenanmeldung erfolgt bei jedem EIU als PathRequest.
Trassenangebote werden als Path zurückgeschickt.
PathRequest Path
▪ Der PathRequest ist die Nachricht „hinter“ einer Trassen- ▪ Ein Path ist eine auskonstruierte Zugtrasse für
anmeldung: Alle zur Trassenkonstruktion erforderlichen konkrete Verkehrstage, inklusive Zwischenhalten,
Attribute müssen weiterhin vom EVU angegeben werden, Betriebsstellen, Durchfahrten etc.
u.a. Angaben zu
▪ Wenn mehrere EIU beteiligt sind, konstruiert jedes EIU
▪ der Produktausprägung, seinen Anteil als eigenen Path von Start zu Ziel bzw. von
Grenze zu Grenze („Handoverpoints“)
▪ dem Laufweg,
▪ der Zugcharakteristik,
▪ Für eine gewünschte Fahrlage (= 1 PathRequest) sind
▪ dem Verkehrszeitraum,
künftig mehrere Trassenangebote möglich („1:n-Logik“) –
▪ den wesentlichen Identifikatoren und Verknüpfungen
diese müssen alle zeitlich disjunkt sein und zusammen den
▪ Für verkehrstageabhängige Anpassungen an der gewünschten Verkehrszeitraum abdecken (maximal 1 pro
Fahrlage ist künftig die Erstellung eigener Verkehrstag) und können sich u.a. bzgl. Laufweg, Halten,
PathRequests nötig. Für einen ReferenceTrain können Fahrplanzeiten etc. unterscheiden. So gibt es z.B. auch keine
mehrere PathRequests gestellt werden Ergänzungsfahrpläne mehr
DB InfraGO AG | Januar 2024 29

## Seite 30

Zusammenspiel der wesentlichen Objekte.
Schematische Darstellung der 1:n Logik.
ReferenceTrain Route
1) Das Verkehrsbedürfnis des EVU wird
definiert durch den ReferenceTrain und die

Route. Insgesamt sind hier alle relevanten
übergreifenden Daten enthalten. Unter
Mo.–So. Mo.–So. einem ReferenceTrain dürfen mehrere
Routen sein
PathRequest PathRequest
2) Trassenanmeldungen erfolgen je EIU
separat und bei Abweichungen (z.B.
anderer Laufweg oder andere
Zugcharakteristik an bestimmten Tagen)
Mo.–Fr. Sa.–So.
auch innerhalb des EIU einzeln
3) Angebote entsprechen jeweils einer
Path Path Path
bestimmten Trassenanmeldung und
können immer gemäß der 1:n Logik
zurückgespielt werden (allerdings immer
maximal 1 Angebot je Verkehrstag)
Mo.–Fr. Sa. So.
4) Im Anschluss kann das EVU jedes
Angebot individuell bewerten und
beantworten
DB InfraGO AG | Januar 2024 30

## Seite 31

Alle TAF/TAP Objekte erhalten eindeutige Identifikatoren.
Die heutige Zugnummer heißt künftig Operational Train Number.
TAF/TAP Identifikatoren OTN (Zugnummer)
▪ Jedes beschriebene Objekt erhält seinen eindeutigen ▪ Die heutige Zugnummer heißt künftig Operational Train
Identifikator. Mit Hilfe der Identifikatoren können Number (OTN) und hat eine leicht veränderte Bedeutung
Referenzierungen zu anderen Objekten vorgenommen
▪ Auch mit TAF/TAP wird die Zugnummer so vergeben, wie
werden und Bedürfnisse eindeutig beschrieben werden
heute – mit geringfügig angepassten Regeln
▪ Aus der Struktur der Identifikatoren ist das Objekt, der
▪ Weiterhin möglich: OTN-Kontingente von DB InfraGO – im
Besitzer des Objekts, die Variante und das Fahrplanjahr
Regelfall erfolgt die Vergabe erst nach der Konstruktion
ablesbar
▪ Internationale Harmonisierung durch Durchgängigkeit der
▪ Das Core-Element ("Beschreibung der ID") ist frei durch
ReferenceTrainID bzw. RouteID – UIC Merkblätter 419-2 und
den Besitzer erstellbar und kann menschenlesbar sein,
419-3 sind weiterhin gültig – Abstimmung zwischen
somit können Züge auch über die TAF/TAP Identifikatoren
Beteiligten bleibt erforderlich
„sprechende“ Bezeichnungen erhalten
▪ Für ein Beispiel siehe Folgefolie
DB InfraGO AG | Januar 2024 31

## Seite 32

Beispielhafte Darstellung einer TAF/TAP ID.
PA / 0080 / Apfelbaum123 / 01 / 2024 / 2024-04-16
(nur Betrieb)
Object Type Company Code Core Element Variant Fahrplanjahr
Abfahrtsdatum
2 Stellen, AN 4 Stellen, N/AN 12 Stellen, AN 2 Stellen, AN 4 Stellen, N 10 Stellen, N
• Definiert Typ der • Company Code des • Vom Ersteller frei • 00 ist für den • Das Fahrplanjahr • Tagesscharfes
ID, u.a.: erstellenden festzulegende Zeichenfolge ReferenceTrain der Zugfahrt für Abgangsdatum der
PathRequest (PR), Unternehmens – dient der Identifikation belegt das bestellt wird tatsächlichen
ReferenceTrain der ID • EVU kann eigene Zugfahrt (damit
(TR), Route (RO), Logik nutzen eindeutig)
Path/PathDetails • Path-Objekte des
(PA) Fahrplans beginnen
mit einem
Buchstaben,
betriebliche
beginnen mit einer
Zahl
Hinweis: N: Nummerisch; AN: Alpha-Nummerisch
DB InfraGO AG | Januar 2024 32

## Seite 33

Die unterschiedlichen Beteiligten an einer Zugfahrt.
Auf Seiten der EVU („RU“) und EIU („IM“).
Rollen der EVU Rollen der EIU
▪ Seitens EVU gibt es unter TAF/TAP verschiedene Rollen – ▪ Seitens EIU gibt es unter TAF/TAP verschiedene Rollen –
diese können auch durch ein und dasselbe EVU belegt sein: diese können auch durch ein und dasselbe EIU belegt sein:
▪ Responsible Applicant: das verantwortliche EVU, welches ▪ ResponsibleIM: verantwortlich für die Steuerung und sichere
bestellt, aber nicht zwingend fährt. Dieses ist der Durchführung von Zugfahrten in der betrieblichen Phase,
Vertragspartner der DB InfraGO AG aber auch für die Abrechnung von Nutzungsentgelten in
diesem Bereich oder die Instandhaltung
▪ LeadRU: das federführende EVU, welches die
Trassenanmeldung zwischen den beteiligten EVU abstimmt ▪ PlanningIM: verantwortlich für alle Tätigkeiten im
Fahrplanerstellungs- und -bearbeitungsprozess
▪ ResponsibleRU: andere EVU, die z.B. Teile der Strecke
fahren, aber nicht selbst angemeldet haben ▪ CoordinatingIM: verantwortlich bei interoperablen Zügen
für die Abstimmung der Trassen an den Handoverpoints
IM = Infrastructure Manager (EIU)
RU = Railway Undertaking (EVU)
DB InfraGO AG | Januar 2024 33

## Seite 34

TAF/TAP erfordert zudem neue Codierungen.
Company Code und Primary/ Subsidiary Location Code.
Company Code PLC/SLC
▪ Eindeutiger Code zur Identifizierung jedes an TAF/TAP ▪ Mit Einführung von TAF/TAP wird es ein europaweit
teilnehmenden Unternehmens (EVU, EIU, Aufgabenträger standardisiertes Format zur Codierung von
etc.) Betriebsstellen geben: Primary und Subsidiary Locations
▪ Vergabe aktuell durch UIC (https://uic.org/support- ▪ PLC: eine Betriebsstelle wo Züge beginnen, enden, halten,
activities/it/rics) – Beantragung kostenlos durchfahren oder die Strecke wechseln
▪ Der Company Code ist derzeit nummerisch und vierstellig, ▪ SLC: muss mit PLC verknüpft sein und spezifiziert einen
künftig kann er auch alphanummerisch sein bestimmten Teil oder die Verwendung der PLC, z.B. Gleis,
Verladestellen etc.
▪ Ab dem 01.01.2026 Vergabe durch ERA für die EU
▪ Auf europäischer Ebene wird derzeit die Zuständigkeit und
▪ Der Code muss durch die EVU an alle betroffenen EIU
ein Zielsystem für die Vergabe und Organisation diskutiert
gemeldet werden (bei DB InfraGO an die Kundenberatung)
und definiert. Für Informationen bis dieses aufgebaut ist,
kann man sich weiterhin an den National Contact Point
TAF/TAP (NCP) wenden
DB InfraGO AG | Januar 2024 34

## Seite 35

Von der Anmeldung zum Vertrag.
DB InfraGO AG | Januar 2024 35

## Seite 36

Inhaltsverzeichnis.
1. Was passiert bei einer Trassenanmeldung?
2. Wie stellt sich das in TAF/TAP TSI dar?
3. Wo und wie werden die „Objekte“ genutzt?
4. Die Anwendung an drei Beispielen
‒ A) Einfache Anmeldung
‒ B) Komplexe Anmeldung
‒ C) Mehrere Infrastrukturen
DB InfraGO AG | Januar 2024 36

## Seite 37

Beispiel A - Einfache Fahrt, einfache Konstruktion
Der PathRequest detailliert die Eckpunkte der Zugfahrt
aus Sicht des anmeldenden EVU
EVU EIU
Inhalte des PathRequest an DB InfraGO
ReferenceTrainID TR 9876 -----ELEFANT 00 2026
ROUTEID: RO 9876 --MEINEROUTE 01 2026 C Ziel
Route
START: A
ZIEL: C
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026
B Durchfahrt
START: A
Path (Request) DURCHFAHRT: B
ZIEL: C
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO  DI  MI  DO FR  SA  SO  A Start
DB InfraGO AG | Januar 2024 37

## Seite 38

Beispiel A - Einfache Fahrt, einfache Konstruktion
Das EIU konstruiert einen Fahrplan,
der die EVU-Anforderungen erfüllt
EVU EIU
C Ziel
B Durchfahrt
A Start
DB InfraGO AG | Januar 2024 38

## Seite 39

Beispiel A - Einfache Fahrt, einfache Konstruktion
Das Angebot des EIU beinhaltet den auskonstruierten Fahrplan
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO
RefTrainID: TR 9876 -----ELEFANT 00 2026
ROUTEID: RO 9876 --MEINEROUTE 01 2026 C Ziel
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026 C3
C2
PATHID: PA 0080 SOWIRDGFAHRN 01 2026
C1
B4
START: A
B3
LAUFWEGSPUNKTE: A1, A2, B1, B2
B Durchfahrt
Path (Final Offer) DURCHFAHRT: B
B2
LAUFWEGSPUNKTE: B3, B4, C1, C2, C3
ZIEL: C B1
A2
Zugcharakteristik, Produktangaben
A1
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
      A Start
DB InfraGO AG | Januar 2024 39

## Seite 40

Beispiel B – Ein Verkehrsbedürfnis, zwei Anmeldungen
Abweichungen im Fahrtverlauf erfordern ggf. das Absenden
mehrerer Anmeldungen
EVU EIU
Inhalte des PathRequest 1 an DB InfraGO
ReferenceTrainID TR 9876 -----ELEFANT 00 2026
ROUTEID: RO 9876 --MEINEROUTE 01 2026 C Ziel
Route
START: A
ZIEL: C
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026
Durchfahrt (Di, Do, Sa)
B
START: A Halt (Mo, Mi, Fr, So)
Path (Request) DURCHFAHRT: B
ZIEL: C
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO DI  MI DO  FR SA  SO A Start
DB InfraGO AG | Januar 2024 40

## Seite 41

Beispiel B – Ein Verkehrsbedürfnis, zwei Anmeldungen
Die Abweichung im Verkehrsbedürfnis wird in einem zweiten
PathRequest exakt beschrieben
EVU EIU
Inhalte des PathRequest 1 an DB InfraGO
Inhalte des PathRequest 2 an DB InfraGO
ReferenceTrainID TR 9876 -----ELEFANT 00 2026
ReferenceTrainID TR 9876 -----ELEFANT 00 2026
ROUTEID: RO 9876 --MEINEROUTE 01 2026 C Ziel
ROUTEID: RO 9876 --MEINEROUTE 01 2026
Route
Route START: A
ZI
S
EL
T:ART:
C
A
ZIEL: C
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026
PATHREQUESTID: PR 9876 ICHWILLFAHRN 02 2026
Durchfahrt (Di, Do, Sa)
B
START: A Halt (Mo, Mi, Fr, So)
Path (Request) DU S R TA CH RT F : AHR A T: B
Path (Request)
ZI
H
EL
A:LT:
C
B
ZIEL: C
Zugcharakteristik, Produktangaben
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO DI  MI DO  FR SA  SO A Start
PlannedCalendar 01.04. – 07.04.
MO  DI MI  DO FR  SA SO 
DB InfraGO AG | Januar 2024 41

## Seite 42

Beispiel B - Ein Verkehrsbedürfnis, zwei Anmeldungen
Das EIU konstruiert Fahrpläne, die die Anforderungen
aus den beiden Anmeldungen erfüllen
EVU EIU
C Ziel
Durchfahrt (Di, Do, Sa)
B
Halt (Mo, Mi, Fr, So)
A Start
DB InfraGO AG | Januar 2024 42

## Seite 43

Beispiel B - Ein Verkehrsbedürfnis, zwei Anmeldungen
Die Angebote beziehen sich jeweils auf eine konkrete
Ausprägung der Trassenanmeldung
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO
RefTrainID: TR 9876 -----ELEFANT 00 2026
ROUTEID: RO 9876 --MEINEROUTE 01 2026 C Ziel
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026 C3
C2
PATHID: PA 0080 SOWIRDGFAHRN 01 2026
C1
B4
START: A
B3
LAUFWEGSPUNKTE: A1, A2, B1, B2
B Durchfahrt (Di, Do, Sa)
Path (Final Offer) DURCHFAHRT: B
B2
LAUFWEGSPUNKTE: B3, B4, C1, C2, C3
ZIEL: C B1
A2
Zugcharakteristik, Produktangaben
A1
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
   A Start
DB InfraGO AG | Januar 2024 43

## Seite 44

Beispiel B - Ein Verkehrsbedürfnis, zwei Anmeldungen
Zu jedem Verkehrstag entsteht so eine eindeutige Beschreibung
des konkret gültigen Fahrtverlaufs
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO
Inhalte der PathDetailsMessage 2 von DB InfraGO
RefTrainID: TR 9876 -----ELEFANT 00 2026
RO R U e T f E TIrDa:i n I D : R O T 9R8 97867 -6-M --E--I-NELEERFOAUNTTE [Telefonnummer entfernt] C Ziel
PA R THORUETQEI U D E : S T I D : P R R 9O8 97867 I6C H--MWEILINLFEARHORUNT E[Telefonnummer entfernt] C3
PATHREQUESTID: PR 9876 ICHWILLFAHRN 02 2026 C2
PATHID: PA 0080 SOWIRDGFAHRN 01 2026
PATHID: PA 0080 SOWIRDGFAHRN 02 2026 C1
B4
START: A
B3
LA S UTFAWRETG : SPUANKTE: A1, A2, B1, B2
B Halt (Mo, Mi, Fr, So)
Path (Final Offer) DU L RACUHFFWAEHGRSTP:UNBKTE: A1, A2, B1, B2
Path (Final Offer) LA H UFAWLTE : GSPUBNKTE: B3, B4, C1, C2, C3 B2
ZIE L LA:UFWCEGSPUNKTE: B3, B4, C1, C2, C3
B1
ZIEL: C A2
Zugcharakteristik, Produktangaben
A1
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
   A Start
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
   
DB InfraGO AG | Januar 2024 44

## Seite 45

Beispiel B - Ein Verkehrsbedürfnis, zwei Anmeldungen
Zu jedem Verkehrstag entsteht so eine eindeutige Beschreibung
des konkret gültigen Fahrtverlaufs
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO
RefTrainID: TR 9876 -----ELEFANT 00 2026
Inhalte der PathDetailsMessage 2 von DB InfraGO
ROUTEID: RO 9876 --MEINEROUTE 01 2026
RPAeTfTHrRaEinQIUDE:S T I D : PTRR 99887766 I-C---H-EWLIELFLAFNATH R0N[Telefonnummer entfernt]
C Ziel
R PA O T U H TIED ID : P : A 0 0 8 0 R S O O 9 W 8 I 7 R 6 D - G -M FA E H IN R E N R O 01 U T 2 E [Telefonnummer entfernt] C3
PATHREQUESTID: PR 9876 ICHWILLFAHRN 01 2026 C2
PSTAATRHTI:D : PAA 0080 SOWIRDGFAHRN 02 2026 C1
LAUFWEGSPUNKTE: A1, A2, B1, B2 B4
B3
Path (Final Offer) SD TUARRCTH: FAHART: B Durchfahrt (Di, Do, Sa)
B
LL AAUUFFWWEEGGSSPPUUNNKKTTEE:: AB13,, AB42,, BC11,, CB22, C3 Halt (Mo, Mi, Fr, So)
Path (Final Offer) HZIAELLT :: C B B2
LAUFWEGSPUNKTE: B3, B4, C1, C2, C3
B1
ZZ
I
u
E
g
L
c:har
C
akteristik, Produktangaben
A2
PlannedCalendar 01.04. – 07.04. A1
MO DI MI DO FR SA SO
Zugcharakteristik, Produktangaben  
A Start
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
   
DB InfraGO AG | Januar 2024 45

## Seite 46

Beispiel C – Eine Fahrt, mehrere Infrastrukturen
Überschreiten einer Netzgrenze erfordert das
Schneiden von Trassenanmeldungen
EIU
EVU EIU
Inhalte des PathRequest an DB InfraGO
C Ziel
ReferenceTrainID TR 9876 -----KAROTTE 00 2026
ROUTEID: RO 9876 -ANDEREFAHRT 01 2026
Route START: A
HANDOVER: B B Handover
ZIEL: C
PATHREQUESTID: PR 9876 ---ABANSMEER 01 2026
START: A
Path (Request)
HANDOVER: B
A Start
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
    
DB InfraGO AG | Januar 2024 46

## Seite 47

Beispiel C – Eine Fahrt, mehrere Infrastrukturen
Je EIU im Fahrtverlauf ist grundsätzlich ein
eigenständiger Request zu stellen
EIU
EVU EIU
Inhalte des PathRequest an DB InfraGO
Inhalte des PathRequest an weiteres EIU C Ziel
ReferenceTrainID TR 9876 -----KAROTTE 00 2026
ReferenceTrainID TR 9876 -----KAROTTE 00 2026
ROUTEID: RO 9876 -ANDEREFAHRT 01 2026
ROUTEID: RO 9876 -ANDEREFAHRT 01 2026
Route START: A
Route HASNTDAORVT:ER: AB B Handover
ZIEHLA: NDCOVER: B
ZIEL: C
PATHREQUESTID: PR 9876 ---ABANSMEER 01 2026
PATHREQUESTID: PR 9876 ---ABANSMEER 02 2026
START: A
Path (Request)
HAHNADNODVOERV:ER:BB
Path (Request)
ZIEL: C A Start
Zugcharakteristik, Produktangaben
Zugcharakteristik, Produktangaben
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
    
PlannedCalendar 01.04. – 07.04.
MO DI MI DO FR SA SO
    
DB InfraGO AG | Januar 2024 47

## Seite 48

Beispiel C – Eine Fahrt, mehrere Infrastrukturen
Die beteiligten EIU stimmen die
Konstruktionen aufeinander ab
EIU
EVU EIU
C Ziel
B Handover
A Start
DB InfraGO AG | Januar 2024 48

## Seite 49

Beispiel C – Eine Fahrt, mehrere Infrastrukturen
Jedes EIU versendet die PathDetails
das eigene Netz betreffend
EIU
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO C Ziel
RefTrainID: TR 9876 -----KAROTTE 00 2026
ROUTEID: RO 9876 -ANDEREFAHRT 01 2026
PATHREQUESTID: PR 9876 ---ABANSMEER 01 2026
PATHID: PA 0080 HIERGEHTSHER 01 2026
B Handover
ORIGIN: A B2
Path (Final Offer) LAUFWEGSPUNKTE: A1, A2, B1, B2 B1
HANDOVER: B A2
A1
Zugcharakteristik, Produktangaben
A Start
PlannedCalendar Von: XX Bis: YY
MO  DI  M  I DO FR  SA SO 
DB InfraGO AG | Januar 2024 49

## Seite 50

Beispiel C – Eine Fahrt, mehrere Infrastrukturen
So wird der Zuglauf mit mehreren
Path-Objekten ausdetailliert
EIU
EVU EIU
Inhalte der PathDetailsMessage von DB InfraGO C Ziel
C3
Inhalte der PathDetailsMessage von einem weiteren EIU
RefTrainID: TR 9876 -----KAROTTE 00 2026 C2
RORUeTfETIrDa:i n I D : R O T 9R8 97867 -6A N---D--EKRAERFOATHTRET [Telefonnummer entfernt] C1
PARTHO R UTEEQIUDE:S T I D : P R R O98 97867 -6-- A-ABNADNESRMEEFEARH 0R1T 20012 26026
B4
PATHREQUESTID: PR 9876 ---ABANSMEER 02 2026 B3
PATHID: PA 0080 HIERGEHTSHER 01 2026
B Handover
PATHID: PA 1234 -HIERGAATHET 01 2026
ORIGIN: A B2
Path (Final Offer) LAHUFAWNDEGOSVPEURN: KTBE: A1, A2, B1, B2 B1
Path (Final Offer) HALNADUOFVWEERG : SPUBNKTE: B3, B4, C1, C2, C3 A2
ZIEL: C
A1
Zugcharakteristik, Produktangaben
Zugcharakteristik, Produktangaben A Start
PlannedCalendar Von: XX Bis: YY
MO  DI  M  I DO FR  SA SO 
PlannedCalendar Von: XX Bis: YY
MO DI MI DO FR SA SO
    
DB InfraGO AG | Januar 2024 50

## Seite 51

Grundlagen verschiedener Szenarien von Trassenanmeldungen
und ihre Besonderheiten unter TAF/TAP TSI
Beispiel 1: Trassenanmeldung eintägiger Verkehr
▪ Ein EVU möchte einmalig einen Zug im Netz der DB InfraGO fahren
▪ Link zum Video: Film 1 - Eintägiger Verkehr
Beispiel 2: Trassenanmeldung mehrtägiger Verkehr
▪ Ein EVU möchte verschiedene Züge an 5 Tagen im Netz der DB InfraGO fahren
▪ Link zum Video: Film 2 - mehrtägiger Verkehr
Beispiel 3: Trassenanmeldung internationaler Verkehr
▪ Ein EVU möchte einen Zug aus dem Netz der DB InfraGO in ein weiteres Netz fahren
▪ Link zum Video: Film 3 - internationaler Verkehr
Hinweis: Die Videos werden kurzfristig veröffentlicht auf der
Seite „Über TAF/TAP TSI“ im Kapitel „Trassenanmeldung“
DB InfraGO AG | Januar 2024 51

## Seite 52

Schauen wir uns nun ein Beispiel einer Trassenanmeldung im
neuen Onlineportal der DB InfraGO gemeinsam an.
Zugangsdaten zum selber ausprobieren finden Sie hier www.dbinfrago.com/neuesbestellsystem
und im Anhang dieser Präsentation. (Alternativ: Direktlink zum PDF mit Zugangsdaten)
DB InfraGO AG | Januar 2024 52

## Seite 53

Hinweise zum Verständnis und Umgang mit Vorgängen,
Anmeldungen und Verträgen (im Portal)
SCHEMATISCH
Angenommen Vertrag Vorgang A1 beendet
Angebot 1
(Subvorgang A1)
Abgelehnt Storniert Vorgang A1 beendet
Trassenanmeldung
– PathRequest 1 …
(Vorgang A) Beanstandet Neues Angebot
Angebot n
(Subvorgang An)
Vorgang A gesamthaft erst beendet wenn alle
„Subvorgänge“ beendet sind
▪ Für die Arbeit mit der neuen Logik in der Trassenanmeldung ist es wichtig, ein Verständnis über Vorgänge zu haben
▪ Grundsätzlich ist jede Aktion, mit der man etwas verändert, ein separater Vorgang, z.B. eine Trassenanmeldung. Die dazugehörigen
Angebote sind dann quasi „Subvorgänge“ unter diesem Vorgang
▪ Eine Trassenanmeldung bleibt so lange ein offener Vorgang, bis alle Angebote („Subvorgänge“) dann entweder zum Vertrag kommen
oder abgelehnt werden. Wurden alle Angebote bewertet und beantwortet, wird der ursprüngliche Vorgang der Trassenanmeldung
geschlossen
▪ Wenn man nun mit diesen Verträgen weiterarbeitet, startet das System jeweils neue Vorgänge (s. nächstes Kapitel)
DB InfraGO AG | Januar 2024 53

## Seite 54

Verkehrsbedürfnis und Trassenanmeldung durch das EVU
(1 PathRequest bzw. mehrere)
▪ Grundsätzlich muss das EVU im Rahmen seines Verkehrsbedürfnisses
PathRequest 1 bei DB InfraGO
selbst entscheiden, wie viele einzelne Anmeldungen bei einem EIU
nötig sind (bei Abweichungen jeweils einzelne Anmeldung nötig)
PathRequest 2 bei DB InfraGO
▪ Wenn mehrere EIU beteiligt sind, muss jeder Abschnitt bei jedem EIU
einzeln bestellt werden – jeweils als 1 bis n PathRequests. Alternativ bietet
…
das Tool PCS der RNE genau hierfür eine europäische Lösung
PathRequest n bei DB InfraGO
Verkehrs-
▪ Die Objekte Route und ReferenceTrain verknüpfen diese einzelnen
bedürfnis des
EVU PathRequests 1 bis x bei Anmeldungen dann über die beteiligten EIU
weiterem EIU
▪ Ein PathRequest beinhaltet alle für eine Trassenanmeldung
Produktausprägungen
erforderlichen Inhalte – genau wie auch heute in TPN. Diese müssen alle
NBN-Anforderungen erfüllen und sind TAF/TAP-konform, d.h. beinhalten
Inhalte des
Laufweg
auch die neuen Objekte und Felder der TAF/TAP TSI. Einige heutige
PathRequest
(Auszug) Elemente sind künftig nicht mehr nötig
Zugcharakteristik ▪ Wenn sich an den links genannten Inhalten für ein Verkehrsbedürfnis etwas
ändert (z.B. anderer Zug, anderer Laufweg), müssen jeweils einzelne
Verknüpfungen & PathRequests an die DB InfraGO geschickt werden
Verkehrszeitraum
DB InfraGO AG | Januar 2024 54

## Seite 55

Die 1:n Logik zwischen Trassenanmeldung (PathRequest)
und -angebot (PathDetails)
▪ Für jeden separaten PathRequest kann die DB InfraGO unter TAF/TAP
Angebot 1 für Verkehrstage A-B
künftig n Angebote zurückspielen, maximal 1 für jeden Verkehrstag
▪ Dies bedeutet bei z.B. einer Anmeldung für Montag bis Freitag, kann die
DB InfraGO bis zu 5 Angebote zurückgeben – diese sind nicht als Auswahl
Angebot 2 für Verkehrstage C-F
zu verstehen, sondern sind zeitlich disjunkt und ergeben insgesamt den
gesamten Verkehrszeitraum
…
Trassen-
Angebot n für
▪ Allerdings kann die DB InfraGO somit sehr flexibel reagieren, z.B.
anmeldung
Verkehrszeitraum X
(PathRequest) Montag bis Mittwoch so wie angemeldet, Donnerstag mit zeitlicher
durch EVU Abweichung, Freitag nicht konstruierbar
▪ Das EVU kann nach Erhalt der Angebote dann jedes einzeln betrachten
✓
Angebot x annehmen und jeweils entweder annehmen, ablehnen oder beanstanden
Jedes Angebot
▪ Bei Annahme des Angebots, mündet dieses direkt in einem Vertrag
wird einzeln 
behandelt Angebot y ablehnen ▪ Bei Ablehnen wird der entsprechende Teil des Verkehrszeitraums storniert
▪ Eine Beanstandung geht zurück an die DB InfraGO – der Fahrplan

Angebot z beanstanden konstruiert neu. Im Anschluss gibt es ein überarbeitetes Angebot
▪ Insgesamt bedeutet diese Logik, dass es für einen PathRequest am Ende
auch bis zu n einzelne Verträge geben kann
DB InfraGO AG | Januar 2024 55

## Seite 56

Wegfall des Verkehrstageschlüssels unter TAF/TAP und die
neue Kalenderlogik im Webportal
▪ Den heutigen Verkehrstageschlüssel (VTS), mit dem u.a. in
TPN die Verkehrstage ausgewählt werden, gibt es in
TAF/TAP künftig nicht mehr
▪ TAF/TAP hat eine Bitleiste in den Nachrichten, so dass alle
Tage einzeln markiert werden. Damit lassen sich alle
möglichen Kombinationen einfach darstellen
▪ Im neuen Webportal gibt es einen neuen, grafischen
Verkehrstagekalender, in dem alle Tage einzeln ausgewählt
werden können. Zu dem kann man Wochentage individuell
auswählen
▪ Die Ansicht des Fahrplanjahres ist so aufgebaut, dass man
sich Feiertage anzeigen lassen kann (bundesweit/regional)
Kalender: Auszug Testumgebung, Stand Dezember 2023
DB InfraGO AG | Januar 2024 56

## Seite 57

Arbeiten mit Verträgen
DB InfraGO AG | Januar 2024 57

## Seite 58

Jede Änderung an einem Vertrag erzeugt einen neuen Vorgang
und kann damit in neuen ID‘s und Verträgen resultieren
SCHEMATISCH
Vertragsänderung
Auswahl Verkehrs-
(kundenausgelöst, Neue Anmeldung
tage Änderung
Vorgang A)
(Teil-)Stornierung
(kundenausgelöst,
Vorgang B)
Auswahl Verkehrs- Wiederholung
Storniert Vorgang beendet Vertrag angepasst
(Teil-)Stornierung tage Storno Bestätigung
(netzausgelöst,
Vorgang C)
▪ Jede Veränderung an einem bestehenden Vertrag erzeugt einen neuen Vorgang auf diesem Vertrag. Diese Änderungen können
netz- oder kundenausgelöst sein. Erinnerung: Aus einer ursprünglichen Anmeldung können n Verträge resultieren.
▪ Wenn man nun einen Vertrag anfasst, geht es in dem neuen Vorgang genau nur um diesen einen Vertrag. Dies bedeutet, dass
wenn aus ursprünglich einer Anmeldung 10 Verträge resultierten, man bei einer Änderung für die gesamte ursprüngliche Anmeldung
auch alle 10 Verträge anfassen muss
▪ Eine Vertragsänderung wirkt wie eine neue Trassenanmeldung für die ausgewählten Verkehrstage – 1:n Logik greift dann erneut
▪ Stornierungen bzw. Teilstornierungen können nur für künftige Verkehrstage erfolgen – bei Stornierung im Portal wählt man die
entsprechenden Verkehrstage aus (bzw. alle) und muss dann die Stornierung nochmal bestätigen
DB InfraGO AG | Januar 2024 58

## Seite 59

Vielen Dank.
Alle Details: www.dbinfrago.com/taf-tap-tsi.
DB InfraGO AG | Januar 2024 59

## Seite 60

TAF/TAP TSI.
Anhang.
DB InfraGO AG | Januar 2024 60

## Seite 61

TAF/TAP TSI.
Was ist das?
TAF/TAP
Telematic Applications for Freight/Passenger Services
TSI
Technical Specifications for Interoperability
Dies entspricht eingedeutscht in etwa „Telematische Anwendungen für
Güter-/Personenverkehr – Technische Details für Interoperabilität“.
DB InfraGO AG | Januar 2024 61

## Seite 62

TAF/TAP definiert ein einheitliches Datenaustauschformat.
Für Fahrplan und Betrieb – in der gesamten EU.
Grundsätzlich sind die TAF TSI und die TAP TSI zwei EU-Verordnungen für den Eisenbahnsektor,
die neben vielen anderen Bausteinen (wie z.B. ETCS) den Eisenbahnsektor in Europa für die
Zukunft rüsten und die Interoperabilität stärken sollen. Die TAF TSI regelt hierbei explizit den
Schienengüterverkehr, die TAP TSI den Schienenpersonenverkehr.
Mit TAF/TAP wird ein EU-weit einheitliches Nachrichtenformat für den Datenaustausch zwischen
beteiligten Akteuren (z.B. EVU, EIU) definiert – sowohl im Bereich Fahrplan (= „Planning“) als auch
im Eisenbahnbetrieb (= „Operations“) werden Nachrichtenformate und Prozesse vorgegeben.
Mehr Informationen finden Sie immer aktuell auch online auf der TAF/TAP-Informationsplattform
der DB InfraGO AG.
Dort sind auch die beiden EU-Verordnungen selbst hinterlegt – eine Revision ist aktuell in
Ausarbeitung durch die EU-Kommission und ERA. Bis dahin gültig: im SGV die TAF TSI 2021/541
(03.2021); im SPV die TAP TSI 454/2011 (05.2011).
DB InfraGO AG | Januar 2024 62

## Seite 63

Die Vorteile von TAF/TAP auf einen Blick.
Für alle EVU und EIU in Europa.
1 Stärkere Wettbewerbsfähigkeit
Weitere Digitalisierung und Harmonisierung im Datenaustausch macht den Eisenbahnsektor in Europa wettbewerbsfähiger.
TAF/TAP als „gemeinsame Sprache“ für bessere Kommunikation durch eine standardisierte Meldungsstruktur.
2 Grenzüberschreitend eine Identifikation
Eindeutige und tagesscharfe Identifikation von Zügen und Trassen – räumlich, zeitlich und auch über Netzgrenzen hinweg.
Klare Trennung von Zug und Trasse in neuer Objektstruktur und einfacherer Umgang im grenzüberschreitenden Verkehr.
3 Einheitlicher Kommunikationsweg für Trasseninformationen
Vollständige Neuentwicklung der Trassenanmeldung mit vereinfachter Bearbeitung und Änderung sowie Vereinheitlichung des
Kommunikationsweges. Und alles mit neuen benutzerfreundlichen IT-Systemen bei der DB InfraGO.
4 Bessere betriebliche Durchführung
Deutlich verbesserte betriebliche Durchführung durch qualitativ hochwertigen Austausch zwischen beteiligten EIU und EVU.
Bessere Prognosequalität durch höheres Informationslevel und größere Verfügbarkeit von Echtzeitdaten.
DB InfraGO AG | Januar 2024 63

## Seite 64

Übersicht Umstellung auf TAF/TAP TSI.
Die Gesamtplanung der DB InfraGO bis 2026.
STAND DEZEMBER 2023
2022 2023 2024 2025 2026
TAF/TAP TSI im Fahrplan („Planning“)
~ Q1/25: 04-09/25:
Anmeldung Netzfahrplan für das Fahrplanjahr 2026
„Soft-Release“ Phase II
03/25:
Gelegenheitsverkehr für das Fahrplanjahr 2026 Go-Live (Phase I)
GelV ab 09/25
Q3/22: Stammdaten im
Stammdatenbereitstellung Q1/24: Stammdaten-Schnittstelle live
neuen Format (zum Test)
Schulungsmaßnahmen und Bereitstellung Material (genaue Planung folgt)
Bereitstellung Power-User Zugänge (via Kundenportal; genaue Planung folgt)
Testphasen des Neuen Bestellsystems Seit 08/21: Test SST & Seit 02/22: Test im Portal – Testumgebung bleibt online und wird fortlaufend aktualisiert
TAF/TAP TSI im Betrieb („Operations“)
Sukzessive Einführung betrieblicher Meldungen 09/24: 12/25:
Meldungen auf Basis OTN/Zugnr. Alle Meldungen
Einführung PRISMA auf Basis
ReferenceTrainID
04/23: Test mit PRISMA-System 09/24: Go-Live PRISMA
und PathID
Pilotbetrieb und Test der betrieblichen Meldungen unter TAF/TAP Seit 2015: Pilotbetrieb (Verpflichtende Abgabe
TCM/PTCM)
Zum Fahrplanjahr 2026: Einführung
Grundlegendes zu TAF/TAP TSI
TAF/TAP TSI bei der DB InfraGO AG
Beantragung Company Code – ab sofort Jeder beteiligte Akteur benötigt verbindlich einen Company Code wenn an TAF/TAP teilgenommen wird
Jedes EIU muss seine Betriebsstellen zusätzlich zur Ril100 mit PLC (& SLC) identifizieren. EVU müssen diese
Festlegung und Vergabe Primary Location Code (PLC) – ab sofort
verstehen
Update XSD-Schemata durch RNE inkl. Aktualisierung Schnittstellendokument DB InfraGO
Lfd. Aktualisierung: 2x pro Jahr (Winter/Sommer)
Revision der TSI (Änderungen aktuell in Ausarbeitung durch EU-Kommission)
Verabschiedung Inkraftsetzung
im RISC (geplant) (Q3/Q4 geplant)
DB InfraGO AG | Januar 2024 64

## Seite 65

Die Umsetzung von TAF/TAP erfordert IT-Anpassungen.
TAF/TAP-Konformität in der Fahrplan-IT von DB InfraGO und EVU.
TPN Client
TPN DB
Aktuell EVU-SST Folgesysteme
InfraGO
2.6.x / 3.0.x
Kundensysteme
Anpassung der Anpassung der
Kundensysteme Folgesysteme
notwendig notwendig
Kundensysteme
Ab Backend Bestell-
Fahrplan- EVU-SST 4.x.x system DB Folgesysteme
jahr 2026 InfraGO
Web-Frontend
Bestellsystem
Aktuell gültig: Schnittstellenversion 4.4.2 – alle Informationen
finden Sie auf unserer TAF/TAP Informationsplattform
DB InfraGO AG | Januar 2024 65

## Seite 66

Ab sofort kann das neue Webportal ausgiebig getestet werden.
Wir freuen uns über jedes Feedback und jede Idee.
1
Zugangsdaten zur Testumgebung
Zugangsdaten können gerne
▪ Link: https://bestellsystem-portal-test.dbnetze.com
innerhalb Ihrer Unternehmen
▪ Username: Portaltest-User07
geteilt werden!
▪ Passwort: wickie3halvar
Weitere Informationen
▪ Es handelt sich um eine „lebende“ Testumgebung, die regelmäßig aktualisiert wird. Alle zurückgespielten
Angebote sind noch fiktiv, die Anbindung an die echte Konstruktion im Fahrplan folgt später.
▪ Sollte sich das Portal nach Login nicht direkt korrekt öffnen, im Menü auf „Vorgänge“ oder „Anmeldung“ klicken.
▪ Auf der Internetseite zum Neuen Bestellsystem finden Sie auch Erklärvideos zum Portal.
Feedback und Fragen
▪ Alle Fragen, Anregungen, Ideen, Feedback oder gefundene Fehler schicken Sie bitte einfach formlos
an das Postfach des Teams vom neuen Bestellsystem:
[Kontaktangabe entfernt]
DB InfraGO AG | Januar 2024 66

## Seite 67

Fachliche Details zur aktuellen Testumgebung.
Steuerworte für den „Mock“ und Tipps & Tricks.
Tipps & Tricks und Hinweise Steuerworte
▪ Die aktuell genutzte Testumgebung arbeitet weiterhin mit unserem ▪ Über das Freitextfeld unter Produkt-
sogenannten IFP-Mock, d.h. die Angebote werden nicht konstruiert, ausprägungen können bestimmte Fälle
sondern entsprechen im Normalfall exakt der Anmeldung „getriggert“ werden. Durch Eingabe von IFPMock:Steuerwort
„IFPMock:“ gefolgt vom jeweiligen
▪ Das Portal beherrscht mittlerweile auch die Tastatursteuerung – durch
Steuerwort, beeinflusst man für diese eine Anmeldung die Antworten
Drücken der Taste „Alt“ lassen sich die Kürzel anzeigen
▪ Auszug der aktuellen Steuerworte:
▪ Der Hilfemodus im Portal selbst ist an vielen Stellen bereits
implementiert – durch Drücken des oben rechts im Eingabe-Pop-Up − Multiple Es kommen 2 Angebote
einer Anmeldung öffnet sich dieser. Alle blau umrahmten Felder haben
− Nichtkonstruierbar Gesamte Anmeldung nicht konstruierbar
eine Erklärung – einfach drauf klicken
− TeilweiseNK 2 Angebote, 1 davon nicht konstruierbar
▪ Die Checkliste direkt neben dem Button „Anfrage absenden“ zeigt auf
− Via Es werden Zwischenlaufwegspunkte mitgeschickt
den ersten Blick ob man bei der Befüllung Punkte vergessen hat – nur
wenn sie grün ist, kann man abschicken: − Abw2 Es kommen Angebote mit Abweichungen
▪ Allerdings erfolgt NACH Absenden eine ▪ Darüber hinaus kann man auch den Netzfahrplan simulieren – hierzu
weitere Prüfung (so wie auch heute), die dann zusätzlich Aspekte wie muss der Eingangszeitpunkt manipuliert werden – dies erfolgt ebenfalls
korrekter Eingangszeitpunkt, korrekte Identifikatoren etc. prüft. über das Freitextfeld (ohne den Text „IFPMock:“):
Anschließend würde im Produktivbetrieb auch noch die
− Eingangszeitpunkt:2023-04-01T12:00:00 dies simuliert eine
Eingangsprüfung der Fahrplankonstruktion erfolgen
Anmeldung in der NEP1 und man bekommt mit zeitlicher
Verzögerung vorläufige Netzfahrplan-Angebote zurück
DB InfraGO AG | Januar 2024 67
