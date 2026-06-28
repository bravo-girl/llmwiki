# Anlage 10: Dokumentation zum ujBau Prozess

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13508622/34a58687541c5866a04d6b381b82f4b9/Anlage-10-Dokumentation-zum-ujBau-Prozess-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13508622/34a58687541c5866a04d6b381b82f4b9/Anlage-10-Dokumentation-zum-ujBau-Prozess-data.pdf)
- Quellen-Schlüssel: `src-7f5f91e28bee32c6e347`
- Abrufdatum: 2026-06-27
- Original: [[anlage-10-dokumentation-zum-ujbau-prozess--src-7f5f91e28bee32c6e347.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

DB Intern / DB internal
Anlage 10
Dokumentation zum ujBau Prozess
Schnittstelle Eisenbahnverkehrsunternehmen (EVU) / PathOS bzw. KOMBau der DB InfraGO AG
Version 4.6.2

## Seite 2

DB Intern / DB internal
Historie / Änderungen
Version Bearbeitet/ Beschreibung der Änderungen/Bemerkungen Datum
geändert von
0.0.1 DB Netz AG Initialfassung 03.11.2023
Fabian Sommer
1.0.0 DB InfraGO AG Fachliche Änderungen 17.07.2024
Fabian Sommer • Entfall der prozessauslösenden ObjectInfoMessage („Baubetroffenheit
anzeigen“
• Aufnahme eines weiteren Prozessschrittes „GPE nach Stellungnahme“
• Entfall des Prozessschritts „qualifizierte Rückmeldung“
• Aufnahme Prozessschritt „Ablehnung“ durch den Kunden
• Aufsplittung in 2 Teilprozesse zur besseren Visualisierung
• Aufnahme eines neuen NSP „Stellungnahme_Grund“
Redaktionelle Anpassungen
• Änderung des Dokumentennames
• Änderung der Firmierung
• Entfernung nicht notwendiger Zeilen innerhalb der Codeliste, Kap. 6
4.6.0 DB InfraGO AG Fachliche Änderungen 17.04.2025
Fabian Sommer • Anpassungen an den Prozessschaubildern
• Anpassungen zum Umfang des alternativen Trassenvorschlags durch
das EVU, immer gesamte Fahrlage zu senden
• Anpassungen am Umfang des Inhalts von GPE/ GPE nach
Stellungnahme und FPE, lediglich konstruktionsrelevante Inhalte
• Aufnahme der Möglichkeit des vorzeitigen Prozessendes
• Aufnahme der AffectedSection zur zeitlichen Strukturierung der
Stellungnahmen
• Änderung des Objekttyps der BKE von CR zu TC
Redaktionelle Änderungen
• Angleichung der Versionsnummer an die restliche TTT-
Schnittstellendokumentation
• Aufnahme der gesamten NSP-Strukturen um Befüllung im GPE/ GPE
nach Stellungnahme und FPE abbilden zu können
• Aufnahme fehlender Attribute aus xsd Version 3.5.0
• Ergänzung fehlender Geschäftsvorfälle
• Fehlerkorrekturen
4.6.1 Fachliche Änderungen 14.07.2025
• Anpassungen an den Prozessschaubildern
• Anpassungen an den Datenfeldbeschreibungen und -verwendungen in
den ujBau-Prozessen
• Umgang mit neuen Trassenentwurf und späterem Ausfall der
Bestandstrasse
• Ablehnungsmöglichkeiten eines GPE
• Klärungen zum vorzeitigen Prozessende
• Auswirkungen von Nr.14 Maßnahmen auf die Prozesse
Redaktionelle Änderungen
• Fehlerkorrekturen
• Angleichungen in Tabelle 1 an die geänderten Prozessschemata
2
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 3

DB Intern / DB internal
Version Bearbeitet/ Beschreibung der Änderungen/Bemerkungen Datum
geändert von
• Erklärung zur Abgabe einer Stellungnahme als PRM
• Entfall Ankündigung Kapitel 4.2
• Angleichung der Vorkommen zwischen xsd und Anlage 10
• Zurücknahme der Notwendigkeit zur Verwendung des
plannedcalender in der AffectedSection
4.6.2 DB InfraGO AG Fachliche Änderungen 11.09.2025
Fabian Sommer • Anpassungen an den Prozessschaubildern
• Anpassung bei TractionMode und BrakingRatio
• Entfall NSP „Stellungnahmefrist“
Redaktionelle Änderungen
• Schärfungen an den Kapiteln 3.4, 3.6, 3.7 und 3.10.
• Klarstellungen nicht verwendeter Attribute
• Schärfung der Stellungnahme in Form der PathRequestMessage und
in PathInformation (Kap5.6)
• Klarstellung über die Verwendung von Vorkommen in xsd und
Verwendung im bilateralen Datenaustausch
• Wiederherstellung TTT-Konformität TrainInformation (Kap 5.5)
• Streichungen an verschiedenen Stellen, wo Attribute nur bei Änderung
der Stellungnahme gegenüber GPE anzugeben seien
3
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 4

DB Intern / DB internal
Inhaltsverzeichnis
1. Einleitung 9
1.1 Abgrenzung zu Baubedingten Kapazitätseinschränkungen 9
1.2 Voraussetzungen zur Nutzung des Prozesses via Schnittstelle 9
1.3 Durchführung 9
1.4 Kanaltreue 9
2. Struktur der Dokumentation 10
2.1 Inhalt und Aufbau der Dokumentation 10
2.2 Nachrichten und Geschäftsvorfälle 10
2.3 Nachrichtenstruktur 10
3. Geschäftsfallfolge und Prozessschrittdefinition 11
3.1 Nachrichtenabfolge 11
3.1.1 Nachrichtenabfolge für das Angebot eines alternativen Trassenverlaufs 12
3.1.2 Nachrichtenabfolge für den geplanten Ausfall der Trasse 13
3.2 Vorbemerkung 14
3.3 Trassenentwurf (grob) bzw. Trassenentwurf (grob) nach Stellungnahme 14
3.4 Trassenentwurf (fein) 14
3.5 Entwurf Ausfall (grob) / Entwurf Ausfall (fein) 14
3.6 Zustimmung zum GPE bzw. GPE nach Stellungnahme 14
3.7 Alternativer Trassenvorschlag 14
3.8 Ablehnung GPE bzw. GPE nach Stellungnahme 15
3.9 Vorzeitiges Prozessende 15
3.10 Einfluss von verfristeten Baumaßnahmen und Aufteilung von Pathes auf den Prozess 15
4. Nachrichten 16
4.1 Geschäftsvorfälle und Basisprozesse 16
4.2 Hauptstrukturen der Nachrichten 17
4.2.1 PathDetailsMessage 17
4.2.2 PathNotAvailableMessage 19
4.2.3 PathRequestMessage 21
4.2.4 PathConfirmedMessage 24
4.2.5 ReceiptConfirmationMessage 25
4
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 5

DB Intern / DB internal
4.2.6 PathDetailsRefusedMessage 27
4.2.7 ErrorMessage 28
5. Datenfeldbeschreibungen 31
5.1 Spalten der Datenfelder-Tabellen 31
5.2 Struktur „MessageHeader“ 32
5.2.1 Übersicht über die Struktur „MessageHeader“ 32
5.2.2 Datenfelder der Struktur „MessageHeader“ 33
5.3 Struktur „AdministrativeContactInformation“ 34
5.3.1 Übersicht über die Struktur „AdministrativeContactInformation“ 34
5.4 Struktur „Identifiers“ 34
5.4.1 Übersicht über die Struktur „Identifiers“ 34
5.4.2 Identifier eines GPE / FPE 35
5.4.3 Identifier einer SN zu einem GPE 35
5.4.4 Identifier der BKEen 36
5.4.5 Datenfelder der Struktur „Identifiers“ 36
5.5 Oberstruktur TrainInformation 36
5.6 Oberstruktur PathInformation 36
5.6.1 Übersicht über die Oberstruktur „PathInformation“ 36
5.6.2 Strukturen der Oberstruktur „PathInformation“ 37
5.7 Struktur „PlannedJourneyLocation“ 37
5.7.1 Übersicht über die Struktur „PlannedJourneyLocation“ und deren Unterstrukturen 37
5.7.2 Datenfelder der Struktur „PlannedJourneyLocation“ und deren Unterstrukturen 41
5.8 Struktur „PlannedCalendar“ 50
5.8.1 Übersicht über die Struktur „PlannedCalendar“ 50
5.8.2 Struktur „ReferenceTrainIDSubCalendar“ und Attribut „OffsetToReference“: 50
5.8.3 Datenfelder der Struktur „PlannedCalendar“ 51
5.8.4 Datenfelder der Struktur „ReferenceTrainIDSubCalendar“ 52
5.9 AffectedSection 53
5.9.1 Übersicht über die Struktur „AffectedSection“ 53
5.9.2 Datenfelder der Struktur „AffectedSection“ 54
5.10 InterruptionInformation 56
5
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 6

DB Intern / DB internal
5.10.1 Übersicht über die Unterstruktur „InterruptionInformation“ 56
5.10.2 Datenfelder der Unterstruktur „InterruptionInformation“ Struktur 56
5.11 NetworkSpecificParameter 57
5.11.1 Übersicht über die Struktur „NetworkSpecificParameter“ 57
5.11.2 Datenfelder der Struktur „NetworkSpecificParameter“ 57
5.11.3 Vorgehensweise bei der Nutzung nationaler Parameter 57
5.11.4 Befüllung der Struktur 57
5.11.5 Attributanpassungen der Struktur „NetworkSpecificParameter“ auf Message-Ebene ggü. Anlage 1 57
5.11.6 Attribute der Struktur „NetworkSpecificParameter“ auf Location-Ebene 59
5.11.7 Attribute der Struktur „NetworkSpecificParameter“ in der Struktur „AffectedSection“ 63
6. Codelisten 64
6.1 TAF-TSI/TAP-TSI-Codelisten 64
6.2 Codeliste TrainActivity 65
6
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 7

DB Intern / DB internal
Tabellenverzeichnis
Tabelle 1: Verwendete Nachrichtentypen ......................................................................................................................................................................................................................................................................................................................... 17
Tabelle 2: PathDetailsMessage Hauptstruktur Beschreibung ............................................................................................................................................................................................................................................................................................ 19
Tabelle 3: PathNotAvailableMessage Hauptstruktur Beschreibung .................................................................................................................................................................................................................................................................................. 21
Tabelle 4: PathRequestMessage Hauptstruktur Beschreibung .......................................................................................................................................................................................................................................................................................... 24
Tabelle 5: PathConfirmedMessage Beschreibung .............................................................................................................................................................................................................................................................................................................. 25
Tabelle 6: ReceiptConfirmationMessage Struktur Beschreibung ....................................................................................................................................................................................................................................................................................... 27
Tabelle 7: ErrorMessage Struktur Beschreibung ................................................................................................................................................................................................................................................................................................................ 30
Tabelle 8: Spalten Datenfeldertabellen .............................................................................................................................................................................................................................................................................................................................. 32
Tabelle 9: Übersicht verwendete Codierungen in Tabelle 8: Spalten Datenfeldertabellen ............................................................................................................................................................................................................................................... 32
Tabelle 10: MessageHeader Datenfelder ........................................................................................................................................................................................................................................................................................................................... 34
Tabelle 11: Identifier des GPE / FPE ................................................................................................................................................................................................................................................................................................................................... 35
Tabelle 12: Identifier einer SN ............................................................................................................................................................................................................................................................................................................................................ 36
Tabelle 13: Identifier der BKEen als CaseReference ........................................................................................................................................................................................................................................................................................................... 36
Tabelle 14:PathInformation Oberstruktur Beschreibung ................................................................................................................................................................................................................................................................................................... 37
Tabelle 15: PlannedJourneyLocation Datenfelder ............................................................................................................................................................................................................................................................................................................. 49
Tabelle 16: PlannedCalender Datenfelder.......................................................................................................................................................................................................................................................................................................................... 52
Tabelle 17: ReferenceTrainIDSubCalendar Datenfelder..................................................................................................................................................................................................................................................................................................... 53
Tabelle 18: AffectedSection Datenfelder ........................................................................................................................................................................................................................................................................................................................... 56
Tabelle 19: InterruptionInformation Datenfelder .............................................................................................................................................................................................................................................................................................................. 57
Tabelle 20: NetworkSpecificParameter Message-Ebene Datenfelder ............................................................................................................................................................................................................................................................................... 59
Tabelle 21: TAF-TSI/TAP-TSI Codelisten Übersicht ............................................................................................................................................................................................................................................................................................................. 64
Tabelle 22: TAF-TSI/TAP-TSI Codelisten ............................................................................................................................................................................................................................................................................................................................. 65
7
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 8

DB Intern / DB internal
Abbildungsverzeichnis
Abbildung 1: Nachrichtenabfolge Alternative Trasse ......................................................................................................................................................................................................................................................................................................... 12
Abbildung 2: Nachrichtenabfolge Trassenausfall ............................................................................................................................................................................................................................................................................................................... 13
Abbildung 4: PathDetailsMessage Hauptstruktur .............................................................................................................................................................................................................................................................................................................. 18
Abbildung 5:PathNotAvailableMessage Hauptstruktur ..................................................................................................................................................................................................................................................................................................... 20
Abbildung 6: PathRequestMessage Hauptstruktur ............................................................................................................................................................................................................................................................................................................ 22
Abbildung 7: PathConfirmedMessage Hauptstruktur ........................................................................................................................................................................................................................................................................................................ 24
Abbildung 8: ReceiptConfirmationMessage Struktur ......................................................................................................................................................................................................................................................................................................... 26
Abbildung 9: ErrorMessage Struktur .................................................................................................................................................................................................................................................................................................................................. 29
Abbildung 10: MessageHeader Struktur ............................................................................................................................................................................................................................................................................................................................ 33
Abbildung 11: Identifiers Struktur ...................................................................................................................................................................................................................................................................................................................................... 34
Abbildung 12: PathInformation Oberstruktur .................................................................................................................................................................................................................................................................................................................... 37
Abbildung 13: PlannedJourneyLocation Strukturübersicht ................................................................................................................................................................................................................................................................................................ 38
Abbildung 14: LocationSubsidiaryIdentification Unterstruktur ......................................................................................................................................................................................................................................................................................... 39
Abbildung 15: PlannedTrainTechnicalData Struktur .......................................................................................................................................................................................................................................................................................................... 40
Abbildung 16: TrainActivity Unterstruktur ......................................................................................................................................................................................................................................................................................................................... 41
Abbildung 17:PlannedCalendar Struktur ............................................................................................................................................................................................................................................................................................................................ 50
Abbildung 18: ReferenceTrainIDSubCalendar Struktur ...................................................................................................................................................................................................................................................................................................... 51
Abbildung 19: AffectedSection Struktur ............................................................................................................................................................................................................................................................................................................................. 53
Abbildung 20:InterruptionInformation Struktur ................................................................................................................................................................................................................................................................................................................ 56
Abbildung 21: NetworkSpecificParameter Struktur ........................................................................................................................................................................................................................................................................................................... 57
8
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 9

DB Intern / DB internal
1. Einleitung
Dieses Dokument beschreibt den Prozess für die unterjährige Bautrassenkonsultation, welcher die Kommunikationsplattform Bau (KOMBau) der DB InfraGO AG den Eisenbahnverkehrsunternehmen (EVU) anbietet, um ein
Grobplanungsergebnis (GPE), GPE nach Stellungnahme bzw. Feinplanungsergebnis (FPE) zu beziehen, bzw. eine Stellungnahme (SN) auf ein GPE abzugeben. Die Schnittstelle zur Kommunikation des GPE bzw. FPE basiert technisch auf dem
TAF-/TAP-TSI-Format (gültig ist die XSD-Version nach Anlage 3 bzw. 4 dieser Dokumentation).
In diesem Dokument werden die für die Schnittstelle genutzten TAF-/TAP-TSI Strukturen ihren fachlichen Inhalten zugeordnet. Das Dokument folgt grundsätzlich den Definitionen des Hauptdokuments sowie den weiteren Anlagen. Da die
TAF/TAP TSI im europäischen Kontext nicht für diesen Prozess konzipiert wurde, sind einige Anpassungen erforderlich, die im weiteren Verlauf dieses Dokuments beschrieben werden.
Weitere Informationen zur KOMBau finden Sie hier: Kommunikationsplattform Bau
1.1 Abgrenzung zu Baubedingten Kapazitätseinschränkungen
Dieses Dokument beschreibt den Prozess über die Konsultation von alternativen Trassenverläufen durch Baubedingte Kapazitätseinschränkungen (BKE), die mittels GPE, GPE nach Stellungnahme und FPE übertragen werden. Diese Objekte
enthalten nur eine Referenz auf die auslösenden BKEen. Zugehörige Informationen zu den BKEen sind der entsprechenden Schnittstellenbeschreibung der KOMBau zu entnehmen.
1.2 Voraussetzungen zur Nutzung des Prozesses via Schnittstelle
Der Nachrichtenaustausch findet zwischen der KOMBau und den IT-Systemen der Schnittstellenpartner über das CommonInterface (CI) des Bestellsystems statt. Es gelten die entsprechenden Regelungen aus dem Hauptdokument (Kap. 2)
sowie der Anlage 2 („Anl2_Technische_Funktionsbeschreibung_EVU-Schnittstelle_Bestellsystem_V.x.x.x") in der jeweils gültigen Form. Das Routing der einzelnen Nachrichten aus den jeweiligen Prozessen im Fahrplanungskontext erfolgt
durch die korrekte Verwendung des NetworkSpecificParameters „marktprodukt“ auf Messageebene. Für die Zuweisung einer Nachricht zum ujBau-Prozess ist die Ausprägung „BAU“ zu verwenden. Darüber hinaus ist im MessageHeader
jeder Nachricht das Attribut „MessageRoutingID“ zu füllen. Siehe hierzu auch Kap 5.2.2
1.3 Durchführung
Die Schnittstelle ist so konzipiert, dass Schnittstellennutzer beim Senden an DB InfraGO AG Schnittstellenaufrufe durchführen und zunächst synchron eine technische Quittung bei erfolgreichem Eingang der übermittelten Nachricht bei DB
InfraGO (mit Eingangszeitstempel) oder bei technischen Fehlern (z.B. Nichtverfügbarkeit des Servers) eine technische Fehlermitteilung erhalten. Im Anschluss erfolgt eine automatisch ausgeführte fachliche Validierung der eingegangenen
Nachricht. Im Erfolgsfall wird eine fachliche Bestätigungsnachricht („ReceiptConfirmationMessage“) bereitgestellt. Bei Fehlern, die die Entgegennahme bzw. Bearbeitung der Nachricht verhindern wird eine Nachricht „ErrorMessage“
gesendet.
Die gesamte Kommunikation über die EVU-Schnittstelle zwischen den Systemen der DB InfraGO AG (Bestellsystem und KOMBau) und dem jeweils auf EVU-Seite beteiligten Kundensystem ist ein Sendeverfahren. Das heißt, alle zwischen
dem IT-System eines EVU und den Systemen der DB InfraGO ausgetauschten Nachrichten werden immer vom Absender an den jeweiligen Empfänger gesendet.
1.4 Kanaltreue
Entgegen den festgelegten Abläufen für die Standard TAF/TAP TSI-Prozesse nach Kapitel 2.1.2. der Anlage 1 gilt für den ujBau Prozess kein Kanalzwang. Dies bedeutet, dass die einzelnen Prozessschritte immer parallel angewendet und
verarbeitet werden können.
Die DB InfraGO AG wird die jeweiligen Prozessschritte sowohl über das CommonInterface nach Anlage 2 zur Verfügung stellen als auch parallel in der Oberfläche der KOMBau anbieten. Die Antwort des EVU kann entsprechend entweder
über das CommonInterface oder aber die Oberfläche der KOMBau erfolgen.
9
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 10

DB Intern / DB internal
2. Struktur der Dokumentation
2.1 Inhalt und Aufbau der Dokumentation
Die vorliegende Dokumentation beschreibt den Datenaustausch zwischen dem IT-System eines EVU und der DB InfraGO AG zum Austausch des GPE, der Stellungnahme zum GPE, dem GPE nach Stellungnahme und dem FPE. Sie beschreibt
u. a. die verwendeten Objekte und deren Attribute, Messages und Identifikatoren sowie die Nachrichtenabfolge. Diese Dokumentation basiert technisch auf der durch RNE (RailNetEurope) bekanntgegeben xsd. Details zur TAF/TAP-TSI-xsd
der RNE sind hier zu finden: http://taf-jsg.info/?page_id=172. Die Schnittstelle setzt auf die Version 3.5.0.0 der xsd auf.
Die Schnittstelle der KOMBau ist separat vom Trassenbestell- und -zuweisungsprozess zu betrachten, und damit auch von der Schnittstelle des Bestellsystems der DB InfraGO AG, auch wenn beide auf ähnlichen TAF-/TAP-TSI Strukturen
aufbauen. Um die Anforderungen des Prozesses erfüllen zu können, müssen einige notwendige Anpassungen an den bekannten Strukturen der Anlage 1 ergänzt bzw. geändert werden. Diese Anpassungen werden in diesem Dokument ab
Kapitel 4 dargestellt.
2.2 Nachrichten und Geschäftsvorfälle
Für den Prozess in der vorliegenden Dokumentation werden aus dem TAF/TAP TSI-Standard definierte Nachrichten wiederverwendet und leicht angepasst. Im Vergleich zum Kapitel 3.2 des Hauptdokuments werden die Bedeutungen der
einzelnen Nachrichten für den Bautrassenkonsultationsprozess, wie nachfolgend beschrieben angepasst.
 PathRequestMessage:
Die Nachricht dient der Übermittlung eines alternativen Trassenvorschlags durch das EVU auf den Erhalt einer PathDetailsMessage (GPE) oder einer PathNotAvailableMessage (Entwurf Ausfall) durch die DB InfraGO. Die
notwendigen Inhalte der PathRequestMessage sind den Kapiteln 4 bis 6 dieser Dokumentation zu entnehmen. Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI Standard senden. Die Informationen zur Route des
Gesamtzuges (= TrainInformation) werden im Rahmen dieser Schnittstelle von Seiten DB InfraGO nicht verarbeitet.
 PathDetailsMessage:
Die Nachricht wird vom EIU versendet, um das GPE/GPE nach Stellungnahme oder das FPE an das jeweilige EVU zu übermitteln. Zum Zeitpunkt der Umsetzung des Prozesses können die Angaben der baubedingt geänderten
Trassen noch inkonsistent sein. Die Produkte GPE / GPE nach Stellungnahme oder FPE enthalten im ujBau Prozess lediglich die konstruktionsrelevanten Angaben, die für die Bewertung des Planungsergebnisses notwendig sind.
Vertriebliche Daten, die für den Versand eines Trassenangebots in der netzausgelösten Änderung nicht erforderlich sind, sind in diesen Objekten nicht enthalten. Die Details sind den Kapiteln 4 bis 6 zu entnehmen.
 PathConfirmedMessage:
Diese Nachricht sendet der Kunde nach Erhalt des empfangenen GPE/ GPE nach Stellungnahme, sofern aus Sicht des Kunden keine Änderungswünsche am kommunizierten GPE vorhanden sind. Sie ist im vorgesehenen Prozess
unverändert nutzbar. Dies betrifft sowohl die Zustimmung zu einem alternativen Trassenvorschlag als auch die Zustimmung zum Entfall der Trasse („Stornierung“).
 PathDetailsRefusedMessage
Diese Nachricht sendet der Kunde nach Erhalt des empfangenen GPE bzw. des GPE nach Stellungnahme, sofern der Kunde dem Ergebnis der Grobplanung nicht zustimmt. Diese Nachricht wird als Wunsch zum Ausfall der Trasse
interpretiert.
 PathNotAvailableMessage:
Diese Nachricht wird von der DB InfraGO versendet, wenn kein GPE / GPE nach Stellungnahme bzw. FPE erzeugt werden kann und die ursprüngliche Trasse für die betroffenen Verkehrstage nicht erhalten bleiben kann.
 ReceiptConfirmationMessage:
Diese Nachricht dient analog zum TAF/TAP-TSI Standard der Übermittlung des erfolgreichen Empfangs der zuvor gesendeten Nachricht.
 ErrorMessage:
Diese Nachricht wird vom Empfänger einer Nachricht an den Absender einer Nachricht gesendet, wenn diese Nachricht nicht verarbeitet werden konnte. Nach Identifikation und Behebung des Fehlers ist die zuvor gesendete
Nachricht erneut zu senden.
2.3 Nachrichtenstruktur
Die Struktur der einzelnen Nachrichten entspricht den entsprechenden Kapiteln aus dem Hauptdokument, Kapitel 3.2 sowie der Anlage 1 („Anl1_Datenfelder_EVU-Schnittstelle Bestellsystem.pdf“). Um die fachlichen Anforderungen des
Prozesses in den Nachrichten abwickeln zu können, sind dennoch einige Anpassungen gegenüber den Informationen aus Anlage 1 vorzunehmen. Diese Informationen sind den Kapiteln 4, 5 und 6 zu entnehmen.
10
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 11

DB Intern / DB internal
3. Geschäftsfallfolge und Prozessschrittdefinition
3.1 Nachrichtenabfolge
Für die Zuordnung der Nachrichten innerhalb des ujBau-Prozesses muss der NetworkSpecificParameter (NSP) „marktprodukt“ mit der Kodierung „BAU“ gekennzeichnet werden (siehe dazu auch Kap 5.10.5). Zusätzlich wird von Seiten der
DB InfraGo das Feld „MessageRoutingID“ befüllt. In den zu sendenden fachlichen Antworten auf diese Nachricht ist das Feld in gleicher Weise durch den Empfänger der Nachricht zu befüllen. Die Konsultation zu baubedingt zu ändernden
Trassen erfolgt anhand der nachfolgend dargestellten Nachrichtenabfolgen. Die ehemals, den Prozess anstoßende ObjectInfoMessage mit dem CaseReference-Objekt „Baubetroffenheit“ ist als TAF/TAP TSI-Standard-generierte Nachricht
in der Anlage 1, Kapitel 3.15.4 weiterhin abgebildet. Über eine spätere Aufnahme dieser Nachricht in die Nachrichtenfolge informieren wir zu gegebener Zeit mit entsprechendem Vorlauf.
11
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 12

DB Intern / DB internal
3.1.1 Nachrichtenabfolge für das Angebot eines alternativen Trassenverlaufs
Abbildung 1: Nachrichtenabfolge Alternative Trasse
12
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 13

DB Intern / DB internal
3.1.2 Nachrichtenabfolge für den geplanten Ausfall der Trasse
Abbildung 2: Nachrichtenabfolge Trassenausfall
13
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 14

DB Intern / DB internal
3.2 Vorbemerkung
In Kap 3.1.1 ist die Nachrichtenabfolge für den Versand eines Entwurfs eines alternativen Angebots abgebildet. Kap 3.1.2 liefert die Nachrichtenfolge, sofern die Bestandstrasse nicht mehr verfügbar ist. Auslöser des Prozesses im initialen
Zustand war die ObjectInfoMessage („Baubetroffenheit“). Diese ist für den Ablauf des Prozesses nicht relevant und hätte in bestimmten Abläufen ohnehin nicht gesendet werden können. Darüber hinaus bot die Nachricht erhöhten
Interpretationsspielraum, weswegen die Nachricht bis auf Weiteres entfernt worden ist. Anstelle der Nachricht wird die BKE-Nummer als Core-Element einer TemporaryCapacityRestrictionID mitgeliefert. Das Objekt selbst existiert nicht,
hat daher keinen Inhalt und kann auch nicht via ObjectInfoMessage bei der DB InfraGO angefragt werden.
Im weiteren Verlauf werden die einzelnen Prozessschritte der Nachrichtenabfolge einzeln erläutert. Die Begriffe GPE, GPE nach Stellungnahme und FPE geben hier eine Grobstruktur vor. Ein GPE kann daher sowohl für einen
Trassenentwurf als auch für einen Trassenausfall verwendet werden.
3.3 Trassenentwurf (grob) bzw. Trassenentwurf (grob) nach Stellungnahme
Der Trassenentwurf (grob) wird zur Abstimmung der Trasse mit dem EVU genutzt. Das GPE bildet im Ergebnis die neue Trasse ab. Das GPE wird als PathDetailsMessage nach dem TAF/TAP-TSI Standard an das EVU versendet. Es sind alle
Betroffenheiten, die auf die Trasse wirken, eingearbeitet. Die Fahrzeiten an den jeweiligen Halten (PlannedJourneyLocation) sind noch nicht final auskonstruiert, die räumlichen Bezüge bei Mehrfachbetroffenheiten müssen noch nicht final
abgestimmt sein. Zeitliche und räumliche Brüche sind noch zu akzeptieren. Erfährt die Trasse eine Teilstornierung des Laufwegs, wird dies auch mittels GPE (PathDetailsMessage) vom EIU an das EVU gesendet.
3.4 Trassenentwurf (fein)
Der Trassenentwurf (fein) ist das finale Ergebnis der Planung der Trasse auf Basis des ujBau-Prozesses. Es gleicht vom Aufbau dem GPE und wird ebenfalls als PathDetailsMessage vom EIU an das EVU gesendet. Zeitliche Brüche sind zu
akzeptieren. Auf Basis des FPE wird der TAF/TAP-TSI Standardprozess „Netzausgelöster Änderungs- und Stornierungsprozess“ (Abb. 11 im Hauptdokument) angestoßen. Die netzausgelöste Änderung wird um die nicht
konstruktionsrelevanten Attribute ergänzt.
3.5 Entwurf Ausfall (grob) / Entwurf Ausfall (fein)
Kann für die baubetroffene Vertragstrasse kein alternatives Trassenangebot erarbeitet werden, sendet die DB InfraGO eine PathNotAvailableMessage als Entwurf des Ausfalls als GPE bzw. GPE nach Stellungnahme oder FPE. Das EVU kann
je nach Prozessschritt diesem Ausfall zustimmen oder Stellung nehmen. Eine Ablehnung des Ausfalls ohne eigene Stellungnahme ist nicht möglich. Der Entwurf Ausfall (grob/fein) wird mittels PathNotAvailableMessage an das EVU
übergeben und wird nur verwendet, wenn es sich um die vollständige Stornierung der Trasse für die benannten Verkehrstage handelt. Der Entwurf Ausfall (fein) löst dann den TAF/TAP TSI Standardprozess „Netzausgelöster Änderungs-
und Stornierungsprozess“ (Abb. 11 im Hauptdokument) aus.
Die finale Stornierung der Trasse (Entwurf Ausfall (fein) im Rahmen des FPE bezieht sich auf die ursprüngliche Bestandstrasse (PathIDold). Die, in den Prozessen, eventuell zwischenzeitlich erzeugte alternative Trasse (PathIDnew) wird
ohne den weiteren Versand einer PathNotAvailableMessage ebenfalls storniert.
3.6 Zustimmung zum GPE bzw. GPE nach Stellungnahme
Die Zustimmung zum Grobplanungsergebnis (GPE) bzw. GPE nach Stellungnahme ist eine Rückmeldung des EVU zum, vom EIU versandten, GPE ohne Änderungsbedarf in Hinblick auf das Feinplanungsergebnis (FPE). Eine Zustimmung
bedeutet dabei nicht, dass das FPE identisch zum GPE oder GPEnS sein wird. Insbesondere die zeitliche Feinkonstruktion erfolgt erst zum FPE. Der Versand erfolgt mittels PathConfirmedMessage aus dem TAF/TAP-TSI Standard. Der
zeitliche Umfang (Angabe im plannedCalendar) muss immer den Angaben aus der zuvor von der DB InfraGO AG empfangenen Nachricht entsprechen.
3.7 Alternativer Trassenvorschlag
Sofern das EVU einen Anpassungsbedarf an dem, von der DB InfraGO AG gesendeten, GPE sieht, kann das EVU unter Verwendung einer PathRequestMessage seine Stellungnahme zu dem GPE abgeben. Das EVU muss hier eine Fahrlage
analog zum TAF/TAP-TSI Standard senden. Die von Seiten der DB InfraGO AG zwingend erforderlichen Inhalte sind gegenüber den notwendigen Angaben für vollwertige Trassenbestellungen (s. Anlage 1) stellenweise reduziert. Die
Fahrlage muss beizubehaltende Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der Stellungnahme analog einer Änderungsbestellung beinhalten, ansonsten wird von einer nicht mehr vorliegenden Notwendigkeit dieser
Zwangspunkte ausgegangen. Zusätzliche Zwangspunkte beispielsweise zur Abbildung weiterer Verkehrshalte oder gewünschter abweichender Laufwege können bei Notwendigkeit ergänzt werden. Laufwegspunkte vom Typ Durchfahrt
dürfen nur angegeben werden, wenn sie auf einem gegenüber dem GPE abweichenden Laufweg laufwegsbestimmend sind, oder eine andere Regelung dies erfordert.
Die Frist zur Stellungnahme ist aus dem Annex VII abgeleitet, erfolgt eine Stellungnahme nach Ende der Frist, wird eine ErrorMessage versendet und der Prozess fortgesetzt. Der zeitliche Umfang (Angabe im plannedCalendar) muss immer
den Angaben aus der zuvor von der DB InfraGO AG empfangenen Nachricht entsprechen.
Wird innerhalb der kommunizierten Frist keine Stellungnahme abgegeben, wird der Prozess mit einer impliziten Annahme des vorher gesendeten Objekts fortgesetzt.
14
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 15

DB Intern / DB internal
3.8 Ablehnung GPE bzw. GPE nach Stellungnahme
Sofern das EVU die baubedingt geänderte Trasse nicht mehr benötigt, kann das EVU dies mittels PathDetailsRefusedMessage an die DB InfraGO kommunizieren. In der Folge erhält das EVU im FPE eine PathNotAvailableMessage mit dem
Ausfall der Trasse. Dies wird dann als netzausgelöste Stornierung im TTT-Standard weiterverarbeitet. Der zeitliche Umfang (Angabe im plannedCalender) muss immer den Angaben aus der zuvor von der DB InfraGO AG empfangenen
Nachricht entsprechen.
3.9 Vorzeitiges Prozessende
Sollten sich die Randbedingungen für die Durchführung des Prozesses zwischen GPE und FPE so verändert haben, dass eine Änderung der Bestandstrasse nicht mehr notwendig ist, wird der Prozess mit der Kopie der zuletzt gesendeten
Nachricht (PathDetailsMessage oder PathNotAvailableMessage) mit dem TypeofInformation Code 29 (=withdrawal) erneut gesendet. Der Versand dieser Nachricht beendet den Prozess umgehend. Die betroffene Bestandstrasse erfährt
keine Änderung und gilt unverändert weiter.
3.10 Einfluss von verfristeten Baumaßnahmen und Aufteilung von Pathes auf den Prozess
Besondere Varianten des Prozesses können dazu führen, dass die skizzierten Prozesse nach Abschnitt 3.1.1 oder 3.1.2 mit jeder der drei Nachrichten GPE, GPE nach Stellungnahme und FPE beginnen kann.
Die Behandlung legitimer verfristeter Baumaßnahmen kann unter Umständen dazu führen, dass der Prozess erst mit der FPE-Nachricht beginnt. Ebenfalls kann ihre Behandlung dazu führen, dass zu einer über die pathIDold identifizierte
Regeltrasse für nicht überschneidungsfreie Zeiträume mehrere Nachrichten vom Typ GPE und/oder GPE nach Stellungnahme mit unterschiedlichen pathIDs gleichzeitig existieren. Dies tritt auf, wenn zu einem bereits versendeten GPE
oder GPE nach Stellungnahme in einem anteiligen Zeitraum eine andere Behandlung der Trasse durch eine verfristete Baumaßnahme notwendig wird. Das ursprüngliche GPE oder GPE nach Stellungnahme wird dann nicht korrigiert. Ein
überschneidungsfreier Zustand wird aber immer spätestens mit dem Prozessabschluss durch die zugehörigen FPE hergestellt. Eine baubedingte Änderung kann jedoch auch durch eine weitere baubedingte Änderung erneut geändert
werden.
Im Prozess notwendige Aufteilungen von Paths die an denselben Verkehrstagen gültig sind, die nicht zum Zeitpunkt des GPE bereits erfolgen können, führen ebenfalls dazu, dass Prozesse mit dem GPE nach Stellungnahme oder FPE
beginnen können. Dies tritt unter anderem im Falle eines mittigen Teilausfalls (mit Schienenersatzverkehr (SEV)) auf, wo die Aufteilung in zwei Pathes mit jeweils eigener PathID (und OTN) aber identischen Verkehrstagen und pathIDold
erst im GPE nach Stellungnahme oder FPE erfolgt.
15
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 16

DB Intern / DB internal
4. Nachrichten
4.1 Geschäftsvorfälle und Basisprozesse
Nachfolgend werden die einzelnen Geschäftsvorfälle (GV) und die jeweils zu verwendenden TAF-TSI/TAP-TSI-Nachrichtentypen samt weiterer qualifizierender TAF-TSI/TAP-TSI-Merkmale dokumentiert.
Geschäftsvorfall (GV) Message MessageStatus TypeOfRequest TypeOfInformation Bemerkungen
Übermittlung einer Trasse des GPE von PathDetailsMessage 1 Modification (= 3) 09 – draft offer Neben der Erkennung des GPE über dem TypeOfInformation
DB InfraGO an EVU wird der NSP marktProdukt auf BAU gesetzt sowie das Feld
MessgeRoutingID in der Struktur MessageHeader verwendet
Übermittlung der Information, dass die PathNotAvailableMessage 1 Modification (= 3) 45 – Draft no alternative available Verwendung des Attributs MessageRoutingID in der Struktur
Trasse des GPE nicht konstruiert werden MessageHeader
konnte, von DB InfraGO an EVU
Übermittlung einer Trasse des GPE nach PathDetailsMessage 2 Modification (= 3) 13 - preparation of final offer - in Neben der Erkennung des GPE nach Stellungnahme über den
Stellungnahme von DB InfraGO an EVU process (Abb. 1)/ TypeOfInformation wird der NSP marktProdukt auf BAU gesetzt
12 - observation complete (Abb. 2) sowie das Feld MessgeRoutingID in der Struktur MessageHeader
verwendet
Übermittlung einer Trasse des FPE von PathDetailsMessage 2 Modification (= 3) 16 – final offer Neben der Erkennung des GPE über dem TypeOfInformation
DB InfraGO an EVU wird der NSP marktProdukt auf BAU gesetzt sowie das Feld
MessgeRoutingID in der Struktur MessageHeader verwendet
Übermittlung der Information, dass die PathNotAvailableMessage 1 oder 2 Modification (=3) 08 – coordination update Verwendung des Attributs MessageRoutingID in der Struktur
Trasse des GPE nach Stellungnahme MessageHeader
nicht konstruiert werden konnte, von DB
InfraGO an EVU
Übermittlung des Prozessabbruchs von PathDetailsMessage 2 Modification (=3) 29 – withdrawal Wird immer dann verwendet, um den Prozess bei Absage der
DB InfraGO AG an EVU auslösenden Baumaßnahme o.ä. vorzeitig zu beenden. Die
Bestandstrasse erfährt keine Änderung. Verwendung erfolgt nur
innerhalb des Prozesses vor Prozessabschluss und führt zum
direkten Prozessende
Übermittlung der Information, dass die PathNotAvailableMessage 1 Modification (= 3) 21 – no alternative available Verwendung des Attributs MessageRoutingID in der Struktur
Trasse des FPE nicht konstruiert werden MessageHeader
konnte, von DB InfraGO an EVU
Zustimmung des EVU zum GPE bzw. GPE PathConfirmedMessage 1 Modification (=3) 18 – alternative offer accepted Verwendung des Attributs MessageRoutingID in der Struktur
nach Stellungnahme MessageHeader
Stellungnahme eines EVU auf ein GPE PathRequestMessage 1 Modification (= 3) 28 – alternative offer rejected Neben der Erkennung des GPE über dem TypeOfInformation
(revision required) wird der NSP marktProdukt auf BAU gesetzt sowie das Feld
MessgeRoutingID in der Struktur MessageHeader verwendet
16
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 17

DB Intern / DB internal
Ablehnung des EVU zum GPE bzw. GPE PathDetailsRefusedMessage 1 Modification (= 3) 26 - Alternative offer rejected Verwendung des Attributs MessageRoutingID in der Struktur
nach Stellungnahme (without revi-sion) MessageHeader
Tabelle 1: Verwendete Nachrichtentypen
4.2 Hauptstrukturen der Nachrichten
Die laut XSD vorgegebenen TAF-TSI/TAP-TSI-Nachrichten sind vom Haupt-Element (Bezeichnung der Nachricht, z.B. PathDetailsMessage) über Haupt- und Unterstrukturen (teilweise auch verschachtelt) bis zu den jeweiligen zugeordneten
Attributen strukturiert. Die Gesamtstruktur pro Nachricht ist zu komplex, um diese Struktur in einer einzigen Übersicht zu dokumentieren. Daher werden in Kapitel 4.3 zunächst nur die Hauptstrukturen der Nachrichten gezeigt. Details zu
weiteren Unterstrukturen und deren Attributen werden im Kapitel 5 „Datenfeldbeschreibungen“ beschrieben.
Die Abbildungen zeigen in Aufklapptechnik die Hauptstrukturen und die jeweiligen Unterstrukturen. Die Tabellen dokumentieren das Vorkommen und die Beschreibungen der jeweiligen Struktur.
Die senkrechten Striche in der Spalte „Strukturelement“ symbolisieren dabei die Ebene der Struktur. Striche auf gleicher Höhe bedeuten die Zuordnung der Unterstruktur/des Attributs zur gleichen Ebene. Die Spalte „Vorkommen“ gibt an,
wie häufig ein Attribut bzw. eine Unterstruktur in der übergeordneten Struktur IT-technisch vorkommt:
 0..1 = Kannfeld
 1 = Mussfeld
 0..N = Wiederholstruktur (optional)
 1..N = Wiederholstruktur (mindestens eine Ausprägung der Struktur)
 <zahl>..N = Wiederholstruktur (optional), mindestens durch <zahl> angegebene Anzahl von Ausprägungen; <zahl> stellt dabei den Index (lfd. Nr.) der Ausprägung dar
4.2.1 PathDetailsMessage
Die Nachricht wird von DB InfraGO gesendet, um die baubedingt geänderte Trasse des GPE, GPE nach Stellungnahme bzw. FPE in der Struktur PathInformation an das EVU zu kommunizieren. Sie wird ebenfalls dazu verwendet, das
vorzeitige Prozessende zu übermitteln.
17
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 18

DB Intern / DB internal
Abbildung 3: PathDetailsMessage Hauptstruktur
Strukturelement Vorkommen Beschreibung Bemerkungen
PathDetailsMessage 1 Die Nachricht wird von KOMBau gesendet, um eine Trasse des GPE / GPE nach Stellungnahme / FPE an das EVU zu kommunizieren oder
das vorzeitige Prozessende ohne Veränderung der Bestandstrasse zu kommunizieren.
I….MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht und ggf. auf Nachrichten, die bei der
Bearbeitung berücksichtigt werden sollen.
I....I....PlannedTransportIdentifiers 1..N Identifier der Planungsphase Mögliche IDs:ReferenceTRID, RouteID, PathRequestID,
TemporaryCapacityRestrictionID und ggfs. , CaseReferenceID
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, die die beiden nachfolgenden Elemente Dient nur der Gruppierung der beiden nachfolgenden Elemente
enthält.
I....I....I....RelatedPlannedTransportIdentifiers 1 Enthält zum einen eine Referenz auf die ursprünglich bestellte Trasse in Form der PathID, und zum anderen den Bezug auf die relevanten Angabe von ID anderer Objekte, die mitberücksichtigt werden sollen oder im
BKEen des GPE / FPE. Kontext zu bearbeiten sind.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird. Wird im Rahmen dieser Schnittstelle nicht verwendet.
18
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 19

DB Intern / DB internal
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereitgestellt.
.
I....TypeOfRUHarmonization 0..1 Typ der EVU-Harmonisierung Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....TypeOfIMHarmonization 0..1 Typ der EIU-Harmonisierung Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem Besteller/Vertragspartner Wird im Rahmen dieser Schnittstelle nicht verwendet
(ResponsibleApplicant) oder mit dem durchführenden EVU (ResponsibleRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn
eines der beteiligten EVU die Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....TypeOfRequest 1 Typ der Nachricht (Basisprozess)
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Prozess detaillierter spezifiziert werden. Keine Verwendung bei DB InfraGO
I....TypeOfInformation 1 Typ der Information
I....PathInformation 1 Trassendaten der GPE / FPE
I.... I....PlannedJourneyLocation 2..N Trassenlaufpunkte
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage des GPE / FPE an. Gilt abfahrtsbezogen am Startbahnhof der Zugtrasse
I.... I....RequestedCalendar 0..1 Die angefragten Verkehrstage sind über die Referenz zur ursprünglich bestellten Trasse zu ermitteln. Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....NetworkSpecificParameter 0..N Spezifische Parameter (Attribute, Felder) des EIU (in diesem Dokument die der DB InfraGO)
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert werden
Kann im Rahmen dieser SST die Begründung für die Ablehnung der Stellungnahme im GPE nach Stellungnahme oder FPE beinhalten
Tabelle 2: PathDetailsMessage Hauptstruktur Beschreibung
4.2.2 PathNotAvailableMessage
Die Nachricht wird von DB InfraGO gesendet, falls für eine Trasse kein GPE bzw. FPE konstruiert werden konnte und die Trasse ausfallen soll. Sie wird ebenfalls dazu verwendet, das vorzeitige Prozessende zu übermitteln.
In der Struktur „PlannedCalendar“ der Struktur „AffectedSection“ werden die betroffenen Verkehrstage angegeben, zu denen die Trasse nicht konstruiert werden konnte.
19
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 20

DB Intern / DB internal
Abbildung 4:PathNotAvailableMessage Hauptstruktur
Strukturelement Vorkommen Beschreibung Bemerkungen
PathNotAvailableMessage 1 Die Nachricht wird vom EIU an das EVU gesendet, um zu signalisieren, dass eine Trasse im Rahmen des GPE / FPE nicht konstruiert werden
konnte.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
Identifiers 0..1 Neben der ID für die Trasse zu der kein GPE / FPE konstruiert werden konnte, wird dieses Element außerdem verwendet um die Siehe auch Kapitel 5.4 "Identifiers"
ursprünglich bestellte Trasse (PathID) bzw. die relevanten BKEen (TCID) zu referenzieren.
I....I....PlannedTransportIdentifiers 1..N ID für die Trasse zu der kein GPE / FPE konstruiert werden konnte
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, die die beiden nachfolgenden Elemente Dient nur der Gruppierung der beiden nachfolgenden Elemente.
enthält.
I....I....I....RelatedPlannedTransportIdentifiers 1 Enthält zum einen eine Referenz auf die PathID, die entstehen würde, falls im Stellungnahmeprozess doch eine trassierbare Trasse Die referenzierte möglicherweise entstehende PathID ist in Antworten des EVU auf
entstünde, und zum anderen den Bezug auf die relevanten BKEen des GPE / FPE in Form einer TCID. eine PathNotAvailableMessage gemäß Prozessschaubild wieder mitzugeben, um
eine eindeutige Zuordnung der Antwort beim EIU herstellen zu können.
I....I....I….ReasonOfReference 0..1
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird. Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereitgestellt.
20
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 21

DB Intern / DB internal
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess)
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Prozess detaillierter spezifiziert werden. Wird im Rahmen dieser Schnittstelle nicht verwendet
I....TypeOfInformation 0..1 Typ der Information
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU Wird im Rahmen dieser Schnittstelle nicht verwendet
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem Besteller/Vertragspartner Wird im Rahmen dieser Schnittstelle nicht verwendet
(ResponsibleApplicant) oder mit dem durchführenden EVU (ResponsibleRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn
eines der beteiligten EVU die Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....AffectedSection 1..N enthält Angaben zu Start- und Zielbf. der Trasse die nicht konstruiert werden konnte und der betroffenen Verkehrstage Innerhalb der DB InfraGO wird die AffectedSection immer nur einmal pro Nachricht
verwendet.
I....InterruptionInformation 1 Unterbrechungsinformationen bei Nichtverfügbarkeit
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert werden.
Tabelle 3: PathNotAvailableMessage Hauptstruktur Beschreibung
4.2.3 PathRequestMessage
Die Nachricht wird vom EVU gesendet, falls das empfangene GPE in der angebotenen Form nicht angenommen werden kann. Mit dieser Nachricht führt der Kunde den Geschäftsvorfall „alternativer Trassenvorschlag“ aus. Der Kunde hat
die Möglichkeit einer Stellungnahme auf das zuvor empfangene GPE. Die Nachricht wird über den TypeOfRequest 3 (=Modification) und den TypeOfInformation 28 gekennzeichnet. Die wichtigsten Informationen sind in der Unterstruktur
PathInformation enthalten, diese beschreibt den Wunsch aus Sicht des EVU, wie die Trasse aufgebaut sein sollte.
Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI Standard senden. Die von Seiten der DB InfraGO AG zwingend erforderlichen Inhalte sind gegenüber den notwendigen Angaben für vollwertige Trassenbestellungen (s. Anlage 1)
stellenweise reduziert. Die Fahrlage muss beizubehaltende Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der Stellungnahme analog einer Änderungsbestellung beinhalten, ansonsten wird von einer nicht mehr vorliegenden
Notwendigkeit dieser Zwangspunkte ausgegangen. Zusätzliche Zwangspunkte beispielsweise zur Abbildung weiterer Verkehrshalte oder gewünschter abweichender Laufwege können bei Notwendigkeit ergänzt werden. Laufwegspunkte
vom Typ Durchfahrt dürfen nur angegeben werden, wenn sie auf einem gegenüber dem GPE abweichenden Laufweg laufwegsbestimmend sind, oder eine andere Regelung dies erfordert.
21
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 22

DB Intern / DB internal
Abbildung 5: PathRequestMessage Hauptstruktur
Strukturelement Vorkommen Beschreibung Bemerkungen
PathRequestMessage 1 Die Nachricht wird vom EVU an das jeweils beteiligte EIU gesendet und stellt Informationen zum Gesamtzuglauf und ausgewählten
Zugdaten (TrainInformation) sowie Angaben zur gewünschten Fahrlage des Zuges im Bereich eines Infrastrukturbetreibers
(PathInformation) zur Verfügung.
I....MessageHeader 1 Für alle Nachrichten erforderlich Siehe Kapitel 5.2
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht und ggf. auf Nachrichten, die bei der Siehe Kapitel 5.4 „Identifiers"
Bearbeitung berücksichtigt werden sollen.
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase PathRequestID der SN
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, die die beiden nachfolgenden Elemente Dient nur der Gruppierung der beiden nachfolgenden Elemente
enthält.
22
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 23

DB Intern / DB internal
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase PathID des GPE auf welches sich die SN bezieht.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird. Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereitgestellt. Wird in der Schnittstelle immer auf 1 (=creation) gesetzt.
I....TypeOfRUHarmonization 0..1 Typ der EVU-Harmonisierung Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....TypeOfIMHarmonization 0..1 Typ der EIU-Harmonisierung Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU Wird im Rahmen dieser Schnittstelle nicht verwendet.
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem Besteller/Vertragspartner Wird im Rahmen dieser Schnittstelle nicht verwendet.
(ResponsibleApplicant) oder mit dem durchführenden EVU (ResponsibleRU); Angabe ist nur bei interoperablen Zügen verpflichtend,
wenn eines der beteiligten EVU die Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....TypeOfRequest 1 Typ der Nachricht (Basisprozess) Wird für Trassen des GPE / FPE immer auf 3 (=Modification) gesetzt
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Prozess detaillierter spezifiziert werden.
Wird für die Schnittstelle aber nicht genutzt.
I....TypeOfInformation 1 Typ der Information Wird in der Schnittstelle immer auf „28“ gesetzt
I....TrainInformation 1 Überregionale und allgemeine Zuginformationen des EVU über den gesamten geplanten Zuglauf Die Informationen innerhalb der TrainInformation werden innerhalb des ujBau
Prozesses nicht verarbeitet.
Aufgrund des TAF/TAP TSI-Standards muss die Struktur jedoch befüllt werden.
Hierzu können Dummy-Werte verwendet werden.
I.... I....PlannedJourneyLocation 2..N Zuglaufpunkte Die Informationen innerhalb der TrainInformation werden innerhalb des ujBau
Prozesses nicht verarbeitet.
Aufgrund des TAF/TAP TSI-Standards muss die Struktur jedoch befüllt werden.
Hierzu können Dummy-Werte verwendet werden.
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage der Gültigkeit des Routenobjekts an. In Abhängigkeit vom Wert im Attribut Die Informationen innerhalb der TrainInformation werden innerhalb des ujBau
OffsetToReference können sich die Verkehrstage im Kalender der Route im Vergleich zu den Verkehrstagen des ReferenceTrains um die Prozesses nicht verarbeitet.
Anzahl der Tageswechsel verschieben. Aufgrund des TAF/TAP TSI-Standards muss die Struktur jedoch befüllt werden.
Hierzu können Dummy-Werte verwendet werden.
I.... I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen soll. Die Informationen innerhalb der TrainInformation werden innerhalb des ujBau
Prozesses nicht verarbeitet.
Aufgrund des TAF/TAP TSI-Standards muss die Struktur jedoch befüllt werden.
Hierzu können Dummy-Werte verwendet werden.
I....PathInformation 1 enthält Angaben zum gewünschten Zugtrassenverlauf (Fahrlage) innerhalb des Zuständigkeitsbereiches eines konkreten am Zuglauf
beteiligten EIU
Hier gibt das EVU eine SN in Form eines Wunsches an die Trasse an (Wunsch wie die Trasse aufgebaut sein sollte).
I.... I....PlannedJourneyLocation 2..N Trassenlaufpunkte
23
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 24

DB Intern / DB internal
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage des Zuges innerhalb des Infrastrukturbereiches des jeweiligen Gilt abfahrtsbezogen am Startbahnhof des gewünschten Zugtrassenverlaufs im
Infrastrukturbetreibers an. In Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage im Kalender der Bereich des EIU, für welches die
PathInformation im Vergleich zu den Verkehrstagen des ReferenceTrains oder der Route um die Anzahl der Tageswechsel verschieben. Trassenbestellung bzw. RV-Kapazitätsbestellung erfolgt.
I.... I....RequestedCalendar 0..1 Gibt die in einer PathRequestMessage übergebene Struktur PlannedCalendar unverändert zurück Keine Verwendung dieser Struktur in der PathRequestMessage
I....NetworkSpecificParameter 0..N Spezifische Parameter (Attribute, Felder) des EIU
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert werden; das
Freitextfeld darf nur Angaben enthalten, die nicht in einem definierten Attribut
(Strukturelement) der Nachricht angegeben werden können.
Tabelle 4: PathRequestMessage Hauptstruktur Beschreibung
4.2.4 PathConfirmedMessage
Die Nachricht wird vom EVU an die DB InfraGO versandt, sofern das GPE bzw. GPE nach Stellungnahme ohne weitere Stellungnahme akzeptiert wird. Dadurch wird der Geschäftsvorfall „Zustimmung zum GPE“ bzw. „GPE nach
Stellungnahme“ ausgeführt.
Abbildung 6: PathConfirmedMessage Hauptstruktur
Strukturelement Vorkommen Beschreibung Bemerkungen
PathConfirmedMessage 1 Die Nachricht wird vom EVU gesendet, um ein vom EIU gesendetes GPE für eine Trasse
zu bestätigen. Dies führt nicht direkt zu einer Änderung des Trassenvertrages.
I....MessageHeader 1 Für alle Nachrichten erforderlich Siehe Kap 5.2
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Siehe auch Kapitel 5.4 "Identifiers"Mögliche ID:
Nachricht bezieht und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt ReferenceTRID, RouteID, PathID, PathRequestID,
werden sollen. CaseReferenceID, TemporaryCapacityRestrictionID (TCID)
24
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 25

DB Intern / DB internal
Strukturelement Vorkommen Beschreibung Bemerkungen
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID des angenommenen Angebots Zusätzlich Angabe der ReferenceTRID und RouteID des
(Pflichtangabe) angenommenen Angebots möglich
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne Dient nur der Gruppierung der beiden nachfolgenden
eigenen Namen, die die beiden nachfolgenden Elemente enthält. Elemente.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer angenommener
Angebote.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements
RelatedPlannedTransportIdentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird. Wird im Rahmen dieser Schnittstelle nicht verwendet
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess)
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest
angegebene Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch Wird im Rahmen dieser Schnittstelle nicht verwendet
sein mit dem Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem
durchführenden EVU (ResponsibleRU); Angabe ist nur bei interoperablen Zügen
verpflichtend, wenn eines der beteiligten EVU die Harmonisierung und Koordination in
der Vorplanungsphase übernimmt.
I....AffectedSection 0..N Beschreibt den angenommenen Abschnitt eines übergebenen Trassenangebots und
dessen Verkehrszeitregelung
Tabelle 5: PathConfirmedMessage Beschreibung
4.2.5 ReceiptConfirmationMessage
Gemäß der TAF-TSI/TAP-TSI-Dokumentation erfolgt bei einem erfolgreichen Empfang einer Nachricht vom Empfänger eine Bestätigung mittels einer „ReceiptConfirmationMessage“ an den Absender der Nachricht. Alle gesendeten
Nachrichten seitens DB InfraGO sind nach erfolgreichem Eingang durch das empfangene EVU mit einer „ReceiptConfirmationMessage“ zu bestätigen. Umgekehrt bestätigt DB InfraGO ebenfalls immer den erfolgreichen Empfang einer
Nachricht gegenüber dem absendenden EVU.
DB InfraGO sendet eine „ReceiptConfirmationMessage“ immer nach dem erfolgreichen Empfang folgender Nachrichten.
Die „ReceiptConfirmationMessage“ bezieht sich immer vollständig auf die zuvor empfangene Nachricht (also beispielweise zu einer „PathDetailsMessage“ eines GPE oder FPE).
25
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 26

DB Intern / DB internal
Abbildung 7: ReceiptConfirmationMessage Struktur
Strukturelement Vorkommen Beschreibung Bemerkungen / Regeln
ReceiptConfirmationMessage 1 Die Nachricht wird nach erfolgreichem Empfang einer Nachricht vom Die Nachricht ist auch dann zu senden, wenn die Nachrichtenabfolge
Empfänger an den Absender der Nachricht gesendet. eine qualifizierte Antwort des Empfängers auf die empfangene
Nachricht vorsieht.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....Identifiers 0..1 Eindeutige Identifizierung der empfangenen Nachricht. Alle Identifier aus der empfangenen Nachricht werden unverändert
übernommen
I....I....PlannedTransportIdentifiers 1..N Identifier des GPE / GPE nach Stellungnahme / FPE bzw. der SN Übernahme der PlannedTransportIdentifiers aus der empfangenen
Nachricht
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd Dient nur der Gruppierung der beiden nachfolgenden Elemente.
ohne eigenen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase
I....I....I….ReasonOfReference 0..1
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert Wird im Rahmen dieser Schnittstelle nicht verwendet.
wird.
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) Der Wert in der vorab vom EVU bzw. EIU gesendeten Nachricht wird
unverändert übernommen (sofern angegeben)
I....TypeOfInformation 0..1 Typ der Information Der Wert in der vorab vom EVU bzw. EIU gesendeten Nachricht wird
unverändert übernommen (sofern angegeben)
I....AffectedSection 0..1 Wird im Rahmen dieser Schnittstelle nicht verwendet.
26
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 27

DB Intern / DB internal
I....I....StartOfSection 1 Oberstruktur AffectedSection wird im Rahmen dieser Schnittstelle nicht
verwendet.
I....I....I....CountryCodeISO 1
I....I....I....LocationPrimaryCode 1
I....I....I....PrimaryLocationName 0..1
I....I....I....LocationSubsidiaryIdentification 0..1
I....I....I....BookedLocationDateTime 0..1
I....I....I....BookedLocationTime 0..1
I....I....EndOfSection 1
I....I....I....CountryCodeISO 1
I....I....I....LocationPrimaryCode 1
I....I....I....PrimaryLocationName 0..1
I....I....I....LocationSubsidiaryIdentification 0..1
I....I....I....BookedLocationDateTime 0..1
I....I....I....BookedLocationTime 0..1
I....I....OperationalTrainNumber 0..1
I....I....PlannedCalendar 1
I....I....NetworkSpecificParameter 0.N
I....I....I....Name 1
I....I....I....Value 1
I....RelatedReference 1 Identifikation der Nachricht, auf welche sich diese quittierende Nachricht
bezieht.
I....I....RelatedType 1 MessageType der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme des MessageType aus der vorab vom EVU
oder EIU gesendeten Nachricht
I....I.... RelatedIdentifier 1 MessageIdentifier der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme des MessageIdentifiers der vorab vom EVU
oder EIU gesendeten Nachricht
I....I.... RelatedMessageDateTime 1 MessageDateTime der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme der MessageDateTime aus der vorab vom
EVU oder EIU gesendeten Nachricht
I....I.... RelatedSenderReference 0..1 Referenzdaten des absendenden Systems In dem Feld kann das originäre System des Absenders, welches
Muss im Rahmen dieser Schnittstelle nicht verwendet werden. Auslöser der Nachricht ist, angegeben werden, z. B. dann, wenn ein
weiteres System als Zwischensystem verwendet wurde.
Tabelle 6: ReceiptConfirmationMessage Struktur Beschreibung
4.2.6 PathDetailsRefusedMessage
Strukturelement Vorkommen Beschreibung Bemerkungen
PathDetailsRefusedMessage 1 Die Nachricht wird vom EVU gesendet, um das EIU zu informieren, dass
das GPE bzw. GPE nach Stellungnahme abgelehnt und damit die Trasse
(im FPE) ausfallen soll.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich Siehe Kapitel "Identifiers"
die Nachricht bezieht und ggf. auf Nachrichten, die bei der Bearbeitung Mögliche ID: ReferenceTRID, RouteID, PathID, PathRequestID,
berücksichtigt werden sollen CaseReferenceID
27
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 28

DB Intern / DB internal
Strukturelement Vorkommen Beschreibung Bemerkungen
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID des abgelehnten Zusätzlich Angabe der ReferenceTRID, RouteID und PathRequestID
Angebots (Pflichtangabe) des ablehnten Angebots möglich
I....I....komplexe Struktur ohne 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd Dient nur der Gruppierung der beiden nachfolgenden Elemente.
Bezeichnung ohne eigenen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....RelatedPlannedTransportIdentifie 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer abgelehnter Angebote.
rs
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements Siehe Anlage 1 "Codelisten"
RelatedPlannedTransportIdentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID Wird im Rahmen dieser Schnittstelle nicht verwendet.
identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe"Attribute auf Messageebene"
2. Ausprägungen: 1=creation; 2 = modification; 3 = deletion
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Planungsphase
2. Siehe Kapitel "Attribute auf Messageebene"
3. Ausprägungen: 1=Study, 2=Request, 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit Siehe Anlage 1"Codelisten"
TypeOfRequest angegebene Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information 1. Kennzeichnet eine besondere Ausprägung der Nachricht für den
jeweiligen Status innerhalb des Basisprozesses
2. Indikation, zu welchem Prozessschritt in der Planungsphase die
Nachricht gehört
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss Wird im Rahmen dieser Schnittstelle nicht verwendet
nicht identisch sein mit dem Besteller/Vertragspartner
(ResponsibleApplicant) oder mit dem durchführenden EVU
(ResponsibleRU); Angabe ist nur bei interoperablen Zügen verpflichtend,
wenn eines der beteiligten EVU die Harmonisierung und Koordination in
der Vorplanungsphase übernimmt.
I....RevisedRequest 0..1 Hinweis für das EIU, dass das EVU beabsichtigt, einen überarbeiteten Dieses Attribut ist nicht zu verwenden; bei fachlichem
Request bzw. eine Alternative zu senden Änderungsbedarf kann das EVU das übergebene Angebot ablehnen
und eine Neubestellung auslösen oder das übergebene Angebot
annehmen und eine Änderung nach Vertragsschluss senden.
I....AffectedSection 0..N Beschreibt den abgelehnten Trassenabschnitt eines übergebenen GPE Die Verwendung der NSP Struktur innerhalb der AffectedSection ist
bzw. GPE nach Stellungnahme. zu beachten.
I....FreeTextField 0..6 Frei definierbarer Text Keine Verwendung im Rahmen des ujBau-Prozesses
Tabelle 7PathDetailsRefusedMessage
4.2.7 ErrorMessage
Die Nachricht wird vom Empfänger einer Nachricht an den Absender der Nachricht übermittelt, wenn eine vorab empfangene Nachricht vom Empfänger nicht verarbeitet werden kann. Hierbei kann es sich um erkannte Fehler bei der
automatischen fachlichen / technischen Eingangsprüfung oder um technische Probleme handeln.
Kommunikation von DB InfraGO an EVU:
Falls DB InfraGO eine PathRequestMessage einer SN technisch nicht verarbeiten kann, so wird eine ErrorMessage zurückgesendet.
Kommunikation von EVU an DB InfraGO:
Durch das Senden einer ErrorMessage wird der Gesamtprozess nicht abgebrochen, stattdessen wird das GPE bzw GPE nach Stellungnahme oder FPE zu einem späteren Zeitpunkt erneut an das EVU gesendet. Falls also das EVU eine
PathDetailsMessage / PathNotAvailableMessage eines GPE / FPE nicht verarbeiten kann, so ist eine ErrorMessage zurückzusenden.
28
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 29

DB Intern / DB internal
Abbildung 8: ErrorMessage Struktur
Strukturelement Vorkommen Beschreibung Bemerkungen / Regeln
ErrorMessage 1 Wird von DB InfraGO übermittelt, wenn eine vorab vom EVU gesendete Nachricht bei DB InfraGO Die Nachricht enthält detaillierte Informationen zum
nicht verarbeitet werden kann (analog in umgekehrter Richtung). Fehler und Hinweise über eine erforderliche Korrektur.
Hierbei kann es sich um erkannte Fehler bei der automatischen fachlichen und technischen
Eingangsprüfung oder um technische Probleme handeln.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Sender bereit gestellt Ausprägungen: 1 = creation
I....AdministrativeContactInformation 1 Kontaktinformationen des Senders (hier DB InfraGO bzw. EVU)
I....ErrorCauseReference 0..1 Referenziert die vorab empfangenen Nachricht, die den Fehler verursacht hat
I....I....MessageReference 1 Identifiziert die vorab empfangenen Nachricht Unveränderte Übernahme der Struktur
„MessageReference“ des „MessageHeader“ aus der vorab
von DB InfraGO / EVU gesendeten Nachricht
I....I....MessageSenderReference 0..1 Referenzdaten des absendenden Systems zu der zuvor empfangenen Nachricht In dem Feld kann das originäre System des Absenders,
welches Auslöser der Nachricht ist, angegeben werden, z.
B. dann, wenn ein weiteres System als Zwischensystem
verwendet wurde.
|….Error 1..N Auflistung von erkannten Fehlern
I....I....TagReference 0..1 Name desjenigen Elements der Original-Nachricht, welches den Fehler verursacht hat.
I....I….TypeOfError 1 Typ des Fehlers 1= FUNCTIONAL
2 = TECHNICAL
0 = BOTH
I....I….Severity 1 Schweregrad des Fehlers 1 = WARNING
2 = ERROR
DB InfraGO verwendet vorerst nur den Schweregrad 2.
I....I….ErrorCode 1 Fehler-Code 1. Zwischen 5000 und 6000 = Standard-Werte, zentral
verwaltet
2. Größer als 6000 = national vereinbart (Anlage 9)
I....I….FreeTextField 1 Frei definierbarer Text Das Freitextfeld darf nur Angaben enthalten, die nicht in
einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können.
29
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 30

DB Intern / DB internal
I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Unveränderte Übernahme der Identifier aus der vorab
von DB InfraGO / EVU gesendeten Nachricht
I....TransportOperationalIdentifiers 0..N Identifiers des EIU in der operativen Phase
Wird im Rahmen dieser Schnittstelle nicht verwendet.
Tabelle 8: ErrorMessage Struktur Beschreibung
30
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 31

DB Intern / DB internal
5. Datenfeldbeschreibungen
 In diesem Kapitel werden einzelne Datenfelder der Haupt- und Unterstrukturen der genutzten Nachrichten detailliert beschrieben.
 Da die TAF/TAP-TSI-Strukturen verschachtelt sind und teilweise Wiederholungen aufweisen, werden die Haupt- und Unterstrukturen und deren Datenfelder in getrennten Kapiteln behandelt.
 Gegenüber dem Standard unverändert genutzte Haupt- und Unterstrukturen werden nicht erneut erwähnt. Informationen zu diesen sind der Anlage 1 zu entnehmen.
 Um die Unterstrukturen den jeweiligen Nachrichtentypen zuordnen zu können, sind im Kapitel 4.3 „Hauptstrukturen der Nachrichten“ diese Unterstrukturen in der Darstellung der Hauptstruktur der Nachricht integriert.
 In diesem Kapitel werden folgende Strukturen inklusive der wiederum darin enthaltenen Unterstrukturen samt Datenfelder erläutert:
o MessageHeader
o AdministrativeContactInformation
o Identifiers
o Attribute auf Messageebene
o PathInformation
o PlannedJourneyLocation
o NetworkSpecificParameter
o Codelisten
5.1 Spalten der Datenfelder-Tabellen
Spalte Bedeutung
Struktur Struktur der Information ab oberster Ebene der Struktur inklusive aller Unterstrukturen. Die senkrechten Striche symbolisieren dabei die Anordnung jeweils eine Ebene tiefer. Striche auf gleicher Höhe
bedeuten die Zuordnung der Unterstruktur/des Attributs zur gleichen Ebene
Strukturelement Strukturelement, zu dem die als Attribut deklarierte Information gehört
Attribut Attribut
Beschreibung Beschreibung des Attributs
Bemerkungen / Regeln Bemerkungen und Regeln der DB InfraGO für das Attribut
Vorkommen Vorkommen des Attributs bzw. einer Unterstruktur in der (übergeordneten) Struktur, i. d. R. gemäß XSD der TAF-TSI/TAP-TSI (außer Strukturen „NetworkSpecificParameter“); davon für DB InfraGO
definierte Abweichungen sind in der Spalte „Bemerkungen/Regeln“ aufgeführt.
 0..1 = Kannfeld
 1 = Mussfeld
 0..N = Wiederholstruktur (optional)
 1..N = Wiederholstruktur (mindestens eine Ausprägung der Struktur)
 <zahl>. N = Wiederholstruktur (optional), mindestens durch <zahl> angegebene Anzahl von Ausprägungen; <zahl> stellt dabei den Index (lfd. Nr.) der Ausprägung dar
Typ Datentyp des Attributs
Länge Länge des Attributs
MinWert Minimalwert des Attributs
MaxWert Maximalwert des Attributs
31
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 32

DB Intern / DB internal
Ausprägung Die für das betreffende Attribut gültigen Ausprägungen (verschiedene Darstellungen)
 Als Werteauflistung
 Als Verweis auf das Kapitel 3.16.1 Codeliste der Anlage 1
 Als Verweis auf die Stammdaten, siehe Anlage 1
Muster Muster (Pattern) zur Bildung des Attributwerts bzw. Beispiel
Tabelle 9: Spalten Datenfeldertabellen
Die Codierung der letzten fünf genannten Spalten („EVU -> EIU“, „EIU -> EVU“, „Path in PR“ , „Path in PD“ und „Relevant“) haben folgende Werte und Bedeutung:
M Das Attribut muss vorhanden sein und einen gültigen Wert haben
M (Gn) Hier wird eine Gruppe von Attributen zusammengefasst, von denen genau eine angegeben werden muss.
Die Notation „Gn“ bedeutet: „G“ steht für „Gruppe“, „n“ ist eine laufende Nummer ab 1 und gruppiert die zusammengehörenden Attribute, aus denen der sendende Partner genau einen angeben muss (z.B.: G1).
Gibt es mehrere Gruppen, haben diese dann die Qualifizierung G2, G3, usw.
bM Hiermit wird ein Attribut ausgewiesen, das bedingt angegeben werden muss (Abhängigkeit von anderen Attributen).
Die Bedingungen sind in den Bemerkungen / Regeln hinterlegt.
K Das Attribut kann bei Bedarf genutzt werden
n/a Das Attribut ist in der Kommunikation über die EVU-Schnittstelle der KOMBau der DB InfraGO nicht anwendbar bzw. wird nicht genutzt. Sofern es trotzdem über die EVU-Schnittstelle an DB InfraGO übergeben wird,
wird es in den verarbeitenden Systemen ignoriert.
Ja Das Attribut oder der Wert oder die Kodierung kann/muss in der Kommunikation über die EVU-Schnittstelle des Bestellsystems der DB InfraGO je nach fachlichem Kontext angewendet oder genutzt werden.
Tabelle 10: Übersicht verwendete Codierungen in Tabelle 9: Spalten Datenfeldertabellen
Die Codierungen müssen additiv zur aufgeführten Kardinalität betrachtet werden. Insbesondere müssen Datenfelder mit einer Kardinalität von „1“ und einer Codierung „n/a“ befüllt werden, da ansonsten gegen die zugrundeliegende
TAF/TAP TSI xsd-Struktur verstoßen wird. In diesen Fällen ist in dieser Sst-Beschreibung aber explizit darauf hingewiesen, dass hier datenfeldkonforme Dummy-Werte eingetragen werden können, die in der Bearbeitung ignoriert werden.
5.2 Struktur „MessageHeader“
5.2.1 Übersicht über die Struktur „MessageHeader“
Diese Struktur identifiziert die Nachricht und ist für jede Nachricht (Message) erforderlich.
32
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 33

DB Intern / DB internal
Abbildung 9: MessageHeader Struktur
5.2.2 Datenfelder der Struktur „MessageHeader“
Struktur Struktur-element Attribut Beschreibung Bemerkungen / Regeln Vorkom Typ Länge Min- Max- Muster
men Wert Wert
I....MessageHeader MessageHeader Für alle Nachrichten erforderlich 1
I....I....MessageReference MessageHeader MessageReference Identifiziert die Nachricht 1
I....I....I....MessageType MessageReference MessageType Typnummer der übermittelten Nachricht Ausprägungen analog Anlage 1 1 string 1-4
I....I....I....MessageTypeVersion MessageReference MessageTypeVersion Version des Nachrichtentyps Entspricht der aktuell von DB InfraGO unterstützten Version 1 string 25
nach Anlage 3. Kann der Empfänger die angegebene Version
nicht verarbeiten, erfolgt eine Zurückweisung
(ErrorMessage).
I....I....I....MessageIdentifier MessageReference MessageIdentifier Durch das sendende System zu generierende 1. Wird vom absendenden System festgelegt 1 string 255 [a-fA-F0-9-
eindeutige ID der Nachricht
2. Bei Nutzung eines Common Interface (CI) wird diese
]{1,255}
Information vom CI generiert. Die DB InfraGO nutzt eine
Schnittstelle, die der Spezifikation des CI entspricht.
I....I....I....MessageDateTime MessageReference MessageDateTime Durch das sendende System zu generierender 1. Wird von Absender festgelegt 1 dateTime
Zeitstempel in lokaler Zeit
2. Es belegt den Zeitpunkt, an dem die Nachricht verschickt
wurde
3. Bei Nutzung des Common Interface (CI) wird diese
Information vom CI generiert
4. Die DB InfraGO nutzt eine Schnittstelle, die der
Spezifikation des CI entspricht
I....I....MessageRoutingID MessageHeader MessageRoutingID Ergänzende Information für die korrekte Jede von der DB InfraGO gesendete Nachricht im ujBau- 0..1 integer 2 01 99
Weiterleitung der Nachricht an das Zielsystem Prozess enthält eine eindeutige ID: 45. Der Empfänger der
Nachricht sendet in seinen Antworten (RCM und fachliche
Antwort) die Information unverändert zurück.
I....I....SenderReference MessageHeader SenderReference Durch den Absender genutzte Referenz auf ein z. B. Dateiname oder Nachrichtenbezeichnung aus dem IT- 0..1 string 255
internes System System des Absenders
I....I....Sender MessageHeader Sender Die CompanyCode des Absenders der Zum Beispiel wird in der PathDetailsMessage der 1 string 4 0001 ZZZZ [0-9A-Z]{4}
Nachricht. CompanyCode des Bestellers der ursprünglichen Trasse
(ResponsibleApplicant) angegeben.
Siehe Kapitel Kapitel 3.16.1 der Anlage 1
33
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 34

DB Intern / DB internal
I....I....I....CI_InstanceNumber Sender CI_InstanceNumber Nummer der Common Interface Instanz des 1. Defaultwert ist "1" (auch bei Nichtnutzung des CI) 1 integer 2 1 99
Absenders
2. Bei Nutzung des CI, gelten die Regeln analog zum
Bestellsystem, siehe Anlage 2
I....I....MessageDateTimeCreated MessageHeader MessageDateTimeCreated Datum und Uhrzeit der Erstellung der Nachricht 0..1 dateTime
im originären System des Absenders (Erstellers)
der Nachricht
I....I....Recipient MessageHeader Recipient Die CompanyCode des Empfängers der Siehe Kapitel 3.16.1 der Anlage 1 1 string 4 0001 ZZZZ [0-9A-Z]{4}
Nachricht.
I....I....I....CI_InstanceNumber Recipient CI_InstanceNumber Nummer der Common Interface Instanz des 1. Defaultwert ist "1" (auch bei Nichtnutzung des CI) 1 integer 2 1 99
Empfängers
2. Bei Nutzung des CI, gelten die Regeln analog zum
Bestellsystem, siehe Anlage 2
Tabelle 11: MessageHeader Datenfelder
5.3 Struktur „AdministrativeContactInformation“
5.3.1 Übersicht über die Struktur „AdministrativeContactInformation“
Diese Struktur beinhaltet Kontaktinformationen des jeweiligen Absenders. Es muss analog der Anlage 1 verwendet werden.
5.4 Struktur „Identifiers“
5.4.1 Übersicht über die Struktur „Identifiers“
Diese Struktur enthält eindeutige Identifizierungen von Objekten,
 die in der Nachricht selbst,
 die in der Nachricht, auf die sich die Nachricht bezieht oder
 die in Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen, enthalten sind.
Abbildung 10: Identifiers Struktur
Die bekannten Identifier aus der Anlage 1 werden um folgende Informationen ergänzt:
34
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 35

DB Intern / DB internal
 PathID: Die PathID wird vom EIU verwendet um das GPE / GE nach Stellngnahme bzw. FPE eindeutig zu kennzeichnen. Außerdem wird die ursprüngliche Trasse über deren PathID referenziert.
 PathRequestID: Wird im Rahmen dieser Schnittstelle für die eindeutige Kennzeichnung einer SN auf ein GPE verwendet.
 TemporaryCapacityID: Die TemporaryCapacityRestrictionID (TCID) wird vom EIU verwendet um die relevanten BKEen (Baubedingten Kapazitätseinschränkungen, welche Auswirkung auf die Trasse haben) zu referenzieren. Es wird
nur der Identifier verwendet, es gibt kein dazugehöriges Objekt.
Die Eindeutigkeit des Identifiers ergibt sich aus der Nutzung und Befüllung der Attribute <ObjectType>, <Company>, <Core>, <Variant>, <TimetableYear>. Die Attribute sind wie folgt definiert:
 <ObjectType> enthält den jeweiligen Objekttyp
 <Company> ist mit dem CompanyCode des Bestellers einer Trasse zu füllen.
 <Core> bildet das Kernelement ab und ist vom Absender frei gestaltbar.
 <Variant> bildet eine Variante zum Kernelement ab. Der Wert „00“ ist exklusiv für die Bildung von Gruppierungen angedacht, welche im Rahmen dieser Schnittstelle jedoch nicht verwendet werden.
 <TimetableYear> enthält das jeweilige Fahrplanjahr, dem das Objekt zugeordnet ist. Somit kann der gleiche Identifier für Folgejahre mit geändertem <TimetableYear> wiederverwendet werden.
 <StartDate> wird im Rahmen dieser Schnittstelle nicht verwendet, da es nur im Betrieb (bei der produktiven Durchführung einer Zugfahrt) genutzt werden soll. GPE / FPE, SN / RM, ursprünglich bestellte Trasse und auch BKE bilden
jedoch allesamt Planungsobjekte ab.
PlannedTransportIdentifiers
 In der Wiederholstruktur „PlannedTransportIdentifiers“ darf es die ObjectType TR, RO, PA, PR nur jeweils einmal geben.
 Der ObjectType CR kann mehrmals angegeben werden.
RelatedPlannedTransportIdentifiers und ReasonOfReference
In der Wiederholstruktur „RelatedPlannedTransportIdentifiers“ werden andere Objekte (Züge (Fahrlagen), Trassen oder Nachrichten) referenziert, die in Beziehung zum Zug in der Nachricht oder zur Nachricht selbst stehen. Es
können mehrere Beziehungen definiert werden (z.B. CaseReferenceID’s mehrerer CaseReference Objekte, welche durch eine Trassenbestellung referenziert werden). Eine Begründung für die Angabe eines
RelatedPlannedTransportIdentifiers kann durch Angabe eines Codes für das Element ReasonOfReference erfolgen. Sofern sich die Nutzung des Elements RelatedPlannedTransportIdentifiers nicht aus dem Kontext der
Messageabfolge oder dem Nachrichtentyp ergibt oder bei der Angabe mehrerer RelatedPlannedTransportIdentifiers ist die Angabe einer Begründung unbedingt erforderlich.
5.4.2 Identifier eines GPE / FPE
In folgender Tabelle ist der Aufbau der ID des GPE, GPE nach Stellungnahme bzw. FPE definiert. Diese ist immer in Element PlannedTransportIdentifiers für einer PDM enthalten.
Attribut ObjectType Company Core Variant TimetableYear StartDate
Wert Immer Wert CompanyCode der Kernelement, welches ein Der Wert folgt der Logik aus Anlage Fahrplanjahr Wird im
„PA“ für Path DB InfraGO AG GPE / FPE eindeutig 1. Es wird der nächste, freie Wert des GPE / FPE, Rahmen dieser
(„0080“) innerhalb eines der Bestandstrasse verwendet. Für Zum Beispiel Schnittstelle
Fahrplanjahres GPE, GPE nach Stellungnahme und Wert „2025“ nicht
identifiziert. Der Core FPE wird der gleiche Wert verwendet.
eines FPE bzw. des verwendet, sofern keine Aufsplittung
zugrundeliegenden GPE erforderlich ist.
unterscheiden sich nicht
Tabelle 12: Identifier des GPE / FPE
5.4.3 Identifier einer SN zu einem GPE
In folgender Tabelle ist der Aufbau der ID einer SN definiert. Diese ist immer im Element PlannedTransportIdentifiers für eine PRM enthalten.
Attribut ObjectType Company Core Variant TimetableYear StartDate
Wert Immer Wert CompanyCode des Kernelement, welches Wert „01“ für die erste SN auf ein Fahrplanjahr Wird im
„PR“ für Absenders der SN eine SN eindeutig GPE. Falls zu einem späteren des GPE auf die Rahmen dieser
PathRequest innerhalb eines Zeitpunkt mehrere SN eines EVU auf sich die SN Schnittstelle
Fahrplanjahres eine GPE möglich sein sollten, ist bezieht, Zum nicht
identifiziert. diese Nummer in Variant Beispiel Wert verwendet.
hochzuzählen. Der Wert „00“ wird „2025“
im Allgemeinen für Gruppierungen
35
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 36

DB Intern / DB internal
genutzt und daher hier nicht
verwendet.
Tabelle 13: Identifier einer SN
5.4.4 Identifier der BKEen
In folgender Tabelle ist der Aufbau der Identifier der BKEen definiert. Diese sind immer in Element RelatedPlannedTransportIdentifiers enthalten, es können auch mehrere BKEen enthalten sein.
Attribut ObjectType Company Core Variant TimetableYear StartDate
Wert Immer Wert „TC“ für Immer gefüllt mit Kernelement, welches die Immer gefüllt mit „01“. Der Wert Fahrplanjahr Wird im
TemporaryCapacityRestriction dem CompanyCode BKE eindeutig innerhalb „00“ wird im Allgemeinen für der BKE, Zum Rahmen dieser
der DB InfraGO: eines Fahrplanjahres und Gruppierungen genutzt und daher Beispiel Wert Schnittstelle
„0080“ Kommunikationszeitpunktes hier nicht verwendet. „2025“ nicht
identifiziert. Der verwendet.
Kommunikationszeitpunkt
wird über Variant
identifiziert.
Enthält die ID der BKE, wird
vorne mit „-“ aufgefüllt,
sodass der Core 12-stellig
ist.
Tabelle 14: Identifier der BKEen als TemporaryCapacityRestriction
5.4.5 Datenfelder der Struktur „Identifiers“
Die Datenfelder der Struktur „Identifiers“ erhalten in ihrer Verwendung keine Veränderung zum Standard aus Anlage 1
5.5 Oberstruktur TrainInformation
Diese Struktur wird verwendet, um den Gesamtzug nach TAF/TAP TSI darzustellen. Die Informationen innerhalb der TrainInformation werden innerhalb des ujBau Prozesses nicht verarbeitet. Aufgrund des TAF/TAP TSI-Standards muss die
Struktur jedoch befüllt werden. Hierzu können Dummy-Werte verwendet werden.
Strukturelement Vorkom Beschreibung
men
I....TrainInformation 1 Zuginformationen des EVU über den gesamten Zuglauf
I....I....PlannedJourneyLocation 2..N Zuglaufpunkte
I....I....PlannedCalendar 1 Verkehrstageregelung des Zuges, gültig für den gesamten Zuglauf
I....I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen soll; für diesenZuglaufpunkt ist die Angabe einer Fahrplanzeit im Element
TimingAtLocation innerhalb der PathInformation der PathRequestMessage verpflichtend, sofern der Laufwegspunkt innerhalb des Konstruktionsbereichs der DB InfraGO AG
liegt (siehe Anlage 1).
5.6 Oberstruktur PathInformation
5.6.1 Übersicht über die Oberstruktur „PathInformation“
Diese Struktur enthält in der Nachricht „PathDetailsMessage“: Das vom EIU bereitgestellte GPE bzw. FPE. Die Struktur enthält genaue Informationen zur Zugtrasse und deren Laufpunkten.
Diese Struktur enthält in der Nachricht „PathRequestMessage“: Die vom EVU bereitgestellte SN auf ein GPE. Die Struktur enthält genaue Informationen zu den Anpassungswünschen aus dem zuvor erhaltenen GPE. Das EVU muss hier eine
Fahrlage analog zum TAF/TAP-TSI Standard senden. Die von Seiten der DB InfraGO AG zwingend erforderlichen Inhalte sind gegenüber den notwendigen Angaben für vollwertige Trassenbestellungen (s. Anlage 1) stellenweise reduziert.
Die Fahrlage muss beizubehaltende Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der Stellungnahme analog einer Änderungsbestellung beinhalten, ansonsten wird von einer nicht mehr vorliegenden Notwendigkeit dieser
Zwangspunkte ausgegangen. Zusätzliche Zwangspunkte beispielsweise zur Abbildung weiterer Verkehrshalte oder gewünschter abweichender Laufwege können bei Notwendigkeit ergänzt werden. Laufwegspunkte vom Typ Durchfahrt
dürfen nur angegeben werden, wenn sie auf einem gegenüber dem GPE abweichenden Laufweg laufwegsbestimmend sind, oder eine andere Regelung dies erfordert.
36
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 37

DB Intern / DB internal
Die in der Struktur „PlannedCalendar“ und in den Fahrzeiten an den Zugtrassenlaufpunkten angegebenen Verkehrstage und Fahrzeiten gelten genau für diesen räumlichen Bereich.
Abbildung 11: PathInformation Oberstruktur
5.6.2 Strukturen der Oberstruktur „PathInformation“
Strukturelement Vorkommen Beschreibung
I....PathInformation 1 Das vom EIU bereitgestellte GPE bzw. FPE. Die Struktur enthält genaue Informationen zur Zugtrasse und deren Laufpunkten; gültig für den Laufweg im Zuständigkeitsbereich des EIU.
Bei Anmerkungen zum GPE kann das EVU diese mittels einer angepassten PathInformation übermitteln.
I....I....PlannedJourneyLocation 2..N Trassenlaufpunkte in der PathDetailsMessage Zuglaufpunkt in der PathRequestMessage)
I....I....PlannedCalendar 1 Verkehrstageregelung der Zugtrasse; gültig für den Laufweg im fahrplanerischen Zuständigkeitsbereich eines EIU (siehe Kapitel 5.8). Ggf. angegebene Tageswechsel (Attribut OffsetToReference) sind bei der Ermittlung der konkreten
Verkehrstage am Trassenlaufpunkt zu beachten.
I....I....RequestedCalendar 0..1 Wird im Rahmen dieser Schnittstelle nicht verwendet.
Tabelle 15:PathInformation Oberstruktur Beschreibung
5.7 Struktur „PlannedJourneyLocation“
Die Struktur „PlannedJourneyLocation“ (Zugtrassenlaufpunkte) enthält weitere, z. T. wiederholbare Unterstrukturen. Diese beinhalten eine umfassende Darstellung des Verlaufs der Trasse eines GPE / GPE nach Stellungnahme bzw. FPE.
Für die Stellungnahme (SN) kann das EVU seine Anmerkungen in Form der „PlannedJourneyLocation“ vornehmen.
Im Nachrichtentyp „PathDetailsMessage“ ist die Struktur „PlannedJourneyLocation“ nur in der Oberstruktur „PathInformation“ vertreten. Diese Oberstruktur beschreibt den Verlauf der Trasse mit allen erforderlichen Angaben zu den
Betriebsstellen, Halten, Betriebshalten und Zugbehandlungen sowie den konstruktiven Fahrplanzeiten und enthalten Informationen zur Nutzung der Zugtrasse für eine Zugfahrt, resultierend aus den technischen Angaben zum Zug
(Zugcharakteristik) und den sich aus der Infrastruktur ableitenden Angaben der Trassencharakteristik, die in der Zugtrassencharakteristik zusammengefasst werden. Alle in der Zugtrasse aufgeführten Betriebsstellen sind
Zugtrassenlaufpunkte (TLP).
Die Struktur „PlannedJourneyLocation“ ist in dem Nachrichtentyp PathRequestMessage sowohl in der Oberstruktur „TrainInformation“, zur Beschreibung der Route, als auch in der Oberstruktur „PathInformation“ enthalten.
.
Die mit der Struktur „PlannedJourneyLocation“ dargestellten Zuglauf- bzw. Trassenlaufpunkte müssen in der PathInformation in räumlich logischer Reihenfolge angegeben werden.
5.7.1 Übersicht über die Struktur „PlannedJourneyLocation“ und deren Unterstrukturen
Nachfolgend wird die Struktur “PlannedJourneyLocation“ als Übersicht dargestellt.
37
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 38

DB Intern / DB internal
Abbildung 12: PlannedJourneyLocation Strukturübersicht
Im Nachfolgenden werden weitere Unterstrukturen der Struktur „PlannedJourneyLocation“ als Übersicht dargestellt.
5.7.1.1 PlannedTrainData
 Die Unterstruktur „PlannedTrainData“ wird nur in der Oberstruktur „PathInformation“ genutzt und ist optional.
 Die Struktur wird in der Struktur PathInformation am ersten TLP immer angegeben.
 Die Struktur muss im weiteren Zuglauf nur dann an einem TLP angegeben werden, wenn sich auch ein Attribut im Vergleich zu der an einem Vorgänger-TLP zuletzt hinterlegten „PlannedTrainData“-Struktur ändert.
 Hat ein TLP keine „PlannedTrainData“-Struktur, gilt automatisch diejenige, die am letzten Vorgänger-TLP mit hinterlegter Struktur „PlannedTrainData“ definiert ist.
 Die Struktur wird am letzten TLP der Struktur PathInformation nicht angegeben.
38
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 39

DB Intern / DB internal
5.7.1.2 NetworkSpecificParameter
Die Unterstruktur „NetworkSpecificParameter“ (NSP) wird für die Angabe EIU-spezifischer Attribute genutzt. Die NSP werden analog zum Standard verwendet. Es gelten die folgenden Ausnahmen:
 NetworkSpecificParameter auf Message-Ebene. Diese NSP gelten, sofern sie angegeben sind, immer für die gesamte Nachricht. Die Angabe in der Stellungnahme ist nicht erforderlich, da sich die Angaben gegenüber der
Bestandstrasse nicht verändern können.
 NetworkSpecificParameter auf Location-Ebene.
 Der NSP „marktprodukt“ wird im Rahmen dieses Prozesses nur mit der neuen Ausprägung „BAU“ verwendet.
5.7.1.3 LocationSubsidiaryIdentification
 In der Unterstruktur „LocationSubsidiaryIdentification“ können ergänzende Angaben zur Lokalität innerhalb des angegebenen Trassenlaufpunktes erfolgen.
 Mit der Angabe eines LocationSubsidiaryCodes in Verbindung dem LocationSubsidiaryTypeCode 41 wird für Betriebsstellen der DB InfraGO AG die bisherige Ril100-Abkürzung referenziert.
Abbildung 13: LocationSubsidiaryIdentification Unterstruktur
5.7.1.4 TypeOfService
 In der Unterstruktur „TypeOfService“ können ergänzende Angaben zu im Zug verfügbaren Services erfolgen.
 Die Struktur wird in der Planungsphase des Trassenbestell- und -zuweisungsprozesses durch DB InfraGO generell nicht genutzt und damit auch nicht in dieser Schnittstelle.
5.7.1.5 PlannedTrainTechnicalData
Die Unterstruktur „PlannedTrainTechnicalData“ enthält im Nachrichtentyp
 PathDetailsMessage, der für GPE/ GPE nach Stellungnahme und FPE genutzt wird, technische Angaben der Zugtrassencharakteristik, die sich aus den technischen Angaben des Zuges (Zugcharakteristik) und der Trasse
(Trassencharakteristik), ggf. abgeleitet aus Infrastrukturparametern, ergeben.
 PathRequestMessage: Angaben zur Beschreibung der technischen Parameter des Zuges (Zugcharakteristik).
39
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 40

DB Intern / DB internal
Abbildung 14: PlannedTrainTechnicalData Struktur
5.7.1.6 Weitere Unterstrukturen in der Struktur „PlannedTrainData“
Die weiteren Unterstrukturen „ExceptionalGaugingIdent“, „DangerousGoodsIndication“, „CombinedTrafficLoadProfile“, „StatusOfHarmonization“ werden analog zur Anlage 1 verwendet.
5.7.1.7 TrainActivity
Die Unterstruktur „TrainActivity“
 ist eine Wiederholstruktur auf Ebene „PlannedJourneyLocation“, im Rahmen dieser Schnittstelle wird sie in der Struktur „PathInformation“ genutzt.
 TrainActivity beinhaltet im Attribut <TrainActivityType> eine eindeutige Kodierung der Zugaktivität als Mussangabe sowie die Möglichkeit der Referenzierung auf einen anderen Zug durch Angabe der ReferenceTrainID, der OTN
oder verkehrlichen Liniennummer
40
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 41

DB Intern / DB internal
 wird genutzt, um auf Locationebene die gewünschte/erforderliche Haltart sowie gewünschte Haltegründe zu hinterlegen. Die gültigen Ausprägungen für das Attribut <TrainActivityType> (verschlüsselte Haltearten und
Haltegründe) sind in Anlage 1 zu finden. Zur Angabe der Haltearten und Haltegründe sind die Unterstruktur „AssociatedAttachedTrainID“ und das Attribut „AssociatedAttachedOTN“ nicht erforderlich.
 Kann genutzt werden, um Zugübergänge (vorheriger oder nachfolgender Zug, z. B: Tfz-Leerfahrt, oder Anschlussbeziehungen und Zugverknüpfungen, z. B. Zugzusammenführungen oder -trennungen bei „Y-Zugverbund“,
anzugeben.
Abbildung 15: TrainActivity Unterstruktur
5.7.2 Datenfelder der Struktur „PlannedJourneyLocation“ und deren Unterstrukturen
In diesem Kapitel werden alle Datenfelder der Struktur PlannedJourneyLocation inklusive aller Unterstrukturen im Detail beschrieben.
 In diesen Strukturen werden alle Trassenlaufpunkt abhängigen Daten angegeben.
 Die Struktur steht an jedem Trassenlaufpunkt in der Nachricht PathDetailsMessage (GPE/FPE) bzw. an jedem Zuglaufpunkt in der Nachricht PathRequestMessage (Stellungnahme GPE) zur Beschreibung des Trassenverlaufs
 Die Verwendung in der Stellungnahme kann auf ein Minimum reduziert werden.
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Ma Ausprägungen Must Train / Path
kom- Wert x- er Path in in PD
men We PR
rt
I....I....PlannedJourneyLocation PlannedJourneyLocation Zugtrassenlaufpunkte In der PDM (GPE/ GPE nach Stellungnahme oder FPE) beschreiben die Angaben einen 2..N M M
Zugtrasselaufpunkt. (TLP) In der PRM (Stellungnahme des EVU zum GPE) beschreiben
die Angaben einen Zuglaufpunkt (ZLP)
Betriebsstellen dürfen in der Stellungnahme auf ein GPE nur angegeben werden, wenn
sie die gewünschte Fahrlage beschreiben. Aus dem GPE erhaltene Durchfahrten sollen
nicht in der Stellungnahme erscheinen.
41
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 42

DB Intern / DB internal
I....I....I....JourneyLocationType PlannedJourneyLocation JourneyLocationTypeCode Typ des Zugtrassenlaufpunktes Der Wert 01 wird nur für den TLP verwendet, der die tatsächliche Start-Betriebsstelle 1..N token 01 = Origin (Start-Btrst)) bM bM
Code beschreibt. Der Wert 03 wird nur für den TLP verwendet, der die tatsächliche Ziel- 02 = Intermediate (Unterwegs-
Betriebsstelle beschreibt. Btrst)
Der Wert „08“ wird in der Kommunikation mit DB InfraGO nicht verwendet.
03 = Destination (Ziel-Btrst)
04 = Handover (Übergang der
fahrplanerischen Verantwortung
zwischen EIU)
05 = Interchange (Wechsel des die
Zugfahrt durchführenden EVU
(ResponsibleRU)
06 = Handover and Interchange
(Kombination der Ausprägungen
04 und 05)
07 = Stateborder (Staatsgrenze)
08 = None (keine Definition)
09 = Network border
(Infrastrukturgrenze/Netzgrenze)
99 = Mutually defined (mehrfache
Bedeutung/sonstige Betriebsstelle
Siehe auch Anlage 1, Codelisten
I....I....I....CountryCodeISO PlannedJourneyLocation CountryCodeISO CountryCode des Eindeutige EU-weite Identifikation einer Betriebsstelle in 1 string 2 Siehe Stammdaten (Anlage 1) M M
LocationPrimaryCode des TLP Verbindung mit dem <LocationPrimaryCode>
Deutschland = DE
I....I....I....LocationPrimaryCode PlannedJourneyLocation LocationPrimaryCode LocationPrimaryCode des TLP Eindeutige EU-weite Identifikation einer Betriebsstelle (PrimaryLocation) in Verbindung 1 Positive 5 1 999 Siehe Stammdaten (Anlage 1) M M
mit dem <CountryCodeISO>. integer 99
Wird von jedem Land selbständig vergeben.
Die LocationPrimaryCodes werden getrennt veröffentlicht.
Geplante Betriebsstellen, für die noch keine offizielle Codierung zugeordnet wurde,
haben immer die Codierung 99999
I....I....I....PrimaryLocationNam PlannedJourneyLocation PrimaryLocationName Name des TLP Muss bei in Planung befindlichen Betriebsstellen, für die noch kein PLC vergeben 0..1 string 255 bM bM
e wurde, immer gefüllt sein.
I....I....I....LocationSubsidiaryId PlannedJourneyLocation LocationSubsidiaryIdentifi Code, Name und Lokalisierung der Ergänzende Angabe zur als PrimaryLocation angegebenen 0..1 K K
entification cation ergänzenden Angaben zum TLP Betriebsstelle, wie Gleisbezeichnung/-nummer, besondere Eigenschaft der
(Subsidiary Location) Betriebsstelle, RiL100-Code der DB InfraGO
I....I....I....I....LocationSubsidiar LocationSubsidiaryIdentifi LocationSubsidiaryCode Code der ergänzenden Angaben In Verbindung mit TypeCode 41 kann hier der für die PrimaryLocation im Netz der DB 1 string 10 K K
yCode cation zum TLP als Teil der definierte RiL 100-Code (in CRD hinterlegt) angegeben werden.
PrimaryLocation
I....I....I....I....I....LocationSubsid LocationSubsidiaryCode LocationSubsidiaryTypeCo Code des Typs der ergänzenden In der XSD ist diese Information ein eigenständiges Attribut innerhalb des Elements 1 K K
iaryTypeCode de Angaben zum TLP SubsidiaryLocationCode
I....I....I....I....AllocationCompan LocationSubsidiaryIdentifi AllocationCompany CompanyCode des für die 1 string 4 0001 ZZZZ [0-9A-Z]{4} K K
y cation SubsidiaryLocation
verantwortlichen EIU
I....I....I....I....LocationSubsidiar LocationSubsidiaryIdentifi LocationSubsidiaryName Bezeichnung der durch die In Verbindung mit TypeCode 41 kann hier optional der Name des für das Netz der DB 0..1 string 255 K K
yName cation ergänzenden Angaben zum TLP definierten RiL 100-Codes (in CRD hinterlegt) der PrimaryLocation angegeben werden.
beschriebenen Örtlichkeit
I....I....I....TimingAtLocation PlannedJourneyLocation TimingAtLocation Abfahrts- und Ankunftszeiten am 0..1
TLP
I....I....I....I....Timing TimingAtLocation Timing Abfahrts- und Ankunftszeiten 0..N
I....I....I....I....I....TimingQualifie Timing TimingQualifierCode Kodierung der Art der 1. In der XSD ist diese Information ein Attribut 1 token bM bM
rCode angegebenen Abfahrts- bzw. 2. Es muss an mindestens einem ZLP in den Strukturen Trai-nInformation und
Ankunftszeit. PathInformation der PathRequestMessage eine Fahrplanzeit angegeben werden.
3. In TrainInformation und PathInformation der PathRequestMessage sind gültig:
ELA = früheste Ankunftszeit
LLA = späteste Ankunftszeit
ALA = genaue Ankunftszeit
ELD = früheste Abfahrtszeit
LLD = späteste Abfahrtszeit
ALD = genaue Abfahrtszeit
ERT = früheste Durchfahrt (keine Verwendung bei DB InfraGO)
LRT = späteste Durchfahrt (keine Verwendung bei DB InfraGO))
ART = genaue Durchfahrt (keine Verwendung bei DB InfraGO)
Bei Halten darf entweder ein Wert für die gewünschte exakte Ankunft und/oder
Abfahrt angegeben werden oder es dürfen Kombinationen aus den gewünschten
frühesten oder spätesten An- oder Abfahrtszeiten gebildet werden. Bei einer
gewünschten Durchfahrt sind identische Werte für die früheste Ankunftszeit (ELA) und
42
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 43

DB Intern / DB internal
die früheste Abfahrtszeit (ELD) oder für die späteste Ankunftszeit (LLA) und späteste
Abfahrtszeit (LLD) oder für die genaue Ankunftszeit (ALA) und die genaue Abfahrtszeit
(ALD) und immer in Verbindung mit dem TrainActivityTypeCode 0040 anzugeben.
4. In der PathInformation der PathDetailsMessage sind nur gültig:
ALA = Ankunftszeit
ALD = Abfahrtszeit
1.
I....I....I....I....I....Time Timing Time Zeitangabe für die in 1. Angabe im Format hh:mm:ss mit den Ausprägungen 00:00:00 bis 23:59:54. 1 time M M
TimingQualifierCode definierte Art
2. Die Sekunden sind immer in 6-Sekunden-Schritten anzugeben
3. Bei einer Ankunftszeit am letzten Zug- bzw. Trassenlaufpunkt entspricht die Angabe
00:00:00 der fachlich identischen Darstellung 24:00:00 am Vortag. Die Zeitangabe
00:00:00 stellt einen Zeitpunkt des Folgetags dar, was zu einem Offset = 1 führt. In
bestimmten Darstellungen (z. B: Bfpl) wird dies in diesem Fall nicht als Tageswechsel
gewertet.
4. Ankunftszeit im TLP:
Wird mit der konstruierten Ankunftszeit gefüllt. Wurde am ersten TLP keine Ankunftszeit
bestellt, so wird diese auch nicht zum TLP geliefert.
Bei Durchfahrten (HALT_ART = D, in Attribut <TrainActivity>) ist die Ankunftszeit
identisch mit der angegebenen Abfahrtszeit.
5. Abfahrtszeit im TLP:
Wird mit der konstruierten Abfahrtszeit gefüllt. Wurde am letzten TLP keine Abfahrtszeit
bestellt, so wird diese auch nicht zum TLP geliefert.
Bei Durchfahrten ist die Abfahrtszeit mit der Durchfahrtszeit belegt und identisch mit
der angegebenen Ankunftszeit.
Bei Durchfahrpunkten, denen kein Fahrtzeitmesspunkt zugeordnet ist, wird die
Abfahrtszeit des Vorgänger-TLP als Ankunfts- und Abfahrtszeit mit identischem Wert
angegeben.
I....I....I....I....I....Offset Timing Offset Tageswechsel / Nachtsprung 1. Angabe in Tagen innerhalb eines Trassenverlaufs (Struktur 1 Positive M M
„PlannedJourneyLocation“ innerhalb der PathInformation) integer
2. Wenn kein Tageswechsel dann Wert = "0"
3. Bei TLP im Konstruktionsbereich der DB InfraGO in der
Oberstruktur „PathInformation“ sind nur die Werte "0" und "1" zulässig. Ausnahme:
Bei interoperablen Zügen darf am letzten konstruktionsrelevanten TLP bei der
Abfahrtszeit auch der Wert „2“ stehen
4. Bei Angabe in der Oberstruktur „PathInformation“ ist der Bezugspunkt der erste TLP
im Konstruktionsbereich von DB InfraGO.
5. Die Angabe bezieht sich auf den Abfahrtszeitpunkt in diesem TLP
6. Bei TLP mit dem Wechsel des Werts des Offsets ist immer die Angabe mindestens
einer Fahrplanzeit mit der Ausprägung ELA, ELD, LLA oder LLD (in der
PathRequestMessage) bzw. ALA und/oder ALD (in der PathDetailsMessage)
verpflichtend.
I....I....I....I....I....BookedLocatio Timing BookedLocationDateTime Angabe der Abfahrt- Angabe wird nur in betrieblichen Meldungen der betrieblichen Phase bei Nutzung von 0..1 dateTim n/a n/a
nDateTime /Durchfahrtszeit mit Tagesdatum Tagesobjekten der Zugtrasse verwendet. e
I....I....I....I....DwellTime TimingAtLocation DwellTime bestellte Mindesthaltedauer 1. Dieses Feld enthält die vom EVU bestellte Mindesthaltedauer. 0..1 decimal 6 0.0 120 bM bM
2. Pflichtangabe bei TrainActivityCode 0001, 0003 und 0030 (siehe Kapitel 6.2)
0.0
3. Notwendige Rüstzeiten am Start- bzw. Zielbahnhof werden als normale
Mindesthaltedauer beschrieben.
4. Angabe in Minuten [min] mit einer Nachkommastelle [Angabe in 1/10 min]
I....I....I....FreeTextField PlannedJourneyLocation FreeTextField Frei definierbarer Text Zur Übermittlung ergänzender, unstrukturierter Informationen, für die kein definiertes 0..6 string 255 K K
Element vorhanden ist und genutzt werden kann. Durch max. 6 Wiederholungen kann
die Textlänge variiert werden.
I....I....I....ResponsibleApplicant PlannedJourneyLocation ResponsibleApplicant CompanyCode des Bestellers Ist der Besteller und Vertragspartner für die Trasse (bzw. der anderen Produkte der DB 0..1 string 4 0001 ZZZZ [0-9A- K K
InfraGO) und primärer Kommunikationspartner der DB InfraGO (vor allem in der Z]{4}
Planungsphase); muss nicht der Durchführende der Zugfahrt, d. h. Nutzer der Trasse
sein. Die Angabe muss am ersten TLP der Trasse angegeben werden. Das ist die erste
PlannedJourneyLocation in der Struktur PathInformation einer PathRequestMessage
bzw. PathDetailsMessage. Die Angabe gilt für die gesamte Trasse und darf innerhalb
der Trasse nicht geändert werden. Eine Angabe an nachfolgenden TLP ist daher nicht
vorzunehmen. Der in der PathRequestMessage angegebene CompanyCode muss mit
43
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 44

DB Intern / DB internal
dem CompanyCode des Attributs Sender der Struktur MessageHeader
übereinstimmen. Zusätzlich ist der NSP kundennummerBestellendesEvu zu befüllen
I....I....I....ResponsibleRU PlannedJourneyLocation ResponsibleRU CompanyCode des Für die Transportdurchführung verantwortliches EVU; muss nicht Besteller und 0..1 string 4 0001 ZZZZ [0-9A- n/a n/a
durchführenden EVU Vertragspartner für die Trasse (bzw. der anderen Produkte) sein; ist nicht primärer Z]{4}
Kommunikationspartner der DB InfraGO in der Planungsphase, aber bei der
betrieblichen Durchführung der Zugfahrt. Das Feld muss mindestens am ersten ZLP der
Trasse gefüllt sein. Das ist die erste PlannedJourneyLocation in der Struktur
PathInformation einer PathRequestMessage Die Angabe ist auch dann erforderlich,
wenn Besteller und durchführenden EVU identisch sind. Zusätzlich ist der NSP
kundennummerDurchfuehrendesEvu zu befüllen
I....I....I....ResponsibleIM PlannedJourneyLocation ResponsibleIM CompanyCode des ab dem Die Angabe ist für den Startbahnhof und ggf. an jeder Netzgrenze anzugeben und 0..1 string 4 0001 ZZZZ [0-9A- bM bM
TLP verantwortlichen EIU bezeichnet das für den nachfolgenden Abschnitt verantwortliche EIU. Netzgrenze ist Z]{4}
der Infrastrukturpunkt, an welchem 2 benachbarte Infrastrukturbereiche
unterschiedlicher EIU zusammentreffen und die rechtliche Verantwortung von einem
EIU auf das andere EIU übergeht. Die Netzgrenze kann abweichend von der
Fahrplanbearbeitungsgrenze und/oder der (politischen) Staatsgrenze sein.
Vorübergehende Einschränkung aus Anlage 3 beachten.
I....I....I....PlannedTrainData PlannedJourneyLocation PlannedTrainData Zugdaten (Zugcharakteristik bzw. Daten zu dieser Unterstruktur sind nur in der Oberstruktur PathInformation 0..1
Zugtrassencharakteristik) anzugeben.
I....I....I....I....TrainType PlannedTrainData TrainType Zugart 0..1 integer n/a n/a
I....I....I....I....TrafficType PlannedTrainData TrafficType Ergänzende Informationen zur Informationen über die Verkehrsart (Kombiniert, Rollende Landstraße, etc.); die 0..1 n/a n/a
Verkehrsart Angabe muss konsistent zur Angabe im NetworkSpecificParameter (NSP)
„verkehrsartKundeZusatz“ auf Message-Ebene sein.
I....I....I....I....I....TrafficTypeNet PlannedTrainData TrafficTypeNetwork CompanyCode des EIU Angabe des CompanyCodes des EIU bei Verwendung nationaler Codes. 0..1 String 4 n/a n/a
work
Bei DB InfraGO werden keine nationalen Codes vergeben.
I....I....I....I....I....TrafficTypeCod PlannedTrainData TrafficTypeCode Verkehrsart Informationen über die Verkehrsart (Kombiniert, Rollende Landstraße, etc.); die 0..1 string 2 Siehe Kapitel Anlage 1, n/a n/a
e Angabe muss konsistent zur Angabe im NetworkSpecificParameter (NSP) „Codelisten“bzw. Anlage 10, 6.1
„verkehrsartKundeZusatz“ auf Message-Ebene sein.
Sofern im Attribut „TrafficTypeNetwork“ kein Code angegeben wird, ist ein Wert aus
Anlage 1, Kap 3.16.1 zu verwenden.
I....I....I....I....PushPullTrain PlannedTrainData PushPullTrain Wendezugkennzeichen Kennzeichnung der Wendezugfähigkeit des Zuges. Die Ausprägung „true“ ist nur in 0..1 boolean 0 (= false) bM n/a
Verbindung mit TractionMode 1x, 2x oder 5x zulässig. Erfolgt keine Angabe, liegt keine 1 (=true)
Wendezugfähigkeit vor.
Mit der Angabe erfolgt keine Aussage zur Position des Steuerwagens oder des
maßgebenden steuernden Tfz innerhalb des Zuges. Sofern erforderlich kann diese
Detailaussage nur durch Nutzung der TractionMode 1x, 2x oder 5x erfolgen.
I....I....I....I....TypeOfService PlannedTrainData TypeOfService Ergänzende kommerzielle Wird u. a. zur Publikation gegenüber Reisenden genutzt 0..1 n/a n/a
Informationen des EVU zum
Zugobjekt
I....I....I....I....I....SpecialService TypeOfService SpecialServiceDescription Codierung des Service im Zug (z.B. 0..N string 3 n/a n/a
DescriptionCode Code Frühstück, etc.)
I....I....I....I....I....FacilityTypeDe TypeOfService FacilityTypeDescriptionCo Typ der Einrichtung (z.B. 0..N string 3 n/a n/a
scriptionCode de Schlafwagen, etc.)
I....I....I....I....I....CharacteristicD TypeOfService CharacteristicDescriptionC Codierung vorhandener 0..N string 17 n/a n/a
escriptionCode ode Charakteristika im Zug (z.B.
Erste Klasse, Zweite Klasse,
Reservierung möglich, etc.)
I....I....I....I....CommercialTraffic PlannedTrainData CommercialTrafficType Ergänzende Angaben zur 0..1 string 17 n/a n/a
Type Verkehrsart des Zuges
I....I....I....I....PlannedTrainTech PlannedTrainData PlannedTrainTechnicalDat Technische Zugdaten 1
nicalData a
I....I....I....I....I....TrainWeight PlannedTrainTechnicalDat TrainWeight Gesamtmasse des Zuges 1 integer 5 1 999 M M
a (Wagenzug + Triebfahrzeug) in 99
Tonnen [t]
I....I....I....I....I....TrainLength PlannedTrainTechnicalDat TrainLength Gesamtlänge des Zuges 1 integer 4 1 999 M M
a (Wagenzug + Triebfahrzeug) in 9
Meter [m]
I....I....I....I....I....WeightOfSetOf PlannedTrainTechnicalDat WeightOfSetOfCarriages Masse des Wagenzuges in Tonnen 1. Ist <WeightOfSetOfCarriages> nicht gefüllt (keine Angabe), darf auch 0..1 integer 5 1 999 bM bM
Carriages a [t] <LengthOfSetOfCarriages> nicht angegeben werden. 99
2. Keine Angabe für <WeightOfSetOfCarriages> und <LengthOfSetOfCarriages> (=
"leer") bedeutet Tfz-Fahrt, Triebzug oder Triebwagen(-einheit), jeweils ohne
zusätzlichen Wagenzug. Wird mit einem Triebwagen zusätzlich ein Wagenzug
befördert, muss der konkrete Wert für die Masse des Wagenzuges angegeben werden.
44
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 45

DB Intern / DB internal
3. Nicht arbeitende Tfz, die von einem arbeitenden Tfz gezogen werden, gelten als
Wagenzug. Sie dürfen nicht als Tfz in der Struktur TractionDetails angegeben werden.
Deren Masse ist Teil der Masse des Wagenzuges.
I....I....I....I....I....LengthOfSetOf PlannedTrainTechnicalDat LengthOfSetOfCarriages Wagenzuglänge in Meter [m] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt, darf auch <LengthOfSetOfCarriages> 0..1 integer 4 1 999 bM bM
Carriages a nicht angegeben werden. 9
2. Keine Angabe für <WeightOfSetOfCarriages> und <LengthOfSetOfCarriages> (=
"leer") bedeutet Tfz-Fahrt, Triebzug oder Triebwagen(-einheit), jeweils ohne
zusätzlichen Wagenzug. Wird mit einem Triebwagen zusätzlich ein Wagenzug
befördert, muss der konkrete Wert für die Länge des Wagenzuges angegeben werden.
3. Nicht arbeitende Tfz, die von einem arbeitenden Tfz gezogen werden, gelten als
Wagenzug. Sie dürfen nicht als Tfz in der Struktur TractionDetails angegeben werden.
Deren Länge ist Teil der Länge des Wagenzuges.
I....I....I....I....I....TractionDetails PlannedTrainTechnicalDat TractionDetails Details zum Triebfahrzeug 1. Hier sind die Details zu den Triebfahrzeugen für die Basis-Zugcharakteristik 1..N
a anzugeben.
2. Als erstes muss immer eine Regelbespannung mit der Ausprägung Zuglok,
Zuglok/Doppeltraktion bzw. Mittellok angegeben werden.
3. Erst nach Angabe der Regelbespannung dürfen weitere Zusatz-Tfz angegeben
werden.
I....I....I....I....I....I....LocoTypeN TractionDetails LocoTypeNum- Triebfahrzeug-Baureihe 1 Siehe Stammdaten Anlage 1, M M
umber ber Kapitel 4.3.3
I....I....I....I....I....I....I….TypeCod LocoTypeNumber TypeCode1 Bauarttyp Bauarttyp gemäß Teil 0 Anhang 6 der EU-Reg. 2007/756 1 integer 1 [9] M M
e1
I....I....I....I....I....I....I….TypeCod LocoTypeNumber TypeCode2 Antriebsart/Traktionsart Antriebsart/Traktionsart gemäß Teil 8 Anhang 6 der EU-Reg. 2007/756 1 integer 1 [0-9] M M
e2
I....I....I....I....I....I....I….Country LocoTypeNumber CountryCode Ländercode Ländercode gemäß Teil 4 Anhang 6 der EU-Reg.. 2007/756 1 integer 2 [0-9]{2} M M
Code
I....I....I....I....I....I....I….SeriesNu LocoTypeNumber SeriesNumber Baureihennummer Nummer der Baureihe gemäß dem Verzeichnis der Tfz der DB InfraGO 1 integer 4 [0-9]{4} M M
mber
I....I....I....I....I....I....I….SerialNu LocoTypeNumber SerialNumber Variantennummer der Baureihe Nummer der Variante der Baureihe gemäß dem Verzeichnis der Tfz der DB InfraGO. 0..1 integer 3 [0-9]{3} bM bM
mber Alle bei der DB InfraGO zugelassenen TfzBaureihen haben eine Variantennummer, die
immer anzugeben ist.
I....I....I....I....I....I....I….ControlD LocoTypeNumber ControlDigit Kontrollziffer Keine Angabe in der Planungsphase in PathRequestMessage oder PathDetailsMessage 0..1 integer 1 [0-9]
igit
I....I....I....I....I....I....TypeOfUse TractionDetails TypeOfUsedHybridPower Antriebsart eines Hybrid-Tfz Die Angabe ist nur erforderlich, wenn das im Element LocoTypeNumber angegebene 0..1 token 1 Siehe Kapitel 6.1 Codelisten bM n/a
dHybridPowerunit unit Tfz ein Hybrid-Tfz ist. Es wird die gewünschte Nutzung einer Antriebsart
(PathRequestMessage) bzw. die zu nutzende und bei der Trassenkonstruktion
verwendete Antriebsart angegeben.
I....I....I....I....I....I....TractionMo TractionDetails TractionMode Rolle und Position des 1. Das Attribut ist in der Kommunikation mit DB InfraGO eine Pflichtangabe 1 integer 2 01 99 Siehe Kapitel 6.1 Codelisten M M
de Triebfahrzeugs im Zugverband
2. Das Attribut ist immer zweistellig anzugeben.
3. Die erste Stelle gibt die Rolle des Tfz an. Durch die Auswahl der Rolle des Tfz. wird
auch gleichzeitig die Position des Tfz. im Zugverband ausgewählt (z.B: Tfz. ist an
Zugspitze oder Zugende).
4. Die zweite Stelle muss eineindeutig innerhalb einer Rolle sein, dient aber nur zur
Auswertung der Anzahl Tfz in der jeweiligen Rolle.
5. Es erfolgt keine direkte Unterscheidung mehr zwischen Zuglok/Doppeltraktion und
Zuglok mit Vorspannlok; in beiden Fällen erfolgt zusätzlich zur Regelbespannung die
Angabe eines weiteren Tfz. der gleichen Rolle, jedoch mit einer höheren fortlaufenden
Nummer an der 2. Stelle. Die zweite Stelle lässt keine Rückschlüsse auf die Position
innerhalb der Rolle des Triebfahrzeugs zu.
6. „LocoTypeNumber“ enthält die jeweils gewünschte Triebfahrzeug-Baureihe (diese
kann auch identisch mit der angegebenen Regelbespannung sein).
I....I....I....I....I....I....TractionWe TractionDetails TractionWeight Masse des Triebfahrzeugs Bei lokbespannten Zügen muss die Angabe immer erfolgen. Die Angabe kann entfallen 0..1 integer 5 1 999 n/a n/a
ight bei Tfz-fahrten, Triebzug- und Triebwagen(-einheiten), da in diesen Fällen die Angabe 99
zu diesem Element identisch zu der Angabe im Element TrainWeight ist.
I....I....I....I....I....I....Length TractionDetails Length Länge des Triebfahrzeugs Bei lokbespannten Zügen muss die Angabe immer erfolgen. 0..1 n/a n/a
Die Angabe kann entfallen bei Tfz-fahrten, Triebzug- und Triebwagen(-einheiten), da in
diesen Fällen die Angabe zu diesem Element identisch zu der Angabe im Element
TrainLength ist.
I....I....I....I....I....I....I....Value Length Value Längenwert des Triebfahrzeugs 1 decimal 8 99999 n/a n/a
9,9
45
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 46

DB Intern / DB internal
I....I....I....I....I....I....I....Measure Length Measure Maßeinheit der Länge des Ausschließlich Nutzung der Maßeinheit mm. 1 token n/a n/a
Triebfahrzeugs
I....I....I....I....I....TrainMaxSpee PlannedTrainTechnicalDat TrainMaxSpeed Höchstgeschwindigkeit des Hier wird die technische Höchstgeschwindigkeit des Zuges angegeben. Die Angabe 1 integer 3 1 999 M M
d a Zuges in Kilometern pro Stunde erfolgt in km/h.
[km/h]
I....I....I....I....I....HighestPlanne PlannedTrainTechnicalDat HighestPlannedSpeed Höchstgeschwindigkeit der Höchstgeschwindigkeit des Zuges ab diesem Trassenlaufpunkt bei Nutzung der 0..1 integer 3 1 999 n/a n/a
dSpeed a Trasse in Kilometern pro Stunde Zugtrasse.
[km/h] Sie ergibt sich aus der bestellten Höchstgeschwindigkeit des Zuges (TrainMaxSpeed)
und der auf der gewählten Strecke zugelassenen Höchstgeschwindigkeit auf der
Grundlage der Infrastruktur, sowie der Bremsart, den vorhandenen Bremshundertsteln
bzw. den erforderlichen Mindestbremshundertstel des Zuges. Die Angabe erfolgt in
km/h.
Bei LZB-geführten Zügen wird die Rückfallgeschwindigkeit angegeben.
I....I....I....I....I....PlannedSpeed PlannedTrainTechnicalDat PlannedSpeed Konstruktionsgeschwindigkeit in Maximale Geschwindigkeit, mit der die Trasse zwischen zwei Trassenlaufpunkten 0..1 integer 3 1 999 n/a n/a
a Kilometern pro Stunde [km/h] konstruiert wurde.
I....I....I....I....I....Coasting PlannedTrainTechnicalDat Coasting Ausrollen Zeigt an, dass der Triebfahrzeugführer in Beharrungsfahrt übergehen kann. Das heißt, 0..1 boolean 0 = (false) n/a n/a
a er kann den Zug nach Erreichen der Konstruktionsgeschwindigkeit ohne Antrieb weiter 1 (=true)
ausrollen lassen und hält dabei trotzdem die Fahrplanzeit am nächsten
Zugtrassenlaufpunkt ein.
I....I....I....I....I....MaxAxleWeigh PlannedTrainTechnicalDat MaxAxleWeight Radsatzlast ab ZLP (Angabe in Feld wird im Konstruktionsbereich der DB InfraGO nur in Verbindung mit 0..1 decimal 4 0.1 99.9 n/a n/a
t a Tonnen mit einer Dezimalstelle) Beförderungsbesonderheit, BZA etc. (benannt in ExceptionalGaugingIdent) als
ergänzende Informationsmöglichkeit genutzt.
I....I....I....I....I....RouteClass PlannedTrainTechnicalDat RouteClass geforderte / mögliche 1. Das EVU gibt in der PathRequestMessage die sich aus der Zugzusammensetzung 0..1 string 3 Siehe Stammdaten Anlage 1 K M
a Streckenklasse ergebende erforderliche Streckenklasse an. Ist das Feld in der PathRequestMessage
nicht gefüllt, gilt die höchste Streckenklasse (aktuell D4).
2. In der PathDetailsMessage wird die bestellte bzw. die sich aus der Konstruktion
ergebende niedrigere Streckenklasse für den auf die Betriebsstelle folgenden
Streckenabschnitt angegeben.
3. Es dürfen nur die Streckenklassen nach den Bezeichnungen der RiL 457 (DB InfraGO)
verwendet werden.
I....I....I....I....I....BrakeType PlannedTrainTechnicalDat BrakeType Bremsstellung des Zuges Die Angabe von hydrodynamischen (Zusatz H) und elektrodynamischen (Zusatz E) 0..1 token Siehe Kapitel 6.1 Codelisten M M
a Bremsen ist nicht gestattet. Bei Verwendung dieser Bremsart in der Bestellung ist das
jeweilige Äquivalent ohne entsprechenden Zusatz zu verwenden.
I....I....I....I....I....EmergencyBra PlannedTrainTechnicalDat EmergencyBrakeOverride NBÜ (Notbremsüberbrückung) Zug verfügt über die technische Ausrüstung NBÜ 0..1 boolean 0 (= false) K K
keOverride a vorhanden 1 (=true)
I....I....I....I....I....BrakingRatio PlannedTrainTechnicalDat BrakingRatio Vorhandene / benötigte Attribut wird abweichend zur Anlage 1 verwendet: 0..1 integer 3 1 999 M M
a Bremshundertstel des Zuges
1. Das EVU gibt in der PathRequestMessage die garantiert vorhandenen
Bremshundertstel des Zuges an
2. In der PathDetailsMessage werden die ursprünglich bestellten oder in der
Konstruktion als voraussichtlich erforderlich ermittelten höheren
Bremshundertstel angegeben.
I....I....I....I....I....MinBrakedWei PlannedTrainTechnicalDat MinBraked- geforderte Mindestbremshundertstel, die für die konstruierte Trasse benötigt werden. 0..1 integer 3 1 999 n/a n/a
ghtPercent a WeightPercent Mindestbremshundertstel
I....I....I....I....I....BrakeWeight PlannedTrainTechnicalDat BrakeWeight Bremsgewicht Das Attribut wird bei DB InfraGO nicht genutzt. 0..1 integer 5 1 999 n/a n/a
a 99
I....I....I....I....I....TrainCC_Syste PlannedTrainTechnicalDat TrainCC_System Ausrüstung des Zuges mit einem Angabe gilt für alle Tfz des Zuges (inklusive des ggf. vorhandenen Steuerwagens) 0..N token Siehe Anlage 1, Kap. 3.16.1 und K K
m a Zugsicherungssystem unabhängig von deren Stellung und Rolle im Zug Kapitel 6.1 Codelisten
I....I....I....I....I....TrainRadioSyst PlannedTrainTechnicalDat TrainRadioSystem Zugfunk Sofern der Zug über Zugfunk verfügt, ist die Angabe bei der Zuglok einzutragen und gilt 0..1 token Siehe Anlage 1, Kap. 3.16.1 und n/a n/a
em a für alle Tfz. (inklusive Steuerwagen) des Zuges Kapitel 6.1 Codelisten
I....I....I....I....I....TiltingFunction PlannedTrainTechnicalDat TiltingFunction Nutzung der Neigetechnik Angabe, dass die im Zug als technische Einrichtung vorhandene aktive Neigetechnik 0..1 boolean 0 (= false) K K
a genutzt werden soll bzw. wird. Vorhandene und genutzte passive Neigetechnik findet 1 (=true)
keine Berücksichtigung (= 0).
I....I....I....I....I....OperationalTra PlannedTrainTechnicalDat OperationalTrainCoupling Betriebliche Festigkeit Angabe der betrieblichen Festigkeit der Zughakeneinrichtung. Die Angabe ist ein 0..1 integer 1 999 K n/a
inCouplingStrength a Strength Zughakenfestigkeit erforderliches, technisches Merkmal des Güterzugs zur Bestimmung der Grenzlast. Bei 9
fehlender Angabe bei Güterzügen wird der Wert der UICSchraubenkupplung
verwendet.
I....I....I....I....I....BogieWagonsO PlannedTrainTechnicalDat BogieWagonsOnly Homogener Angabe, dass der bestellte Güterzug ausschließlich aus Drehgestellwagen besteht. Bei 0..1 Boolean 0 (= false) K n/a
nly a Drehgestellwagenzug Nichtangabe muss die maximale Druckkraft bei geschobenen Güterzügen reduziert 1 (=true)
werden
I....I....I....I....ExceptionalGaugi PlannedTrainData ExceptionalGaugingIdent Angaben zu den 0..N
ngIdent Beförderungsbesonderheiten
46
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 47

DB Intern / DB internal
I....I....I....I....I....IM_Partner ExceptionalGaugingIdent IM_Partner CompanyCode des EIU CompanyCode des EIU, in dessen Bereich die Beförderungsbesonderheit (z. B. BZA, 1 string 4 0001 ZZZZ [0-9A- M M
Lademaßüberschreitung) auftritt Z]{4}
I....I....I....I....I....ExceptionalGa ExceptionalGaugingIdent ExceptionalGaugingCode Bezeichnung der BZA-Nummer; Nummer einer Beförderungsanordnung oder Dauer-LÜ; 1 string 24 DA = “DA-[0-9]{4}” M M
ugingCode Beförderungsbesonderheit oder Gruppenbuchstaben (A, B, C, ….) gemäß Ril 458
der Beförderungsanordnung; 1. Dauerbeförderungsanordnungen sindin der Form „DA-xxxx“ anzugeben.
Beförderungsart bei Zügen mit
Lademaßüberschreitung
I....I....I....I....DangerousGoodsI PlannedTrainData Dangerous- Gefahrgut 0..N
ndication GoodsIndication
I....I....I....I....I....HazardIdentific DangerousGoodsIndicatio HazardIdentificationNumb Angaben zu Gefahrgut: GGVE- 1. Wenn die <RID_Class> gefüllt ist, können die Felder <HazardIdentificationNumber>, 0..1 string 4 [0-9] bM bM
ationNumber n er Nummer <UN_Number> und <PackingGroup> gefüllt werden. {2,3}
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
I....I....I....I....I....UN_Number DangerousGoodsIndicatio UN_Number Angaben zu Gefahrgut: 1. Wenn die <RID_Class> gefüllt ist, können die Felder <HazardIdentificationNumber>, 0..1 string 4 [\d*[1- bM bM
n UNNummer (auch als Stoff- <UN_Number> und <PackingGroup> gefüllt werden. 9]\d*]
Nummer bezeichnet)
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
I....I....I....I....I....DangerLabel DangerousGoodsIndicatio DangerLabel Gefahr Label nicht anwendbar 0..5 token n/a n/a
n
I....I....I....I....I....RID_Class DangerousGoodsIndicatio RID_Class Angaben zur Gefahrgut: RIDKlasse Bei Ganzzügen muss dieses Feld gefüllt werden, wenn Gefahrgut befördert wird. Siehe 0..1 string 4 M M
n (auch als Gefahrgutklasse auch Abschnitt 5.11.6 Attribut <gefahrgutGanzzug>. Sofern darüber hinaus
bezeichnet) Gefahrguttransporte deklariert werden müssen, muss mindestens das Attribut
„RID_Class“ gefüllt werden.
I....I....I....I....I....PackingGroup DangerousGoodsIndicatio PackingGroup Angaben zu Gefahrgut: 1. Wenn die <RID_Class> gefüllt ist, können die Felder <HazardIdentificationNumber>, 0..1 token I = sehr gefährlich bM bM
n Verpackungsgruppe <UN_Number> und <PackingGroup> gefüllt werden. II = gefährlich
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
III = weniger gefährlich
I....I....I....I....I....DangerousGoo DangerousGoodsIndicatio Dangerous-GoodsWeight Masse des Gefahrguts in nicht anwendbar 0..1 integer 6 0 999 n/a n/a
dsWeight n Kilogramm 999
I....I....I....I....I....DangerousGoo DangerousGoodsIndicatio Dangerous-GoodsVolume Volumen des Gefahrguts in nicht anwendbar 0..1 float n/a n/a
dsVolume n Kubikmetern
I....I....I....I....I....LimitedQuantit DangerousGoodsIndicatio LimitedQuantityIndicator Indikator für ausgezeichnetes Angabe wird von DB InfraGO nicht ausgewertet und verwendet. 0..1 boolean 0 (= false) n/a n/a
yIndicator n Gefahrgut in limitierter Menge 1 (=true)
I....I....I....I....CombinedTrafficL PlannedTrainData CombinedTrafficLoadProfi KV-Profile 0..1
oadProfile le
I....I....I....I....I....P1 CombinedTrafficLoadProfi P1 gefordertes KV (P2) Hier kann bei Güterzügen das maßgebende KV – Profil angegeben werden. 0..1 string 3 001 999 bM bM
le
I....I....I....I....I....P2 CombinedTrafficLoadProfi P2 gefordertes KV (P3) Hier kann bei Güterzügen das maßgebende KV – Profil angegeben werden. 0..1 string 3 001 999 bM bM
le
I....I....I....I....I....C1 CombinedTrafficLoadProfi C1 gefordertes KV (C2) Hier kann bei Güterzügen das maßgebende KV – Profil angegeben werden. 0..1 string 3 001 999 bM bM
le
I....I....I....I....I....C2 CombinedTrafficLoadProfi C2 gefordertes KV (C3) Hier kann bei Güterzügen das maßgebende KV – Profil angegeben werden. 0..1 string 3 001 999 bM bM
le
I....I....I....StatusOfHarmonizati PlannedJourneyLocation StatusOfHarmonization Status der Harmonisierung 0..1 n/a n/a
on
I....I....I....I....HandoverHarmon StatusOfHarmonization HandoverHarmonized Das EIU zeigt an, ob am 0..1 boolean 0 (= false) n/a n/a
ized Übergabebf. für die Übergabe von 1 (=true)
einem EIU auf das nachfolgende
die Harmonisierung erfolgt ist.
I....I....I....I....InterchangeHarm StatusOfHarmonization InterchangeHarmonized Das EVU zeigt an, ob am 0..1 boolean 0 (= false) n/a n/a
onized Übergabebf. für die Übergabe von 1 (=true)
einem EVU auf das nächstfolgende
EVU die Harmonisierung erfolgt ist.
I....I....I....TrainActivity PlannedJourneyLocation TrainActivity Zugaktivitäten 1. Beinhaltet Haltearten und Haltegründe 0..N
2. Details siehe Ausführungen zur Unterstruktur "TrainActivity" (Kapitel 5.7.1.7)
I....I....I....I....TrainActivityType TrainActivity TrainActivityType Typ der Zugaktivität 1. Beinhaltet die Kodierung von Haltearten und Haltegründe 1 string 4 Siehe Anlage 1 Kap. 3.16.2 Kapitel bM bM
2. Details siehe Ausführungen zur Unterstruktur "TrainActivity" (Kapitel 5.7.1.7)
bzw Anlage 10, Kap 6.2 Codelisten
- TrainActivityType
I....I....I....I....AssociatedAttach TrainActivity AssociatedAttachedTrainI ReferenceTRID des referenzier1te. n Angabe der ReferenceTRID des Zuges aus einer Zug-Family, der ggf. von der genannten 0..1
edTrainID D Zuges Zugaktivität betroffen ist.
I....I....I....I....I....ObjectType AssociatedAttachedTrainI ObjectType Objekttyp Sofern eine Referenzierung auf einen anderen Zug durch Angabe einer ReferenceTRID 1 string 2 [0-9A- bM n/a
D erfolgt, sind dieses und die nachfolgenden bedingten Mussfelder vollständig zu Z]{2}
befüllen.
I....I....I....I....I....Company AssociatedAttachedTrainI Company Der CompanyCode des EVU Siehe Kapitel 5.12 Codelisten 1 string 4 0001 ZZZZ [0-9A-Z]{4} bM n/a
D
47
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 48

DB Intern / DB internal
I....I....I....I....I....Core AssociatedAttachedTrainI Core Kernelement des Identifiers Es müssen alle 12 Stellen gefüllt werden. Nicht genutzte Stellen sind mit „-„ aufzufüllen. 1 string 12 [\-\*0- bM n/a
D 9A-
Z]{12}
I....I....I....I....I....Variant AssociatedAttachedTrainI Variant Variante 1 string 2 [0-9A- bM n/a
D Z]{2}
I....I....I....I....I....TimetableYear AssociatedAttachedTrainI TimetableYear Fahrplanperiode 1 integer 4 2012 209 bM n/a
D 7
I....I....I....I....I....StartDate AssociatedAttachedTrainI StartDate Startdatum der geplanten Abfahrt wird nur im Betrieb bei Tagesfahrplänen genutzt 0..1 date 10 2012- 209 n/a n/a
D 01-01 7-
12-
31
I....I....I....I....AssociatedAttach TrainActivity AssociatedAttachedOTN Zugnummer des referenzierten Angabe der OTN des Zuges, der ggf. von der genannten Zugaktivität betroffen ist. 0..1 string 6 [0- K n/a
edOTN Zuges 9]{1,6}
I....I....I....I....AssociatedAttach TrainActivity AssociatedAttachedTrainS Kommerzielle Liniennummer Angabe nur bei Nutzung eines TrainActivityTypeCodes zur Darstellung einer Referenz 0..1 string 6 [0-9A-Z]{1-6} IC6, K n/a
edTrainServiceNumber erviceNumber anstatt eines referenzierten auf einen anderen Zug, z. B. bei Anschlüssen (oder Zugverknüpfungen RB125
Zuges (TrainActivityTypeCodes 0016, 0017,0044 , 0045, 0046 oder 0047) , S25
I....I....I....I....AssociatedAttach TrainActivity AssociatedAttachedTimin Angabe einer Ankunfts- oder Angabe nur bei Nutzung eines TrainActivityTypeCodes zur Darstellung einer Referenz 0..1 K n/a
edTimingAtLocation gAtLocation Abfahrtszeit des referenzierten auf einen anderen Zug, z. B. bei Anschlüssen oder Zugverknüpfungen
Zuges (TrainActivityTypeCodes 0016, 0017, 0044, 0045, 0046 oder 0047)
I....I....I....I....I....TimingAtLocati AssociatedAttachedTimin TimingAtLocation Abfahrts- oder Ankunftszeit am Angabe entweder der Ankunfts- oder der Abfahrtszeit des referenzierten Zuges je nach 1
on gAtLocation TLP fachlichem Kontext.
I....I....I....I....I....I....Timing TimingAtLocation Timing 0..1
I....I....I....I....I....I....I....TimingQ Timing TimingQualifierCode Kodierung der Art der 1.In der XSD ist diese Information ein Attribut 1 token Siehe Anlage 1, Kap. 3.16.1 und bM n/a
ualifierCode angegebenen Abfahrts- bzw. Kap 6.1 Codelisten
2.Es muss der gleiche TimingQualifierCode angegeben werden wie am
Ankunftszeit.
Verknüpfungspunkt beim referenzierten Zug oder Path.
I....I....I....I....I....I....I....Time Timing Time Zeitangabe für die in 1.Angabe im Format hh:mm:ss mit den Ausprägungen 00:00:00 bis 23:59:54. 1 time M n/a
TimingQualifierCode definierte Art
2.Die Sekunden sind immer in 6-Sekunden-Schritten anzugeben.
3.Es muss der gleiche Wert angegeben werden wie am Verknüpfungspunkt beim
referenzierten Zug oder Path.
I....I....I....I....I....I....I....Offset Timing Offset Tageswechsel / Nachtsprung 1. Es muss der gleiche Wert angegeben werden wie am Verknüpfungspunkt beim 1 Positive M n/a
referenzierten Zug oder Path. integer
I....I....I....I....I....I....I....BookedL Timing BookedLocationDateTime Angabe der Abfahrt- 2. Im Zusammenhang mit der Angabe eines TrainActivityTypeCodes darf das Element 0..1 dateTim n/a n/a
ocationdateTime /Durchfahrtszeit mit Tagesdatum nicht genutzt werden. e
I....I....I....I....I....DwellTime TimingAtLocation DwellTime bestellte Mindesthaltedauer 3. Im Zusammenhang mit der Angabe eines TrainActivityTypeCodes darf das Element 0..1 decimal 6 0.0 120 n/a n/a
nicht genutzt werden. 0.0
I....I....I....I....AssociatedAttach TimingAtLocat AssociatedAttachedLocati Angabe einer referenzierten Angabe nur bei Nutzung eines TrainActivityCodes zur Darstellung einer Referenz auf 0..1 K n/a
edLocationIdent ion onIdent Betriebsstelle einen anderen Zug an einem anderen Bahnhofsteil mit eigenem PLC
I....I....I....I....I....CountryCodeIS AssociatedAtt CountryCodeISO CountryCode des Eindeutige EU-weite Identifikation einer Betriebsstelle in Verbindung mit dem 1 string 2 M n/a
O achedLocation LocationPrimaryCode des ZLP/TLP <LocationPrimaryCode> Siehe Stammdaten (Anlage 1))
Ident Deutschland = DE
I....I....I....I....I....LocationPrima AssociatedAtt LocationPrimaryCode LocationPrimaryCode des ZLP/TLP Eindeutige EU-weite Identifikation einer Betriebsstelle (PrimaryLocation) in 1 Positive 5 1 999 Siehe Stammdaten M n/a
ryCode achedLocation Verbindung mit dem <CountryCodeISO>. integer 99 (Anlage 1)
Ident Wird von jedem Land selbständig vergeben.
Die LocationPrimaryCodes werden getrennt veröffentlicht.
Geplante Betriebsstellen, für die noch keine offizielle Codierung zugeordnet wurde,
haben immer die Codierung 99999
I....I....I....I....I....PrimaryLocati AssociatedAtt PrimaryLocationName Name des ZLP/TLP Muss bei in Planung befindlichen Betriebsstellen, für die noch kein PLC vergeben 0..1 string 255 bM n/a
onName achedLocation wurde, immer gefüllt sein.
Ident
I....I....I....I....I....LocationSubsi AssociatedAtt LocationSubsidiaryIdentifi Code, Name und Lokalisierung der Ergänzende Angabe zur als PrimaryLocation angegebenen Betriebsstelle, wie 0..1 n/a n/a
diaryIdentification achedLocation cation ergänzenden Angaben zum Gleisbezeichnung/-nummer, besondere Eigenschaft der Betriebsstelle, RiL100-Code
Ident ZLP/TLP (Subsidiary Location) der DB InfraGO
I....I....I....I....I....I....LocationSu LocationSubsi LocationSubsidiaryCode Code der ergänzenden Angaben In Verbindung mit TypeCode 41 kann hier der für die PrimaryLocation im Netz der DB 1 string 10 n/a n/a
bsidiaryCode diaryIdentifica zum ZLP/TLP als Teil der definierte RiL 100-Code (in CRD hinterlegt) angegeben werden.
tion PrimaryLocation
I....I....I....I....I....I....I....Location LocationSubsi LocationSubsidiaryTypeC Code des Typs der ergänzenden In der XSD ist diese Information ein eigenständiges Attribut innerhalb des Elements 1 Siehe Anlage 1 „Codelisten“ n/a n/a
SubsidiaryTypeCode diaryCode ode Angaben zum ZLP/TLP SubsidiaryLocationCode.
48
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 49

DB Intern / DB internal
I....I....I....I....I....I....AllocationC LocationSubsi AllocationCompany CompanyCode des für die Siehe Kapitel "Codelisten" 1 string 4 0001 ZZZ [0-9A-Z]{4} n/a n/a
ompany diaryIdentifica SubsidiaryLocation Z
tion verantwortlichen EIU
I....I....I....I....I....I....LocationSu LocationSubsi LocationSubsidiaryName Bezeichnung der durch die In Verbindung mit TypeCode 41 kann hier optional der Name des für das Netz der DB 0..1 string 255 n/a n/a
bsidiaryName diaryIdentifica ergänzenden Angaben zum definierten RiL 100-Codes (in CRD hinterlegt) der PrimaryLocation angegeben werden.
tion ZLP/TLP beschriebenen Örtlichkeit
I....I....I....I....FreeTextField TrainActivity FreeTextField Ergänzende Angabe zur Keine Nutzung, wenn zur Übermittlung der fachlichen Information ein Standardfeld 0..1 String 255 n/a n/a
TrainActivity oder Code existiert.
I....I....I....OnDemandPath PlannedJourneyLocation OnDemandPath Abschnitt ab ZLP ist Bedarfstrasse Bedarfstrassen werden durch DB InfraGO nicht unterstützt 0..1 boolean 0 (= false) n/a n/a
1 (=true)
I....I....I....PreArrangedPath PlannedJourneyLocation PreArrangedPath PreArrangedPath (PAP) Kann nur über PCS bestellt werden; ggf. Angabe der Nummer eines PAP 0..1 string 9 0 n/a n/a
I....I....I....OperationalTrainNu PlannedJourneyLocation OperationalTrainNumber Betriebliche Zugnummer Das Element wird nur innerhalb der Oberstruktur PathInformation genutzt. 0..1 string 6 1 [0- bM bM
mber 9]{1,6}
I....I....I....NetworkSpecificPara PlannedJourneyLocation NetworkSpecificParamete Spezifische Parameter (Attribute, Aufbau und Verwendung der Parameter siehe Kapitel 5.11.6 Attribute der Struktur 0..N 2 M M
meter r Felder) des EIU „NetworkSpecificParameter“ auf Location-Ebene
I....I....I....I....Name NetworkSpecificParamete Name Name des Parameters Generischer Name des Parameters 1 string 255 3 M M
r
I....I....I....I....Value NetworkSpecificParamete Value Wert des Parameters Wert des Parameters 1 string 255 M M
r
Tabelle 16: PlannedJourneyLocation Datenfelder
49
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 50

DB Intern / DB internal
5.8 Struktur „PlannedCalendar“
5.8.1 Übersicht über die Struktur „PlannedCalendar“
Diese Struktur ist in den Oberstrukturen „TrainInformation“ und „PathInformation“ sowie in der „AffectedSection“ enthalten. Die Struktur „PlannedCalendar“ muss immer angegeben werden, wenn eine dieser Oberstrukturen in einem
Nachrichtentyp angegeben werden muss oder soll.
Die Struktur „PlannedCalendar“ weist in der Oberstruktur „PathInformation“ und der „AffectedSection“ mit der Angabe der Verkehrstage (BitmapDays) für einen angegebenen Verkehrszeitraum (ValidityPeriod) die Verkehrszeitregelung
der Zugtrasse aus.
Abbildung 16:PlannedCalendar Struktur
Nutzung der Struktur „PlannedCalendar“ in der Nachricht „PathRequestMessage“:
 Die Nachricht enthält in der Oberstruktur „PathInformation“ die Verkehrszeitregelung, gültig für denjenigen Zuglaufabschnitt, für den das über die PathRequestMessage angefragte EIU verantwortlich ist.
 Die Verkehrstage definieren sich ab der Start-Betriebsstelle in der Oberstruktur „PathInformation“. In Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage in der Struktur PlannedCalendar in der
PathInformation im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) um die Anzahl der Tageswechsel verschieben.
 Das Attribut „Offset“ der Unterstruktur „TimingAtLocation“ in der Struktur PlannedJourneyLocation gibt die Tageswechsel innerhalb des Zug- bzw. Trassenlaufs an. Es hat an der Start-Betriebsstelle immer den Wert „0“ und ist im
weiteren Trassenverlauf immer positiv (oder „0“, wenn kein Tageswechsel geplant wird bzw. sich aus der Konstruktion der Zugtrasse ergibt).
 In den Stellungnahmen des Kunden muss die Verkehrstageregelung bzw. die betroffenen Verkerhstage den Angaben des zuvor empfangenen GPE / GPE nach Stellungnahme entsprechen
Nutzung der Struktur „PlannedCalendar“ in der Nachricht „PathDetailsMessage“:
 Die Verkehrszeitregelung bezieht sich auf die erste durch eine Unterstruktur „PlannedJourneyLocation“ definierte Betriebsstelle in der Oberstruktur „PathInformation“. In Abhängigkeit vom Wert im Attribut OffsetToReference
können sich die Verkehrstage der Zugtrasse im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) oder der Route um die Anzahl der Tageswechsel verschieben.
 Sie beinhaltet die durch die Konstruktion definierten Verkehrstage der Zugtrasse
Nutzung der Struktur „PlannedCalendar“ in der Nachricht „PathNotAvailableMessage“:
 Die Verkehrszeitregelung bezieht sich auf die Angaben der „StartofSection“ und „EndofSection“ der „AffectedSection“. In Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage der Zugtrasse im
Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) oder der Route um die Anzahl der Tageswechsel verschieben.
 Sie beinhaltet die durch die Konstruktion definierten Ausfalltage der Zugtrasse
 In den Stellungnahmen des Kunden muss die Verkehrstageregelung bzw. die betroffenen Verkerhstage den Angaben des zuvor empfangenen GPE / GPE nach Stellungnahme entsprechen
5.8.2 Struktur „ReferenceTrainIDSubCalendar“ und Attribut „OffsetToReference“:
Durch das EVU (Rolle LeadRU) erfolgt die Planung von Zugobjekten, die in einer Train-Family zusammengefasst werden. Die Train-Family wird auch als ReferenceTrain bezeichnet, dessen eindeutiger Identifikator die ReferenceTrainID
(ReferenceTRID) ist. Der ReferenceTrain ist ein imaginäres Objekt mit einem imaginären ReferenceCalendar. Jedem Tag dieses Kalenders darf max. ein Zug eines Zugobjekts Train der Train-Family zugeordnet sein. Der ReferenceCalendar
des ReferenceTrains enthält somit alle Verkehrstage des imaginären Objekts ReferenceTrain.
Der Kalender selbst wird in der Kommunikation zwischen EVU und EIU nur indirekt ausgetauscht. Im Bauprozess kann sich der Kalender seitens des EVU nicht ändern, daher wird hier auch auf den Austausch des
ReferenceTrainIDSubCalendar verzichtet. Verkehrstagesänderungen des ReferenceTrains müssen außerhalb des Bauprozesses in anderen Geschäftsprozessen kommuniziert werden. Die Angaben in der Struktur PlannedCalendar in

## Seite 51

DB Intern / DB internal
Verbindung mit der Angabe im Element „OffsetToReference“ referenzieren somit immer den aus dem ursprünglichen PathRequest bekannten ReferenceTrainIDSubCalendar. Jeder in einem „PlannedCalendar“ enthaltene Verkehrstag
muss unter Berücksichtigung der Angabe in OffsetToReference immer ein Pendant im ursprünglichen ReferenceTrainIDSubCalendar haben. Anderenfalls liegt ein Fehler vor.
Das Attribut „OffsetToReference“ gibt die Verschiebung der Verkehrstage in der Struktur PlannedCalendar für die Objekte PathRequest (in der PathInformation der PathRequestMessage) sowie für das Objekt Path (in der PathInformation
der PathDetailsMessage) im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) an. Es dient aber ebenso der eindeutigen Ermittlung des StartDate im Identifier der Tagesobjekte und der
eindeutigen Verlinkung der Paths zum ReferenceTrain an den jeweiligen Verkehrstagen unter Berücksichtigung der durch den Wert im Attribut „OffsetToReference“ erforderlichen Verschiebung.
Abbildung 17: ReferenceTrainIDSubCalendar Struktur
5.8.3 Datenfelder der Struktur „PlannedCalendar“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kommen Wert Wert
I....I....PlannedCal PlannedCalendar Verkehrstageregelung 1
endar
I....I....I....Bitmap PlannedCalendar BitmapDays Bitleiste der Verkehrstage 1.Muster, welches angibt, an welchen Tagen 0..1 string 740 [0-
Days des Zuges bzw. der innerhalb der ValidityPeriod der Zug fährt oder nicht 1]{1,740}
Zugtrasse (bzw. des fährt bzw. die Zugtrasse geplant ist oder nicht. Bei
Ergebnisses einer Verwendung der Bitleiste im Kalender der Struktur
„AffectedSection“ wird damit angegeben, an
Fahrzeitberechnung oder
Fahrplanstudie)
welchen Tagen die jeweilige Nachricht gilt.
2.Das Muster wird als Zeichenkette mit den Zeichen
"1" (Verkehrstag) und "0" (kein Verkehrstag)
dargestellt.
3.Die Bitleiste muss immer angegeben werden,
wenn die ValidityPeriod mehr als einen Tag umfasst.
Die Bitleiste muss genauso lang sein, wie es
Kalender-tage zwischen <StartDateTime> und
<EndDateTime> (jeweils inklusive) gibt.
4.Somit entspricht das erste Zeichen in der Bitleiste
dem Startdatum und das letzte Zeichen dem
Enddatum, unabhängig davon, ob Start- und/oder
Enddatum ein Verkehrstag sind oder nicht.
5.Startdatum und Enddatum (und somit implizit
auch die Verkehrstage in der Bitleiste) dürfen nicht
außerhalb der angegebenen Fahrplanperiode
(Attribut <TimetableYear> im Identifier des
Objektes, für das der Kalender gilt) liegen.
I....I....I....Validity PlannedCalendar ValidityPeriod Verkehrszeitraum der Der Verkehrszeitraum muss innerhalb der Gültigkeit 1
Period Zugtrasse bzw. der des angegebenen Jahresfahrplans liegen. Das
Fahrlage Fahrplanjahr ergibt sich aus der Angabe im Attribut
„TimetableYear“ im
Identifier des Objektes, für das der Kalender gilt
I....I....I....I....Start ValidityPeriod StartDateTime Startdatum des 1. Das Feld hat das Format "dateTime" 1 dateTim
DateTime Verkehrszeitraums
2. Nur die Datumkomponente wird benutzt
e
3. Die Zeitkomponente ist nicht relevant, Sie ist
immer mit "00:00:00" zu belegen
51
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 52

DB Intern / DB internal
I....I....I....I....EndD ValidityPeriod EndDateTime Enddatum des 1. Das Feld hat das Format "dateTime" 0..1 dateTim
ateTime Verkehrszeitraums
2. Nur die Datumkomponente wird benutzt
e
3. Die Zeitkomponente ist nicht relevant, Sie ist
immer mit "00:00:00" zu belegen; die Gültigkeit des
Enddatums geht jedoch immer bis 23:59:59.
4. Bei einem eintägigen Verkehrszeitraum kann die
Angabe des Enddatums entfallen oder den gleichen
Wert wie das Startdatum haben.
I....I....I....OffsetT PlannedCalendar OffsetToReferenc Angabe der Anzahl der Der ReferenceCalendar (bzw. der 1 integer -1
oReference e Verschiebungstage ReferenceTrainIDSubCalendar als eine Teilmenge
zwischen dem davon) enthält die geplanten Verkehrstage der
PlannedCalendar und dem durch den ReferenceTrain repräsentierten
Verkehrsdienstleistung. Die Kalender der
ReferenceCalendar bzw.
tatsächlichen Züge, deren Routen, PathRequests
dem
und Trassen sind i. d. R. identisch und
ReferenceTrainIDSubCalen
repräsentieren innerhalb des jeweiligen
dar des ReferenceTrains
Geltungszeitraumes die gleichen Verkehrstage. Der
OffsetToReference hat in diesem Fall den Wert „0“.
In ausgewählten Situationen kann es jedoch zu einer
Verschiebung der tatsächlichen Züge bzw. deren
Routen, PathRequests oder Trassen auf den Vortag
oder einen Folgetag kommen. Diese Verschiebung
wird durch OffsetToReference = -1 bei Verschiebung
auf den Vortag oder durch OffsetToReference >= 1
bei Verschiebung auf einen Folgetag ausgedrückt.
Der Defaultwert ist „0“.
Tabelle 17: PlannedCalender Datenfelder
5.8.4 Datenfelder der Struktur „ReferenceTrainIDSubCalendar“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor-kommen Typ Länge Muster
I....ReferenceTrainIDSubCalendar ReferenceTrainIDSubCalendar Verkehrstageregelung des 0..1
ReferenceTrains
I....I....BitmapDays ReferenceTrainIDSubCalendar BitmapDays Bitleiste der Verkehrstage des 1. Muster, welches angibt, an welchen Tagen innerhalb der ValidityPeriod ein Zug/eine 0..1 string 740 [0-1]{1,740}
ReferenceTrains Verkehrsdienstleistung dem ReferenceTrain zugeordnet ist.
2. Das Muster wird als Zeichenkette mit den Zeichen "1" (Verkehrstag) und "0" (kein
Verkehrstag) dargestellt.
3. Die Bitleiste muss immer angegeben werden, wenn die ValidityPeriod mehr als einen Tag
umfasst.
4. Die Bitleiste muss genauso lang sein, wie es Kalender-tage zwischen <StartDateTime> und
<EndDateTime> (jeweils inklusive) gibt
5. Somit entspricht das erste Zeichen in der Bitleiste dem Startdatum und das letzte Zeichen
dem Enddatum, unabhängig davon, ob Start- und/oder Enddatum ein Verkehrstag sind oder
nicht.
6. Startdatum und Enddatum (und somit implizit auch die Verkehrstage in der Bitleiste)
dürfen nicht außerhalb der angegebenen Fahrplanperiode (Attribut <TimetableYear> im
Identifier des ReferenceTrains) liegen.
I....I....ValidityPeriod ReferenceTrainIDSubCalendar ValidityPeriod Verkehrszeitraum des Der Verkehrszeitraum muss innerhalb der Gültigkeit des angegebenen Jahresfahrplans liegen. 1
ReferenceTrains Das Fahrplanjahr ergibt sich aus der Angabe im Attribut „TimetableYear“ im Identifier des
ReferenceTrains)
52
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 53

DB Intern / DB internal
I....I....I....StartDateTime ValidityPeriod StartDateTime Startdatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit "00:00:00" zu belegen
I....I....I....EndDateTime ValidityPeriod EndDateTime Enddatum des Verkehrszeitraums 1 . Das Feld hat das Format "dateTime" 0..1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit "00:00:00" zu belegen; die Gültigkeit
des Enddatums geht jedoch immer bis 23:59:59.
4. Bei einem eintägigen Verkehrszeitraum kann die Angabe des Enddatums entfallen oder den
gleichen Wert wie das Startdatum haben.
Tabelle 18: ReferenceTrainIDSubCalendar Datenfelder
5.9 AffectedSection
5.9.1 Übersicht über die Struktur „AffectedSection“
Die in der Struktur „AffectedSection“ angegebenen Angaben zu Start- und Zielbahnhof sowie zur Verkehrszeitregelung entsprechen jeweils denen des referenzierten Paths.
Abbildung 18: AffectedSection Struktur
53
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 54

DB Intern / DB internal
5.9.2 Datenfelder der Struktur „AffectedSection“
Struktur Struktur- Attribut Beschreibung Bemerkungen / Regeln Vor-kommen Typ Länge Min- Max Ausprägungen Muster Relevant
element Wert Wert
I....AffectedSection AffectedSection Indikation für den Empfänger, dass • Wenn die Trasse des GPE / FPE nicht konstruiert 0..N
nicht der gesamte Path betroffen ist
werden konnte, ist der gesamtePath betroffen. Es
dürfen keine Teillaufwegen angegeben werden
• Angabe ist im Rahmen dieser Schnittstelle Pflicht für
die Nachricht PathNotAvailable
I....I....StartOfSection AffectedSection StartOfSection Erste Betriebsstelle (Startpunkt) des 1 M
betroffenen Abschnitts des Zuglaufs
bzw. der Zugtrasse
I....I....I....CountryCodeIS StartOfSection CountryCodeISO CountryCode des Ist nur in Verbindung mit dem <LocationPrimaryCode> 1 string 2 M
O LocationPrimaryCodes eindeutig.
I....I....I....LocationPrimar StartOfSection LocationPrimaryCode LocationPrimaryCode Eindeutige EU-weite Identifikation einer Betriebsstelle. 1 Positive 5 1 99999 M
yCode
Wird von jedem Land selbständig vergeben.
integer
Ist nur in Verbindung mit dem <CountryCodeISO> eindeutig.
Geplante Betriebsstellen haben immer die
Codierung 99999
I....I....I....PrimaryLocatio StartOfSection PrimaryLocationName Name des TLP Muss bei in Planung befindlichen Betriebsstellen, für die noch 0..1 string 255 bM
nName kein PLC vergeben wurde, immer gefüllt sein.
I....I....I....LocationSubsid StartOfSection LocationSubsidiaryIdentifica LocationSubsidiary Identifikation Die LocationSubsidiary Identifikation wird in dieser Struktur nicht 0..1 K
iaryIdentification tion genutzt
I....I....I....I....LocationSub LocationSubsidiaryId LocationSubsidiaryCode 1 string 10 K
sidiaryCode entification
I....I....I....I....I....Location LocationSubsidiaryCo LocationSubsidiaryTypeCod 1 K
SubsidiaryTypeCode de e
I....I....I....I....AllocationC LocationSubsidiaryId AllocationCompany 1 string 4 0001 ZZZZ [0-9A-Z]{4} K
ompany entification
I....I....I....I....LocationSub LocationSubsidiaryId LocationSubsidiaryName 0..1 string 255 K
sidiaryName entification
I....I....I....BookedLocatio StartOfSection BookedLocationDateTime Angabe der Abfahrt-/Durchfahrtszeit Angabe wird nur in betrieblichen Meldungen der betrieblichen 0..1 dateTime n/a
nDateTime mit Tagesdatum Phase bei Nutzung von Tagesobjekten der Zugtrasse verwendet.
I....I....I....BookedLocatio StartOfSection BookedLocationTime Angabe der Abfahrt-/Durchfahrtszeit Angabe wird nur in Meldung des Planungsprozesses mit Bezug 0..1 Time bM
nTime auf eine Zugtrasse verwendet. Die Angabe ist immer dann zu
befüllen, wenn der als StartOfSection ausgewählte TLP in der
referenzierten Zugtrasse mehrfach vorkommt.
I....I....EndOfSection AffectedSection EndOfSection Letzte Betriebsstelle (Endpunkt) des 1 M
betroffenen Abschnitts des Zuglaufs
bzw. der Zugtrasse
I....I....I....CountryCodeIS EndOfSection CountryCodeISO CountryCode des Ist nur in Verbindung mit dem <LocationPrimaryCode> 1 string 2 M
O LocationPrimaryCodes eindeutig.
I....I....I....LocationPrimar EndOfSection LocationPrimaryCode LocationPrimaryCode Eindeutige EU-weite Identifikation einer Betriebsstelle. 1 Positive 5 1 99999 M
yCode
Wird von jedem Land selbständig vergeben.
integer
Geplante Betriebsstellen haben immer die
Codierung 99999
54
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 55

DB Intern / DB internal
I....I....I....PrimaryLocatio EndOfSection PrimaryLocationName Name des LocationPrimaryCode Muss bei in Planung befindlichen Betriebsstellen, für die noch 0..1 string 255 bM
nName kein PLC vergeben wurde, immer gefüllt sein.
I....I....I....LocationSubsid EndOfSection LocationSubsidiaryIdentifica LocationSubsidiary Identifikation Die LocationSubsidiary Identifikation wird in dieser Struktur nicht 0..1 K
iaryIdentification tion genutzt
I....I....I....I....LocationSub LocationSubsidiaryId LocationSubsidiaryCode 1 string 10 K
sidiaryCode entification
I....I....I....I....I....Location LocationSubsidiaryCo LocationSubsidiaryTypeCod 1 K
SubsidiaryTypeCode de e
I....I....I....I....AllocationC LocationSubsidiaryId AllocationCompany 1 string 4 0001 ZZZZ [0-9A-Z]{4} K
ompany entification
I....I....I....I....LocationSub LocationSubsidiaryId LocationSubsidiaryName 0..1 string 255 K
sidiaryName entification
I....I....I....BookedLocatio EndOfSection BookedLocationDateTime Angabe der Ankunfts-/Durchfahrtszeit Angabe wird nur in betrieblichen Meldungen der betrieblichen 0..1 dateTime n/a
nDateTime mit Tagesdatum Phase bei Nutzung von Tagesobjekten der Zugtrasse verwendet.
I....I....I....BookedLocatio EndOfSection BookedLocationTime Angabe der Ankunfts-/Durchfahrtszeit Angabe wird nur in Meldung des Planungsprozesses mit Bezug 0..1 Time bM
nTime auf eine Zugtrasse verwendet. Die Angabe ist immer dann zu
befüllen, wenn der als EndOfSection ausgewählte TLP in der
Zugtrasse mehrfach vorkommt.
I....I....OperationalTrain AffectedSection OperationalTrainNumberId Struktur dient u. a. der Übermittlung der OTN, die bei der 1 M
NumberIdentifier entifier Übergabe von der vorhergehenden oder nachfolgenden
Infrastruktur verwendet wird.
I....I....I....OperationalTra OperationalTrainNu OperationalTrainNumber Betroffene Zugnummer Es wird die für den durch StartOfSection und EndOfSection 0..1 string 6 [0-9]{1,6} M
inNumber mberIdentifier definierten Abschnitt geltende OTN angegeben. In der
ReceiptConfirmationMessage wird entweder die in der
referenzierten Nachricht angegebene OTN wiederholt.
I....I....I....ScheduledTime OperationalTrainNu ScheduledTimeAtHandover Geplante Abfahrtszeit bei Ausbruch Angabe der geplanten Abfahrtszeit an der in der Struktur 0..1 dateTime n/a
AtHandover mberIdentifier aus dem Netz EndOdSection angegebenen Betriebsstelle, sofern diese ein
Handover-Point ist, d. h. die Betriebsstelle ist ein
Übergabepunkt zur nachfolgenden Nachbar-Infrastruktur.
I....I....I....ScheduledDate OperationalTrainNu ScheduledDateTimeAtTrans Geplante Ankunftszeit bei Einbruch in Angabe der geplanten Ankunftszeit an der in der Struktur 0..1 dateTime n/a
TimeAtTransfer mberIdentifier fer das Netz StartSection angegebenen Betriebsstelle, sofern diese ein
Handover-Point ist, d. h. die Betriebsstelle ist ein
Übernahmepunkt zur vorhergehenden Nachbar-Infrastruktur.
I....I....PlannedCalendar AffectedSection PlannedCalendar Verkehrstageregelung bzw. In den Stellungnahmen des Kunden muss die 1 M
betroffene Verkehrstage Verkehrstageregelung bzw. die betroffenen Verkerhstage den
Angaben des zuvor empfangenen GPE / GPE nach
Stellungnahme entsprechen
I....I....I....BitmapDays PlannedCalendar BitmapDays Bitleiste der betroffenen Die Struktur muss angegeben werden, wenn die ValidityPeriod 0..1 string 740 [0-1]{1,740} M
Verkehrstage mehr als einen Tag umfasst.
I....I....I....ValidityPeriod PlannedCalendar ValidityPeriod Betroffener Zeitabschnitt 1 M
I....I....I....I....StartDateTi ValidityPeriod StartDateTime Erster Verkehrstag des betroffenen 1 dateTime M
me Zeitabschnitts
I....I....I....I....EndDateTim ValidityPeriod EndDateTime Letzter Verkehrstag des betroffenen 0..1 dateTime M
e Zeitabschnitts
55
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 56

DB Intern / DB internal
I....I....I....OffsetToRefere PlannedCalendar OffsetToReference Angabe der Anzahl der Der ReferenceCalendar (bzw. der ReferenceTrainIDSubCalendar 1 integer -1 M
nce Verschiebungstage zwischen dem als eine Teilmenge davon) enthält die geplanten Verkehrstage
PlannedCalendar und dem der durch den ReferenceTrain repräsentierten
ReferenceCalendar bzw. dem Verkehrsdienstleistung. Die Kalender der tatsächlichen Züge,
deren Routen, PathRequests und Trassen sind i. d. R. identisch
ReferenceTrainIDSubCalendar des
ReferenceTrains
und repräsentieren innerhalb des jeweiligen
Geltungszeitraumes die gleichen Verkehrstage. Der
OffsetToReference hat in diesem Fall den Wert „0“. In
ausgewählten Situationen kann es jedoch zu einer Verschiebung
der tatsächlichen Züge bzw. deren Routen, PathRequests oder
Trassen auf den Vortag oder einen Folgetag kommen. Diese
Verschiebung wird durch OffsetToReference = -1 bei
Verschiebung auf den Vortag oder durch OffsetToReference >=
1 bei Verschiebung auf einen Folgetag ausgedrückt.
Der Defaultwert ist „0“.
I....I....NetworkSpecificP AffectedSection NetworkSpecificParameter Spezifische Parameter eines EIU 0..N K
arameter
I....I....I....Name NetworkSpecificPara Name Generischer Name des Parameters 1 string 255 M
meter
I....I....I....Value NetworkSpecificPara Value Wert des Parameters 1 string 255 M
meter
Tabelle 19: AffectedSection Datenfelder
5.10 InterruptionInformation
5.10.1 Übersicht über die Unterstruktur „InterruptionInformation“
Diese Struktur ist nur in der Nachricht „PathNotAvailableMessage“ für den Geschäftsvorfall „GPE / GPE nach Stellungnahme / FPE nicht konstruierbar“ anwendbar. Die Struktur dokumentiert zusätzliche Informationen bei
Nichtkonstruierbarkeit einer Zugtrasse.
Abbildung 19:InterruptionInformation Struktur
5.10.2 Datenfelder der Unterstruktur „InterruptionInformation“ Struktur
Struktur Struktur- Attribut Beschreibung Bemerkungen / Regeln Vor-kommen Typ Länge Min- Max Ausprägungen Muster Relevant
element Wert Wert
I....InterruptionInformati InterruptionInformation Ergänzende Informationen für die 1 M
on nicht konstruierbare Trasse
I....I....InterruptionDescri InterruptionInformati InterruptionDescription Freitext zur Begründung der Begründung für die Nichtkonstruierbarkeit 0..1 string 255 M
ption on Nichtkonstruierbarkeit
I....I....InterruptionDateT InterruptionInformati InterruptionDateTime Tag und Uhrzeit, wann die Zugtrasse Wird in der Planungsphase beim Senden der 0..1 dateTime n/a
ime on unterbrochen ist „PathNotAvailableMessage“ nicht genutzt
I....I....InterruptionReaso InterruptionInformati InterruptionReason Grund für die Unterbrechung Strukturierte Begründungen 0..1 token Gemäß UIC-Merkblatt n/a
n on 450-2 Anhang C
56
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 57

DB Intern / DB internal
I....I....InternalReference InterruptionInformati InternalReferenceIdentifier EIU-interne Referenz Wird aktuell nicht genutzt 0..1 string 255 n/a
Identifier on
Tabelle 20: InterruptionInformation Datenfelder
5.11 NetworkSpecificParameter
5.11.1 Übersicht über die Struktur „NetworkSpecificParameter“
Diese Struktur wird für spezifische Attribute im Zuständigkeitsbereich eines EIU genutzt, die nicht in der Menge der Standard-Attribute von TAF-TSI/TAP-TSI enthalten sind.
Diese EIU-spezifischen nationalen Parameter können vom jeweiligen EIU festgelegt bzw. definiert werden und sind in den Nachrichten zur Abwicklung der Geschäftsvorfälle im Zuständigkeitsbereich des entsprechenden EIU zu nutzen. In
diesem Kapitel werden nur die im Rahmen dieser Schnittstelle geänderten NSP aufgelistet. Die weiteren NSP sowie deren Bedeutung sind der Anlage 1 zu entnehmen.
Die Struktur „NetworkSpecificParameter“ ist eine generische Struktur, die selbst eine Wiederholstruktur ist und nur aus den beiden folgenden Attributen besteht:
 Name: Name des Parameters
 Value: Wert des Parameters
Abbildung 20: NetworkSpecificParameter Struktur
5.11.2 Datenfelder der Struktur „NetworkSpecificParameter“
Die Datenfelder sind analog zur Anlage 1 zu verwenden.
5.11.3 Vorgehensweise bei der Nutzung nationaler Parameter
Die Vorgehensweise bei der Nutzung ist analog zu Anlage 1 anzuwenden. Es gelten darüber hinaus die Hinweise aus Kapitel 5.6.1.2
5.11.4 Befüllung der Struktur
 Für jeden erforderlichen oder gewünschten Parameter ist jeweils eine neue Struktur „NetworkSpecificParameter“ erforderlich. Das Format der Spalten „name“ und „value“ ist immer „string“ mit der angegebenen Länge.
 In den folgenden Kapiteln sowie in der Anlage 1 wird beschrieben, welchen Wert der jeweilige Parameter haben darf. Der gewünschte Wert muss in das Attribut „value“ übertragen werden.
 Die NSP auf Message-Ebene dürfen gegenüber dem vorher gesendeten Produkt nicht verändert werden.
 Alle nicht verwendeten NSP sind aktuell noch in der Liste enthalten, werden beim nächsten Update jedoch entfernt.
5.11.5 Attributanpassungen der Struktur „NetworkSpecificParameter“ auf Message-Ebene ggü. Anlage 1
Erfolgt eine Angabe eines der NSP der nachfolgenden Tabelle, so gilt sie für die gesamte Nachricht, d. h. für die gesamte Trasse.
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägung EVU EIU ➔
mmen t en ➔ EIU EVU
marktProdukt Produkt, welches von DB InfraGO angeboten wird In diesem Feld ist das Produkt für das GPE/ GPE nach Stellungnahmebzw. FPE anzugeben. 1 string 3 BAU = Durch Bau M M
Sowohl GPE, GPE nach Stellungnahme als auch FPE, sowie SN auf ein GPE werden über betroffene
die Ausprägung BAU gekennzeichnet (im Element TypeOfInformation erfolgt dann die Trasse zu der in
Unterscheidung zwischen GPE und FPE). Weitere Ausprägungen werden im Rahmen der Nachricht ein
dieser Schnittstelle nicht verwendet. GPE / FPE bzw.
SN versendet
wird.
trassenpreis Trassenpreis in Euro [€] 1. Das Feld enthält den Gesamtpreis der Trasse in Euro. 0..1 string 15 [ ]*[0-9]+.[0-9][0- n/a n/a
2. Der Preis wird mit zwei Nachkommastellen geliefert. 9]a
3. Wird nicht bei den Geschäftsvorfällen Zurückweisung, Nichtkonstruierbarkeit und bei
Ergebnissen der Produkte FZB und FPS geliefert.
4. Wird bei einer Stornierung (PDM mit MS = 3 (Deletion)) nicht geliefert
linkLeistungsbeschreibung URL-Link, der zur Darstellung der Zusammensetzung des 1. Wird nur bei Lieferung des Attributs „trassenpreis“ geliefert 0..2 String 255 n/a n/a
Trassenpreises führt 2. Der erste Link verweist auf ein pdf-Dokument
3. Der zweite Link verweist auf ein csv-Dokument
4. Wird bei einer Stornierung (PDM mit MS = 3 (Deletion)) nicht geliefert
57
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 58

DB Intern / DB internal
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägung EVU EIU ➔
mmen t en ➔ EIU EVU
betroffenheitBau Betroffenheit durch Baumaßnahme Kennzeichnung des Trassenangebots durch DB InfraGO, wenn baubedingt eine 0..1 string true, false n/a n/a
veränderte Trassierung erfolgte. Default-Wert: False.
kzLaermschutz Kennzeichnung des Zuges im Bereich der BR Deutschland gemäß Entsprechend dem Gesetz zum Verbot des Betriebs lauter Güterwagen 1 String 1 1 - Leiser Zug; M M
Schienenlärmschutzgesetz (Schienenlärmschutzgesetz - SchLärmschG) ist das EVU innerhalb der BR Deutschland 2 - lauter Zug;
verpflichtet, Güterzüge mit lauten Güterwagen zu kennzeichnen. Die Angabe gilt für den
gesamten Zuglauf innerhalb der BRD und ist in allen Trassenanmeldungen verpflichtend
anzugeben, wobei Reisezüge und Tfz-Fahrten dem Grunde nach als „Leiser Zug“
einzustufen sind. Ergänzend sind die in den SNB genannten besonderen Bestimmungen
zu beachten.
kzSicherheit Kennzeichnung des Zuges im Bereich der BR Deutschland gemäß Gem. § 62 Abs (2) BPolG ist das EVU zur Information über sicherheitsrelevante Züge (z. B. 0..1 String 5 true, false K K
BPolG Reisesonderzüge zu Großereignissen, Militär- und Castortransporte) verpflichtet, zu
denen DB InfraGO Daten für die zuständigen Sicherheitsbehörden bereitstellen muss.
Das EVU nimmt in diesem Element nur eine Kennzeichnung vor. Weitere ergänzende
Angaben sind in der Trassenbestellung nicht erforderlich, sondern werden vom EVU
direkt der zuständigen Sicherheitsbehörde zur Verfügung gestellt.
baukorridor Baukorridor In dem Feld „value“ des NSP können gemäß dem vorgegebenen Muster als 0..5 string 9 <Nr,Art>; n/a n/a
unverbindliche Bauinformation die Nummer des Baukorridors (Nr) und die Art der Nr = max. 7
Auswirkung des Baukorridors (Art) angegeben werden, sofern die Trassierung durch Zeichen,
einen Baukorridor beeinflusst wird. Die vorgegebene Struktur ist immer mit beiden alphanummerisc
Angaben vollständig zu befüllen. Die beiden Werte sind durch „,“ zu trennen. h; Art = 1
Für die Beschreibung der Art der Bauauswirkung ist einer der folgenden Werte Zeichen
auszuwählen: A = Abweichungen vom Laufweg oder B = Beibehaltung des Laufwegs.
Es ist die Angabe von max. 5 Baukorridoren zulässig.
PreisInformationen Die nachfolgenden 6 NSP sind abrechnungsrelevante Informationen
oedlaKennzeichen ÖDLA-Kennzeichen Kennzeichnung von Verkehren, die auf Grundlage eines öffentlichen 0..1 string 5 true, false n/a n/a
Dienstleistungsauftrages (ÖDLA) bestellt werden, durch das bestellende EVU, Angabe nur
bei verkehrsArtKunde = SPNV; Default-Wert: False.
rabattNr Von DB InfraGO vergebene Rabattprogramm-Nummer zur Rabattprogrammnummern, wie etwa die Neuverkehrsrabattnummer sind vorab durch 0..5 String 32 n/a n/a
Inanspruchnahme eines Rabatts den Kunden beim Vertrieb der DB InfraGO zu beantragen. Die Angabe der
Rabattnummer erfolgt auf Messageebene und ist in der Trassenerstanmeldung sowie
ggf. in den Folgeaufträgen Änderung vor Angebotsabgabe oder Änderung nach
Vertragsabschluss zu wiederholen, sofern die Rabattzuordnung weiterhin zutreffend ist.
verkehrsArtKunde Angabe der Verkehrsartbezeichnung des Kunden Angabe der durch den Kunden gewählten Verkehrsart. Ist Berechnungsgrundlage für den 1 string 4 [A-Z] SPFV = Schienen- n/a n/a
Trassenpreis Personen-
Fernverkehr
SPNV =
Schienen-
Personen-
Nahverkehr
SGV = Schienen-
Güterverkehr
verkehrsArtKundeZusatz Zusätzliche Angaben zur Verkehrsartbezeichnung des Kunden Ergänzende Informationen des Kunden zur Ausprägung des Verkehrs (z.B. 0..1 String 40 Siehe n/a n/a
Nostalgieverkehr, Charterverkehr). Ist neben der bestellten Verkehrsart-Kunde eine Stammdaten
weitere Berechnungsgrundlage für den Trassenpreis. Kapitel Fehler!
Für die Art = Nostalgiezug kann auch der TrafficType-Code 16 genutzt werden. Die Verweisquelle
Ausprägung „Punkt-zu-Punkt“ darf nur in Verbindung mit der Ausprägung „ZF 30“ im konnte nicht
Attribut „flexibilitaet“ angegeben werden. gefunden
werden.
NSP könnte ggf. zukünftig noch entfallen, falls eine Erweiterung der Kodierungen für
TrainType bzw. TrafficType erfolgt. In PCS aktuell als Code 3375 vorhanden.
flexibilitaet Zeitliche und räumliche Flexibilität Optionale Auswahl einer gewünschten zeitlichen und/oder räumlichen Flexibilität bei der 0..1 string 6 [A-Z0-9\s]{1,6} Siehe n/a n/a
Konstruktion durch das bestellende EVU. Gilt nur für die Verkehrsart SGV und nur für Stammdaten
Trassenanmeldungen zum Netzfahrplan. Gilt nicht für Tfz-Fahrten. Die Auswahl der Kapitel Fehler!
räumlichen Flexibilität beinhaltet auch die zeitliche Flexibilität +/- 120 min. Erfolgt keine Verweisquelle
Angabe gelten die Konstruktionsspielräume gemäß SNB. konnte nicht
Bei Auswahl räumliche Flexibilität RF 120 dürfen innerhalb des Zuglaufs auf dem Netz der gefunden
DB InfraGO AG keine Zwischenbetriebsstellen angegeben werden. Ausnahmen wegen werden.
Lenkzeiten, Personalwechsel und Übergängen auf fremde Infrastruktur siehe SNB.
58
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 59

DB Intern / DB internal
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägung EVU EIU ➔
mmen t en ➔ EIU EVU
Die Ausprägung „ZF 30“ darf nur in Verbindung mit der Ausprägung „Punkt-zu-Punkt“ im
Attribut „verkehrsArtKundeZusatz“ angegeben werden. In PCS aktuell als Code 3373
vorhanden.
betrieblichePrio Betriebliche Priorisierung Optionale Angabe in Trassenbestellungen der Verkehrsarten SGV und SPFV, außer für 0..1 string 15 SehrhohePrio n/a n/a
Tfz- und Leerfahrten. Die Angabe kann in der PathRequestMessage erfolgen, wenn die hohePrio
zutreffende Zuggattung, z. B. für Expresstrassen (sehrhohePrio – nur für SGV und SPFV)
bzw. Schnelltrassen (hohePrio - nur für SGV), mindestens einmal im Zuglauf innerhalb
des Netzes der DB InfraGO angegeben wurde.
Erfolgt keine Angabe: Kein expliziter Priorisierungsanspruch.
Objektbezeichnungen des Kunden Die nachfolgenden 3 NSP werden ausschließlich als zusätzliche Angabe im n/a
Kundenfrontend des Bestellportals genutzt und angezeigt und können in Nachrichten des
EVU zusätzlich angegeben werden. Sofern einer der NSP in einer Nachricht vom EVU an
DB InfraGO vorhanden ist, wird die Angabe in der Antwortnachricht von DB InfraGO an
das EVU unverändert zurückgegeben. Sie Angaben haben keine fachliche Relevanz und
werden von DB InfraGO generell nicht verwendet.
bPBezeichnungRequest Textliche Bezeichnung für ein PathRequest-Objekt, die im DB Freitexteingabe zur sprechenden Bezeichnung eines PathRequest-Objekts in der GUI des 0..1 string 32 n/a n/a
InfraGO Bestellportal genutzt werden kann DB InfraGO Bestellportals.
bPBezeichnungReferenceT Textliche Bezeichnung für den ReferenceTrain, die im DB InfraGO Freitexteingabe zur sprechenden Bezeichnung eines ReferenceTrains in der GUI des DB 0..1 string 32 n/a n/a
rain Bestellportal genutzt werden kann InfraGO Bestellportals.
bPBezeichnungRoute Textliche Bezeichnung für ein Route-Objekt, die im DB InfraGO Freitexteingabe zur sprechenden Bezeichnung eines Route-Objekts in der GUI des DB 0..1 string 32 n/a n/a
Bestellportal genutzt werden kann InfraGO Bestellportals.
zugKzGo Zugkennzeichen GO Kennzeichnung eines Güterzugs ohne nennenswerten Grenzaufenthalt 0..1 string 2 GO n/a n/a
zeitrahmen Zeitrahmen einer RV-Kapazität Gibt den Zeitrahmen einer RV-Kapazität an und darf nur für das Marktprodukt „RVK“ 0..1 String 3 3 720 [0-9]{1-3} n/a n/a
genutzt werden. Der Zeitrahmen entspricht der vertraglich vereinbarten symmetrischen
Bandbreite der reservierten Kapazität. Die Angabe erfolgt in Anzahl Minuten, jeweils +/-
in Relation zur gedachten mittigen Ideallinie einer Trasse. Maximal zulässiger Wert 720
min.; minimale Werte: S-Bahn (auf reinen S-Bahn-Strecken) 3 min; Personenverkehr 5
min; Güterverkehr 30 min.
Tabelle 21: NetworkSpecificParameter Message-Ebene Datenfelder
5.11.6 Attribute der Struktur „NetworkSpecificParameter“ auf Location-Ebene
Die Attribute auf Location-Ebene sind analog zur Anlage 1 und werden daher hier nicht weiter definiert. Die Angabe ist in der PDM durch das EIU verpflichtend entsprechend den Vorgaben aus Anlage 1.
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägungen Path in Path in
mmen t PR PD
zugKzAk Zugkennzeichen für Automatische Kupplung Zug verkehrt mit automatischer Kupplung. Wurde der NSP mit dem 0..1 string AK = Automatische Kupplung vorhanden K K
Wert „AK“ verwendet und soll diese Angabe widerrufen werden, NK = Keine automatische Kupplung (mehr)
weil sie nicht mehr gilt, so ist (nur in diesem Fall) der NSP mit der vorhanden
Ausprägung „NK“ anzugeben.
Die Angabe „AK“ gilt somit, sofern sie angegeben wird, ab dem
betreffende ZLP/TLP bis zum Widerruf durch erneute Angabe des
NSP mit der Ausprägung „NK“.
zuggattung Zuggattungsangaben Die nachfolgenden 3 Attribute beschreiben die Zuggattung. Es 0..1
müssen zwingend immer alle 3 Attribute angegeben werden. Die
Angabe muss immer am ersten ZLP/TLP einer Fahrlage/Trasse
erfolgen und gilt bis zum nächsten ZLP/TLP, an welchem eine
erneute Angabe erfolgt, oder bis zum letzten ZLP/TLP.
zggHauptnummer Hauptnummer der Zuggattung 1 string 2 Zuggattungen der DB InfraGO gemäß M M
Zuggattungsverzeichnis Ril 402.0208A01;
siehe Stammdaten
zggUnternummer Unternummer der Zuggattung 1 string 1 Zuggattungen der DB InfraGO gemäß M M
Zuggattungsverzeichnis Ril 402.0208A01;
siehe Stammdaten
zggKurzbez Kurzbezeichnung zur Zuggattung. Bei diesem Feld handelt es sich um die zur Zuggattung gehörende 1 string 10 Zuggattungen der DB InfraGO gemäß M M
Zuggattungsproduktbezeichnung. Zuggattungsverzeichnis Ril 402.0208A01;
In PCS aktuell als Code 3377 vorhanden. siehe Stammdaten
richtungswechselGrund Begründung des Richtungswechsels Ergänzende Angabe einer Begründung bei Richtungswechsel; kann 0..1 string 255 K n/a
in Verbindung mit der Nutzung der TrainActivityCodes 0005 bis
0007 für erforderliche Richtungswechsel angegeben werden.
59
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 60

DB Intern / DB internal
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägungen Path in Path in
mmen t PR PD
Die Angabe gilt lokal am ZLP/TLP.
ueberhoehungsfehlbetrag Angaben zum Überhöhungsfehlbetrag (erhöhte Angabe, ob die Fahrzeuge des Zuges für den 0..1 string 1 0 = Fahrzeuge des Zuges für K K
Seitenbeschleunigung) Überhöhungsfehlbetrag uF > 130 mm zugelassen sind oder nicht. Überhöhungsfehlbetrag uF > 130 mm nicht
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses zugelassen
NSP. 1 = Fahrzeuge des Zuges für
Überhöhungsfehlbetrag uF > 130 mm
zugelassen
streckenAngabe Streckenangabe bestehend aus Streckennummer im Die Angabe des genutzten Streckengleises erfolgt getrennt durch 0..1 string 6 Siehe Stammdaten n/a K
Konstruktionsbereich der DB InfraGO (VzG) bis zum nächsten ZLP einen Bindestrich am Ende. Die Streckengleisangabe hat folgende z. B. 6311-1
und Bezeichnung des genutzten Streckengleises Bedeutung:
0 – eingleisige Strecke
1 – Nutzung des rechten Gleises der Strecke in
Streckendefinitionsrichtung (aufsteigende Kilometrierung)
2 - Nutzung des rechten Gleises der Strecke entgegen
Streckendefinitionsrichtung (fallende Kilometrierung)
Die Angabe gilt ab dem ZLP/TLP für den nachfolgenden
Streckenabschnitt bis zum nächsten ZLP/TLP.
haltabwText sonstige Gründe für Kundenhalte Dieses Feld darf gefüllt werden, wenn das Attribut 0..1 string 40 bM bM
<TrainActivityCode> mit dem Code 0009, 0020 oder 0027 gefüllt
ist.
Die Angabe gilt lokal für den ZLP/TLP.
gleisNummer Vorgabe einer Gleisnummer oder Gleisgruppe Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 10 n/a n/a
traktionDampf Art der Befeuerung bei der Traktionsart Dampflok Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 1 R = Rost n/a n/a
O = Öl
fahrtrichtDampf Fahrtrichtung des Tfz bei der Traktionsart Dampflok Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 1 K = Kessel voraus n/a n/a
T = Tender voraus
hgRueckDampf Höchstgeschwindigkeit der rückwärtsfahrenden Dampflok in Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 3 1 999 n/a n/a
Kilometer pro Stunde [km/h]
richtungDesZugesBeiAbfahrt Richtung des Zuges (Zugstellung) bei der Abfahrt Vom EVU gewünschte Richtung des Zuges bei der Abfahrt eines 0..1 string 15 K n/a
Zuges in dem ZLP, zu welchem die Angabe erfolgt;
Richtungsangabe z.B.: PLC, RiL100-Code (RWE–FD), Ausf. Dr.-Neust.
Die Angabe gilt lokal für den ZLP/TLP.
richtungDesZugesBeiAnkunft Richtung des Zuges (Zugstellung) bei der Ankunft Vom EVU gewünschte Richtung des Zuges bei der Ankunft eines 0..1 string 15 K n/a
Zuges in dem ZLP, zu welchem die Angabe erfolgt;
Richtungsangabe z.B.: PLC, RiL100-Code (RWE–FD), Ausf. Dr.-Neust.
Die Angabe gilt lokal für den ZLP/TLP.
abstellung Abstellung Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 24 CRID - n/a n/a
bahnsteiglaengeNichtAusreic Bahnsteig Standardmäßig ist dieses Feld mit "false" gefüllt. 0..1 string true, false n/a K
h Die Angabe gilt lokal für den ZLP/TLP.
länge ist nicht ausreichend
entfernungZumNaechstenTlp Betriebsentfernung bis zum nächsten TLP in Metern [m] Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 8 [Telefonnummer entfernt] n/a n/a
veroeffentlichungsArt Art der Veröffentlichung Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 25 elektronisch = Zug fährt mit elektronischer n/a n/a
Führerraumanzeige
Buchfahrplan(gedruckt) = gedruckter
Buchfahrplan wird erstellt
KeineVeroeffentlichung = keine
Veröffentlichung Buchfahrplan/Fplo durch
DB InfraGO
geplanteBetriebsstelle Geplante Betriebsstelle Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 32 n/a n/a
gefahrgutGanzzug Gefahrgutganzzugkennzeichen Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string true, false n/a n/a
tfzOderLeerfahrt Kennzeichnung der Durchführung der Zugfahrt als Tfz-fahrt oder Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 15 LeerRz n/a n/a
Leerreisezug Tfzf
LOKZUG
Vollzug
Alternative Zugcharakteristik Die nachfolgenden 14 Attribute können für die Angabe von max. 1 0..1 K K
alternativen Zugcharakteristik genutzt werden. Für die
Bespannungsangaben gelten die gleichen Regeln wie für die
60
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 61

DB Intern / DB internal
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägungen Path in Path in
mmen t PR PD
Angabe von Bespannungen in einer Basis-Zugcharakteristik (siehe
Struktur „PlannedJourneyLocation“
Alle Angaben zur Bespannung in der alternativen Zugcharakteristik
sind in der hier aufgeführten Reihenfolge anzugeben, damit eine
eindeutige Zuordnung zwischen azchLocoTypeNumber,
azchTractionMode, azchTrainWeight und azchTrainLength
gewährleistet ist. Die Angaben zur Bespannung sind gemäß den
Einschränkungen in der TractionMode als Gruppe wiederholbar.
Wird eine alternative Zugcharakteristik angegeben, so ist als
Basiszugcharakteristik immer die Zugcharakteristik mit den
fahrdynamisch und fahrplantechnisch ungünstigeren Werten
anzugeben. Verbindlich zu beachten sind dazu die Regeln der Ril
402.0202 Abschn. 2(8).
Die Angabe einer alternativen Zugcharakteristik ist nur für
Geschäftsvorfälle des Produktes „Trasse“ zulässig.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieser
NSP-Gruppe. Die Angaben zum Vorkommen der einzelnen
Attribute gelten innerhalb dieser NSP-Gruppe azch.
Wird die Basis-Zugcharakteristik wiederholt, gilt die alternative
Zugcharakteristik nicht mehr. Sie muss ebenfalls am ZLTP/TLP neu
gesendet werden.
Weichen die gesendeten Stammdaten zu Last und Länge des
Triebfahrzeugs der alternativen Zugcharakteristik von den bei der
DB InfraGO hinterlegten Stammdaten ab, werden die gesendeten
Daten ignoriert.
azchLocoTypeNumber Triebfahrzeug-Baureihe Die zu nutzenden 11 Stellen werden wie folgt in der angegebenen 1..N string 11 1. und 2. Stelle: Bauarttyp gemäß Teil 0 M M
Reihenfolge strukturiert: Anhang 6 der EU-Reg. 2007/756
- 1.Stelle (TypeCode1): Bauarttyp 3. und 4. Stelle: Antriebsart/Traktionsart
- 2. Stelle (TypeCode2): Traktionsart gemäß Teil 8 Anhang 6 der EU-Reg.
2007/756
- 3. und 4. Stelle (CountryCode): Ländercode
5.-11. Stelle: Siehe Stammdaten –
- 5. -8. Stelle (SeriesNumber): Baureihen-Nummer
Triebfahrzeuge)
- 9. – 11. Stelle (SerialNumber): Baureihen-Variantennummer (mit
Siehe auch Element LocoTypeNumber
führenden Nullen bei einstelliger Variantennummer)
Beispiel: 96800442003
azchTractionMode Rolle und Position des Triebfahrzeugs im Zugverband Für alternative Bespannungen sind nur die Rollen (TractionMode) 1..N string 2 Siehe Kapitel „Codelisten“ und Element M M
1x, 2x und 5x zulässig TractionMode
azchTractionWeight Masse des Triebfahrzeugs/der Triebfahrzeuge Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 5 1 99999 Analog Element TractionWeight n/a n/a
azchTractionLength Länge des Triebfahrzeugs/der Triebfahrzeuge Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 string 6 1 99999 Analog Element TractionLength n/a n/a
azchTrainWeight Gesamtmasse des Zuges (Wagenzug + Triebfahrzeug) in Tonnen [t] 1 string 5 1 99999 M M
azchTrainLength Gesamtlänge des Zuges (Wagenzug + Triebfahrzeug) in Meter [m] 1 string 4 1 9999 M M
azchWeightOfSetOfCarriages Masse des Wagenzuges in Tonnen [t] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt (keine Angabe), darf 0..1 string 5 1 99999 bM bM
auch <LengthOfSetOfCarriages> nichtangegeben werden.
2. Keine Angabe für <WeightOfSetOfCarriages> und
<LengthOfSetOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug
oder Triebwagen(-einheit), jeweils ohne zusätzlichen Wagenzug.
Wird mit einem Triebwagen zusätzlich ein Wagenzug befördert,
muss der konkrete Wert für die Masse des Wagenzuges angegeben
werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbeitenden
Tfz gezogen werden, gelten als Wagenzug. Sie dürfen nicht als Tfz
in der Struktur TractionDetails angegeben werden. Deren Masse ist
Teil der Masse des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeitenden Tfz
gezogen werden, sind nicht anzugeben. Sie gelten weder als Tfz
noch als Wagenzug.
azchLengthOfSetOfCarriages Länge des Wagenzugs in Meter [m] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt, darf auch 0..1 string 4 1 9999 bM bM
<LengthOfSetOfCarriages> nicht angegeben werden.
2. Keine Angabe für <WeightOfSetOfCarriages> und
<LengthOfSetOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug
oder Triebwagen(-einheit), jeweils ohne zusätzlichen Wagenzug.
61
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 62

DB Intern / DB internal
Attribut Beschreibung Bemerkungen / Regeln Vorko Typ Länge MinWert MaxWer Muster Ausprägungen Path in Path in
mmen t PR PD
Wird mit einem Triebwagen zusätzlich ein Wagenzug befördert,
muss der konkrete Wert für die Länge des Wagenzuges angegeben
werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbeitenden
Tfz gezogen werden, gelten als Wagenzug. Sie dürfen nicht als Tfz
in der Struktur TractionDetails angegeben werden. Deren Länge ist
Teil der Länge des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeitenden Tfz
gezogen werden, sind nicht anzugeben. Sie gelten weder als Tfz
noch als Wagenzug.
azchTrainMaxSpeed Höchstgeschwindigkeit des Zuges in Kilometern pro Stunde [km/h] Hier wird die technische Höchstgeschwindigkeit des Zuges 1 string 3 1 999 Analog Element TrainMaxSpeed i M M
angegeben. Die Angabe erfolgt in km/h.
azchBrakeType Bremsstellung des Zuges Die Angabe von hydrodynamischen (Zusatz H) und 1 string 2 Siehe Kapitel „Codelisten“ M M
elektrodynamischen (Zusatz E) Bremsen ist nicht gestattet. Bei
Verwendung dieser Bremsart in der Bestellung ist das jeweilige
Äquivalent ohne entsprechenden Zusatz zu verwenden.
azchBrakingRatio vorhandene Bremshundertstel des Zuges Attribut wird abweichend zur Anlage 1 verwendet: 1 string 3 1 999 Analog Element BrakingRatio M M
1. Das EVU gibt in der PathRequestMessage die
garantiert vorhandenen Bremshundertstel des Zuges an
2. In der PathDetailsMessage werden die ursprünglich
bestellten oder in der Konstruktion als voraussichtlich
erforderlich ermittelten höheren Bremshundertstel
angegeben.
azchZggHauptnummer Hauptnummer der Zuggattung Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende 0..1 string 2 Siehe Stammdaten bM bM
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein. Eine alternative Zugcharakteristik ist nur in wenigen
Ausnahmefällen zulässig (z. B. bei Wechsel zwischen
lokbespannten Zug und Triebzug/Triebwagenzug; bei
Doppelstockwagen).
azchZggUnternummer Unternummer der Zuggattung Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende 0..1 string 1 Siehe Stammdaten bM bM
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein
azchZggKurzbez Kurzbezeichnung zur Zuggattung. Bei diesem Feld handelt es sich um die zur Zuggattung gehörende 0..1 string 10 Siehe Stammdaten bM bM
Zuggattungsproduktbezeichnung.
Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein
kundennummerBestellendes Kundennummer des bestellenden EVU (ResponsibleApplicant) Die angegebene Kundennummer muss dem EVU, welches als 0..1 String 5 bM bM
Evu ResponsibleApplicant benannt ist und die Trassenbestellung mit
einer PathRequestMessage übergeben hat, zugeordnet sein.
Bei Angabe in der Struktur TrainInformation der
PathRequestMessage gilt sie so lange innerhalb des Zuglaufs, bis
sie durch eine andere Angabe ersetzt wird. In der Struktur
PathInformation der PathRequestMessage bzw.
PathDetailsMessage muss diese Angabe am ersten Zug-
/Trassenlaufpunkt stehen und gilt für den gesamten Laufweg, d. h.
Änderungen an nachfolgenden ZLP und TLP sind unzulässig,
Wiederholungen zu vermeiden.
kundennummerDurchfuehre Kundennummer des durchführenden EVU (ResponsibleRU) Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 String 5 n/a n/a
ndesEvu
Angabe der Nr. der für den nachfolgenden Streckenabschnitt
vorliegenden Einzelgrenzlastberechnung (sofern zutreffend) und
egbNrGueltigBis Nummer der Einzelgrenzlastberechnung und räumliche Gültigkeit des PLC, bis zu welchem sie gilt. 0..N String 22 <egbNr,PLC> K n/a
Die EGB-Nummer muss mit der Buchstabenfolge „EGB“
beginnen.
<etcsZugart,PL
etcsZugartGueltigBis ETCS-Zugart und räumliche Gültigkeit Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 String 19 Personenzug, Güterzug n/a n/a
C>
etcsZugdaten ID zu den ETCS-Zugdaten Wird im Rahmen dieser Schnittstelle nicht verwendet. 0..1 String 24 n/a n/a
62
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 63

DB Intern / DB internal
5.11.7 Attribute der Struktur „NetworkSpecificParameter“ in der Struktur „AffectedSection“
Attribut Beschreibung Bemerkungen / Regeln Vor-kom- Typ Länge Min-Wert Max- Muster Ausprägungen EVU -> EIU ->
men Wert EIU EVU
kundennummerBestellende Kundennummer des bestellenden EVU 0..1 String 5 M M
sEVU (ResponsibleApplicant)
marktProdukt Produkt, welches von DB InfraGO angeboten In diesem Feld ist das Produkt für das GPE bzw. FPE anzugeben. Sowohl GPE als 1 string 3 BAU = Durch Bau betroffene Trasse M M
wird auch FPE, sowie SN auf ein GPE werden über die Ausprägung BAU gekennzeichnet zu der in der Nachricht ein GPE / FPE
(im Element TypeOfInformation erfolgt dann die Unterscheidung zwischen GPE und bzw. SN versendet wird.
FPE). Weitere Ausprägungen werden im Rahmen dieser Schnittstelle nicht
verwendet.
63
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 64

DB Intern / DB internal
6. Codelisten
6.1 TAF-TSI/TAP-TSI-Codelisten
Übersicht
Die Übersicht zeigt die TAF-TSI/TAP-TSI-Attribute, deren Ausprägungen in der Tabelle „Ausprägungen“ aufgelistet sind. Es werden lediglich ggü. dem Standard angepasste Informationen dargestellt. Die weiteren Angaben gelten
inhaltsgleich aus der Anlage 1.
Die Spalte „Relevant“ weist aus, ob das Attribut in dieser Schnittstelle genutzt wird (= Ja) oder nicht (= n/a). Für „n/a“-Attribute werden in den vom EVU übergebenen Nachrichten enthaltene Werte ignoriert.
Hinweis: Die genannte „Reference Database“ (Common Reference Data = CRD) ist über den Link „https://crd.tsi-cc.eu/CRD/Login-action“ erreichbar und erfordert gültige Anmeldedaten
Attribut Beschreibung Relevant
TypeOfRequest Angabe des verwendeten/ausgeführten Basisprozesses für das GPE bzw. FPE Ja
Tabelle 22: TAF-TSI/TAP-TSI Codelisten Übersicht
Ausprägungen
Attribut Wert TAF-TSI/TAP-TSI Dokumentation Beschreibung Bemerkungen / Regeln Relevant
MessageStatus 1 Creation (Neu-)Erstellung einer Nachricht eines konkreten Nachrichtentyps In einigen Fällen ergibt sich die exakte fachliche Bedeutung erst im Kontext mit den Angaben zu den Ja
(Geschäftsvorfalls). Nachrichtenattributen „TypeOfRequest“ und „TypeOfInformation“.
MessageStatus 2 Modification Modification zu einer bereits übergebenen Nachricht des gleichen In einigen Fällen ergibt sich die exakte fachliche Bedeutung erst im Kontext mit den Angaben zu den Ja
Nachrichtentyps bzw. zum gleichen Objekt Nachrichtenattributen „TypeOfRequest“ und „TypeOfInformation“.
MessageStatus 3 Deletion Löschung bzw. Abmeldung einer bereits übergebenen Nachricht In einigen Fällen ergibt sich die exakte fachliche Bedeutung erst im Kontext mit den Angaben zu den n/a
des gleichen Nachrichtentyps. Nachrichtenattributen „TypeOfRequest“ und „TypeOfInformation“.
MessageType 2001 PathCanceledMessage Stornierung einer Trasse In einigen Fällen ergibt sich die exakte fachliche Bedeutung erst im Kontext mit den Angaben zu den n/a
Nachrichtenattributen „TypeOfRequest“ und „TypeOfInformation“. bzw. der Geschäftsvorfallfolge
MessageType 2002 PathConfirmedMessage Annahme des GPE Ja
MessageType 2003 PathDetailsMessage GPE bzw. FPE Die konkrete fachliche Bedeutung (GPE oder FPE) ergibt sich im Kontext des gewählten Produktes. Ja
MessageType 2004 PathDetailsRefusedMessage Ablehnung, Ablehnung mit Überarbeitung bzw. Berechtigte In einigen Fällen ergibt sich die exakte fachliche Bedeutung bzw. Zulässigkeit der Nutzung erst im n/a
Beanstandung zu einem Trassenangebot; Ablehnung eines Kontext mit den Angaben zu den Nachrichtenattributen „TypeOfRequest“ und „TypeOfInformation“
Ergebnisses für eine FZB, KFB oder FPS und dem gewählten Produkt.
MessageType 2005 PathNotAvailableMessage Kommunikation im Zuge des GPE bzw. FPE: Trasse soll ausfallen Ja
MessageType 2006 PathRequestMessage Stellungnahme auf ein GPE Ja
MessageType 2007 ReceiptConfirmationMessage Fachliche Empfangsbestätigung einer Nachricht. Ja
Verwendung zur qualifizierten Rückmeldung
MessageType 9000 ErrorMessage Wird vom Empfänger übermittelt, wenn eine vorab empfangene Ja
Nachricht durch den Empfänger nicht verarbeitet werden kann
MessageType 8500 UpdateLinkMessage UpdateLinkMessage n/a
MessageType 8501 ObjectInfoMessage ObjectInfoMessage n/a
ObjectType TR ReferenceTrain Objekttyp der ReferenceTRID Ja
64
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 65

DB Intern / DB internal
ObjectType PR PathRequest Objekttyp der PathRequestID Ja
ObjectType PA Path Objekttyp der PathID Ja
ObjectType CR CaseReference Objekttyp der CaseReferenceID Ja
ObjectType TC TemporaryCapacityRestriction Objekt der TemporaryCapacityRestricitonID Ja
TrafficType 32 Bus Bus Nutzung bei Teilausfall verlängern wegen SEV Ja
TypeOfInformation 8 coordination update Entwurf Ausfall nach Stellungnahme (grob) Ja
TypeOfInformation 9 draft offer Grobplanungsergebnis Ja
TypeOfInformation 10 draft alternative offer Entwurf eines alternativen Angebotes n/a
TypeOfInformation 12 observation - complete Trassenentwurf (grob) nach Stellungnahme Ja
TypeOfInformation 13 preparation of final offer - in process Vorbereitung eines endgültigen Angebots - in Arbeit Ja
TypeOfInformation 16 final offer Fleinplanungsergebnis Ja
TypeOfInformation 18 alternative offer accepted Netzausgelöstes (alternatives) Angebot bestätigt/angenommen Ja
TypeOfInformation 21 no alternative available Kein Trassenangebot möglich bzw. gebuchte Trasse nicht Ja
verfügbar
TypeOfInformation 26 Alternative offer rejected (without revision) Ablehnung eines GPE (ohne Überarbeitung) Ja
TypeOfInformation 28 Alternative offer rejected (revision required) Ablehnung eines GPE (mit Überarbeitung) Ja
TypeOfInformation 29 withdrawal Vorzeitiges Prozessende Ja
TypeOfInformation 45 Draft no alternative available Vorläufige Mitteilung, dass kein Trassenangebot möglich ist. Ja
Tabelle 23: TAF-TSI/TAP-TSI Codelisten
6.2 Codeliste TrainActivity
 TrainActivity ist eine Wiederholstruktur, die auf Ebene „PlannedJourneyLocation“ in den Strukturen „TrainInformation“ (Zuglaufpunkt) und „PathInformation“ (Zugtrassenlaufpunkt) bereitgestellt wird. In dieser Schnittstelle wird
sie jedoch ausschließlich in der Struktur „PathInformation“ genutzt.
TrainActivity beinhaltet im Attribut TrainActivityType eine eindeutige Kodierung der Zugaktivität als Mussangabe sowie die Möglichkeit der Referenzierung auf einen anderen Zug durch Angabe der Zugnummer oder der
ReferenceTRID (optional).
 Für jeden in den Strukturen PathInformation angegebenen ZLP/TLP muss mindestens eine Struktur „TrainActivity“ angegeben werden, die der Haltart "Bestellter Kundenhalt" (Wert 0001), "Betriebshalt" (Wert 0002),
„Kundenbestellter Bedarfshalt“ (Wert 0030) oder "Durchfahrt" (Wert 0040) entspricht. Die Nutzung aller anderen TrainActivityCodes ist optional.
 Alle anderen TrainActivityCodes entsprechen einem konkreten Haltegrund oder einer Aktivität am Zug bzw. bei der Durchführung der Zugfahrt für die jeweilige Haltart. Pro ZLP/TLP können mit beliebig vielen Strukturen
„TrainActivity“ verschiedene Aktivitäten angegeben werden.
65
Dokumentation zum ujBau Prozess, Version 4.6.2

## Seite 66

DB Intern / DB internal
 Die Ausprägungen des Attributs „TrainActivityType“ sowie weitere Beschreibungen und Anwendungsvoraussetzungen aus Anlage 1 sind zu verwenden.
66
Dokumentation zum ujBau Prozess, Version 4.6.2
