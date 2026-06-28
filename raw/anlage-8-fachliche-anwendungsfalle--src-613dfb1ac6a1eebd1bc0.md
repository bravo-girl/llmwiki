# Anlage 8: Fachliche Anwendungsfälle

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13508618/1c3a3376e2495740e0ae7e7bbe9f95ff/Anlage-8-Fachliche-Anwendungsfaelle-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13508618/1c3a3376e2495740e0ae7e7bbe9f95ff/Anlage-8-Fachliche-Anwendungsfaelle-data.pdf)
- Quellen-Schlüssel: `src-613dfb1ac6a1eebd1bc0`
- Abrufdatum: 2026-06-27
- Original: [[anlage-8-fachliche-anwendungsfalle--src-613dfb1ac6a1eebd1bc0.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

EVU-Schnittstelle des Bestellsystems
(„pathOS“)
Anlage 8
Fachliche Anwendungsfälle
Version 4.6.2

## Seite 2

Historie / Änderungen
Version Bearbeitet/ Beschreibung der Änderungen/Bemerkungen Datum
geändert von
4.3.0 Initiale Fassung 16.08.2021
4.4.0 Kap. 4.4. neuer letzter Absatz: Hinweis auf die 28.02.2022
Anpassung der Zugcharakteristikangaben beim
Zusammenführen bzw. Trennen der Zugteile
4.4.1 Keine Anpassungen 18.08.2022
4.4.2 Keine Anpassungen 10.05.2023
4.5.0 Änderung der Firmierung 17.07.2024
4.6.0 Ergänzung zum Umgang mit §51 (3) ERegG (neues 17.04.2025
Kap. 2.3)
Umgang mit funkferngesteuerten Tfz präzisiert
4.6.1 DB InfraGO AG Hinweis zur Angabe von Last und Länge gezogener 14.07.2025
Tfz
4.6.2 DB InfraGO AG Keine Anpassungen 11.09.2025
Fabian Sommer
Anlage 8 – Fachliche Anwendungsfälle , Version 4.6.2 2

## Seite 3

Inhaltsverzeichnis
1 Allgemeines 6
2 Fachliche Anwendungsfälle 7
2.1 Nutzung des Elements TractionMode zur Beschreibung von
Triebfahrzeugstellungen 7
2.2 Darstellung von Zugvereinigungen und Zugtrennungen („Y-Züge“) 10
2.3 Erfassung von Zuglaufanteilen bei nationalen Betreibern der Schienenwege 12
2.4 Zuglauf DB InfraGO – fremder Infrastrukturbereich – DB InfraGO 12
Dokumentation der EVU-Schnittstelle des Bestellsystems , Version 4.6.2 3

## Seite 4

Tabellenverzeichnisse
Tabelle 1: Bespannungskombinationen und zu nutzender TractionMode 9
Dokumentation der EVU-Schnittstelle des Bestellsystems , Version 4.6.2 4

## Seite 5

Abbildungsverzeichnis
Abbildung 1: Zuordnung Triebfahrzeugstellung zum TractionMode ............................................... 7
Abbildung 2: Vereinigung/Trennung von Zügen mit Festlegung eines maximierten Hauptlaufs ... 10
Abbildung 3: Vereinigung/Trennung von Zügen mit Festlegung des Hauptlaufs im
Zusammenführungsbereich......................................................................................................... 11
Abbildung 4: Zuglauf DB InfraGO – Fremd EIU – DB InfraGO .................................................... 13
Dokumentation der EVU-Schnittstelle des Bestellsystems , Version 4.6.2 5

## Seite 6

1 Allgemeines
Die Dokumentation für die Schnittstelle zum Bestellsystem der DB InfraGO („pathOS“) besteht
aus einem Hauptdokument und mehreren Anlagen (siehe Hauptdokument Kapitel 3.1). Alle
zueinander gehörenden Dokumente haben immer die gleiche Versionsnummer. Änderungen an
den Dokumenten sind jeweils in der Änderungshistorie des betreffenden Dokuments aufgeführt,
die Sie am Anfang jedes Dokuments finden.
Das vorliegende Dokument enthält die Beschreibung ausgewählter fachlicher Anwendungsfälle
und beispielhafte Vorschläge zur Nutzung der TAF/TAP-TSI Nachrichten, Attribute und
Kodierungen.
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 6

## Seite 7

2 Fachliche Anwendungsfälle
2.1 Nutzung des Elements TractionMode zur Beschreibung von Triebfahrzeugstellungen
Die in einem Zug vorhandenen Triebfahrzeuge können verschiedene Rollen und Positionen
einnehmen. Die Rolle und Position des Tfz im Zugverband kann dabei mit einer Kodierung in der
1. Ziffer des TractionModes definiert werden, hingegen gibt die 2. Ziffer des TractionModes
lediglich die Häufigkeit des Auftretens eines Tfz in der gleichen Rolle an.
Zusätzlich ist in bestimmten Fällen auch noch eine Aussage zur Wendezugfähigkeit von
Bedeutung für die Trassenkonstruktion, die mit der Auswahl „true“ oder „false“ für das Attribut
„pushPullTrain“ erfolgt. Eine Aussage über die konkrete Reihung der Tfz innerhalb der gleichen
Rolle erfolgt nicht.
Abbildung 1: Zuordnung Triebfahrzeugstellung zum TractionMode
Die nachfolgende Tabelle zeigt Beispiele für mögliche Bespannungskombinationen und deren
Darstellung mit TractionMode.
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 7

## Seite 8

Lfd. Nr. Visualisierung Fachliche Beschreibung TractionMode PushPullTrain Bemerkung
1 Z---------- Zuglok Spitze 11 false
2 Z Triebzug, Triebwagen 11 true Unterscheidung zum lokbespannten Zug anhand Tfz-BR für Triebzug/Triebwagen und fehlenden Angaben
für Wagenzug
3 Z---------S Zug mit Steuerwagen am Ende 11 true
4 S---------Z Zuglok am Ende mit Steuerwagen Spitze 51 true
5 ZZ-------- Doppeltraktion 11+12 false Unterscheidung lokbespannter Zug oder Triebzug nur anhand Tfz-BR und fehlenden Angaben für
Wagenzug; keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion.
6 ZZ-------S Doppeltraktion mit Steuerwagen am Ende 11+12 true Unterscheidung lokbespannter Zug oder Triebzug nur anhand Tfz-BR
7 ZZ Doppeleinheit Triebzug, Triebwagen 11+12 true Unterscheidung zum lokbespannten Zug anhand Tfz-BR für Triebzug/Triebwagen und fehlenden Angaben
für Wagenzug
8 S-------ZZ Doppeltraktion am Ende mit Steuerwagen an 51+52 true
der Spitze
9 Z---------Z Zuglok an Spitze und Ende 11+51 true Unterscheidung lokbespannter Zug oder Triebzug nur anhand Tfz-BR; Zuglok am Ende über Steuerleitung
oder Funk ferngesteuert von Tfz an Spitze
10 Z---M---- Zuglok Spitze mit Mittellok 11+21 false Mittellok über Steuerleitung oder Funk ferngesteuert von Tfz an Spitze
11 S---M----Z Zuglok am Ende mit Mittellok und Steuerwagen 21+51 true beide Loks ferngesteuert vom Steuerwagen
an der Spitze
12 Z---M---S Zug mit Mittellok und Steuerwagen am Ende 11+21 true Unterscheidung lokbespannter Zug oder Triebzug nur anhand Tfz-BR; Mittellok über Steuerleitung oder
Funk ferngesteuert von Tfz an Spitze
13 Z---SS---Z Zuglok an Spitze und Ende, wendezugfähig 11+51 true zwei gekuppelte Zugsets, die später getrennt werden.
14 S---MS---Z 2 gekuppelte Zugeinheiten jeweils mit Zuglok 21+51 true zwei gekuppelte Zugsets, die später getrennt werden.
am Ende und Steuerwagen an der Spitze
15 Z----L----- Zuglok Spitze und Lok ohne eigene 11 false Länge und Masse des mitgeführten Tfz ist Teil des Wagenzugs, verpflichtend ab 3 gezogenen Tfz. Siehe
Antriebskraft (Mitführung) hierzu auch die Angaben zur TractionMode aus Anlage 1
16 Z---------K Zuglok Spitze und gekuppelte Schiebelok 11+31 false
17 Z---------U Zuglok Spitze und ungekuppelte Schiebelok 11+41 false
18 ZZ-------K Doppeltraktion und gekuppelte Schiebelok 11+12+31 false keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion möglich
19 ZZ-------U Doppeltraktion und ungekuppelte Schiebelok 11+12+41 false keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion möglich
20 Z----D---- Zuglok und beheizte Dampflok im Wagenzug 11 false Länge und Masse des mitgeführten Tfz ist Teil des Wagenzugs; zusätzlich Angabe von
(ohne Traktionsleistung) TrainActivityTypeCodes DE06 und DE07
21 VZ-------- Zuglok Spitze und Vorspannlok 11+12 false keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion.
22 VZ------K Zuglok Spitze und Vorspannlok und gekuppelte 11+12+31 false keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion.
Schiebelok
23 VZ------U Zuglok Spitze und Vorspannlok und 11+12+31 false keine Unterscheidung von selbstgesteuerter Vorspannlok und Doppeltraktion.
ungekuppelte Schiebelok
24 Z--------E Zuglok mit weiterer Lok im Wagenzug (nicht an 11 false Lok E als Teil des Wagenzuges ohne Masseanteil, aber Längenanteil am Wagenzug
Traktionsleistung beteiligt, aber mit
Eigenantrieb)
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 8

## Seite 9

Lfd. Nr. Visualisierung Fachliche Beschreibung TractionMode PushPullTrain Bemerkung
25 VZ------S Zuglok und Vorspannlok mit Steuerwagen am 11+12 true
Ende
26 VS------Z Zuglok am Ende mit Steuerwagen an Spitze und 11+51 true
Vorspannlok
Legende: Zuglok
Z
Steuerwagen; kann auch Beiwagen mit Steuerabteil zu einem Triebwagen sein
S
Mittellok
M
Vorspannlok
V
Lok ohne eigene Antriebskraft (mitgeführt im Wagenzug)
L
K gekuppelte Schiebelok
U ungekuppelte Schiebelok
D beheizte Dampflok im Wagenzug (ohne Traktionsleistung)
E Lok im Wagenzug (nicht an Traktionsleistung beteiligt, aber mit Eigenantrieb)
------- Wagenzug
Tabelle 1: Bespannungskombinationen und zu nutzender TractionMode
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 9

## Seite 10

2.2 Darstellung von Zugvereinigungen und Zugtrennungen („Y-Züge“)
Insbesondere bei Personenzügen werden oft Zugläufe durch das Vereinigen oder Trennen von
Zugeinheiten gebildet. Sowohl unter verkehrlichen als betrieblichen Aspekten sind abgegrenzte
Zugläufe zu betrachten, für die eigenständige ReferenceTrains zu definieren sind. Dabei sind
mehrere unterschiedliche Darstellungen und Kombinationen möglich, die aber fachlich den
gleichen Sachverhalt ausdrücken. Mögliche Varianten sind beispielhaft in Abbildung 2 und
Abbildung 3 dargestellt.
Die Unterteilung in einen Haupt- und diverse Nebenläufe obliegt dem EVU in der Rolle LeadRU.
Die wechselseitige Referenzierung der verschiedenen ReferenceTrains und deren PathRequests
kann dabei unter Angabe der ReferenceTrainID‘s oder PathRequestID’s in der Struktur
RelatedPlannedTransportIdentifiers erfolgen. Zusätzlich sind am Zusammenführungspunkt E der
TrainActivityCode 0016 (Zusammenführen von Zugteilen) bzw. am Trennungspunkt H der
TrainActivityCode 0017 (Trennung von Zugteilen) und die jeweilige ReferenceTrainID bzw. OTN
des korrespondieren Zuges anzugeben..
In dem in Abbildung 2 dargestellten Beispiel müssen für den Zug im Hauptlauf (hier Zug 1) im
Zusammenführungspunkt E bzw. im Trennungspunkt H die jeweiligen Zugcharakteristikangaben
entsprechend den Veränderungen, die sich aus der Zusammenführung bzw. der Trennung der
Zugteile ergeben, angepasst werden.
Abbildung 2: Vereinigung/Trennung von Zügen mit Festlegung eines maximierten Hauptlaufs
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 10

## Seite 11

Zusätzlich ist für die Umsetzung nach Abb. 3 bei dem endenden Zug die Angabe des
TrainActivityCodes 0044 (Übergang auf Zug) bzw. bei dem beginnenden Zug der
TrainActivityCode 0045 (Übergang von Zug) anzugeben, um bei beiden beteiligten Zügen die
Zusammenführung bzw. Trennung vollständig darzustellen
Abbildung 3: Vereinigung/Trennung von Zügen mit Festlegung des Hauptlaufs im Zusammenführungsbereich
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 11

## Seite 12

2.3 Erfassung von Zuglaufanteilen bei nationalen Betreibern der Schienenwege
Um den Erfordernissen aus dem ERegG § 51 (3) und den INB, Anlage 4.2.3.1 Rechnung zu
tragen, besteht die Möglichkeit, Fremdnetzanteile auf deutschem Gebiet als Teil der bei der
InfraGO AG eingehenden Trassenbestellung (PathRequestMessage) zu senden. Im Rahmen der
Kooperationsvereinbarung der Betreiber der Schienenwege (BdS) leitet die DB InfraGO AG die
Trassenanteile auf dem Fremdnetz an den betroffenen Nachbar-BdS weiter. Diese Weiterleitung
erfolgt nach aktuellem gültigem Vorgehen außerhalb der TAF/TAP TSI-Nachrichtenformate. Die
Erstellung und Kommunikation des Angebots des Fremdnetzanteils obliegt wie auch heute dem
BdS und erfolgt über den vom BdS angeboteten Kanal. Die DB InfraGO AG ist in diesen
Datenaustausch nicht involviert. Davon unbenommen sind Anteile bei Nachbar-BdS, für die die
InfraGO AG als PlanningIM auftritt.
Die TrainInformation (Route) ist von dieser Veränderung nicht betroffen, da sie vom LeadRU
vergeben wird und auch außerhalb Deutschlands Anwendung findet. Hier sind die notwendigen
PLC, wie in Kap 4.1 und 10.4 des Hauptdokuments beschrieben, anzugeben.
Die PathInformation (Fahrlage) muss um die bestellen Kundenhalte und den notwendigen
Angaben nach Anlage 1 auf dem Gebiet des Nachbar-BdS ergänzt werden, sofern eine
Weitergabe der Trassenanmeldung an den Nachbar-BdS durch die InfraGO AG gewünscht ist.
Die DB InfraGO AG übernimmt für diese Anteile keine Prüfung auf Vollständigkeit oder
Konsistenz nach den Vorgaben des Nachbar-BdS.
Im Angebot der DB InfraGO AG(PathDetailsMessage) sind die Anteile des Nachbar-BdS wie folgt
enthalten:
• Bei Übernahme der Funktion PlanningIM als auskonstruierte Trassenlaufpunkte
• Bei Erfüllung der Auflagen aus dem ERegG und den INB erfolgt die Angabe der
Fremdnetzanteile unverändert gegenüber der vom Kunden eingereichten
Bestellung mit abgestimmten Zeiten an den Konstruktionsgrenzen
2.4 Zuglauf DB InfraGO – fremder Infrastrukturbereich – DB InfraGO
Es gibt Fälle, in denen ein vom EVU geplanter Zug zunächst im Netz der DB InfraGO AG
verkehrt, dann in einem fremden Infrastrukturbereich (anderer Infrastrukturbetreiber im Ausland
oder innerhalb der BRD) weiter verkehrt du anschließend seine Fahrt wieder im Netz der DB
InfraGO AG fortsetzt.
Das EVU in der Rolle LeadRU plant einen durchgehenden Zuglauf, also einen ReferenceTrain
mit einer durchgehenden Route. Je Infrastrukturbetreiber, der selbst die Trassenzuweisung
vornimmt (= Rolle PlanningIM), sind durch die jeweils zuständigen EVU in der Rolle
ResponsibleApplicant gesonderte Trassenbestellungen (PathRequestMessage) zu erstellen und
zu übergeben.
Auch mehrmalige Wechsel zwischen dem Netz der DB InfraGO AG und fremden
Infrastrukturbereichen können mit gegenseitiger Referenzierung abgebildet werden. Dafür ist
dann die Referenzierung weiterer PathRequests mit den Codes 1006 und 1007 notwendig.
Die nachfolgende Abbildung 4: Zuglauf DB InfraGO – Fremd EIU – DB zeigt ein Beispiel mit den
wesentlichsten Angaben in den zu erstellenden PathRequestMessages.
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 12

## Seite 13

Abbildung 4: Zuglauf DB InfraGO – Fremd EIU – DB InfraGO
Dokumentation der EVU-Schnittstelle des Bestellsystems, Version 4.6.2 13
