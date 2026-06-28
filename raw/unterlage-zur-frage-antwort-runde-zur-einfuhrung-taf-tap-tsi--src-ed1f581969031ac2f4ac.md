# Unterlage zur Frage-Antwort-Runde zur Einführung TAF/TAP TSI – September 2024

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13083640/748dafd0e7853591e7f232b085f25c7d/Unterlage-zur-Frage-Antwort-Runde-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13083640/748dafd0e7853591e7f232b085f25c7d/Unterlage-zur-Frage-Antwort-Runde-data.pdf)
- Quellen-Schlüssel: `src-ed1f581969031ac2f4ac`
- Abrufdatum: 2026-06-28
- Original: [[unterlage-zur-frage-antwort-runde-zur-einfuhrung-taf-tap-tsi-september-2--src-ed1f581969031ac2f4ac.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

TAF/TAP TSI @ DB InfraGO AG.
Frage-Antwort-Runde zur Einführung.
20.09.2024 – virtuell
DB InfraGO AG | 20. September 2024 1

## Seite 2

Grundlegende und weiterführende Informationen
Kundenveranstaltungen, Informationen und Unterlagen
Informationsplattform TAF/TAP TSI
▪ Allgemeine Unterlagen/Plattform für alle Themen zu Betrieb und Fahrplan (inkl. Jeweilige Schnittstellen-
Dokumente)
▪ Link: https://www.dbinfrago.com/taf-tap-tsi
Events und Aktuelles rund um TAF/TAP TSI
▪ Unterlagen zu allen Veranstaltungen, Newsletter und FAQ sowie Zugangsdaten für kommende Veranstaltungen
▪ Link: https://www.dbinfrago.com/taf-tap-tsi/events
Internetseite Neues Bestellsystem pathOS:
▪ Fachliche Details, Testzugang, Testfälle, Informationen für IT-Partner und künftig alle Informationen rund um
Schulungen (Videos, Präsentationen, Handbuch etc.) sowie Schulungsterminen
▪ Link: https://www.dbinfrago.com/pathos
DB InfraGO AG | 20. September 2024 2

## Seite 3

TAF/TAP im Betrieb
inkl. PRISMA und TCM/PTCM
DB InfraGO AG | 20. September 2024 3

## Seite 4

TAF/TAP wird schrittweise im Betrieb umgesetzt
Aktuelle Zeitplanung
2015 Bis Q1 2022 April 2023 März 2025 Dez. 2025 Dez. 2026
Start Pilotbetrieb Ausweitung Test mit Produktivsetzung TAF/TAP Produktivsetzung
mit drei Pilotbetrieb PRISMA-System TAF/TAP- Meldungsaustausch TAF/TAP-
Meldungstypen auf sieben möglich Meldungsaustausch auf Basis OTN/ Meldungsaustausch
Meldungstypen auf Basis OTN/ Zugnummer auf Basis TAF/TAP-
Zugnummer Identifier zusätzlich
zu OTN/ Zugnummer
Verpflichtende
erfolgt parallel mit
Grundlage dafür ist Abgabe
der TTT-
die Einführung von TCM/PTCM auf
Vollumsetzung des
PRISMA Basis OTN/
Fahrplans
Zugnummer
Technische
Bisherige
Operative Nutzung
Ertüchtigung der
Nachrichten-
der Identifier in den
betrieblichen
formate weiterhin
Betriebssystemen
Systeme mit
dauerhaft
Identifiern
verfügbar (UIC),
abgeschlossen,
sowie das System
jedoch ohne
LeiDis-NK
operative Nutzung
DB InfraGO AG | 20. September 2024 4

## Seite 5

Die TAF/TAP TSI wird schrittweise in den Systemen des
Betriebs der DB InfraGO AG umgesetzt
1. Paket: Train running information/Zuglaufinformationen (Pilotbetrieb)

2013/14 ➢ TrainRunningInformation message, TrainDelayCause message
➢ TrainRunningForecast message (nur TAF TSI)
M
e
2. Paket: Train composition/Zuginhaltsdaten (Pilotbetrieb) d l 
2015
u
➢ TAF TrainComposition message, TAP PassengerTrainComposition message n
g
e
n
3. Paket: Ausweitung Pilotbetrieb 
01/2022 m
➢ Zusätzlich: TrainReady message, ChangeOfTrack message, TrainRunningForecast message (TAP TSI) i
t
O
T
04/2023 Verfügbarkeit Testumgebung N 
-
➢ Austausch aller TAF/P-Meldungen zu Testzwecken möglich I
d
e
n
4. Paket: Inbetriebnahme PRISMA, TAF/P-Meldungsaustausch Phase 1 (auf Basis OTN/Zugnr) t
i
f
03/2025 ➢ Vorgenannte Meldungen, TrainRunningInterruption-, Error- und ObjectInfo message (Anschluss/Umlauf) e i
r
➢ PathDetails und PathSectionNotification message*
(
Z
u
Tests im Rahmen der Vollumsetzung TTT im Betrieb g
03-06/2025 n
r
➢ Durchführung von Test mit gemockten TTT-Identifier +
B
e
t
Verpflichtende Abgabe TrainComposition/PassengerTrainComposition message (TCM/PTCM) r
12/2025 i
e
➢ EVUs sind per NBN verpflichtet, die TCM/PTCM an DB InfraGO zu schicken b
s
t
a T
5. Paket: Vollumsetzung, TAF/P-Meldungsaustausch Phase 2 (OTN/Zugnr + TAF/P-Identifier) ) g I A Veränderung
12/2026 D F ggü. vorheriger
➢ Vollständiger TAF/P-Meldungsaustausch mit Identifier s P / Planung
-
* Funktionen, welche die TAF/TAP-Identifier benötigen (zB gemäß TAF/TAP-SectorHandbook Annex 13) sind ab 12/2026 verfügbar.
DB InfraGO AG | 20. September 2024 5

## Seite 6

Der Betrieb wird ab 03/2025 auf Basis der OTN die betrieb-
lichen TAF/TAP Meldungen empfangen und senden können
Umsetzungs
zeitpunkt
Fahrplan
+ Zugnummer/OTN EVU
+ TAF/TAP-Identifier
DB InfraGO
Trassenanmeldung
Trassen- UIC-Telegramme
EVU nach akt. Format
anmeldung und Fahrplan + Zugnummer/OTN
+ TAF/TAP Identifier Mrz 2025
Fahrplanung + Zugnummer/OTN DB InfraGO
EVU
+ TAF/TAP-Identifier Betrieb TAF/TAP-Meldungen
+ Zugnummer/OTN
+ TAF/TAP-Identifier
Fahrplan
EVU
+ Zugnummer/OTN
+ TAF/TAP-Identifier
DB InfraGO
Trassenanmeldung
Trassen- UIC-Telegramme
EVU gem. TAF/TAP
anmeldung und Fahrplan + Zugnummer/OTN Dez 2026
+ TAF/TAP Identifier
Fahrplanung + Zugnummer/OTN DB InfraGO
EVU
+ TAF/TAP-Identifier Betrieb TAF/TAP-Meldungen
+ Zugnummer/OTN
+ TAF/TAP-Identifier
Verpflichtung zur Abgabe der TCM/PTCM auf dem Netz der DB InfraGO ab 12/2025 gemäß NBN bleibt bestehen
DB InfraGO AG | 20. September 2024 6

## Seite 7

Die Lieferung der TCM durch die EVU zu 12/2025 ermöglicht
eine bessere Kapazitätsauslastung zum Vorteil aller Beteiligten
Genauere Prognose, da auf Basis aktueller
Update der
Prognose auf
fahrdynamischer Zugeigenschaften gerechnet wird
Daten
Basis aktueller
d
Offensichtlicher Nutzen für Kunden DB InfraGO
n Plandaten Daten
a
t s des Zuges TAF/P und Endkunden
u
Z aus Trassen- TCM
- Disposition auf Basis aktueller Zugeigenschaften –
l e anmeldung Disposition auf
i zB: „Verspäteter Zug 1 ist heute kürzer und
Z
Basis aktueller
leichter/hat heute ein leistungsfähigeres Tfz, kann
Daten
vor Zug 2 weiterfahren“
Prognose ungenau, da bei Abweichung von den
Prognose auf
Plandaten von falschen fahrdynamischen
d Basis der Plandaten
n Plandaten Zugeigenschaften ausgegangen wird
a
t des Zuges
s
u
aus Trassen-
Z Disposition auf möglicherweise falschen Zugeigen-
-
t anmeldung
s Disposition auf schaften – z.B.: „Verspäteter Zug 1 ist lang und
I
Basis der Plandaten schwer, soll warten und von schnelleren Zügen 2&3
überholt werden“
DB InfraGO AG | 20. September 2024 7

## Seite 8

TAF/TAP im Fahrplan & Vertrieb
inkl. Trassenanmeldung und pathOS
DB InfraGO AG | 20. September 2024 8

## Seite 9

Das neue Bestellsystem bis zum Fahrplanjahr 2027
Aktuelle Zeitplanung pathOS
Fahrplanjahr
2020 2021 – 2023 2024 2025 2026
2027
Start Weiter- Weiter- Intensivierung Portal & Bestellung
IT-Entwicklung entwicklung Portal entwicklung Tests (inkl. E2E) Schnittstelle live ausschließlich
und Schnittstelle Portal und mit Modulen für über neues Portal
Schnittstelle Anmeldephase und Schnittstelle
Vorbereitung Go-
Nfpl. 2027
Start erster Live
Kundentests der End2End-Tests Keine
Schnittstelle und Ab September Trassenanmeldung
Go-Live der neuen
des Online-Portals Module für GelV über TPN mehr
Aufbau Userverwaltung
(Fplj. 2027) live
Userverwaltung (via NeCo)
TPN weiterhin
Ab Q4: Sukzessive
relevant für
Bereitstellung Erweiterung
unterjährige
erster Schulungs- Schulungs-
Trassen in 2026
materialien plattform und -
termine
DB InfraGO AG | 20. September 2024 9

## Seite 10

Nach Verschiebung von TAF/TAP TSI werden alle Prozesse für
das Fahrplanjahr 2026 wie bisher durchgeführt
Netzfahrplan (Nfpl)
Bestellung erfolgen wie bisher über TPN bzw. über die
Einführung TAF/TAP
Bestandsschnittstelle. Trassenplanung erfolgt im bekannten Format
TSI mit Nfpl
Bestellung für Fplj 27
Unterjähriger Bau (Uj Bau)
Weiterhin Veröffentlichung mittels ZVF-Entwürfen, ZVF-Endstücken Aufsatz ausführlicher
und Bau-FPLOen
Kundentests in 2025
(Termine in Planung)
Gelegenheitsverkehr (GelV)
Vergabe von Restkapazitäten durch die Anmeldung von GelV-
Trassen wie im bisherigen Prozess möglich
DB InfraGO AG | 20. September 2024 10

## Seite 11

Gemeinsame Fragerunde
Alle Informationen immer aktuell
unter: www.dbinfrago.com/taf-tap-tsi
DB InfraGO AG | 20. September 2024 11

## Seite 12

[Kein extrahierbarer Text auf dieser Seite.]

## Seite 13

Anhang
DB InfraGO AG | 20. September 2024 13

## Seite 14

TAF/TAP definiert ein einheitliches Datenaustauschformat
Für Fahrplan und Betrieb – in der gesamten EU
1
Stärkere Wettbewerbsfähigkeit
Weitere Digitalisierung und Harmonisierung im Datenaustausch macht den Eisenbahnsektor in Europa noch
wettbewerbsfähiger. TAF/TAP als “gemeinsame Sprache” für bessere Kommunikation und Information.
2
Grenzüberschreitend eine Identifikation
Eindeutige und tagesscharfe Identifikation von Zügen und Trassen – räumlich, zeitlich und auch über Netzgrenzen hinweg.
Klare Trennung von Zug und Trasse in neuer Objektstruktur und einfacherer Umgang im grenzüberschreitenden Verkehr.
3
Einheitlicher Kommunikationsweg
Einführung einheitlicher und benutzerfreundlicher IT-Systeme bei der DB InfraGO AG – spürbare Verbesserung beim
Baufahrplan. Vollständige Neuentwicklung der Trassenanmeldung mit vereinfachter Bearbeitung und Änderung.
4
Bessere betriebliche Durchführung
Deutlich verbesserte betriebliche Durchführung durch qualitativ hochwertigen Austausch zwischen beteiligten EIU und EVU.
Bessere Prognosequalität durch höheres Informationslevel und größere Verfügbarkeit von Echtzeitdaten.
DB InfraGO AG | 20. September 2024 14

## Seite 15

Trassenanmeldung wie gewohnt über 2 Kanäle möglich.
Ab Fahrplanjahr 2027 mit neuem System: pathOS.
1
▪ Genau wie heute kann man künftig über eine Weboberfläche oder eigene IT via Schnittstelle bestellen.
▪ Die grundlegende Logik von TAF/TAP ist für beide Kanäle relevant. Alle, die künftig Trassen bestellen, sollten
mit den Grundsätzen von TAF/TAP vertraut sein und sich darauf vorbereiten. Ein Company Code ist Pflicht!
▪ Kontakt zur fachlichen Betriebsführung pathOS: [Kontaktangabe entfernt]
Onlineportal / Weboberfläche
▪ Vollständig neues, TAF/TAP-konformes System mit modernem Layout und Design. „Ablösung“ von TPN
zum Fahrplanjahr 2027. Tests jederzeit möglich – Zugangsdaten auf der Internetseite von pathOS.
▪ Userverwaltung künftig über NeCo mit Superusern – Start Schulungsplattform ab Q4 2024.
Technische Schnittstelle / Common Interface
▪ Auch eigene IT von EVU‘s muss TAF/TAP konform implementiert werden: Alle technischen
Details in Schnittstellendokumentation – Seit 2021 enger Austausch/Test mit IT-Partnern.
▪ Jedes EVU sollte aktiv den Kontakt zum jeweiligen IT-Partner suchen.
DB InfraGO AG | 20. September 2024 15

## Seite 16

Ab sofort kann das neue Webportal ausgiebig getestet werden.
Wir freuen uns über jedes Feedback und jede Idee.
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
▪ Auf der Internetseite von pathOS finden Sie auch Erklärvideos zum Portal.
Feedback und Fragen
▪ Alle Fragen, Anregungen, Ideen, Feedback oder gefundene Fehler schicken Sie bitte einfach formlos
an das Postfach des Teams vom neuen Bestellsystem:
[Kontaktangabe entfernt]
DB InfraGO AG | 20. September 2024 16
