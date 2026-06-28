# Anlage 9: Fehlercodes der DB InfraGO

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13705116/482a46c63fc32c91ca9113804b49619d/Anlage-9-Fehlercodes-der-DB-infraGO-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13705116/482a46c63fc32c91ca9113804b49619d/Anlage-9-Fehlercodes-der-DB-infraGO-data.pdf)
- Quellen-Schlüssel: `src-231dc086bb9279208c76`
- Abrufdatum: 2026-06-27
- Original: [[anlage-9-fehlercodes-der-db-infrago--src-231dc086bb9279208c76.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

EVU-Schnittstelle des Bestellsystems („pa-
thOS“)
Anlage 9
Fehlernachrichten der DB InfraGO
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
Version 4.6.3
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−

## Seite 2

Historie / Änderungen
Version Bearbeitet/ geändert Beschreibung Datum
von der Änderungen/Bemerkungen
4.4.0 Initiale Fassung 28.02.2022
4.4.1 Ergänzung neuer nationaler Fehlercodes 22.08.2022
(6001, 6073, 6074, 6097, 6500)
4.4.2 Ergänzung neuer nationaler Fehlercodes 10.05.2023
(6067-6072, 6098); Entfernung obsoleter
Codes (6078, 6095)
4.5.0 Ergänzung neuer nationaler Fehlercodes 17.07.2024
(6064, 6066, 6078, 6095, 6510)
Entfernung obsoleter Codes (6000)
4.6.0 Ergänzung neuer nationaler Fehlercodes 17.04.2025
(6099, 6100)
4.6.1 Ergänzung neuer nationaler Fehlercodes 14.07.2025
(6400 und 6401)
4.6.2 Konkretisierung zu Fehlercode 6094 11.09.2025
4.6.3 DB InfraGO AG Ergänzung neuer nationaler Fehlercode 6550 18.12.2025
Fabian Sommer

## Seite 3

Inhaltsverzeichnis
1 Hinweise zu diesem Dokument 4
2 Fehlercodes DB InfraGO 5

## Seite 4

1 Hinweise zu diesem Dokument
Die Dokumentation für die Schnittstelle zum Bestellsystem der DB InfraGO („pathOS“) besteht
aus einem Hauptdokument und mehreren Anlagen (siehe Hauptdokument, Kapitel 3.1). Die Ver-
sionierung dieses Dokuments erfolgt unabhängig von dem Hauptdokument, da bei der Beschrei-
bung der Fehlermeldungen eine höhere Änderungsrate zu erwarten ist. Änderungen an den Do-
kumenten sind jeweils in der Änderungshistorie am Anfang des betreffenden Dokuments aufge-
führt.
Die EVU-Schnittstelle des Bestellsystems der DB InfraGO („pathOS“) orientiert sich ab Version
4.0.0 am TAF-TSI/TAP-TSI-konformen Nachrichtenaustausch zwischen den beteiligten Bahnge-
sellschaften. Im Rahmen dieses Standards wurden auch Fehlermeldungen und zugehörige Error-
Codes definiert. ErrorCodes sind vierstellig nummerisch definiert. Die von der RNE festgelegten
ErrorCodes sind dem Zahlenkreis 5xxx zugeordnet.
Da auch der Bedarf für nationale Fehlermeldungen, bspw. für die Zuordnung von Fehlern in der
Struktur „NetworkSpecificParameter“ oder bei fachlichen Fehlern, entstehen kann, ist in
TAF/TAP-TSI vorgesehen für nationale Fehlermeldungen den ErrorCode 6xxx zu verwenden.
In diesem Dokument werden die von DB InfraGO definierten Fehlermeldungen beschrieben. Die
von der RNE festgelegten ErrorCodes können dem Annex 10.2 „ImportantMessageTypesAnd-
Codes“ zum Sector handbook V 3.x entnommen werden.
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 4

## Seite 5

2 Fehlercodes DB InfraGO
Die nachfolgende Tabelle enthält Fehlercodes, die von DB InfraGO in Error-Messages verwendet
werden.
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 5

## Seite 6

Error
Fehlermeldung Beschreibung/Hinweis
Code
6001 Attribut [Name des Attributs] fehlt oder ist fehlerhaft. Für noch nicht festgelegte Fehlermeldungen im TAF-TAP-Standard
zu neuen Feldern, wie bspw. RouteID oder ReasonOfReference. Bis
neue Fehlermeldung mit eigenem Code 5*** in Standard aufgenom-
men wird.
6064 Die Kombination von Message Type, Message Status, Type of Request, Type of Informa- Die angegebenen Nachrichtenattribute werden in dieser Kombina-
tion ist nicht bekannt. tion nicht unterstützt.
6065 offen
6066 Die Änderung traf nach Ablauf der Anmeldefrist ein und wird entsprechend NBN 4.2.1.2 Wenn eine Änderungsmeldung nach Anmeldefrist eingetroffen ist, so
im <Leistungsprozessart> berücksichtigt. findet ein Prozesstransfer statt und das EVU erhält eine Information
(ErrorMessage mit Severity=1 "WARNING")
6067 Trasse <PathID> ist storniert. Die angesprochene Trasse ist bereits vollständig storniert.
6068 Nicht unterstütztes Marktprodukt <Code>. Bspw. bei einer PathCancelledMessage wird nur Marktprodukt
"TRA" unterstützt
6069 PlannedTrainData muss an der ersten Betriebsstelle der Struktur PathInformation ange- Die Struktur PlannedTrainData muss am ersten Zuglaufpunkt ange-
führt werden. geben werden.
6070 Die Bitleiste (BitmapDays) hat bei RVK immer eine Länge von 371 Zeichen. Damit die Bitleiste auf alle Fahrplanjahre angewendet werden kann,
ist die maximal mögliche Anzahl an Verkehrstagen je Fahrplanjahr
von 371 (= 371 Bit) immer zu befüllen.
EVU-SST v4.6, Hauptdokument, Kapitel 8.3.2
6071 Der Zeitrahmen darf nur beim dem Marktprodukt RVK angegeben werden und ist für die- EVU-SST v4.6, Anlage 1, Kapitel 3.14.5
ses verpflichtend.
6072 Bei einer Zugcharakteristik müssen alle drei Attribute der Zuggattung gefüllt sein. EVU-SST v4.6, Anlage 1, Kapitel 3.14.6
6073 zggHauptnummer, zggUnternummer und zggKurzbezeichung müssen an der ersten Be- Zumindest an der ersten Betriebsstelle müssen die Angaben zur
triebsstelle der Struktur PathInformation angeführt werden. Zuggattung vollständig angegeben sein.
6074 Es ist genau eine Start-Betriebsstelle (JourneyLocationTypeCode "01") und eine Ziel-Be- Bei einer PathRequestMessage müssen JourneyLocationTypeCode
triebsstelle (JourneyLocationTypeCode "03") anzugeben. 01 ("Origin", Start-Brst) und 03 ("Destination", Ziel-Brst) genau ein-
mal vorhanden sein.
6075 ResponsibleRU und kundennummerDurchfuehrendesEVU dürfen nicht allein an einer Be- EVU-SST v4.6, Anlage 2, Kapitel 3.8.2
triebsstelle der Struktur PathInformation angeführt werden.
6076 ResponsibleRU und kundennummerDurchfuehrendesEVU müssen an der ersten Be- EVU-SST v4.6, Anlage 2, Kapitel 3.8.2
triebsstelle der Struktur PathInformation angeführt werden.
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 6

## Seite 7

Error
Fehlermeldung Beschreibung/Hinweis
Code
6077 ResponsibleApplicant und kundennummerBestellendesEVU müssen und dürfen nur an EVU-SST v4.6, Anlage 2, Kapitel 3.8.2
der ersten Betriebsstelle der Struktur PathInformation angeführt werden.
6078 Folgende Attribute/Strukturen werden bei einer ObjectInfoMessage mit Typ "R" nicht ge- Hat die OIM den ObjectInfoType "R", dann muss PathInformationEx-
füllt erwartet: PathInformationExtended, TrainInformationExtended. tended und TrainInformationExtended leer sein
6079 CompanyCode für bestellendes EVU nicht einheitlich verwendet. Sender, PlannedTransportIdentifier PathRequestID (PRID) und
ResponsibleApplicant müssen das gleiche EVU repräsentieren.
6080 Dem CompanyCode <CompanyCode> ist die Kundennummer <knr> nicht zugeordnet. kundennummerBestellendesEvu muss dem ResponsibleApplicant
und kundennummerDurchfuehrendesEvu muss dem ResponsibleRU
z ugeordnet sein.
6081 Kundennummer <knr> ist nicht bekannt oder nicht berechtigt.
6082 Anmeldung für das Produkt RV-Kapazität nicht möglich, da sie außerhalb der Anmelde- FehlerCode wird nur für Nachrichten des Produkts RV-Kapazität an-
frist für das Anmeldejahr <Bearbeitungsjahr> erfolgt. gewendet. Die Anmeldefrist zur Abgabe von RV-Kapazitätsanmel-
dungen, Änderungen oder Stornierungen für das Anmeldejahr <Be-
arbeitungsjahr> ist noch nicht erreicht oder bereits vorüber.
6083 Verkehrszeitraum der RVK nicht in aktueller RV-Periode. FehlerCode wird nur für Nachrichten des Produkts RV-Kapazität an-
gewendet.
6084 Fehler bei Konvertierung sollten genauere Fehlerhinweise, bspw. betroffenes Feld oder Art
des Fehlers möglich sein, so werden diese im Fehlertext angegeben
6085 Unzulässige Trassenanmeldung: Anmeldung für <angemeldetes Fahrplanjahr> wird nicht
unterstützt.
6086 Kein gültiges Nachrichtenformat Nachricht ist kein lesbares XML.
6087 Die Nachricht ist inhaltlich nicht konform. Fehler bei inhaltlicher Validierung der Nachricht, bspw. ist nicht
schemakonform oder Header Daten passen nicht zu Nachrichtenda-
ten.
Zu dem Fehler werden Detailinformation, bspw. XSD-Fehler, mitge-
g eben.
6088 Message von Sender: <code> mit MessageIdentifier: <uuid> existiert bereits. Nachricht empfangen mit einem bereits verwendeten MessageIden-
tifier
6089 Unzulässige Trassenanmeldung: TimetableYear des Identifiers PathRequestID (<Time-
tableYear>) entspricht nicht dem angemeldeten Fahrplanjahr <berechnetes angemelde-
tes Fahrplanjahr>. Die PathRequestID passt nicht zu dem angemeldeten Fahrplanjahr.
6090 Anmeldung nicht möglich: Die Anmeldefrist für das durch den Verkehrszeitraum gewählte FehlerCode wird nur für Nachrichten der Produkte Trasse, FZB, FPS
F ahrplanjahr <angemeldetes Fahrplanjahr> hat noch nicht begonnen. und KFB angewendet. Für die Fahrplanperiode des angegebenen
V erkehrszeitraums sind noch keine Anmeldungen möglich.
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 7

## Seite 8

Error
Fehlermeldung Beschreibung/Hinweis
Code
6091 Anmeldung zum Netzfahrplan <angemeldetes Fahrplanjahr> ist wegen Ablauf der Frist FehlerCode wird nur für Anmeldungen zum Netzfahrplan angewen-
nicht mehr möglich. Die Anmeldung wird zur weiteren Bearbeitung dem Gelegenheitsver- det, wenn die Anmeldung nach Ablauf der Anmeldefrist eingegangen
kehr zugeordnet. i st.
6092 Unzulässige Trassenanmeldung: Die angemeldete Trasse umfasst mehrere Fahrplan-
jahre.
6093 Keine vorhergehende Message mit MessageType <RelatedReference.RelatedType>,
Identifier <RelatedReference.RelatedIdentifier>, <RelatedReference.RelatedMessageDa-
teTime>, <RelatedSenderReference> vorhanden.
6094 Zur ID <PathID> wurde bereits eine Antwort verarbeitet. Bspw. wurde zu einem Angebot mit der PathID bereits eine Pa-
thConfirmationMessage oder eine PathDetailsRefusedMessage
empfangen und verarbeitet. Nicht für den Prozess ujBau nach An-
lage 10 anwendbar.
6095 Stornierung oder Änderung nicht mehr möglich. Eine Stornierung ist bis 20 Stunden nach geplanter Trasse (Abfahrt)
erlaubt.
6096 Zur ID <PathRequestID> existiert bereits eine Trassenanmeldung.
6097 Der MessageIdentifier "{0}" entspricht nicht dem UUID-Format.
6098 <Attributname> weicht von Erstanmeldung ab. Die Angabe darf sich nicht gegenüber der Erstanmeldung ändern,
bspw. TrainID, RouteID, TOI, Marktprodukt, ...)
6099 Die Angabe der JourneyLocationTypeCodes ist nicht zulässig Das Attribut "Origin" darf nur am ersten ZLP und das Attribut Desti-
nation nur am letzten ZLP angegeben werden.
6100 Bei einem CaseReferenceObject Taktverbund wird der ObjectInfoType "N" erwartet. Hat die OIM den ObjectInfoType "N" (mit Taktverbund), dann muss
referenceTRID leer sein
6400 Stellungnahme nicht mehr möglich. Mögliche Ursachen:
Die Stellungnahmefrist des zugehörigen GPE (bzw. GPEnSN) ist be-
reits abgelaufen ist, oder eine PathRequestMessage wurde zu ei-
nem GPEnSN versendet.
6401 Für die PathID und den PlannedCalendar der Stellungnahme existiert kein Planungser- Mögliche Ursachen:
gebnis. Es ist keine zugehörige PathID in den Identifiers oder Plan-
nedCalendar der Stellungnahme angegeben, die PathID existiert gar
nicht, bzw. stimmt der PlannedCalendar nicht mit dem des GPE
bzw. GPEnSN überein.
6500 Zurückweisung der Trassenanmeldung auf Grund fehlender bzw. nicht plausibler Anga- Im Rahmen der Trassenkonstruktion wurden fachliche Fehler in der
ben. Anmeldung erkannt.
Details zu den Fehlern stehen in den FreeTextFields.
6510 Zurückweisung, da die Anmeldung zu früh oder zu spät stattgefunden hat. Im Rahmen der Trassenkonstruktion wurden fachliche Fehler in der
Anmeldung erkannt. Wird bei einer RVK-Anmeldung geschickt,
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 8

## Seite 9

Error
Fehlermeldung Beschreibung/Hinweis
Code
wenn die Anmeldung außerhalb des erlaubten Anmelde-Zeitraums
geschickt wird.
6550 Fachliche Zurückweisung einer inhaltlichen unplausiblen Trassenerstanmeldung oder Än- vgl. Hauptdokument, Kapitel 5.2.5; Basisprozess „Request“ beendet
derung vor Angebotsabgabe im Rahmen der manuellen Eingangsprüfung. und Zugnummer/OTN freigegeben.
Anlage 9: Fehlernachrichten der DB InfraGO, EVU-Schnittstelle Bestellsystem, Version 4.6.3 9
