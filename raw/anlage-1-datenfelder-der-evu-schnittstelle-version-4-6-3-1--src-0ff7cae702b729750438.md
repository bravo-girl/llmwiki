# Anlage 1: Datenfelder der EVU-Schnittstelle, Version 4.6.3.1

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13900358/ce3bef9333493e22501e94c57d6ac159/Anlage-1-Datenfelder-der-EVU-Schnittstelle-Version-4-6-3-1-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13900358/ce3bef9333493e22501e94c57d6ac159/Anlage-1-Datenfelder-der-EVU-Schnittstelle-Version-4-6-3-1-data.pdf)
- Quellen-Schlüssel: `src-0ff7cae702b729750438`
- Abrufdatum: 2026-06-27
- Original: [[anlage-1-datenfelder-der-evu-schnittstelle-version-4-6-3-1--src-0ff7cae702b729750438.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Anlage1
Struktur- und Datenfeldbeschreibungen
Schnittstelle Eisenbahnverkehrsunternehmen (EVU) / Bestellsystem InfraGo
Version 4.6.3.1

## Seite 2

Änderungshistorie
Version Name Art der Bearbeitung Datum
Bearbeiter
4.0.0 Initialfassung 16.03.2015
4.1.0 Überarbeitung auf Basis xsd Version 2.2.3 und Änderungen im Sector-Handbuch TAF/TAP-TSI der RNE 23.07.2019
4.1.1 Überarbeitung auf Basis xsd Version 2.2.4 und Änderungen im Sector-Handbuch TAF/TAP-TSI der RNE. 25.02.2020
4.2.0 Einarbeitung der Änderungen in den xsd-Versionen 2.4.1.0 und 2.5.0.0. 26.02.2021
4.3.0 Einarbeitung der Änderungen in der xsd-Version 3.0.2.0 der RNE sowie aller Änderungen im Zusammenhang 16.08.2021
mit der Neumodellierung des Train-Objekts.
4.4.0 Einarbeitung der Änderungen in der xsd-Version 3.1.0.1 der RNE. 28.02.2022
Einarbeitung der Regelungen und Ergänzung zur Bestellung und Zuweisung des Marktproduktes „Rahmenver-
tragskapazität“ für Rahmenverträge.
4.4.1 Einarbeitung der Änderungen in der xsd-Version 3.2.0.0 der RNE 22.08.2022
4.4.2 Einarbeitung der Änderungen aus der xsd-Version 3.3.0.0 der RNE 10.05.2023
4.5.0 Einarbeitung der Änderungen aus der xsd-Version 3.5.0.0 der RNE 17.07.2024
4.6.0 Fachliche und redaktionelle Anpassungen 17.04.2025
4.6.1 Fachliche und redaktionelle Anpassungen 14.07.2025
4.6.2 Fachliche und redaktionelle Anpassungen 11.09.2025
4.6.3 Redaktionelle Anpassung 18.12.2025
4.6.3.1 DB InfraGO AG Fachliche Anpassung 08.06.2026
Fabian Sommer • Hinzunahme Eintrag VerkehrsartKundeZusatz – „20h-Zug“
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 2

## Seite 3

Inhaltsverzeichnis
Änderungshistorie 2
Inhaltsverzeichnis 3
Tabellenverzeichnis 6
Abbildungsverzeichnis 8
1 Hinweise zu diesem Dokument 9
1.1 Dokumentenaufbau 9
1.2 Bezug zu anderen Dokumenten 9
2 Nachrichten 10
2.1 Geschäftsvorfälle und Basisprozesse 11
2.1.1 Basisprozesse 11
2.1.2 Kanalzwang 11
2.1.3 Geschäftsvorfälle und zu verwendende TAF-TSI/TAP-TSI Nachrichtentypen 11
2.2 Hauptstrukturen der Nachrichten 18
2.2.1 PathRequestMessage 18
2.2.2 PathDetailsMessage 22
2.2.3 PathDetailsRefusedMessage 24
2.2.4 PathConfirmedMessage 26
2.2.5 PathCanceledMessage 28
2.2.6 PathNotAvailableMessage 30
2.2.7 ReceiptConfirmationMessage 32
2.2.8 ErrorMessage 35
2.2.9 ObjectInfoMessage 36
2.2.10 UpdateLinkMessage 40
3 Datenfeldbeschreibungen 42
3.1 Spalten der Datenfelder-Tabellen 43
3.2 Struktur „MessageHeader“ 44
3.2.1 Übersicht über die Struktur „MessageHeader“ 44
3.2.2 Datenfelder der Struktur „MessageHeader“ 45
3.3 Struktur „AdministrativeContactInformation“ 46
3.3.1 Übersicht über die Struktur „AdministrativeContactInformation“ 46
3.3.2 Datenfelder der Struktur „AdministrativeContactInformation“ 46
3.4 Struktur „Identifiers“ 47
3.4.1 Übersicht über die Struktur „Identifiers“ 47
3.4.2 Datenfelder der Struktur „Identifiers“ 50
3.5 Attribute und Strukturen auf Messageebene 51
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 3

## Seite 4

3.6 Oberstruktur TrainInformation 53
3.6.1 Übersicht über die Oberstruktur „TrainInformation“ 53
3.6.2 Strukturen der Oberstruktur „TrainInformation“ 53
3.7 Oberstruktur PathInformation 54
3.7.1 Übersicht über die Oberstruktur „PathInformation“ 54
3.7.2 Strukturen der Oberstruktur „PathInformation“ 54
3.8 Struktur „PlannedJourneyLocation“ 55
3.8.1 Übersicht über die Struktur „PlannedJourneyLocation“ und deren Unterstrukturen 56
3.8.2 Datenfelder der Struktur „PlannedJourneyLocation“ und deren Unterstrukturen 61
3.9 Struktur „PlannedCalendar“ 74
3.9.1 Übersicht über die Struktur „PlannedCalendar“ 74
3.9.2 Struktur „ReferenceTrainIDSubCalendar“ und Attribut „OffsetToReference“: 75
3.9.3 Datenfelder der Struktur „PlannedCalendar“ 75
3.9.4 Datenfelder der Struktur „ReferenceTrainIDSubCalendar“ 77
3.10 Struktur „RequestedCalendar“ 78
3.10.1 Übersicht über die Struktur „RequestedCalendar“ 78
3.10.2 Datenfelder der Struktur „RequestedCalendar“ 79
3.11 PathPlanningReferenceLocation 80
3.12 AffectedSection 81
3.12.1 Übersicht über die Struktur „AffectedSection“ 81
3.12.2 Datenfelder der Struktur „AffectedSection“ 83
3.13 InterruptionInformation 85
3.13.1 Übersicht über die Unterstruktur „InterruptionInformation“ 85
3.13.2 Datenfelder der Unterstruktur „InterruptionInformation“ 85
3.14 NetworkSpecificParameter 86
3.14.1 Übersicht über die Struktur „NetworkSpecificParameter“ 86
3.14.2 Datenfelder der Struktur „NetworkSpecificParameter“ 86
3.14.3 Vorgehensweise bei der Nutzung nationaler Parameter 86
3.14.4 Befüllung der Struktur 87
3.14.5 Attribute der Struktur „NetworkSpecificParameter“ auf Message-Ebene 88
3.14.6 Attribute der Struktur „NetworkSpecificParameter“ auf Location-Ebene 90
3.14.7 Attribute der Struktur „NetworkSpecificParameter“ in der Struktur „AffectedSection“ 96
3.15 CaseReference-Objekte 97
3.15.1 CaseReference-Objekt „Taktverbund“ 98
3.15.2 CaseReference-Objekt „Abstellung“ 99
3.15.3 CaseReference-Objekt „Rahmenvertrag“ 99
3.15.4 CaseReference-Objekt „Baubetroffenheit“ (Umsetzung pausiert, siehe Anlage 10) 100
3.15.5 CaseReferemce-Objekt „ETCS-Zugdaten“ 100
3.16 Codelisten 102
3.16.1 TAF-TSI/TAP-TSI-Codelisten 102
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 4

## Seite 5

3.16.2 Codeliste TrainActivity 115
4 Bereitstellung der Ordnungsrahmenstände und Stammdaten 118
4.1 Ordnungsrahmenstände 119
4.2 Stammdaten 119
4.2.1 Grundstruktur der Stammdaten 119
4.2.2 StammdatenHeader 120
4.3 Datenfelder der Stammdaten 121
4.3.1 Betriebsstellen 121
4.3.2 Strecken 123
4.3.3 Triebfahrzeuge 125
4.3.4 Zuggattungen 126
4.3.5 Streckenklassen 127
4.3.6 VerkehrsartKundeZusaetz 127
4.3.7 Flexibilitaeten 128
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 5

## Seite 6

Tabellenverzeichnis
Tabelle 1: Geschäftsvorfälle und TAF-TSI/TAP-TSI Nachrichtentypen 17
Tabelle 2: PathRequestMessage Hauptstruktur Beschreibung 21
Tabelle 3: PathDetailsMessage Hauptstruktur Beschreibung 23
Tabelle 4: PathDetailsRefusedMessage Hauptstruktur Beschreibung 25
Tabelle 5: PathConfirmedMessage Hauptstruktur Beschreibung 27
Tabelle 6: PathCanceledMessage Hauptstruktur Beschreibung 29
Tabelle 7: PathNotAvailableMessage Hauptstruktur Beschreibung 31
Tabelle 8: ReceiptConfirmationMessage Struktur Beschreibung 34
Tabelle 9: ErrorMessage Struktur Beschreibung 36
Tabelle 10 ObjectInfoMessage Struktur Beschreibung 39
Tabelle 11 UpdateLinkMessage Struktur Beschreibung 41
Tabelle 12 Spalten Datenfeldertabellen 43
Tabelle 13 Übersicht verwendete Codierungen in Tabelle 12 44
Tabelle 14 MessageHeader Datenfelder 45
Tabelle 15 AdministrativeContactInformation Datenfelder 46
Tabelle 16 Identifiers Datenfelder 50
Tabelle 17 Attribute und Strukturen auf Messageebene 52
Tabelle 18 TrainInformation Oberstruktur Beschreibung 53
Tabelle 19 PathInformation Oberstruktur Beschreibung 54
Tabelle 20 Struktur PlannedJourneyLocation Datenfelder 73
Tabelle 21 PlannedCalendar Datenfelder 76
Tabelle 22 ReferenceTrainIDSubCalendar Datenfelder 77
Tabelle 23 RequestedCalendar Datenfelder 79
Tabelle 24 AffectedSection Datenfelder 84
Tabelle 25 InterruptionInformation Datenfelder 85
Tabelle 26 NetworkSpecificParameter Datenfelder 86
Tabelle 27 NetworkSpecificParameter Message-Ebene Datenfelder 90
Tabelle 28 NetworkSpecificParameter Location-Ebene Datenfelder 95
Tabelle 29 NetworkSpecificParameter AffectedSection Datenfelder 96
Tabelle 30: Allgemeine Struktur der ObjectInfoMessage bei der Nutzung für ein CaseReference-Objekt 97
Tabelle 31: Fachliche Parameter CaseReference-Objekt „Taktverbund“ 98
Tabelle 32: Fachliche Parameter des CaseReference-Objektes "Abstellung" 99
Tabelle 33: Fachliche Parameter CaseReference-Objekt „Rahmenvertrag“ 99
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 6

## Seite 7

Tabelle 34: Fachliche Parameter CaseReference-Objekt „Baubetroffenheit“ 100
Tabelle 35 TAF-TSI/TAP-TSI Codelisten Übersicht 103
Tabelle 36 TAF-TSI/TAP-TSI Codelisten 115
Tabelle 37 TrainActivity Codeliste 117
Tabelle 38: Ordnungsrahmenstände Datenfelder 119
Tabelle 39 Datei „StammdatenList“ Datenfelder 119
Tabelle 40 StammdatenHeader Datenfelder 120
Tabelle 41 Betriebsstellen Datenfelder 122
Tabelle 42 Strecken Datenfelder 124
Tabelle 43 Triebfahrzeuge Datenfelder 125
Tabelle 44 Zuggattungen Datenfelder 126
Tabelle 45 Streckenklassen Datenfelder 127
Tabelle 46: VerkehrsartKundeZusaetze Datenfelder 127
Tabelle 47 Flexibilitaeten Datenfelder 128
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 7

## Seite 8

Abbildungsverzeichnis
Abbildung 1 PathRequestMessage Hauptstruktur 19
Abbildung 2 : PathDetailsMessage Hauptstruktur 22
Abbildung 3 PathDetailsRefusedMessage Hauptstruktur 24
Abbildung 4 PathConfirmedMessage Hauptstruktur 26
Abbildung 5 PathCanceledMessage Hauptstruktur 28
Abbildung 6 PathNotAvailableMessage Hauptstruktur 30
Abbildung 7 ReceiptConfirmationMessage Struktur 33
Abbildung 8 ErrorMessage Struktur 35
Abbildung 9 ObjectInfoMessage Struktur 37
Abbildung 10 UpdateLinkMessage Struktur 40
Abbildung 11 MessageHeader Struktur 44
Abbildung 12 AdministrativeContactInformation Struktur 46
Abbildung 13 Identifiers Struktur 47
Abbildung 14 TrainInformation Oberstruktur 53
Abbildung 15 PathInformation Oberstruktur 54
Abbildung 16 PlannedJourneyLocation Strukturübersicht 56
Abbildung 17 LocationSubsidiaryIdentification Unterstruktur 57
Abbildung 18 TypeOfService Unterstruktur 57
Abbildung 19 PlannedTrainTechnicalData Struktur 58
Abbildung 20 ExceptionalGaugingIdent Unterstruktur 59
Abbildung 21 DangerousGoodsIndication Unterstruktur 59
Abbildung 22 CombinedTrafficLoadProfile Unterstruktur 59
Abbildung 23 StatusOfHarmonization Unterstruktur 60
Abbildung 24 TrainActivity Unterstruktur 61
Abbildung 25 PlannedCalendar Struktur 74
Abbildung 26 ReferenceTrainIDSubCalendar Struktur 75
Abbildung 27 RequestedCalendar Struktur 78
Abbildung 28 PathPlanningReferenceLocation Struktur 80
Abbildung 29 AffectedSection Struktur 82
Abbildung 30 InterruptionInformation Struktur 85
Abbildung 31 NetworkSpecificParameter Struktur 86
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 8

## Seite 9

1 Hinweise zu diesem Dokument
Die EVU-Schnittstelle des Bestellsystems der DB InfraGO orientiert sich ab Version 4.0.0 am TAF-TSI/TAP-TSI-konformen Nachrichtenaustausch zwischen den beteiligten Bahngesellschaften
 Eisenbahnverkehrsunternehmen (EVU) und
 Eisenbahninfrastrukturunternehmen (EIU).
Grundlage dieser Schnittstellendokumentation ist die gültige XSD-Version der TAF-TSI/TAP-TSI-Dokumentation der RNE, die als Anlage 4 dieser Dokumentation beigefügt ist.
In diesem Dokument werden die von TAF-TSI/TAP-TSI vorgegebenen Strukturen der Nachrichtentypen zum Nachrichtenaustausch in der Planungsphase (Trassenbestell- und Zuweisungsprozess) sowie detaillierte Beschreibungen der den
einzelnen Nachrichtentypen zugeordneten Attribute dokumentiert.
1.1 Dokumentenaufbau
 In Kapitel 2 werden die in den TAF-TSI/TAP-TSI-Dokumenten verwendeten Nachrichtentypen (Messages) und deren Strukturen auf Toplevel-Niveau (Hauptstrukturen) beschrieben
 Kapitel 3 enthält für jede TAF-TSI/TAP-TSI-Struktur und deren Unterstruktur(en) die detaillierten Datenfeldbeschreibungen.
 Kapitel 4 beschreibt die Nachrichten und Dateistrukturen zur Bereitstellung von Stammdaten.
1.2 Bezug zu anderen Dokumenten
Die folgenden Referenzdokumente sind für das Verständnis des vorliegenden Dokuments wichtig und sollten bekannt sein:
[1] Schnittstellendokumentation_EVU-Schnittstelle_Bestellsystem_V4.x.x.pdf Dokumentation der EVU-Schnittstelle (Hauptdokument)
[2] Anl2_Technische_Funktionsbeschreibung_ Anlage 2: Technische Funktionsbeschreibung der EVU-Schnittstelle des Bestellsystems
[3] Anl3_ Übersicht xsd-Versionen_EVU-Schnittstelle_BestellsystemV4.x.x.pdf Anlage 3: Übersicht der Kompatibilität der xsd-Versionen
[4] Anl4_taf_tap_cat_complete_sector_Vx.x.x.x.xsd Anlage 4: Aktuelle XSD-Datei “taf_tap_cat_complete_sector”
[5] Anl5_WSDL für Austausch von TAF/TAP-TSI Nachrichten-und-Heartbeat.zip Anlage 5: WSDL-Datei für den Austausch von TAF/TAP-TSI Nachrichten und Heartbeat
[6] Anl6_Technische_Funktionsbeschreibung_Stammdatenbereitstellung_V4.x.x.pdf Anlage 6: Technische Funktionsbeschreibung für die Stammdatenbereitstellung
[7] Anl7_stammdatenEVU.openapi.yaml Anlage 7: OpenAPI Spezifikation für die Stammdatenbereitstellung
[8] Anl8_Fachliche_Anwendungsfaelle_V4.x.x.pdf Anlage 8: Fachliche Anwendungsfälle
[9] Anl9_Fehlernachrichten_der_DB InfraGO_EVU-Schnittstelle_Bestellsystem_V4.x.x.pdf Anlage 9: Fehlernachrichten der DB InfraGO
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 9

## Seite 10

2 Nachrichten
Die TAF-TSI/TAP-TSI-konforme EVU-Schnittstelle (ab Version 4.0.0) orientiert sich an dem IT-basierten Nachrichtenaustausch zwischen den beteiligten Bahngesellschaften (EVU und EIU), bei dem die nachfolgend genannten Nachrichten
verwendet werden sollen. Diese Nachrichtentypen gehören zum Standard von TAF-TSI/TAP-TSI:
Kommunikation von EVU nach DB InfraGO:
 PathRequestMessage:
Die Nachricht dient zur Bestellung eines Produktes der DB InfraGO einschließlich gewünschter Änderungen oder Abmeldung der Bestellung. Dies kann die Bestellung einer Trasse, einer RV-Kapazität für einen Rahmenvertrag oder einer
Kurzfristigen Fahrlagenberatung mit Buchungsoption sein, aber auch die Beantragung einer Fahrzeitberechnung oder einer Fahrplan- und Betriebsprogrammstudie sowie die Änderung eines bestehenden Trasseneinzelnutzungsvertrages.
 PathConfirmedMessage:
Die Nachricht dient der Bestätigung eines von DB InfraGO an das EVU übergebenen Trassenangebotes und somit dem Abschluss eines Trasseneinzelnutzungsvertrages durch das EVU. Sie wird ebenfalls für die Bestätigung eines RV-
Kapazitätsangebots als Voraussetzung für den Abschluss eines Rahmenvertrages genutzt.
 PathDetailsRefusedMessage:
Sie dient der Ablehnung eines Angebots für eine Trasse oder eines RV-Kapazitätsangebots bzw. der Ablehnung eines Angebots für eine Trasse mit nochmaliger Überarbeitung (sofern das Angebot nicht der Bestellung des EVU entspricht).
Die Nachricht wird auch für die Übermittlung der Berechtigten Beanstandung zu einem übergebenen Vorläufigen Netzfahrplanentwurf genutzt.
 PathCanceledMessage:
Die Nachricht wird verwendet für die Stornierung von gebuchten Trassen, d. h. Stornierung eines Trasseneinzelnutzungsvertrages durch das EVU, oder der Stornierung einer RV-Kapazität als Teil eines Rahmenvertrages.
Kommunikation von DB InfraGO nach EVU:
 PathDetailsMessage:
Die Nachricht dient der Übermittlung eines Trassenangebots, eines RV-Kapazitätsangebots bzw. des Ergebnisses für eine Kurzfristige Fahrlagenberatung mit Buchungsoption, für eine Fahrzeitberechungsanfrage oder für eine Fahrplan-
bzw. Betriebsprogrammstudie, sowie der Übermittlung der Buchungsbestätigung, der Bestätigung verbleibender Trassenanteile nach Änderungen und Stornierungen und der Information über die Nichtkonstruierbarkeit.
 PathNotAvailableMessage:
Die Nachricht wird von DB InfraGO übermittelt, wenn eine Trasse (räumlich und/oder zeitlich ganz oder teilweise) nicht mehr verfügbar ist und ein bestehender Trasseneinzelnutzungsvertrag ganz oder teilweise netzbedingt storniert
werden muss. Die Nachricht dient ebenfalls der Stornierung einer RV-Kapazität als Teil eines Rahmenvertrages durch DB InfraGO.
Kommunikation von DB InfraGO nach EVU bzw. von EVU nach DB InfraGO:
 ReceiptConfirmationMessage:
Die Nachricht wird übermittelt, wenn eine vorab empfangene Nachricht erfolgreich durch den Empfänger entgegengenommen wurde und weiterverarbeitet werden kann.
 ErrorMessage:
Die Nachricht wird verwendet, wenn eine vorab empfangene Nachricht durch den Empfänger nicht entgegengenommen oder verarbeitet werden kann.
Hierbei kann es sich um erkannte Fehler bei der fachlichen Eingangsprüfung oder um technische Probleme handeln.
 ObjectInfoMessage:
Die Nachricht wird verwendet, um Informationen zu neuen oder bestehenden Objekten anzufragen und breitzustellen.
 UpdateLinkMessage:
Die Nachricht wird zur Änderung, Auflösung oder Neubegründung der Verlinkung zwischen den Objekten Train (Zug) und Path (Trasse) verwendet. Innerhalb der Planungsphase wird diese Nachricht für die Kommunikation zwischen EVU
und DB InfraGO nicht verwendet
Die Nachrichten werden über eine XML-Schnittstelle ausgetauscht.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 10

## Seite 11

2.1 Geschäftsvorfälle und Basisprozesse
2.1.1 Basisprozesse
Es werden in TAF-TSI/TAP-TSI drei verschiedene Basisprozesse unterschieden
 Request: Erstbestellprozess
Der Lebenszyklus des Basisprozesses beginnt mit der Erstbestellung und endet mit dessen Abschluss durch einen finalisierenden Geschäftsvorfall (z.B. Buchungsbestätigung, Abmeldung).
 Modification: Änderungsprozess nach Vertragsschluss für Trassen und RV-Kapazitäten, auch Stornierungen von Trassen und RV-Kapazitäten.
Der Lebenszyklus des Basisprozesses beginnt mit einer Änderungsbestellung oder Stornierung und endet mit deren Abschluss durch einen finalisierenden Geschäftsvorfall (z.B. Buchungsbestätigung für die Änderungsbestellung).
 Study: Studien
Der Lebenszyklus des Basisprozesses beginnt mit einer Studienbestellung und endet mit deren Abschluss durch einen finalisierenden Geschäftsvorfall (z.B. Übergabe des Studienergebnisses).
Details hierzu sind im nachfolgenden Kapitel zu finden.
2.1.2 Kanalzwang
 Ein über die EVU-Schnittstelle (Vertriebskanal „EVU-Schnittstelle“ des Bestellsystems der DB InfraGO) begonnener Basisprozess muss auch über diesen Kanal finalisiert werden. Dies gilt für alle drei Basisprozesse. Nähere Erläuterun-
gen zu den Basisprozessen finden Sie in Kapitel 2.1.1.
 Für einen über den Kanal „EVU-SST“ begonnenen und finalisierten Basisprozess „Request“ könnte hingegen ein nachfolgender Basisprozess „Modification“ über den Vertriebskanal „Client“ des Bestellsystems der DB InfraGO abgewi-
ckelt werden, falls dieser initial vom EVU ausgelöst wird. Netzausgelöste Geschäftsvorfälle im Basisprozess „Modification“ werden jedoch über den gleichen Vertriebskanal abgewickelt wie der Geschäftsvorfall, auf den sich der netzausge-
löste Geschäftsvorfall bezieht.
2.1.3 Geschäftsvorfälle und zu verwendende TAF-TSI/TAP-TSI Nachrichtentypen
Mit den oben genannten zehn Nachrichtentypen der TAF-TSI/TAP-TSI können alle bei der DB InfraGO für den Fahrplanbestell- und Bearbeitungsprozess definierten Geschäftsvorfälle abgewickelt werden.
Nachfolgend werden die einzelnen Geschäftsvorfälle (GV) und die jeweils zu verwendenden TAF-TSI/TAP-TSI-Nachrichtentypen samt weiterer qualifizierender TAF-TSI/TAP-TSI-Merkmale dokumentiert.
Die Geschäftsvorfälle sind nach den von DB InfraGO angebotenen Produkten „Trasse“ (TRA, im Netzfahrplan und Gelegenheitsverkehr), „RV-Kapazität“ (RVK), „Kurzfristige Fahrlagenberatung mit Buchungsoption“ (KFB), „Fahrzeitberech-
nung“ (FZB) und „Fahrplanstudie / Betriebsprogrammstudie“ (FPS) geordnet.
Zur eindeutigen Identifizierung des über eine TAF-TSI/TAP-TSI-Nachricht transportierten Geschäftsvorfalls sind erforderlich:
 die eigentliche Nachricht (TAF-TSI/TAP-TSI-Message), Details siehe Kapitel 2.2
 die Angabe des jeweiligen Produkts der DB InfraGO. Diese Information wird in der Struktur „NetworkSpecificParameter“ auf Messageebene als Mussangabe im Element „marktProdukt“ hinterlegt (siehe Kapitel 3.14.5)
 nachfolgende, die jeweilige Nachricht zusätzlich qualifizierende Attribute MessageStatus, TypeOfRequest und TypeOfInformation, die in der Nachricht enthalten und Muss-Attribute sind:
„MessageStatus“ (MS)
Das Attribut der Message gibt den Bearbeitungsstatus der Message innerhalb des jeweiligen Basis-Prozesses an.
Das Attribut hat die Ausprägungen:
 1 = creation: Gibt an, dass die Message innerhalb des jeweiligen Prozesses das erste Mal verwendet/gesendet wurde. D. h. das Objekt/die Message wurde neu erstellt, der Identifikator bisher noch nicht verwendet
 2 = modification: Gibt an, dass die zuvor gesendete Message des gleichen Typs bzw. das in der Message enthaltene Objekt innerhalb des aktuellen Prozesses verändert bzw. zum wiederholten Mal gesendet wurde. Der
bisherige Datenstand wird vollständig durch den neuen Datenstand ersetzt.
 3 = deletion: Die durch den angegebenen Identifikator identifizierte Message (z. B. PathRequestMessage) bzw. das referenzierte Objekt (z. B. Path offer) wird widerrufen und vollständig annulliert/gelöscht. Es erfolgt keine
Weiterbearbeitung. Weitere Folgeaktionen sind nicht zulässig.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 11

## Seite 12

“TypeOfRequest“ (TOR)
Das Attribut der Message gibt den Basis-Prozess an, in welchem die gesendete Nachricht ausgelöst/gesendet und bearbeitet wurde.
Es bleibt für alle gesendeten Messages innerhalb des Basis-Prozesses vom Start des Prozesses mit der jeweils den Prozess beginnenden/auslösenden Message bis zum Ende des Prozesses mit der letzten und den Prozess abschlie-
ßenden (finalisierenden) Message unverändert.
Die definierten Basis-Prozesse und die möglichen Ausprägungen sind:
 1 = Study: Studienprozess
o Beginnt immer mit einer initialen PathRequestMessage (MS: Creation)
o Endet mit
▪ der Bereitstellung eines Ergebnisses/Angebotes für die (Studien-)anfrage durch eine PathDetailsMessage mit TOI „final offer“.
▪ dem Senden einer ErrorMessage (als Antwort auf eine PathRequestMessage)
▪ der Abmeldung der PathRequestMessage durch Senden einer PathRequestMessage mit MS: Deletion und TOI “withdrawn“
▪ der Bestätigung der Nichtkonstruierbarkeit durch Senden einer PathDetailsMessage mit TOI „no alternative available“
 2 = Request: Erstanmeldeprozess für Trassen und RV-Kapazitäten
o Beginnt immer mit einer initialen PathRequestMessage (MS: Creation)
o Endet mit
▪ der Bestätigung einer zuvor durch das EVU erfolgten Angebotsannahme für ein übergebenes Trassenangebot bzw. RV-Kapazitätsangebot durch Senden einer PathDetailsMessage mit TypeOfInformation
„booked“
▪ der Bestätigung der Nichtkonstruierbarkeit durch Senden einer PathDetailsMessage mit TOI „no alternative available“
▪ der Ablehnung eines (finalen) Angebots durch Senden einer PathDetailsRefusedMessage mit TOI „offer rejected (without revision)“
▪ dem Senden einer ErrorMessage als Antwort auf die PathRequestMessage
▪ der Abmeldung der PathRequestMessage durch Senden einer PathRequestMessage mit MS: Deletion und TOI “withdrawn“
Erst nach Abschluss des Basis-Prozesses „Request“ kann ein Basis-Prozess „modification“ gestartet werden.
 3 = Modification: Prozess für die Änderung eines bestehenden Trassenvertrages bzw. der Änderung einer RV-Kapazität als Teil eines Rahmenvertrages. Der Prozess umfasst Änderungen und Stornierungen von Trassen bzw.
RV-Kapazitäten durch das EVU (Modification process) und durch das EIU (Alteration process). Voraussetzung ist die Existenz einer gebuchten Trasse mit mindestens einem Verkehrstag bzw. einer RV-Kapazität als Teil eines
Rahmenvertrages.
Dabei werden folgende Fälle unterschieden:
Fall Trassenänderung bzw. RV-Kapazitätsänderung durch das EVU (modification):
o Beginnt immer mit einer PathRequestMessage (MS: Creation) mit Referenz auf die zu ändernde Trasse bzw. RV-Kapazität (Angabe der PathID als PTID)
o Endet mit
▪ der Bestätigung einer zuvor durch das EVU erfolgten Angebotsannahme für ein übergebenes Trassenangebot bzw. RV-Kapazitätsangebots durch Senden einer PathDetailsMessage mit TypeOfInformation
„booked“ und neuer PathID sowie Referenz auf die bisherige Trasse bzw. RV-Kapazität (PathID als RPTID)
▪ der Bestätigung der Nichtkonstruierbarkeit durch Senden einer PathDetailsMessage mit OI „no alternative available“
▪ der Ablehnung eines (finalen) Angebots durch Senden einer PathDetailsRefusedMessage mit TOI „offer rejected (without revision)“
▪ dem Senden einer ErrorMessage als Antwort auf die PathRequestMessage
▪ der Abmeldung der PathRequestMessage durch Senden einer PathRequestMessage mit MS: Deletion und TOI “withdrawn“
Fall Trassenänderung bzw. RV-Kapazitätsänderung durch das EIU (alteration):
o Beginnt immer mit einer PathNotAvailableMessage mit TOI „preparation of alternative offer in progress“ mit Referenz auf die durch DB InfraGO geänderte Trasse bzw. RV-Kapazität (Angabe PathID als PTID)
o Endet mit
▪ der Bestätigung einer zuvor durch das EVU erfolgten Angebotsannahme für ein übergebenes Trassenangebot bzw. RV-Kapazitätsangebots durch Senden einer PathDetailsMessage mit TypeOfInformation
„booked“ und neuer PathID sowie Referenz auf die bisherige Trasse bzw. RV-Kapazität (PathID als RPTID)
▪ der Bestätigung der unveränderten Beibehaltung der Trasse bzw. RV-Kapazität durch wiederholtes Senden einer PathDetailsMessage für die bisherige Trasse bzw. RV-Kapazität (PathID als PTID) mit TOI
„booked“ (nur nach Ablehnung eines (finalen) Angebots, welche zuvor mit einer PathDetailsRefusedMessage mit TOI: Alternative offer rejected (without revision) durch das EVU gesendet wurde)
▪ dem Senden einer PathNotAvailableMessage mit TOI „no alternative available“ (nur nach Ablehnung eines (finalen) Angebots, welche zuvor mit einer PathDetailsRefusedMessage mit TOI: Alternative offer
rejected (without revision) durch das EVU gesendet wurde). Diese Reaktion ist bereits Teil der Trassenstornierung durch das EIU.
Fall Trassenstornierung durch das EVU (modification):
o Beginnt immer mit einer PathCanceledMessage mit TOI „path canceled, full“ oder „path canceled, partial“ mit Referenz auf die zu stornierende Trasse bzw. RV-Kapazität (Angabe PathID als PTID)
o Endet mit dem
▪ Senden einer PathDetailsMessage mit TOI „booked“ für die ganz oder teilweise stornierte Trasse bzw. RV-Kapazität (Angabe PathID als PTID).
▪ dem Senden einer ErrorMessage
Fall Trassenstornierung durch das EIU (alteration):
o Beginnt mit dem Senden PathNotAvailableMessage mit TOI „no alternative available“ mit Referenz auf die zu stornierende Trasse bzw. RV-Kapazität (Angabe PathID als PTID)
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 12

## Seite 13

o Endet mit dem Senden einer PathDetailsMessage mit TOI „booked“ für die ganz oder teilweise stornierte Trasse bzw. RV-Kapazität (Angabe PathID als PTID)
„TypeOfInformation“ (TOI)
Gibt eine besondere ergänzende Information zur Nachricht entsprechend des jeweiligen Status oder Bearbeitungsschrittes innerhalb des Basisprozesses
(Liste der Ausprägungen siehe Kapitel 3.16.1)
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 13

## Seite 14

Produkt der DB In- Produkt Richtung Geschäftsvorfall (GV) Message Message- TypeOfRequest TypeOfInformation Bemerkungen
fraGO Kurz Status
Alle Alle EVU ➔DB InfraGO (technische) Empfangsbe- ReceiptConfirmationMessage n/a Basisprozess “Study” = 1; n/a TypeOfInformation wird in dieser Nachricht nicht verwendet.
und DB InfraGO ➔ stätigung
Basisprozess
EVU
„Request“: = 2
Basisprozess
„Modification“: = 3
Trasse TRA EVU ➔DB InfraGO Erstanmeldung PathRequestMessage 1 2 04 - harmonisation com- TOI = 19 – nur bei Trassenanmeldung mit Annahmeerklärung
pleted/request ready und bei Nutzung der Buchungsoption nach KFB
oder 19 pre-accepted of-
fer
Trasse TRA EVU ➔DB InfraGO Änderung vor Angebotsan- PathRequestMessage 2 Basisprozess 04 - harmonisation com- TOI = 19 – nur bei Trassenanmeldung mit Annahmeerklärung
gabe „Request“: = 2 pleted/request ready und bei Nutzung der Buchungsoption nach KFB
oder 19 pre-accepted of-
Basisprozess
fer
„Modification“: = 3
Trasse TRA EVU ➔DB InfraGO Abmeldung PathRequestMessage 3 Basisprozess 29 - withdrawn Abmeldung muss im Prozess vor der Angebotsabgabe erfol-
„Request“: = 2 gen
Basisprozess
„Modification“: = 3
Trasse TRA DB InfraGO ➔ EVU Zurückweisung ErrorMessage 1 n/a n/a Verwendung von ErrorCodes gemäß Codeliste und Anlage 9
Trasse TRA DB InfraGO ➔ EVU Nichtkonstruierbarkeit PathDetailsMessage 1 Basisprozess 21 - no alternative avail-
„Request“: = 2 able
Basisprozess
„Modification“: = 3
Trasse TRA DB InfraGO ➔ EVU Vorläufiger Netzfahrplan- PathDetailsMessage 1 2 09 - draft offer Nur gültig für Nfpl
entwurf
Trasse TRA DB InfraGO ➔ EVU Endgültiger Netzfahrplan- PathDetailsMessage 2 2 16 - final offer Nur gültig für Nfpl
entwurf
Trasse TRA EVU ➔DB InfraGO Berechtigte Beanstandung PathDetailsRefusedMessage 1 2 27 – offer rejected (revi- Nur gültig für Nfpl
sion required)
Trasse TRA Netzausgelöste Berech- 1. Nur gültig für Nfpl
tigte Beanstandung
2. DB InfraGO -interner Geschäftsvorfall, der zu einem Tras-
senangebot führt
Trasse TRA DB InfraGO ➔ EVU Trassenangebot PathDetailsMessage 1 Basisprozess 16 - final offer 1. Gültig im Nfpl als Ergebnis nach Berechtigter Beanstandung
„Request“: = 2 oder Netzausgelöster Berechtigter Beanstandung
Basisprozess 2. Gültig für GelV als Trassenangebot
„Modification“: = 3
Trasse TRA EVU ➔DB InfraGO Ablehnung PathDetailsRefusedMessage 1 Basisprozess 25 – offer rejected (with-
„Request“: = 2 out revision) (bei
Ablehnung Trassen-an-
Basisprozess
gebot)
„Modification“: = 3
26 – alternative offer re-
jected (without revision)
(nach netzausgelöstem
Angebot)
Trasse TRA EVU ➔DB InfraGO Ablehnung mit Überarbei- PathDetailsRefusedMessage 1 Basisprozess 27 – offer rejected (revision required) (bei Nur gültig für GelV
tungswunsch „Request“: = 2 Ablehnung Trassen-angebot)
Basisprozess 28 – alternative offer rejected (revision re-
„Modification“: = 3 quired) (nach netzausgelöstem Angebot)
Trasse TRA DB InfraGO ➔ EVU Netzausgelöste Ablehnung PathDetailsMessage 3 Basisprozess 29 -withdrawn Wird gesendet, wenn vom EVU zu einem Trassenange-
nach Fristablauf zur Ange- „Request“: = 2 bot/ENP weder eine Angebotsannahme noch eine Ablehnung
botsannahme gesendet wurde
Basisprozess
„Modification“: = 3
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 14

## Seite 15

Produkt der DB In- Produkt Richtung Geschäftsvorfall (GV) Message Message- TypeOfRequest TypeOfInformation Bemerkungen
fraGO Kurz Status
Trasse TRA EVU ➔DB InfraGO Angebotsannahme PathConfirmedMessage 1 Basisprozess 17 - final offer accepted Gültig für Nfpl, GelV
„Request“: = 2
18 – alternative offer ac-
Basisprozess cepted
„Modification“: = 3
Trasse TRA DB InfraGO ➔ EVU Buchungsbestätigung PathDetailsMessage 1 (bei Aufträ- Basisprozess 22 - booked bei Aufträgen mit Annahmeerklärung erfolgt mit dem Senden
gen mit An- „Request“: = 2 der PathDetailsMessage die Übermittlung von Trassenange-
nahmeerklä- bot und Buchungsbestätigung in einer Nachricht
Basisprozess
rung)
„Modification“: = 3
2 (nach Ein-
gang Ver-
tragsbestäti-
gung)
Trasse TRA EVU ➔DB InfraGO Änderung nach Vertrags- PathRequestMessage 1 3 04 - harmonisation com- Nur gültig für GelV
schluss pleted oder 19 pre-ac-
cepted offer (bei Tras-
senanmeldung mit An-
nahmeerklärung)
Trasse TRA DB InfraGO ➔ EVU Ankündigung Netzausge- PathNotAvailableMessage 1 3 23 – preparation of al- 1. Nur gültig für GelV
löste Änderung ternative offer in pro-
2. Netzausgelöste Stornierung mit Ankündigung eines netz-
gress
ausgelösten Trassenangebots in Folge des DB InfraGO internen
Geschäftsvorfalls netzausgelöste Änderung
Trasse TRA DB InfraGO ➔ EVU Netzausgelöstes Trassen- PathDetailsMessage 1 3 24 – alternative offer Nur gültig für GelV
angebot triggered by IM
Trasse TRA EVU ➔DB InfraGO Stornierung PathCanceledMessage 1 3 32 – path canceled, full; Nur gültig für GelV
33 – path canceled, par-
tial
Trasse TRA DB InfraGO ➔ EVU Stornierungsbestätigung PathDetailsMessage 3 3 22 -booked Nur gültig im GelV; Bestätigung der Ausführung einer Stornie-
rung durch das EVU
Trasse TRA DB InfraGO ➔ EVU Netzausgelöste Stornie- PathNotAvailableMessage 1 3 21 – No alternative Nur gültig für GelV
rung available
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Erstanmeldung einer RVK PathRequestMessage 1 2 04 - harmonisation com-
pleted/request ready
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Änderung vor Abgabe ei- PathRequestMessage 2 Basisprozess „Request“: 04 - harmonisation com-
nes RVK-Angebots = 2 pleted/request ready
Basisprozess „Modifica-
tion“:
= 3
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Abmeldung einer RVK-An- PathRequestMessage 3 Basisprozess „Request“: 29 - withdrawn Abmeldung muss im Prozess vor der Abgabe des RVK-Ange-
meldung = 2 bots erfolgen
Basisprozess „Modifica-
tion“:
= 3
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Zurückweisung einer RVK- ErrorMessage 1 n/a n/a Verwendung von ErrorCodes gemäß Codeliste und Anlage 9
Anmeldung
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Nichtkonstruierbare RVK- PathDetailsMessage 1 Basisprozess „Request“: 21 - no alternative avail-
Anmeldung = 2 able
Basisprozess „Modifica-
tion“:
= 3
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 15

## Seite 16

Produkt der DB In- Produkt Richtung Geschäftsvorfall (GV) Message Message- TypeOfRequest TypeOfInformation Bemerkungen
fraGO Kurz Status
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU RVK-Angebot PathDetailsMessage 1 Basisprozess „Request“: 16 - final offer
= 2
Basisprozess „Modifica-
tion“: = 3
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Widerruf des abgegebe- PathDetailsMessage 2 Basisprozess „Request“: 21 - no alternative Netzausgelöste Stornierung des abgegebenen RVK-Angebots
nen RVK-Angebots = 2 available nach Beanstandung durch BNetzA
Basisprozess „Modifica-
tion“: = 3
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Netzausgelöste Änderung PathDetailsMessage 2 Basisprozess „Request“: 24 - alternative offer Netzausgelöste Änderung des abgegebenen RVK-Angebots
eines abgegebenen RVK- = 2 triggered by IM nach Beanstandung durch BNetzA
Angebots
Basisprozess „Modifica-
tion“:
= 3
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Ablehnung eines RVK-An- PathDetailsRefusedMessage 1 Basisprozess „Request“: 25 – offer rejected (with-
gebotes = 2 out revision)
Basisprozess „Modifica-
tion“:
= 3
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Netzausgelöste Ablehnung PathDetailsMessage 3 Basisprozess 29 -withdrawn Wird gesendet, wenn vom EVU zu einem RVK-Angebot weder
nach Fristablauf zur An- „Request“: = 2 eine Angebotsannahme noch eine Ablehnung gesendet
nahme eines RVK-Ange- wurde
Basisprozess
bots
„Modification“: = 3
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Bestätigung eines RVK-An- PathConfirmedMessage 1 Basisprozess „Request“: 17 - final offer accepted
gebotes = 2
Basisprozess „Modifica-
tion“:
= 3
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Buchungsbestätigung PathDetailsMessage 2 Basisprozess 22 - booked nach Ablauf der Prüffrist der BNetzA, sofern keine Beanstan-
„Request“: = 2 dung erfolgt ist.
Basisprozess
„Modification“: = 3
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Änderung einer RVK nach PathRequestMessage 1 3 04 - harmonisation com-
Vertragsschluss pleted/request ready
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Netzausgelöste Änderung PathDetailsMessage 1 Basisprozess 24 - alternative offer Netzausgelöste Änderung einer RVK
einer RVK „Request“: = 2 triggered by IM
Basisprozess
„Modification“: = 3
Rahmenvertragskapazität RVK EVU ➔ DB InfraGO Stornierung einer RVK PathCanceledMessage 1 3 32 – path canceled, full;
33 – path canceled, par-
tial
Rahmenvertragskapazität RVK DB InfraGO ➔ EVU Netzausgelöste Stornie- PathNotAvailableMessage 1 Basisprozess 21 - no alternative Netzausgelöste Stornierung einer RVK
rung einer RVK „Request“: = 2 available
Basisprozess
„Modification“: = 3
Kurzfristige Fahrlagenbe- KFB EVU ➔DB InfraGO Erstanmeldung einer Kurz- PathRequestMessage 1 1 05 - path study request
ratung mit Buchungsop- fristigen Fahrlagenbera-
tion tung mit Buchungsoption
Kurzfristige Fahrlagenbe- KFB DB InfraGO ➔ EVU Zurückweisung ErrorMessage 1 n/a n/a Verwendung von ErrorCodes gemäß Codeliste und Anlage 9
ratung mit Buchungsop-
tion
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 16

## Seite 17

Produkt der DB In- Produkt Richtung Geschäftsvorfall (GV) Message Message- TypeOfRequest TypeOfInformation Bemerkungen
fraGO Kurz Status
Kurzfristige Fahrlagenbe- KFB DB InfraGO ➔ EVU Nichtkonstruierbarkeit PathDetailsMessage 1 1 21 - no alternative avail-
ratung mit Buchungsop- able
tion
Kurzfristige Fahrlagenbe- KFB DB InfraGO ➔ EVU Ergebnis einer Kurzfristi- PathDetailsMessage 1 1 16 - final offer
ratung mit Buchungsop- gen Fahrlagenberatung mit
tion Buchungsoption
Fahrzeitberechnung, FZB EVU ➔DB InfraGO Erstanmeldung PathRequestMessage 1 1 05 - path study request
Fahrplanstudie, Betriebs- FPS
programmstudie BPS
Fahrzeitberechnung, FZB EVU ➔DB InfraGO Änderung vor Ergebnisbe- PathRequestMessage 2 1 05 - path study request
Fahrplanstudie, Betriebs- FPS reitstellung
programmstudie BPS
Fahrzeitberechnung, FZB EVU ➔DB InfraGO Abmeldung (Stornierung PathRequestMessage 3 1 29 - withdrawn Abmeldung muss im Prozess vor der Ergebnisabgabe erfolgen
Fahrplanstudie, Betriebs- FPS der Anfrage)
programmstudie BPS
Fahrzeitberechnung, FZB DB InfraGO ➔ EVU Zurückweisung ErrorMessage 1 n/a n/a Verwendung von ErrorCodes gemäß Codeliste und Anlage 9
Fahrplanstudie, Betriebs- FPS
programmstudie BPS
Fahrzeitberechnung, FZB DB InfraGO ➔ EVU Nichtkonstruierbarkeit PathDetailsMessage 1 1 21 - no alternative avail-
Fahrplanstudie, Betriebs- FPS able
programmstudie BPS
Fahrzeitberechnung, FZB DB InfraGO ➔ EVU Ergebnis PathDetailsMessage 1 1 16 - final offer
Fahrplanstudie, Betriebs- FPS
programmstudie BPS
Tabelle 1: Geschäftsvorfälle und TAF-TSI/TAP-TSI Nachrichtentypen
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 17

## Seite 18

2.2 Hauptstrukturen der Nachrichten
Die laut XSD vorgegebenen TAF-TSI/TAP-TSI-Nachrichten sind vom Haupt-Element (Bezeichnung der Nachricht, z.B. PathRequestMessage) über Haupt- und Unterstrukturen (teilweise auch verschachtelt) bis zu den jeweiligen zugeordneten
Attributen strukturiert. Die Gesamtstruktur pro Nachricht ist zu komplex, um diese Struktur in einer einzigen Übersicht zu dokumentieren. Daher werden in Kapitel 2.2 zunächst nur die Hauptstrukturen der Nachrichten gezeigt. Details zu
weiteren Unterstrukturen und deren Attributen werden in Kapitel 3 „Datenfeldbeschreibungen“ beschrieben.
Die Abbildungen zeigen in Aufklapptechnik die Hauptstrukturen und die jeweiligen Unterstrukturen. Die Tabellen dokumentieren das Vorkommen und die Beschreibungen der jeweiligen Struktur.
Die senkrechten Striche in der Spalte „Strukturelement“ symbolisieren dabei die Ebene der Struktur. Striche auf gleicher Höhe bedeuten die Zuordnung der Unterstruktur/des Attributs zur gleichen Ebene. Die Spalte „Vorkommen“ gibt an,
wie häufig ein Attribut bzw. eine Unterstruktur in der übergeordneten Struktur IT-technisch vorkommt:
 0..1 = Kannfeld
 1 = Mussfeld
 0..N = Wiederholstruktur (optional)
 1..N = Wiederholstruktur (mindestens eine Ausprägung der Struktur)
 <zahl>..N = Wiederholstruktur (optional), mindestens durch <zahl> angegebene Anzahl von Ausprägungen; <zahl> stellt dabei den Index (lfd. Nr.) der Ausprägung dar
2.2.1 PathRequestMessage
Die Nachricht wird vom EVU an die am Gesamtzuglauf beteiligten EIU gesendet (im Sinne dieser EVU-Schnittstellen-Dokumentation also an DB InfraGO) und enthält neben den Standardinformationen und -strukturen (Kopfangaben,
Identifikatoren, Status- und Typangaben, EVU) als wichtigste Informationen
 in der Struktur „TrainInformation“ die geplante Route des Zuges, dargestellt als geplanter Gesamtzuglauf (u. a. mindestens Start- und Zielbahnhof mit den Übergängen zwischen den beteiligten EIU (Handover-points), weitere für
den Gesamtzuglauf geltende Angaben, überregionale Zeitangaben) und
 in der Struktur „PathInformation“ den bei einem konkreten EIU gewünschten und zu bestellenden Zugtrassenverlauf (Fahrlage).
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 18

## Seite 19

Abbildung 1 PathRequestMessage Hauptstruktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 19

## Seite 20

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathRequestMessage 1 Die Nachricht wird vom EVU an das jeweils beteiligte EIU gesendet und stellt Informationen zum
Gesamtzuglauf und ausgewählten Zugdaten (TrainInformation) sowie Angaben zur gewünschten
Fahrlage des Zuges im Bereich eines Infrastrukturbetreibers (PathInformation) zur Verfügung.
I....MessageHeader 1 Für alle Nachrichten erforderlich Siehe Kapitel 3.2
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen.
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Angabe von ReferenceTRID, RouteID, PathRequestID (alle
verpflichtend) und ggf. CaseReferenceID.
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Angabe von ID anderer Objekte, die mitberücksichtigt wer-
den sollen oder im Kontext zu bearbeiten sind bzw. auf die
referenziert wird (z. B. geänderte Trasse).
Bei Trassenanmeldungen mit Bezug auf ein Ergebnis einer
Fahrplan- oder Betriebsprogrammstudie oder einer Fahrla-
genberatung mit Buchungsoption ist die PathID des Ergeb-
nisses anzugeben.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, so- Siehe Kapitel 3.16"Codelisten"
fern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation, 2=modification, 3=deletion
I....TypeOfRUHarmonization 0..1 Typ der EVU-Harmonisierung 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: Full, Part, None
I....TypeOfIMHarmonization 0..1 Typ der EIU-Harmonisierung 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: Full, Part
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16"Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16"Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....TypeOfRequest 1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 1=Study, 2=Request, 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 1 Typ der Information 1. Kennzeichnet besondere Ausprägung der Nachricht für
den jeweiligen Status innerhalb des Basisprozesses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1 "
I....TrainInformation 1 Überregionale und allgemeine Zuginformationen des EVU über den gesamten geplanten Zuglauf
I.... I....PlannedJourneyLocation 2..N Zuglaufpunkte
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage der Gültigkeit des Routenobjekts an. In Gilt abfahrtsbezogen am Startbahnhof des Gesamtzuglaufs
Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage im Kalender (Route).
der Route im Vergleich zu den Verkehrstagen des ReferenceTrains um die Anzahl der Tageswech-
sel verschieben.
I.... I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen soll
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 20

## Seite 21

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
I....PathInformation 1 enthält Angaben zum gewünschten Zugtrassenverlauf (Fahrlage) innerhalb des Zuständigkeitsbe-
reiches eines konkreten am Zuglauf beteiligten EIU
I.... I....PlannedJourneyLocation 2..N Zuglaufpunkte
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage des Zuges innerhalb des Infrastruktur- Gilt abfahrtsbezogen am Startbahnhof des gewünschten
bereiches des jeweiligen Infrastrukturbetreibers an. In Abhängigkeit vom Wert im Attribut Offset- Zugtrassenverlaufs im Bereich des EIU, für welches die
ToReference können sich die Verkehrstage im Kalender der PathInformation im Vergleich zu den Trassenbestellung bzw. RV-Kapazitätsbestellung erfolgt.
Verkehrstagen des ReferenceTrains oder der Route um die Anzahl der Tageswechsel verschieben.
I.... I....RequestedCalendar 0..1 Gibt die in einer PathRequestMessage übergebene Struktur PlannedCalendar unverändert zurück Keine Verwendung dieser Struktur in der Trassenerstbe-
stellung. Verwendung entsprechend Kap 3.10.1 bei Ände-
rungen nach Vertragsschluss
I....NetworkSpecificParameter 0..N Spezifische Parameter (Attribute, Felder) des EIU Die ggf. in der Kommunikation mit DB InfraGO zu verwen-
denden NetworkSpecificParameter sind in Kap, 3.14.5 ent-
halten.
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert
werden; das Freitextfeld darf nur Angaben enthalten, die
nicht in einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können.
Tabelle 2: PathRequestMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 21

## Seite 22

2.2.2 PathDetailsMessage
Die Nachricht wird vom EIU gesendet, um die Angebote und Ergebnisse (z. B. Trassenangebot, RV-Kapazitätsangebot, Studienergebnis, sonstige Rückmeldungen) in der Struktur „PathInformation“ an das EVU zu kommunizieren. Die
Nachricht wird ebenso für die Übermittlung netzausgelöster Angebote und Ergebnisse verwendet.
Wird die PathDetailsMessage zur Übermittlung des Geschäftsvorfalls „Nichtkonstruierbarkeit“ verwendet, erhält sie ebenfalls eine PathID, die jedoch in diesem Fall keine Trasse bzw. RV-Kapazität referenziert. Die Struktur Plan-
nedCalendar enthält die Verkehrstage, an welchen keine Trasse bzw. RV-Kapazität zugewiesen werden kann, in der Struktur „PlannedJourneyLocation“ wird die bestellte Start- und Zielbetriebsstelle wiederholt.
Abbildung 2 : PathDetailsMessage Hauptstruktur
Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathDetailsMessage 1 Die Nachricht wird vom EIU gesendet, um Angebote oder Ergebnisse (Path) des EIU an das EVU zu
kommunizieren
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen.
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID der angebotenen Trasse, des RV-Kapazitäts- Zusätzlich Angabe von ReferenceTRID, RouteID, PathRe-
angebots bzw. des Ergebnisses (Pflichtangabe) questID (außer bei netzausgelösten Angeboten) und ggf.
CRID aus der PathRequestMessage, auf welche sich das
Angebot bezieht
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 22

## Seite 23

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase; bei Angeboten nach berechtigten Beanstan- Angabe von ID anderer Objekte, die mitberücksichtigt wer-
dungen, bei Änderungen nach Vertragsschluss oder netzausgelösten Angeboten Angabe der Pa- den sollen oder im Kontext zu bearbeiten sind.
thID der vorherigen (angebotenen oder gebuchten) Trasse bzw. RV-Kapazität, sowie bei Änderun-
gen durch Baumaßnahmen die auslösende BKE
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers Siehe Kapitel 3.16"Codelisten"
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation
I....TypeOfRUHarmonization 0..1 Typ der EVU-Harmonisierung 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: Full, Part, None
I....TypeOfIMHarmonization 0..1 Typ der EIU-Harmonisierung 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: Full, Part
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16"Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16"Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....TypeOfRequest 1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 1=Study, 2=Request, 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 1 Typ der Information 1. Kennzeichnet besondere Ausprägung der Nachricht für
den jeweiligen Status innerhalb des Basisprozesses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1) "
I....PathInformation 1 Trassendaten
I.... I....PlannedJourneyLocation 2..N Trassenlaufpunkte
I.... I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage der Zugtrasse, der RV-Kapazität bzw. Gilt abfahrtsbezogen am Startbahnhof der Zugtrasse
des Ergebnisses an. In Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Ver-
kehrstage im Kalender der PathInformation im Vergleich zu den Verkehrstagen des Refe-
renceTrains oder der Route um die Anzahl der Tageswechsel verschieben.
I.... I....RequestedCalendar 0..1 Gibt die in der referenzierten PathRequestMessage in der Struktur PathInformation übergebene Wird nur angegeben, wenn die Zugtrasse nicht an dem
Struktur PlannedCalendar unverändert zurück (den) bestellten Verkehrstag(en) konstruiert wurde, son-
dern am jeweiligen Vor- oder Folgetag.
I....NetworkSpecificParameter 0..N Spezifische Parameter (Attribute, Felder) des EIU (in diesem Dokument die der DB InfaGO) Die ggf. in der Kommunikation mit DB InfarGO zu verwen-
denden NetworkSpecificParameter sind in Kap, 3.14.5 ent-
halten.
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert
werden; das Freitextfeld darf nur Angaben enthalten, die
nicht in einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können.
Tabelle 3: PathDetailsMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 23

## Seite 24

2.2.3 PathDetailsRefusedMessage
Die Nachricht wird vom EVU gesendet, um das EIU zu informieren, dass das übergebene Angebot bzw. Ergebnis (Path) nicht akzeptabel ist, da es nicht der übergebenen Bestellung entspricht. Mit der Übermittlung dieser Nachricht können
die Geschäftsvorfälle „Ablehnung ohne Überarbeitung“, „Ablehnung mit Überarbeitung“ oder „Berechtigte Beanstandung“ für ein übergebenes Trassenangebot oder RV-Kapazitätsangebot bzw. zum „Vorläufigen Netzfahrplanentwurf“
realisiert werden. Die Nutzung dieser Nachricht für den Geschäftsvorfall „Ablehnung mit Überarbeitung“ ist nur als Reaktion auf Angebote des Gelegenheitsverkehrs zulässig. Die Nutzung dieser Nachricht für den Geschäftsvorfall „Berech-
tigte Beanstandung“ ist nur als Reaktion auf den Geschäftsvorfall „Vorläufiger Netzfahrplanentwurf“ gestattet.
Ein von der DB InfraGO übergebenes Angebot darf nur komplett abgelehnt bzw. beanstandet werden. Daher ist die Angabe eines Start- und Zielbahnhofs für einen Zugtrassenabschnitt (StartOfSection und EndOfSection) und einer
Verkehrszeitregelung in der Struktur „AffectedSection“ nicht erforderlich und kann entfallen. Die Struktur „AffectedSection“ ist nicht zu befüllen und wegzulassen.
Das Attribut „FreeTextField“ muss in den Geschäftsvorfällen „Berechtigte Beanstandung“ (Typ 26) und „Ablehnung mit Überarbeitung“ (Typ 14) verwendet werden, um eine Begründung für die Beanstandung bzw. Überarbeitung zu
hinterlegen.
Abbildung 3 PathDetailsRefusedMessage Hauptstruktur
Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathDetailsRefusedMessage 1 Die Nachricht wird vom EVU gesendet, um das EIU zu informieren, dass das Trassenangebot, RV-
Kapazitätsangebot bzw. Studienergebnis oder Ergebnis der Fahrzeitberechnung nicht akzeptabel
ist.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID des abgelehnten Angebots (Pflichtangabe) Zusätzlich Angabe der ReferenceTRID, RouteID und Path-
RequestID des ablehnten Angebots möglich
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 24

## Seite 25

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer abgelehnter Angebote.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, so- Siehe Kapitel 3.16"Codelisten"
fern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 1=Study, 2=Request, 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information 1. Kennzeichnet eine besondere Ausprägung der Nach-
richt für den jeweiligen Status innerhalb des Basisprozes-
ses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1) "
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16 "Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16 "Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....RevisedRequest 0..1 Hinweis für das EIU, dass das EVU beabsichtigt, einen überarbeiteten Request bzw. eine Alterna- Dieses Attribut ist nicht zu verwenden; bei fachlichem Än-
tive zu senden derungsbedarf kann das EVU das übergebene Angebot ab-
lehnen und eine Neubestellung auslösen oder das überge-
bene Angebot annehmen und eine Änderung nach Ver-
tragsschluss senden.
I....AffectedSection 0..N Beschreibt den abgelehnten Trassenabschnitt eines übergebenen Trassenangebots, RV-Kapazi- Von DB InfaGO übergebene Trassenangebote, RV-Kapazi-
tätsangebots bzw. Studienergebnisses und dessen Verkehrszeitregelung tätsangebote bzw. Studienergebnisse dürfen nur vollstän-
dig (ggf. zur Überarbeitung) abgelehnt werden. Daher ist
die Angabe nicht erforderlich und wegzulassen.
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert
werden; das Freitextfeld darf nur Angaben enthalten, die
nicht in einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können. Ggf. kann hier
durch das EVU zusätzlich eine Begründung für die Berech-
tigte Beanstandung (im Netzfahrplanprozess) bzw. Ableh-
nung mit Überarbeitung (im Gelegenheitsverkehr) angege-
ben werden.
Tabelle 4: PathDetailsRefusedMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 25

## Seite 26

2.2.4 PathConfirmedMessage
Die Nachricht wird vom EVU gesendet, um ein von DB InfraGO übergebenes Trassenangebot oder einen endgültigen Netzfahrplanentwurf gesamthaft zu bestätigen und anzunehmen. Dadurch kommt ein Trasseneinzelnutzungsvertrag
zustande. Mit der Übermittlung dieser Nachricht wird der Geschäftsvorfall „Angebotsannahme“ ausgeführt. Die Nachricht wird ebenso zur Bestätigung eines RV-Kapazitätsangebots als Voraussetzung für den Abschluss eines Rahmenver-
trages genutzt.
Ein von der DB InfraGO übergebenes Angebot für eine Zugtrasse bzw. RV-Kapazität darf nur komplett angenommen werden. Daher ist die Angabe eines Start- und Zielbahnhofs und einer Verkehrszeitregelung für einen Abschnitt des
Trassenangebots in der Struktur „AffectedSection“ nicht erforderlich und kann entfallen. Die Struktur „AffectedSection“ ist nicht zu befüllen und wegzulassen.
Abbildung 4 PathConfirmedMessage Hauptstruktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 26

## Seite 27

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathConfirmedMessage 1 Die Nachricht wird vom EVU gesendet, um ein vom EIU gesendetes Angebot für eine Trasse bzw.
RV-Kapazität zu bestätigen. Dadurch kommt ein Trasseneinzelnutzungsvertrag zustande bzw. wird
der Abschluss eines Rahmenvertrages vorbereitet.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen.
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID des angenommenen Angebots (Pflichtan- Zusätzlich Angabe der ReferenceTRID und RouteID des an-
gabe) genommenen Angebots möglich
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer angenommener Ange-
bote.
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, so- Siehe Kapitel 3.16"Codelisten"
fern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 2=Request, 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information 1. Kennzeichnet eine besondere Ausprägung der Nach-
richt für den jeweiligen Status innerhalb des Basisprozes-
ses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1) "
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16 "Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16 "Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....AffectedSection 0..N Beschreibt den angenommenen Abschnitt eines übergebenen Trassenangebots bzw. RV-Kapazi- Von DB InfraGO übergebene Angebote für Trassen und
tätsangebots und dessen Verkehrszeitregelung RV-Kapazitäten dürfen nur vollständig angenommen wer-
den. Daher ist die Angabe nicht erforderlich und wegzulas-
sen.
Tabelle 5: PathConfirmedMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 27

## Seite 28

2.2.5 PathCanceledMessage
Die Nachricht wird vom EVU an das EIU gesendet, um einen Vertrag ganz oder teilweise zu stornieren. Mit der Übermittlung dieser Nachricht werden der Geschäftsvorfall „Stornierung“ (einer Trasse bzw. RV-Kapazität) ausgeführt.
In der Struktur „PlannedCalendar“ der Struktur „AffectedSection“ sind die zu stornierenden Verkehrstage der mit der PathID referenzierten gebuchten Trasse bzw. RV-Kapazität anzugeben.
Zusätzlich können noch weitere Angaben in der Struktur „NetworkSpecificParameter“ erforderlich sein (siehe Kapitel 3.14).
Abbildung 5 PathCanceledMessage Hauptstruktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 28

## Seite 29

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathCanceledMessage 1 Die Nachricht wird von EVU an das EIU gesendet, um eine Trasse bzw. RV-Kapazität ganz bzw. teil-
weise zu stornieren.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen.
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID der gebuchten Trasse bzw. RV-Kapazität, die Zusätzlich Angabe der ReferenceTRID und RouteID der
storniert werden soll (Pflichtangabe) Trasse, die storniert werden soll
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer Stornierungen von Tras-
sen bzw. RV-Kapazitäten des gleichen Zuges
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, so- Siehe Kapitel 3.16 "Codelisten"
fern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information 1. Kennzeichnet eine besondere Ausprägung der Nach-
richt für den jeweiligen Status innerhalb des Basisprozes-
ses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1)
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16 "Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16 "Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....AffectedSection 1..N enthält Angaben zu Start- und Zielbf. der zu stornierenden Trasse bzw. RV-Kapazität und der zu Trassen können über den gesamten Verkehrszeitraum
stornierenden Verkehrstage oder für einen Zeitabschnitt oder an einzelnen Verkehrsta-
gen über den gesamten Laufweg oder nur auf einem Teil-
abschnitt der Trasse storniert werden (Geschäftsvorfall
„Stornierung“). Der in der Nachricht angegebene Kalender
bezieht sich auf den in StartOfSection angegebenen TLP.
RV-Kapazitäten können nur für vollständige, in der Zukunft
liegende Fahrplanjahre gesamthaft storniert werden.
Bei der DB InfraGO ist pro Nachricht nur eine AffectedSec-
tion erlaubt.
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert
werden; das Freitextfeld darf nur Angaben enthalten, die
nicht in einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können.
Tabelle 6: PathCanceledMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 29

## Seite 30

2.2.6 PathNotAvailableMessage
Die Nachricht wird vom EIU an das EVU gesendet, um zu signalisieren, dass eine Trasse bzw. RV-Kapazität nicht (mehr) verfügbar ist. Sofern von DB InfraGO nicht im Anschluss daran mit einer PathDetailsMessage ein neues, netzausgelös-
tes Angebot übergeben wird, entspricht dies einer netzausgelösten Stornierung. Diese Nachricht dient zur Ausführung der Geschäftsvorfälle „Netzausgelöste Stornierung“ (einer Trasse bzw. RV-Kapazität) oder zur Ankündigung der
nachfolgenden Übergabe eines netzausgelösten Angebots.
In der Struktur „PlannedCalendar“ der Struktur „AffectedSection“ sind die zu stornierenden Verkehrstage der mit der PathID referenzierten gebuchten Trasse bzw. RV-Kapazität anzugeben.
Zusätzlich können noch weitere Angaben in der Struktur „NetworkSpecificParameter“ erforderlich sein (siehe Kapitel 3.14.7).
Abbildung 6 PathNotAvailableMessage Hauptstruktur
Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
PathNotAvailableMessage 1 Die Nachricht wird vom EIU an das EVU gesendet, um zu signalisieren, dass eine Trasse bzw. RV-
Kapazität nicht (mehr) verfügbar ist.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifiers 0..1 Eindeutige Identifizierung der Nachricht selbst, der Nachricht, auf die sich die Nachricht bezieht Siehe Kapitel 3.4 "Identifiers"
und ggf. auf Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRe-
questID, CaseReferenceID
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase; Angabe der PathID der gebuchten Trasse bzw. RV-Kapazität, die Zusätzlich Angabe der ReferenceTRID und RouteID der
netzausgelöst storniert oder mit einem nachfolgenden netzausgelösten Angebot geändert wer- Trasse bzw. RV-Kapazität, die netzausgelöst storniert oder
den soll (Pflichtangabe) geändert werden soll
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eigenen Namen, Dient nur der Gruppierung der beiden nachfolgenden Ele-
die die beiden nachfolgenden Elemente enthält. mente.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Ggf. Angabe der PathID anderer Stornierungen bzw. netz-
ausgelösten Änderungen zu Trassen bzw. RV-Kapazitäten
des gleichen Zuges
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportIdentifiers, so- Siehe Kapitel 3.16"Codelisten"
fern zutreffend.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 30

## Seite 31

Strukturelement Vor- Beschreibung Bemerkungen
kom-
men
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) 1. Identifiziert den Basisprozess der Nachricht in der Pla-
nungsphase
2. Siehe Kapitel 3.5 "Attribute auf Messageebene"
3. Ausprägungen: 3=Modification
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest angegebene Siehe Kapitel 3.16"Codelisten"
Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information 1. Kennzeichnet eine besondere Ausprägung der Nachricht
für den jeweiligen Status innerhalb des Basisprozesses
2. Indikation, zu welchem Prozessschritt in der Planungs-
phase die Nachricht gehört
3. Liste der Ausprägungen siehe Kapitel 3.16.1) "Identifi-
ziert
I....CoordinatingIM 0..1 CompanyCode des koordinierenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16 "Codelisten"
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch sein mit dem 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durchführenden EVU (Responsib-
2. Siehe Kapitel 3.16 "Codelisten"
leRU); Angabe ist nur bei interoperablen Zügen verpflichtend, wenn eines der beteiligten EVU die
Harmonisierung und Koordination in der Vorplanungsphase übernimmt.
I....AffectedSection 1..N enthält Angaben zu Start- und Zielbf. der zu stornierenden Trasse und der zu stornierenden Ver- Trassen können über den gesamten Verkehrszeitraum
kehrstage oder für einen Zeitabschnitt oder an einzelnen Verkehrsta-
gen über den gesamten Laufweg oder nur auf einem Teil-
abschnitt der Trasse storniert werden (Geschäftsvorfall
„netzausgelöste Stornierung“). Der in der Nachricht ange-
gebene Kalender bezieht sich auf den in StartOfSection an-
gegebenen TLP. RV-Kapazitäten können nur für vollstän-
dige, in der Zukunft liegende Fahrplanjahre gesamthaft
storniert werden.
I....InterruptionInformation 1 Unterbrechungsinformationen bei Nichtverfügbarkeit Siehe Kapitel 3.13
I....FreeTextField 0..6 Frei definierbarer Text Durch max. 6 Wiederholungen kann die Textlänge variiert
werden; das Freitextfeld darf nur Angaben enthalten, die
nicht in einem definierten Attribut (Strukturelement) der
Nachricht angegeben werden können. Ggf. wird hier durch
DB InfraGO zusätzlich eine Begründung für die netzausge-
löste Stornierung der Trasse bzw. der beabsichtigten Über-
gabe eines alternativen Angebots angegeben.
Tabelle 7: PathNotAvailableMessage Hauptstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 31

## Seite 32

2.2.7 ReceiptConfirmationMessage
Gemäß der TAF-TSI/TAP-TSI-Dokumentation erfolgt bei einem erfolgreichen Empfang einer Nachricht vom Empfänger eine Bestätigung mittels einer „ReceiptConfirmationMessage“ an den Absender der Nachricht. Alle gesendeten
Nachrichten seitens DB InfraGO sind nach erfolgreichem Eingang durch das empfangene EVU mit einer „ReceiptConfirmationMessage“ zu bestätigen. Umgekehrt bestätigt DB InfraGO ebenfalls immer den erfolgreichen Empfang einer
nachricht gegenüber dem absendenden EVU.
DB InfraGO sendet eine „ReceiptConfirmationMessage“ immer nach dem erfolgreichen Empfang folgender Nachrichten:
 PathRequestMessage
 PathConfirmedMessage
 PathDetailsRefusedMessage
 PathCanceledMessage
 ObjectInfoMessage
 UpdateLinkMessage
In der Gegenrichtung erwartet DB InfraGO vom empfangenden EVU eine „ReceiptConfirmationMessage“ immer nach dem erfolgreichen Empfang folgender Nachrichten:
 PathDetailsMessage,
 PathNotAvailableMessage
 ObjectInfoMessage
 UpdateLinkMessage
In einer „ReceiptConfirmationMessage“ zu einer „PathRequestMessage“ für den Geschäftsvorfall Trassenerstanmeldung übermittelt DB InfraGO nur dann eine OTN, wenn diese durch das sendende EVU bereits mitgeteilt wurde. Bei
Bestellungen ohne OTN sendet die DB InfraGo AG keine OTN. Die OTN wird in der Struktur „AffectedSection“ angegeben. Nur für diesen Zweck ist die Nutzung der Struktur „AffectedSection“ in der „ReceiptConfirmationMessage“ sinnvoll.
In allen anderen o. g. Fällen bezieht sich die „ReceiptConfirmationMessage“ immer vollständig auf die zuvor empfangene Nachricht. Einschränkende Angaben hinsichtlich des Zug- oder Trassenverlaufs oder der Verkehrstage sind weder
sinnvoll noch zulässig. Die Struktur „AffectedSection“ ist in diesen Fällen nicht zu befüllen und wegzulassen.
Weitere Informationen zu den Strukturen „MessageHeader“, „Identifiers“, „TypeOfRequest“, TypeOfInformation“ und „AffectedSection“ sind den jeweiligen Unterkapiteln zu Kapitel 3 zu entnehmen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 32

## Seite 33

Abbildung 7 ReceiptConfirmationMessage Struktur
Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
ReceiptConfirmationMessage 1 Die Nachricht wird nach erfolgreichem Empfang einer Nachricht vom Empfänger an Die Nachricht ist auch dann zu senden, wenn die Nachrichtenabfolge eine quali-
den Absender der Nachricht gesendet. fizierte Antwort des Empfängers auf die empfangene Nachricht vorsieht.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....Identifiers 0..1 Eindeutige Identifizierung der empfangenen Nachricht. Alle Identifier aus der empfangenen Nachricht werden unverändert übernom-
men
I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Übernahme der PlannedTransportIdentifiers aus der empfangenen Nachricht
I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eige- Dient nur der Gruppierung der beiden nachfolgenden Elemente.
nen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase
I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportI- Siehe Kapitel 3.16"Codelisten"
dentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) Der Wert in der vorab vom EVU bzw. EIU gesendeten Nachricht wird unverän-
dert übernommen (sofern angegeben)
I....TypeOfInformation 0..1 Typ der Information Der Wert in der vorab vom EVU bzw. EIU gesendeten Nachricht wird unverän-
dert übernommen (sofern angegeben)
I....AffectedSection 0..1 Enthält den in der empfangenen Nachricht angegebenen Start- und Zielbf. und deren Die Struktur wird nur in der Antwort auf eine erfolgreich übernommene „Path-
Verkehrszeitregelung RequestMessage“ für den Geschäftsvorfall Trassenerstanmeldung zur Angabe
der OTN genutzt. In allen anderen Fällen wird die Struktur nicht befüllt und weg-
gelassen.
I....I....StartOfSection 1 Erster Zuglaufpunkt (ZLP) aus der empfangenen Nachricht Unveränderte Übernahme der analogen Informationen entweder aus der ersten
PlannedJourneyLocation der Struktur „PathInformation“ oder aus dem Element
„StartOfSection“ der Struktur AffectedSection in der vorab empfangenen Nach-
richt
I....I....I....CountryCodeISO 1 CountryCode des LocationPrimaryCodes Gemäß ISO 3166
I....I....I....LocationPrimaryCode 1 LocationPrimaryCode
I....I....I....PrimaryLocationName 0..1 Name des ZLP/TLP
I....I....I....LocationSubsidiaryIdentification 0..1 LocationSubsidiaryIdentifikation
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 33

## Seite 34

Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
I....I....I....BookedLocationDateTime 0..1 Angabe der Abfahrt-/Durchfahrtszeit mit Tagesdatum Angabe wird nur in betrieblichen Meldungen der betrieblichen Phase bei Nut-
zung von Tagesobjekten der Zugtrasse verwendet.
I....I....I....BookedLocationTime 0..1 Angabe der Abfahrt-/Durchfahrtszeit Angabe wird nur in Meldungen des Planungsprozesses mit einem Bezug auf das
Kalenderobjekt (PlannedCalendar) der Zugtrasse verwendet. Die Angabe ist im-
mer dann zu befüllen, wenn der als StartOfSection ausgewählte ZLP/TLP im Zug-
lauf bzw. in der Zugtrasse mehrfach vorkommt.
I....I....EndOfSection 1 Letzter Zuglaufpunkt (ZLP) aus der empfangenen Nachricht Unveränderte Übernahme der analogen Informationen entweder aus der letz-
ten PlannedJourneyLocation der Struktur „PathInformation“ oder aus dem Ele-
ment „EndOfSection“ der Struktur AffectedSection in der vorab empfangenen
Nachricht
I....I....I....CountryCodeISO 1 CountryCode des LocationPrimaryCodes Gemäß ISO 3166
I....I....I....LocationPrimaryCode 1 LocationPrimaryCode
I....I....I....PrimaryLocationName 0..1 Name des ZLP/TLP
I....I....I....LocationSubsidiaryIdentification 0..1 LocationSubsidiaryIdentifikation
I....I....I....BookedLocationDateTime 0..1 Angabe der Ankunfts-/Durchfahrtszeit mit Tagesdatum Angabe wird nur in betrieblichen Meldungen der betrieblichen Phase bei Nut-
zung von Tagesobjekten der Zugtrasse verwendet.
I....I....I....BookedLocationTime 0..1 Angabe der Ankunfts-/Durchfahrtszeit Angabe wird nur in Meldung des Planungsprozesses mit einem Bezug auf das Ka-
lenderobjekt (PlannedCalendar) der Zugtrasse verwendet. Die Angabe ist immer
dann zu befüllen, wenn der als EndOfSection ausgewählte ZLP/TLP im Zuglauf
bzw. in der Zugtrasse mehrfach vorkommt.
I....I....OperationalTrainNumber 0..1 Zugnummer (OTN) aus der vorab vom EVU gesendeten Nachricht Der erste angegebene Wert für „OperationalTrainNumber“ in der Struktur „Pa-
thInformation“ in „PlannedJourneyLocation“ in der vorab vom EVU/EIU gesen-
deten Nachricht „PathRequestMessage“ wird unverändert übernommen, sofern
eine Angabe durch das EVU erfolgte.
I....I....PlannedCalendar 1 Kalender der PathInformation aus der vorab vom EVU gesendeten Nachricht Unveränderte Übernahme des PlannedCalendar der Struktur „PathInformation“
aus der vorab vom EVU/EIU gesendeten Nachricht
|….AffectedLocation 0..1 Enthält die betroffene Betriebsstelle Wird bei der DB InfraGO nicht verwendet
|….|….Location 1
I....I....I....CountryCodeISO 1 CountryCode des LocationPrimaryCodes Gemäß ISO 3166
I....I....I....LocationPrimaryCode 1 LocationPrimaryCode
I....I....I....PrimaryLocationName 0..1 Name des ZLP/TLP
I....I....I....LocationSubsidiaryIdentification 0..1 LocationSubsidiaryIdentifikation
|….|….LocationDateTime Angabe der Ankunfts-/Durchfahrtszeit mit Tagesdatum
I....I....OperationalTrainNumber Zugnummer (OTN) aus der vorab vom EVU gesendeten Nachricht
|….Remarks 0..1 Freitextfeld Wird bei der DB InfraGO nicht verwendet
|InternalReferenceIdentifier 0..1 Angabe einer IT Referenz zur internen Weiterleitung Wird bei der DB InfraGO nicht verwendet
I....RelatedReference 1 Identifikation der Nachricht, auf welche sich diese quittierende Nachricht bezieht.
I....I....RelatedType 1 MessageType der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme des MessageType aus der vorab vom EVU oder EIU
gesendeten Nachricht
I....I.... RelatedIdentifier 1 MessageIdentifier der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme des MessageIdentifiers der vorab vom EVU oder EIU
gesendeten Nachricht
I....I.... RelatedMessageDateTime 1 MessageDateTime der referenzierten Nachricht des EVU oder EIU Unveränderte Übernahme der MessageDateTime aus der vorab vom EVU oder
EIU gesendeten Nachricht
I....I.... RelatedSenderReference 0..1 Referenzdaten des absendenden Systems In dem Feld kann das originäre System des Absenders, welches Auslöser der
Nachricht ist, angegeben werden, z. B. dann, wenn ein weiteres System als Zwi-
schensystem verwendet wurde (z. B: PCS als Broker)
Tabelle 8: ReceiptConfirmationMessage Struktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 34

## Seite 35

2.2.8 ErrorMessage
Die Nachricht wird vom Empfänger einer Nachricht an den Absender der Nachricht übermittelt, wenn eine vorab empfangene Nachricht vom Empfänger nicht verarbeitet werden kann.
Hierbei kann es sich um erkannte Fehler bei der automatischen fachlichen / technischen Eingangsprüfung oder um technische Probleme handeln.
Die Nachricht wird von DB InfraGO vor allem zur Ausführung des Geschäftsvorfalls „Zurückweisung“ verwendet. Sie enthält die erkannten Fehler und übermittelt unter Verwendung von Kodierungen detaillierte Informationen zu den
Fehlern und Hinweise für eine erforderliche Korrektur. Im Nachgang kann das EVU die Nachricht mit korrigierten Angaben und gleichem Identifier, MessageStatus und TypeOfRequest noch einmal schicken.
In den meisten Fällen wird der laufende Prozess nicht abgebrochen (außer bei Anwendung der Nachricht für den Geschäftsvorfall „Zurückweisung“. Der Empfänger der ErrorMessage muss jedoch die fehlerhafte Nachricht korrigieren und
erneut senden, damit der Prozess fortgesetzt werden kann. In bestimmten Fällen wird jedoch eine mit einer ErrorMessage zurückgewiesene Message als nicht empfangen betrachtet bzw. der laufende Prozess ggf. beendet. In diesem Fall
kann der Prozess durch erneutes Senden der korrigierten Nachricht ggf. unter Verwendung eines neuen Identifiers neu begonnen werden. Detaillierte Aussagen dazu können aus den Erläuterungen zu den betreffenden Nachrichten bzw.
der Tabelle 2 des Hauptdokuments entnommen werden.
Weitere Informationen zu den Strukturen „MessageHeader“, „MessageStatus“, „AdministrativeContactInformation“ und „Identifiers“ sind den jeweiligen Unterkapiteln zu Kapitel 3 zu entnehmen.
Abbildung 8 ErrorMessage Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 35

## Seite 36

Strukturelement Vorkom- Beschreibung Bemerkungen / Regeln
men
ErrorMessage 1 Wird von DB InfraGO übermittelt, wenn eine vorab vom EVU gesendete Nachricht bei DB InfraGO Die Nachricht enthält detaillierte Informationen zum Feh-
nicht verarbeitet werden kann. ler und Hinweise über eine erforderliche Korrektur.
Hierbei kann es sich um erkannte Fehler bei der automatischen fachlichen und technischen Ein-
gangsprüfung oder um technische Probleme handeln.
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Sender bereit gestellt Ausprägungen: 1 = creation
I....AdministrativeContactInformation 1 Kontaktinformationen des Senders (hier DB InfraGO)
I....ErrorCauseReference 0..1 Referenziert die vorab empfangenen Nachricht, die den Fehler verursacht hat
I....I....MessageReference 1 Identifiziert die vorab empfangenen Nachricht Unveränderte Übernahme der Struktur „MessageRefe-
rence“ des „MessageHeader“ aus der vorab vom EVU ge-
sendeten Nachricht
I....I....MessageSenderReference 0..1 Referenzdaten des absendenden Systems zu der zuvor empfangenen Nachricht Kann angegeben werden, wenn ein weiteres System als
Zwischensystem verwendet wurde, z. B: PCS als Broker ge-
nutzt wurde.
|….Error 1..N Auflistung von erkannten Fehlern
I....I....TagReference 0..1 Name desjenigen Elements der Original-Nachricht, welches den Fehler verursacht hat.
I....I….TypeOfError 1 Typ des Fehlers 1 = FUNCTIONAL
2 = TECHNICAL
0 = BOTH
I....I….Severity 1 Schweregrad des Fehlers 1 = WARNING
2 = ERROR
DB InfraGO verwendet vorerst nur den Schweregrad 2.
I....I….ErrorCode 1 Fehler-Code 1. Zwischen 5000 und 6000 = Standard-Werte, zentral ver-
waltet
2. Größer als 6000 = national vereinbart (Anlage 9)
I....I….FreeTextField 1 Frei definierbarer Text Das Freitextfeld darf nur Angaben enthalten, die nicht in
einem definierten Attribut (Strukturelement) der Nach-
richt angegeben werden können.
I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Unveränderte Übernahme der Identifier aus der vorab
vom EVU gesendeten Nachricht
I....TransportOperationalIdentifiers 0..N Identifiers des EIU in der operativen Phase Wird in einer ErrorMessage als Reaktion auf Messages der
Planungsphase nicht angewendet.
Tabelle 9: ErrorMessage Struktur Beschreibung
2.2.9 ObjectInfoMessage
Die Nachricht kann sowohl vom EVU als auch von DB InfraGO gesendet werden und dient dem Austausch von Informationen zu bestehenden Objekten. In der Planungsphase wird die ObjectInfoMessage für den Austausch von Informatio-
nen zu einem CaseReferenceObjekt und für den Route-Updateprozess genutzt. Für Änderungen an gebuchten Zugtrassen ist ausschließlich der Änderungsprozess zu nutzen (siehe Hauptdokument Kap. 5.3.15).
Die Strukturen TrainInformationExtended bzw. PathInformationExtended ermöglichen die Angabe von Detailinformationen zu mehreren Objekten. Damit ist es möglich mit einer Anfrage z. B. zu einer TrainFamily (Angabe der Refe-
renceTRID im Element Identifier) alle aktuell vorhandenen Route-Objekte, PathRequest-Objekte und die verlinkten Trassen in der Antwort bereitzustellen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 36

## Seite 37

Abbildung 9 ObjectInfoMessage Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 37

## Seite 38

Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
ObjectInfoMessage 1 Message zur Anfrage zur Übermittlung von Informationen zu bestehenden Objekten,
deren Übermittlung selbst und zur Aktualisierung von Inhalten von Objekten
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation, 2=modification, 3=deletion
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Identifier 1 Eindeutiger Identifier des Objektes, zu welchem Informationen angefordert bzw. Bei Angabe einer RouteID, PathRequestID oder PathID ist zusätzlich die referen-
ausgetauscht werden. zierende ReferenceTRID anzugeben.
I....ReferenceTRID 0..1 ReferenceTRID des ReferenceTrains, auf welchen sich die in der Nachricht enthalte-
nen Objekte beziehen.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....ObjectInfoType 1 Typ der ObjectInfoMessage Angabe des Nutzungszwecks
I....I....Code 1 Codierung des Nutzungszweckes R = request info about object;
I = Information about object;
U = Update information on object (Verwendung in der Planungsphase nur für
Update der Objekte CaseReference und Route)
N = information about a new object,
O = request about object and linked objects
I....CoordinatingIM 0..1 CompanyCode des federführenden EIU 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Siehe Kapitel 3.16"Codelisten"
3. Die Information kann bei interoperablen Zügen angegeben werden, sofern
die beteiligten EIU ein federführendes EIU benennen.
I....LeadRU 0..1 CompanyCode des federführenden bzw. koordinierenden EVU; muss nicht identisch 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
sein mit dem Besteller/Vertragspartner (ResponsibleApplicant) oder mit dem durch-
2. Siehe Kapitel 3.16"Codelisten"
führenden EVU (ResponsibleRU); Angabe ist nur bei interoperablen Zügen verpflich-
tend, wenn eines der beteiligten EVU die Harmonisierung und Koordination in der
Vorplanungsphase übernimmt.
I....TypeOfRequest 0..1 Typ der Nachricht (Basisprozess) Wird nicht verwendet
I....ProcessType 0..1 Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest Siehe Kapitel 3.16"Codelisten"
angegebene Prozess detaillierter spezifiziert werden.
I....TypeOfInformation 0..1 Typ der Information Wird nicht verwendet
I....TrainInformationExtended 0..N Zusammenfassung von TrainInformationen eines oder mehrerer Objekte, die durch Struktur dient der Gruppierung, sofern mehrfach Angaben zu Routen oder Path-
die Anfrage oder Antwort betroffen sind Requests in der Message übermittelt werden sollen.
I....I....Identifiers 1 Eindeutige Identifizierung eines oder mehrerer Objekte, die durch die Anfrage oder Siehe Kapitel 3.4 "Identifiers"
Antwort betroffen sind
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRequestID, CaseReferenceID
I....I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Angabe von ReferenceTRID und RouteID und ggf. CaseReferenceID.
I....I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eige- Dient nur der Gruppierung der beiden nachfolgenden Elemente.
nen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Angabe von ID anderer Objekte, die mitberücksichtigt werden sollen oder im
Kontext zu bearbeiten sind bzw. auf die referenziert wird (z. B. geänderte
Trasse).
I....I....I….I....ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportI- Siehe Kapitel 3.16"Codelisten"
dentifiers, sofern zutreffend.
I....I....TrainInformation 1 TrainInformation eines PathRequests, der durch die Anfrage oder Antwort betroffen
ist
I....I....I....PlannedJourneyLocation 2..N Zuglaufpunkte des Zuges
I....I....I....PlannedCalendar 1 Verkehrstageregelung des Zuges, gültig für den gesamten Zuglauf
I....I....I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen
soll
I....I....PathInformationExtended 0..N Zusammenfassung von PathInformationen eines oder mehrerer PathRequest-Ob- Struktur dient der Gruppierung, sofern Angaben zu mehreren PathRequests in
jekte, die durch die Anfrage oder Antwort betroffen sind der Message übermittelt werden sollen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 38

## Seite 39

Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
I....I....I....Identifiers 1 Eindeutige Identifizierung eines oder mehrerer Objekte, die durch die Anfrage oder Siehe Kapitel 3.4 "Identifiers"
Antwort betroffen sind
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRequestID, CaseReferenceID
I....I....I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Angabe von ReferenceTRID, RouteID, PathRequestID (alle verpflichtend) und ggf.
CaseReferenceID.
I....I....I....I....komplexe Struktur ohne Bezeich- 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eige- Dient nur der Gruppierung der beiden nachfolgenden Elemente.
nung nen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....I....I....RelatedPlannedTransportIdentifi- 1 Bezug auf andere Identifiers in der Planungsphase Angabe von ID anderer Objekte, die mitberücksichtigt werden sollen oder im
ers Kontext zu bearbeiten sind bzw. auf die referenziert wird (z. B. geänderte
Trasse).
I....I....I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportI- Siehe Kapitel 3.16"Codelisten"
dentifiers, sofern zutreffend.
I....I....I....PathInformation 1 PathInformation eines PathRequest-Objekts, das durch die Anfrage oder Antwort be-
troffen ist
I....I....I....I....PlannedJourneyLocation 2..N Zuglaufpunkte der Fahrlage
I....I....I....I....PlannedCalendar 1 Verkehrstageregelung des PathRequests
I....I....I....I....RequestedCalendar 0..1 Bleibt leer
I....PathInformationExtended 0..N Zusammenfassung von PathInformationen eines oder mehrerer Objekte Path, die Struktur dient der Gruppierung, sofern mehrere Paths in der Message übermit-
durch die Anfrage oder Antwort betroffen sind telt werden sollen.
I....I....Identifiers 0..1 Eindeutige Identifizierung eines oder mehrerer Objekte, die durch die Anfrage oder Siehe Kapitel 3.4 "Identifiers"
Antwort betroffen sind
Mögliche ID: ReferenceTRID, RouteID, PathID, PathRequestID, CaseReferenceID
I....I....I....PlannedTransportIdentifiers 1..N Identifiers in der Planungsphase Angabe der PathID
I....I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eige- Dient nur der Gruppierung der beiden nachfolgenden Elemente.
nen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase Angabe von ID anderer Objekte, die mitberücksichtigt werden sollen oder im
Kontext zu bearbeiten sind bzw. auf die referenziert wird (z. B. geänderte
Trasse).
I....I....I….I....ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportI- Siehe Kapitel 3.16"Codelisten"
dentifiers, sofern zutreffend.
I....I....PathInformation 1 PathInformation eines Paths, der durch die Anfrage oder Antwort betroffen ist Wird nur angegeben, wenn durch die Antwort Angaben zu einem Objekt erfol-
gen bzw. zugeordnet werden können.
I....I....I....PlannedJourneyLocation 2..N Zugtrassenlaufpunkte
I....I....I....PlannedCalendar 1 Verkehrstageregelung des Paths
I....I....I....RequestedCalendar 0..1 Unveränderte Wiederholung der Struktur PlannedCalendar in der PathInformation
der zu einem Path gehörenden PathRequestMessage
I....FreeTextField 0..6 Frei definierbarer Text Zur Übermittlung ergänzender, unstrukturierter Informationen, für die kein defi-
niertes Element vorhanden ist und genutzt werden kann. Durch max. 6 Wieder-
holungen kann die Textlänge variiert werden.
I....Parameters 0..N Nationale spezifische Parameter (Attribute, Felder) des EIU Wird ausschließlich zur Übermittlung der Parameter eines CaseReference-Objek-
tes genutzt, sofern dieses Objekt Gegenstand der Antwort auf eine Anfrage zur
Informationsbereitstellung ist.
I....I....Name 1 Name des Parameters Generischer Name des Parameters
I....I....Value 1 Wert des Parameters Wert des Parameters
Tabelle 10 ObjectInfoMessage Struktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 39

## Seite 40

2.2.10 UpdateLinkMessage
Die UpdateLinkMessage dient primär der Änderung der Verlinkung zwischen einem Objekt Zug (Train) einer Zugfamilie, referenziert durch die ReferenceTRID, und einer gebuchten Trasse (Path). Diese Option wird jedoch in der Kommuni-
kation zwischen EVU und DB InfraGO in der Planungsphase nicht genutzt. Änderungen der Verlinkung zwischen den Objekten Zug und Zugtrasse erfolgen ausschließlich unter Nutzung der für den Basisprozess „Modification“ definierten
Nachrichtenabfolgen. DB InfraGO wird in der Planungsphase ausschließlich die Reportfunktion zur Nutzung anbieten, die der Abfrage der aktuellen Verlinkungen zwischen Zugobjekten einer Train-Family (ReferenceTRID) und deren
gebuchten Trassen (Paths) dient.
Abbildung 10 UpdateLinkMessage Struktur
Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
UpdateLinkMessage 1
I....MessageHeader 1 Für alle Nachrichten erforderlich
I....MessageStatus 1 Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1. Siehe Kapitel 3.5 "Attribute auf Messageebene"
2. Ausprägungen: 1=creation, 2=modification, 3=deletion
I....AdministrativeContactInformation 1 Kontaktinformationen des Absenders.
I....Operation 1..N Beschreibung der auszuführenden Operation
I....I....Type 1 Codierung der Operation; ist in der xsd als Attribut des Elementes „Operation“ ange- Mögliche Ausprägungen:
geben. - break the link (keine Nutzung in der Planungsphase),
- establish the link (keine Nutzung in der Planungsphase,
- information (report) about the link
I....I....Identifiers 1..2 Identifiers in der Planungsphase
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 40

## Seite 41

Strukturelement Vor- Beschreibung / Bemerkungen / Regeln
kom- Name bzw. Wert des Parameters in NetworkSpecificPara-
men meter
I....I....I....PlannedTransportIdentifiers 1..N Angabe der Identifier der betroffenen Objekte Zug und Trasse Identifier eines oder mehrerer durch die Nachricht betroffenen Objekte, für wel-
che die Verlinkung geändert oder neu etabliert werden soll, d. h. es sind die zu-
treffenden ReferenceTRID, RouteID und PathID anzugeben.
I....I....I....komplexe Struktur ohne Bezeichnung 0..N komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der xsd ohne eige- Dient nur der Gruppierung der beiden nachfolgenden Elemente.
nen Namen, die die beiden nachfolgenden Elemente enthält.
I....I....I....I....RelatedPlannedTransportIdentifiers 1 Bezug auf andere Identifiers in der Planungsphase
I....I....I....I….ReasonOfReference 0..1 Angabe eines Grundes für die Verwendung des Elements RelatedPlannedTransportI- Siehe Kapitel 3.16"Codelisten"
dentifiers, sofern zutreffend.
I....ReferenceTrainIDSubCalendar 0..1 (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird.
I....I....Action 0..1 Angabe der auszuführenden Aktion; ist in der xsd als Attribut des Elementes „Action“
angegeben.
I....I....I....Type 1 Kodierung der auszuführenden Aktion TS = Train shifting (keine Nutzung in der Planungsphase)
TC = Train cancellation (keine Nutzung in der Planungsphase)
COT = Change of train (keine Nutzung in der Planungsphase)
LR = Link report
I....I....Status 0..1 Angabe des Bearbeitungsstatus der UpdateLinkMessage¸; ist in der xsd als Attribut
des Elementes „Status“ angegeben.
I....I....I....Type 1 Kodierung des Status; diese dienen dazu, die fachlichen Fälle zu benennen, in denen P = proposed
eine Bestätigung der UpdateLinkMessage erforderlich ist.
R = requested
C = confirmed
LNC = link not confirmed
LR = Link refused
E = exists
I....I....Procedure 0..1 Ergänzende Angabe zur auszuführenden Operation. NP = New path
EP = Existing path
PK = Path kept
PNK = Path not kept
TC = Train cancelled
TNC = Train not cancelled
I....I....TrainInformation 0..1 Zuginformationen des EVU über den gesamten Zuglauf TrainInformation (Route) des durch die ReferenceTRID referenzierten Zuges
I....I....I....PlannedJourneyLocation 2..N Zuglaufpunkte
I....I....I....PlannedCalendar 1 Verkehrstageregelung des Zuges, gültig für den gesamten Zuglauf
I....I....I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen
soll
I....I....PathInformation 0..1 Zugtrassendaten PathInformation der durch die PathID referenzierten Zugtrasse
I....I....I....PlannedJourneyLocation 2..N Zugtrassenlaufpunkte
I....I....I....PlannedCalendar 1 Kalender; gibt den Verkehrszeitraum und die Verkehrstage der Zugtrasse an. In Ab- Gilt abfahrtsbezogen am Startbahnhof der Zugtrasse
hängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage im
Kalender der PathInformation im Vergleich zu den Verkehrstagen des Refe-
renceTrains oder der Route um die Anzahl der Tageswechsel verschieben.
I....I....I....RequestedCalendar 0..1 Nur für das Objekt Path: Unveränderte Wiederholung der Struktur PlannedCalendar
in der PathInformation der zu einem Path gehörenden PathRequestMessage
I....Parameters 0..N Nationale spezifische Parameter (Attribute, Felder) des EIU Aktuell existieren keine definierten NSP
I....I....Name 1 Name des Parameters Generischer Name des Parameters
I....I....Value 1 Wert des Parameters Wert des Parameters
I....FreeTextField 0..6 Frei definierbarer Text Zur Übermittlung ergänzender, unstrukturierter Informationen, für die kein defi-
niertes Element vorhanden ist und genutzt werden kann. Durch max. 6 Wieder-
holungen kann die Textlänge variiert werden
Tabelle 11 UpdateLinkMessage Struktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 41

## Seite 42

3 Datenfeldbeschreibungen
 In diesem Kapitel werden alle Datenfelder der Haupt- und Unterstrukturen der in der Planungsphase genutzten und in Kapitel 2.2 aufgeführten Nachrichten detailliert beschrieben.
 Da die TAF-TSI/TAP-TSI-Strukturen verschachtelt sind und teilweise Wiederholungen aufweisen, werden die Haupt- und Unterstrukturen und deren Datenfelder in getrennten Kapiteln behandelt.
 Um die Unterstrukturen den jeweiligen Nachrichtentypen zuordnen zu können, sind im Kapitel 2.2 „Hauptstrukturen“ diese Unterstrukturen in der Darstellung der Hauptstruktur der Nachricht integriert.
 In diesem Kapitel werden folgende Strukturen inklusive der wiederum darin enthaltenen Unterstrukturen samt Datenfelder erläutert:
o MessageHeader
o AdministrativeContactInformation
o Identifiers
o Attribute auf Messageebene
o TrainInformation
o PathInformation
o PlannedJourneyLocation
o AffectedSection
o InterruptInformation
o NetworkSpecificParameter
o Codelisten
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 42

## Seite 43

3.1 Spalten der Datenfelder-Tabellen
Spalte Bedeutung
Struktur Struktur der Information ab oberster Ebene der Struktur inklusive aller Unterstrukturen. Die senkrechten Striche symbolisieren dabei die Anordnung jeweils eine Ebene tiefer. Striche auf
gleicher Höhe bedeuten die Zuordnung der Unterstruktur/des Attributs zur gleichen Ebene
Strukturelement Strukturelement, zu dem die als Attribut deklarierte Information gehört
Attribut Attribut
Beschreibung Beschreibung des Attributs
Bemerkungen / Regeln Bemerkungen und Regeln der DB InfraGO für das Attribut, ggf. präzisierend zu den Regeln der TAF-TSI/TAP-TSI
Vorkommen Vorkommen des Attributs bzw. einer Unterstruktur in der (übergeordneten) Struktur, i. d. R. gemäß XSD der TAF-TSI/TAP-TSI (außer Strukturen „NetworkSpecificParameter“); davon für DB
InfraGO definierte Abweichungen sind in der Spalte „Bemerkungen/Regeln“ aufgeführt.
0..1 = Kannfeld
1 = Mussfeld
0..N = Wiederholstruktur (optional)
1..N = Wiederholstruktur (mindestens eine Ausprägung der Struktur)
<zahl>. N = Wiederholstruktur (optional), mindestens durch <zahl> angegebene Anzahl von Ausprägungen; <zahl> stellt dabei den Index (lfd. Nr.) der Ausprägung dar
Typ Datentyp des Attributs gemäß XML Schema (https://www.w3.org/TR/2012/REC-xmlschema11-2-20120405/datatypes.html#built-in-primitive-datatypes)
Länge Länge des Attributs
MinWert Minimalwert des Attributs
MaxWert Maximalwert des Attributs
Ausprägung Die für das betreffende Attribut gültigen Ausprägungen (verschiedene Darstellungen)
 Als Werteauflistung
 Als Verweis auf das Kapitel 3.16„Codelisten“
 Als Verweis auf die Stammdaten (siehe dazu auch Kapitel 4)
Muster Muster (Pattern) zur Bildung des Attributwerts bzw. Beispiel
EVU ➔ EIU Auf „Message“-Ebene dokumentieren die Spalten „EVU ➔ EIU“ und „EIU ➔ EVU“, für welche Nachrichtenrichtung („Von EVU nach InfraGO“ bzw. „Von InfraGO nach EVU“) das jeweilige
Attribut genutzt werden muss/kann
EIU ➔ EVU Auf „Message“-Ebene dokumentieren die Spalten „EVU ➔ EIU“ und „EIU ➔ EVU“, für welche Nachrichtenrichtung („Von EVU nach InfraGO“ bzw. „Von InfraGO nach EVU“) das jeweilige
Attribut genutzt werden muss/kann
Train / Path in PR Auf „Location“-Ebene (Struktur „PlannedJourneyLocation“ und Unterstrukturen) dokumentiert diese Spalte, wie in der Message „PathRequestMessage“ (PR) in den Strukturen „TrainInforma-
tion“ bzw. „PathInformation“ das jeweilige Attribut genutzt werden muss/kann
Path in PD Auf „Location“-Ebene (Struktur „PlannedJourneyLocation“ und Unterstrukturen) dokumentiert diese Spalte, wie in der Message „PathDetailsMessage“ (PD) in der Struktur „PathInformation“
das jeweilige Attribut genutzt werden muss/kann.
Relevant Sagt aus, ob das Attribut verwendet wird bzw. wie es genutzt werden kann/muss
Tabelle 12 Spalten Datenfeldertabellen
Die Codierung der letzten fünf genannten Spalten („EVU → EIU“, „EIU → EVU“, „Train / Path in PR“, „Path in PD“ und „Relevant“) haben folgende Werte und Bedeutung:
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 43

## Seite 44

M Das Attribut muss vorhanden sein und einen gültigen Wert haben
M (Gn) Hier wird eine Gruppe von Attributen zusammengefasst, von denen genau eine angegeben werden muss.
Die Notation „Gn“ bedeutet: „G“ steht für „Gruppe“, „n“ ist eine laufende Nummer ab 1 und gruppiert die zusammengehörenden Attribute, aus denen der sendende Partner genau einen angeben muss
(z.B.: G1).
Gibt es mehrere Gruppen, haben diese dann die Qualifizierung G2, G3, usw.
bM Hiermit wird ein Attribut ausgewiesen, das bedingt angegeben werden muss (Abhängigkeit von anderen Attributen).
Die Bedingungen sind in den Bemerkungen / Regeln hinterlegt.
K Das Attribut kann bei Bedarf genutzt werden
n/a Das Attribut ist in der Kommunikation über die EVU-Schnittstelle des Bestellsystems der DB InfraGO nicht anwendbar bzw. wird nicht genutzt. Sofern es trotzdem über die EVU-Schnittstelle an DB InfraGO
übergeben wird, wird es im Bestellsystem ignoriert.
Ja Das Attribut oder der Wert oder die Kodierung kann/muss in der Kommunikation über die EVU-Schnittstelle des Bestellsystems der DB InfraGO je nach fachlichem Kontext angewendet oder genutzt
werden.
Tabelle 13 Übersicht verwendete Codierungen in Tabelle 12
Sowohl in der vom EVU an das EIU (DB InfraGO) gesendeten Nachricht „PathRequestMessage“ als auch in der vom EIU (DB InfraGO) an das EVU als Antwort darauf bereitgestellten Nachricht „PathDetailsMessage“ sind einige Strukturen
und Attribute identisch. In bestimmten Fällen werden die Angaben unverändert zurückgegeben, in anderen Fällen haben die Angaben in den Attributen einen anderen Wert oder eine andere Ausprägung und auch eine andere fachliche
Bedeutung. Sofern dies zutreffend ist, wird in der Spalte Bemerkungen/Regeln gesondert darauf hingewiesen. Bei der Übernahme der Daten in das EVU-System muss somit darauf geachtet werden, dass es sich in diesen Fällen eigentlich
um zwei unterschiedliche Attribute handelt, die in Hin- bzw. Rückrichtung jeweils eine andere Bedeutung haben können.
3.2 Struktur „MessageHeader“
3.2.1 Übersicht über die Struktur „MessageHeader“
Diese Struktur identifiziert die Nachricht und ist für jede Nachricht (Message) erforderlich.
Abbildung 11 MessageHeader Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 44

## Seite 45

3.2.2 Datenfelder der Struktur „MessageHeader“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....MessageHeader MessageHeader Für alle Nachrichten erforderlich 1
I....I....MessageReference MessageHeader MessageReference Identifiziert die Nachricht 1
I....I....I....MessageType MessageReference MessageType Typnummer der übermittelten Nachricht Ausprägungen siehe Kapitel 3.16„Codelisten" 1 string 1-4
I....I....I....MessageTypeVersion MessageReference MessageTypeVersion Version des Nachrichtentyps Entspricht der Version der XSD (z.B.: 3.0.0.0). Kann der Emp- 1 string 25
fänger die angegebene Version nicht verarbeiten, erfolgt
eine Zurückweisung (ErrorMessage).
I....I....I....MessageIdentifier MessageReference MessageIdentifier Durch das sendende System zu generierende eindeutige ID der Nachricht 1. Wird vom absendenden System festgelegt 1 string 255 [a-fA-F0-9-]{1,255}
2. Sollte der UUID aus dem SOAP-Header entsprechen
3. Bei Nutzung eines Common Interface (CI) wird diese In-
formation vom CI generiert. Die DB InfraGO nutzt eine
Schnittstelle, die der Spezifikation des CI entspricht (siehe
Anlage 2)
I....I....I....MessageDateTime MessageReference MessageDateTime Durch das sendende System zu generierender Zeitstempel in lokaler Zeit 1. Wird von Absender festgelegt 1 dateTime
2. Es belegt den Zeitpunkt, an dem die Nachricht verschickt
wurde
3. Bei Nutzung des Common Interface (CI) wird diese Infor-
mation vom CI generiert
Die DB InfraGO nutzt eine Schnittstelle, die der Spezifikation
des CI entspricht (siehe Anlage 2)
I....I....MessageRoutingID MessageHeader MessageRoutingID Ergänzende Information für die korrekte Weiterleitung der Nachricht an z.B. um eine bestimmte Applikation zu adressieren; nur rele- 0..1 integer 2 01 99
das Zielsystem vant für den jeweiligen Absender; Empfänger sendet in einer
Antwort die Information unverändert zurück.
Bisher ist im Rahmen ds ujBau Prozesses für die Kommunika-
tion mit der KOMBau die „45“ reserviert. (s. Anlage 10)
I....I....SenderReference MessageHeader SenderReference Durch den Absender genutzte Referenz auf ein internes System z. B. Dateiname oder Nachrichtenbezeichnung aus dem IT- 0..1 string 255
System des Absenders
I....I....Sender MessageHeader Sender Die CompanyCode des Absenders der Nachricht. Zum Beispiel ist in der PathRequestMessage der Com- 1 string 4 0001 ZZZZ [0-9A-Z]{4}
panyCode des Bestellers (ResponsibleApplicant) anzugeben.
Siehe Kapitel 3.16"Codelisten"
I....I....I....CI_InstanceNumber Sender CI_InstanceNumber Nummer der Common Interface Instanz des Absenders 1. In der XSD ist diese Information ein Attribut 1 integer 2 1 99
2. Defaultwert ist "1" (auch bei Nichtnutzung des CI)
3. Bezüglich der Identifikation des IT-Verfahrens des EVU
siehe Anlage 2
I....I....MessageDateTimeCreated MessageHeader MessageDateTimeCrea- Datum und Uhrzeit der Erstellung der Nachricht im originären System des 0..1 dateTime
ted Absenders (Erstellers) der Nachricht
I....I....Recipient MessageHeader Recipient Die CompanyCode des Empfängers der Nachricht. Siehe Kapitel 3.16"Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4}
I....I....I....CI_InstanceNumber Recipient CI_InstanceNumber Nummer der Common Interface Instanz des Empfängers 1. In der XSD ist diese Information ein Attribut 1 integer 2 1 99
2. Defaultwert ist "1" (auch bei Nichtnutzung des CI)
3. Bezüglich der Identifikation des IT-Verfahrens des EVU
siehe Anlage 2
Tabelle 14 MessageHeader Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 45

## Seite 46

3.3 Struktur „AdministrativeContactInformation“
3.3.1 Übersicht über die Struktur „AdministrativeContactInformation“
Diese Struktur beinhaltet Kontaktinformationen des jeweiligen Absenders.
Für die Richtung EVU ➔ EIU beinhalten die Attribute Informationen zur Firma bzw. zum Ansprechpartner des die Nachricht absendenden EVU. Im Kontext dieses Dokuments ist das in der Planungsphase immer das bestellende EVU
(ResponsibleApplicant)
Für die Richtung EIU ➔ EVU beinhalten die Attribute Informationen zum Ansprechpartner beim EIU (DB InfraGO).
Abbildung 12 AdministrativeContactInformation Struktur
3.3.2 Datenfelder der Struktur „AdministrativeContactInformation“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....AdministrativeContactInformation AdministrativeContactIn- Kontaktinformationen des Absenders 1
formation
I....I....Name AdministrativeContactInfor- Name EVU ➔ EIU: Name des Kunden Muss immer angegeben werden 1 string 255
mation
EIU ➔EVU: Name des Ansprechpartners
I....I....Address AdministrativeContactInfor- Address Postadresse des Absenders wird nicht verwendet 0..1 string 255
mation
I....I....eMail AdministrativeContactInfor- eMail EVU➔ EIU: Email-Adresse des Kunden Muss in der Kommunikation mit DB InfraGO immer angege- 0..1 string 70
mation ben werden. Das Format der E-Mail Adresse wird auf Gültig-
EIU ➔ EVU: Email-Adresse des Ansprechpartners
keit geprüft.
I....I....PhoneNumber AdministrativeContactInfor- PhoneNumber EVU ➔ EIU: Telefonnummer des Kunden Muss in der Kommunikation mit DB InfraGO immer angege- 0..1 string 70
mation ben werden
EIU ➔ EVU: Telefonnummer des Ansprechpartners
I....I....FaxNumber AdministrativeContactInfor- FaxNumber EVU ➔ EIU: Faxnummer des Kunden Ist nur anzugeben, wenn eine Übermittlung von Unterlagen 0..1 string 70
mation (z. B: Fplo) per Fax vorgesehen ist.
EIU ➔ EVU: Faxnummer des Ansprechpartners
I....I....FreeTextField AdministrativeContactInfor- FreeTextField Frei definierbarer Text 0..1 string 255
mation
Tabelle 15 AdministrativeContactInformation Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 46

## Seite 47

3.4 Struktur „Identifiers“
3.4.1 Übersicht über die Struktur „Identifiers“
Diese Struktur enthält eindeutige Identifizierungen von Objekten,
 die in der Nachricht selbst,
 die in der Nachricht, auf die sich die Nachricht bezieht oder
 die in Nachrichten, die bei der Bearbeitung berücksichtigt werden sollen
enthalten sind.
Abbildung 13 Identifiers Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 47

## Seite 48

Die aktuelle TAF-TSI/TAP-TSI-Regulierung fordert ab dem Endtermin für die europaweite Umsetzung die Nutzung der Identifier als Pflichtangabe, außer CaseReferenceID, die nur bei Vorliegen einer entsprechenden bilateralen Vereinba-
rung zur Nutzung von CaseReference-Objekten anzugeben ist. Die vorliegende Dokumentation beschreibt daher die Nutzung der Identifikatoren, soweit es für die EVU-Schnittstelle des Bestellsystems der DB InfraGO erforderlich ist.
Die gültigen Identifier sind:
 ReferenceTRID Die ReferenceTRID identifiziert ein imaginäres Objekt ReferenceTrain, dem alle Züge einer Train-Family zugeordnet sind, und dessen Gültigkeit durch einen eigenen Kalender (ReferenceCalendar) definiert ist.
Der in den Nachrichten angegebene ReferenceTRIDSubCalendar stellt eine Teilmenge dieses Kalenders dar. Die ReferenceTRID wird ausschließlich vom EVU festgelegt und muss für je EVU (CompanyCode)
und Fahrplanjahr ohne weitere ergänzende Angaben für sich eindeutig sein. Die ReferenceTRID hat als Variantennummer immer „00“ (Null Null), welche exklusiv für diesen Identifier reserviert ist.
Bei mehreren beteiligten EVU erfolgt die Festlegung i. d. R. durch das federführende EVU (Lead RU).
Sie bleibt über den gesamten Planungsprozess für den Zug bzw. die Züge der Train-Family und darüber hinaus auch im operativen Geschäft erhalten.
 TrainID Die TrainID identifiziert ein konkretes, durch das EVU definiertes Zugobjekt (Train).
Sie wird ausschließlich vom EVU festgelegt und muss je EVU (CompanyCode) und Fahrplanjahr ohne weitere ergänzende Angaben für sich eindeutig sein. Dem Zugobjekt sind ein oder mehrere Routen
zugeordnet.
Bei mehreren beteiligten EVU erfolgt die Festlegung i. d. R. durch das federführende EVU (Lead RU).
Die TrainID wird nur in den Systemen des EVU und im Datenaustausch mit anderen EVU verwendet, jedoch nicht zwischen EVU und EIU ausgetauscht. Für die TrainID darf die Variantennummer „00“ nicht
verwendet werden.
 RouteID Die RouteID identifiziert ein Route-Objekt, welches vom EVU für einen Zug definiert wird.
Die Route beschreibt den globalen Gesamtzuglauf mit den Mindestangaben Start- und Zielbahnhof sowie möglichen Handover-points.
Die RouteID wird ausschließlich vom EVU festgelegt und muss für jedes EVU (CompanyCode) und Fahrplanjahr ohne weitere ergänzende Angaben für sich eindeutig sein.
Bei mehreren beteiligten EVU erfolgt die Festlegung i. d. R. durch das federführende EVU (Lead RU).
Sie bleibt über den gesamten Planungsprozess für den Zug und darüber hinaus auch im operativen Geschäft erhalten
 PathID Die PathID wird ausschließlich vom EIU festgelegt und muss für jedes EIU (CompanyCode) eindeutig sein
Sie wird beim Übersenden des Trassenangebots oder des Ergebnisses an das EVU übergeben.
 PathRequestID Die PathRequestID wird ausschließlich vom EVU festgelegt und muss für jedes EVU (CompanyCode) eindeutig sein.
Werden von mehreren an der Planung des Zuges beteiligten EVU eigene PathRequestMessages abgegeben, so vergibt jedes dieser EVU seine eigene PathRequestID.
Sie bleibt von der erstmaligen Übersendung eines PathRequests bis zum Ende des jeweiligen Basisprozesses (Study, Request, Modification – siehe auch Kapitel 2.1) erhalten. Der jeweilige Basisprozess endet:
o in den Basisprozessen „Request“ und „Modification“ mit der Annahme oder Ablehnung eines übergebenen Angebots, mit der Abmeldung oder Zurückweisung des PathRequests (für die Anmeldung
bzw. Änderung einer Trasse bzw. RV-Kapazität),
o im Basisprozess „Study“ für die Produkte „Fahrzeitberechnung“ und „Fahrplan- und Betriebsprogrammstudien“ mit der Übergabe eines Ergebnisses, mit der Abmeldung oder Zurückweisung des
PathRequests (für die FZB bzw. FPS),
o Im Basisprozess PathStudy für das Produkt „Kurzfristige Fahrlagenberatung“ mit der Ablehnung des Ergebnisses bzw. mit der Umwandlung des Ergebnisses der Kurzfristigen Fahrlagenberatung in
eine Trassenanmeldung, mit der Mitteilung, dass kein Ergebnis bereitgestellt werden kann, oder mit einer Zurückweisung des PathRequests (der Trassenstudienbestellung).
 CaseReferenceID Die CaseReferenceID kann sowohl vom EVU als auch vom EIU benutzt werden und muss eindeutig sein.
Die CaseReferenceID kann benutzt werden, um einen BusinessCase (Anwendungsfall) zu identifizieren, der z. B. mehrere PathRequests als zusammengehörig kennzeichnet.
Die CaseReferenceID kann für die Kennzeichnung mehrerer PathRequests genutzt werden, deren Abfolge von Aktionen gesamthaft gestartet, ausgeführt und beendet werden sollen. Zwischen den beteilig-
ten EVU und EIU sind entsprechende Vereinbarungen zu treffen.
Die CaseReferenceID ist z. B: zur Kennzeichnung von Fahrlagen, die zu einer Fahrplan- oder Betriebsprogrammstudie oder zu einem Messprogramm gehören sollen, zu verwenden und anzugeben.
In der CaseReferenceID kann auch die DossierID des PathCoordinationSystems (PCS) abgebildet werden.
Die CaseReferenceID kann zur Übermittlung der Rahmenvertragsnummer einer RV-Kapazität genutzt werden
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 48

## Seite 49

 TemporaryCapacityRestrictionID Die TemporaryCapacityRestrictionD wird ausschließlich vom EIU festgelegt und muss eindeutig sein.
Sie beschreibt eine Baumaßnahme aus der Umsetzung des Annex VII und wird hauptsächlich im Prouess ujBau nach Anlage 10 verwendet. Die Beschreibung der einzelnen Attribute ist in Anlage 10 aufge-
führt.
Die Eindeutigkeit des Identifiers ergibt sich aus der Nutzung und Befüllung der Attribute <ObjectType>, <Company>, <Core>, <Variant>, <TimetableYear>.
Die Attribute sind wie folgt definiert:
 <ObjectType> enthält den jeweiligen Objekttyp (ReferenceTrain (TR), Route (RO), Path (PA), PathRequest (PR) oder CaseReference (CR)).
 <Company> ist mit dem CompanyCode (siehe Kapitel 3.16"Codelisten") des Absenders zu füllen.
 <Core> bildet das Kernelement ab und ist vom Absender frei gestaltbar.
 <Variant> bildet eine Variante zum Kernelement ab. Der Wert „00“ ist exklusiv für die Bildung von Gruppierungen, z. B. Train-Family (ReferenceTRID) vorgesehen. Die Variantennummer der PathID´s für alle während des
Fahrplanbearbeitungsprozesses erstellten Trassen, RV-Kapazitäten bzw. Ergebnissen bestimmter Marktprodukte beginnt immer mit einem Buchstaben, die Variantennummer für operativ zugewiesene Trassen des Betriebs
beginnt immer mit einer Ziffer.
 <TimetableYear> enthält das jeweilige Fahrplanjahr, dem das Objekt zugeordnet ist. Somit kann der gleiche Identifier für Folgejahre mit geändertem <TimetableYear> wiederverwendet werden.
 <StartDate> ist in der Planungsphase nicht zu verwenden, da es nur im Betrieb (bei der produktiven Durchführung der Zugfahrt) genutzt wird.
PlannedTransportIdentifiers
 In der Wiederholstruktur „PlannedTransportIdentifiers“ darf es die ObjectType TR, RO, PA, PR nur jeweils einmal geben. Der ObjectType CR kann mehrmals angegeben werden.
RelatedPlannedTransportIdentifiers und ReasonOfReference
 In der Wiederholstruktur „RelatedPlannedTransportIdentifiers“ können andere Objekte (Züge (Fahrlagen), Trassen oder Nachrichten) referenziert werden, die in Beziehung zum Zug in der Nachricht oder zur Nachricht selbst
stehen. Es können mehrere Beziehungen definiert werden (z.B. CaseReferenceID’s mehrerer CaseReference Objekte, welche durch eine Trassenbestellung referenziert werden). Eine Begründung für die Angabe eines RelatedPlan-
nedTransportIdentifiers kann durch Angabe eines Codes für das Element ReasonOfReference erfolgen. Sofern sich die Nutzung des Elements RelatedPlannedTransportIdentifiers nicht aus dem Kontext der Messageabfolge oder
dem Nachrichtentyp ergibt, ist die Angabe einer Begründung erforderlich. Sofern mehrere RelatedPlannedTransportIdentifier angegeben werden, gilt der ReasonofReference immer nur für die jweils zuvor übergebene ID.
 Beispiele für Nutzungsmöglichkeiten:
o CaseReferenceID: Der PathRequest oder die PathDetailsMessage bezieht sich auf einen Geschäftsfall (CaseReference Objekt) mit der angegebenen CaseReferenceID, dem ggf. weitere Objekte
(i. d. R. des gleichen Typs) zugeordnet sind. Das Objekt CaseReference enthält weitere detaillierte Informationen.
o ReferenceTRID: Der PathRequest bezieht sich auf einen oder mehrere einzelne Züge einer durch die ReferenceTrain-ID bezeichneten Train-Family, z. B. auf einen ähnlichen Zug in einem vorherigen Zeitabschnitt
o PathID: Der PathRequest bezieht sich auf einen oder mehrere andere Paths, die ersetzt werden oder als Vorlage dienen sollen. Die PathDetailsMessage ist eine von mehreren
PathDetailsMessages zu einem PathRequest.
o PathRequestID: Der PathRequest bezieht sich auf einen anderen (z. B. früheren) PathRequest oder ist im Zusammenwirken mit anderen PathRequestMessages für den gleichen Zug oder
andere Züge zu bearbeiten (z. B. Zug verkehrt DB InfraGO – fremde Infrastruktur – DB InfraGO; Y-Zugverbund bei Zugvereinigungen oder -trennungen; bei Abweichungen an einzelnen Verkehrstagen
eines Zuges, aus denen sich die Notwendigkeit separater PathRequests ergibt)
o Für einige Folgegeschäftsvorfälle (z. B: Angebote zu einer Änderung nach Vertragsschluss oder nach einer netzausgelösten Änderung oder nach Stornierungen) ist eine konkrete Referenz auf ein bisher gültiges Objekt durch
die Angabe dessen Identifier in der Struktur „RelatedPlannedTransportIdentifiers“ erforderlich. Detaillierte Angaben enthalten das Dokument [1] „Schnittstellendokumentation_EVU-Schnittstelle_Bestellsystem.pdf“
(insbesondere Kapitel 5) und
o Die Codeliste in dieser Anlage für das Element ReasonOfReference (siehe Kapitel 3.16)
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 49

## Seite 50

3.4.2 Datenfelder der Struktur „Identifiers“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....Identifiers Identifiers Eindeutige Identifizierung der Objekte, die in der Nachricht enthalten Siehe auch Kapitel 3.4.1 0..1
sind
Ausprägungen: ReferenceTRID, PathID, PathRequestID, Case-
ReferenceID
I....I....PlannedTransportIdentifiers Identifiers PlannedTransportIden- Identifiers in der Planungsphase Für das Produkt „FPS“ ist in „PathRequestMessage“ immer 1..N
tifiers eine CaseReference-ID anzugeben
I....I....I....ObjectType PlannedTransportIdentifiers ObjectType Objekttyp des Identifiers TR = ReferenceTrain 1 string 2 [0-9A-Z]{2}
RO = Route
PA = Path
PR = PathRequest
CR = CaseReference
TC = TemporaryCapacityRestriction
I....I....I....Company PlannedTransportIdentifiers Company Der CompanyCode des Erstellers des Objekts siehe Kapitel 3.16"Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4}
I....I....I....Core PlannedTransportIdentifiers Core Vom Ersteller zu definierendes Kernelement des Identifiers Es müssen alle 12 Stellen gefüllt werden. Nicht genutzte Stel- 1 string 12 [\-\*0-9A-Z]{12}
len sind mit „-„ auszufüllen
I....I....I....Variant PlannedTransportIdentifiers Variant Vom Ersteller zu definierende Variante 1 string 2 [0-9A-Z]{2}
I....I....I....TimetableYear PlannedTransportIdentifiers TimetableYear Fahrplanperiode 1 integer 4 2012 2097
I....I....I....StartDate PlannedTransportIdentifiers StartDate Startdatum des Zuges oder Paths. Das Datum ist ein konkreter Ver- wird nur im Betrieb bei Tagesfahrplänen genutzt 0..1 date 10 2012-01- 2097-12-
kehrstag des Zuges oder Paths entsprechend des PlannedCalendars 01 31
für den ersten Zug- bzw. Trassenlaufpunkt, wobei die für diesen
Punkt gültige geplante Abfahrtszeit maßgebend ist.
I....I....komplexe Struktur ohne Bezeichnung Koplexe Struktur ohne Be- komplexe Struktur RelatedPlannedTransportIdentifiers innerhalb der Dient nur der Gruppierung der beiden nachfolgenden Ele- 0..N
zeichnung xsd ohne eigenen Namen, die die beiden nachfolgenden Elemente mente RelatedPlannedTransportIdentifiers und ReasonOfRe-
enthält. ference
I....I....I....RelatedPlannedTransportIdentifiers Identifiers RelatedPlannedTrans- Bezug auf andere Objekte in der Planungsphase durch Angabe deren 1
portIdentifiers Identifier
I....I....I....I....ObjectType RelatedPlannedTransportI- ObjectType Objekttyp des Identifiers (TrainID, PathID, PathRequestID, CaseRefer- TR = ReferenceTrain 1 string 2 [0-9A-Z]{2}
dentifiers enceID)
RO = Route
PA = Path
PR = PathRequest
CR = CaseReference
I....I....I....I....Company RelatedPlannedTransportI- Company Der CompanyCode des EVU / EIU siehe Kapitel 3.16 "Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4}
dentifiers
I....I....I....I....Core RelatedPlannedTransportI- Core Kernelement des Identifiers Es müssen alle 12 Stellen gefüllt werden. Nicht genutzte Stel- 1 string 12 [\-\*0-9A-Z]{12}
dentifiers len sind mit „-“ aufzufüllen
I....I....I....I....Variant RelatedPlannedTransportI- Variant Variante 1 string 2 [0-9A-Z]{2}
dentifiers
I....I....I....I....TimetableYear RelatedPlannedTransportI- TimetableYear Fahrplanperiode Bei RV-Kapazitäten ist immer das erste Fahrplanjahr des Ver- 1 integer 4 2011 2097
dentifiers kehrszeitraums der RV-Kapazität anzugeben.
I....I....I....I....StartDate RelatedPlannedTransportI- StartDate Startdatum der geplanten Abfahrt innerhalb des Zuständigkeitsberei- wird nur im Betrieb bei Tagesfahrplänen genutzt 0..1 date 10 2023-12- 2097-12-
dentifiers ches eines EIU 10 31
I....I....I....ReasonOfReference Identifiers RelatedPlannedTrans- Angabe eines Grundes für die Verwendung des Elements Rela- Das Element kann nur in Verbindung mit einem RelatedPlan- 0..1 String 4
portIdentifiers tedPlannedTransportIdentifiers nedTransportIdentifiers angegeben werden. Es dient der
Identifikation bestimmter Prozessschritte oder der Begrün-
dung des Verweises auf andere Objekte. Sofern einer der in
der Codeliste aufgeführten Begründungen zutreffend ist,
sollte der Code immer angegeben werden. Siehe Kapitel 3.16
"Codelisten".
Tabelle 16 Identifiers Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 50

## Seite 51

3.5 Attribute und Strukturen auf Messageebene
Es gibt einige Attribute bzw. Strukturen, die keiner Struktur angehören und auf Messageebene ausgewiesen werden.
In nachfolgender Tabelle ist in der Spalte „Nachricht“ angegeben, in welcher Nachricht das jeweilige Attribut/Struktur anzuwenden ist.
Nachricht Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Ausprägun-
kom- Wert Wert gen
men
PathRequestMessage MessageStatus Aktueller Status der Nachricht, wird durch den Absender bereit gestellt 1 token 1 1 = creation
PathDetailsMessage 2 = modification
PathDetailsRefusedMessage 3 = deletion
PathConfirmedMessage
PathCanceledMessage
PathNotAvailableMessage
ErrorMessage
ObjectInfoMessage
UpdateLinkMessage
PathRequestMessage TypeOfRUHarmonization Typ der EVU-Harmonisierung 0..1 string 4 Full, Part, None
PathDetailsMessage
PathRequestMessage TypeOfIMHarmonization Typ der EIU-Harmonisierung 0..1 string 4 Full, Part
PathDetailsMessage
PathRequestMessage CoordinatingIM CompanyCode des koordinierenden EIU 0..1 string 4 0001 ZZZZ [0-9A-Z]{4}
PathDetailsMessage Siehe Kapitel
3.16"Codelisten"
PathDetailsRefusedMessage
PathConfirmedMessage
PathCanceledMessage
PathNotAvailableMessage
PathRequestMessage LeadRU CompanyCode des federführenden EVU Ist das mit der Planung und/oder Harmonisierung beauf- 0..1 string 4 0001 ZZZZ [0-9A-Z]{4}
tragte EVU; muss nicht identisch sein mit dem Besteller/Ver-
PathDetailsMessage Siehe Kapitel
tragspartner (ResponsibleApplicant) oder mit dem durchfüh-
3.16"Codelisten"
PathDetailsRefusedMessage renden EVU (ResponsibleRU); Angabe ist nur bei interope-
PathConfirmedMessage rablen Zügen verpflichtend, wenn eines der beteiligten EVU
die Harmonisierung und Koordination in der Vorplanungs-
PathCanceledMessage
phase übernimmt.
PathNotAvailableMessage
PathRequestMessage TypeOfRequest Typ der Nachricht Identifiziert die drei verschiedenen Basisprozesse in der Pla- 0..1 short 1 1 Siehe Aus- 1 = Study
nungsphase prägungen
PathDetailsMessage 2 Request
PathDetailsRefusedMessage 3 = Modification
PathConfirmedMessage
PathCanceledMessage
PathNotAvailableMessage
ReceiptConfirmationMessage
ObjectInfoMessage
PathRequestMessage TypeOfInformation Typ der Information Indikation, zu welchem Prozessschritt des Basisprozesses in 1 integer 2 1 Siehe Ka- Siehe Kapitel
der Planungsphase die Nachricht gehört pitel 3.16"Codelisten"
PathDetailsMessage
3.16"Code
PathDetailsRefusedMessage listen"
PathConfirmedMessage
PathCanceledMessage
PathNotAvailableMessage
ReceiptConfirmationMessage
ObjectInfoMessage
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 51

## Seite 52

Nachricht Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Ausprägun-
kom- Wert Wert gen
men
PathDetailsRefusedMessage RevisedRequest Hinweis für das EIU, dass das EVU beabsichtigt, einen überarbeiteten Request bzw. eine Alternative Dieses Attribut ist nicht zu verwenden; bei fachlichem Ände- 0..1 boolean 0, false (= falsch)
zu senden rungsbedarf kann das EVU das übergebene Angebot ableh- 1, true (=wahr)
nen und eine Neubestellung auslösen oder das übergebene
Angebot annehmen und eine Änderung nach Vertragsschluss
senden.
PathRequestMessage FreeTextField Frei definierbarer Text 1. Das Attribut ist für die Nachricht „PathDetailsRefused- 0..6 string 255
Message“ und „PathNotAvailableMessage“ für definierte Ge-
PathDetailsMessage
schäftsvorfälle zu verwenden. Siehe hierzu Kapitel 2.2.3.. Z.
PathDetailsRefusedMessage B. zur Begründung der Berechtigten Beanstandung (Netz-
PathCanceledMessage fahrplan) bzw. der Ablehnung mit Überarbeitung (Gelegen-
heitsverkehr)
PathNotAvailableMessage
2. Ansonsten ist das Attribut nur für ergänzende Informatio-
ObjectInfoMessage
nen zu verwenden, wenn dafür kein Datenelement oder
UpdateLinkMessage Code vorhanden ist.
ErrorMessage TypeOfError Fehlertyp 1 integer 1 = functional
2 = technical
0 = both
ErrorMessage Severity Schweregrad des Fehlers DB InfraGO verwendet vorerst nur den Schweregrad 2. 1 integer 1 = warning
2 = error
ErrorMessage ErrorCode Fehlercode Neben den standardisierten Errorcodes der RNE im 5000er- 1 integer 1 9999
Bereich nutzt die DB InfraGO AG Errorcodes im 6000er-Be-
reich nach Anlage 9.
ErrorMessage FreeTextField 1 string 255
PathRequestMessage ReferenceTrainIDSubCalendar (Teil-)Kalender des ReferenceTrain, der durch die ReferenceTRID identifiziert wird. Der (Teil-)Kalender kann zusätzlich angegeben werden und 0..1 Kalen-
dient primär der Konsistenzprüfung. Er enthält mindestens derobjekt
PathDetailsMessage
eine Teilmenge der Verkehrstage des ReferenceTrains, auf aus Bit-
PathDetailsRefusedMessage die sich die in der jeweiligen Nachricht enthaltenen Objekte mapDays
PathConfirmedMessage beziehen. Die Verkehrstage des Kalenders der Route (enthal- und Validi-
ten in PlannedCalendar der TrainInformation) oder der Ka- tyPeriod
PathCanceledMessage
lender des PathRequest bzw. des Paths (enthalten in Plan-
PathNotAvailableMessage nedCalendar der PathInformation) müssen in Verbindung
mit dem OffsetToReference im (Teil-)Kalender des Refe-
ReceiptConfirmationMessage
renceTrain vorhanden sein. Kann einer der Verkehrstage der
ObjectInfoMessage Route, des PathRequests oder des Paths nicht einem Ver-
UpdateLinkMessage kehrstag des ReferenceTrains zugeordnet werden, liegt ein
Fehler vor.
Tabelle 17 Attribute und Strukturen auf Messageebene
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 52

## Seite 53

3.6 Oberstruktur TrainInformation
3.6.1 Übersicht über die Oberstruktur „TrainInformation“
Die Struktur enthält die vom bestellenden EVU gewünschten Zuginformationen über den gesamten Zuglauf. Der Zuglauf sollte dabei nicht vollständig angegeben werden, enthält aber verpflichtend Start- und Zielbahnhof und wichtige
Zuglaufpunkte, wie z. B. im internationalen bzw. interoperablen Verkehr Übergänge zwischen den beteiligten EIU (Handover-Points) und Netzgrenzen sowie die PathPlanningReferenceLocation (Startpunkt für die Trassenkonstruktion). Die
in der Struktur „PlannedCalendar“ angegebenen Verkehrstage gelten für den Gesamtzuglauf. Ggf. an den Zuglaufpunkten angegebene Fahrplanzeiten müssen auch über die Infrastrukturgrenzen hinweg konsistent sein, wobei ggf. angege-
bene Tageswechsel (Attribut „offset“), anhand derer die konkreten Verkehrstage am Zuglaufpunkt ermittelt werden können, zu berücksichtigen sind.
Die Struktur ist nur in der Nachricht „PathRequestMessage“ enthalten.
Abbildung 14 TrainInformation Oberstruktur
3.6.2 Strukturen der Oberstruktur „TrainInformation“
Strukturelement Vorkom- Beschreibung
men
I....TrainInformation 1 Zuginformationen des EVU über den gesamten Zuglauf
I....I....PlannedJourneyLocation 2..N Zuglaufpunkte (siehe Kapitel 3.8
I....I....PlannedCalendar 1 Verkehrstageregelung des Zuges, gültig für den gesamten Zuglauf (siehe Kapitel 3.9
I....I....PathPlanningReferenceLocation 1 Referenzbetriebsstelle; Laufpunkt des Zuges, ab welchem die Konstruktion beginnen soll; für diesenZuglaufpunkt ist die Angabe einer Fahrplanzeit im Element TimingAtLoca-
tion innerhalb der PathInformation der PathRequestMessage verpflichtend, sofern der Laufwegspunkt innerhalb des Konstruktionsbereichs der DB InfraGO liegt (siehe Kapitel
3.11).
Tabelle 18 TrainInformation Oberstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 53

## Seite 54

3.7 Oberstruktur PathInformation
3.7.1 Übersicht über die Oberstruktur „PathInformation“
Diese Struktur enthält
 in der Nachricht „PathRequestMessage“: Die für ein am Zuglauf (gemäß der TrainInformation) beteiligtes EIU für dessen Konstruktionsbereich relevanten Zug- und Fahrlageninformationen des bestellenden EVU
 in der Nachricht „PathDetailsMessage“: Die vom EIU bereitgestellten Angebots- bzw. Ergebnisinformationen
In beiden Nachrichtentypen enthält die Struktur, soweit erforderlich, genaue Informationen zum gewünschten Zuglauf (Fahrlage) bzw. zur Zugtrasse, zur RV-Kapazität oder zum Ergebnis einer Fahrzeitberechnung bzw. Fahrplanstudie,
jeweils innerhalb des Zuständigkeitsbereiches eines konkreten EIU.
Die in der Struktur „PlannedCalendar“ und in den Fahrzeiten an den Zuglaufpunkten angegebenen Verkehrstage und Fahrzeiten gelten genau für diesen räumlichen Bereich. Auch hier sind ggf. angegebene Tageswechsel (Attribut „offset“)
bei der Ermittlung der konkreten Verkehrstage am Trassenlaufpunkt zu beachten.
Abbildung 15 PathInformation Oberstruktur
3.7.2 Strukturen der Oberstruktur „PathInformation“
Strukturelement Vorkom- Beschreibung
men
I....PathInformation 1 In der PathRequestMessage: Zug- und Fahrlageninformationen des bestellenden EVU für den gewünschten Zuglaufabschnitt;
in der PathDetailsMessage: Zugtrasseninformationen des EIU für die angebotene Zugtrasse bzw. RV-Kapazität; gültig für den Laufweg im Zuständigkeitsbereich des EIU bzw.
Ergebnis für eine Fahrplan- oder Betriebsprogrammstudie oder Fahrzeitberechnung.
I....I....PlannedJourneyLocation 2..N Zuglaufpunkte (in PathRequestMessage); Zugtrassenlaufpunkte (in PathDetailsMessage) – siehe Kapitel 3.8
I....I....PlannedCalendar 1 Verkehrstageregelung der Route, der Fahrlage des Zuges bzw. der Zugtrasse oder RV-Kapazität; für Fahrlage bzw. Zugtrasse oder RV-Kapazität gültig für den Laufweg im
fahrplanerischen Zuständigkeitsbereich eines EIU (siehe Kapitel 3.9. In Abhängigkeit vom Wert im Attribut OffsetToReference können sich die Verkehrstage im Kalender der
PathInformation im Vergleich zu den Verkehrstagen des ReferenceTrains oder der Route um die Anzahl der Tageswechsel verschieben.
I....I....RequestedCalendar 0..1 Nur in der PathDetailsMessage: Ggf. Wiederholung der Struktur PlannedCalendar der PathInformation in der zugehörigen PathRequestMessage.
Tabelle 19 PathInformation Oberstruktur Beschreibung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 54

## Seite 55

3.8 Struktur „PlannedJourneyLocation“
Die Struktur „PlannedJourneyLocation“ (Zug-/Zugtrassenlaufpunkte“) enthält weitere, z. T. wiederholbare Unterstrukturen. In der Gesamtheit erfolgt damit je nach Geschäftsvorfall und Produkt eine umfassende Darstellung des Zuglaufs
bzw. des Verlaufs einer Trasse oder RV-Kapazität bzw. des Ergebnisses für eine Fahrzeitberechnung oder Fahrplan- bzw. Trassenstudie.
Die Struktur „PlannedJourneyLocation“ ist in dem Nachrichtentyp PathRequestMessage sowohl in der Oberstruktur „TrainInformation“, als auch in der Oberstruktur „PathInformation“ enthalten. Die Angaben in der Oberstruktur „TrainIn-
formation“ beschreiben den globalen Zuglauf (Route), die Angaben in der Oberstruktur „PathInformation“ beschreiben den geplanten Zuglauf (Fahrlage) im Bereich eines EIU mit allen erforderlichen Angaben zu den Betriebsstellen, Halten
und Zugbehandlungen sowie gewünschten Fahrplanzeiten, Anschlussbeziehungen etc. und enthalten Informationen zum Zug (Zugcharakteristik). D. h., alle genannten Betriebsstellen sind Zuglaufpunkte (ZLP).
Im Nachrichtentyp „PathDetailsMessage“ ist die Struktur „PlannedJourneyLocation“ nur in der Oberstruktur „PathInformation“ vertreten. Diese Oberstruktur beschreibt den sich aus den Angaben zu dem geplanten Zuglauf (Fahrlage)
ergebenden Verlauf der Trasse bzw. RV-Kapazität mit allen erforderlichen Angaben zu den Betriebsstellen, Halten, Betriebshalten und Zugbehandlungen sowie den konstruktiven Fahrplanzeiten und enthalten Informationen zur Nutzung
der Zugtrasse für eine Zugfahrt, resultierend aus den technischen Angaben zum Zug (Zugcharakteristik) und den sich aus der Infrastruktur ableitenden Angaben der Trassencharakteristik, die in der Zugtrassencharakteristik zusammenge-
fasst werden. Alle in der Zugtrasse aufgeführten Betriebsstellen sind Zugtrassenlaufpunkte (TLP).
Die mit der Struktur „PlannedJourneyLocation“ dargestellten Zuglauf- bzw. Trassenlaufpunkte müssen in der TrainInformation bzw. PathInformation in räumlich logischer Reihenfolge angegeben werden.
Die nachfolgenden Abbildungen zeigen
 Eine Übersicht über die Struktur „PlannedJourneyLocation“
 die Strukturen der zugeklappten Objekte (Unterstrukturen)
o LocationSubsidiaryIdentification
o TypeOfService
o PlannedTrainTechnicalData
o ExceptionalGaugingIdent
o DangerousGoodsIndication
o CombinedTrafficLoadProfile
o StatusOfHarmonization
o TrainActivity
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 55

## Seite 56

3.8.1 Übersicht über die Struktur „PlannedJourneyLocation“ und deren Unterstrukturen
Nachfolgend wird die Struktur “PlannedJourneyLocation“ als Übersicht dargestellt.
Abbildung 16 PlannedJourneyLocation Strukturübersicht
Im Nachfolgenden werden weitere Unterstrukturen der Struktur „PlannedJourneyLocation“ als Übersicht dargestellt.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 56

## Seite 57

3.8.1.1 PlannedTrainData
 Die Unterstruktur „PlannedTrainData“ darf nur in der Oberstruktur „PathInformation“ genutzt werden und ist optional.
 Die Struktur muss in der Struktur PathInformation am ersten ZLP/TLP immer angegeben werden.
 Die Struktur muss im weiteren Zuglauf immer dann an einem ZLP/TLP angegeben werden, sobald sich auch nur ein Attribut im Vergleich zu der an einem Vorgänger-ZLP/TLP zuletzt hinterlegten „PlannedTrainData“-Struktur ändert.
 Hat ein ZLP/TLP keine „PlannedTrainData“-Struktur, gilt automatisch diejenige, die am letzten Vorgänger-ZLP/TLP mit hinterlegter Struktur „PlannedTrainData“ definiert ist.
 Die Struktur darf am letzten ZLP/TLP der Struktur PathInformation nicht angegeben werden.
 Die Struktur enthält das Element „PushPullTrain“, welches eine Aussage zur Wendezugfähigkeit des Zugverbands macht.
3.8.1.2 NetworkSpecificParameter
Die Unterstruktur „NetworkSpecificParameter“ wird für die Angabe EIU-spezifischer Attribute genutzt. Dabei werden unterschieden:
 NetworkSpecificParameter auf Message-Ebene (siehe Kap. 3.14.5). Diese NSP gelten, sofern sie angegeben sind, immer für die gesamte Nachricht.
 NetworkSpecificParameter auf Location-Ebene (siehe Kap. 3.14.6). Diese NSP müssen am ersten konstruktionsrelevanten ZLP/TLP immer angegeben werden, sofern die Angaben bereits dort zutreffen. Sie müssen im weiteren
Zuglauf immer dann an einem ZLP/TLP angegeben werden, wenn sie in diesem lokal bzw. erst ab oder bis zu diesem ZLP/TLP gelten. Tabelle 28 NetworkSpecificParameter Location-Ebene Datenfelder enthält detaillierte Aussagen,
welche NSP nur lokal im betreffenden ZLP/TLP, für den nachfolgenden Streckenabschnitt oder für einen durch eine Beginn- und Ende-Kennzeichnung definierten räumlichen Bereich gelten.
 NetworkSpecificParameter auf AffectedSection-Ebene (siehe Kap. 3.14.7). Diese NSP gelten ausschließlich für die betreffende AffectedSection-Struktur, sofern diese Struktur in einer Nachricht angegeben ist.
3.8.1.3 LocationSubsidiaryIdentification
 In der Unterstruktur „LocationSubsidiaryIdentification“ können ergänzende Angaben zur Lokalität innerhalb des angegebenen Zug- bzw. Trassenlaufpunktes erfolgen.
 Mit der Angabe eines LocationSubsidiaryCodes in Verbindung dem LocationSubsidiaryTypeCode 41 wird für Betriebsstellen der DB InfraGO AG die bisherige Ril100-Abkürzung referenziert.
Abbildung 17 LocationSubsidiaryIdentification Unterstruktur
3.8.1.4 TypeOfService
 In der Unterstruktur „TypeOfService“ können ergänzende Angaben zu im Zug verfügbaren Services erfolgen.
 Die Struktur wird in der Planungsphase des Trassenbestell- und -zuweisungsprozesses durch DB InfraGO generell nicht genutzt.
Abbildung 18 TypeOfService Unterstruktur
3.8.1.5 PlannedTrainTechnicalData
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 57

## Seite 58

Die Unterstruktur „PlannedTrainTechnicalData“ enthält im Nachrichtentyp
 PathRequestMessage Angaben zur Beschreibung der technischen Parameter des Zuges (Zugcharakteristik),
 PathDetailsMessage technische Angaben der Zugtrassencharakteristik, die sich aus den technischen Angaben des Zuges (Zugcharakteristik) und der Trasse/RV-Kapazität (Trassencharakteristik), ggf. abgeleitet aus Infrastrukturpara-
metern, ergeben.
Abbildung 19 PlannedTrainTechnicalData Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 58

## Seite 59

3.8.1.6 ExceptionalGaugingIdent
Die Unterstruktur „ExceptionalGaugingIdent“ enthält Angaben zu Beförderungsbesonderheiten (z. B. BZA, Beförderungsanordnungen, Dauer-LÜ oder Lademaßüberschreitung) im Bereich eines EIU.
Abbildung 20 ExceptionalGaugingIdent Unterstruktur
3.8.1.7 DangerousGoodsIndication
 In der Unterstruktur „DangerousGoodsIndication“ sind Angaben zum Gefahrgut zu machen, sofern im Zugverband Wagen mit Gefahrgut enthalten sind.
 Die Angabe der RID-Nr. (Attribut RID_Class) ist dabei verpflichtend.
Abbildung 21 DangerousGoodsIndication Unterstruktur
3.8.1.8 CombinedTrafficLoadProfile
Die Unterstruktur „CombinedTrafficLoadProfile“ enthält Angaben zu KV-Profilen, sofern im Zugverband Wagen mit abweichenden Fahrzeugbegrenzungslinien (insbesondere bei Wechselbehältern, Containern oder Sattelaufliegern), d. h.
kodifizierte Ladeeinheiten auf kodierten Tragwagen, vorhanden sind.
Abbildung 22 CombinedTrafficLoadProfile Unterstruktur
3.8.1.9 StatusOfHarmonization
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 59

## Seite 60

Die Angaben in der Unterstruktur „StatusOfHarmonization“ geben Auskunft über den Stand der Harmonisierung der Zuglaufangaben zwischen den beteiligten EVU und EIU.
Abbildung 23 StatusOfHarmonization Unterstruktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 60

## Seite 61

3.8.1.10 TrainActivity
Die Unterstruktur „TrainActivity“
 ist eine Wiederholstruktur, die auf Ebene „PlannedJourneyLocation“ (ZLP/TLP) in den Strukturen „TrainInformation“ und „PathInformation“ vorhanden ist, aber aus fachlichen Gründen fast ausschließlich nur in der Struktur
„PathInformation“ genutzt wird.
TrainActivity beinhaltet im Attribut <TrainActivityType> eine eindeutige Kodierung der Zugaktivität als Mussangabe sowie die Möglichkeit der Referenzierung auf einen anderen Zug durch die Angabe der OTN (optional) oder der
ReferenceTRID (optional).
 wird genutzt, um auf Locationebene (ZLP/TLP) die gewünschte/erforderliche Haltart sowie gewünschte Haltegründe zu hinterlegen. Die gültigen Ausprägungen für das Attribut <TrainActivityType> (verschlüsselte Haltearten und
Haltegründe) sind in Kapitel 3.16.2 zu finden. Zur Angabe der Haltearten und Haltegründe sind die Unterstruktur „AssociatedAttachedTrainID“, das Attribut „AssociatedAttachedOTN“ und das Attribut „AssociatedAttachedLocatio-
nIdent“ nicht erforderlich.
 Kann genutzt werden, um Zugübergänge (vorheriger oder nachfolgender Zug, z. B: Tfz-Leerfahrt, oder Anschlussbeziehungen und Zugverknüpfungen, z. B. Zugzusammenführungen oder -trennungen bei „Y-Zugverbund“, anzuge-
ben.
Abbildung 24 TrainActivity Unterstruktur
3.8.2 Datenfelder der Struktur „PlannedJourneyLocation“ und deren Unterstrukturen
In diesem Kapitel werden alle Datenfelder der Struktur PlannedJourneyLocation inklusive aller Unterstrukturen im Detail beschrieben.
 In diesen Strukturen werden alle Zug- bzw. Trassenlaufpunkt abhängigen Daten angegeben.
 Die Struktur steht an jedem Zug- bzw. Trassenlaufpunkt, der in den Nachrichten PathRequestMessage bzw. PathDetailsMessage zur Beschreibung des Zug- bzw. Trassenverlaufs aufgeführt ist.
 In der Oberstruktur PathInformation des Nachrichtentyps „PathRequestMessage“ müssen mindestens an einem konstruktionsrelevanten ZLP im Bereich der DB InfraGO in der Struktur „Timing“ im Feld <TimingQualifierCode> eine der
Ausprägungen „ELA“ (früheste Ankunftszeit), „LLA“ (späteste Ankunftszeit), „ELD“ (früheste Abfahrtszeit) oder „LLD“ (späteste Abfahrtszeit) angegeben und das zugeordnete Attribut <Time> (Uhrzeit) sowie bei Notwendigkeit das
Attribut <Offset> (Tageswechsel/Nachtsprung) gefüllt sein.
 Alle Fahrplanzeitangaben sind aufsteigend (ggf. in Verbindung mit <Offset> bei einem Tageswechsel). AUSNAHME: Änderungen an Trassen durch den ujBau-Prozess nach Anlage 10
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 61

## Seite 62

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....PlannedJourneyLocation PlannedJourney- Zug- und Zugtras- Im Nachrichtentyp „PathRequestMessage“ beschreiben die 2..N M M
Location senlaufpunkte Angaben einen Zuglaufpunkt (ZLP), im Nachrichtentyp „Pa-
thDetailsMessage“ handelt es sich um einen Zugtrassenlauf-
punkt (TLP).
I....I....I....CountryCodeISO PlannedJourneyLocation CountryCodeISO CountryCode des LocationPri- Eindeutige EU-weite Identifikation einer Betriebsstelle in 1 string 2 Siehe Stammdaten (Kapitel M M
maryCode des ZLP/TLP Verbindung mit dem <LocationPrimaryCode> 4.3)
Deutschland = DE
I....I....I....LocationPrimaryCode PlannedJourneyLocation LocationPrima- LocationPrimaryCode des Eindeutige EU-weite Identifikation einer Betriebsstelle (Pri- 1 positive 5 1 99999 Siehe Stammdaten M M
ryCode ZLP/TLP maryLocation) in Verbindung mit dem <CountryCodeISO>. integer
(Kapitel 4.3)
Wird von jedem Land selbständig vergeben.
Die LocationPrimaryCodes werden getrennt veröffentlicht.
Geplante Betriebsstellen, für die noch keine offizielle Codie-
rung zugeordnet wurde, haben immer die Codierung 99999
I....I....I....PrimaryLocationName PlannedJourneyLocation PrimaryLocation- Name des ZLP/TLP Muss bei in Planung befindlichen Betriebsstellen, für die 0..1 string 255 bM bM
Name noch kein PLC vergeben wurde, immer gefüllt sein.
I....I....I....LocationSubsidiaryIdentification PlannedJourneyLocation LocationSubsidi- Code, Name und Lokalisierung Ergänzende Angabe zur als PrimaryLocation angegebenen 0..1 K K
aryIdentification der ergänzenden Angaben Betriebsstelle, wie Gleisbezeichnung/-nummer, besondere
zum ZLP/TLP (Subsidiary Loca- Eigenschaft der Betriebsstelle, RiL100-Code der DB InfraGO
tion)
I....I....I....I....LocationSubsidiaryCode LocationSubsidiaryIdenti- LocationSubsidi- Code der ergänzenden Anga- In Verbindung mit TypeCode 41 kann hier der für die Prima- 1 string 10 K K
fication aryCode ben zum ZLP/TLP als Teil der ryLocation im Netz der DB definierte RiL 100-Code (in CRD
PrimaryLocation hinterlegt) angegeben werden.
I....I....I....I....I....LocationSubsidiaryTypeCode LocationSubsidiaryCode LocationSubsidi- Code des Typs der ergänzen- In der XSD ist diese Information ein eigenständiges Attribut 1 Siehe Kapitel 3.16 „Codelis- K K
aryTypeCode den Angaben zum ZLP/TLP innerhalb des Elements SubsidiaryLocationCode. ten“
I....I....I....I....AllocationCompany LocationSubsidiaryIdenti- AllocationCom- CompanyCode des für die Siehe Kapitel 3.16"Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4} K K
fication pany SubsidiaryLocation verant-
wortlichen EIU
I....I....I....I....LocationSubsidiaryName LocationSubsidiaryIdenti- LocationSubsidi- Bezeichnung der durch die er- In Verbindung mit TypeCode 41 kann hier optional der Name 0..1 string 255 K K
fication aryName gänzenden Angaben zum des für das Netz der DB definierten RiL 100-Codes (in CRD
ZLP/TLP beschriebenen Ört- hinterlegt) der PrimaryLocation angegeben werden.
lichkeit
I....I....I....TimingAtLocation PlannedJourneyLocation TimingAtLoca- Abfahrts- und Ankunftszeiten 0..1
tion am ZLP/TLP
I....I....I....I....Timing TimingAtLocation Timing Abfahrts- und Ankunftszeiten 0..N
I....I....I....I....I....TimingQualifierCode Timing TimingQualifier- Kodierung der Art der angege- 1. In der XSD ist diese Information ein Attribut 1 token Siehe Kapitel 3.16 „Codelis- bM bM
Code benen Abfahrts- bzw. An- ten“
2. Es muss an mindestens einem ZLP in den Strukturen Trai-
kunftszeit.
nInformation und PathInformation der PathRequestMessage
eine Fahrplanzeit angegeben werden.
3. In TrainInformation und PathInformation der PathRe-
questMessage sind gültig:
ELA = früheste Ankunftszeit
LLA = späteste Ankunftszeit
ALA = genaue Ankunftszeit
ELD = früheste Abfahrtszeit
LLD = späteste Abfahrtszeit
ALD = genaue Abfahrtszeit
ERT = früheste Durchfahrt (keine Verwendung bei DB In-
fraGO)
LRT = späteste Durchfahrt (keine Verwendung bei DB In-
fraGO)ART = genaue Durchfahrt (keine Verwendung bei DB
InfraGO)
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 62

## Seite 63

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
Bei Halten darf immer nur entweder ein Wert für die ge-
wünschte früheste oder die späteste oder die genaue An-
kunftszeit und entweder für die gewünschte früheste oder
die späteste oder die genaue Abfahrtszeit angegeben wer-
den. In dem als „PathPlanningReferenceLocation“ gekenn-
zeichneten Zuglaufpunkt ist die Angabe mindestens einer
der o. g. Ausprägungen verpflichtend (siehe Kap. 3.11).
Bei einer gewünschten Durchfahrt sind identische Werte für
die früheste Ankunftszeit (ELA) und die früheste Abfahrtszeit
(ELD) oder für die späteste Ankunftszeit (LLA) und späteste
Abfahrtszeit (LLD) oder für die genaue Ankunftszeit (ALA)
und die genaue Abfahrtszeit (ALD) und immer in Verbindung
mit dem TrainActivityTypeCode 0040 anzugeben.
4. In der PathInformation der PathRequestMessage für die
Marktprodukte TRA und KFB können bei Verkehrshalten zu-
sätzlich angegeben werden:
PLA = zu veröffentlichende Ankunftszeit (sofern abweichend
von ALA) und/oder
PLD = zu veröffentlichende Abfahrtszeit (sofern abweichend
von ALD)
PLA steht dabei in Beziehung zu einer Fahrplanzeitangabe
mit dem Code ELA oder LLA oder ALA, die Angabe zu PLD be-
zieht sich auf eine Fahrplanzeitangabe mit den Code ELD
oder LLD oder ALD.
5. In der PathInformation der PathDetailsMessage sind nur
gültig:
ALA = genaue Ankunftszeit
ALD = genaue Abfahrtszeit
PLA = zu veröffentlichende Ankunftszeit (sofern abweichend
von ALA); nur bei Trassen, sofern zusätzliche Angabe bestellt
wurde.
PLD = zu veröffentlichende Abfahrtszeit (sofern abweichend
von ALD); nur bei Trassen, sofern zusätzliche Angabe bestellt
wurde.
Bei einer konstruierten Durchfahrt werden identische Werte
für die Ankunftszeit (ALA) und für die Abfahrtszeit (ALD) so-
wie der TrainActivityTypeCode 0040 angegeben.
Die Codes PLA und PLD sind bei Durchfahrten nicht zulässig.
I....I....I....I....I....Time Timing Time Zeitangabe für die in Timing- 1. Angabe im Format hh:mm:ss mit den Ausprägungen 1 time (?:[01]\d|2[0- M M
QualifierCode definierte Art 00:00:00 bis 23:59:54. 3]):[0-
5]\d:(?:00|06|12
2. Die Sekunden sind immer in 6-Sekunden-Schritten anzu-
|18|24|30|36|4
geben
2|48|54)
3. Bei einer Ankunftszeit am letzten Zug- bzw. Trassenlauf-
punkt entspricht die Angabe 00:00:00 der fachlich identi-
schen Darstellung 24:00:00 am Vortag. Die Zeitangabe
00:00:00 stellt einen Zeitpunkt des Folgetags dar, was zu ei-
nem Offset = 1 führt. In bestimmten Darstellungen (z. B:
Bfpl) wird dies in diesem Fall nicht als Tageswechsel gewer-
tet.
4. Pro ZLP darf entweder nur die früheste oder die späteste
Ankunftszeit gefüllt sein.
5. Ankunftszeit im TLP:
Bei der Erstellung des Angebotes wird das Feld mit der kon-
struierten Ankunftszeit gefüllt.
Wurde am ersten TLP keine Ankunftszeit bestellt, so wird
diese auch nicht im Angebot zum TLP geliefert.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 63

## Seite 64

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
Bei Durchfahrten (Code 0040 in Attribut <TrainActivity>) ist
die Ankunftszeit identisch mit der angegebenen Abfahrts-
zeit.
6. Abfahrtszeit im TLP:
Bei der Erstellung des Angebotes wird das Feld mit der kon-
struierten Abfahrtszeit gefüllt.
Bei Durchfahrten ist die Abfahrtszeit mit der Durchfahrtszeit
belegt und identisch mit der angegebenen Ankunftszeit.
Bei Durchfahrpunkten, denen kein Fahrtzeitmesspunkt zuge-
ordnet ist, wird die Abfahrtszeit des Vorgänger-TLP als An-
kunfts- und Abfahrtszeit mit identischem Wert angegeben.
Wurde am letzten TLP keine Abfahrtszeit bestellt, so wird
diese auch nicht im Angebot zum TLP geliefert.
I....I....I....I....I....Offset Timing Offset Tageswechsel / Nachtsprung 1. Angabe in Tagen innerhalb eines Zuglauf bzw. Trassenver- 1 positive M M
laufs (Struktur „PlannedJourneyLocation“ innerhalb der Pa- integer
thInformation)
2. Wenn kein Tageswechsel dann Wert = "0"
3. Bei ZLP/TLP im Konstruktionsbereich der DB InfraGO in
der Oberstruktur „PathInformation“ sind nur die Werte "0"
und "1" zulässig. Ausnahme: Bei interoperablen Zügen darf
am letzten konstruktionsrelevanten ZLP/TLP bei der Ab-
fahrtszeit auch der Wert „2“ stehen
4. Der Wert bezieht sich bei Angabe innerhalb der Ober-
struktur „TrainInformation“ auf den Startbf des Zuges. Bei
Angabe in der Oberstruktur „PathInformation“ ist der Be-
zugspunkt der erste ZLP/TLP im Konstruktionsbereich von DB
InfraGO.
5. Die Angabe bezieht sich auf den Abfahrtszeitpunkt in die-
sem ZLP/TLP
6. Bei ZLP/TLP mit dem Wechsel des Werts des Offsets ist
immer die Angabe mindestens einer Fahrplanzeit mit der
Ausprägung ELA, ELD, LLA oder LLD (in der PathRequestMes-
sage) bzw. ALA und/oder ALD (in der PathDetailsMessage)
verpflichtend.
I....I....I....I....I....BookedLocationDateTime Timing BookedLoca- Angabe der Abfahrt-/Durch- Angabe wird nur in betrieblichen Meldungen der betriebli- 0..1 dateTime n/a n/a
tionDateTime fahrtszeit mit Tagesdatum chen Phase bei Nutzung von Tagesobjekten der Zugtrasse
verwendet.
I....I....I....I....DwellTime TimingAtLocation DwellTime bestellte Mindesthaltedauer 1. Dieses Feld enthält die vom EVU bestellte Mindesthal- 0..1 decimal 6 0.0 1200.0 bM bM
tedauer.
2. Pflichtangabe bei TrainActivityCode 0001, 0003 und 0030
(siehe Kapitel 3.16.2)
3. Notwendige Rüstzeiten am Start- bzw. Zielbahnhof wer-
den als normale Mindesthaltedauer beschrieben.
4. Angabe in Minuten [min] mit einer Nachkommastelle.
I....I....I....FreeTextField PlannedJourneyLocation FreeTextField Frei definierbarer Text Zur Übermittlung ergänzender, unstrukturierter Informatio- 0..6 string 255 K K
nen, für die kein definiertes Element vorhanden ist und ge-
nutzt werden kann. Durch max. 6 Wiederholungen kann die
Textlänge variiert werden.
I....I....I....ResponsibleApplicant PlannedJourneyLocation Responsible- CompanyCode des Bestellers Ist der Besteller und Vertragspartner für die Trasse (bzw. der 0..1 string 4 0001 ZZZZ Siehe Kapitel 3.16 „Codelis- [0-9A-Z]{4} K K
Applicant anderen Produkte der DB InfraGO) und primärer Kommuni- ten“ -
kationspartner der DB InfraGO (vor allem in der Planungs-
phase); muss nicht der Durchführende der Zugfahrt, d. h.
Nutzer der Trasse sein. Die Angabe muss am ersten kon-
struktionsrelevanten ZLP der Fahrlage bzw. am ersten TLP
der Trasse angegeben werden. Das ist die erste PlannedJour-
neyLocation in der Struktur PathInformation einer
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 64

## Seite 65

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
PathRequestMessage bzw. PathDetailsMessage. Die Angabe
gilt für die gesamte Fahrlage bzw. Trasse und darf innerhalb
der Fahrlage bzw. der Trasse nicht geändert werden. Eine
Angabe an nachfolgenden ZLP bzw. TLP ist daher nicht vorzu-
nehmen. Der in der PathRequestMessage angegebene Com-
panyCode muss mit dem CompanyCode des Attributs Sender
der Struktur MessageHeader übereinstimmen. Zusätzlich ist
der NSP kundennummerBestellendesEvu zu befüllen (siehe
Tabelle 28).
I....I....I....ResponsibleRU PlannedJourneyLocation ResponsibleRU CompanyCode des durchfüh- Für die Transportdurchführung verantwortliches EVU; muss 0..1 string 4 0001 ZZZZ Siehe Kapitel 3.16 „Codelis- [0-9A-Z]{4} K K
renden EVU nicht Besteller und Vertragspartner für die Trasse (bzw. der ten“ -
anderen Produkte) sein; ist nicht primärer Kommunikations-
partner der DB InfraGO in der Planungsphase, aber bei der
betrieblichen Durchführung der Zugfahrt. Das Feld muss
mindestens am ersten konstruktionsrelevanten ZLP bzw. am
ersten TLP der Trasse gefüllt sein. Das ist die erste Plan-
nedJourneyLocation in der Struktur PathInformation einer
PathRequestMessage bzw. PathDetailsMessage. Die Angabe
ist auch dann erforderlich, wenn Besteller und durchführen-
den EVU identisch sind. Zusätzlich ist der NSP kundennum-
merDurchfuehrendesEvu zu befüllen (siehe Tabelle 28).
I....I....I....ResponsibleIM PlannedJourneyLocation ResponsibleIM CompanyCode des ab dem Die Angabe ist für den Startbahnhof und ggf. an jeder Netz- 0..1 string 4 0001 ZZZZ Siehe Kapitel 3.16 „Codelis- [0-9A-Z]{4} bM bM
ZLP/TLP verantwortlichen EIU grenze anzugeben und bezeichnet das für den nachfolgen- ten“ -
den Abschnitt verantwortliche EIU. Netzgrenze ist der Infra-
strukturpunkt, an welchem 2 benachbarte Infrastrukturbe-
reiche unterschiedlicher EIU zusammentreffen und die
rechtliche Verantwortung von einem EIU auf das andere EIU
übergeht. Die Netzgrenze kann abweichend von der Fahr-
planbearbeitungsgrenze und/oder der (politischen) Staats-
grenze sein.
Vorübergehende Einschränkung aus Anlage 3 beachten.
I....I....I....PlannedTrainData PlannedJourneyLocation PlannedTrain- Zugdaten (Zugcharakteristik Daten zu dieser Unterstruktur sind nur in der Oberstruktur 0..1
Data bzw. Zugtrassencharakteristik) PathInformation anzugeben.
I....I....I....I....TrainType PlannedTrainData TrainType Zugart 0..1 integer Siehe Kapitel 3.16 „Codelis- K K
ten“
I....I....I....I....TrafficType PlannedTrainData TrafficType Ergänzende Informationen zur Informationen über die Verkehrsart (Kombiniert, Rollende 0..1 K K
Verkehrsart Landstraße, etc.); die Angabe muss konsistent zur Angabe im
NetworkSpecificParameter (NSP) „verkehrsartKundeZusatz“
auf Message-Ebene sein.
I....I....I....I....I....TrafficTypeNetwork TrafficType TrafficTypeNet- CompanyCode des EIU Angabe des CompanyCodes des EIU bei Verwendung natio- 0..1 String 4 n/a n/a
work naler Codes.
Bei DB InfraGO werden nationalen Codes vergeben.
I....I....I....I....I....TrafficTypeCode TrafficType TrafficTypeCode Verkehrsart Informationen über die Verkehrsart (Kombiniert, Rollende 0..1 string 2 Siehe Kapitel 3.16 „Codelis- K K
Landstraße, etc.); die Angabe muss konsistent zur Angabe im ten“
NetworkSpecificParameter (NSP) „verkehrsartKundeZusatz“
auf Message-Ebene sein.
Sofern im Attribut „TrafficTypeNetwork“ kein Code angege-
ben wird, ist ein Wert aus Kap 3.16.1 zu verwenden.
I....I....I....I....PushPullTrain PlannedTrainData PushPullTrain Wendezugkennzeichen Kennzeichnung der Wendezugfähigkeit des Zuges. Die Aus- 0..1 boolean 0, false (=falsch) bM bM
prägung „true“ bzw. „1“ ist nur in Verbindung mit Traction- 1, true (=wahr)
Mode 1x, 2x oder 5x zulässig. Erfolgt keine Angabe, liegt
keine Wendezugfähigkeit vor.
Mit der Angabe erfolgt keine Aussage zur Position des Steu-
erwagens oder des maßgebenden steuernden Tfz innerhalb
des Zuges. Sofern erforderlich kann diese Detailaussage nur
durch Nutzung der TractionMode 1x, 2x oder 5x erfolgen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 65

## Seite 66

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....I....I....TypeOfService PlannedTrainData TypeOfService Ergänzende kommerzielle In- Wird u. a. zur Publikation gegenüber Reisenden genutzt 0..1 n/a n/a
formationen des EVU zum
Zugobjekt
I....I....I....I....I....SpecialServiceDescriptionCode TypeOfService Spe- Codierung des Service im Zug 0..N string 3 n/a n/a
cialServiceDe- (z.B. Frühstück, etc.)
scriptionCode
I....I....I....I....I....FacilityTypeDescriptionCode TypeOfService FacilityType- Typ der Einrichtung (z.B. 0..N string 3 n/a n/a
DescriptionCode Schlafwagen, etc.)
I....I....I....I....I....CharacteristicDescriptionCode TypeOfService Characteristi- Codierung vorhandener Cha- 0..N string 17 n/a n/a
cDescription- rakteristika im Zug (z.B. Erste
Code Klasse, Zweite Klasse, Reser-
vierung möglich, etc.)
I....I....I....I....CommercialTrafficType PlannedTrainData CommercialTraf- Ergänzende Angaben zur Ver- 0..1 string 17 siehe Kapitel 3.16 „Codelis- K K
ficType kehrsart des Zuges ten“
I....I....I....I....PlannedTrainTechnicalData PlannedTrainData PlannedTrain- Technische Zugdaten 1
TechnicalData
I....I....I....I....I....TrainWeight PlannedTrainTechni- TrainWeight Gesamtmasse des Zuges (Wa- 1 integer 5 1 99999 M M
calData genzug + Triebfahrzeug) in
Tonnen [t]
I....I....I....I....I....TrainLength PlannedTrainTechni- TrainLength Gesamtlänge des Zuges (Wa- 1 integer 4 1 9999 M M
calData genzug + Triebfahrzeug) in
Meter [m]
I....I....I....I....I....WeightOfSetOfCarriages PlannedTrainTechni- WeightOfSe- Masse des Wagenzuges in 1. Ist <WeightOfSetOfCarriages> nicht gefüllt (keine Angabe), 0..1 integer 5 1 99999 bM bM
calData tOfCarriages Tonnen [t] darf auch <LengthOfSetOfCarriages> nicht angegeben wer-
den.
2. Keine Angabe für <WeightOfSetOfCarriages> und <Lengt-
hOfSetOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug
oder Triebwagen(-einheit), jeweils ohne zusätzlichen Wagen-
zug. Wird mit einem Triebwagen zusätzlich ein Wagenzug
befördert, muss der konkrete Wert für die Masse des Wa-
genzuges angegeben werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbei-
tenden Tfz gezogen werden, gelten als Wagenzug. Sie dürfen
nicht als Tfz in der Struktur TractionDetails angegeben wer-
den. Deren Masse ist Teil der Masse des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeiten-
den Tfz gezogen werden, können ignoriert werden. Sie gel-
ten weder als Tfz noch als Wagenzug.
I....I....I....I....I....LengthOfSetOfCarriages PlannedTrainTechni- LengthOfSe- Wagenzuglänge in Meter [m] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt, darf auch 0..1 integer 4 1 9999 bM bM
calData tOfCarriages <LengthOfSetOfCarriages> nicht angegeben werden.
2. Keine Angabe für <WeightOfSetOfCarriages> und <Lengt-
hOfSetOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug
oder Triebwagen(-einheit), jeweils ohne zusätzlichen Wagen-
zug. Wird mit einem Triebwagen zusätzlich ein Wagenzug
befördert, muss der konkrete Wert für die Länge des Wagen-
zuges angegeben werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbei-
tenden Tfz gezogen werden, gelten als Wagenzug. Sie dürfen
nicht als Tfz in der Struktur TractionDetails angegeben wer-
den. Deren Länge ist Teil der Länge des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeiten-
den Tfz gezogen werden, könen ignoriert werden. Sie gelten
weder als Tfz noch als Wagenzug.
I....I....I....I....I....TractionDetails PlannedTrainTechni- TractionDetails Details zum Triebfahrzeug 1. Hier sind die Details zu den Triebfahrzeugen für die Ba- 1..N
calData sis-Zugcharakteristik anzugeben.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 66

## Seite 67

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
2. Als erstes muss immer eine Regelbespannung mit der
Ausprägung Zuglok, Zuglok/Doppeltraktion bzw. Mittel-
lok angegeben werden.
3. Erst nach Angabe der Regelbespannung dürfen weitere
Zusatz-Tfz angegeben werden.
4. Weichen die gesendeten Stammdaten zu Last und
Länge des Triebfahrzeugs von den bei der DB InfraGO
hinterlegten Stammdaten ab, werden die gesendeten
Daten ignoriert und im Trassenangebot (PDM) über-
schrieben.
I....I....I....I....I....I....LocoTypeNumber TractionDetails LocoTypeNum- Triebfahrzeug-Baureihe 1 Siehe Stammdaten Kapitel M M
ber 4.3.3- Triebfahrzeuge
I....I....I....I....I....I....I….TypeCode1 LocoTypeNumber TypeCode1 Bauarttyp Bauarttyp gemäß Teil 0 Anhang 6 der EU-Reg. 2007/756 1 integer 1 [9] M M
I....I....I....I....I....I....I….TypeCode2 LocoTypeNumber TypeCode2 Antriebsart/Traktionsart Antriebsart/Traktionsart gemäß Teil 8 Anhang 6 der EU-Reg. 1 integer 1 [0-9] M M
2007/756
I....I....I....I....I....I....I….CountryCode LocoTypeNumber CountryCode Ländercode Ländercode gemäß Teil 4 Anhang 6 der EU-Reg.. 2007/756 1 integer 2 [0-9]{2} M M
I....I....I....I....I....I....I….SeriesNumber LocoTypeNumber SeriesNumber Baureihennummer Nummer der Baureihe gemäß dem Verzeichnis der Tfz der 1 integer 4 [0-9]{4} M M
DB InfraGO
I....I....I....I....I....I....I….SerialNumber LocoTypeNumber SerialNumber Variantennummer der Bau- Nummer der Variante der Baureihe gemäß dem Verzeichnis 0..1 integer 3 [0-9]{3} bM bM
reihe der Tfz der DB InfraGO. Alle bei der DB InfraGO zugelassenen
Tfz-Baureihen haben eine Variantennummer, die immer an-
zugeben ist.
I....I....I....I....I....I....I….ControlDigit LocoTypeNumber ControlDigit Kontrollziffer Keine Angabe in der Planungsphase in PathRequestMessage 0..1 integer 1 [0-9]
oder PathDetailsMessage
I....I....I....I....I....I....TypeOfUsedHybridPowerunit TractionDetails TypeOfUsedHyb- Antriebsart eines Hybrid-Tfz Die Angabe ist nur erforderlich, wenn das im Element Loco- 0..1 token 1 Siehe Kapitel 3.16 „Codelis- bM bM
ridPowerunit TypeNumber angegebene Tfz ein Hybrid-Tfz ist. Es wird die ten“
gewünschte Nutzung einer Antriebsart (PathRequestMes-
sage) bzw. die zu nutzende und bei der Trassenkonstruktion
verwendete Antriebsart angegeben.
I....I....I....I....I....I....TractionMode TractionDetails TractionMode Rolle und Position des Trieb- 1. Das Attribut ist in der Kommunikation mit DB InfraGO 0..1 integer 2 01 99 Siehe Kapitel 3.16 „Codelis- M M
fahrzeugs im Zugverband eine Pflichtangabe ten“
2. Das Attribut ist immer zweistellig anzugeben.
3. Die erste Stelle gibt die Rolle des Tfz an. Durch die Aus-
wahl der Rolle des Tfz. wird auch gleichzeitig die Posi-
tion des Tfz. im Zugverband ausgewählt (z.B: Tfz. ist an
Zugspitze oder Zugende).
4. Die zweite Stelle gibt die laufende Nummer des Auftre-
tens der jeweiligen Rolle des Tfz im Zugverband an.
5. Es erfolgt keine direkte Unterscheidung mehr zwischen
Zuglok/Doppeltraktion und Zuglok mit Vorspannlok; in
beiden Fällen erfolgt zusätzlich zur Regelbespannung
die Angabe eines weiteren Tfz. der gleichen Rolle, je-
doch mit einer höheren fortlaufenden Nummer an der
2. Stelle. Hierzu muss die Struktur „TractionDetails
zweimal übergeben werden. Für das jeweils 2. Tfz ent-
hält „TractionMode“ dabei die Codierung „12“ bzw.
„52“.
„LocoTypeNumber“ enthält die jeweils gewünschte
Triebfahrzeug-Baureihe (diese kann auch identisch mit
der angegebenen Regelbespannung sein).
I....I....I....I....I....I....TractionWeight TractionDetails TractionWeight Masse des Triebfahrzeugs Bei lokbespannten Zügen muss die Angabe immer erfolgen. 0..1 integer 5 1 99999 K K
Die Angabe kann entfallen bei Tfz-fahrten, Triebzug- und
Triebwagen(-einheiten), da in diesen Fällen die Angabe zu
diesem Element identisch zu der Angabe im Element Train-
Weight ist.
I....I....I....I....I....I....Length TractionDetails Length Länge des Triebfahrzeugs Bei lokbespannten Zügen muss die Angabe immer erfolgen. 0..1 K K
Die Angabe kann entfallen bei Tfz-fahrten, Triebzug- und
Triebwagen(-einheiten), da in diesen Fällen die Angabe zu
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 67

## Seite 68

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
diesem Element identisch zu der Angabe im Element Train-
Length ist.
I....I....I....I....I....I....I....Value Length Value Längenwert des Triebfahr- 1 decimal 8 999999.9 K K
zeugs
I....I....I....I....I....I....I....Measure Length Measure Maßeinheit der Länge des Ausschließlich Nutzung der Maßeinheit mm. 1 token K K
Triebfahrzeugs
I....I....I....I....I....TrainMaxSpeed PlannedTrainTechni- TrainMaxSpeed Höchstgeschwindigkeit des Hier wird die technische Höchstgeschwindigkeit des Zuges 1 integer 3 1 999 M M
calData Zuges in Kilometern pro angegeben. Die Angabe erfolgt in km/h.
Stunde [km/h]
I....I....I....I....I....HighestPlannedSpeed PlannedTrainTechni- HighestPlan- Höchstgeschwindigkeit der Höchstgeschwindigkeit des Zuges ab diesem Trassenlauf- 0..1 integer 3 1 999 n/a bM
calData nedSpeed Trasse in Kilometern pro punkt bei Nutzung der Zugtrasse.
Stunde [km/h]
Sie ergibt sich aus der bestellten Höchstgeschwindigkeit des
Zuges (TrainMaxSpeed) und der auf der gewählten Strecke
zugelassenen Höchstgeschwindigkeit auf der Grundlage der
Infrastruktur, sowie der Bremsart, den vorhandenen Brems-
hundertsteln bzw. den erforderlichen Mindestbremshun-
dertstel des Zuges. Die Angabe erfolgt in km/h.
Die Angabe erfolgt nur im Angebot/in der Zugtrasse immer
am ersten TLP und an jedem weiteren TLP mit einer Ände-
rung.
Bei LZB-geführten Zügen wird die Rückfallgeschwindigkeit
angegeben.
I....I....I....I....I....PlannedSpeed PlannedTrainTechni- PlannedSpeed Konstruktionsgeschwindigkeit Maximale Geschwindigkeit, mit der die Trasse zwischen zwei 0..1 integer 3 1 999 n/a n/a
calData in Kilometern pro Stunde Trassenlaufpunkten konstruiert wurde.
[km/h]
Die Angabe erfolgt nur im Angebot/in der Zugtrasse.
I....I....I....I....I....Coasting PlannedTrainTechni- Coasting Ausrollen Zeigt an, dass der Triebfahrzeugführer in Beharrungsfahrt 0..1 boolean Gemäß xs:booelan: n/a n/a
calData übergehen kann. Das heißt, er kann den Zug nach Erreichen
0, false (=falsch)
der Konstruktionsgeschwindigkeit ohne Antrieb weiter aus-
1, true (=wahr)
rollen lassen und hält dabei trotzdem die Fahrplanzeit am
nächsten Zugtrassenlaufpunkt ein.
I....I....I....I....I....MaxAxleWeight PlannedTrainTechni- MaxAxleWeight Radsatzlast ab ZLP (Angabe in Feld wird im Konstruktionsbereich der DB InfraGO nur in 0..1 decimal 4 0.1 99.9 K K
calData Tonnen mit einer Dezimal- Verbindung mit Beförderungsbesonderheit, BZA etc. (be-
stelle) nannt in ExceptionalGaugingIdent) als ergänzende Informati-
onsmöglichkeit genutzt.
I....I....I....I....I....RouteClass PlannedTrainTechni- RouteClass geforderte / mögliche 1. Das EVU gibt in der PathRequestMessage die sich aus der 0..1 string 3 Siehe Stammdaten Kapitel K M
calData Streckenklasse Zugzusammensetzung ergebende erforderliche Strecken- 4.3.5 „Streckenklassen“
klasse an. Ist das Feld in der PathRequestMessage nicht ge-
füllt, gilt die höchste Streckenklasse (aktuell D4).
2. In der PathDetailsMessage wird die bestellte bzw. die sich
aus der Konstruktion ergebende niedrigere Streckenklasse
für den auf die Betriebsstelle folgenden Streckenabschnitt
angegeben.
3. Es dürfen nur die Streckenklassen nach den Bezeichnun-
gen der RiL 457 (DB InfraGO) verwendet werden.
I....I....I....I....I....BrakeType PlannedTrainTechni- BrakeType Bremsstellung des Zuges Die Angabe von hydrodynamischen (Zusatz H) und elektro- 0..1 token Siehe Kapitel 3.16 „Codelis- M M
calData dynamischen (Zusatz E) Bremsen ist nicht gestattet. Bei Ver- ten“
wendung dieser Bremsart in der Bestellung ist das jeweilige
Äquivalent ohne entsprechenden Zusatz zu verwenden.
I....I....I....I....I....EmergencyBrakeOverride PlannedTrainTechni- EmergencyBra- NBÜ (Notbremsüberbrü- Zug verfügt über die technische Ausrüstung NBÜ 0..1 boolean 0, false (=falsch) K K
calData keOverride ckung) vorhanden 1, true (=wahr)
I....I....I....I....I....BrakingRatio PlannedTrainTechni- BrakingRatio vorhandene Bremshun- Garantiert vorhandene Bremshundertstel des Zuges, die 0..1 integer 3 1 999 M M
calData dertstel des Zuges vom Kunden in der PathRequestMessage anzugeben und
Grundlage für die Trassenkonstruktion sind. .
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 68

## Seite 69

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....I....I....I....MinBrakedWeightPercent PlannedTrainTechni- MinBraked- geforderte Mindestbremshun- Mindestbremshundertstel, die für die konstruierte Trasse 0..1 integer 3 1 999 n/a M
calData WeightPercent dertstel benötigt werden. Diese werden mit der Nachricht PathDe-
tailsMessage mit dem Angebot geliefert.
I....I....I....I....I....BrakeWeight PlannedTrainTechni- BrakeWeight Bremsgewicht Das Attribut wird bei DB InfraGO nicht genutzt. 0..1 integer 5 1 99999 n/a n/a
calData
I....I....I....I....I....TrainCC_System PlannedTrainTechni- TrainCC_System Ausrüstung des Zuges mit ei- Angabe gilt für alle Tfz des Zuges (inklusive des ggf. vorhan- 0..N token Siehe Kapitel 3.16 „Codelis- K K
calData nem Zugsicherungssystem denen Steuerwagens) unabhängig von deren Stellung und ten“
Rolle im Zug
I....I....I....I....I....TrainRadioSystem PlannedTrainTechni- TrainRadioSys- Zugfunk Sofern der Zug über Zugfunk verfügt, ist die Angabe bei der 0..1 token Siehe Kapitel 3.16 „Codelis- K K
calData tem Zuglok einzutragen und gilt für alle Tfz. (inklusive Steuerwa- ten“
gen) des Zuges
I....I....I....I....I....TiltingFunction PlannedTrainTechni- TiltingFunction Nutzung der Neigetechnik Angabe, dass die im Zug als technische Einrichtung vorhan- 0..1 boolean 0, false (=falsch) K K
calData dene aktive Neigetechnik genutzt werden soll bzw. wird. 1, true (=wahr)
Vorhandene und genutzte passive Neigetechnik findet keine
Berücksichtigung (= 0).
I....I....I....I....I....OperationalTrainCoupling- PlannedTrainTechni- Operational- Betriebliche Festigkeit Angabe der betrieblichen Festigkeit der Zughakeneinrich- 0..1 integer 1 9999 K K
Strength calData TrainCoupling- Zughakenfestigkeit tung. Die Angabe ist ein erforderliches, technisches Merkmal
Strength des Güterzugs zur Bestimmung der Grenzlast. Bei fehlender
Angabe bei Güterzügen wird der Wert der UIC-Schrauben-
kupplung verwendet
I....I....I....I....I....BogieWagonsOnly PlannedTrainTechni- BogieWagon- Homogener Angabe, dass der bestellte Güterzug aussschließlich aus 0..1 boolean 0, false (=falsch) K K
calData sOnly Drehgestellwagenzug Drehgestellwagen besteht. Bei Nichtangabe muss die maxi- 1, true (=wahr)
male Druckkraft bei geschobenen Güterzügen reduziert wer-
den
I....I....I....I....ExceptionalGaugingIdent PlannedTrainData ExceptionalGau- Angaben zu den Beförde- 0..N
gingIdent rungsbesonderheiten
I....I....I....I....I....IM_Partner ExceptionalGaugingIdent IM_Partner CompanyCode des EIU CompanyCode des EIU, in dessen Bereich die Beförderungs- 1 string 4 0001 ZZZZ Siehe Kapitel 3.16 „Codelis- [0-9A-Z]{4} M M
besonderheit (z. B. BZA, Lademaßüberschreitung) auftritt ten“
I....I....I....I....I....ExceptionalGaugingCode ExceptionalGaugingIdent ExceptionalGau- Bezeichnung der Beförde- BZA-Nummer; Nummer einer Beförderungsanordnung oder 1 string 24 DA = “DA-[0- M M
gingCode rungsbesonderheit oder der Dauer-LÜ; 9]{4}”
Beförderungsanordnung; Be- Gruppenbuchstaben (A, B, C, ….) gemäß Ril 458
förderungsart bei Zügen mit
1. Dauerbeförderungsanordnungen sindin der Form „DA-
Lademaßüberschreitung
xxxx“ anzugeben.
I....I....I....I....DangerousGoodsIndication PlannedTrainData Dangerous- Gefahrgut 0..N
GoodsIndication
I....I....I....I....I....HazardIdentificationNumber DangerousGoodsIndica- HazardIdentifica- Angaben zu Gefahrgut: GGVE- 1. Wenn die <RID_Class> gefüllt ist, können die Felder <Ha- 0..1 string 4 {2,4} bM bM
tion tionNumber Nummer zardIdentificationNumber>, <UN_Number> und <Packing-
Group> gefüllt werden.
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
I....I....I....I....I....UN_Number DangerousGoodsIndica- UN_Number Angaben zu Gefahrgut: UN- 1. Wenn die <RID_Class> gefüllt ist, können die Felder <Ha- 0..1 string 4 [\d*[1-9]\d*] bM bM
tion Nummer (auch als Stoff-Num- zardIdentificationNumber>, <UN_Number> und <Packing-
mer bezeichnet) Group> gefüllt werden.
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
I....I....I....I....I....DangerLabel DangerousGoodsIndica- DangerLabel Gefahr Label nicht anwendbar 0..5 token n/a n/a
tion
I....I....I....I....I....RID_Class DangerousGoodsIndica- RID_Class Angaben zur Gefahrgut: RID- Bei Ganzzügen muss dieses Feld gefüllt werden, wenn Ge- 0..1 string 4 M M
tion Klasse (auch als Gefahrgut- fahrgut befördert wird. Siehe auch Abschnitt 3.14.6 Attribut
klasse bezeichnet) <gefahrgutGanzzug>. Sofern darüber hinaus Gefahrguttrans-
porte deklariert werden müssen, muss mindestens das Attri-
but „RID_Class“ gefüllt werden.
I....I....I....I....I....PackingGroup DangerousGoodsIndica- PackingGroup Angaben zu Gefahrgut: 1. Wenn die <RID_Class> gefüllt ist, können die Felder <Ha- 0..1 token I = sehr gefährlich bM bM
tion Verpackungsgruppe zardIdentificationNumber>, <UN_Number> und <Packing-
II = gefährlich
Group> gefüllt werden.
III = weniger gefährlich
2. Ist <RID_Class> leer, darf dieses Feld nicht gefüllt sein.
I....I....I....I....I....DangerousGoodsWeight DangerousGoodsIndica- Dangerous- Masse des Gefahrguts in Kilo- nicht anwendbar 0..1 integer 6 0 999999 n/a n/a
tion GoodsWeight gramm
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 69

## Seite 70

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....I....I....I....DangerousGoodsVolume DangerousGoodsIndica- Dangerous- Volumen des Gefahrguts in nicht anwendbar 0..1 float n/a n/a
tion GoodsVolume Kubikmetern
I....I....I....I....I....LimitedQuantityIndicator DangerousGoodsIndica- LimitedQuanti- Indikator für ausgezeichnetes Angabe wird von DB InfraGO nicht ausgewertet und verwen- 0..1 boolean 0, false (=falsch) n/a n/a
tion tyIndicator Gefahrgut in limitierter det. 1, true (=wahr)
Menge
I....I....I....I....CombinedTrafficLoadProfile PlannedTrainData CombinedTraffic- KV-Profile 0..1
LoadProfile
I....I....I....I....I....P1 CombinedTrafficLoadPro- P1 gefordertes KV (P2) Hier kann bei Güterzügen das maßgebende KV – Profil ange- 0..1 string 3 001 999 bM bM
file geben werden. Im Angebot von DB InfraGO kann nach Rück-
sprache mit dem Bearbeiter beim Kunden ein niedrigeres
Profil zurückgegeben werden.
I....I....I....I....I....P2 CombinedTrafficLoadPro- P2 gefordertes KV (P3) Hier kann bei Güterzügen das maßgebende KV – Profil ange- 0..1 string 3 001 999 bM bM
file geben werden. Im Angebot von DB InfraGO kann nach Rück-
sprache mit dem Bearbeiter beim Kunden ein niedrigeres
Profil zurückgegeben werden.
I....I....I....I....I....C1 CombinedTrafficLoadPro- C1 gefordertes KV (C2) Hier kann bei Güterzügen das maßgebende KV – Profil ange- 0..1 string 3 001 999 bM bM
file geben werden. Im Angebot von DB InfraGO kann nach Rück-
sprache mit dem Bearbeiter beim Kunden ein niedrigeres
Profil zurückgegeben werden.
I....I....I....I....I....C2 CombinedTrafficLoadPro- C2 gefordertes KV (C3) Hier kann bei Güterzügen das maßgebende KV – Profil ange- 0..1 string 3 001 999 bM bM
file geben werden. Im Angebot von DB InfraGO kann nach Rück-
sprache mit dem Bearbeiter beim Kunden ein niedrigeres
Profil zurückgegeben werden.
I....I....I....StatusOfHarmonization PlannedJourneyLocation StatusOfHarmo- Status der Harmonisierung 0..1 n/a n/a
nization
I....I....I....I....HandoverHarmonized StatusOfHarmonization HandoverHarmo- Das EIU zeigt an, ob am Über- 0..1 boolean 0, false (=falsch) n/a n/a
nized gabebf. für die Übergabe von 1, true (=wahr)
einem EIU auf das nachfol-
gende die Harmonisierung er-
folgt ist.
I....I....I....I....InterchangeHarmonized StatusOfHarmonization InterchangeHar- Das EVU zeigt an, ob am Über- 0..1 boolean 0, false (=falsch) n/a n/a
monized gabebf. für die Übergabe von 1, true (=wahr)
einem EVU auf das nächstfol-
gende EVU die Harmonisie-
rung erfolgt ist.
I....I....I....TrainActivity PlannedJourneyLocation TrainActivity Zugaktivitäten 1. Beinhaltet Haltearten und Haltegründe 0..N Siehe Kapitel 3.16 „Codelis-
ten“ - TrainActivityType
2. Details siehe Ausführungen zur Unterstruktur "TrainActi-
vity" (Kapitel 3.8.1.10)
I....I....I....I....TrainActivityType TrainActivity TrainActivityType Typ der Zugaktivität 1. Beinhaltet die Kodierung von Haltearten und Haltegründe 1 string 4 Siehe Kapitel 3.16 „Codelis- bM bM
ten“ - TrainActivityType
2. Details siehe Ausführungen zur Unterstruktur "TrainActi-
vity" (siehe Kapitel 3.8.1.10)
I....I....I....I....AssociatedAttachedTrainID TrainActivity AssociatedAtta- ReferenceTRID des referen- Angabe der ReferenceTRID des Zuges aus einer Zug-Family, 0..1 K K
chedTrainID zierten Zuges der ggf. von der genannten Zugaktivität betroffen ist.
I....I....I....I....I....ObjectType AssociatedAttachedTrai- ObjectType Objekttyp Sofern eine Referenzierung auf einen anderen Zug durch An- 1 string 2 [0-9A-Z]{2} bM bM
nID gabe einer ReferenceTRID erfolgt, sind dieses und die nach-
folgenden bedingten Mussfelder vollständig zu befüllen.
I....I....I....I....I....Company AssociatedAttachedTrai- Company Der CompanyCode des EVU Siehe Kapitel 3.16 "Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4} bM bM
nID
I....I....I....I....I....Core AssociatedAttachedTrai- Core Kernelement des Identifiers Es müssen alle 12 Stellen gefüllt werden. Nicht genutzte Stel- 1 string 12 [\-\*0-9A-Z]{12} bM bM
nID len sind mit „-„ aufzufüllen..
I....I....I....I....I....Variant AssociatedAttachedTrai- Variant Variante 1 string 2 [0-9A-Z]{2} bM bM
nID
I....I....I....I....I....TimetableYear AssociatedAttachedTrai- TimetableYear Fahrplanperiode 1 integer 4 2012 2097 bM bM
nID
I....I....I....I....I....StartDate AssociatedAttachedTrai- StartDate Startdatum der geplanten Ab- wird nur im Betrieb bei Tagesfahrplänen genutzt 0..1 date 10 2012- 2097-12- n/a n/a
nID fahrt 01-01 31
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 70

## Seite 71

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....I....I....AssociatedAttachedOTN TrainActivity AssociatedAtta- Zugnummer des referen- Angabe der OTN des Zuges, der ggf. von der genannten Zug- 0..1 string 6 [0-9]{1,6} K K
chedOTN zierten Zuges aktivität betroffen ist. Zu beachten ist, dass bei der Zuwei-
sung mehrerer Trassen zu einer Fahrlage (PathRequestMes-
sage) des über die OTN referenzierten Zuges bei fachlichem
Bedarf durch DB InfraGO eine abweichende OTN vergeben
werden kann. Die Referenzierung wird in diesem Fall nicht
angepasst und ist nicht mehr zutreffend. Eine weitestgehend
sichere Referenzierung ist daher nur bei Nutzung der Refe-
renceTRID gewährleistet.
I....I....I....I....AssociatedAttachedTrainService- TrainActivity AssociatedAtta- Kommerzielle Liniennummer Angabe nur bei Nutzung eines TrainActivityTypeCodes zur 0..1 string 6 [0-9A-Z]{1-6} IC6, RB125, S25 K K
Number chedTrainSer- anstatt eines referenzierten Darstellung einer Referenz auf einen anderen Zug, z. B. bei
viceNumber Zuges Anschlüssen (TrainActivityTypeCodes 0046 oder 0047) oder
Zugverknüpfungen (TrainActivityTypeCodes 0044 oder 0045)
I....I....I....I....AssociatedAttachedTimingAtLoca- TrainActivity AssociatedAtta- Angabe einer Ankunfts- oder Angabe nur bei Nutzung eines TrainActivityTypeCodes zur 0..1 K K
tion chedTimingAtLo- Abfahrtszeit des referenzier- Darstellung einer Referenz auf einen anderen Zug, z. B. bei
cation ten Zuges Anschlüssen (TrainActivityTypeCodes 0046 oder 0047) oder
Zugverknüpfungen (TrainActivityTypeCodes 0016, 0017,
0044 oder 0045)
I....I....I....I....I....TimingAtLocation AssociatedAttachedTi- TimingAtLoca- Abfahrts- oder Ankunftszeit Angabe entweder der Ankunfts- oder der Abfahrtszeit des 1
mingAtLocation tion am ZLP/TLP referenzierten Zuges je nach fachlichem Kontext.
I....I....I....I....I....I....Timing TimingAtLocation Timing 0..1
I....I....I....I....I....I....I....TimingQualifierCode Timing TimingQualifier- Kodierung der Art der angege- 1. In der XSD ist diese Information ein Attribut 1 token Siehe Kapitel 3.16 „Codelis- bM bM
Code benen Abfahrts- bzw. An- ten“
2. Es muss der gleiche TimingQualifierCode angegeben wer-
kunftszeit.
den wie am Verknüpfungspunkt beim referenzierten Zug
oder Path.
I....I....I....I....I....I....I....Time Timing Time Zeitangabe für die in Timing- 1. Angabe im Format hh:mm:ss mit den Ausprägungen 1 time M M
QualifierCode definierte Art 00:00:00 bis 23:59:54.
2. Die Sekunden sind immer in 6-Sekunden-Schritten anzu-
geben.
3. Es muss der gleiche Wert angegeben werden wie am Ver-
knüpfungspunkt beim referenzierten Zug oder Path.
I....I....I....I....I....I....I....Offset Timing Offset Tageswechsel / Nachtsprung Es muss der gleiche Wert angegeben werden wie am Ver- 1 positive M M
knüpfungspunkt beim referenzierten Zug oder Path. integer
I....I....I....I....I....I....I....BookedLocationdateTime Timing BookedLocation- Angabe der Abfahrt-/Durch- Im Zusammenhang mit der Angabe eines TrainActivityType- 0..1 dateTime n/a n/a
DateTime fahrtszeit mit Tagesdatum Codes darf das Element nicht genutzt werden.
I....I....I....I....I....DwellTime TimingAtLocation DwellTime bestellte Mindesthaltedauer Im Zusammenhang mit der Angabe eines TrainActivityType- 0..1 decimal 6 0.0 1200.0 n/a n/a
Codes darf das Element nicht genutzt werden.
I....I....I....I....AssociatedAttachedLocationIdent TrainActivity Associ- Angabe einer referenzierten Angabe nur bei Nutzung eines TrainActivityCodes zur Dar- 0..1 K K
atedAttachedLoc Betriebsstelle stellung einer Referenz auf einen anderen Zug, z. B. bei An-
ationIdent schlüssen (TrainActivityTypeCodes 0046 oder 0047) oder
Zugverknüpfungen (TrainActivityTypeCodes 0016, 0017,
0044 oder 0045)
I....I....I....I....I....CountryCodeISO AssociatedAttachedLoca- CountryCodeISO CountryCode des LocationPri- Eindeutige EU-weite Identifikation einer Betriebsstelle in 1 string 2 Siehe Stammdaten (Kapitel M M
tionIdent maryCode des ZLP/TLP Verbindung mit dem <LocationPrimaryCode> 4.3)
Deutschland = DE
I....I....I....I....I....LocationPrimaryCode AssociatedAttachedLoca- LocationPrima- LocationPrimaryCode des Eindeutige EU-weite Identifikation einer Betriebsstelle (Pri- 1 positive 5 1 99999 Siehe Stammdaten M M
tionIdent ryCode ZLP/TLP maryLocation) in Verbindung mit dem <CountryCodeISO>. integer
(Kapitel 4.3)
Wird von jedem Land selbständig vergeben.
Die LocationPrimaryCodes werden getrennt veröffentlicht.
Geplante Betriebsstellen, für die noch keine offizielle Codie-
rung zugeordnet wurde, haben immer die Codierung 99999
I....I....I....I....I....PrimaryLocationName AssociatedAttachedLoca- PrimaryLocation- Name des ZLP/TLP Muss bei in Planung befindlichen Betriebsstellen, für die 0..1 string 255 bM bM
tionIdent Name noch kein PLC vergeben wurde, immer gefüllt sein.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 71

## Seite 72

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
I....I....I....I....I....LocationSubsidiaryIdentification AssociatedAttachedLoca- LocationSubsidi- Code, Name und Lokalisierung Ergänzende Angabe zur als PrimaryLocation angegebenen 0..1 K K
tionIdent aryIdentification der ergänzenden Angaben Betriebsstelle, wie Gleisbezeichnung/-nummer, besondere
zum ZLP/TLP (Subsidiary Loca- Eigenschaft der Betriebsstelle, RiL100-Code der DB InfraGO
tion)
I....I....I....I....I....I....LocationSubsidiaryCode LocationSubsidiaryIdenti- LocationSubsidi- Code der ergänzenden Anga- In Verbindung mit TypeCode 41 kann hier der für die Prima- 1 string 10 K K
fication aryCode ben zum ZLP/TLP als Teil der ryLocation im Netz der DB definierte RiL 100-Code (in CRD
PrimaryLocation hinterlegt) angegeben werden.
I....I....I....I....I....I....I....LocationSubsidiaryType- LocationSubsidiaryCode LocationSubsidi- Code des Typs der ergänzen- In der XSD ist diese Information ein eigenständiges Attribut 1 Siehe Kapitel 3.16 „Codelis- K K
Code aryTypeCode den Angaben zum ZLP/TLP innerhalb des Elements SubsidiaryLocationCode. ten“
I....I....I....I....I....I....AllocationCompany LocationSubsidiaryIdenti- AllocationCom- CompanyCode des für die Siehe Kapitel 3.16"Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4} K K
fication pany SubsidiaryLocation verant-
wortlichen EIU
I....I....I....I....I....I....LocationSubsidiaryName LocationSubsidiaryIdenti- LocationSubsidi- Bezeichnung der durch die er- In Verbindung mit TypeCode 41 kann hier optional der Name 0..1 string 255 K K
fication aryName gänzenden Angaben zum des für das Netz der DB definierten RiL 100-Codes (in CRD
ZLP/TLP beschriebenen Ört- hinterlegt) der PrimaryLocation angegeben werden.
lichkeit
I....I....I....I....FreeTextField TrainActivity FreeTextField Ergänzende Angabe zur Train- Keine Nutzung, wenn zur Übermittlung der fachlichen Infor- 0..1 string 255 bM bM
Activity mation ein Standardfeld oder Code existiert.
I....I....I....OnDemandPath PlannedJourneyLocation OnDemandPath Abschnitt ab ZLP ist Be- Bedarfstrassen werden durch DB InfraGO nicht unterstützt 0..1 boolean Gemäß xs:booelan: n/a n/a
darfstrasse
0, false (=falsch)
1, true (=wahr)
I....I....I....RFCPaP PlannedJourneyLocation RFCPaP RFC-PreArrangedPath Angabe der PaPID, um die Betriebsstelle der PAPID zuzuord- 0..1 string 20 n/a n/a
nen
I....I....I....PreArrangedPath PlannedJourneyLocation PreArrangedPath PreArrangedPath (PAP) Kann nur über PCS bestellt werden; ggf. Angabe der Num- 0..1 string 9 n/a n/a
mer eines PAP
I....I....I....OperationalTrainNumber PlannedJourneyLocation OperationalTrai- Betriebliche Zugnummer 1. Das Element wird nur innerhalb der Oberstruktur PathIn- 0..1 string 6 [0-9]{1,6} bM bM
nNumber formation genutzt.
2. Erstanmeldungen für Trassen von EVU mit einem zuge-
wiesenen Zugnummernkontingent, alle Erstanmeldung für
Internationale Züge (gemäß UIC-Merkblatt 419-1 &2) sowie
generell alle Nachrichten für Folgegeschäftsvorfälle müssen
eine Zugnummer enthalten.
3. Nachrichten für die Produkte FZB und FPS sind immer mit
einer Zugnummer anzumelden. Mit der Angabe einer Zug-
nummer als zusätzliches Ordnungsmerkmal des Bestellers ist
innerhalb einer Fahrplanperiode die Eindeutigkeit der Zug-
nummer jeweils für eine verwendete Kundennummer zu ge-
währleisten (Eindeutigkeitskriterien: Kundennummer, Zug-
nummer, Verkehrstage).
I....I....I....NetworkSpecificParameter PlannedJourneyLocation NetworkSpe- Spezifische Parameter (Attri- Aufbau und Verwendung der Parameter siehe Kapitel 3.14.6 0..N M M
cificParameter bute, Felder) des EIU "NetworkSpecificParameter - Location-Ebene"
I....I....I....I....Name NetworkSpecificParame- Name Name des Parameters Generischer Name des Parameters 1 string 255 M M
ter
I....I....I....I....Value NetworkSpecificParame- Value Wert des Parameters Wert des Parameters 1 string 255 M M
ter
I....I....I....JourneyLocationTypeCode PlannedJourneyLocation JourneyLocation- Typ des Zug- bzw. Zugtrassen- Der Wert für einen ZLP in der PathInformation ist der gleiche 1..N token 01 = Origin (Start-Btrst)) M M
TypeCode laufpunkts wie der Wert des korrespondierenden ZLP der TrainInforma-
02 = Intermediate (Unter-
tion (sofern der ZLP ebenfalls in der TrainInformation vor-
wegs-Btrst)
handen ist). Der Wert 01 wird nur für den ZLP verwendet,
der die tatsächliche Start-Btrst des Zuglaufs beschreibt. Der 03 = Destination (Ziel-Btrst)
Wert 03 wird nur für den ZLP verwendet, der die tatsächli- 04 = Handover (Übergang
che Ziel-Btrst des Zuglaufs beschreibt. der fahrplanerischen Ver-
Der Wert „08“ ist in der Kommunikation mit DB InfraGO antwortung zwischen EIU)
nicht zu verwenden. 05 = Interchange (Wechsel
des die Zugfahrt
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 72

## Seite 73

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vorkom- Typ Länge Min- Max- Ausprägungen Muster Train / Path
men Wert Wert Path in in PD
PR
Eine Mehrfachangabe ist möglich, z. B. wenn ein Handover- durchführenden EVU
point (04) gleichzeitig auch Network border (09) ist. (ResponsibleRU)
06 = Handover and Inter-
change (Kombination der
Ausprägungen 04 und 05)
07 = Stateborder (Staats-
grenze)
08 = None (keine Definition)
09 = Network border (Infra-
strukturgrenze/Netzgrenze)
99 = Mutually defined
(mehrfache Bedeu-
tung/sonstige Betriebsstelle
Siehe auch Kapitel 3.16
„Codelisten“
Tabelle 20 Struktur PlannedJourneyLocation Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 73

## Seite 74

3.9 Struktur „PlannedCalendar“
3.9.1 Übersicht über die Struktur „PlannedCalendar“
Diese Struktur ist in den Oberstrukturen „TrainInformation“ und „PathInformation“ sowie in der „AffectedSection“ enthalten. Die Struktur „PlannedCalendar“ muss immer angegeben werden, wenn eine dieser Oberstrukturen in einem
Nachrichtentyp angegeben werden muss oder soll.
Die Struktur „PlannedCalendar“ weist in den Oberstrukturen „TrainInformation“ und „PathInformation“ mit der Angabe der Verkehrstage (BitmapDays) für einen angegebenen Verkehrszeitraum (ValidityPeriod) die Verkehrszeitregelung
des Zuges, der Route bzw. der Zugtrasse oder RVK aus. Für RVK gelten jedoch besondere Regeln (siehe Hauptdokument Kap. 8.3.2).
Bei Angabe in der Oberstruktur „AffectedSection“ beschreiben die Angaben in der Struktur „PlannedCalendar“ die Gültigkeit des in der jeweiligen Nachricht übermittelten fachlichen Sachverhalts bzw. die Gültigkeit der darin enthaltenden
Daten (z. B Angabe der Ausfalltage bei Stornierungen).
Abbildung 25 PlannedCalendar Struktur
Nutzung der Struktur „PlannedCalendar“ in der Nachricht „PathRequestMessage“:
 Die Nachricht enthält zwei Verkehrszeitregelungsangaben:
o Verkehrszeitregelung in der Oberstruktur „TrainInformation“, gültig für den vollständigen Zuglauf (Route)
o Verkehrszeitregelung in der Oberstruktur „PathInformation“, gültig für denjenigen Zuglaufabschnitt, für den das über die PathRequestMessage angefragte EIU verantwortlich ist.
 Die Verkehrstage definieren sich ab der Start-Betriebsstelle in der Oberstruktur „TrainInformation“ bzw. ab der Start-Betriebsstelle in der Oberstruktur „PathInformation“. In Abhängigkeit vom Wert im Attribut OffsetToReference
können sich die Verkehrstage in der Struktur PlannedCalendar in der TrainInformation bzw. PathInformation im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) um die Anzahl der
Tageswechsel verschieben.
 Das Attribut „Offset“ der Unterstruktur „TimingAtLocation“ in der Struktur PlannedJourneyLocation gibt die Tageswechsel innerhalb des Zug- bzw. Trassenlaufs an. Es hat an der Start-Betriebsstelle immer den Wert „0“ und ist im
weiteren Zug-bzw. Trassenverlauf immer positiv (oder „0“, wenn kein Tageswechsel geplant wird bzw. sich aus der Konstruktion der Zugtrasse ergibt).
Nutzung der Struktur „PlannedCalendar“ in der Nachricht „PathDetailsMessage“:
 Die Verkehrszeitregelung bezieht sich auf die erste durch eine Unterstruktur „PlannedJourneyLocation“ definierte Betriebsstelle in der Oberstruktur „PathInformation“. In Abhängigkeit vom Wert im Attribut OffsetToReference
können sich die Verkehrstage der Zugtrasse im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) oder der Route um die Anzahl der Tageswechsel verschieben.
 Sie beinhaltet die durch die Konstruktion definierten Verkehrstage der Zugtrasse
 Das EIU kann bei Bedarf auf eine Nachricht „PathRequestMessage“ mehrere Zugtrassen zuweisen. Hierbei erhält jede separate „PathDetailsMessage“ eine eigene Unterstruktur „PlannedCalendar“ mit jeweils unterschiedlichen, d.
h. disjunkten und komplementären Verkehrstageregelungen im Kontext zu der bestellten Verkehrstageregelung.
Nutzung der Struktur „PlannedCalendar“ in der Struktur „AffectedSection“ (Details siehe Kapitel 3.12):
 Die Verkehrstageregelung bezieht sich auf die in der Unterstruktur „StartOfSection“ angegebene (erste betroffene) Betriebsstelle der referenzierten Zugtrasse.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 74

## Seite 75

3.9.2 Struktur „ReferenceTrainIDSubCalendar“ und Attribut „OffsetToReference“:
Durch das EVU (Rolle LeadRU) erfolgt die Planung von Zugobjekten, die in einer Train-Family zusammengefasst werden. Die Train-Family wird auch als ReferenceTrain bezeichnet, dessen eindeutiger Identifikator die ReferenceTrainID
(ReferenceTRID) ist. Der ReferenceTrain ist ein imaginäres Objekt mit einem imaginären ReferenceCalendar. Jedem Tag dieses Kalenders darf max. ein Zug eines Zugobjekts Train der Train-Family zugeordnet sein. Der ReferenceCalendar
des ReferenceTrains enthält somit alle Verkehrstage des imaginären Objekts ReferenceTrain.
Der Kalender selbst wird in der Kommunikation zwischen EVU und EIU nur indirekt bzw. teilweise durch den ReferenceTrainIDSubCalendar ausgetauscht, der in allen Kap. 2.2 genannten Nachrichten (außer Error-Message) enthalten ist. Er
dient vor allem zur Konsolidierung der Angaben in der Struktur PlannedCalendar in Verbindung mit der Angabe im Element „OffsetToReference“ und der Ableitung des Elements „startDate“ in den Identifiers der Tagesobjekte.
Jeder in einem „PlannedCalendar“ enthaltene Verkehrstag muss unter Berücksichtigung der Angabe in OffsetToReference immer ein Pendant im ReferenceTrainIDSubCalendar haben. Anderenfalls liegt ein Fehler vor.
Das Attribut „OffsetToReference“ gibt die Verschiebung der Verkehrstage in der Struktur PlannedCalendar für die Objekte Route (in der TrainInformation der PathRequestMessage) bzw. PathRequest (in der PathInformation der PathRe-
questMessage) sowie für das Objekt Path (in der PathInformation der PathDetailsMessage) im Vergleich zu den Verkehrstagen des ReferenceTrain und dessen Kalender (ReferenceCalendar) an. Es dient aber ebenso der eindeutigen
Ermittlung des StartDate im Identifier der Tagesobjekte und der eindeutigen Verlinkung der Paths zum ReferenceTrain an den jeweiligen Verkehrstagen unter Berücksichtigung der durch den Wert im Attribut „OffsetToReference“ erfor-
derlichen Verschiebung.
Abbildung 26 ReferenceTrainIDSubCalendar Struktur
3.9.3 Datenfelder der Struktur „PlannedCalendar“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....I....PlannedCalendar PlannedCalendar Verkehrstageregelung 1
I....I....I....BitmapDays PlannedCalendar BitmapDays Bitleiste der Verkehrstage des Zuges bzw. der Zugtrasse (bzw. des 1. Muster, welches angibt, an welchen Tagen innerhalb 0..1 string 740 [0-1]{1,740}
Ergebnisses einer Fahrzeitberechnung oder Fahrplanstudie) der ValidityPeriod der Zug fährt oder nicht fährt bzw. die
Zugtrasse geplant ist oder nicht. Bei Verwendung der Bit-
leiste im Kalender der Struktur „AffectedSection“ wird da-
mit angegeben, an welchen Tagen die jeweilige Nachricht
gilt.
2. Das Muster wird als Zeichenkette mit den Zeichen "1"
(Verkehrstag) und "0" (kein Verkehrstag) dargestellt.
3. Die Bitleiste muss immer angegeben werden, wenn die
ValidityPeriod mehr als einen Tag umfasst.
4. Die Bitleiste muss genauso lang sein, wie es Kalender-
tage zwischen <StartDateTime> und <EndDateTime> (je-
weils inklusive) gibt.
5. Somit entspricht das erste Zeichen in der Bitleiste dem
Startdatum und das letzte Zeichen dem Enddatum, unab-
hängig davon, ob Start- und/oder Enddatum ein Verkehrs-
tag sind oder nicht.
6. Startdatum und Enddatum (und somit implizit auch die
Verkehrstage in der Bitleiste) dürfen nicht außerhalb der
angegebenen Fahrplanperiode (Attribut <TimetableYear>
im Identifier des Objektes, für das der Kalender gilt) liegen.
7. Bei RVK stellt die Bitleiste das Muster der Verkehrstage-
regelung dar, die identisch für alle Fahrplanperioden in-
nerhalb der Laufzeit der RVK angewendet wird. Die Bit-
leiste hat bei RVK immer eine Länge von 371 Zeichen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 75

## Seite 76

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....I....I....ValidityPeriod PlannedCalendar ValidityPeriod Verkehrszeitraum der Route/der Fahrlage/der Zugtrasse Der Verkehrszeitraum muss innerhalb der Gültigkeit des 1
angegebenen Jahresfahrplans liegen. Das Fahrplanjahr
ergibt sich aus der Angabe im Attribut „TimetableYear“ im
Identifier des Objektes, für das der Kalender gilt (siehe Ka-
pitel 3.4)
Für das Marktprodukt RV gibt die ValidityPeriod die Lauf-
zeit der RVK an. Die besonderen Regelungen sind in Kap.
8.3.2 des Hauptdokuments zusammengestellt.
I....I....I....I....StartDateTime ValidityPeriod StartDateTime Startdatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen
I....I....I....I....EndDateTime ValidityPeriod EndDateTime Enddatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 0..1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen; die Gültigkeit des Enddatums geht
jedoch immer bis 23:59:59.
4. Bei einem eintägigen Verkehrszeitraum kann die An-
gabe des Enddatums entfallen oder den gleichen Wert wie
das Startdatum haben.
I....I....I....OffsetToReference PlannedCalendar OffsetToReference Angabe der Anzahl der Verschiebungstage zwischen dem Plan- Der ReferenceCalendar (bzw. der ReferenceTrainIDSub- 0..1 integer -1
nedCalendar und dem ReferenceCalendar bzw. dem ReferenceTrai- Calendar als eine Teilmenge davon) enthält die geplanten
nIDSubCalendar des ReferenceTrains Verkehrstage der durch den ReferenceTrain repräsentier-
ten Verkehrsdienstleistung. Die Kalender der tatsächlichen
Züge, deren Routen, PathRequests und Trassen sind i. d. R.
identisch und repräsentieren innerhalb des jeweiligen Gel-
tungszeitraumes die gleichen Verkehrstage. Der OffsetTo-
Reference hat in diesem Fall den Wert „0“.
In ausgewählten Situationen kann es jedoch zu einer Ver-
schiebung der tatsächlichen Züge bzw. deren Routen, Pa-
thRequests oder Trassen auf den Vortag oder einen Folge-
tag kommen. Diese Verschiebung wird durch OffsetToRe-
ference = -1 bei Verschiebung auf den Vortag oder durch
OffsetToReference >= 1 bei Verschiebung auf einen Folge-
tag ausgedrückt.
Der Defaultwert ist „0“.
Tabelle 21 PlannedCalendar Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 76

## Seite 77

3.9.4 Datenfelder der Struktur „ReferenceTrainIDSubCalendar“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....ReferenceTrainIDSubCalendar ReferenceTrainIDSubCalendar Verkehrstageregelung des ReferenceTrains 1
I....I....BitmapDays ReferenceTrainIDSubCalendar BitmapDays Bitleiste der Verkehrstage des ReferenceTrains 1. Muster, welches angibt, an welchen Tagen innerhalb 0..1 string 740 [0-1]{1,740}
der ValidityPeriod ein Zug/eine Verkehrsdienstleistung
dem ReferenceTrain zugeordnet ist.
2. Das Muster wird als Zeichenkette mit den Zeichen "1"
(Verkehrstag) und "0" (kein Verkehrstag) dargestellt.
3. Die Bitleiste muss immer angegeben werden, wenn die
ValidityPeriod mehr als einen Tag umfasst.
4. Die Bitleiste muss genauso lang sein, wie es Kalender-
tage zwischen <StartDateTime> und <EndDateTime> (je-
weils inklusive) gibt
5. Somit entspricht das erste Zeichen in der Bitleiste dem
Startdatum und das letzte Zeichen dem Enddatum, unab-
hängig davon, ob Start- und/oder Enddatum ein Verkehrs-
tag sind oder nicht.
6. Startdatum und Enddatum (und somit implizit auch die
Verkehrstage in der Bitleiste) dürfen nicht außerhalb der
angegebenen Fahrplanperiode (Attribut <TimetableYear>
im Identifier des ReferenceTrains) liegen.
7. Bei RVK stellt die Bitleiste das Muster der Verkehrstage-
regelung dar, die identisch für alle Fahrplanperioden in-
nerhalb der Laufzeit der RVK angewendet wird. Die Bit-
leiste hat bei RVK immer eine Länge von 371 Zeichen.
I....I....ValidityPeriod ReferenceTrainIDSubCalendar ValidityPeriod Verkehrszeitraum des ReferenceTrains Der Verkehrszeitraum muss innerhalb der Gültigkeit des 1
angegebenen Jahresfahrplans liegen. Das Fahrplanjahr
ergibt sich aus der Angabe im Attribut „TimetableYear“ im
Identifier des ReferenceTrains)
Für das Marktprodukt RV gibt die ValidityPeriod die Lauf-
zeit der RVK an. Die besonderen Regelungen sind in Kap.
8.3.2 des Hauptdokuments zusammengestellt.
I....I....I....StartDateTime ValidityPeriod StartDateTime Startdatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen
I....I....I....EndDateTime ValidityPeriod EndDateTime Enddatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 0..1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen; die Gültigkeit des Enddatums geht
jedoch immer bis 23:59:59.
4. Bei einem eintägigen Verkehrszeitraum kann die An-
gabe des Enddatums entfallen oder den gleichen Wert wie
das Startdatum haben.
Tabelle 22 ReferenceTrainIDSubCalendar Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 77

## Seite 78

3.10 Struktur „RequestedCalendar“
3.10.1 Übersicht über die Struktur „RequestedCalendar“
Die Struktur „RequestedCalendar“ ist nur in der Oberstruktur „PathInformation“ enthalten.
Sie wird in der PathRequestMessage verwendet, sofern in einem Geschäftsvorfall Änderung nach Vertragsschluss eine Änderung der gebuchten Trasse an einzelnen Tagen mit einer Verschiebung auf den Vor-oder Folgetag bestellt wird.
Der PlannedCalendar enthält dabei mit einem entsprechend angepassten OffsetToReference die zukünftig gewünschten Verkehrstage, der RequestedCalendar hingegen enthält die abzuändernden Verkehrstage der bisher gebuchten
Trasse.
Sie wird ebenso in der PathDetailsMessage verwendet, wenn sich durch die Trassenkonstruktion eine Verschiebung auf den Vor- oder Nachfolgetag entgegen der ursprünglichen Bestellung ergibt. Der PlannedCalendar enthält dabei die
tatsächlichen Verkehrstage der Trasse bzw. RKV mit einem entsprechend angepassten OffsetToReference. Der RequestedCalendar wiederholt die in der durch die PathDetailsMessage referenzierten PathRequestMessage ursprünglich
bestellten Verkehrstage (BitmapDays) und den Verkehrszeitraum (ValidityPeriod) der bestellten Fahrlage eines Zuges bzw. einer RVK.
Des Weiteren gelten die Aussagen in Kapitel 3.9 analog.
Abbildung 27 RequestedCalendar Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 78

## Seite 79

3.10.2 Datenfelder der Struktur „RequestedCalendar“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....I....RequestedCalendar RequestedCalendar Verkehrstageregelung 0..1
I....I....I....BitmapDays PlannedCalendar BitmapDays Bitleiste der Verkehrstage des Zuges bzw. der Zugtrasse (bzw. des Ergebnisses einer 1. Muster, an denen der Zug fährt oder nicht fährt bzw. die 0..1 string 740 [0-1]{1,740}
Fahrzeitberechnung oder Fahrplanstudie) Zugtrasse geplant ist oder nicht.
2. Das Muster wird als Zeichenkette mit den Zeichen "1"
(Verkehrstag) und "0" (kein Verkehrstag) dargestellt.
3. Die Bitleiste muss immer angegeben werden, wenn die
ValidityPeriod mehr als einen Tag umfasst.
4. Die Bitleiste muss genauso lang sein, wie es Kalender-
tage zwischen <StartDateTime> und <EndDateTime> (je-
weils inklusive) gibt
5. Somit entspricht das erste Zeichen in der Bitleiste dem
Startdatum und das letzte Zeichen dem Enddatum.
6. Startdatum und Enddatum (und somit implizit auch die
Verkehrstage in der Bitleiste) dürfen nicht außerhalb der
Fahrplanperiode (Attribut <TimetableYear> des Objekts
liegen, für den der Kalender gilt.
7. Bei RVK stellt die Bitleiste das Muster der Verkehrstage-
regelung dar, die identisch für alle Fahrplanperioden in-
nerhalb der Laufzeit der RVK angewendet wird. Die Bit-
leiste hat bei RVK immer eine Länge von 371 Zeichen.
I....I....I....ValidityPeriod PlannedCalendar ValidityPeriod Verkehrszeitraum des Zuges/der Fahrlage/der Zugtrasse Der Verkehrszeitraum muss innerhalb der Gültigkeit des 1
angegebenen Jahresfahrplans liegen. Das Fahrplanjahr
ergibt sich aus der Angabe im Attribut „TimetableYear“
des Identifiers des Objekts, für den der Kalender gilt
Für das Marktprodukt RV gibt die ValidityPeriod die Lauf-
zeit der RVK an. Die besonderen Regelungen sind in Kap.
8.3.2 des Hauptdokuments zusammengestellt.
I....I....I....I....StartDateTime ValidityPeriod StartDateTime Startdatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen
I....I....I....I....EndDateTime ValidityPeriod EndDateTime Enddatum des Verkehrszeitraums 1. Das Feld hat das Format "dateTime" 0..1 dateTime
2. Nur die Datumkomponente wird benutzt
3. Die Zeitkomponente ist nicht relevant, Sie ist immer mit
"00:00:00" zu belegen; die Gültigkeit des Enddatums geht
jedoch immer bis 23:59:59.
4. Bei einem eintägigen Verkehrszeitraum kann die An-
gabe des Enddatums entfallen oder den gleichen Wert wie
das Startdatum haben.
Tabelle 23 RequestedCalendar Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 79

## Seite 80

3.11 PathPlanningReferenceLocation
In dieser Struktur definiert das bestellende EVU den Zuglaufpunkt, auf welchen sich die für die Oberstruktur „TrainInformation“ angegebene Verkehrszeitregelung (Struktur „PlannedCalendar) bezieht, als Referenzbetriebsstelle für den
gewünschten Beginn der Trassenkonstruktion.
Liegt dieser Zuglaufpunkt innerhalb des Konstruktionsbereiches der DB InfraGO und ist dieser nicht gleichzeitig erster oder letzter konstruktionsrelevanter Zuglaufpunkt, erfolgt die Entscheidung über die gewünschte Konstruktionsrichtung
anhand der bestellten Fahrplanzeit. Ist eine Ankunftszeit angegeben, erfolgt die Trassenkonstruktion zunächst „rückwärts“ und anschließend „vorwärts“, wurde eine Abfahrtszeit bestellt erfolgt die Trassenkonstruktion zuerst „vorwärts“
und anschließend „rückwärts“.
In allen anderen Fällen gilt:
 Referenzbetriebsstelle liegt vor dem oder ist gleich dem 1. konstruktionsrelevanten Zuglaufpunkt bedeutet die Konstruktionsrichtung im Bereich der DB InfraGO ist „vorwärts“.
 Referenzbetriebsstelle liegt nach dem oder ist gleich dem letzten konstruktionsrelevanten Zuglaufpunkt bedeutet die Konstruktionsrichtung im Bereich der DB InfraGO ist „rückwärts“.
 Bei Konstruktionsrichtung = „vorwärts“ beginnt die Konstruktion ab der Abfahrtszeit in dem als Referenzbetriebsstelle bezeichneten Zuglaufpunkt bzw. in dem 1. konstruktionsrelevanten Zuglaufpunkt.
 Bei Konstruktionsrichtung = „rückwärts“ beginnt die Konstruktion ab der Ankunftszeit in dem als Referenzbetriebsstelle bezeichneten Zuglaufpunkt bzw. in dem letzten konstruktionsrelevanten Zuglaufpunkt.
Wird der als Fixpunkt definierte Zuglaufpunkt innerhalb des Konstruktionsbereiches der DB InfraGO mehrfach durchfahren, wird derjenige Zuglaufpunkt in der Fahrlage als Fixpunkt ausgewählt, der einen bestellten Verkehrshalt repräsen-
tiert. Trifft dies auf alle mehrfach durchfahrenen Zuglaufpunkte zu, wird der erste durchfahrene Zuglaufpunkt als Fixpunkt ausgewählt. Bei Kreis- oder Dreiecksfahrten mit identischen Start- und Zielzuglaufpunkt wird immer der Startzug-
laufpunkt als Fixpunkt definiert.
Zu der als PathPlanningReferenceLocation in der Struktur „TrainInformation“ angegebenen Betriebsstelle muss in der Struktur „PathInformation“ der PathRequestMessage mindestens eine gewünschte Fahrplanzeit (TimingAtLocation) der
Ausprägungen ELA, ELD, LLA, LLD, ALA oder ALD für das Attribut TimingQualifierCode angegeben werden, sofern die Betriebsstelle innerhalb des Konstruktionsbereichs der DB InfraGO liegt.
Abbildung 28 PathPlanningReferenceLocation Struktur
Die Datenfeldbeschreibungen der Attribute entsprechen den gleichnamigen Beschreibungen in der Struktur „PlannedJourneyLocation“
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 80

## Seite 81

3.12 AffectedSection
3.12.1 Übersicht über die Struktur „AffectedSection“
Diese Struktur ist nur in folgenden Nachrichten enthalten:
 PathDetailsRefusedMessage
 PathConfirmedMessage
 PathCanceledMessage
 PathNotAvailableMessage
 ReceiptConfirmationMessage
Die Struktur ist eine Indikation für den Empfänger über die räumliche und/oder zeitliche Gültigkeit des Inhalts der Nachricht mit Bezug auf das jeweils durch die Nachricht referenzierten Objekts.
In den Nachrichten „PathDetailsRefusedMessage“, „PathConfirmedMessage“ und „ReceiptConfirmationMessage“ entsprechen die in der Struktur „AffectedSection“ anzugebenden Angaben zu Start- und Zielbahnhof sowie zum Kalender
den Angaben zu diesen Attributen in der Struktur „PathInformation“ des jeweils referenzierten Paths.
Mit der Nachricht „PathCanceledMessage“ wird der Geschäftsvorfall „Stornierung“, mit der Nachricht „PathNotAvailableMessage“ wird der Geschäftsvorfall „netzausgelöste Stornierung“ ausgeführt bzw. eine netzausgelöste Änderung der
gebuchten Trasse angekündigt.
Bei einer vollständigen (netzausgelösten) Stornierung entsprechen die in der Struktur „AffectedSection“ anzugebenden Angaben zu Start- und Zielbahnhof sowie zur Verkehrszeitregelung den Angaben zu diesen Attributen in der Struktur
„PathInformation“ des jeweils referenzierten Paths, d. h. dem jeweils aktuellen letzten Vertragsstand zu dieser Trasse.
Durch Angabe einer Teilmenge der aktuellen Verkehrstage der gebuchten Trasse in der Struktur „PlannedCalendar“ kann eine Stornierung der Trasse an einem oder mehreren Verkehrstagen erfolgen. Durch die Auswahl der zutreffenden
Trassenlaufpunkte als Start- und Zielbahnhof (StartOfSection, EndOfSection) kann der zu stornierende Abschnitt der Zugtrasse eingeschränkt und eine teilweise Stornierung der Trasse ausgeführt werden. Durch eine teilweise Stornierung
darf keine Lücke im Trassenverlauf an den genannten Verkehrstagen entstehen.
Die Verwendung mehrerer „AffectedSection“ ist nicht gestattet. Die DB InfraGO AG wird einen ChangeRequest einbringen, dass dies zum europäischen Standard wird.
Die Unterstruktur „LocationSubsidiaryIdentification“ wird hier generell nicht genutzt.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 81

## Seite 82

Abbildung 29 AffectedSection Struktur
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 82

## Seite 83

3.12.2 Datenfelder der Struktur „AffectedSection“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Ausprä- Muster Relevant
kom- Wert Wert gungen
men
I....AffectedSection AffectedSection Indikation für den Empfänger, dass nicht der gesamte z.B. bei teilweiser Stornierung. 0..N
Path (Zuglaufpunkte von/bis und/oder Verkehrstage)
betroffen ist
I....I....StartOfSection AffectedSection StartOfSection Erste Betriebsstelle (Startpunkt) des betroffenen Ab- 1 M
schnitts des Zuglaufs bzw. der Zugtrasse
I....I....I....CountryCodeISO StartOfSection CountryCodeISO CountryCode des LocationPrimaryCodes Ist nur in Verbindung mit dem <LocationPrima- 1 string 2 Stammdaten M
ryCode> eindeutig. Kapitel 4.3
I....I....I....LocationPrimaryCode StartOfSection LocationPrimaryCode LocationPrimaryCode Eindeutige EU-weite Identifikation einer Be- 1 positive 5 1 99999 Stammdaten M
triebsstelle. integer Kapitel 4.3
Wird von jedem Land selbständig vergeben.
Ist nur in Verbindung mit dem <CountryCode-
ISO> eindeutig.
Geplante Betriebsstellen haben immer die Co-
dierung 99999
I....I....I....PrimaryLocationName StartOfSection PrimaryLocationName Name des ZLP/TLP Muss bei in Planung befindlichen Betriebsstel- 0..1 string 255 bM
len, für die noch kein PLC vergeben wurde, im-
mer gefüllt sein.
I....I....I....LocationSubsidiaryIdentification StartOfSection LocationSubsidiaryIdentifica- LocationSubsidiary Identifikation Die LocationSubsidiary Identifikation wird in 0..1 K
tion dieser Struktur nicht genutzt
I....I....I....I....LocationSubsidiaryCode LocationSubsidiaryIdentification LocationSubsidiaryCode 1 string 10 K
I....I....I....I....I....LocationSubsidiaryTypeCode LocationSubsidiaryCode LocationSubsidiaryTypeCode 1 K
I....I....I....I....AllocationCompany LocationSubsidiaryIdentification AllocationCompany Siehe Kapitel 3.16"Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4} K
I....I....I....I....LocationSubsidiaryName LocationSubsidiaryIdentification LocationSubsidiaryName 0..1 string 255 K
I....I....I....BookedLocationDateTime StartOfSection BookedLocationDateTime Angabe der Abfahrt-/Durchfahrtszeit mit Tagesdatum Angabe wird nur in betrieblichen Meldungen 0..1 dateTime n/a
der betrieblichen Phase bei Nutzung von Tages-
objekten der Zugtrasse verwendet.
I....I....I....BookedLocationTime StartOfSection BookedLocationTime Angabe der Abfahrt-/Durchfahrtszeit Angabe wird nur in Meldung des Planungspro- 0..1 Time bM
zesses mit Bezug auf eine Zugtrasse verwendet.
Die Angabe ist immer dann zu befüllen, wenn
der als StartOfSection ausgewählte TLP in der
referenzierten Zugtrasse mehrfach vorkommt.
I....I....EndOfSection AffectedSection EndOfSection Letzte Betriebsstelle (Endpunkt) des betroffenen Ab- 1 M
schnitts des Zuglaufs bzw. der Zugtrasse
I....I....I....CountryCodeISO EndOfSection CountryCodeISO CountryCode des LocationPrimaryCodes Ist nur in Verbindung mit dem <LocationPrima- 1 string 2 Stammdaten M
ryCode> eindeutig. Kapitel 4.3
I....I....I....LocationPrimaryCode EndOfSection LocationPrimaryCode LocationPrimaryCode Eindeutige EU-weite Identifikation einer Be- 1 positive 5 1 99999 Siehe Stamm- M
triebsstelle. integer daten Kapitel
4.3
Wird von jedem Land selbständig vergeben.
Geplante Betriebsstellen haben immer die Co-
dierung 99999
I....I....I....PrimaryLocationName EndOfSection PrimaryLocationName Name des LocationPrimaryCode Muss bei in Planung befindlichen Betriebsstel- 0..1 string 255 bM
len, für die noch kein PLC vergeben wurde, im-
mer gefüllt sein.
I....I....I....LocationSubsidiaryIdentification EndOfSection LocationSubsidiaryIdentifica- LocationSubsidiary Identifikation Die LocationSubsidiary Identifikation wird in 0..1 K
tion dieser Struktur nicht genutzt
I....I....I....I....LocationSubsidiaryCode LocationSubsidiaryIdentification LocationSubsidiaryCode 1 string 10 K
I....I....I....I....I....LocationSubsidiaryTypeCode LocationSubsidiaryCode LocationSubsidiaryTypeCode 1 K
I....I....I....I....AllocationCompany LocationSubsidiaryIdentification AllocationCompany Siehe Kapitel 3.16 "Codelisten" 1 string 4 0001 ZZZZ [0-9A-Z]{4} K
I....I....I....I....LocationSubsidiaryName LocationSubsidiaryIdentification LocationSubsidiaryName 0..1 string 255 K
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 83

## Seite 84

Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Ausprä- Muster Relevant
kom- Wert Wert gungen
men
I....I....I....BookedLocationDateTime EndOfSection BookedLocationDateTime Angabe der Ankunfts-/Durchfahrtszeit mit Tagesda- Angabe wird nur in betrieblichen Meldungen 0..1 dateTime n/a
tum der betrieblichen Phase bei Nutzung von Tages-
objekten der Zugtrasse verwendet.
I....I....I....BookedLocationTime EndOfSection BookedLocationTime Angabe der Ankunfts-/Durchfahrtszeit Angabe wird nur in Meldung des Planungspro- 0..1 time bM
zesses mit Bezug auf eine Zugtrasse verwendet.
Die Angabe ist immer dann zu befüllen, wenn
der als EndOfSection ausgewählte TLP in der
Zugtrasse mehrfach vorkommt.
I....I....OperationalTrainNumberIdentifier AffectedSection OperationalTrainNumberIden- Struktur dient u. a. der Übermittlung der OTN, 1 M
tifier die bei der Übergabe von der vorhergehenden
oder nachfolgenden Infrastruktur verwendet
wird.
I....I....I....OperationalTrainNumber OperationalTrainNumberIdentifier OperationalTrainNumber Betroffene Zugnummer Es wird die für den durch StartOfSection und 0..1 string 6 [0-9]{1,6} bM
EndOfSection definierten Abschnitt geltende
OTN angegeben. In der ReceiptConfirmation-
Message wird die in der referenzierten Nach-
richt angegebene OTN wiederholt.
I....I....I....ScheduledTimeAtHandover OperationalTrainNumberIdentifier ScheduledTimeAtHandover Geplante Abfahrtszeit bei Ausbruch aus dem Netz Angabe der geplanten Abfahrtszeit an der in 0..1 dateTime n/a
der Struktur EndOdSection angegebenen Be-
triebsstelle, sofern diese ein Handover-Point ist,
d. h. die Betriebsstelle ist ein Übergabepunkt
zur nachfolgenden Nachbar-Infrastruktur.
I....I....I....ScheduledDateTimeAtTransfer OperationalTrainNumberIdentifier ScheduledDateTimeAtTrans- Geplante Ankunftszeit bei Einbruch in das Netz Angabe der geplanten Ankunftszeit an der in 0..1 dateTime n/a
fer der Struktur StartSection angegebenen Be-
triebsstelle, sofern diese ein Handover-Point ist,
d. h. die Betriebsstelle ist ein Übernahmepunkt
zur vorhergehenden Nachbar-Infrastruktur.
I....I....PlannedCalendar AffectedSection PlannedCalendar Verkehrstageregelung bzw. betroffene Verkehrstage 1 M
I....I....I....BitmapDays PlannedCalendar BitmapDays Bitleiste der betroffenen Verkehrstage Die Struktur muss angegeben werden, wenn 0..1 string 740 [0-1]{1,740} M
die ValidityPeriod mehr als einen Tag umfasst.
I....I....I....ValidityPeriod PlannedCalendar ValidityPeriod Betroffener Zeitabschnitt 1 M
I....I....I....I....StartDateTime ValidityPeriod StartDateTime Erster Verkehrstag des betroffenen Zeitabschnitts 1 dateTime M
I....I....I....I....EndDateTime ValidityPeriod EndDateTime Letzter Verkehrstag des betroffenen Zeitabschnitts 0..1 dateTime M
I....I....I....OffsetToReference PlannedCalendar OffsetToReference Angabe der Anzahl der Verschiebungstage zwischen Der ReferenceCalendar (bzw. der Refe- 0..1 integer -1 M
dem PlannedCalendar und dem ReferenceCalendar renceTrainIDSubCalendar als eine Teilmenge
bzw. dem ReferenceTrainIDSubCalendar des Refe- davon) enthält die geplanten Verkehrstage der
renceTrains durch den ReferenceTrain repräsentierten Ver-
kehrsdienstleistung. Die Kalender der tatsächli-
chen Züge, deren Routen, PathRequests und
Trassen sind i. d. R. identisch und repräsentie-
ren innerhalb des jeweiligen Geltungszeitrau-
mes die gleichen Verkehrstage. Der OffsetToRe-
ference hat in diesem Fall den Wert „0“.
In ausgewählten Situationen kann es jedoch zu
einer Verschiebung der tatsächlichen Züge bzw.
deren Routen, PathRequests oder Trassen auf
den Vortag oder einen Folgetag kommen. Diese
Verschiebung wird durch OffsetToReference = -
1 bei Verschiebung auf den Vortag oder durch
OffsetToReference >= 1 bei Verschiebung auf
einen Folgetag ausgedrückt.
Der Defaultwert ist „0“.
I....I....NetworkSpecificParameter AffectedSection NetworkSpecificParameter Spezifische Parameter eines EIU siehe Kapitel 3.14.7 0..N K
I....I....I....Name NetworkSpecificParameter Name Generischer Name des Parameters 1 string 255 M
I....I....I....Value NetworkSpecificParameter Value Wert des Parameters 1 string 255 M
Tabelle 24 AffectedSection Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 84

## Seite 85

3.13 InterruptionInformation
3.13.1 Übersicht über die Unterstruktur „InterruptionInformation“
Diese Struktur ist nur in der Nachricht „PathNotAvailableMessage“ für den Geschäftsvorfall „netzausgelöste Stornierung“ anwendbar. Die Struktur dokumentiert zusätzliche Informationen bei Nichtverfügbarkeit einer Zugtrasse.
Abbildung 30 InterruptionInformation Struktur
3.13.2 Datenfelder der Unterstruktur „InterruptionInformation“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Ausprä- Muster Relevant
kom- Wert Wert gungen
men
I....InterruptionInformation InterruptionInformation Ergänzende Informationen für die netzausgelöste 1 M
Stornierung
I....I....InterruptionDescription InterruptionInformation InterruptionDescription Freitext zur Begründung der netzausgelösten Stornie- Begründung für die netzausgelöste Stornierung 0..1 string 255 M
rung bzw. Auslegung
I....I....InterruptionDateTime InterruptionInformation InterruptionDateTime Tag und Uhrzeit, wann die Zugtrasse unterbrochen ist Wird in der Planungsphase beim Senden der 0..1 dateTime n/a
„PathNotAvailableMessage“ nicht genutzt
I....I....InterruptionReason InterruptionInformation InterruptionReason Grund für die Unterbrechung Strukturierte Begründungen 0..1 token Gemäß UIC- n/a
Merkblatt 450-
2 Anhang C
I....I....InternalReferenceIdentifier InterruptionInformation InternalReferenceIdentifier EIU-interne Referenz Wird aktuell nicht genutzt 0..1 string 255 n/a
Tabelle 25 InterruptionInformation Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 85

## Seite 86

3.14 NetworkSpecificParameter
3.14.1 Übersicht über die Struktur „NetworkSpecificParameter“
Diese Struktur wird für spezifische Attribute im Zuständigkeitsbereich eines EIU genutzt, die nicht in der Menge der Standard-Attribute von TAF-TSI/TAP-TSI enthalten sind.
Diese EIU-spezifischen nationalen Parameter können vom jeweiligen EIU festgelegt bzw. definiert werden und sind in den Nachrichten zur Abwicklung der Geschäftsvorfälle im Zuständigkeitsbereich des entsprechenden EIU zu nutzen.
Sofern NetworkSpecificParameter mit identischem fachlichem Inhalt von mehreren EIU definiert werden, kann als Ergebnis internationaler Abstimmungen eine Umwandlung bestehender NetworkSpecificParameter in ein Standardattribut
bzw. eine Standardstruktur oder eine Aufnahme der fachlichen Information als neue Kodierung in eine bestehende Kodierungsliste eines Attributs erfolgen. Daraus resultieren Änderungen der xsd und/oder der Kodierungslisten sowie ggf.
der Wegfall eines oder mehrerer NetworkSpecificParameter, welche wiederum zu einer neuen Version dieser Dokumentation führen, die zum gegebenen Zeitpunkt bekanntgegeben wird.
Die Struktur „NetworkSpecificParameter“ ist eine generische Struktur, die selbst eine Wiederholstruktur ist und nur aus den beiden folgenden Attributen besteht:
 Name: Name des Parameters
 Value: Wert des Parameters
Abbildung 31 NetworkSpecificParameter Struktur
3.14.2 Datenfelder der Struktur „NetworkSpecificParameter“
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
I....NetworkSpecificParameter NetworkSpecificParameter Spezifische Parameter (Attribute, Felder) des EIU 0..N
I....I....Name NetworkSpecificParameter Name Name des Parameters 1 string 255
I....I....Value NetworkSpecificParameter Value Wert des Parameters 1 string 255
Tabelle 26 NetworkSpecificParameter Datenfelder
Die NetworkSpecificParameter-Struktur enthält also jeweils ein Name/Wert-Paar, dessen Attribute jeweils als String mit der Länge 255 Zeichen definiert sind.
3.14.3 Vorgehensweise bei der Nutzung nationaler Parameter
 Der sendende Partner muss anhand der Vorgaben der Kapitel 3.14.5 und 3.14.6 in der zu sendenden XML-Struktur der Nachricht für jeden erforderlichen bzw. gewünschten nationalen Parameter eine „NetworkSpecificParame-
ter“-Struktur erzeugen. Da es sich bei den in der nachfolgenden genannten NetworkSpecificParametern ausschließlich um Angaben handelt, die für Trassenbestellungen bei der DB InfraGO zutreffend sind, dürfen diese Parameter
auch nur im Nachrichtenausrausch mit der DB InfraGO verwendet werden.
 Die „NetworkSpecificParameter“-Struktur existiert auf drei verschiedenen Ebenen:
o Auf Message-Ebene (siehe Kapitel 3.14.5): kann in der PathRequestMessage oder PathDetailsMessage angegeben werden.
o Auf Location-Ebene (ZLP-/TLP-Ebene) (siehe Kapitel 3.14.6): kann für jeden Zuglaufpunkt bzw. Trassenlaufpunkt in der Struktur PathInformation angegeben werden.
o In der Struktur „AffectedSection“ (siehe Kapitel 3.14.7): gilt nur für bestimmte Nachrichten/Geschäftsvorfälle
 Das Attribut „Name“ enthält dabei den jeweiligen Namen des betreffenden nationalen Parameters (Spalte „Attribut“ in den drei folgenden Kapiteln).
Dabei ist unbedingt auf eine identische Schreibweise zu achten, da ansonsten der Empfänger den Parameter nicht identifizieren kann und die Nachricht zurückgewiesen werden muss.
 Das Attribut „Value“ enthält einen gültigen Wert laut den Beschreibungen in den Spalten Vorkommen (Muss-/Kann-Feld, Wiederholbarkeit), Typ, Länge, MinWert, MaxWert, Muster in den nachfolgenden Kapiteln.
 Ist für den Wert eine numerische Verschlüsselung zu nutzen, wird dies in der Spalte „Ausprägungen“ ausgewiesen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 86

## Seite 87

3.14.4 Befüllung der Struktur
 Für jeden erforderlichen oder gewünschten Parameter ist jeweils eine neue Struktur „NetworkSpecificParameter“ erforderlich.
Das Format der Spalten „name“ und „value“ ist immer „string“ mit der angegebenen Länge.
 In den Kapiteln 3.14.5, 3.14.6 und 3.14.7 wird beschrieben, welchen Wert der jeweilige Parameter haben darf. Der gewünschte Wert muss in das Attribut „value“ übertragen werden.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 87

## Seite 88

3.14.5 Attribute der Struktur „NetworkSpecificParameter“ auf Message-Ebene
Erfolgt eine Angabe eines der NSP der nachfolgenden Tabelle, so gilt sie für die gesamte Nachricht, d. h. für die gesamte Fahrlage oder Trasse.
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägun- EVU EIU ➔
kom- Wert gen ➔ EIU EVU
men
marktProdukt Produkt, welches von DB InfraGO angeboten wird 1. In diesem Feld ist eines der über das Bestellsystem bestellbaren Produkte der DB In- 1 string 3 TRA = Trasse M M
fraGO anzugeben. Produkte sind aktuell: TRA (Trasse), KFB (kurzfristige Fahrlagenbera-
RVK = Rahmen-
tung mit Buchungsoption), FZB (Fahrzeitberechnung), FPS (Fahrplanstudie/Betriebspro-
vertragskapazität
grammstudie)
FZB = Fahrzeitbe-
2. Das Feld ist unter Berücksichtigung der für die Produkte möglichen Geschäftsvorfälle
rechnung
zu verwenden (siehe Kapitel 2.1 "Geschäftsvorfälle und TAF-TSI/TAP-TSI- Nachrichtenty-
pen") FPS = Fahrplan-
und Betriebspro-
grammstudie
KFB = Kurzfristige
Fahrlagenbera-
tung mit Bu-
chungsoption
trassenpreis Trassenpreis in Euro [€] 1. Das Feld enthält den Gesamtpreis der Trasse in Euro. 0..1 string 15 [ ]*[0-9]+.[0-9][0- n/a bM
9]
2. Der Preis wird mit zwei Nachkommastellen geliefert.
3. Wird nicht bei den Geschäftsvorfällen Zurückweisung, Nichtkonstruierbarkeit und bei
Ergebnissen der Produkte FZB und FPS geliefert.
4. Wird bei einer Stornierung (PDM mit MS = 3 (Deletion)) nicht geliefert
linkLeistungsbeschreibung URL-Link, der zur Darstellung der Zusammensetzung des Trassen- 1. Wird nur bei Lieferung des Attributs „trassenpreis“ geliefert 0..2 string 255 n/a bM
preises führt
2. Der erste Link verweist auf ein pdf-Dokument
3. Der zweite Link verweist auf ein csv-Dokument
4. Wird bei einer Stornierung (PDM mit MS = 3 (Deletion)) nicht geliefert
betroffenheitBau Betroffenheit durch Baumaßnahme Kennzeichnung des Trassenangebots durch DB InfraGO, wenn baubedingt eine verän- 0..1 string Gemäß n/a M
derte Trassierung erfolgte. Default-Wert: False. xs:booelan:
0, false (=falsch)
1, true (=wahr)
kzLaermschutz Kennzeichnung des Zuges im Bereich der BR Deutschland gemäß Entsprechend dem Gesetz zum Verbot des Betriebs lauter Güterwagen (Schienenlärm- 1 string 1 1 - Leiser Zug; M M
Schienenlärmschutzgesetz schutzgesetz - SchLärmschG) ist das EVU innerhalb der BR Deutschland verpflichtet, Gü-
2 - lauter Zug;
terzüge mit lauten Güterwagen zu kennzeichnen. Die Angabe gilt für den gesamten Zug-
lauf innerhalb der BRD und ist in allen Trassenanmeldungen verpflichtend anzugeben,
wobei Reisezüge und Tfz-Fahrten dem Grunde nach als „Leiser Zug“ einzustufen sind. Er-
gänzend sind die in den SNB genannten besonderen Bestimmungen zu beachten.
kzSicherheit Kennzeichnung des Zuges im Bereich der BR Deutschland gemäß Gem. § 62 Abs (2) BPolG ist das EVU zur Information über sicherheitsrelevante Züge (z. B. 0..1 string 5 Gemäß K K
BPolG Reisesonderzüge zu Großereignissen, Militär- und Castortransporte) verpflichtet, zu de- xs:booelan:
nen DB InfraGO Daten für die zuständigen Sicherheitsbehörden bereitstellen muss. Das
0, false (=falsch)
EVU nimmt in diesem Element nur eine Kennzeichnung vor. Weitere ergänzende Anga-
1, true (=wahr)
ben sind in der Trassenbestellung nicht erforderlich, sondern werden vom EVU direkt der
zuständigen Sicherheitsbehörde zur Verfügung gestellt.
baukorridor Baukorridor In dem Feld „value“ des NSP können gemäß dem vorgegebenen Muster als unverbindli- 0..5 string 9 <Nr,Art>; K K
che Bauinformation die Nummer des Baukorridors (Nr) und die Art der Auswirkung des
Nr = max. 7 Zei-
Baukorridors (Art) angegeben werden, sofern die Trassierung durch einen Baukorridor
chen, alphanum-
beeinflusst wird. Die vorgegebene Struktur ist immer mit beiden Angaben vollständig zu
merisch; Art = 1
befüllen. Die beiden Werte sind durch „,“ zu trennen.
Zeichen
Für die Beschreibung der Art der Bauauswirkung ist einer der folgenden Werte auszu-
wählen: A = Abweichungen vom Laufweg oder B = Beibehaltung des Laufwegs.
Es ist die Angabe von max. 5 Baukorridoren zulässig.
PreisInformationen Die nachfolgenden 6 NSP sind abrechnungsrelevante Informationen
oedlaKennzeichen ÖDLA-Kennzeichen Kennzeichnung von Verkehren, die auf Grundlage eines öffentlichen Dienstleistungsauf- 0..1 string 5 Gemäß bM bM
trages (ÖDLA) bestellt werden, durch das bestellende EVU, Angabe nur bei xs:booelan:
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 88

## Seite 89

Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägun- EVU EIU ➔
kom- Wert gen ➔ EIU EVU
men
verkehrsArtKunde = SPNV; Default-Wert: False. 0, false (=falsch)
1, true (=wahr)
rabattNr Von DB InfraGO vergebene Rabattprogramm-Nummer zur Inan- Rabattprogrammnummern, wie etwa die Neuverkehrsrabattnummer sind vorab durch 0..5 string 32 K K
spruchnahme eines Rabatts den Kunden beim Vertrieb der DB InfraGO zu beantragen. Die Angabe der Rabattnum-
mer erfolgt auf Messageebene und ist in der Trassenerstanmeldung sowie ggf. in den
Folgeaufträgen Änderung vor Angebotsabgabe oder Änderung nach Vertragsabschluss zu
wiederholen, sofern die Rabattzuordnung weiterhin zutreffend ist.
verkehrsArtKunde Angabe der Verkehrsartbezeichnung des Kunden Angabe der durch den Kunden gewählten Verkehrsart. Ist Berechnungsgrundlage für den 1 string 4 [A-Z] SPFV = Schienen- M M
Trassenpreis Personen-Fern-
verkehr
SPNV = Schie-
nen-Personen-
Nahverkehr
SGV = Schienen-
Güterverkehr
verkehrsArtKundeZusatz Zusätzliche Angaben zur Verkehrsartbezeichnung des Kunden Ergänzende Informationen des Kunden zur Ausprägung des Verkehrs (z.B. Nostalgiever- 0..1 string 40 Siehe Stammda- bM bM
kehr, Charterverkehr). Ist neben der bestellten Verkehrsart-Kunde eine weitere Berech- ten Kapitel 4.3.6
nungsgrundlage für den Trassenpreis.
Für die Art = Nostalgiezug kann auch der TrafficType-Code 16 genutzt werden. Die Aus-
prägung „Punkt-zu-Punkt“ darf nur in Verbindung mit der Ausprägung „ZF 30“ im Attribut
„flexibilitaet“ angegeben werden.
NSP könnte ggf. zukünftig noch entfallen, falls eine Erweiterung der Kodierungen für
TrainType bzw. TrafficType erfolgt. In PCS aktuell als Code 3375 vorhanden.
flexibilitaet Zeitliche und räumliche Flexibilität Optionale Auswahl einer gewünschten zeitlichen und/oder räumlichen Flexibilität bei der 0..1 string 6 [A-Z0-9\s]{1,6} Siehe Stammda- K K
Konstruktion durch das bestellende EVU. Gilt nur für die Verkehrsart SGV und nur für ten Kapitel 4.3.7
Trassenanmeldungen zum Netzfahrplan. Gilt nicht für Tfz-Fahrten. Die Auswahl der
räumlichen Flexibilität beinhaltet auch die zeitliche Flexibilität +/- 120 min. Erfolgt keine
Angabe gelten die Konstruktionsspielräume gemäß SNB.
Bei Auswahl räumliche Flexibilität RF 120 dürfen innerhalb des Zuglaufs auf dem Netz der
DB InfraGO AG keine Zwischenbetriebsstellen angegeben werden. Ausnahmen wegen
Lenkzeiten, Personalwechsel und Übergängen auf fremde Infrastruktur siehe SNB.
Die Ausprägung „ZF 30“ darf nur in Verbindung mit der Ausprägung „Punkt-zu-Punkt“ im
Attribut „verkehrsArtKundeZusatz“ angegeben werden. In PCS aktuell als Code 3373 vor-
handen.
betrieblichePrio Betriebliche Priorisierung Optionale Angabe in Trassenbestellungen der Verkehrsarten SGV und SPFV, außer für 0..1 string 15 SehrhohePrio K K
Tfz- und Leerfahrten. Die Angabe kann in der PathRequestMessage erfolgen, wenn die
hohePrio
zutreffende Zuggattung, z. B. für Expresstrassen (sehrhohePrio – nur für SGV und SPFV)
bzw. Schnelltrassen (hohePrio - nur für SGV), mindestens einmal im Zuglauf innerhalb
des Netzes der DB InfraGO angegeben wurde.
Erfolgt keine Angabe: Kein expliziter Priorisierungsanspruch.
Objektbezeichnungen des Kunden Die nachfolgenden 3 NSP werden ausschließlich als zusätzliche Angabe im Kundenfront-
end des Bestellportals genutzt und angezeigt und können in Nachrichten des EVU zusätz-
lich angegeben werden. Sofern einer der NSP in einer Nachricht vom EVU an DB InfraGO
vorhanden ist, wird die Angabe in der Antwortnachricht von DB InfraGO an das EVU un-
verändert zurückgegeben. Sie Angaben haben keine fachliche Relevanz und werden von
DB InfraGO generell nicht verwendet.
bPBezeichnungRequest Textliche Bezeichnung für ein PathRequest-Objekt, die im DB In- Freitexteingabe zur sprechenden Bezeichnung eines PathRequest-Objekts in der GUI des 0..1 string 32 K K
fraGO Bestellportal genutzt werden kann DB InfraGO Bestellportals.
bPBezeichnungRefe- Textliche Bezeichnung für den ReferenceTrain, die im DB InfraGO Freitexteingabe zur sprechenden Bezeichnung eines ReferenceTrains in der GUI des DB 0..1 string 32 K K
renceTrain Bestellportal genutzt werden kann InfraGO Bestellportals.
bPBezeichnungRoute Textliche Bezeichnung für ein Route-Objekt, die im DB InfraGO Be- Freitexteingabe zur sprechenden Bezeichnung eines Route-Objekts in der GUI des DB In- 0..1 string 32 K K
stellportal genutzt werden kann fraGO Bestellportals.
zugKzGo Zugkennzeichen GO Kennzeichnung eines Güterzugs ohne nennenswerten Grenzaufenthalt 0..1 string 2 GO K K
zeitrahmen Zeitrahmen einer RV-Kapazität Gibt den Zeitrahmen einer RV-Kapazität an und darf nur für das Marktprodukt „RVK“ ge- 0..1 string 3 3 720 [0-9]{1-3} bM bM
nutzt werden. Der Zeitrahmen entspricht der vertraglich vereinbarten symmetrischen
Bandbreite der reservierten Kapazität. Die Angabe erfolgt in Anzahl Minuten, jeweils +/-
in Relation zur gedachten mittigen Ideallinie einer Trasse. Maximal zulässiger Wert 720
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 89

## Seite 90

Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägun- EVU EIU ➔
kom- Wert gen ➔ EIU EVU
men
min.; minimale Werte: S-Bahn (auf reinen S-Bahn-Strecken) 3 min; Personenverkehr 5
min; Güterverkehr 30 min.
Tabelle 27 NetworkSpecificParameter Message-Ebene Datenfelder
3.14.6 Attribute der Struktur „NetworkSpecificParameter“ auf Location-Ebene
Erfolgt eine Angabe eines der NSP der nachfolgenden Tabelle, so gilt sie an dem betreffenden ZLP bzw. TLP oder ab diesem auf dem nachfolgenden Abschnitt so lange bis der gleiche NSP, ggf. mit einem abweichenden Wert, erneut
angegeben wird. Die Gültigkeit des jeweiligen NSP und ggf. zu beachtende Regeln sind der nachfolgenden Tabelle 28 zu entnehmen. Für NSP, bei denen die Begrenzung des räumlichen Geltungsbereichs durch Wiederholung des NSP mit
Angabe eines definierten Wertes erfolgt, kann diese Ende-Kennzeichnung entfallen, wenn es den letzten ZLP/TLP betrifft.
Die Spalte „Path in PR“ bedeutet:
Gilt für die Struktur „PathInformation“ der Nachricht „PathRequestMessage“.
Die Spalte „Path in PD“ bedeutet: Gilt für die Struktur „PathInformation“ der Nachricht „PathDetailsMessage“.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 90

## Seite 91

Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägungen Path in Path in
kom- Wert PR PD
men
zugKzAk Zugkennzeichen für Automatische Kupplung Zug verkehrt mit automatischer Kupplung. Wurde der NSP mit dem 0..1 string AK = Automatische Kupplung vorhanden K K
Wert „AK“ verwendet und soll diese Angabe widerrufen werden,
NK = Keine automatische Kupplung (mehr)
weil sie nicht mehr gilt, so ist (nur in diesem Fall) der NSP mit der
vorhanden
Ausprägung „NK“ anzugeben.
Die Angabe „AK“ gilt somit, sofern sie angegeben wird, ab dem be-
treffende ZLP/TLP bis zum Widerruf durch erneute Angabe des NSP
mit der Ausprägung „NK“.
zuggattung Zuggattungsangaben Die nachfolgenden 3 Attribute beschreiben die Zuggattung. Es müs- 0..1
sen zwingend immer alle 3 Attribute angegeben werden. Die An-
gabe muss immer am ersten ZLP/TLP einer Fahrlage/Trasse erfol-
gen und gilt bis zum nächsten ZLP/TLP, an welchem eine erneute
Angabe erfolgt, oder bis zum letzten ZLP/TLP.
zggHauptnummer Hauptnummer der Zuggattung 1 string 2 Zuggattungen der DB InfraGO gemäß Zug- M M
gattungsverzeichnis Ril 402.0208A01; siehe
Stammdaten Kapitel 4.3.4
zggUnternummer Unternummer der Zuggattung 1 string 1 Zuggattungen der DB InfraGO gemäß Zug- M M
gattungsverzeichnis Ril 402.0208A01; siehe
Stammdaten Kapitel 4.3.4
zggKurzbez Kurzbezeichnung zur Zuggattung. Bei diesem Feld handelt es sich um die zur Zuggattung gehörende 1 string 10 Zuggattungen der DB InfraGO gemäß Zug- M M
Zuggattungsproduktbezeichnung. gattungsverzeichnis Ril 402.0208A01; siehe
Stammdaten Kapitel 4.3.4
In PCS aktuell als Code 3377 vorhanden.
richtungswechselGrund Begründung des Richtungswechsels Ergänzende Angabe einer Begründung bei Richtungswechsel; kann 0..1 string 255 K K
in Verbindung mit der Nutzung der TrainActivityCodes 0005 bis
0007 für erforderliche Richtungswechsel angegeben werden.
Die Angabe gilt lokal am ZLP/TLP.
ueberhoehungsfehlbetrag Angaben zum Überhöhungsfehlbetrag (erhöhte Seitenbeschleuni- Angabe, ob die Fahrzeuge des Zuges für den Überhöhungsfehlbe- 0..1 string 1 0 = Fahrzeuge des Zuges für Überhöhungs- K K
gung) trag uF > 130 mm zugelassen sind oder nicht. fehlbetrag uF > 130 mm nicht zugelassen
1 = Fahrzeuge des Zuges für Überhöhungs-
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
fehlbetrag uF > 130 mm zugelassen
NSP.
streckenAngabe Streckenangabe bestehend aus Streckennummer im Konstruktions- Die Angabe des genutzten Streckengleises erfolgt getrennt durch 0..1 string 6 [0-9]{4}-[0-2] Siehe Stammdaten Kapitel 4.3.2; n/a K
bereich der DB InfraGO (VzG) bis zum nächsten ZLP und Bezeich- einen Bindestrich am Ende. Die Streckengleisangabe hat folgende
z. B. 6311-1
nung des genutzten Streckengleises Bedeutung:
0 – eingleisige Strecke
1 – Nutzung des rechten Gleises der Strecke in Streckendefinitions-
richtung (aufsteigende Kilometrierung)
2 - Nutzung des rechten Gleises der Strecke entgegen Streckendefi-
nitionsrichtung (fallende Kilometrierung)
Die Angabe gilt ab dem ZLP/TLP für den nachfolgenden Streckenab-
schnitt bis zum nächsten ZLP/TLP.
haltabwText sonstige Gründe für Kundenhalte Dieses Feld darf gefüllt werden, wenn das Attribut <TrainActivity- 0..1 string 40 bM bM
Code> mit dem Code 0009, 0020 oder 0027 gefüllt ist.
Die Angabe gilt lokal für den ZLP/TLP.
gleisNummer Vorgabe einer Gleisnummer oder Gleisgruppe 1. Für Gleisgruppe Einfahrt/ Ausfahrt, wenn nicht durch die An- 0..1 string 10 K K
gabe einer eigenständigen Betriebsstelle beschreibbar
2. Das Feld bezieht sich bei Abgangsbahnhöfen, bei Halten an ei-
nem Unterwegsbahnhof bzw. bei einer Durchfahrt auf das Ab-
fahrtsgleis und bei Ankunftsbahnhöfen auf das Ankunftsgleis.
3. Angabe ist unverbindlich und nur bei Geschäftsvorfällen des
Produktes „Trasse“ zulässig
4. Das Attribut kann genutzt werden, solange DB InfraGO keine
SubsidiaryLocationCodes für Gleise definiert hat.
Die Angabe gilt lokal für den ZLP/TLP.
traktionDampf Art der Befeuerung bei der Traktionsart Dampflok Wenn die Traktionsart laut den technischen Daten "Dampflok" ist, 0..1 string 1 [R,O] R = Rost bM bM
ist dieses Feld zusammen mit den Feldern <fahrtrichtDampf> und
O = Öl
<hgRueckDampf> zu füllen. Die Angabe gilt ab dem ZLP/TLP bis zur
nächsten Angabe dieses NSP.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 91

## Seite 92

Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägungen Path in Path in
kom- Wert PR PD
men
fahrtrichtDampf Fahrtrichtung des Tfz bei der Traktionsart Dampflok Wenn die Traktionsart laut den technischen Daten Dampflok ist, ist 0..1 string 1 K = Kessel voraus bM bM
dieses Feld zusammen mit den Feldern
T = Tender voraus
<traktionDampf> und <hgRueckDampf> zu füllen.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
NSP.
hgRueckDampf Höchstgeschwindigkeit der rückwärtsfahrenden Dampflok in Kilo- Wenn die Traktionsart laut den technischen Daten Dampflok ist, ist 0..1 string 3 1 999 bM bM
meter pro Stunde [km/h] dieses Feld zusammen mit den Feldern <traktionDampf> und
<fahrtrichtDampf> zu füllen.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
NSP.
richtungDesZugesBeiAb- Richtung des Zuges (Zugstellung) bei der Abfahrt Vom EVU gewünschte Richtung des Zuges bei der Abfahrt eines Zu- 0..1 string 15 K K
fahrt ges in dem ZLP, zu welchem die Angabe erfolgt; Richtungsangabe
z.B.: PLC, RiL100-Code (RWE–FD), Ausf. Dr.-Neust.
Die Angabe gilt lokal für den ZLP/TLP.
richtungDesZugesBei- Richtung des Zuges (Zugstellung) bei der Ankunft Vom EVU gewünschte Richtung des Zuges bei der Ankunft eines Zu- 0..1 string 15 K K
Ankunft ges in dem ZLP, zu welchem die Angabe erfolgt; Richtungsangabe
z.B.: PLC, RiL100-Code (RWE–FD), Ausf. Dr.-Neust.
Die Angabe gilt lokal für den ZLP/TLP.
abstellung Abstellung Angabe der ID des CaseReferenceObjektes, welches detaillierte An- 0..1 string 24 CRID K K
gaben zur gewünschten Abstellung in diesem Zuglaufpunkt enthält
(siehe Kapitel 3.15.2). Nur Angabe bei Geschäftsvorfällen des Pro-
duktes „Trasse“.
Die Angabe gilt lokal für den ZLP/TLP.
bahnsteiglaengeNichtAus- Bahnsteiglänge ist nicht ausreichend Standardmäßig ist dieses Feld mit "false" gefüllt. 0..1 string Gemäß xs:booelan: n/a K
reich
Die Angabe gilt lokal für den ZLP/TLP. 0, false (=falsch)
1, true (=wahr)
entfernungZumNaechs- Betriebsentfernung bis zum nächsten TLP in Metern [m] Vergabe durch DB InfraGO; nur für die durch DB InfraGO konstru- 1 string 8 [Telefonnummer entfernt] n/a M
tenTlp ierte Zugtrasse zur Berechnung der Trassenkilometer
veroeffentlichungsArt Art der Veröffentlichung Angabe der Art der Veröffentlichung von Fahrplandokumenten. Sie 0..1 string 25 elektronisch = Zug fährt mit elektronischer n/a M
ist abhängig von dem angegebenen Code im Element „TrainCC_Sys- Führerraumanzeige
tem. Ist der Code „EFA“ angegeben, erfolgt eine Bereitstellung der
Buchfahrplan(gedruckt) = gedruckter Buch-
Daten für eine Anzeige auf einer elektronischen Führerrauman-
fahrplan wird erstellt
zeige, anderenfalls kann nur die Veröffentlichung als gedruckter
Buchfahrplan erfolgen. Trassenlaufpunkte, ab denen durch DB In- KeineVeroeffentlichung = keine Veröffentli-
fraGO keine Fahrplandokumente bereitgestellt werden, sind mit chung Buchfahrplan/Fplo durch DB InfraGO
„KeineVeroeffentlichung“ gekennzeichnet.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
NSP.
geplanteBetriebsstelle Geplante Betriebsstelle Angabe der Bezeichnung einer geplanten Betriebsstelle; ist erfor- 0..1 string 32 bM bM
derlich, wenn für diese Betriebsstelle noch kein LocationPrima-
ryCode vergeben wurde oder bekannt ist und daher das Feld „Loca-
tionPrimaryCode mit „99999“ befüllt ist. Das Element wird nur bei
Geschäftsvorfällen des Produktes „FPS“ verwendet. Die Angabe gilt
lokal für den ZLP/TLP.
gefahrgutGanzzug Gefahrgutganzzugkennzeichen Bei Trassenbestellungen der Verkehrsart SGV sind Ganzzüge mit 0..1 string Gemäß xs:booelan: K K
Gefahrgut durch das bestellende EVU zu kennzeichnen. Default-
0, false (=falsch)
Wert: False.
1, true (=wahr)
Bei Angabe von „true“ ist mindestens einmal das Feld „RID_Class“
in der Struktur „PlannedJourneyLocation“ zu befüllen.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
NSP.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 92

## Seite 93

tfzOderLeerfahrt Kennzeichnung der Durchführung der Zugfahrt als Tfz-fahrt oder Kennzeichnung der Durchführung der Zugfahrt als Tfz-Fahrt (Tfzf) 0..1 string 15 LeerRz K K
Leerreisezug oder Leerreisezug (LeerRz) auf dem nachfolgenden Zuglaufab- Tfzf
schnitt durch das EVU. Die Ausprägung „Leerreisezug“ darf nur für
LOKZUG
verkehrsArtKunde=SPFV oder verkehrsArtKunde=SPNV angegeben
Vollzug
werden.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieses
NSP. Die Auprägung „Vollzug“ darf nur verwendet werden, um
die Gültigkeit des an einem vorherigen ZLP/TLP angegebenen NSP
mit den Ausprägungen „Leerreisezug“ zu widerrufen.
Alternative Zugcharakteristik Die nachfolgenden 14 Attribute können für die Angabe von max. 1 0..1 K K
alternativen Zugcharakteristik genutzt werden. Für die Bespan-
nungsangaben gelten die gleichen Regeln wie für die Angabe von
Bespannungen in einer Basis-Zugcharakteristik (siehe Struktur
„PlannedJourneyLocation“ Kapitel 3.8.2).
Alle Angaben zur Bespannung in der alternativen Zugcharakteristik
sind in der hier aufgeführten Reihenfolge anzugeben, damit eine
eindeutige Zuordnung zwischen azchLocoTypeNumber, azchTrac-
tionMode, azchTrainWeight und azchTrainLength gewährleistet ist.
Die Angaben zur Bespannung sind gemäß den Einschränkungen in
der TractionMode als Gruppe wiederholbar.
Wird eine alternative Zugcharakteristik angegeben, so ist als Basis-
zugcharakteristik immer die Zugcharakteristik mit den fahrdyna-
misch und fahrplantechnisch ungünstigeren Werten anzugeben.
Verbindlich zu beachten sind dazu die Regeln der Ril 402.0202 Ab-
schn. 2(8).
Die Angabe einer alternativen Zugcharakteristik ist nur für Ge-
schäftsvorfälle des Produktes „Trasse“ zulässig.
Die Angabe gilt ab dem ZLP/TLP bis zur nächsten Angabe dieser
NSP-Gruppe. Die Angaben zum Vorkommen der einzelnen Attri-
bute gelten innerhalb dieser NSP-Gruppe azch.
Wird die Basis-Zugcharakteristik wiederholt, gilt die alternative
Zugcharakteristik nicht mehr. Sie muss ebenfalls am ZLP/TLP neu
gesendet werden.
Weichen die gesendeten Stammdaten zu Last und Länge des Trieb-
fahrzeugs der alternativen Zugcharakteristik von den bei der DB In-
fraGO hinterlegten Stammdaten ab, werden die gesendeten Daten
ignoriert.
azchLocoTypeNumber Triebfahrzeug-Baureihe Die zu nutzenden 11 Stellen werden wie folgt in der angegebenen 1..N string 11 1. und 2. Stelle: Bauarttyp gemäß Teil 0 An- M M
Reihenfolge strukturiert: hang 6 der EU-Reg. 2007/756
- 1.Stelle (TypeCode1): Bauarttyp 3. und 4. Stelle: Antriebsart/Traktionsart
gemäß Teil 8 Anhang 6 der EU-Reg.
- 2. Stelle (TypeCode2): Traktionsart
2007/756
- 3. und 4. Stelle (CountryCode): Ländercode
5.-11. Stelle: Siehe Stammdaten – Trieb-
- 5. -8. Stelle (SeriesNumber): Baureihen-Nummer fahrzeuge (siehe Kapitel 4.3.3)
- 9. – 11. Stelle (SerialNumber): Baureihen-Variantennummer (mit Siehe auch Tabelle 20 Element LocoTy-
führenden Nullen bei einstelliger Variantennummer) peNumber
Beispiel: 96800442003
azchTractionMode Rolle und Position des Triebfahrzeugs im Zugverband Für alternative Bespannungen sind nur die Rollen (TractionMode) 1..N string 2 Siehe Kapitel „Codelisten“ Kapitel 3.16 und M M
1x, 2x und 5x zulässig Element TractionMode in Tabelle 20
azchTractionWeight Masse des Triebfahrzeugs/der Triebfahrzeuge Angabe in t 0..1 string 5 1 99999 Analog Element TractionWeight in Tabelle K K
20
azchTractionLength Länge des Triebfahrzeugs/der Triebfahrzeuge Angabe in mm 0..1 string 6 1 99999 Analog Element TractionLength in Tabelle K K
20
azchTrainWeight Gesamtmasse des Zuges (Wagenzug + Triebfahrzeug) in Tonnen [t] 1 string 5 1 99999 M M
azchTrainLength Gesamtlänge des Zuges (Wagenzug + Triebfahrzeug) in Meter [m] 1 string 4 1 9999 M M
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 93

## Seite 94

azchWeightOfSetOfCarria- Masse des Wagenzuges in Tonnen [t] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt (keine Angabe), darf 0..1 string 5 1 99999 bM bM
ges auch <LengthOfSetOfCarriages> nichtangegeben werden.
2. Keine Angabe für <WeightOfSetOfCarriages> und <LengthOfSe-
tOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug oder Triebwa-
gen(-einheit), jeweils ohne zusätzlichen Wagenzug. Wird mit einem
Triebwagen zusätzlich ein Wagenzug befördert, muss der konkrete
Wert für die Masse des Wagenzuges angegeben werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbeitenden
Tfz gezogen werden, gelten als Wagenzug. Sie dürfen nicht als Tfz
in der Struktur TractionDetails angegeben werden. Deren Masse ist
Teil der Masse des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeitenden Tfz
gezogen werden, können ignoriert werden. Sie gelten weder als Tfz
noch als Wagenzug.
azchLengthOfSetOfCarria- Länge des Wagenzugs in Meter [m] 1. Ist <WeightOfSetOfCarriages> nicht gefüllt, darf auch <Lengt- 0..1 string 4 1 9999 bM bM
ges hOfSetOfCarriages> nicht angegeben werden.
2. Keine Angabe für <WeightOfSetOfCarriages> und <LengthOfSe-
tOfCarriages> (= "leer") bedeutet Tfz-Fahrt, Triebzug oder Triebwa-
gen(-einheit), jeweils ohne zusätzlichen Wagenzug. Wird mit einem
Triebwagen zusätzlich ein Wagenzug befördert, muss der konkrete
Wert für die Länge des Wagenzuges angegeben werden.
3. Mehr als zwei nicht arbeitende Tfz, die von einem arbeitenden
Tfz gezogen werden, gelten als Wagenzug. Sie dürfen nicht als Tfz
in der Struktur TractionDetails angegeben werden. Deren Länge ist
Teil der Länge des Wagenzuges.
4. Bis zu zwei nicht arbeitende Tfz, die von einem arbeitenden Tfz
gezogen werden, können ignoriert werden. Sie gelten weder als Tfz
noch als Wagenzug.
azchTrainMaxSpeed Höchstgeschwindigkeit des Zuges in Kilometern pro Stunde [km/h] Hier wird die technische Höchstgeschwindigkeit des Zuges angege- 1 string 3 1 999 Analog Element TrainMaxSpeed in Tabelle M M
ben. Die Angabe erfolgt in km/h. 20
azchBrakeType Bremsstellung des Zuges Die Angabe von hydrodynamischen (Zusatz H) und elektrodynami- 1 string 2 Siehe Kapitel „Codelisten“ Kapitel 3.16 M M
schen (Zusatz E) Bremsen ist nicht gestattet. Bei Verwendung die-
ser Bremsart in der Bestellung ist das jeweilige Äquivalent ohne
entsprechenden Zusatz zu verwenden.
azchBrakingRatio vorhandene Bremshundertstel des Zuges Garantiert vorhandene Bremshundertstel des Zuges, die vom Kun- 1 string 3 1 999 Analog Element BrakingRatio in Tabelle 20 M M
den in der PathRequestMessage anzugeben sind.
azchZggHauptnummer Hauptnummer der Zuggattung Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende 0..1 string 2 Siehe Stammdaten Kapitel 4.3.4 bM bM
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein. Eine alternative Zugcharakteristik ist nur in wenigen
Ausnahmefällen zulässig (z. B. bei Wechsel zwischen lokbespannten
Zug und Triebzug/Triebwagenzug; bei Doppelstockwagen).
azchZggUnternummer Unternummer der Zuggattung Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende 0..1 string 1 Siehe Stammdaten Kapitel 4.3.4 bM bM
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein
azchZggKurzbez Kurzbezeichnung zur Zuggattung. Bei diesem Feld handelt es sich um die zur Zuggattung gehörende 0..1 string 10 Siehe Stammdaten Kapitel 4.3.4 bM bM
Zuggattungsproduktbezeichnung.
Ist eine zur Angabe in der Basis-Zugcharakteristik abweichende
Zuggattung erforderlich, müssen alle drei Attribute der Zuggattung
gefüllt sein
kundennummerBestellen- Kundennummer des bestellenden EVU (ResponsibleApplicant) Die angegebene Kundennummer muss dem EVU, welches als 0..1 string 5 bM bM
desEvu ResponsibleApplicant benannt ist und die Trassenbestellung mit ei-
ner PathRequestMessage übergeben hat, zugeordnet sein.
Bei Angabe in der Struktur TrainInformation der PathRequestMes-
sage gilt sie so lange innerhalb des Zuglaufs, bis sie durch eine an-
dere Angabe ersetzt wird. In der Struktur PathInformation der Pa-
thRequestMessage bzw. PathDetailsMessage muss diese Angabe
am ersten Zug-/Trassenlaufpunkt stehen und gilt für den gesamten
Laufweg, d. h. Änderungen an nachfolgenden ZLP und TLP sind un-
zulässig, Wiederholungen zu vermeiden.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 94

## Seite 95

kundennummerDurch- Kundennummer des durchführenden EVU (ResponsibleRU) Die angegebene Kundennummer muss dem EVU, welches als 0..1 string 5 bM bM
fuehrendesEvu ResponsibleRU benannt ist, zugeordnet sein. Die Angabe erfolgt in
der Struktur TrainInformation und/oder PathInformation der Path-
RequestMessage bzw. PathDetailsMessage und gilt solange inner-
halb des Zug-/Trassenverlaufs, bis sie durch eine andere Angabe er-
setzt wird.
Angabe der Nr. der für den nachfolgenden Streckenabschnitt vor-
liegenden Einzelgrenzlastberechnung (sofern zutreffend) und des
PLC, bis zu welchem sie gilt. Die Angabe zum „gültigbis“-PLC wird
egbNrGueltigBis Nummer der Einzelgrenzlastberechnung und räumliche Gültigkeit von der DB InfraGO ignoriert. In der PDM wird immer der letzte PLC 0..N string 22 <egbNr,PLC> K K
innerhalb des Netzes der DB InfraGO angegeben.
Die EGB-Nummer muss mit der Buchstabenfolge „EGB“ beginnen.
Angabe der ETCS-Zugart und des PLC, bis zu welchem sie gilt. Wird
von DB InfraGO nur im Trassenangebot geliefert; darf auch bei Än-
<etcsZu-
derungen nicht in der Bestellung enthalten sein. Die Angabe dient
etcsZugartGueltigBis ETCS-Zugart und räumliche Gültigkeit dem EVU zur Ermittlung des sicherheitsrelevanten TBV-Codes auf 0..1 string 19 gart,PLC> Personenzug, Güterzug n/a K
Strecken mit ETCS und Tunneln.
Der PLC wird als 24-stelliger String geliefert.
Angabe der CaseReference-ID zu den ETCS-Zugdaten, dass für den
etcsZugdaten ID zu den ETCS-Zugdaten 0..1 string 24 K K
nachfolgenden Streckenabschnitt genutzt werden soll
Tabelle 28 NetworkSpecificParameter Location-Ebene Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 95

## Seite 96

3.14.7 Attribute der Struktur „NetworkSpecificParameter“ in der Struktur „AffectedSection“
In der Kommunikation über die EVU-Schnittstelle des Bestellsystems der DB InfraGO enthalten die in Kapitel 3.12 genannten Nachrichten die Struktur „AffectedSection“. Dabei müssen bzw. können je nach Nachrichtentyp in der Un-
terstruktur „NetworkSpecificParameter“ weitere DB-InfraGO -spezifische Parameter angegeben werden. Aktuell sind jedoch keine ergänzenden Angaben für die Struktur „AffectedSection“ vorgesehen.
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Muster Ausprägungen Nur anzuge-
kom- Wert ben in Mes-
men sageType
-- -- Aktuell sind keine NetworkSpecificParameter für die Struktur „Af-
fectedSection“ vorgesehen.
Tabelle 29 NetworkSpecificParameter AffectedSection Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 96

## Seite 97

3.15 CaseReference-Objekte
Die nachfolgende Beschreibung des CaseReference-Objektes entspricht dem aktuell vorliegenden Bearbeitungsstand der RNE. Bei diesem Stand handelt es sich um einen Entwurf. Eine exakte und vollständige Beschreibung der Struktur
dieser CaseReference-Objekte kann daher erst nach Abschluss der laufenden Abstimmungen auf europäischer Ebene und einer Aufnahme des CaseReference-Objektes in die TAF/TAP-TSI-xsd erfolgen. Die weiteren Kapitel 3.15.1 bis 3.15.5
beschreiben die Struktur der bisher durch DB InfraGO spezifizierten CaseReference Objekte unter Nutzung der Elemente ParameterName und ParameterValue.
Für die durchgängige Nutzung der Daten aus den CaseReference-Objekten in der Trassenbearbeitung ist es notwendig, dass die CaseReference-Objekte vor dem Versand der PathRequestMessage mit der referenzierten CRID bei der DB
InfraGO bekannt sind. Eine automatische Weiterverarbeitung ist sonst nicht möglich.
Auf der Grundlage der Struktur der ObjectInfoMessage hat das CaseReference-Objekt nachfolgenden allgemeinen Aufbau. Zur Beschreibung der fachlich spezifischen Angaben dienen allein die Elemente ParameterName und ParameterVa-
lue.
Struktur Strukturelement Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Min- Max- Muster
kom- Wert Wert
men
ObjectInfoMessage für CaseReferenceObject
I....MessageHeader OIM MessageHeader Für alle Nachrichten erforderlich Siehe Kap. 3.2 1
I....MessageStatus OIM MessageStatus Aktueller Status der Nachricht, wird durch den Absender bereit ge- 1 = creation 1 integer 1
stellt
2 = modification
3 = deletion
I....AdministrativeContactInformation OIM AdministrativeContac- Kontaktinformationen des Absenders. Siehe Kap. 3.3 1
tInformation
I....Identifier OIM Identifier Angabe der CaseReferenceID Siehe Kap. 3.4 1
I....ReferenceTRID OIM ReferenceTRID ReferenceTRID des ReferenceTrains, auf welchen sich die in der Das Attribut wird bei der Nutzung der OIM für ein CaseRefe- 1
Nachricht enthaltenen Objekte beziehen. renceObject nicht befüllt.
I....ReferenceTrainIDSubCalendar OIM ReferenceTrainIDSub- Die Kalenderstruktur gibt die Gültigkeit des CaseReference-Objektes Siehe Kap. 3.9.1 1
Calendar an.
I....ObjectInfoType OIM ObjectInfoType Typ der ObjectInfoMessage Angabe des Nutzungszwecks 1
I....I....Code ObjectInfoType Code Kodierung des Nutzungszwecks R = request info about object; 1 string 1
I = Information about object;
U = Update information on object
N = information about a new object,
O = request about object and linked objects
I....I....TypeOfRequest OIM TypeOfRequest Typ der Nachricht (Basisprozess) Das Attribut wird bei der Nutzung der OIM für ein CaseRefe- 0..1 string 1
renceObject nicht befüllt.
I....I....TypeOfInformation OIM TypeOfInformation Typ der Information Das Attribut wird bei der Nutzung der OIM für ein CaseRefe- 0..1 string 1..2
renceObject nicht befüllt.
I....TrainInformationExtended OIM TrainInformationExten- TrainInformation eines oder mehrerer Objekte, die durch die Anfrage Die Struktur wird bei der Nutzung der OIM für ein CaseRefe- 0..1
ded oder Antwort betroffen sind renceObject nicht befüllt.
I....PathInformationExtended OIM PathInformationExten- PathInformation eines oder mehrerer PathRequest-Objekte, die Die Struktur wird bei der Nutzung der OIM für ein CaseRefe- 0..1
ded durch die Anfrage oder Antwort betroffen sind renceObject nicht befüllt.
I....FreeTextField OIM FreeTextField Frei definierbarer Text Zur Übermittlung ergänzender, unstrukturierter Informatio- 0..6 string 255
nen, für die kein definiertes Element vorhanden ist und ge-
nutzt werden kann. Durch max. 6 Wiederholungen kann die
Textlänge variiert werden.
I....Parameters OIM Parameters Abfolge der fachlichen Parameter des CaseReferenceObjektes 0..N
I....I....ParameterName Parameters ParameterName Bezeichnung des fachlichen Parameters Ist vom Ersteller des Objektes zu definieren 1 string 30 [0-9A-Z]{30}
I....I....ParameterValue Parameters ParameterValue Wert/Inhalt des fachlichen Parameters Ist vom Ersteller des Objektes bereitzustellen 1 string 50 [0-9A-Z]{50}
Tabelle 30: Allgemeine Struktur der ObjectInfoMessage bei der Nutzung für ein CaseReference-Objekt
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 97

## Seite 98

3.15.1 CaseReference-Objekt „Taktverbund“
Das Objekt dient der Beschreibung eines Taktverbundes. Es ist zu definieren, wenn Trassenbestellungen bzw. Trassenzuweisungen für vertaktete Züge erfolgen sollen und durch die Angabe der CaseReferenceID die Zusammengehörigkeit
der Fahrlagen bzw. Trassen gekennzeichnet werden soll. Im Element „crObjectName“ des CaseReference-Objekts ist eine Bezeichnung für den Typ des CaseReferenceObjekts (in diesem Fall „Taktverbund“) anzugeben.
Das CaseReference-Objekt „Taktverbund“ enthält folgende fachliche Parameter:
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
crObjectName Allgemeine Bezeichnung der Art des CaseReferenceObjektes Ein CaseReference-Objekt der Art "Taktverbund“ ist immer mit dem in Spalte „Ausprägun- 1 string 11 Taktverbund
gen“ aufgeführten Begriff zu kennzeichnen.
taktLinieBez Bezeichnung einer (verkehrlichen) Linie Ist vom Ersteller des Objektes festzulegen und stellt die Bezeichnung einer verkehrlichen 1 string 6 S1, RE125, IC16
Linie dar, auf welcher vertaktete Züge verkehren.
taktLinieStart Startbetriebsstelle einer Linie Angabe des PrimaryLocationCodes der Betriebsstelle, an der üblicherweise die angegebene 1 string 7 DE 12345
verkehrliche Linie beginnt
taktLinieZiel Zielbetriebsstelle einer Linie Angabe des PrimaryLocationCodes der Betriebsstelle, an der üblicherweise die angegebene 1 string 7 DE 12345
verkehrliche Linie endet
taktBez Bezeichnung eines Taktfahrplans Ist vom Ersteller des Objektes festzulegen und stellt die Bezeichnung des Taktes dar 1 string 50 Tagestakt; Verstärkungstakt, Wochenendtakt
taktFrequenz Taktfrequenz Wird vom Ersteller des Objektes festgelegt und gibt den regulären zeitlichen Abstand zwi- 0..1 string 3
schen den Fahrlagen/Trassen zweier Züge des Taktes an; Angabe erfolgt in Minuten
taktAnzZuege Anzahl der Züge, die dem Takt zugeordnet sind Wird vom Ersteller des Objektes festgelegt und gibt die Anzahl der für den Takt geplanten 0..1 string 2 1 99
bzw. dem Takt zugeordneten Züge an
Tabelle 31: Fachliche Parameter CaseReference-Objekt „Taktverbund“
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 98

## Seite 99

3.15.2 CaseReference-Objekt „Abstellung“
Das Objekt dient der Bestellung einer geplanten Abstellung eines Zuges innerhalb des Trassenverlaufs durch den ResponsibleApplicant. In dem CaseReference-Objekt werden die detaillierten Informationen zur gewünschten Abstellung
vom EVU bereitgestellt. Zusätzlich ist in der PathRequestMessage an dem Zuglaufpunkt, in welchem die Abstellung geplant wird, die CaseReferenceID in dem Element „abstellung“ (NSP auf Location-Ebene) anzugeben. Im Element
„crObjectName“ des CaseReference-Objektes ist eine Bezeichnung für den Typ des CaseReferenceObjekts (in diesem Fall „Abstellung“) anzugeben. Das CaseReference-Objekt „Abstellung“ ist nur nutzbar in Verbindung mit Geschäftsvorfäl-
len des Produktes „Trasse“.
Das CaseReference-Objekt „Abstellung“ enthält folgende fachliche Parameter:
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
crObjectName Allgemeine Bezeichnung der Art des CaseReferenceObjektes Ein CaseReference-Objekt der Art "Abstellung“ ist immer mit dem in Spalte „Ausprägun- 1 string 10 Abstellung
gen“ aufgeführten Begriff zu kennzeichnen.
abstellGewuenscht Abstellung gewünscht Es ist anzugeben, durch wen die Abstellung organisiert werden soll. 1 string 1 N = Organisation der Abstellung durch DB InfraGO,
K = Organisation der Abstellung durch das EVU
abstellInfo Information zur Abstellung, wenn EVU selbst bestellt hat Wenn das Feld „abstellGewuenscht“ mit "K" gefüllt ist, sind hier Angaben zum Abstellort 0..1 string 25 z. B.: DE12345, Gl. 68
(PLC des Zuglaufpunkts, Gleis-Nr./-gruppe) zu übermitteln
abstellZeit Benötigter Zeitraum der Abstellung Angabe der gewünschten Abstelldauer. Wenn das Feld „abstellGewuenscht>“ mit "N" ge- 0..1 string 7 Angabe in Stunden und Minuten (hh:mm)
füllt ist, muss diese Angabe geliefert werden.
abstellLaenge Abstellung benötigte Gleislänge Angabe der für die Abstellung benötigten Gleislänge in Metern [m]. Wenn das Feld „abstell- 0..1 string 3 999
Gewuenscht“ mit "N" gefüllt ist, muss diese Angabe geliefert werden
abstellOberleit Angabe, wenn Oberleitung benötigt wird Angabe, ob innerhalb des Abstellgleises eine Oberleitung erforderlich ist. Wenn das Feld 0..1 string 5 Gemäß xs:booelan:
„abstellGewuenscht“ mit "N" gefüllt ist, muss diese Angabe geliefert werden.
0, false (=falsch)
1, true (=wahr)
Tabelle 32: Fachliche Parameter des CaseReference-Objektes "Abstellung"
3.15.3 CaseReference-Objekt „Rahmenvertrag“
Das Objekt dient der Beschreibung eines Rahmenvertrages (RV). Es wird von DB InfraGO angelegt, sobald eine Rahmenvertragskapazität (RVK) existiert und daher ein Rahmenvertrag anzulegen ist. Im Element „crObjectName“ des
CaseReference-Objektes ist die Bezeichnung für den Typ des CaseReference-Objektes (in diesem Fall „Rahmenvertrag“) anzugeben. Die CaseReferenceID kann zu jeder RVK für die Referenzierung auf den Rahmenvertrag als PlannedTrans-
portID in den Nachrichten genutzt werden.
Das CaseReference-Objekt „Rahmenvertrag“ enthält folgende fachliche Parameter:
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
crObjectName Allgemeine Bezeichnung der Art des CaseReferenceObjektes Ein CaseReference-Objekt der Art "Rahmenvertrag“ ist immer mit dem in Spalte „Ausprä- 1 string 13 Rahmenvertrag
gungen“ aufgeführten Begriff zu kennzeichnen.
rahmenvertragsNummer Rahmenvertragsnummer Nummer des Rahmenvertrags. Wird durch DB InfraGO beim Anlegen eines Rahmenvertrags 1 string 15
vergeben.
debitorenNummer Debitorennummer Debitorennummer des EVU; wird durch DB InfraGO vergeben. 1 string 8
beginnRV 1. Jahr der Laufzeit des Rahmenvertrages 1 date 4
endeRV Letztes Jahr der Laufzeit des Rahmenvertrages 1 date 4
kdNummerZugeordnet Zugeordnete Kundennummern Kundennummern, die dem Rahmenvertrag zugeordnet sind und die berechtigt zur Referen- 1..N string 5
zierung auf einen RVK in einer Trassenerstanmeldung zu einem Netzfahrplan sind.
Tabelle 33: Fachliche Parameter CaseReference-Objekt „Rahmenvertrag“
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 99

## Seite 100

3.15.4 CaseReference-Objekt „Baubetroffenheit“ (Umsetzung pausiert, siehe Anlage 10)
Das Objekt wird von der DB InfraGO AG versendet, um den Kunden über eine Baubetroffenheit seiner Vertragstrasse(n) zu informieren. Dieses Objekt ist Teil der unterjährigen Baukommunikation. Mit diesem Objekt wird angezeigt, dass
die hinterlegte(n) Trasse(n) zeitlich mit einer Baumaßnahme zusammenfallen. Dieses Objekt beschreibt nicht die Art der Betroffenheit und führt daher auch zu keiner Änderung der betroffenen Trasse(n). Der weitere Prozess erfolgt im
Rahmen der Baukommunikation der DB InfraGO AG. Sollte im Rahmen der Baukommunikation eine Änderung der Vertragstrasse(n) erforderlich werden, wird diese Änderung nach dem Geschäftsvorfall „netzausgelöster Änderungs- und
Stornierungsprozess“ (Abb.11 des Hauptdokuments) durchgeführt.
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
crObjectName Allgemeine Bezeichnung der Art des CaseReferenceObjektes Ein CaseReference-Objekt der Art "Baubetroffenheit“ ist immer mit dem in Spalte „Ausprä- 1 string 13 Baubetroffenheit
gungen“ aufgeführten Begriff zu kennzeichnen.
BKEnr Baukapazitätseinschränkungsnummer Nummer der BKE aus dem Bauprozess. Wird durch die DB InfraGO bekannt gegeben 0..1 string 15
beginnBKE Geplanter Starttermin der BKE 0..1 dateTime 4
endeBKE Geplanter Endtermin der BKE 0..1 dateTime 4
BetroffenePAID Die von der BKE betroffene Trasse Es wird die PAID mitgegeben, die von der BKE betroffen ist 1..N string 24
Tabelle 34: Fachliche Parameter CaseReference-Objekt „Baubetroffenheit“
3.15.5 CaseReferemce-Objekt „ETCS-Zugdaten“
Das Objekt dient der Beschreibung der notwendigen Angaben eines ETCS-Fahrzeugs und dessen Zugdaten. Diese Daten sind die Voraussetung für die Anwendung des ETCS Gamma Bremsmodells in der Fahrplankonstruktion. Die Angabe
dieses CaseReference-Objekts wird nur in der Oberfläche des Bestellsystems pathOS möglich sein. Ein Versand des CaseReference-Objekts über die Schnittstelle ist nicht vorgesehen. Die Angabe der CR-ID hat am ersten Laufwegspunkt im
NSP „ETCSZugdaten“ zu erfolgen und ist bei Veränderung der Zugcharakteristik zu wiederholen. Eine Angabe bei der alternativen Zugcharakteristik ist nicht vorgesehen.
Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
crObjectName Allgemeine Bezeichnung der Art des CaseReferenceObjektes Ein CaseReference-Objekt der Art "ETCSZugdaten“ ist immer mit dem in Spalte „Ausprägun- 1 string 16 ETCSZugdaten
gen“ aufgeführten Begriff zu kennzeichnen.
|….ETCSGammaData ETCS Gamma-Daten Angabe ist Pflicht bei folgenden Bedingungen: 1
• TrainCC_System = {17, 18, 19, 20} (mit ETCS ausgeüstet) UND [
• TrainMaxSpeed > 200km/h oder
• TrainLength > 900m in PV oder
• TrainLength > 1500m in GV oder
• BrakingRatio < 30 oder
• BrakingRatio > 250
|….|….T_traction_Cut_Off Zeitdauer zur Traktionsabschaltung [s] 1 decimal 4 0 <100
|….|….ServiceBrakeModel Betriebsbremsdaten 1
|….|….|….T_brake_service Bremsaufbauzeit Betriebsbremsung 1 decimal 4 0 <100
|….|….|….A_brake_service Geschwindigkeitsstufen für Betriebsbremsdaten 1..7
|….|….|….|….V_i Geschwindigkeitsstufe [km/h] 1 integer 0 999
|….|….|….|….A_i Verzögerung der Betriebsbremsung über V_i [m/s²] 1 decimal >0 <10
|….|….EmergencyBra- Notbremsdaten 1
keModel
|….|….|….T_brake_emerg Bremsaufbauzeit Notbremsung 1 token 0 <100
ency
|….|….|….A_brake_emerg Geschwindigkeitsstufen für Notbremsdaten 1 decimal
ency
|….|….|….|….V_i Geschwindigkeitsstufe [km/h] 1 integer 0 999
|….|….|….|….A_i Verzögerung der Notbremsung über V_i [m/s²] 1 decimal >0 <10
|….|….|….|….Kdry_rst_EB Sicherheitsfaktor trockene Schiene über V_i für EBCL=7 [ ] 1 decimal 3 >0 10
CL7_i
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 100

## Seite 101

Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge MinWert Max- Ausprägungen/Beispiele
kom- Wert
men
|….EtcsGuiData ETCS Guidance-Daten 0…1
|….|….A_brake_nor- Zusätzliche Geschwindigkeitsstufen für GUI 1..7
mal_service
|….|….|….V_i Geschwindigkeitsstufe [km/h] 1 integer 3 0 999
|….|….|….A_i Verzögerung der GUI über V_i [m/s²] 1 decimal 3 >0 9,99
|….|….Kn_Plus zusätzliche Geschwindigkeitsstufen für Korrekturfaktoren GUI Kn+ 1..5
|….|….|….V_i Geschwindigkeitsstufe [km/h] 1 integer 3 0 999
|….|….|….Kn_Plus_i Korrekturfaktor GUI über V_i positive Gradiente [m/s²] 1 decimal 4 0 10
|….|….Kn_Minus zusätzliche Geschwindigkeitsstufen für Korrekturfaktoren GUI Kn- 1..5
|….|….|….V_i Geschwindigkeitsstufe [km/h] 1 integer 3 0 999
|….|….|….Kn_Minus_i Korrekturfaktor GUI über V_i negative Gradiente [m/s²] 1 decimal 4 0 10
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 101

## Seite 102

3.16 Codelisten
3.16.1 TAF-TSI/TAP-TSI-Codelisten
Übersicht
Die Übersicht zeigt die TAF-TSI/TAP-TSI -Attribute, deren Ausprägungen in der Tabelle „Ausprägungen“ aufgelistet sind.
Die Spalte „Relevant“ weist aus, ob das Attribut in der EVU-Schnittstelle genutzt wird (= Ja) oder nicht (= n/a). Für „n/a“-Attribute werden in den vom EVU übergebenen Nachrichten enthaltene Werte ignoriert.
Hinweis: Die genannte „Reference Database“ (Common Reference Data = CRD) ist über den Link „https://crd.tsi-cc.eu/CRD/Login-action“ erreichbar und erfordert gültige Anmeldedaten (siehe hierzu Anlage 2).
Attribut Beschreibung Relevant
BrakeType Bremsstellung Ja
CommercialTrafficType 1. Angabe einer kommerziellen Bezeichnung für den Zug bzw. ergänzende Angaben Ja
zur Verkehrsart des Zuges
2. Aktuell werden nur ausgewählte Codierungen in der Kommunikation zwischen EVU
und DB InfraGO genutzt – siehe nachfolgende Übersicht
CompanyCode 1. Jedes EVU bzw. EIU muss über einen eigenen CompanyCode verfügen. Sofern das Ja
noch nicht der Fall ist, muss das EVU/EIU diesen beantragen
2. Der jeweils erforderliche CompanyCode wird als bekannt vorausgesetzt (daher
nicht in der untenstehenden Ausprägungsliste in Kapitel 3.16 enthalten)
3. Die gültigen Ausprägungen sind auch in der "CommonReferenceDatabase" (CRD)
hinterlegt
4. Der Begriff CompanyCode wird in der xsd zur Bezeichnung des TypeCodes verwen-
det und ist ein Synonym für den Begriff CompanyID, den eigentlichen Identifikator
für das Objekt Company. Der CompanyCode wird auf Antrag durch die EURA als Or-
ganisationCode (OC) vergeben und im OrganisationCodeRegister (OCR) verwaltet.
CountryCodeISO 1. Countrycode des LocationPrimaryCode des ZLP/TLP (gemäß ISO 3166) Ja
2. Die Auflistung des gültigen CountryCodeISO wird im Kontext des LocationPrima-
ryCode mit den Stammdaten geliefert
(nicht in der untenstehenden Ausprägungsliste
3. Die gültigen Ausprägungen sind auch in der "Reference Database" hinterlegt
4. CountryCodeISO und LocationPrimaryCode bilden zusammen den PrimaryLocation-
Code.
ErrorCode 1. Fehler-Code der ErrorMessage Ja
2. Es gilt die Codeliste der RNE sowie die Anlage 9 für die DB InfraGO speizischen
Fehlercodes.
InterruptionReason 1. Codierung des Unterbrechungsgrunds bei Nichtverfügbarkeit einer Trasse n/a
2. nicht in der untenstehenden Ausprägungsliste enthalten
JourneyLocationTypeCode Typ des ZLP/TLP Ja
LocationPrimaryCode 1. Kodierung einer Betriebsstelle; wird national vergeben und ist in Verbindung mit Ja
dem CountryCodeISO immer eindeutig.
2. Die Auflistung der gültigen LocationPrimaryCode wird mit den Stammdaten gelie-
fert
3. Die gültigen Ausprägungen sind auch in der "Reference Database" hinterlegt
4. CountryCodeISO und LocationPrimaryCode bilden zusammen den PrimaryLocation-
Code.
MessageStatus Aktueller Status der Nachricht Ja
MessageType Typ der übermittelten Nachricht Ja
ObjectType Objekttyp des Identifiers Ja
ProcessType Kodierte Angabe des Prozesstyps. Mit dieser Angabe kann der mit TypeOfRequest ange- n/a
gebene Prozess detaillierter spezifiziert werden. Das Attribut wird vorerst in der Kommu-
nikation mit DB InfraGO nicht verwendet.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 102

## Seite 103

Attribut Beschreibung Relevant
ReasonOfReference Kodierte Angabe des Grundes für die Nutzung des RelatedPlannedTransportIdentifiers Ja
zur Referenzierung auf ein anderes Objekt (Train, Path, PathRequest, CaseReferenceOb-
ject); Angabe in Abhängigkeit vom fachlichen Kontext notwendig bzw. empfohlen.
Severity Schweregrad des Fehlers Ja
SubsidiaryLocationTypeCode Typbezeichnung für eine SubsidiaryLocation; wird in der CRD und zur Kennzeichnung der Ja
zu einer PlannedJourneyLocation (PrimaryLocation) angegebenen SubsidiaryLocation ge-
nutzt.
TimingQualifierCode Kodierung der Art der angegebenen Abfahrts- bzw. Ankunftszeit Ja
TractionMode Rolle und Position des Triebfahrzeugs im Zugverband Ja
TrafficTypeCode Verkehrsart Ja
TrainCC_SystemCode 1. Kodierung für die Ausrüstung des Zuges mit einem Zugsicherungssystem. Ja
2. Die untenstehende Ausprägungsliste enthält nur die im Bereich der DB InfraGO zu
verwendenden Kodierungen sowie zusätzlich eine Kodierung zur Kennzeichnung
der Nutzung einer Führerraumanzeige (EFA).
TrainRadioSystem Zugfunk Ja
TrainType Zugart Ja
TypeOfError Fehlertyp Ja
TypeOfImHarmonization Typ der EIU-Harmonisierung Ja
TypeOfInformation Typ der Information Ja
TypeOfRuHarmonization Typ der EVU-Harmonisierung n/a
TypeOfServices: 1. Informationen über verfügbare Services im Zug n/a
- SpecialServiceDescriptionCode 2. nicht in der untenstehenden Ausprägungsliste enthalten
- FacilityTypeDescriptionCode
- CharacteristicDescriptionCode
TypeOfRequest Angabe des verwendeten/ausgeführten Basisprozesses für die Produkte Trasse (TRA), Ja
Fahrzeitberechnung (FZB), Fahrplan- und Betriebsprogrammstudie (FPS), Kurzfristige
Fahrlagenberatung mit Buchungsoption (KFB)
TypeOfUsedHybridPowerunit Angabe der Antriebsart eines Hybrid-Tfz, deren Nutzung gewünscht ist bzw. die für die Ja
Trassenkonstruktion verwendet wurde
Tabelle 35 TAF-TSI/TAP-TSI Codelisten Übersicht
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 103

## Seite 104

Ausprägungen
Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
BrakeType 0 G: "Goods" for freight services with slow druckluftbediente Güterzugbremse (G) Ja
application and release times
BrakeType 1 P: "Passenger" for passenger and freight druckluftbediente Personenzugbremse (P) Die Kombination R/P ist nicht mehr möglich. Durch das EVU Ja
services with quick application and release ist daher eine Auswahl zwischen P und R vorzunehmen.
times.
BrakeType 2 X: an indication that brake system of the nicht in Betrieb befindliche oder nicht verfügbare Bremse an einem Güterwa- Wird nur in TrainCompositionMessage, jeweils gültig für ein- n/a
freight wagon out of order (actually / cur- gen. zelne Wagen, verwendet.
rent). Additionally, X cannot be used in
Planning.
BrakeType 3 R: a subdivision brake position of brake Schnellwirkende druckluftbediente Personenzugbremse (R) Die Kombination R/P ist nicht mehr möglich. Durch das EVU Ja
mode "P", for rapid (express) services with ist daher eine Auswahl zwischen P und R vorzunehmen.
high brake performances
BrakeType 4 G+E: brake position G with additional druckluftbediente Güterzugbremse (G) in Verbindung mit elektrodynamischer n/a
brake=electro-dynamic brake Bremse (beim Tfz)
BrakeType 5 G+H: brake position G with additional druckluftbediente Güterzugbremse (G) in Verbindung mit hydrodynamischer n/a
brake=hydro-dynamic brake Bremse (beim Tfz)
BrakeType 6 P+E: brake position P with additional druckluftbediente Personenzugbremse (P) in Verbindung mit elektrodynami- n/a
brake=electro-dynamic brake scher Bremse (beim Tfz)
BrakeType 7 P+H: brake position P with additional druckluftbediente Personenzugbremse (P) in Verbindung mit hydrodynami- n/a
brake=hydro-dynamic brake scher Bremse (beim Tfz)
BrakeType 8 P+Mg: brake position P with additional druckluftbediente Personenzugbremse (P)in Verbindung mit Magnetschienen- Ja
brake=magnetic track brake bremse (P+MG)
BrakeType 9 R+E: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit n/a
brake=electro-dynamic brake elektrodynamischer Bremse (beim Tfz)
BrakeType 10 R+H: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit n/a
brake=hydro-dynamic brake hydrodynamischer Bremse (beim Tfz)
BrakeType 11 R+Mg: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit Ja
brake=magnetic track brake Magnetschienenbremse (R+MG)
BrakeType 12 R+WB: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit Ja
brake=eddy current brake (German: Wir- Wirbelstrombremse (R+WB)
belstrombremse)
BrakeType 13 R+E+Mg: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit n/a
brake=electro-dynamic brake and magnetic Magnetschienenbremse (R+MG) und elektrodynamischer Bremse (beim Tfz)
track brake
BrakeType 14 R+E+WB: brake position R with additional Schnellwirkende druckluftbediente Personenzugbremse (R) in Verbindung mit n/a
brake=electro-dynamic brake and eddy Wirbelstrombremse (R+WB) und elektrodynamischer Bremse (beim Tfz)
current brake
CommercialTrafficType 46 Day car train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 47 Car sleeper train, motor rail (CST) Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 48 Unaccompanied car service, motor rail Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 49 EkspresIC Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 50 EC Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 51 ICE Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 52 AVE Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 53 Eurostar Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 54 Talgo Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 62 Suburban service Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 63 Intercity Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 64 Hotel train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 65 Hydrofoil Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 66 Inter City Lyn Codierung wird von DB InfraGO nicht genutzt n/a
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 104

## Seite 105

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
CommercialTrafficType 67 Inter-regional Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 68 International Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 69 Express Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 70 Euro Night Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 71 HST Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 72 TRN Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 73 TGV Sud-Est Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 74 TGV Atlantique Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 75 TGV Nord Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 76 LYRIA Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 77 TGV Duplex Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 78 TGV Nuit Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 79 TGV Est Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 80 TGV Interconnexion Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 82 Thalys Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 83 Hovercraft Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 84 Regional Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 85 Wilhelm Tell Express Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 86 City Night Line Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 87 Pendolino Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 88 RER Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 89 ALV Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 90 AVN Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 91 TER Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 92 REG Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 93 FB Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 94 Supercity Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 96 InterCityNotte Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 97 GB Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 98 Eurostar Italia Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 99 Funicular Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 100 Airport train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 101 Night train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 102 Touristic train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 104 Artesia Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 105 Artesia de nuit Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 107 Historical train, steam engine train ja
CommercialTrafficType 108 IRE Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 109 RB Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 110 RE Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 111 RT Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 112 Shinkansen Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 113 Talgo 200 Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 114 EUR Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 115 ALR Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 116 ALT Codierung wird von DB InfraGO nicht genutzt n/a
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 105

## Seite 106

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
CommercialTrafficType 117 ARC Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 118 TEOZ Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 119 S-Bahn Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 120 ICN Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 121 TGV Duplex de Nuit Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 122 keine Angabe Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 123 keine Angabe Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 126 ARZ Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 127 Train de Nuit Corail Lunea Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 128 ELP Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 129 ELP Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 153 Sonderzug Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 154 InterCityRapid Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 155 InterPici Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 157 Fast train Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 158 Euregio Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 159 IC Ersatzbus Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 160 IP Ersatzbus Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 161 TGV France - Allemagne Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 162 Replacement bus Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 163 Lyria Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 164 ES Fast Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 165 ES AV Fast Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 170 YHT Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 171 FA Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 172 FR Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 173 AP Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 174 BEX Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 175 GEX Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 176 GP Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 200 TGV-France Luxembourg Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 202 ICE-Allemagne France Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 203 ÖBB-NIGHTLINE Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 204 Eurostar Italia AV Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 205 Intercity Plus Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 206 Riviera Day Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 207 Riviera Night Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 208 Eurostar City Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 209 Rail Jet Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 210 Fyra Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 212 City Night Line (D) Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 213 DB Autozug Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 214 Berlin-Warszawa-Express Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 215 NMBS Nachtzug Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 216 Precios Mercado Codierung wird von DB InfraGO nicht genutzt n/a
CommercialTrafficType 219 TGV Codierung wird von DB InfraGO nicht genutzt n/a
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 106

## Seite 107

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
CommercialTrafficType 222 City Night Line Transferbus Codierung wird von DB InfraGO nicht genutzt n/a
JourneyLocationTypeCode 01 Origin Startbetriebsstelle Wird ausschließlich zur Kennzeichnung der tatsächlichen Ja
Start-Btrst des Zuglaufs verwendet.
JourneyLocationTypeCode 02 Intermediate Zwischen-(Unterwegs-)Betriebsstelle Wird bei allen ZLP/TLP verwendet, für die keine der anderen Ja
Codierungen zutreffend ist.
JourneyLocationTypeCode 03 Destination Zielbetriebsstelle Wird ausschließlich zur Kennzeichnung der tatsächlichen Ja
Ziel-Btrst des Zuglaufs verwendet.
JourneyLocationTypeCode 04 Handover Übergabebetriebsstelle zwischen zwei am Zuglauf beteiligten EIU. Es handelt Kann an einem vom EVU bestellten ZLP angegeben werden, Ja
sich dabei grundsätzlich um die erste bzw. letzte Betriebsstelle eines Zuglaufs sofern zutreffend; ist festgelegt durch die zwischen zwei be-
bzw. einer Zugtrasse innerhalb des Konstruktionsbereiches eines EIU nachbarten EIU getroffene Vereinbarung hinsichtlich der Zu-
ständigkeit für die Fahrplankonstruktion
JourneyLocationTypeCode 05 Interchange Übergabebetriebsstelle zwischen zwei am Zuglauf beteiligten EVU. Ja
JourneyLocationTypeCode 06 Handover and Interchange Übergabebetriebsstelle als Kombination der Ausprägungen 04 und 05. Angabe muss an einem vom EVU bestellten Verkehrshalt er- Ja
folgen
JourneyLocationTypeCode 07 State Border Politische Staatsgrenze Die betreffenden Betriebsstellen sind der Stammdatenliefe- Ja
rung zu entnehmen. Die politische Staatsgrenze hat im Tras-
senbestell- und zuweisungsprozess keine besondere Bedeu-
tung und muss nicht angegeben werden.
JourneyLocationTypeCode 08 None Ohne In der Kommunikation mit DB InfraGO ist dieser Wert nicht n/a
zu verwenden.
JourneyLocationTypeCode 09 Network border Infrastrukturgrenze/Netzgrenze Die Netzgrenze ist immer dann zusätzlich anzugeben, wenn Ja
der ZLP/TLP nicht identisch mit dem angegebenen Hando-
ver-Point (Code 04 oder 06) ist.
JourneyLocationTypeCode 99 Mutually Defined Mehrfache Bedeutung/sonstige Betriebsstelle n/a
LocationPrimaryCode Kodierung einer Betriebsstelle; wird national vergeben und ist in Verbindung 1. Ausprägungen siehe Stammdaten Kapitel 4.3.1
mit dem CountryCodeISO immer eindeutig.
2. Die gültigen Ausprägungen sind auch in der "Common Re-
ference Database (CRD)" für Countries, Companies und Loca-
tions hinterlegt
LocationSubsidiaryTypeCode Aus der Liste der definierten SubsidiaryLocationTypeCodes können in der
Kommunikation mit DB InfraGO die nachfolgenden Codes verwendet werden.
LocationSubsidiaryTypeCode 01 Track Gleis Bei Nutzung dieses Codes können im Element SubsidiaryLo- Ja
cationCode der Code eine Gleisnummer/Gleisbezeichnung
und im Element SubsidiaryLocationName ein Name/weitere
Bezeichnung angegeben werden. Das Feld kann wie folgt ge-
nutzt werden:
1. Zur Angabe einer Gleisgruppe Einfahrt/ Ausfahrt, wenn
diese nicht durch die Angabe einer eigenständigen Betriebs-
stelle = PrimaryLocation (z. B. Bahnhofsteil) beschreibbar ist,
sowie für besonderes Streckengleis.
2. Die Angabe bezieht sich bei Abgangsbahnhöfen, bei Hal-
ten an einem Unterwegsbahnhof bzw. bei einer Durchfahrt
auf das Abfahrtsgleis und bei Ankunftsbahnhöfen auf das
Ankunftsgleis.
3. Die Angabe ist optional und unverbindlich und nur bei Ge-
schäftsvorfällen des Produktes „Trasse“ zulässig.
4. Voraussetzung für die Nutzung dieses SLTC ist die Hinter-
legung der LocationSubsidiaryCodes in der CRD.
LocationSubsidiaryTypeCode 03 BorderPointCode Grenzpunkt Bezeichnung eines Grenzpunktes für kommerzielle Zwecke. Ja
Der einer PL zugeordnet ist. Der Punkt muss nicht identisch
mit dem tatsächlichen Grenzpunkt einer Netzgrenze oder
(politischen) Staatsgrenze sein oder dem Handover-Point
entsprechen. Die Angabe wird ggf. zur Unterstützung von
Meldungen in HERMES oder TIS genutzt.
LocationSubsidiaryTypeCode 06 PublicLoadingPoint Öffentliche Ladestelle/Öffentlicher Gleisanschluss Öffentliche Ladestelle/Öffentlicher Gleisanschluss innerhalb Ja
der PL oder der PL zugeordnet.
LocationSubsidiaryTypeCode 07 PrivateLoadingPoint Private Ladestelle/Privater Gleisanschluss Private Ladestelle/Privater Gleisanschluss innerhalb der PL Ja
oder der PL zugeordnet.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 107

## Seite 108

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
LocationSubsidiaryTypeCode 41 CompanySpecificIdentifier RiL100-Code. Bei Nutzung dieses Codes können im Element SubsidiaryLo- Ja
cationCode (max 5 Stellen) die für das Netz der DB definierte
RiL 100-Bezeichnung (in CRD hinterlegt) und im Element Lo-
cationSubsidiaryName der zugehörige Name angegeben
werden.
LocationSubsidiaryTypeCode 57 Intermodal Terminal Terminal (Container-Umschlagterminal, Terminal des kombinierten Verkehrs Die Kodierung kann zur Kennzeichnung eines Terminals ver- Ja
oder der DUSS etc.) wendet werden, wenn dieses nicht selbst eine PrimaryLoca-
tion, sondern nur Teil einer PrimaryLocation ist.
MessageStatus 1 Creation (Neu-)Erstellung einer Nachricht eines konkreten Nachrichtentyps (Geschäfts- In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
vorfalls). erst im Kontext mit den Angaben zu den Nachrichtenattribu-
ten „TypeOfRequest“ und „TypeOfInformation“.
MessageStatus 2 Modification Modification zu einer bereits übergebenen Nachricht des gleichen Nachrich- In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
tentyps bzw. zum gleichen Objekt erst im Kontext mit den Angaben zu den Nachrichtenattribu-
ten „TypeOfRequest“ und „TypeOfInformation“.
MessageStatus 3 Deletion Löschung bzw. Abmeldung einer bereits übergebenen Nachricht des gleichen In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
Nachrichtentyps. erst im Kontext mit den Angaben zu den Nachrichtenattribu-
ten „TypeOfRequest“ und „TypeOfInformation“.
MessageType 2001 PathCanceledMessage Stornierung einer Trasse In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
erst im Kontext mit den Angaben zu den Nachrichtenattribu-
ten „TypeOfRequest“ und „TypeOfInformation“. bzw. der
Geschäftsvorfallfolge
MessageType 2002 PathConfirmedMessage Annahme eines Trassenangebots Ja
MessageType 2003 PathDetailsMessage Trassenangebot; Ergebnis einer FZB, KFB bzw. FPS Die konkrete fachliche Bedeutung ergibt sich im Kontext des Ja
gewählten Produktes.
MessageType 2004 PathDetailsRefusedMessage Ablehnung, Ablehnung mit Überarbeitung bzw. Berechtigte Beanstandung zu In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
einem Trassenangebot; Ablehnung eines Ergebnisses für eine FZB, KFB oder bzw. Zulässigkeit der Nutzung erst im Kontext mit den Anga-
FPS ben zu den Nachrichtenattributen „TypeOfRequest“ und „Ty-
peOfInformation“ und dem gewählten Produkt.
MessageType 2005 PathNotAvailableMessage Netzausgelöste Stornierung einer Trasse Ja
MessageType 2006 PathRequestMessage Erstanmeldung einer Trasse, KFB, FZB oder FPS, einer Änderung vor Angebots- In einigen Fällen ergibt sich die exakte fachliche Bedeutung Ja
abgabe oder einer Änderung nach Vertragsschluss. bzw. Zulässigkeit der Nutzung erst im Kontext mit den Anga-
ben zu den Nachrichtenattributen „TypeOfRequest“ und „Ty-
peOfInformation“ und dem gewählten Produkt.
MessageType 2007 ReceiptConfirmationMessage Fachliche Empfangsbestätigung einer Nachricht. Ja
MessageType 9000 ErrorMessage Wird vom Empfänger übermittelt, wenn eine vorab empfangene Nachricht Ja
durch den Empfänger nicht verarbeitet werden kann
MessageType 1000 ConsignmentOrderMessage ConsignmentOrderMessage n/a
MessageType 3001 TrainAcceptedMessage TrainAcceptedMessage n/a
MessageType 3002 TrainAtStartMessage TrainAtStartMessage n/a
MessageType 3003 TrainCompositionMessage TrainCompositionMessage n/a
MessageType 3004 TrainNotSuitableMessage TrainNotSuitableMessage n/a
MessageType 3005 TrainPositionMessage TrainPositionMessage n/a
MessageType 3006 TrainReadyMessage TrainReadyMessage n/a
MessageType 4001 TrainDelayCauseMessage TrainDelayCauseMessage n/a
MessageType 4002 TrainDelayPerformanceMessage TrainDelayPerformanceMessage n/a
MessageType 4003 TrainForecastAtReportingLocationMessage TrainForecastAtReportingLocationMessage n/a
MessageType 4004 TrainRunningForecastMessage TrainRunningForecastMessage n/a
MessageType 4005 TrainRunningInformationMessage TrainRunningInformationMessage n/a
MessageType 4006 TrainRunningInterruptionMessage TrainRunningInterruptionMessage n/a
MessageType 5001 AlertMessage AlertMessage n/a
MessageType 5002 WagonArrivalNoticeMessage WagonArrivalNoticeMessage n/a
MessageType 5003 WagonDeliveryNoticeMessage WagonDeliveryNoticeMessage n/a
MessageType 5004 WagonDepartureNoticeMessage WagonDepartureNoticeMessage n/a
MessageType 5005 WagonDeviationMessage WagonDeviationMessage n/a
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 108

## Seite 109

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
MessageType 5006 WagonETI_ETA_Message WagonETI_ETA_Message n/a
MessageType 5007 WagonExceptionMessage WagonExceptionMessage n/a
MessageType 5008 WagonExceptionReasonMessage WagonExceptionReasonMessage n/a
MessageType 5009 WagonInterchangeNoticeMessage WagonInterchangeNoticeMessage n/a
MessageType 5010 WagonInterchangeSubNoticeMessage WagonInterchangeSubNoticeMessage n/a
MessageType 5011 WagonOrderMessage WagonOrderMessage n/a
MessageType 5012 WagonReceivedAtInterchangeMessage WagonReceivedAtInterchangeMessage n/a
MessageType 5013 WagonRefusedAtInterchangeMessage WagonRefusedAtInterchangeMessage n/a
MessageType 5014 WagonReleaseNoticeMessage WagonReleaseNoticeMessage n/a
MessageType 5015 WagonYardArrivalMessage WagonYardArrivalMessage n/a
MessageType 5016 WagonYardDepartureMessage WagonYardDepartureMessage n/a
MessageType 6001 IRN_DatasetMessage IRN_DatasetMessage n/a
MessageType 6002 LocationFileDatasetMessage LocationFileDatasetMessage n/a
MessageType 6003 RollingStockDatasetMessage RollingStockDatasetMessage n/a
MessageType 6004 RollingStockDatasetQueryMessage RollingStockDatasetQueryMessage n/a
MessageType 8500 UpdateLinkMessage UpdateLinkMessage Ja
MessageType 8501 ObjectInfoMessage ObjectInfoMessage Ja
ObjectType TR ReferenceTrain Objekttyp der ReferenceTRID Ja
ObjectType PR PathRequest Objekttyp der PathRequestID Ja
ObjectType PA Path Objekttyp der PathID Ja
ObjectType CR CaseReference Objekttyp der CaseReferenceID Ja
ProcessType 0 New Path Request and allocation process Erste Phase des Anmeldeprozesses zum Netzfahrplan Das Attribut ProcessType wird vorerst in der Kommunikation n/a
for annual timetable mit DB InfraGO nicht verwendet.
ProcessType 1 Late Path Request and allocation process Zweite Phase des Anmeldeprozesses zum Netzfahrplan Das Attribut ProcessType wird vorerst in der Kommunikation n/a
for annual timetable mit DB InfraGO nicht verwendet.
ProcessType 2 ad hoc path request and allocation process Gelegenheitsverkehr inkl. kurzfristiger (ad-hoc) Gelegenheitsverkehr Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 3 Rolling Planning path request and alloca- Gelegenheitsverkehr (Rolling planning) Das Attribut ProcessType wird vorerst in der Kommunikation n/a
tion process mit DB InfraGO nicht verwendet.
ProcessType 4 Feasibility Study process Machbarkeitsstudie Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 5 Path Modification process (triggered by ap- Trassenänderungsprozess (ausgelöst durch das EVU) Das Attribut ProcessType wird vorerst in der Kommunikation n/a
plicant) mit DB InfraGO nicht verwendet.
ProcessType 6 Path Alteration process (triggered by IM) Trassenänderungsprozess (ausgelöst durch das EIU) Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 7 Pre-arranged Path publication Veröffentlichung von Pre arranged paths (PaP) durch RFC Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 8 Catalogue Path publication Veröffentlichung von vorkonstruierten Trassen (Katalogtrassen) durch ein EIU Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 10 Path Cancellation process Trassenstornierungsprozess Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ProcessType 11 Path Utilisation notification process Trassenreserivierungsprozess Das Attribut ProcessType wird vorerst in der Kommunikation n/a
mit DB InfraGO nicht verwendet.
ReasonOfReference 1000 Identische Trassierung wie für angegebe- Kunde wünscht (falls möglich) die gleiche oder weitestgehend ähnliche Tras- Es ist die PathRequestID des PathRequests anzugeben, des- Ja
nen PR gewünscht sierung wie für den angegebenen PathRequest sen Trassierung als Vorlage für eine gleiche/ähnliche Trassie-
rung genutzt werden soll
ReasonOfReference 1001 Identische Trassierung wie für angegebe- Kunde wünscht (falls möglich) die gleiche oder weitestgehend ähnliche Tras- Es ist die ID des Zuges oder der Trasse anzugeben, dessen Ja
nen Zug/Trasse gewünscht sierung wie für den angegebenen Zug bzw. die angegebene Trasse Trassierung als Vorlage für eine gleiche/ähnliche Trassierung
genutzt werden soll
ReasonOfReference 1002 Vollständiger Ersatz der referenzierten (ge- Das übergebene netzausgelöste Angebot ersetzt die referenzierte (gebuchte) Wird nur in der PathDetailsMessage genutzt Ja
buchten) Trasse Trasse vollständig.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 109

## Seite 110

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
ReasonOfReference 1003 Teilweiser Ersatz der referenzierten (ge- Das übergebene netzausgelöste Angebot ersetzt die referenzierte (gebuchte) Wird nur in der PathDetailsMessage genutzt Ja
buchten) Trasse Trasse teilweise.
ReasonOfReference 1004 Referenz auf den Nebenlauf eines Y-Zug- Die aktuelle PathRequestMessage beschreibt den Hauptlauf eines Y-Zugver- Ja
verbundes bundes. Die angegebenen Referenzen verweisen auf den oder die zugeordne-
ten Nebenläufe (PathRequestMessages), d. h. die Züge die mit dem Zug des
Hauptlaufs zusammengeführt oder von diesen getrennt werden.
ReasonOfReference 1005 Referenz auf den Hauptlauf eines Y-Zugver- Die aktuelle PathRequestMessage beschreibt den Nebenlauf eines Y-Zugver- Ja
bundes bundes. Die angegebene Referenz verweist auf den Hauptlauf, d. h. den Zug,
mit dem er angegebene Zug zusammengeführt oder von diesem getrennt
wird.
ReasonOfReference 1006 Referenz auf weitere PathRequestMessage Referenz auf eine weitere PathRequestMessage für den Gesamtzuglauf nach Ja
nach Durchfahren fremder Infrastruktur Durchfahren eines Abschnitts im Netz eines anderen Infrastrukturbetreibers(s.
Anlage 8, Kap 2.4) Die verknüpften PathRequests müssen Teil eines Refe-
renceTrains sein. (Anlage 3 und Anlage 8 zuinnerdeutschen Anteilen beach-
ten)
ReasonOfReference 1007 Referenz auf weitere PathRequestMessage Referenz auf eine weitere PathRequestMessage für den Gesamtzuglauf vor Ja
vor Durchfahren fremder Infrastruktur Durchfahren eines Abschnitts im Netz eines anderen Infrastrukturbetreibers,
(s. Anlage 8, Kap 2.4). Die verknüpften PathRequests müssen Teil eines Refe-
renceTrains sein. (Anlage 3 und Anlage 8 zuinnerdeutschen Anteilen beach-
ten)
ReasonOfReference 1008 Referenz auf weitere Angebote für die glei- Hinweis auf die Existenz weiterer Angebote für die gleiche PathRequestMes- Wird nur in der PathDetailsMessage genutzt Ja
che PathRequestMessage sage durch Angabe von deren PathID
ReasonOfReference 1009 Hinweis auf Fortsetzung einer Trasse nach Der aktuelle Zug/die aktuelle Trasse ist eine Fortsetzung der angegebenen Nur Nutzung im unterjährigen Gelegenheitsverkehr, Verwen- Ja
SEV Trasse vor einem SEV dung im Rahmen des ujBau Prozesses
ReasonOfReference 1010 Referenz auf einen zu nutzenden PreArran- Referenz auf einen PreArrangedPath (PAP), der durch die Trassenanmeldung Darf nur in PathRequestMessages für Anmeldungen zum Ja
gedPath (PAP) zum Netzfahrplan genutzt werden soll. Netzfahrplan angegeben werden.
ReasonOfReference 1011 Nur Änderung der ReferenceTRID ohne Wird im Änderungsprozess genutzt, um für eine gebuchte Trasse die Refe- Sofern die neue ReferenceTRID nicht für alle Verkehrstage Ja
Neukonstruktion renceTRID zu ändern, wenn auf Grund einer Änderung am Zugobjekt eine der bisherigen Trasse gilt, erfolgt eine Splittung der bisheri-
neue ReferenceTRID erforderlich wird. Die Änderung am Zugobjekt hat keinen gen Trasse und die Übergabe einer neuen Trasse für diese
Einfluss auf die bisher gebuchte Trasse, erfordert keine Änderung an der Verkehrstage mit TOI = booked.
Trasse und keine Neukonstruktion.
ReasonOfReference 1012 Verändertes Trassenangebot nach VNP Übergabe eines veränderten Trassenangebots anstelle eines ENP zum VNP Nur Nutzung im Netzfahrplanbearbeitungsprozess Ja
nach Bearbeitung einer berechtigten Beanstandung bzw. netzausgelösten be-
rechtigten Beanstandung
ReasonOfReference 1013 Referenz auf die bisherige gebuchte Trasse Angabe der PathID der Trasse, die durch die vom ResponsibleApplicant ge- Nur Nutzung in der PathDetailsMessage nach einer Trassen- Ja
bzw. RV-Kapazität, die ganz oder teilweise wünschte Trassenänderung ersetzt wird. änderungen durch den ResponsibleApplicant.
auf Grund einer vom ResponsibleApplicant
gewünschten Änderung der Trasse bzw.
RV-Kapazität ersetzt wurde.
ReasonOfReference 1014 Neue Route Auf Grund von temporären Änderungen von Startbf und/oder Zielbf und/oder Für das bisherige Routenobjekt (Beibehaltung der bisherigen Ja
Handover-point wird das bisherige Routenobjekt aufgesplittet. Die Informa- RouteID) erfolgt eine Reduzierung der Verkehrstage, für die
tion über die neue Route bzw. deren Zuordnung zu einer gebuchten Trasse reduzierten Verkehrstage wird ein neues Routenobjekt
wird mit einer OIM oder PRM mitgeteilt. (neue RouteID) erzeugt. Das neue Routenobjekt hat keinen
Einfluss auf die gebuchte Trasse, daher ist keine Neukon-
struktion, sondern lediglich eine veränderte Referenzierung
nach Aufsplittung der bisherigen gebuchten Trasse erforder-
lich.
ReasonOfReference 1015 Aktualisierung der Route Auf Grund von temporären Änderungen von Startbf und/oder Zielbf und/oder Das Routenobjekt (Beibehaltung der bisherigen RouteID) Ja
Handover-point wird das bisherige Routenobjekt bei unveränderten Verkehrs- wird aktualisiert, hat aber keinen Einfluss auf die gebuchte
tagen aktualisiert. Die Information über die geänderte Route wird mit einer Trasse, daher ist keine Neukonstruktion, sondern lediglich
OIM oder PRM mitgeteilt. eine Aktualisierung der Daten der Route erforderlich.
ReasonofReference 1016 Referenz auf eine PathRequestMessage aus Wird eine neue PRM erstellt, die als Konsequenz aus der pre-booking Phase Ja
der Pre-booking Phase durch C-OSS entstanden ist, ist die ursprüngliche PRID zu referenzieren
ReasonOfReference DE01 Referenz auf eine Tfz-fahrt oder einen Die angegebene ReferenceTRID verweist auf eine bei der Trassenkonstruktion, Ja
Leerzug vor oder nach dem aktuellen Zug zu berücksichtigende Tfz-Fahrt oder einen Leerzug vor oder nach der bestell-
ten Trasse
ReasonOfReference DE02 Referenz auf einen Vollzug Die angegebene ReferenceTRID verweist auf einen Vollzug, zu welchem die Ja
bestellte Trasse im Vor- oder Nachlauf bei der Trassenkonstruktion zu berück-
sichtigen ist.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 110

## Seite 111

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
ReasonOfReference DE03 Referenz auf weitere PathRequestMessage Hinweis auf weitere PathRequestMessage, die im Zusammenhang mit der Ja
Konstruktion der aktuellen Trasse zu berücksichtigen sind.
ReasonOfReference DE04 Ersatzzug für den angegebenen Zug bzw. Durch die aktuelle Trassenbestellung wird der angegebene Zug bzw. dessen Nur Nutzung im unterjährigen Gelegenheitsverkehr. Ja
Trasse Trasse ganz oder teilweise ersetzt und als Ersatzzug gefahren.
ReasonOfReference DE05 Nutzung Buchungsoption für KFB-Ergebnis Referenz auf ein ausgewähltes Ergebnis der KFB, für welches die Buchungsop- Nur Nutzung bei gleichzeitiger Angabe des TOI 19 pre-accep- Ja
tion (Umwandlung in eine gebuchte Trasse) genutzt werden soll. ted offer
ReasonOfReference DE06 Nutzung der gleichen Zugnummer wie für Wunsch des ResponsibleApplicant, die gleiche Zugnummer (OTN) wie für den Die Nutzung der gleichen Zugnummer ist nur bei Zügen mög- Ja
angegebenen Zug/PathRequest angegebenen ReferenceTrain/PathRequest zu nutzen. lich, die sich nur geringfügig in ihren Angaben an bestimm-
ten Verkehrstagen unterscheiden (z. B. Laufwegeinkürzun-
gen im Bereich der DB InfraGO, geringfügige Abweichungen
bzgl. von TrainActivity-Angaben an bestimmten VT) und der
gleichen Zugart (TrainType) zugeordnet sind. Siehe auch Do-
kument „Schnittstellendokumentation EVU-Schnittstelle Be-
stellsystem“ (Hauptdokument) Kapitel 4.4.
ReasonOfReference DE07 PathID einer RV-Kapazität Angabe der PathID einer referenzierten RV-Kapazität eines Rahmenvertrages In der Trassenbestellung zum Netzfahrplan: Angegebene Pa- Ja
thID referenziert eine zu nutzende RV-Kapazität eines beste-
henden Rahmenvertrages.
Im Trassenangebot: Angabe der bei der Trassenkonstruktion
berücksichtigten RV-Kapazität eines Rahmenvertrages.
Severity 1 Warning Warnung n/a
Severity 2 Error Fehler Ja
TimingQualifierCode ALA Actual Location Arrival Konstruierte Ankunftszeit Ja
TimingQualifierCode ALD Actual Location Departure Konstruierte Abfahrtszeit/Durchfahrtszeit Ja
TimingQualifierCode ELA Earliest Location Arrival Früheste gewünschte Ankunftszeit Ja
TimingQualifierCode ELD Earliest Location Departure Früheste gewünschte Abfahrtszeit/Durchfahrtszeit Ja
TimingQualifierCode LLA Latest Location Arrival Späteste gewünschte Ankunftszeit Ja
TimingQualifierCode LLD Latest Location Departure Späteste gewünschte Abfahrtszeit/Durchfahrtszeit Ja
TimingQualifierCode PLA Public Location Arrival Zu veröffentlichende Ankunftszeit bzw. Bahnsteigankunftszeit Ja
TimingQualifierCode PLD Public Location Departure Zu veröffentlichende Abfahrtszeit bzw. Bahnsteigabfahrtszeit Ja
TimingQualifierCode ERT Earliest Run Through Früheste gewünschte Durchfahrt Verwendung für die DB InfraGO AG wird noch geprüft n/a
TimingQualifierCode LRT Latest Run Through Späteste gewünschte Durchfahrt Verwendung für die DB InfraGO AG wird noch geprüft n/a
TimingQualifierCode ART Actual Run Trough Trassierte Durchfahrt Verwendung für die DB InfraGO AG wird noch geprüft n/a
TractionMode TractionMode besteht aus einer zweistelligen Zahl. ff Ja
Die erste Stelle gibt die Rolle des Triebfahrzeugs und dessen Position im Zug-
verband an.
Die zweite Stelle gibt die lfd. Nr. des Triebfahrzeugs im Zugverband für die
durch die erste Stelle beschriebene Rolle an.
Das Attribut muss immer zweistellig angegeben werden.
TractionMode 1? Train traction Zuglok (auch für Vorspannlok bzw. Tfz. der Doppeltraktion; immer für Trieb- In Verbindung mit dem Wendezugkennzeichen (Attribut Ja
zug- und Triebwageneinheiten). „PushPullTrain“) mit der Ausprägung „true“ muss am Zu-
gende ein Steuerwagen oder ein weiteres, von der Zuglok
gesteuertes Tfz vorhanden sein.
TractionMode 2? Intermediate traction Mittellok Der TractionMode 2x wird vorzugsweise zur Angabe einer Ja
weiteren Zuglok im Zugverband in Verbindung mit einem Tfz
mit TractionMode 1x und/oder 5x genutzt.
Die Nutzung zur Angabe der einzigen Zuglok im Zugverband
ist nur statthaft, wenn sich an beiden Zugenden ein Steuer-
wagen befindet. Die Angabe des Wendezugkennzeichens
(Attribut „PushPullTrain“) mit der Ausprägung „true“ ist in
diesem Fall verpflichtend.
TractionMode 3? Banking locomotive Schiebelok gekuppelt Zusätzliches Tfz in Verbindung mit mindestens einer Zuglok Ja
mit TractionMode 1x
TractionMode 4? Banking locomotive not coupled Schiebelok ungekuppelt Zusätzliches Tfz in Verbindung mit mindestens einer Zuglok Ja
mit TractionMode 1x
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 111

## Seite 112

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
TractionMode 5? No Leading Engine Tfz als Zuglok Regelbespannung am Ende des Zuges (nicht führend) Es handelt sich um einen lokbespannten Zug mit einer vom Ja
Steuerwagen/einem anderen Tfz an der Zugspitze gesteuer-
ten Zuglok am Zugende.
TractionMode ?1 1st traction unit in the group 1. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung Zulässig für die Rollen 1, 2, 3, 4 und 5 Ja
bzw. –Rolle
TractionMode ?2 2nd traction unit in the group 2. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung Zulässig für die Rollen 1, 2, 3 und 5 Ja
bzw. –Rolle
TractionMode ?3 3rd traction unit in the group 3. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung Zulässig für die Rolle 1 Ja
bzw. –Rolle
TractionMode ?4 4th traction unit in the group 4. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung In der Kommunikation mit DB InfraGO nicht zulässig. n/a
bzw. –Rolle
TractionMode ?5 5th traction unit in the group 5. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung In der Kommunikation mit DB InfraGO nicht zulässig. n/a
bzw. –Rolle
TractionMode ?6 6th traction unit in the group 6. Tfz. in der durch die erste Ziffer beschriebenen Ausprägung der Tfz-Stellung In der Kommunikation mit DB InfraGO nicht zulässig. n/a
bzw. –Rolle
TractionMode 11 Zuglok Regelbespannung immer verwendet bei Triebzug- und Triebwageneinheiten Ja
TractionMode 12 Zuglok Regelbespannung (Doppeltraktion) oder 1. Vorspannlok (als Zusatzbe- immer verwendet bei Triebzug- und Triebwageneinheiten Ja
spannung)
TractionMode 13 2. Vorspannlok (als Zusatzbespannung) Ja
TractionMode 21 Mittellok als Regelbespannung Ja
TractionMode 22 Mittellok als 1. Zusatzbespannung Ja
TractionMode 31 1. Schiebelok gekuppelt (als Zusatzbespannung zur Zuglok Regelbespannung Ja
an der Zugspitze)
TractionMode 32 2. Schiebelok gekuppelt (als Zusatzbespannung zur Zuglok Regelbespannung Im Netz der DB sind max. 2 gekuppelte Schiebeloks zulässig. Ja
an der Zugspitze)
TractionMode 41 1. Schiebelok ungekuppelt (als Zusatzbespannung zur Zuglok Regelbespan- Im Netz der DB ist nur eine ungekuppelte Schiebelok zuläs- Ja
nung an der Zugspitze) sig. Weitere Ausprägungen der Rolle 4x dürfen daher nicht
angewendet werden.
TractionMode 51 1. Tfz. als Regelbespannung am Ende des Zuges mit Steuerwagen an der Zug- Ja
spitze; wird nur bei Wendezügen des Personenverkehrs verwendet
TractionMode 52 2. Tfz. als Regelbespannung (Doppeltraktion) am Ende des Zuges mit Steuer- Ja
wagen an der Zugspitze; wird nur bei Wendezügen des Personenverkehrs ver-
wendet
TrafficTypeCode 10 Interregional Interregionaler Zug n/a
TrafficTypeCode 11 Regional Regionaler Zug n/a
TrafficTypeCode 12 (sub)Urban Städteverkehr n/a
TrafficTypeCode 13 Night train Nachtzug n/a
TrafficTypeCode 14 Motor rail Schienenbus n/a
TrafficTypeCode 15 Mountain train Bergbahn n/a
TrafficTypeCode 16 Historic Train Nostalgiezug Ist als zusätzliche Angabe zur Verkehrsart des Kunden bei Ja
Museumszügen anzugeben
TrafficTypeCode 31 Coach group Wagengruppe n/a
TrafficTypeCode 32 Bus Bus n/a
TrafficTypeCode 33 Ship Schiff n/a
TrafficTypeCode 34 Ordered and shared taxi Anrufsammeltaxi n/a
TrafficTypeCode 35 Tram Tram n/a
TrafficTypeCode 36 Underground U-Bahn n/a
TrafficTypeCode 8 high speed train Hochgeschwindigkeitsverkehr n/a
TrafficTypeCode 9 Intercity Intercity n/a
TrainCC_System 7 CIR 1 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit LZB Ja
CIR-ELKE I
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 112

## Seite 113

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
TrainCC_System 8 CIR 1+2 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit LZB Ja
CIR-ELKE I+II
TrainCC_System 9 CIR 2 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit LZB Ja
CIR-ELKE II
TrainCC_System 14 EFA Die Angabe des Codes bedeutet, dass alle angegebenen Triebfahrzeuge und Die Angabe ist nur für konstruktionsrelevante ZLP innerhalb Ja
der Steuerwagen (sofern vorhanden) über eine elektronische Führerstandan- des Netzes der DB InfraGO verbindlich.
zeige verfügen
Bei den Produkten FZB und FPS ist die Angabe nicht relevant.
Der Buchfahrplan kann in elektronischer Form zur Ausgabe auf einer elektro-
nischen Führerstandanzeige bereitgestellt werden.
Erfolgt keine Angabe des Codes kann der Buchfahrplan nur in gedruckter Form
bereitgestellt werden.
TrainCC_System 17 ETCS L2 SRS 2.3.0d Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit ETCS Ja
Level 2 Version 2.3.0d
TrainCC_System 18 ETCS L2 SRS 3.3.0 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit ETCS Wurde zurückgezogen. Ist in Deutschland keine zulässige n/a
Level 2 Version 3.3.0 Fahrzeugausrüstung
TrainCC_System 19 ETCS L2 SRS 3.4.0 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit ETCS Ja
Level 2 Version 3.4.0
TrainCC_System 20 ETCS L2 SRS 3.6.0 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit ETCS Ja
Level 2 Version 3.6.0
TrainCC_System 40 LZB Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit LZB Ja
(Linienförmige Zugbeeinflussung)
TrainCC_System 44 PZB90 Führendes Tfz und Steuerwagen (sofern vorhanden) sind ausgerüstet mit Ja
PZB90
TrainRadioSystem 1 GSM-R GSM-R Ja
TrainRadioSystem 2 Analogue Radio Analoger Zugfunk n/a
TrainRadioSystem 3 GSM-R without GPRS GSM-R ohne GPRS n/a
TrainRadioSystem 4 GSM GSM n/a
TrainRadioSystem 5 GSM-R with public roaming GSM-R mit public roaming n/a
TrainRadioSystem 6 Analogue - TESLA Analog - TESLA n/a
TrainRadioSystem 7 Analogue - TRS 160MHz Analog - TRS 160MHz n/a
TrainRadioSystem 8 Analogue - TRS 450MHz Analog - TRS 450MHz n/a
TrainRadioSystem 9 Analogue - ASCOM Analog - ASCOM n/a
TrainType 1 Passenger train Reisezug Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 2 Freight train Güterzug Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde” , „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 3 Locomotive train Triebfahrzeugfahrt Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 4 Engineering train Zug für Messungen, Versuchsfahrten etc. Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 5 Emergency train Zug des Notfallmanagements Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 6 Mixed train (passenger and freight train in Gemischter Zug (Personenzug mit Güterbeförderung oder Güterzug mit Perso- Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
combination) nenbeförderung) Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TrainType 0 Other Andere, z. B. Spezialzug/Spezialtransport Verwendung in Übereinstimmung mit NSP “verkehrsArt- Ja
Kunde”, „verkehrsartKundeZusatz“ und angegebener Zug-
gattung zulässig
TypeOfError 1 Functional Fachlicher Fehler Ja
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 113

## Seite 114

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
TypeOfError 2 Technical Technischer Fehler Ja
TypeOfError 0 Both Fachlicher und technischer Fehler Ja
TypeOfImHarmonization 1 Full vollständige Harmonisierung Ja
TypeOfImHarmonization 2 Part Teilweise Harmonisierung Ja
TypeOfInformation 1 harmonisation - in process Harmonisierung in Abstimmung n/a
TypeOfInformation 2 harmonisation - accepted Harmonisierung bestätigt n/a
TypeOfInformation 3 harmonisation - rejected Harmonisierung widerrufen n/a
TypeOfInformation 4 request ready Harmonisierung abgeschlossen Ja
TypeOfInformation 5 path study request Studienanfrage (Trassenstudie, FZB oder FPS) Ja
TypeOfInformation 6 pre-arranged path/reserve capacity Korridor-PAP n/a
TypeOfInformation 7 create offer Erarbeitung eines Angebots n/a
TypeOfInformation 8 coordination update Aktualisierung der Koordination n/a
TypeOfInformation 9 draft offer vorläufiges Angebot Wird ausschließlich in der Netzfahrplanbearbeitungsphase Ja
zur Übermittlung des Vorläufigen Netzfahrplanentwurfs mit
einer PathDetailsMessage genutzt.
TypeOfInformation 10 draft alternative offer Entwurf eines alternativen Angebotes n/a
TypeOfInformation 11 observation - in process Überprüfung in Arbeit n/a
TypeOfInformation 12 observation - complete Überprüfung abgeschlossen n/a
TypeOfInformation 13 preparation of final offer - in process Vorbereitung eines endgültigen Angebots - in Arbeit n/a
TypeOfInformation 14 preparation of final offer - accepted Zwischenstand bei der Vorbereitung eines endgültigen Angebots - angenom- n/a
men
TypeOfInformation 15 preparation of final offer - rejected Zwischenstand bei der Vorbereitung eines endgültigen Angebots - zurückge- n/a
wiesen
TypeOfInformation 16 final offer endgültiges Angebot Ja
TypeOfInformation 17 final offer - accepted endgültiges Angebot bestätigt/angenommen Ja
TypeOfInformation 18 alternative offer accepted Netzausgelöstes (alternatives) Angebot bestätigt/angenommen Ja
TypeOfInformation 19 pre-accepted offer Annahmeerklärung (EVU bestätigt bereits mit der Trassenbestellung die An- Ja
nahme übergebener Angebote)
TypeOfInformation 20 Final offer rejected Ablehnung eines übergebenen Angebots Anstelle des Wertes 20 sind die Werte 25 bis 28 je nach kon- Nein
kretem Anwendungsfall und Aussage zu nutzen.
TypeOfInformation 21 no alternative available Kein Trassenangebot möglich bzw. gebuchte Trasse nicht verfügbar Wird genutzt in Ja
- PathDetailsMessage zur Übermittlung des Geschäfts-
vorfalls „Nichtkonstruierbarkeit“
oder
- PathNotAvailableMessage zur Übermittlung des Ge-
schäftsvorfalls „Netzausgelöste Stornierung“
TypeOfInformation 22 booked Trasse gebucht Ja
TypeOfInformation 23 preparation of draft alternative offer is in Der Entwurf eines netzausgelösten Angebots ist in Bearbeitung Ja
progress
TypeOfInformation 24 alternative offer triggered by IM Netzausgelöstes Angebot Ja
TypeOfInformation 25 Offer/final offer rejected (without revision) Ablehnung eines Angebots (ohne Überarbeitung) Ja
TypeOfInformation 26 Alternative offer rejected (without revi- Ablehnung eines netzausgelösten Angebots (ohne Überarbeitung) Ja
sion)
TypeOfInformation 27 Offer/final offer rejected (revision re- Ablehnung eines Angebots (mit Überarbeitung) Ja
quired)
TypeOfInformation 28 Alternative offer rejected (revision re- Ablehnung eines netzausgelösten Angebots (mit Überarbeitung) Ja
quired)
TypeOfInformation 29 withdrawal Abmeldung einer Trassenbestellung Ja
TypeOfInformation 30 Create Dossier Dossier anlegen n/a
TypeOfInformation 31 Close Dossier Dossier schließen n/a
TypeOfInformation 32 Path canceled full Vollständige Stornierung einer gebuchten Trasse an allen bisherigen Verkehrs- Ja
tagen
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 114

## Seite 115

Attribut Wert TAF-TSI/TAP-TSI Dokumenta- Beschreibung Bemerkungen / Regeln Relevant
tion
TypeOfInformation 33 Path canceled partial Teilweise Stornierung einer gebuchten Trasse an bestimmten bisherigen Ver- Ja
kehrstagen oder nur auf einem Abschnitt der Trasse (Angabe der Start- und
Zielbetriebsstelle des zu stornierenden Trassenabschnittes in der Struktur Af-
fectedSection)
TypeOfInformation 40 Fully Assembled Path (FAP, constructed n/a
path)
TypeOfInformation 42 Preparation of draft offer - accepted Zwischenstand bei der Vorbereitung eines vorläufigen Angebots - angenom- n/a
men
TypeOfInformation 43 Preparation of draft offer - rejected Zwischenstand bei der Vorbereitung eines vorläufigen Angebots - zurückge- n/a
wiesen
TypeOfInformation 44 Draft offer rejected Ablehnung eines vorläufigen Angebots (ohne Überarbeitung) n/a
TypeOfInformation 45 Draft no alternative available Vorläufige Mitteilung, dass kein Trassenangebot möglich ist. n/a
TypeOfInformation 50 activate path (utilisation notification) Aktivierung einer Bedarfstrasse n/a
TypeOfInformation 51 deactivate path (utilisation notification) Abmeldung einer Aktivierung einer Bedarfstrasse n/a
TypeOfInformation 52 confirmation of utilisation notification Bestätigung der Aktivierung einer Bedarfstrasse n/a
TypeOfInformation 53 Path and train cancelled Stornierung von Zug und Trasse n/a
TypeofInformation 54 Pre-booking in progress Pre-Booking durch die C-OSS Manager Verwendung nur in PCS n/a
TypeOfInformation 65 Preparation of alternative offer in progress Der Code wird ausschließlich in einer PathNotAvailableMessage genutzt, wenn Ja
due to route update eine gebuchte Trasse bei der Ausführung des Route-Updateprozesses in zwei
Trassen aufgeteilt wird, um diese der vom LeadRU übermittelten modifizier-
ten bisherigen und der neuen Route zuzuordnen.
TypeOfInformation 66 Booked after route update Der Code wird ausschließlich im Route-Updateprozess bei der Übermittlung Ja
einer PathDetailsMessage verwendet, wenn eine bisher gebuchte Trasse in
zwei Trassen aufgeteilt wird, um diese der vom LeadRU übermittelten modifi-
zierten bisherigen und/oder der neuen Route zuzuordnen.
TypeOfRuHarmonization Full Full vollständige Harmonisierung n/a
TypeOfRuHarmonization Part Partial teilweise Harmonisierung n/a
TypeOfRuHarmonization None None keine Harmonisierung n/a
TypeOfRequest 1 Study Basisprozess für die Produkte Trassenstudie (TS), Fahrzeitberechnung (FZB), Ja
Fahrplan- und Betriebsprogrammstudie (FPS), Kurzfristige Fahrlagenberatung
mit Buchungsoption (KFB)
TypeOfRequest 2 Request Basisprozess Bestellung für die Produkte TRA, KFB, FZB und FPS Ja
TypeOfRequest 3 Modification Basisprozess Änderung nach Vertragsschluss für das Produkt „Trasse“ Ja
TypeOfUsedHybridPowerunit 1 Electric (pantograph, conductor rail), Antrieb mit Elektromotor, aus Oberleitung oder Stromschiene gespeist. Ja
TypeOfUsedHybridPowerunit 2 liquid fuel (benzine, diesel, gasoline), Antrieb Verbrennungsmotor (Benzin, Diesel, Erdgas) Ja
TypeOfUsedHybridPowerunit 3 Battery Batteriebetriebener Antriebsart Ja
TypeOfUsedHybridPowerunit 4 Hydrogen Wasserstoffbetriebene Antriebsart Ja
Tabelle 36 TAF-TSI/TAP-TSI Codelisten
3.16.2 Codeliste TrainActivity
 TrainActivity ist eine Wiederholstruktur, die auf Ebene „PlannedJourneyLocation“ in den Strukturen „TrainInformation“ (Zuglaufpunkt) und „PathInformation“ (Zugtrassenlaufpunkt) bereitgestellt wird. Aus fachlichen Gründen wird
sie jedoch fast ausschließlich nur in der Struktur „pathInformation“ genutzt.
TrainActivity beinhaltet im Attribut TrainActivityType eine eindeutige Kodierung der Zugaktivität als Mussangabe sowie die Möglichkeit der Referenzierung auf einen anderen Zug durch Angabe der Zugnummer oder der Refe-
renceTRID (optional).
Siehe hierzu auch Kapitel 3.8.1.10 und 3.8.2, in denen die vollständige Struktur (TrainActivityType, AssociatedAttachedTrainID, AssociatedAttachedOTN und AssociatedAttachedLocationIdent) erläutert wird.
 Für jeden in den Strukturen PathInformation angegebenen ZLP oder TLP muss mindestens eine Struktur „TrainActivity“ angegeben werden, die der Haltart "Bestellter Kundenhalt" (Wert 0001), "Betriebshalt" (Wert 0002), „Kunden-
bestellter Bedarfshalt“ (Wert 0030) oder "Durchfahrt" (Wert 0040) entspricht. Die Nutzung aller anderen TrainActivityCodes ist optional. Erfolgt eine Angabe für eine TrainActivity auch in der Struktur TrainInformation, darf diese
nicht im Widerspruch zu der entsprechenden Angabe in der Struktur PathInformation stehen.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 115

## Seite 116

 Alle anderen TrainActivityCodes entsprechen einem konkreten Haltegrund oder einer Aktivität am Zug bzw. bei der Durchführung der Zugfahrt für die jeweilige Haltart. Pro ZLP/TLP können mit beliebig vielen Strukturen „TrainActi-
vity“ verschiedene Aktivitäten angegeben werden.
 Die nachfolgende Liste zeigt die gültigen Ausprägungen des Attributs „TrainActivityType“ sowie weitere Beschreibungen und Anwendungsvoraussetzungen.
Wert Beschreibung Bemerkungen / Regeln Train / Path in PR Path in PD
0001 Verkehrshalt Bestellter Kundenhalt bM bM
1. Darf bei ZLP nur vom Kunden vorgegeben werden, wird auch im zugeordneten TLP angegeben
2. Für jeden in der Struktur PathInformation enthaltenen ZLP/TLP muss immer genau ein <TrainActivityType> angegeben werden, der den Wert 0001 oder 0002 oder 0030 oder 0040 für eine
Haltart enthält. Diese Angabe darf nicht im Widerspruch zu einer in der Struktur TrainInformation zum gleichen ZLP/TLP enthaltenen Angabe mit einem der genannten Werte des TrainActivi-
tyTypes stehen.
0002 Betriebshalt Betriebshalte entstehen im Rahmen der Trassenkonstruktion, und werden in der PathDetailsMessage (sofern fachlich begründet) vom EIU angegeben. Sie können aber auch vom Kunden z. B. in K bM
Folgegeschäftsvorfällen angegeben werden, wenn die Angabe im referenzierten Objekt vorhanden ist. Für jeden in der Struktur TrainInformation oder PathInformation enthaltenen ZLP/TLP
muss immer genau ein <TrainActivityType> angegeben werden, der den Wert 0001 oder 0002 oder 0030 oder 0040 für eine Haltart enthält.
0003 Servicehalt Nicht veröffentlichter Halt; Nutzung auch für Angabe „Keine Kursbuchveröffentlichung“; z. B: Halt für Bewirtschaftung. Darf als zusätzliche Information nur in Verbindung mit TypeCode 0001 K K
angegeben werden.
0004 Systemwechsel(-halt) Darf als zusätzliche Information in Verbindung mit TypeCode 0001, 0002 oder 0040 angegeben werden. Ist für den Wechsel der Antriebsart bei Hybrid-Tfz anzugeben. (weitere Details siehe K K
Anlage 3)
0005 Richtungswechsel (ohne Wechsel Tfz) In PathRequestMessage: Vom EVU bestellter Richtungswechsel; PD: Vom EVU bestellter oder zusätzlicher konstruktiv bedingter Richtungswechsel; jeweils ohne Tfz-Wechsel, aber mit Führer- K K
standswechsel. TypeCode darf nur bei Wendezugfähigkeit verwendet werden.
0006 Fahrtrichtungswechsel / Führerstandswechsel (mit Wech- Vom EVU bestellter Richtungswechsel mit Tfz-Wechsel (neues Tfz am anderen Ende des Zuges) K K
sel Tfz am anderen Ende und Fahrerwechsel)
0007 Richtungswechsel (mit Nutzung des gleichen Tfz am ande- In PathRequestMessage: Vom EVU bestellter Richtungswechsel; PD: Vom EVU bestellter oder zusätzlicher konstruktiv bedingter Richtungswechsel; jeweils mit Umsetzen des vorhandenen Tfz an K K
ren Ende) das andere Ende des Zuges
0008 Technische Wagenuntersuchung K K
0009 Wechsel der Spurweite n/a n/a
0010 Triebfahrzeug beistellen Hinzufügen eines weiteren Tfz; nur in Verbindung mit der Änderung der Bespannungsangaben (TractionDetails) in der Zugcharakteristik). K K
0011 Triebfahrzeug absetzen Absetzen eines Tfz; nur in Verbindung mit der Änderung der Bespannungsangaben (TractionDetails) in der Zugcharakteristik). K K
0012 Triebfahrzeugwechsel Wechsel des Tfz. nur in Verbindung mit der Änderung der Bespannungsangaben (TractionDetails) in der Zugcharakteristik). K K
0013 Wagen zusetzen K K
0014 Wagen absetzen K K
0015 Wagen ab- und zusetzen K K
0016 Zusammenführung von Zugteilen Nutzung für Zusammenführung von 2 Zügen zu einem Zug (z. B. ICE Triebzug Zusammenführung, Zusammenführung eines Y-Zugverbundes); es ist der Zug, der hinzugefügt werden soll, anzuge- K K
ben.
0017 Trennung von Zugteilen Nutzung für die Trennung eines Zuges in 2 Züge (z. B. ICE Triebzug Trennung, Trennung eines Y-Zugverbundes); es ist der Zug anzugeben, der separiert werden soll. K K
0018 Zwischenabstellung K K
0019 Behandlung Post und Expressgut n/a n/a
0020 Rangieren Angabe des konkreten Haltegrundes kann im Textfeld „haltabwText“ erfolgen (vgl. Kapitel 3.14.6, kann zusätzlich als Begründung für den Verkehrshalt angegeben werden, wenn innerhalb des K K
ZLP/TLP zwischen Ankunft und Abfahrt rangiert wird.
0021 Rangierdienstliche Behandlung K K
0022 Abschlussdienst (am Zielbahnhof) Information, dass Aktivitäten zur Zugauflösung am Zielbf. geplant sind. n/a n/a
0023 Triebfahrzeugführerwechsel K K
0024 Lokführererholungshalt K K
0025 Personalwechsel K K
0026 Zoll- und Grenzabfertigung K K
0027 Andere Haltegründe (Verschiedenes) Angabe des konkreten Haltegrundes kann im NSP „haltabwText“ auf Location-Ebene erfolgen (vgl. Kapitel 3.14.6) K K
0028 Nur zum Einsteigen K K
0029 Nur zum Aussteigen K K
0030 Bedarfshalt Bestellter Kundenbedarfshalt bM bM
1. Darf bei ZLP nur vom Kunden vorgegeben werden, wird auch im zugeordneten TLP angegeben.
2. Für jeden in der Struktur TrainInformation oder PathInformation enthaltenen ZLP/TLP muss immer genau ein <TrainActivityType> angegeben werden, der den Wert 0001 oder 0002 oder 0030
oder 0040 für eine Haltart enthält.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 116

## Seite 117

Wert Beschreibung Bemerkungen / Regeln Train / Path in PR Path in PD
0031 Ankunftszeit gleich Abfahrtzeit n/a n/a
0032 Abfahrt nach Aussteigen n/a n/a
0033 Kein Warten auf Anschlusszüge n/a n/a
0034 Bewässern n/a n/a
0035 Heizen n/a n/a
0036 Reinigen / Desinfizieren n/a n/a
0037 Behandlung von Pflanzen oder lebenden Tieren n/a n/a
0038 Behandlung verderblicher Güter n/a n/a
0039 Verwaltungsaufgaben (z. B. Zoll) n/a n/a
0040 Durchfahrt Für jeden in der Struktur TrainInformation oder PathInformation enthaltenen ZLP/TLP muss immer genau ein <TrainActivityType> angegeben werden, der den Wert 0001 oder 0002 oder 0030 bM bM
oder 0040 für eine Haltart enthält.
0041 Fotohalt K K
0042 Zug wartet Zug wartet auf der Grundlage EIU-spezifischer Regeln n/a n/a
0043 Zug fährt mit einem anderen Zug Doppelführung von Zügen im verkehrlichen Sinn. n/a n/a
0044 Übergang auf Zug Übergang des Zuges auf den genannten nachfolgenden Zug (z. B: Darstellung von Umläufen und Zugverknüpfungen am Zielbahnhof) K K
0045 Übergang von Zug Übergang des Zuges aus einem genannten vorherigen Zug (z. B: Darstellung von Umläufen und Zugverknüpfungen am Startbahnhof) K K
0046 Anschlussbeziehung zu einem anderen Zug Anschlussbeziehung des Zuges; Übergang von Reisenden/Wagen zu dem angegebenen Zug K K
0047 Anschlussbeziehung von einem anderen Zug Anschlussbeziehung des Zuges; Übernahme von Reisenden/Wagen von dem angegebenen Zug K K
0048 OTN bei Übergang an einer Grenze OTN der an einer Infrastrukturgrenze endenden Trasse, wenn der Zuglauf auf der anschließenden fremden Infrastruktur fortgesetzt wird und die ReferenceTRID nicht vorhanden ist oder nicht n/a n/a
durchgehend verwendet wird. Ist als Interimslösung bis zur vollständigen Umsetzung von TAF/TAP-TSI zur Versorgung ausgewählter abnehmender Systeme (z. B. TIS) vorgesehen. Wird nur in
betrieblichen Nachrichten verwendet.
0049 Ladehalt für Akku-Triebfahrzeug K K
DE01 Verzicht auf Bremsberechnung Die Aussage gilt ab der Betriebsstelle (PLC), in welcher sie angegeben ist, bis zur nächsten Betriebsstelle und muss dort ggf. wiederholt werden. K K
Wenn der Code angegeben ist, wird auf die Bremsberechnung verzichtet. Wenn mindestens 80% der Bremsen eines Zuges aktiv sind, kann auf die Bremsberechnung verzichtet werden.
DE02 Weitere konstruktivbedingte Richtungswechsel nicht zuge- An dem Zuglaufpunkt bis zum nächsten, sind ausschließlich bestellte Richtungswechsel zugelassen. Richtungswechsel in Kopfbahnhöfen sind immer möglich. K n/a
lassen
DE03 Notbremsüberbrückung erforderlich (Aktivierungspunkt) 1. Ab dem TLP, an welchem dieser Code angegeben ist, muss eine NBÜ vorhanden sein und eingeschaltet werden. n/a K
2. Dieser TLP im Konstruktionsbereich der DB InfraGO muss ein vom Kunden bestellter Halt sein.
DE04 Notbremsüberbrückung erforderlich (Deaktivierungs- 1. Bis zu dem TLP, an welchem dieser Code angegeben ist, muss eine NBÜ vorhanden sein und eingeschaltet werden. n/a K
punkt)
2. Dieser TLP im Konstruktionsbereich der DB InfraGO muss ein vom Kunden bestellter Halt sein.
DE05 Gesicherte Durchfahrt Wird der Code in einem Trassenlaufpunkt angegeben, ist die Durchfahrt an einem oder mehreren Signalen innerhalb dieses Trassenlaufpunktes gesichert. Erfolgt keine Angabe des Codes, be- K K
steht keine gesicherte Durchfahrt (Standard)
DE06 Beheizte Dampflok im Wagenzug (Ölfeuerung) Dieser Code ist anzugeben, wenn sich ab dem Zuglaufpunkt eine beheizte, nicht an der Traktion beteiligte Dampflok im Wagenzug befindet und diese über eine Ölfeuerung verfügt. Der Code ist K K
nur bei Geschäftsvorfällen für das Produkt „Trasse“ zulässig.
DE07 Beheizte Dampflok im Wagenzug (Rost-/Kohlefeuerung) Dieser Code ist anzugeben, wenn sich ab dem Zuglaufpunkt eine beheizte, nicht an der Traktion beteiligte Dampflok im Wagenzug befindet und diese über eine Rostfeuerung (Kohlefeuerung) K K
verfügt. Der Code ist nur bei Geschäftsvorfällen für das Produkt „Trasse“ zulässig.
DE08 KZRangierfahrt Kennzeichen Rangierfahrt. Zug fährt bis zum nächsten angegebenen ZLP/TLP als Rangierfahrt n/a K
DE09 KZFaehrfahrt Kennzeichen Fährfahrt. Zug fährt bis zum nächsten angegebenen ZLP/TLP als Fährfahrt K K
DE10 KZSperrfahrt Kennzeichen Sperrfahrt. Zug fährt bis zum nächsten angegebenen ZLP/TLP als Sperrfahrt n/a K
DE11 Ausfall Angabe erfolgt für den TLP bei mittigem Teilausfall der Trasse im GPE (Verwendung nur im Prozess ujBau) n/a K
DE12 Zeitliche Inkonsistenz Angabe erfolgt an dem TLP, wenn die angegebenen Timings (ALA und ALD) nicht konsistent zueinander konstruiert werden konnten K K
DE13 Räumliche Inkonsistenz Angabe erfolgt, wenn die Abfolge der TLP an diesem TLP nicht zueinander passen Verwendung ausschließlich im ujBau Prozess nach Anlage 10. K K
Tabelle 37 TrainActivity Codeliste
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 117

## Seite 118

4 Bereitstellung der Ordnungsrahmenstände und Stammdaten
Für die Nutzung der TAF/TAP-TSI-Nachrichten und die Kommunikation über die EVU-Schnittstelle ist für verschiedene Attribute die Nutzung definierter Werte und Kodierungen erforderlich. Diese sind in diesem Dokument entweder bei
den betreffenden Elementen explizit benannt oder es wird auf die Stammdaten verwiesen, die von DB InfraGO bereitgestellt werden (siehe Anlage 6 bzw. 7). Dem EVU werden die Stammdaten, jeweils gültig für bestimmte Perioden der
einzelnen Jahresfahrpläne, zur Abholung zur Verfügung gestellt. Die verfügbaren Ordnungsrahmenstände können über die Schnittstelle Ordnungsrahmenstände (siehe 4.1) erfragt werden.
Beim Abrufen der Stammdaten ist der Name des gewünschten Ordnungsrahmenstandes mitzuübergeben (siehe Anlage 6).
 Sobald aktuellere Stammdaten - in der jeweiligen Fortschreibung oder Berichtigung - verfügbar sind, werden diese rechtzeitig dem EVU zur Abholung bereitgestellt.
 Die Stammdaten sind jederzeit verfügbar und abholbar. Sie müssen nicht als „abgeholt“ markiert werden.
 Ist eine Jahresfahrplan abgelaufen, sind diese Stammdaten nicht mehr verfügbar.
 Das EVU (bzw. ein für das jeweilige IT-Verfahren des EVU benannter Verantwortlicher) wird via E-Mail über die Bereitstellung von aktuellen Stammdaten informiert.
 Weitere Details zur Abholung von Stammdaten-Nachrichten sind in Anlage 2 zu finden.
Folgende Stammdaten werden zur Abholung bereitgestellt:
 Betriebsstellen
o Diese Auflistung enthält alle deutschen Betriebsstellen, die in ausgetauschten Nachrichten unter Beachtung der jeweils aktuell gültigen Schnittstellendokumentation enthalten sein dürfen.
Zusätzlich sind auch die ausländische Betriebsstellen enthalten, für die die DB InfraGO einen Ril 100 Code vergeben hat, also insbesondere auch die, auf denen die DB InfraGO fahrplanbildend ist.
o Hierbei sind auch Betriebsstellen auf fremder Infrastruktur (Ausland, NE-Bereich) oder Betriebsstellen, die "Mutterbahnhof" für mehrere Bahnhofsteile einer großen Betriebsstelle sind, enthalten.
Zur Sicherstellung der Übernahme von Betriebsstellen auf fremder Infrastruktur in das Trassenangebot muss für diese Betriebsstellen bereits in der Anmeldung eine Fahrplanzeit eingetragen sein.
o Des Weiteren sind die Konstruktionsgrenzen zu fremder Infrastruktur ausgewiesen.
Sie sind in Nachrichten mit Übergängen aus dem bzw. in den Bereich einer fremden Infrastruktur als erster und/oder letzter konstruktionsrelevanter Zuglaufpunkt immer anzugeben.
o Die PrimaryLocationCodes der DB InfraGO sind angegeben und der jeweiligen RIL-100-Abkürzung zugeordnet.
 Strecken
Diese Auflistung enthält streckenweise (gleiche Zahl in Spalte "Strecke") in aufsteigender Kilometrierungsrichtung alle der Strecke zugeordneten Betriebsstellen. Die versetzte Darstellung von Betriebsstellen bei 2gleisigen Strecken,
gesondert für die Hin- und Gegenrichtung entsprechend der Kilometrierungsrichtung sowie für das Richtungs- und Gegenrichtungsgleis ergibt sich aus der Wirkrichtung von Signalstandorten bzw. Halteplätzen. Für die Angabe in der
Trassenbestellung bzw. im Angebot ist diese Unterscheidung nicht relevant, die Betriebsstelle selbst existiert unabhängig von der angegebenen Wirkrichtung in beiden Richtungen.
 Triebfahrzeuge
Diese Auflistung enthält die Baureihen und -varianten sowie deren Beschreibung für alle aktuell im Netz der DB zugelassenen Triebfahrzeuge.
 Zuggattungen
Diese Auflistung enthält alle aktuellen Zuggattungen.
 Streckenklassen
Diese Auflistung enthält alle aktuell für das Netz der DB geltenden Streckenklassen.
 VerkehrArtKundeZusatze
Diese Auflistung enthält Werte ergänzende Angaben zur verkehrlichen Zugart
 Flexibilitaeten
Diese Auflistung enthält Werte für die Angabe der gewünschten Flexibilität bei der Trassenkonstruktion.
 Durch die Weiterentwicklung können jederzeit Erweiterungen der Stammdaten erforderlich sein. Diese Erweiterungen werden mit einer neuen Version dieser Dokumentation kommuniziert.
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 118

## Seite 119

4.1 Ordnungsrahmenstände
Datenfelder des OrdungsrahmenstaendeResponse
Struktur Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Ordnungsrahmenstaende
I….Ordnungsrahmenstand
I.... I....name Der Name des Ordnungsrahmenstandes, ergänzt um 1 String 255 Bsp: 'Jahresfahrplan 2022.2'
die laufende Nummer. Die laufende Nummer wird
der Jahreszahl mit Punkt angefügt.
I.... I....gueltigab Datum des Beginns der fachlichen Gültigkeit (=erster 1 String Date
Gültigkeitstag)
I.... I....gueltigbis Datum des Endes der fachlichen Gültigkeit (=letzter 1 String Date
Gültigkeitstag)
I.... I....status 1 String 255 'arbeitsgeschlossen', 'redaktionsgeschlossen'
Tabelle 38: Ordnungsrahmenstände Datenfelder
4.2 Stammdaten
4.2.1 Grundstruktur der Stammdaten
Alle Stammdatenlisten folgen folgender Grundstruktur.
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
StammdatenRespsonse
I....StammdatenHeader StammdatenHeader Auflistung der zur Abholung bereitstehenden Pro Version sind qualifizierende 1
Stammdatenversionen Merkmale hinterlegt
I....Betriebsstellen Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....Strecken Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....Triebfahrzeuge Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....Zuggattungen Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....Streckenklassen Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....VerkehrsArtKundeZusaetze Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
I....Flexibilitaeten Liste Liste entsprechend der Listenstruktur Konkrete Stammdatenliste – 1
siehe Kapitel 4.3
Tabelle 39 Datei „StammdatenList“ Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 119

## Seite 120

4.2.2 StammdatenHeader
Jede Liste von Stammdaten enthält einen Header, der die Stammdaten bzgl. Art der Stammdaten, Fahrplanjahr und Gültigkeit qualifiziert.
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Muster Ausprägungen
kom-
men
StammdatenHeader Gilt für alle Stammdaten
I....messageID messageID Von DB InfraGO generierte Message-ID 1 integer
I....stammdatenArt stammdatenArt Art der Stammdaten 1 string 2 JF = Jahresfahrplan
ST = Studienversion
SO = Sonstiges
I....fahrplanJahr fahrplanJahr Fahrplanjahr 1 string 4 yyyy
I....beginnFahplanJahr beginnFahplanJahr Beginndatum Fahrplanjahr 1 string 10 yyyy-MM-dd
I....endeFahrplanJahr endeFahrplanJahr Enddatum Fahrplanjahr 1 string 10 yyyy-MM-dd
I.... gueltigAb gueltigAb Gültigkeitsbeginn der Stammdatentabelle 1 date
I.... gueltigBis gueltigBis Gültigkeitsende der Stammdatentabelle 1 date
I....beschreibung beschreibung Beschreibung des Bearbeitungsstandes (Fortschrei- 1 string 255
bung, Berichtigung)
Tabelle 40 StammdatenHeader Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 120

## Seite 121

4.3 Datenfelder der Stammdaten
4.3.1 Betriebsstellen
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Betriebsstellen
I.... Betriebsstelle 1..N
I....I....countryCodeISO countryCodeISO CountryCode des LocationPrimaryCode 1 string 2 Gemäß ISO 3166
I....I....locationPrimaryCode locationPrimaryCode LocationPrimaryCode 1 string 5
I....I....locationName location_Name Name der PL in CRD 1 string 255 Bei Btrst der DB InfraGO entspricht die Angabe dem
Langnamen in der Ril100 (Name40)
I....I....locationNameASCII location_Name_ASCII Name der PL in CRD im ASCII-Code 1 string 255 Ist der Wert in der CRD nicht gefüllt, wird der Wert
mit „unbekannt“
I....I....companyCode companyCode CompanyCode des Eigentümers der Betriebsstelle Siehe Kapitel 3.16"Codelisten" 1 string 4 Siehe Kapitel 3.16„Codelisten“
I....I....nameCompany nameCompany Bezeichnung des Eigentümers der Betriebsstelle 1 string 40
I....I....ril100 ril100 RiL- 100-Abkürzung der Betriebsstelle (Bezeichnungs- Wird nur noch für Betriebsstel- 0..1 string 5 Nur für PL der DB InfraGO
system der DB InfraGO) len im Netz der DB vergeben
I....I....name16 name16 Name der Betriebsstelle Wird nur noch für Betriebsstel- 1 string 16
len im Netz der DB vergeben
I....I....typeCode typeCode Typecode Gibt die Typbezeichnung für die 1 string 2
Betriebsstelle an
I....I....typ typ Typ der Betriebsstelle Typbezeichnung der DB InfraGO 0..1 string 20
für die Betriebsstelle, z.B.: Bf,
Bft, Hp, Awanst.
I....I....nrRb nrRb Nummer der infrastrukturell zuständigen Region der 1 integer 1 0 = Ausland, NE
DB InfraGO
1 = RB Ost
2 = RB Nord
3 = RB West
4= RB Mitte
5 = RB Südost
6 = RB Südwest
7 = RB Süd
8 = S-Bahn Berlin
9 = S-Bahn Hamburg
I....I....uicNr uicNr UIC Nummer 0..1 string 4
I....I....uic uic UIC Name 0..1 string 40
I....I....neNr neNr NE Nummer 0..1 string 3
I....I....ne ne NE Name 0..1 string 40
I....I....istKonstruktionsrelevant istKonstruktionsrelevant Konstruktionsrelevant (Ja/Nein) 1 boolean Gemäß xs:boolean:
0, false (=falsch)
1, true (=wahr);
true, wenn die Betriebsstelle mindestens einmal als
ZugeordneteBetriebsstelle in der Streckenliste vor-
kommt, sonst false
I....I....istMutterBahnhof istMutterBahnhof Betriebsstelle ist Mutterbahnhof (Ja/Nein) 1 boolean Gemäß xs:boolean:
0, false (=falsch)
1, true (=wahr)
I....I....mbfCountryCodeISO mbfCountryCodeISO CountryCode des LocationPrimaryCode des Mutter- 0..1 string 2 Gemäß ISO 3166
bahnhofs (sofern vorhanden)
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 121

## Seite 122

Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
I....I....mbfLocationPrimaryCode mbfLocationPrimaryCode LocationPrimaryCode des Mutterbahnhofs (sofern 0..1 string 5
vorhanden)
I....I....netzgrenzeCompanyCode netzgrenzeCompanyCode CompanyCode des benachbarten EIU, sofern Be- Siehe Kapitel 3.16"Codelisten" 0..1 string 4 [0-9A-Z]{4}
triebsstelle eine Netzgrenze ist
I....I....netzgrenzeNameCompany netzgrenzeNameCompany Name des benachbarten EIU, sofern Betriebsstelle 0..1 string 40
eine Netzgrenze ist
I....I....fplgrenzeCompanyCode fplgrenzeCompanyCode CompanyCode des benachbarten EIU, sofern Be- Siehe Kapitel 3.16"Codelisten" 0..1 string 4
triebsstelle eine Fahrplanbearbeitungsgrenze ist
I....I....fplgrenzeNameCompany fplgrenzeNameCompany Name des benachbarten EIU, sofern Betriebsstelle 0..1 string 40
eine Fahrplanbearbeitungsgrenze ist
Tabelle 41 Betriebsstellen Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 122

## Seite 123

4.3.2 Strecken
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Strecken
I....Strecke 1..N
I....I....streckenNummer streckenNummer Streckennummer der DB InfraGO 1 string 4
I….I....zugeordnete Betriebsstelle Auflistung der der Strecke zugeordne- 2...N
ten Betriebsstellen in aufsteigender Ki-
lometrierung
I....I….I....countryCodeISO countryCodeISO CountryCode des LocationPrimaryCode Gemäß ISO 3166 1 string Siehe Stammdaten “BetriebsstellenListe” (Kapitel
4.3)
I....I….I....locationPrimaryCode locationPrimaryCode LocationPrimaryCode 1 string Siehe Stammdaten “BetriebsstellenListe” (Kapitel
4.3)
I….I....I....ril100 Ril100 Abkürzung der Betriebsstelle gemäß RiL Wird nur noch für Betriebsstel- 1 string Siehe Stammdaten “BetriebsstellenListe” (Kapitel
100 der DB InfraGO len im Netz der DB vergeben 4.3)
I....I….I....name16 name16 Name der Betrriebsstelle gemäß RiL 100 Wird nur noch für Betriebsstel- 1 string Siehe Stammdaten “BetriebsstellenListe” (Kapitel
der DB InfraGO len im Netz der DB vergeben 4.3)
I....I….I....typ typ Typ der Betriebsstelle z.B.: Bf, Bft, Hp, Awanst, … 1 string Siehe Stammdaten “BetriebsstellenListe” (Kapitel
4.3)
I....I….I....lageKm lageKm Lagekilometer der Betriebsstelle auf der 1 float
Strecke
I....I….I....anzahlGleise anzahlGleise Anzahl der Gleise der Strecke Angabe gilt ab der Betriebsstelle 0..1 string 1 = eingleisige Strecke
bis zur nächsten Betriebsstelle
2 = zweigleisige Strecke
der Strecke.
0 = nicht befahrbar
I....I….I....wirkung Wirkung Wirkung der Betriebsstelle Gibt die Wirkung der Betriebs- 0..1 integer 1 = 1gleisige Strecke beide Richtungen
stelle auf Grund der besonderen 2 = 1gleisige Strecke in Streckendefinitions-
richtung
Lage maßgebender Infrastruktu-
3 = 1gleisige Strecke entgegen Strecken-
relemente (z. B. Signal, Abzweig-
definitionsrichtung
weiche Bahnsteig) wieder. Un-
4 = 2gleisige Strecke beide Gleise beide
abhängig von der angegebenen
Richtungen
Wirkrichtung existiert die Be-
5 = 2gleisige Strecke rechtes Gleis gemäß
triebsstelle immer in beiden Streckendefinitionsrichtung
Richtungen und auf allen Haupt- 6 = 2gleisige Strecke linkes Gleis gemäß
gleisen der Strecke. Streckendefinitionsrichtung
7 = 2gleisige Strecke rechtes Gleis entgegen
Streckendefinitionsrichtung
8 = 2gleisige Strecke linkes Gleis entgegen
Streckendefinitionsrichtung
9 = 2gleisige Strecke rechtes Gleis gemäß
Streckendefinitionsrichtung beide Richtungen
10 = 2gleisige Strecke linkes Gleis gemäß
Streckendefinitionsrichtung beide Richtungen
11 = 2gleisige Strecke rechtes Gleis gemäß
Streckendefinitionsrichtung und linkes Gleis
entgegen Streckendefinitionsrichtung
12 = 2gleisige Strecke rechtes Gleis entgegen
Streckendefinitionsrichtung und linkes Gleis
gemäß Streckendefinitionsrichtung
13 = 2gleisige Strecke beide Gleise gemäß
Streckendefinitionsrichtung
14 = 2gleisige Strecke beide Gleise entgegen
Streckendefinitionsrichtung
15 = 2gleisige Strecke rechtes Gleis beide
Richtungen; linkes Gleis gemäß
Streckendefinitionsrichtung
16 = 2gleisige Strecke rechtes Gleis beide
Richtungen; linkes Gleis entgegen
Streckendefinitionsrichtung
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 123

## Seite 124

Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
17 = 2gleisige Strecke linkes Gleis beide
Richtungen; rechtes Gleis gemäß
Streckendefinitionsrichtung
18 = 2gleisige Strecke linkes Gleis beide
Richtungen; rechtes Gleis entgegen
Streckendefinitionsrichtung
I....I….I....zustandStrecke zustandStrecke nur Angabe, wenn Abweichung 0..1 string z. B: unterbrochen, verkauft, verpachtet, stillge-
von der Regel (= Streckenab- legt;
schnitt verfügbar/nutzbar), An-
gabe gilt ab der Betriebsstelle
bis zur nächsten Betriebsstelle
der Strecke.
I....I….I....bemerkung bemerkung Bemerkungen 0..1 string 255
Tabelle 42 Strecken Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 124

## Seite 125

4.3.3 Triebfahrzeuge
Die Liste gibt alle im Netz der DB zugelassenen Triebfahrzeuge entsprechend der Kodierung im jeweiligen nationalen Fahrzeugregister an.
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Triebfahrzeuge
I.... Triebfahrzeug 1..N
I....I....tfzBaureihe tfzBaureihe Triebfahrzeug Baureihe Tfz-Baureihe entsprechend dem 1 string 4 0001-9999
jeweiligen nationalen Fahrzeug-
register; ist im Attribut „Series-
Number“ der Struktur LocoTy-
peNumber anzugeben
I....I....tfzBaureihenVariante tfzBaureihenVariante Triebfahrzeug-Baureihenvariante Baureihenvariante der Tfz-Bau- 1 string 3 001…999
reihe (wird aktuell nur im natio-
nalen Fahrzeugregister der BR
Deutschland verwendet); ist im
Attribut „SerialNumber“ der
Struktur LocotypeNumber anzu-
geben
I....I....tfzBaureihenVarianteBeschrei- tfzBaureihenVarianteBe- Verbale Beschreibung der Triebfahrzeug-Baureihen- 1 string 100
bung schreibung variante
I....I....laenderCode laenderCode Ländercode des Landes, in welchem die Tfz-Baureihe ist im Attribut „CountryCode“ 1 string 2 z. B: 80 für BRD
zugelassen wurde, gemäß Teil 4 Anhang 6 der EU- der Struktur LocoTypeNumber
Reg. 2007/756 anzugeben
I....I....laenderName laenderName Ländername zum Ländercode oder Abkürzung 1 string 16 z. B: BR Deutschland, DE usw
I....I....typeCode1 bauartTyp Bauarttyp gemäß Teil 0 Anhang 6 der EU-Reg. Ist TypeCode1 der Struktur 1 string 1 [9]
2007/756 LocoTypeNumber
I....I....typeCode2 traktionsArt Antriebsart/Traktionsart gemäß Teil 8 Anhang 6 der Ist TypeCode2 der Struktur 1 string 1 [0-9]
EU-Reg. 2007/756 LocoTypeNumber (entspricht
dem Attribut Triebfahrzeugtyp
in GFD-I)
Tabelle 43 Triebfahrzeuge Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 125

## Seite 126

4.3.4 Zuggattungen
Die Tabelle enthält die Zuggattungen des jeweils gültigen Zuggattungsverzeichnisses der DB InfraGO. In der Zuggattung sind Angaben zur Zugart, zur Verkehrsart sowie zu betrieblichen und verkehrlichen Besonderheiten kodiert. Die
fachlichen Angaben zur Zuggattung sind in der Regel in diesem Verzeichnis detaillierter und umfassender und können derzeit nicht vollständig durch die Kodierungen für die Attribute TrainType, TrafficTypeCode und CommercialTraf-
ficType ersetzt werden. Die genannten Attribute werden daher aktuell nicht oder nur eingeschränkt ergänzend verwendet. Sofern bei Nutzung der Attribute TrainType, TrafficType und CommercialTrafficType Widersprüche zu den
Angaben in den Attributen zggHauptnummer, zggUnternummer und zggKurzbez auftreten sollten, gelten primär die Zuggattungsangaben.
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Zuggattungen
I.... Zuggattung 1..N
I....I....zggHauptNr zggHauptNr Zuggattung Hauptnummer Ist im Attribut zggHauptnummer 1 string 2 01…99
bzw. azchZggHauptnummer (bei
alternativer Zugcharakteristik)
anzugeben
I....I.... zggUnterNr zggUnterNr Zuggattung Unternummer Ist im Attribut zggUnternummer 1 integer 1 0…9
bzw. azchZggUnternummer (bei
alternativer Zugcharakteristik)
anzugeben
I....I....zggAbkuerz zggAbkuerz Zuggattungsproduktbezeichnung Ist im Attribut zggKurzbez bzw. 1 string 10
azchZggKurzbez (bei alternativer
Zugcharakteristik) anzugeben
I....I....zggBezeichnung zggBezeichnung Zuggattung Bezeichnung Wird nicht in den Nachrichten 1 string 50
angegeben
I....I....beschreibung beschreibung Zuggattung Beschreibung Wird nicht in den Nachrichten 1 string 255
angegeben
I....I.... verkehrsartKunde verkehrsartKunde Beschreibung der Verkehrsartbezeichnung des Kun- Jeder Zuggattung ist genau eine 1 string 4 SPFV
den der vorgegebenen Ausprägun-
SPNV
gen für die VerkehrsartKunde
zugeordnet. Dieser Wert ist im SGV
NSP „verkehrsartKunde“ anzu-
geben.
I....I.... betrieblichePrio betrieblichePrio Betriebliche Priorisierung Sofern für die Zuggattung eine 1 string 15 sehrhohePrio
Priorisierung vorgesehen ist,
hohePrio
wird in dieser Tabelle eine der
vorgegebenen Auspägungen zu-
geordnet, anderenfalls wird ein
leerer String geliefert. Dieser
Wert kann im NSP „betriebliche-
Prio“ angegeben werden. Die
Ausprägung „sehrhohePrio“
wird nur für SGV und SPFV ver-
wendet, die Ausprägung „hohe-
Prio“ kommt nur für SGV zur An-
wendung.
I....I.... tfzOderLeerfahrt tfzOderLeerfahr Kennzeichnung der Durchführung der Zugfahrt als Sofern die Zuggattung für die 1 string 15 LeerRz
Tfz-fahrt oder Leerreisezug Durchführung der Zugfahrt als LOKZUG
Tfz-Fahrt oder Leerreisezug ver-
Tfzf
wendet wird, ist in dieser Ta-
belle eine der vorgegebenen
Auspägungen zugeordnet, ande-
renfalls wird ein leerer String ge-
liefert. Dieser Wert kann im NSP
„tfzOderLeerfahrt“ angegeben
werden.
Tabelle 44 Zuggattungen Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 126

## Seite 127

4.3.5 Streckenklassen
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Streckenklassen
I.... Streckenklasse 1..N
I....I....streckenklasse streckenklasse Streckenklasse Ist im Element routeClass anzu- 1 string 3 Bezeichnungen entsprechend der RiL 457 (DB In-
geben. fraGO)
Tabelle 45 Streckenklassen Datenfelder
4.3.6 VerkehrsartKundeZusaetz
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
VerkehrsartKundeZusaetze
I.... VerkehrsartKundeZusatz 1..N
I....I....verkehrsartKundeZusatz verkehrsartKundeZusatz Bezeichnung der ergänzenden Angabe zur verkehrli- 1 string 40 Nostalgieverkehr,
chen Zugart des Kunden Charterverkehr,
Punkt-zu-Punkt,
Nachtverkehr
BaubedingteZusatzleistung
20h-Zug
Tabelle 46: VerkehrsartKundeZusaetze Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 127

## Seite 128

4.3.7 Flexibilitaeten
Struktur Attribut Beschreibung Bemerkungen / Regeln Vor- Typ Länge Ausprägungen
kom-
men
Flexibilitaeten
I.... Flexibilitaet 1..N
I....I....flexibilitaet flexibilitaet Bezeichnung der Flexibilität bei der Trassenkonstruk- 1 string 6 ZF 30,
tion ZF 120,
RF 120
I....I....beschreibung beschreibung Beschreibung der Flexibilität bei der Trassenkon- 1 string 255 ZF 30 = zeitlicher Konstruktionsspielraum +/- 30
struktion min,
ZF 120 = zeitlicher Konstruktionsspielraum +/- 120
min,
RF 120 = räumlicher Konstruktionsspielraum mit
zeitlichem Konstruktionsspielraum +/- 120 min
Tabelle 47 Flexibilitaeten Datenfelder
Anlage 1 Datenfelder der Schnittstelle Bestellsystem – EVU, Version 4.6.3.1 Seite 128
