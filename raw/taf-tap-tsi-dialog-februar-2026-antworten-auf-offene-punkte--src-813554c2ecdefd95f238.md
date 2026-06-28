# TAF/TAP TSI-Dialog – Februar 2026 – Antworten auf offene Punkte

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13767280/cacedb38eaeb6b9824367a15899820d4/TAF-TAP-TSI-Dialog-Februar-2026-Antworten-auf-offene-Punkte-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13767280/cacedb38eaeb6b9824367a15899820d4/TAF-TAP-TSI-Dialog-Februar-2026-Antworten-auf-offene-Punkte-data.pdf)
- Quellen-Schlüssel: `src-813554c2ecdefd95f238`
- Abrufdatum: 2026-06-28
- Original: [[taf-tap-tsi-dialog-februar-2026-antworten-auf-offene-punkte--src-813554c2ecdefd95f238.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

11. TAF/TAP TSI-Dialog der DB InfraGO
Follow-up: Klärung offener Punkte aus dem Termin
26.02.2026 Versand im
Nachgang
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 1

## Seite 2

Offene Punkte und Antworten (1/5)
Frage Antwort DB InfraGO
ETCS: Müssen die CR Objekte für ETCS Das CaseReferenceObject "ETCS-Zugdaten" ist ausschließlich für Züge, die nach dem Gamma-Modell
zum Fahrplan 2027 angegeben fahren vorgesehen. Das für den "Digitalen Knoten Stuttgart" vorgesehene Fahrplankonzept nutzt die
werden? Fahrdynamiken des ETCS-Gamma-Modells. Durch die Verschiebung der Inbetriebnahme des Digitalen
Knoten Stuttgarts ist die Verarbeitung der ETCS-Gamma-Parameter für die Fahrplanerstellung im
Fahrplanjahr 2027 nicht mehr vorgesehen. Das CaseReferenceObject kann daher für die
Trassenanmeldung angelegt und referenziert werden, die Parameter werden aber nicht im Fahrplan
oder Betrieb verarbeitet.
Der bisherige Umgang mit ETCS-Zügen, die nach Lamda-Modell verkehren bleibt unverändert.
Für den Fahrplan 2028 ist nach aktuellem Planungsstand vorgesehen die Gamma-Parameter in der
Fahrplanung zu verarbeiten und zu berücksichtigen. Das konkrete Vorgehen für die
Fahrlagenberatung für Fahrplan 2028 wird zum geeigneten Zeitpunkt kommuniziert.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 2

## Seite 3

Offene Punkte und Antworten (2/5)
Frage Antwort DB InfraGO
Zeitscheiben: Müssen im Fahrplan Das Aufteilen eines Verkehrsbedürfnisses in verschiedene PathRequests (oder "Schneiden in
2027 Baumaßnahmen im Rahmen von Zeitscheiben") ist unter TAF/TAP TSI dann verpflichtend notwendig, wenn der zusammengefasste
Zeitscheiben in der Anmeldung PathRequest ansonsten unplausibel wäre. Ein PathRequest ist beispielsweise unplausibel, wenn der
berücksichtigt werden? bestellte Laufweg an einer Teilmenge der bestellten Verkehrstage durch eine in den
Planungsparametern veröffentlichten Totalsperrung führt, die Fahrzeit aufgrund von
Baueinschränkungen nicht gehalten werden kann o.ä..
Wenn der PathRequest trotz Baueinschränkung plausibel bleibt (z.B. bei einer Eingleisigkeit) ist das
aufteilen der PathRequests ("Schneiden in Zeitscheiben") nicht verpflichtend, wobei die DB InfraGO
jedoch klar empfiehlt, die PathRequests nach den veröffentlichten Baueinschränkungen und den in der
Fahrlagenberatung abgestimmten Konzepten aufzuteilen, um Koordinierungs- und
Kommunikationsaufwand zwischen DB InfraGO und den EVU während der
Netzfahrplanerstellungsphase zu vermeiden.
Die Kompensation von Trassenmehrkosten wegen baubedingter Umleitung im SGV im Netzfahrplan
nach 5.6.2.1. der Infrastrukturnutzungsbedingungen gilt explizit nach der Aufteilung eines
PathRequests wegen Totalsperrung oder nach Vereinbarung eines Umleitungsweges.
Auszug aus den INB 2027:
"[...] oder es wurde aufgrund einer solchen Baumaßnahme im Vorfeld der Netzfahrplanerstellung eine
Anmeldung durch den ZB über einen Umleitungsweg zwischen ZB und DB InfraGO AG vereinbart oder
der ZB hat aufgrund einer Totalsperrung in Folge einer solchen Baumaßnahme die Trasse über einen
Umleitungsweg angemeldet."
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 3

## Seite 4

Offene Punkte und Antworten (3/5)
Frage Antwort DB InfraGO
Wird die Zugnummer nicht immer noch Es gibt den klassischen Puffertag ab Fpl27 nicht mehr. Wurde die Zugnummer dem Kunden zugeteilt
für einen "Puffertag" geblockt? Wenn (egal ob Kontingentkunde oder Zugartkunde) kann dieser hinsichtlich Bitleiste disjunkt bestellen, ein
man dann zwei Zeitscheiben anmeldet, etwaiger Puffertag (bis Fpl26 Zugartkunde wahlweise betroffen) steht diesem technisch nicht mehr
die unmittelbar aufeinander folgen, entgegen. Dabei ist zu berücksichtigen, dass zwischen der Ankunft des ersten Zuges und der Abfahrt
wäre die Zugnummer ja nicht des zweiten Zuges mind. 4 Stunden Differenz bestehen müssen (innerhalb des InfraGO-Bereichs).
verfügbar.
Bei der automatischen Zugnummern-Vergabe hinterlegt der Zugnummerngenerator keinen Puffertag
mehr, allerdings prüft diese bei der jeweiligen Vergabe, dass der Tag vor und nach dem angefragten
Verkehrstag gemäß Bitleiste im Zugnummerngenerator noch frei ist. Im Falle von
Zeitscheibenbestellungen mit automatisch zu vergebener gleicher Zugnummer kann dies der Kunde
durch Angabe des ReasonOfReference DE06 (Nutzung der gleichen Zugnummer wie für angegebenen
Zug/PathRequest) umgehen.
Ergänzende Frage: Wie sollen Wenn Sie zwei aufeinanderfolgende Zeitscheiben für denselben Zug (gleiche ReferenceTRID und
Laufwegsvarianten dann korrekt Route) anmelden, verlangt das Regelwerk sogar zwingend die Nutzung derselben Zugnummer. Bei der
bestellt werden? Anmeldung sind die entsprechenden PathRequests wechselseitig unter Angabe RoR Code DE06 zu
referenzieren.
In diesem Fall erkennt das System die Zusammengehörigkeit und sperrt die Zugnummer übergreifend
für die Summe der Verkehrstage dieser Fahrlagen. Folglich ist die Zugnummer für Ihre direkt
anschließende Zeitscheibe bei korrekter Verlinkung im System problemlos verfügbar.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 4

## Seite 5

Offene Punkte und Antworten (4/5)
Frage Antwort DB InfraGO
Mein Kollege schreibt mir, dass die Die Verfügbarkeit der Stammdaten zu Triebfahrzeugbaureihen ist unabhängig vom angemeldeten
Fahrzeuge für ein EVU verfügbar sind, Anwender und dessen Unternehmen.
für ein anderes nicht.
Mehrfachtraktionen verschiedener Triebfahrzeugtypen werden grundsätzlich nicht als eine
Baureihenvariante abgebildet werden. Baureihenvarianten aus verschiedenen Tfz, können anhand der
Bordmittel im Portal mit den angelegten Baureihenvarianten selbst zusammengestellt werden.
Gibt es einen Ansprechpartner für das Da PCS keine Anwendung der DB InfraGO AG ist, bietet die DB InfraGO AG keinen Support für PCS
Thema der Trassenanmeldung via PCS, an.
den man im Nachgang kontaktieren Hier verweisen wir auf den zentralen PCS Support.
kann?
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 5

## Seite 6

Offene Punkte und Antworten (5/5)
Frage Aufgrund Antwort DB InfraGO
Werden für den 04.03. Testsessions für Die letzten bekannten Defects mit Schwergrad 1 oder 2, die für die Trassenanmeldung relevant sind,
die Schnittstellenpartner angeboten wurden am 4.3.2026 erfolgreich in Produktion gebracht. Manche dieser Defects sind bereits auf der
zum Re-Test von Issues, welche Kundentestumgebung behoben.
relevant sind für die Trassenanmeldung Einige werden erst ab dem 9.3.2026 auch auf der Kundentestumgebung zum Test zur Verfügung
13.03.? stehen und können dann von den EVU getestet werden.
Die Kundentestumgebung umfasst grundsätzlich mehr Funktionalitäten als die Produktion, z.B. sind
Die Qualität der letzten Testreleases Funktionalitäten zum unterjährigen Bau bisher nicht in Produktion, und daher müssen Defect-
hat sich nach meiner Wahrnehmung Behebungen zunächst in den Produktionsstrang eingebracht und dann in die Kundentestumgebung
extrem verschlechtert, was man auch eingebracht werden.
an der Anzahl der Eröffnung der neuen
Schweregrad 1 u 2 Fehler zu sehen ist. Wir haben auf Wunsch unserer Testpartner die Stammdaten für 2027 auf der Kundentestumgebung
Was macht die DB InfraGO, um eine früher als geplant schon zum 2.3.2026 bereitgestellt. Parallel dazu wurde zur Risikoreduktion kein
bessere Qualität bereitstellen zu Softwarerelease durchgeführt und der reguläre Zyklus der Lieferungen auf die Kundentestumgebung
können. beibehalten. Dies ist auch eine Maßnahme zur Qualitätserhöhung.
Des Weiteren wurden wir informiert
das einige der Schweregrad 1 und 2
(für NEP1) Fehler erst ab dem 09.03.26
auf der KTU retestbar sein sollen. Wie
sollen die EVUs noch sicherstellen
können das dieses wirklich behoben
sind?
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 6

## Seite 7

4. Konsultationsphase in KOMBau
- Informationen aus dem Termin zum Nachlesen (1/3)
Auf Wunsch der Teilnehmenden im TTT-Dialog stellen wir hier die Fragen und das Feedback zum Gastbeitrag KOMBau aus dem
Chat zur Verfügung. Die Fragen wurden im Termin beantwortet und die Antworten daher nicht nochmals ausführlich formuliert.
Frage Antwort DB InfraGO
Wie wird den Sichergestellt, das in der KomBau die Datenqualität Wir konnten zu den Kzp der 3. KP 2026 die Prozessstörer technisch noch
zu Baumaßnahmen stimmig sind? Aktuell sind viele nicht in der KOMBau abbilden.
Großbaumaßnahmen in der BKE Liste im Ausfall, obwohl die Daher haben wir jeweils im Oktober und Dezember nach x-4 eine
Baumaßnahmen stattfinden sollen. Konsultation außerhalb der KOMBau durchgeführt. Hierfür bedurfte es
einer aufwändigen Aufbereitung der Daten.
Im Oktober alle mit Grund C (nicht kostenwirksam): Konsultation nach
Abschnitt 10 der Richtlinie 402.0305 für das Fahrplanjahr 2026 –
Stellungnahme bis 7. November 2025 möglich
Im Dezember alle mit Grund B (durch einen dritten verschuldet) oder D
(Anlagenzustand): Konsultation nach Abschnitt 10 der Richtlinie
402.0305 für das Fahrplanjahr 2026
Für pathOS wurden im November 2025 individuelle Kundentests DB InfraGO prüft gerade, welche Möglichkeiten für einen Kundentest
durchgeführt. Dabei wurden noch viele Fehler aufgedeckt, sowie bestehen bzw. geschaffen werden können. Da für einen aussagefähigen
die Notwendigkeit zusätzlicher Funktionalitäten (insb. zur Test entsprechende Testdaten konsistent von Trassenanmeldung über
Massenbearbeitung) festgestellt. Welche Lehren zieht man daraus die Konstruktion im NEP/GelV sowie unterjährigen Bau vorliegen
für die KOMBau? Aktuell sieht es eher so aus, dass keine müssen, gibt es dabei einige technische Herausforderungen. Gerne
unternehmensspezifischen Kundentests vorgesehen sind. geben wir ein Update im nächsten TAF/TAP TSI – Dialog.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 7

## Seite 8

4. Konsultationsphase in KOMBau
- Informationen aus dem Termin zu Nachlesen (2/3)
Frage Antwort DB InfraGO
Gibt es ein Weg die NAÄ auch z-8 über die Schnittstelle zu Ja: Sofern für den betroffenen CompanyCode ein CI an die Produktion
bekommen wenn man die Trasse aber nicht über die Schnittstelle angeschlossen ist, wird das NAÄ auch dorthin verschickt.
bestellt?
Wird gleich noch die Bestellung baubedingter Zusatzleistungen in Im Termin am 26.2.2026 war dies nicht geplant und vorbereitet. Wir
pathOS gezeigt? haben das Thema auf die Agenda für einen der TTT-Dialoge im März
2026 gesetzt.
Für den ujBau gibt es ja einerseits die KOMBau. Weiterhin soll es Die DB InfraGO AG liefert gemäß Markttestplanung die Funktionalitäten
die neuen Produkte GPE/FPE/NAÄ auch über die Schnittstelle der neuen Schnittstelle in den Test. GPE und FPE sind bereits mit vielen
geben und die Bearbeitung kann darüber erfolgen. Ist denn unserer Testpartnern erfolgreich getestet worden und die Tests zu
sichergestellt, dass dieser Prozess bis 06.07.2026 über die NAÄ/NAS laufen gerade an.
Schnittstelle erfolgreich funktioniert? Daran haben wir, mit Wir freuen uns über weitere Testteilnehmer, um die Qualitätssicherung
Hinblick auf dem Verlauf beim Netzfahrplan, erhebliche Zweifel. vor GoLive zu unterstützen.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 8

## Seite 9

4. Konsultationsphase in KOMBau
- Informationen aus dem Termin zu Nachlesen (3/3)
Frage Antwort DB InfraGO
Im Rahmen der Infoveranstaltung vom 27.11.2025 wurde Die Bedienungsanleitung bezieht sich normalerweise auf die
kommuniziert, dass eine aktualisierte Bedienungsanleitung der Softwareversion, die gerade produktiv genutzt wird.
KOMBau auf der Homepage Basierend auf dem Wunsch aus dem Termin, die Bedienungsanleitung
https://www.dbinfrago.com/web/schienennetz/fahren_und_baue früher zu erhalten, hat die DB InfraGO AG eine Vorabversion für die 4.
n/kombau-11857434 veröffentlicht wird. Dies ist bis heute nicht Konsultationsphase zur Verfügung gestellt. Diese ist auf der Webseite
geschehen. Vielmehr findet sich dort eine Bedienungsanleitung unter KOMBau ab dem 09.03.2026 abrufbar.
mit Stand vom 12.06.2025, in der KP4 (ujBau) nicht enthalten ist.
Wann wird es eine Bedienungsanleitung zur KP4 geben?
Sind zum Start Anfang Juli Exporte aus der Kombau möglich? Bisher war der Export von Trassen aus der KOMBau nicht vorgesehen,
da für eine maschinelle Verarbeitung das Common Interface zur
Verfügung steht.
Auf die Notwendigkeit von Massenfunktionen in der KOMBau Auf das Feedback aus dem TTT-Dialog am 26.2. sowie inhaltlich sehr
wurde bereits im vergangenen Jahr beim RTB hingewiesen. Aber ähnlichem Feedback aus dem Ermittlungstermin bei der BNetzA am
auch beim Kundendialog, bei dem Herr Köhn bei der NWB in einer 6.2.2026 geht die DB InfraGO AG in einem der nächsten TTT-Dialoge
Viko dabei war. ein. Bis dahin prüfen wir, welche „Massenfunktionen“ zur Unterstützung
angeboten werden können.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 9

## Seite 10

Differenzliste Infrastrukturstammdaten
Fahrplan 2026 zu Fahrplan 2027
Ebenfalls haben wir auf Wunsch der Teilnehmenden einmalig eine Übersicht
der expliziten Änderungen der Infrastrukturstammdaten von Fahrplan 2026 zu
Fahrplan 2027 erstellt. Diese können Sie unter folgendem Link abrufen:
Aktuelle Stammdaten in "Fahrplan: EVU Schnittstelle"
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 26.02.2026 ​ 10

## Seite 11

[Kein extrahierbarer Text auf dieser Seite.]
