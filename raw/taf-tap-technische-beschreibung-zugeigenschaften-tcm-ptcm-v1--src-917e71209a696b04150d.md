# TAF/TAP Technische Beschreibung Zugeigenschaften/TCM/PTCM _v14.6

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/12598388/171d9fcbec4cecec350fdf010e1899a4/Beschreibung-Zugeigenschaften-TCM-PTCM-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/12598388/171d9fcbec4cecec350fdf010e1899a4/Beschreibung-Zugeigenschaften-TCM-PTCM-data.pdf)
- Quellen-Schlüssel: `src-917e71209a696b04150d`
- Abrufdatum: 2026-06-27
- Original: [[taf-tap-technische-beschreibung-zugeigenschaften-tcm-ptcm-v14-6--src-917e71209a696b04150d.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Foto: Deutsche Bahn AG/Michael Neuhaus
[BILD 210mm x 105mm - Diesen Hinweis markieren und Bild einfügen !]
Version 14.6 vom 05.06.26
TECHNISCHE BESCHREIBUNG
Empfang von aktuellen Zugeigen-
schaften gem. TAF/TAP TSI
TAF TrainComposition message,
TAP PassengerTrainComposition message

## Seite 2

Inhaltsverzeichnis
1 Allgemeines 5
1.1 Alternative zum Meldungsversand 5
2 Schnittstellenbeschreibung 6
2.1 Antrag auf Meldungsaustausch 6
3 Beschreibung der Meldungen 7
3.1 Meldungsversand 7
3.2 Meldungsinhalt 7
3.3 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern 8
3.4 Meldungsaufbau 9
3.4.1 TAF Train Composition Message (Schienengüterverkehr) 10
3.4.2 TAP Passenger Train Composition Message (Schienenpersonenverkehr) 13
3.4.3 Wertelisten 16
3.4.4 Hinweise zum Element TractionMode 17
4 Beschreibung MBR Funktion 18
4.1 Bremshundertstel elektronisch übermitteln 18
4.2 Bekanntgabe der Geschwindigkeiten 18
5 Rahmenbedingungen 19
6 Ansprechpartner und Impressum 20
2

## Seite 3

Änderungsverfolgung
Datum Änderung
21.09.2020 • Angaben LocoTypeNumber (TAF), RollingStockNumber (TAP) gem. europ. Ent-
scheidung in Nutzung angepasst (Abbildung Tfz-Baureihenvariente)
• Datumsformat in Beispieldatensätzen korrigiert
05.10.2020 • Zeitpunkt der verpflichtenden Abgabe auf Fahrplanjahr 2023 geändert
• Korrektur Wertebereich TractionType
09.02.2021 • Angaben LocoTypeNumber (TAF), RollingStockNumber (TAP) sowie weitere Ele-
mente optional gesetzt
• Rahmenbedingungen ergänzt
16.07.2021 • Anpassung Ablageort xsd-Schema gem. Änderung bei RNE
• Anpassung Meldungsbeschreibung gem. neuem europ. xsd-Schema
• Anpassung Kapitel zum Meldungsinhalt
27.07.2021 • Anpassung Liste zulässiger Zugbeeinflussungssysteme
14.09.2021 • Anpassung Ansprechpartner, Tabelle, Einfügen Antragsformular
03.01.2022 • Aufnahme WagonData in TCM für Zulieferung Schienenlärmschutzgesetz
• Korrektur Zahlenformat Werteliste TrainCC_System gem. europ. xsd
• Ergänzung zu Webportal zur händischen Eingabe TCM/PTCM
21.03.2022 • Anpassung Zeitachse
• Aufnahme Element BrakingRatio (Bremshundertstel) und Beschreibung MBR-Pro-
zess bei DB InfraGO
04.04.2022 • Fehlerkorrektur Formulierung PassengerTrainComposition message, JourneySec-
tionOrigin/Destination
01.08.2022 • Hinweis zu Betriebsstellen mit mehreren PrimaryLocationCodes
• Information zur Nutzung TAF/TAP-Identifier
• Hinweis zu Bremsstellung Gesamtzug
24.10.2022 • Anpassung Ansprechpartner Schienenlärmschutzgesetz
10.03.2023 • Hinweis Verfügbarkeit MBR Funktion
• Hinweis Verpflichtung der Meldungsabgabe
19.04.2023 • Information zur Nutzung TAF/TAP-Identifier
04.07.2023 • Anpassung Datum Produktivsetzung, Hinweise TAF/TAP-Identifier, Werteliste Zug-
beeinflussung
09.08.2023 • Inbetriebnahmedatum MBR-Funktion, Informationen zu Zugsicherungssystemen,
Bremsstellung
13.12.2023 • Hinweise zu Soll-Zeiten, führenden Nullen im Element OTN, Sendemodalitäten,
Betriebsstellen im Grenzbereich
• Umstellung DB Netz AG auf DB InfraGO AG
08.04.2024 • Anpassung Datum Produktivsetzung
• Ergänzung Hinweise zu alternativem Meldeweg, TractionMode
03.07.2024 • Aufnahme zusätzlicher xsd-Version 3.4.1.0
20.09.2024 • Entfall BrakeWeight wegen teilweiser Konflikte zu BrakingRatio
• Anpassung Nutzungsbeginn TAF/TAP-Identifier auf 12/2026
30.09.2024 • Schärfung einiger Formulierungen, keine fachlichen Änderungen
20.11.2024 • Hinweis Zeitachse Zulieferung Schienenlärmschutzgesetz
27.03.2025 • Ansprechpartner Produktmanagement
• Anpassung Ausnahmen bei Übermittlung bei passenden Plandaten, TCM-Editor,
Umsetzungsdatum MBR-tool
• Anpassung Hinweise zu TractionMode auf Basis europ. Diskussionen
• Anpassung Datum Produktivsetzung TTT auf Basis OTN
24.04.2025 • Korrektur Feldname ScheduledDateTimeAtTransfer in PTCM
04.06.2025 • Änderung Antragsstellung Meldungsaustausch, Hinweis zu Richtungswechsel GV
03.07.2025 • Produktivsetzung TCM-Editor
29.09.2025 • Hinweis zu verwendbaren XSD-Versionen in Meldungsaufbau
• Schärfung Hinweise zu Meldungsversand in Rahmenbedingungen
24.11.2025 • Anpassung Vorgabe TrainCC_System für geschobene Züge
• Schärfung einiger Beschreibungen von Meldungsfeldern
• Update MBR-Funktion
• Hinweis Bauzüge
3

## Seite 4

Datum Änderung
10.12.2025 • Schärfung einzelner Feldbezeichnungen TCM/PTCM
22.04.2026 • Änderung Begrifflichkeit CompanyCode zu OrganisationCode
• Angabe ResponsibleRU in TCM/PTCM
05.06.2026 • Hinweis Error message und zeitliche Schwelle PTCM-Verarbeitung
4

## Seite 5

1 Allgemeines
Auf Grundlage der EU-Verordnungen 1305/2014 Technical Specification for Interoperability –
Telematics Applications for Freight (TAF TSI) und 454/2011 Telematics Applications for Pass-
enger Services (TAP TSI) sind die Akteure des europäischen Eisenbahnsektors verpflichtet,
den Austausch bestimmter Datenmeldungen in einem europäisch einheitlich definierten Format
zu unterstützen. Die vorgesehenen Meldungen sind den o.g. Verordnungen der Europäischen
Union, bzw. deren Revisionen zu entnehmen. Meldungsformat und -inhalt entsprechen den Vor-
gaben gemäß TAF/TAP TSI, bzw. der Abstimmungen in den europäischen Gremien.
Die Abgabe der im weiteren Verlauf genauer beschriebenen Datensätze Zugeigenschaften
(TAF Train Composition Message, TCM bzw. TAP PassengerTrainCompositionMessage,
PTCM), welche der Übermittlung der tatsächlich vorhandenen Charakteristika (insbesondere
der fahrdynamischen Eigenschaften) eines Zuges dienen. Im Folgenden wird der Einfachheit
halber oft der Begriff „TCM“ verwendet, wenn beide Meldungen gemeint sind.
Die Übermittlung dieser Meldungen an die DB InfraGO AG ist ab 12/2025 aufgrund des hohen
Mehrwerts verpflichtend. Sollten zum jeweiligen Übermittlungszeitpunkt der TCM/PTCM die ak-
tuellen Daten des Zuges nicht rechtzeitig vorliegen, so ist stattdessen die Übermittlung von, zu
diesem Zeitpunkt, aktuellen vorliegenden Produktionsdaten (z.B. Tagesplanung) zulässig. Sind
in Sonderfällen (z.B. kleiner Grenzverkehr, unzureichende Mitteilung von Daten seitens anderer
EVU bei Übernahme eines Zuges) nur die in der Trassenanmeldung angegebenen Daten ver-
fügbar, so kann von der Übermittlung abgesehen werden, da diese der DB InfraGO bereits vor-
liegen. Sofern das EVU sicherstellen kann, dass die aktuellen Daten des Zuges denen aus der
Trassenanmeldung entsprechen, so ist eine Übermittlung der TCM/PTCM nicht notwendig. Dies
gilt insbesondere für kurzfristige Trassenanmeldungen im ad-hoc Verkehr. Ebenso ist eine
leicht zeitverzögerte Bereitstellung der Meldungen in Sonderfällen zulässig.
Diese Ausnahmeregelungen werden in den kommenden Jahren evaluiert und ggf. ein Auslau-
fen beschlossen. Eine Änderung wird mit entsprechendem Vorlauf bekannt gegeben.
DB InfraGO empfiehlt den EVU ausdrücklich, die Error message zu empfangen und auszuwer-
ten, da diese zahlreichen Informationen zu etwaigen Fehlern in TCM/PTCM enthalten. Das EVU
kann so kontrollieren, warum Meldungen seitens DB InfraGO nicht verarbeitet wurden.
1.1 Alternative zum Meldungsversand
Für EVU, welche den Versand einer TCM bzw. PTCM gemäß TAF/TAP TSI nicht ermöglichen
können oder wollen, stellt die DB InfraGO AG mit ausreichendem Vorlauf vor der verpflichten-
den Abgabe der Zugeigenschaften als Alternative zum Versand den sogenannten TCM-Editor
zur Verfügung. Dieser wird die Möglichkeit einer manuellen Eingabe der Zugeigenschaften so-
wie die Möglichkeit des Hochladens einer vordefinierten csv-Datei oder der TCM/PTCM als xml-
Datei beinhalten. Der TCM-Editor ist über das Infraportal der DB InfraGO aufrufbar. Er beinhal-
tet einen Testmodus, welcher zum Kennenlernen der Funktionen genutzt werden kann. Ferner
ist ein Bedienerhandbuch auf derselben Homepage wie diese Technische Beschreibung verfüg-
bar.
Die dabei für die Abgabe der Zugeigenschaften geforderten Inhalte, Fristen, etc. gelten analog
zu den Angaben in dieser Technischen Beschreibung, welche daher auch als Ausfüllhinweis für
diese alternativen Wege genutzt werden kann.
5

## Seite 6

2 Schnittstellenbeschreibung
Als Grundlage des Datenaustausches hat die auf europäischer Ebene bei RailNet Europe ein-
gerichtete Common Components Group das sogenannte Common Interface als Standardsoft-
ware entwickelt. Alternativ kann eine selbst entwickelte Schnittstelle oder Software von Drittan-
bietern zum Einsatz kommen, welche die Funktionen des Common Interface exakt nachbildet.
Die Beschreibung der Schnittstelle ist der Produktbeschreibung des Common Interface, bzw.
den entsprechenden Dokumenten der TAF/TAP TSI Common Components Group zu entneh-
men, welche von dieser erhältlich sind. Informationen sind auch auf der Homepage der RailNet
Europe (TAF/TAP TSI) verfügbar.
Auf Seiten DB InfraGO fungiert der Betriebsdatenverteiler als Common Interface.
2.1 Antrag auf Meldungsaustausch
Anträge auf den Austausch von TAF/TAP-Meldungen mit der DB InfraGO können über das
Infraportal mittels tool zur BDV Anmeldung gestellt werden. Der Link ist auf den Seiten des Be-
triebs der DB InfraGO TAF/TAP-Homepage (www.dbinfrago.com/taf-tap-tsi) hinterlegt. Dies ist
dieselbe Seite auf welcher auch diese Technische Beschreibung zum Download bereitsteht.
6

## Seite 7

3 Beschreibung der Meldungen
3.1 Meldungsversand
Die Meldung ist EVU-seitig zu folgenden Zeitpunkten zu senden
 Vor Abfahrt des Zuges.
 Bei Änderungen der Zugeigenschaften auf dem Laufweg des Zuges vor der Weiterfahrt
mit der geänderten Zusammensetzung.
Dies schließt auch Fahrtrichtungswechsel des Zuges ein.1
 Ebenfalls ist eine neue Meldung zu senden, wenn sich die Zugeigenschaften (bspw.
Austausch des Triebfahrzeugs oder aufgrund einer Störung) ändert.
Die TCM ist spätestens zum Zeitpunkt der Zugfertigmeldung (gem. Richtlinie Ril. 420.0200 Ab-
schnitt 3 (2)) bzw. schnellstmöglich nach Bekanntwerden von Änderungen zu senden. Ein
früherer Versand ist bis zu sieben Tagen vor Abfahrt möglich.
Da Züge des Personenverkehrs in der Regel nicht vor Plan verkehren, erfolgt die Verarbeitung
von PTCM bei DB InfraGO ab einer Stunde vor Planabfahrt um Verwirrung durch etwaige vor-
herige Updates zu vermeiden. Dies hat keine Auswirkung auf die Möglichkeit der früheren Mel-
dungsübermittlung. Eingehende PTCM werden seitens DB InfraGO gepuffert und in Reihen-
folge ihres Eingangs verarbeitet.
3.2 Meldungsinhalt
Die Meldungsinhalte entsprechen den europäischen Vorgaben. Eine detaillierte Beschreibung
findet sich im europäischen „TAP TSI and TAF TSI Sector Handbook for the Communication
between Railway Undertakings and Infrastructure Managers (RU/IM Telematics Sector Hand-
book)“ bzw. den jeweiligen Folgedokumenten. Die Dokumente werden von der Joint Sector
Group und der European Railway Agency (ERA) auf ihrer Website veröffentlicht.
Die in den jeweiligen Meldungen TAF Train Composition Message und TAP Passenger Train
Composition Message bei DB InfraGO verwendeten Elemente sowie weitere meldungsspezifi-
sche Angaben sind im Folgenden beschrieben. Alle ausgeschlossen bzw. nicht benannten Ele-
mente können übergeben werden, eine Verarbeitung durch die DB InfraGO erfolgt jedoch nicht.
Eine Zugbildung ist jeweils für einen Abschnitt gültig (JourneySection). Ein Abschnitt endet so-
mit an der Betriebsstelle, an der die nächste Änderung an den Zugeigenschaften erfolgt, bzw.
am Zielbahnhof. Die genannten Betriebsstellen müssen sich auf dem Netz der DB InfraGO AG
befinden, bei grenzüberschreitend verkehrenden Zügen ist der erste/letzte Punkt der Journey-
Section entsprechend die Netzgrenze. Kann die Grenzbetriebsstelle nicht ermittelt werden, so
ist auch die Verwendung der nächstgelegenen bekannten Betriebsstelle möglich. Diese muss
Teil des Zuglaufs sein und auf dem Netz der DB InfraGO liegen. Es können mehrere Abschnitte
in einer Meldung geliefert werden.
Für eine korrekte Verarbeitung müssen die in der Meldung angegebenen Referenz-Betriebsstel-
len/PLC (PrimaryLocationCodes) den Betriebsstellen aus der Trassenbestellung bzw. dem Dis-
pofahrplan aus der aktuellen PathDetails message der DB InfraGO an ein EVU entsprechen.
Dieses stellt aber keine Verpflichtung zur Verarbeitung der PathDetails message für die Zuliefe-
rer der TCM dar. Bei Betriebsstellen mit mehreren PLC können die Meldungen in der Regel
auch dann korrekt zugeordnet werden, wenn (zB durch einen Gleiswechsel) kurzfristig ein an-
derer PrimaryLocationCode innerhalb derselben Betriebsstelle befahren wird.
1 Für diesen Fall wäre es möglich den Wert DirectionOfDescription zu ändern (Zug wird vom Zugende beschrieben)
und das Feld TractionMode ist entsprechend der Rolle des Tfz anzupassen, soweit sich keine weiteren Werte der
Zugeigenschaften ändern. Für die TCM (Güterverkehr) sind Fahrtrichtungswechsel derzeit nicht relevant, da sich
dadurch keine Änderungen an den von DB InfraGO abgefragten Meldungselementen ergeben.
7

## Seite 8

Die TAF Train Composition Message (Güterverkehr) sowie die TAP Passenger Train Composi-
tion Message (Personenverkehr) ist wahlweise gemäß TAF/TAP TSI Meldungsschema („TAF
TSI XSD Schema“) Version 3.0.2.0 oder Version 3.4.1.0 bereitzustellen.
Die für die Belieferung der DB InfraGO AG zu verwendenden Elementen der TCM sind im Fol-
genden beschrieben, die dortigen Hinweise sind zu beachten. Die europäischen Meldungssche-
mata sind auf den Websites der Joint Sector Group (JSG) unter http://taf-jsg.info/?page_id=172
veröffentlicht. Auf der angegebenen Internetseite gelangt man durch einen Klick auf den Link
am Textende auf den Ablageort der Meldungsschemata. Die untenstehende tabellarische Dar-
stellung des Meldungsaufbaus beruht auf dem Schema von der Homepage der DB InfraGO. Et-
waige Unterschiede im Aufbau der beiden Versionen haben keine Auswirkung auf den fachli-
chen Inhalt, welcher in den Feldern der Version 3.4.1.0 analog zur Version DB InfraGO ist.
Es ist zu beachten, dass im europäischen Meldungsschema eine Vielzahl von Datenfeldern in
den Meldungen optional sind. Hintergrund ist, dass die Meldungen für möglichst viele Ge-
schäftsfälle der verschiedenen Unternehmen in der EU nutzbar sein sollen. Hierdurch ist be-
dingt, dass solche „xsd-optionalen-Felder“ im Datenaustausch zwischen einzelnen Unterneh-
men benötigt werden, also dort verpflichtend sind. So gibt es auch im Meldungsaustausch mit
der DB InfraGO AG einzelne solcher Felder, die in den untenstehenden Beschreibungen der
Meldungen enthalten sind. Das Füllen weiterer Felder ist unkritisch, da diese bei Eingang der
Meldung beim Empfänger einfach ignoriert werden können.
Falls EVU das in Kapitel 4 beschriebenen vereinfachte Verfahren zur Meldung abweichenden
Bremshundertstel nutzen wollen, muss Version 3.4.1.0 oder alternativ das DB-InfraGO-xsd-
Schema verwendet werden, welches auf der Homepage der DB InfraGO bereitgestellt wird.
Dieses Schema basiert auf der europäischen TAF/TAP TSI XSD Version 3.0.2.0 der RNE und
beinhaltet zusätzliche Elemente in der TrainActivity für die ObjectInfo message und das Ele-
ment BrakingRatio (Bremshundertstel) in der TCM/PTCM. Hintergrund ist, dass das für das ver-
einfachte Verfahren notwendige Element „BrakingRatio“ in der europäischen Version 3.0.2.0
zum Zeitpunkt der Veröffentlichung mittels ChangeRequest in Europa beantragt, aber noch
nicht umgesetzt war.
3.3 Erläuterungen zum Umgang mit den TAF/TAP-Objekten/Identifiern
Die volle Einführung der TAF/TAP-Objekte (ReferenceTrain und Path) mit den dazugehörigen
Identifikatoren (ReferenceTrainID und PathID) ist für den Bereich Betrieb der DB InfraGO für
12/2026 geplant. Sie kommen zusätzlich zum OTN-Identifier (Zugnummer+Betriebstag) zum Ein-
satz, welche bis dahin die einzige Identifikation des Zuges darstellt. Diese Zeitachse erfolgt in
Abstimmung mit den Planungen bei der Fahrplanung/Trassenanmeldung. Die Darstellung der
Identifierstrukturen in den untenstehenden Meldungsbeschreibungen ist demnach bis dahin nur
nachrichtlich.
Bei Meldungen, die von den EVU an DB InfraGO versendet werden, ist gemäß europäischer
Vorgabe stets die aktuelle ReferenceTrainID anzugeben. Dies stellt den Standardfall dar. Alter-
nativ können auch nach 12/2026 bei DB InfraGO eingehende TAF/TAP-Meldungen verarbeitet
werden, welche nur die OTN-Identifier enthalten. Auch nach 12/2026 muss der OTN-Identifier
stets mit angegeben werden. Dies gilt bis die TAF/TAP-Identifier in der Breite des Marktes sicher
und fehlerfrei verwendet werden und keine Gefahr zu erwarten ist, Informationen bei DB InfraGO
oder den EVU aufgrund von fehlerhaften oder Dummy-Werten dem falschen Zug zuzuordnen.
Die Angabe der PathID ist nicht notwendig, diese wird bei DB InfraGO nicht verarbeitet und in
einer eingehenden Meldung ignoriert. Für DB InfraGO ist die Verarbeitung der OTN/Zugnummer
bei eingehenden TAF/TAP-Meldungen entweder mit (analog Darstellung Zugnummer in UIC-Te-
legrammen) oder ohne führenden Nullen möglich.
8

## Seite 9

3.4 Meldungsaufbau
Im Folgenden sind die bei der DB InfraGO AG verwendeten Datenelemente der Meldungen auf-
geführt. Zur Vereinfachung der Meldungsverwaltung bei den Kunden (Verwendung derselben
Ausprägung der Meldung bei mehreren Abnehmern) ist die Übermittlung weiterer Datenelemente
gemäß des europäischen TAF/TAP-Meldungsschemas möglich. Solche zusätzlichen Elemente
werden bei der Verarbeitung in den Systemen der DB InfraGO AG ignoriert.
9

## Seite 10

3.4.1 TAF Train Composition Message (Schienengüterverkehr)
Die folgenden Datenelemente gemäß Meldungsschema sind zu übergeben. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Meldungsschema
(xsd) optional sind (kursiv in untenstehender Tabelle = optionales Element bei DB InfraGO, restliche Felder sind Pflichtfelder).
TrainCompositionMessage
ME E1 E2 E3 Beispiel Bemerkung
MessageHeader -
MessageReference -
MessageType 3003
MessageTypeVersion 3.0.2.0 Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 bestellt werden.
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-23T08:22:39+1:00
Sender 9999 OrganisationCode Sender (EVU)
Recipient 0080 OrganisationCode Empfänger (DB InfraGO)
MessageStatus -
Wird immer als neu angenommen, ältere Meldungen für den jeweiligen Abschnitt
MessageStatus 1
(JourneySection) werden überschrieben.
TransportOperationalIdentifiers Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026.
P-
6
ObjectType TR TR = Train
A2 Company 1234 OrganisationCode des Ersteller-EVU
T0
/F
A /2
2
Core --ABCD123456 Kernelement
T
r e
1
b
a Variant 00 Variante für ReferenceTrainID immer "00"
d r
g
n
u
e ifitn TimetableYear 2023 Fahrplanjahr für diesen Zug
z tu e d Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im Ausland abwei-
NI StartDate 2023-03-17
chend vom Betriebstag bei DB InfraGO sein)
OperationalTrainNumberIdentifier -
OperationalTrainNumber 4711 Zugnummer. Diese kann mit oder ohne führenden Nullen verarbeitet werden.
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00 Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Regel-Soll
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00 Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Regel-Soll
TrainCompositionJourneySection -
JourneySection -
JourneySectionDestination -
CountryCodeISO DE Ländercode
10

## Seite 11

TrainCompositionMessage
Code der Betriebsstelle (auf DB InfraGO Gebiet), an der der beschriebene Ab-
LocationPrimaryCode 14421
schnitt der Zugfahrt endet
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Regel-Soll
gemäß Fahrplanung (ReferenceLocationDateTime) als auch des Dispo-Soll ge-
mäß aktueller Disposition (BookedLocationDateTime) möglich. Die Auswahl muss
BookedLocationDateTime 2020-03-23T18:29:39+1:00
innerhalb einer Meldung konsistent sein (Verwendung von Regel-Soll oder Dispo-
Soll bei allen Angaben zur Fahrplanzeit) um eine korrekte Zuordnung zu ermögli-
chen.
JourneySectionOrigin -
CountryCodeISO DE Ländercode
Code der Betriebsstelle (auf DB InfraGO Gebiet), an der der beschriebene Ab-
LocationPrimaryCode 18713
schnitt der Zugfahrt beginnt
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Regel-Soll
gemäß Fahrplanung (ReferenceLocationDateTime) als auch des Dispo-Soll ge-
mäß aktueller Disposition (BookedLocationDateTime) möglich. Die Auswahl muss
BookedLocationDateTime 2020-03-23T11:23:39+1:00
innerhalb einer Meldung konsistent sein (Verwendung von Regel-Soll oder Dispo-
Soll bei allen Angaben zur Fahrplanzeit) um eine korrekte Zuordnung zu ermögli-
chen.
ResponsibilityActualSection -
ResponsibleRU 9999 ResponsibleRU für den jeweiligen Abschnitt.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
ResponsibleIM 0080
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
TrainRunningData -
TrainRunningTechData -
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
TrainType 1
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
TrainWeight 660 Aktuelles Gesamtzuggewicht in Tonnen
TrainLength 0720 Aktuelle Gesamtzuglänge in Meter
Verfügbare/Betriebsbereite Zugbeeinflussungssysteme des Zuges. Pflichtfeld ent-
TrainCC_System 40 fällt nur bei geschobenen Zügen ohne technische Zugbeeinflussung an der Zug-
spitze.
Theoretische Höchstgeschwindigkeit des Zuges in km/h (nicht Fahrplangeschwin-
TrainMaxSpeed 100
digkeit)
BrakeType 0 Genutzte Bremsstellung des Gesamtzuges
BrakingRatio 85 Aktuelle Bremshundertstel -optionales DB-InfraGO-spezifisches Feld (vgl. Kap. 5).
NumberOfVehicles 24 Aktuelle Anzahl Fahrzeuge des Zuges (Wagen und Tfz)
Struktur LocoIdent insgesamt optional - bei Lieferung sind alle genannten Felder
LocoIdent -
zu befüllen
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
TractionType 11
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
In LocoTypeNumber ist der „Triebfahrzeug-Typ“ (hier Triebfahrzeug-Bau-
LocoTypeNumber -
reihe+Variante) einzutragen. Die EuropeanVehicleNumber ist hier nicht
11

## Seite 12

TrainCompositionMessage
vorgesehen, sondern im Feld „LocoNumber“ der TCM, welches bei DB InfraGO
nicht verwendet wird.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
TypeCode1 9
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
TypeCode2 1
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
CountryCode 80 Ländercode des Zulassungslandes; nicht ISO CountryCode
Triebfahrzeug-Baureihennummer, ggf. mit führenden Nullen auf 4 Stellen ergän-
SeriesNumber 0185
zen
Triebfahrzeug-Variantennummer, ggf. mit führenden Nullen auf 3 Stellen ergän-
SerialNumber 001
zen
TractionMode 11 Rolle des Tfz
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann
LivestockOrPeopleIndicator
ein Dummy-Wert mit richtiger Struktur eingetragen werden.
Struktur WagonData für Angaben zu Lieferung im Rahmen Schienenlärmschutzgesetz. Sobald diese Funktion verfügbar ist,
WagonData wird DB InfraGO gesondert darüber informieren.
Rückfrage hierzu an DB InfraGO AG, Vertrieb: [Kontaktangabe entfernt]
WagonNumberFreight Wagennummer, Angabe für Zulieferung im Rahmen Schienenlärmschutzgesetz.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
WagonTrainPosition
getragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
WagonOperationalData
getragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
WagonTechData
getragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
LengthOverBuffer
getragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
WagonNumberOfAxles
getragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein Dummy-Wert mit richtiger Struktur ein-
WagonWeightEmpty
getragen werden.
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
Ebene 4
12

## Seite 13

3.4.2 TAP Passenger Train Composition Message (Schienenpersonenverkehr)
Die folgenden Datenelemente gemäß Meldungsschema sind zu übergeben. Dies beinhaltet auch Elemente, die im europäischen TAF/TAP-Meldungsschema
(xsd) optional sind (kursiv in untenstehender Tabelle = optionales Element bei DB InfraGO, restliche Felder sind Pflichtfelder).
PassengerTrainCompositionMessage
ME E1 E2 E3 E4 Beispiel Bemerkung
MessageHeader
MessageReference -
MessageType 4500
MessageTypeVersion 3.0.2.0 Es können die XSD-Versionen 3.0.2.0 oder 3.4.1.0 bestellt werden
MessageIdentifier 2c05811f-… Technisch eindeutig (bspw. UUID)
MessageDateTime 2020-03-23T08:22:39+1:00
Sender 9999 OrganisationCode Sender (EVU)
Recipient 0080 OrganisationCode Empfänger (DB InfraGO)
MessageStatus
Wird immer als neu angenommen, ältere Meldungen für den jeweiligen Abschnitt
MessageStatus 1
(JourneySection) werden überschrieben.
TransportOperationalIdentifiers Nutzung der TAF/TAP-Identifier bei DB InfraGO Betrieb ab 12/2026.
P-
6
ObjectType TR TR = Train
A2
T0 Company 1234 OrganisationCode des Ersteller-EVU
/F
A T
r e d
/2
1
b
a r
2
C
Va
o
r
r
i
e
a nt
-
0
-
0
A BCD123456 K
V
e
a
r
r
n
ia
e
n
le
te
m
f
e
ü
n
r
t
R eferenceTrainID immer "00"
g
n
u
e ifitn
TimetableYear 2023 Fahrplanjahr für diesen Zug
z tu e d Datum der ursprünglichen Abfahrt des Zuges (kann bei Abfahrt im Ausland abwei-
NI StartDate 2023-03-17
chend vom Betriebstag bei DB InfraGO sein)
OperationalTrainNumberIdentifier
OperationalTrainNumber 4711 Zugnummer. Diese kann mit oder ohne führenden Nullen verarbeitet werden.
ScheduledTimeAtHandover 2020-03-24T08:22:39+1:00 Erster Zeitpunkt auf DB InfraGO Infrastruktur gem. Regel-Soll
ScheduledDateTimeAtTransfer 2020-03-24T18:29:39+1:00 Letzter Zeitpunkt auf DB InfraGO Infrastruktur gem. Regel-Soll
PassengerTrainCompositionJourneySection
PassengerJourneySection -
PassengerJourneySectionOrigin
JourneySectionOrigin -
CountryCodeISO DE Ländercode
13

## Seite 14

PassengerTrainCompositionMessage
Code der Betriebsstelle (auf DB InfraGO Gebiet), an der der beschriebene Abschnitt
LocationPrimaryCode 18713
der Zugfahrt beginnt
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Regel-Soll ge-
mäß Fahrplanung (ReferenceLocationDateTime) als auch des Dispo-Soll gemäß ak-
BookedLocationDateTime 2020-03-23T11:23:39+1:00 tueller Disposition (BookedLocationDateTime) möglich. Die Auswahl muss innerhalb
einer Meldung konsistent sein (Verwendung von Regel-Soll oder Dispo-Soll bei allen
Angaben zur Fahrplanzeit) um eine korrekte Zuordnung zu ermöglichen.
JourneySectionDestination -
CountryCodeISO DE Ländercode
Code der Betriebsstelle (auf DB InfraGO Gebiet), an der der beschriebene Abschnitt
LocationPrimaryCode 14421
der Zugfahrt endet
Entspricht Ankunfts-/Abfahrtszeit. Es ist sowohl die Verarbeitung des Regel-Soll ge-
mäß Fahrplanung (ReferenceLocationDateTime) als auch des Dispo-Soll gemäß ak-
BookedLocationDateTime 2020-03-23T18:29:39+1:00 tueller Disposition (BookedLocationDateTime) möglich. Die Auswahl muss innerhalb
einer Meldung konsistent sein (Verwendung von Regel-Soll oder Dispo-Soll bei allen
Angaben zur Fahrplanzeit) um eine korrekte Zuordnung zu ermöglichen.
ResponsibilityActualSection -
ResponsibleRU 9999 ResponsibleRU für den jeweiligen Abschnitt.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein
ResponsibleIM 0080
Dummy-Wert mit richtiger Struktur eingetragen werden.
PassengerTrainData -
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein
TrainType 1
Dummy-Wert mit richtiger Struktur eingetragen werden.
Aktuelles Gesamtzuggewicht in Tonnen. Aufgrund teils verschiedener Berechnungs-
verfahren wird dieses Feld für Triebzüge nicht für die Anzeige ausgewertet, um
TrainWeight 660
scheinbare Abweichungen und Verwirrung bei den Nutzern der Systeme zu vermei-
den.
TrainLength 0310 Aktuelle Gesamtzuglänge in Meter
PushPullTrain true Zug ist wendefähig
Verfügbare/Betriebsbereite Zugbeeinflussungssysteme des Zuges. Pflichtfeld entfällt
TrainCC_System 40
nur bei geschobenen Zügen ohne technische Zugbeeinflussung an der Zugspitze.
Theoretische Höchstgeschwindigkeit des Zuges in km/h (nicht Fahrplangeschwindig-
TrainMaxSpeed 160
keit)
BrakeType 12 Genutzte Bremsstellung des Gesamtzuges
BrakingRatio 192 Aktuelle Bremshundertstel -optionales DB-InfraGO-spezifisches Feld (vgl. Kap. 5).
TiltingFunction false Zug fährt mit Neigetechnik
UnitCount - 1=Vehicle, 2=Trainset
NumberOfUnits Anzahl aller Fahrzeuge (Tfz/Wagen bzw. Trainsets)
DirectionOfDescription Zug ist von der Zugspitze (1) oder vom Zugende (9) beschrieben
UnitData Für Tfz/Triebzug zu füllen, für Wagen in lokbespannten Züge nicht gefordert
14

## Seite 15

PassengerTrainCompositionMessage
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein
UnitPositionInTrain
Dummy-Wert mit richtiger Struktur eingetragen werden.
UnitIdentification Angabe, ob es sich um ein Triebzug oder eine Lokomotive handelt.
Struktur LocoTypeNumber insgesamt optional - bei Lieferung sind alle genannten Fel-
der zu befüllen.
In LocoTypeNumber ist der „Triebfahrzeug-Typ“ (hier Triebfahrzeug-Baureihe+Vari-
LocoTypeNumber
ante) einzutragen. Die EuropeanVehicleNumber ist hier nicht vorgesehen, sondern im
Feld „EuropeanVehicleNumber“ der PTCM, welches bei DB InfraGO nicht verwendet
wird.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein
TypeCode1 9
Dummy-Wert mit richtiger Struktur eingetragen werden.
Pflichtfeld gem. europ. xsd. Aktuell keine Verarbeitung bei DB InfraGO, hier kann ein
TypeCode2 1
Dummy-Wert mit richtiger Struktur eingetragen werden.
CountryCode 80 Ländercode des Zulassungslandes; nicht ISO CountryCode
SeriesNumber 0185 Triebfahrzeug-Baureihennummer, ggf. mit führenden Nullen auf 4 Stellen ergänzen
SerialNumber 001 Triebfahrzeug-Variantennummer, ggf. mit führenden Nullen auf 3 Stellen ergänzen
Für Tfz/Triebzug (PoweredLocomotiveOrTrainset = true) zu füllen. Rolle des Tfz (Art
TractionMode 11
des Einsatzes).
PoweredLocomotiveOrTrainset true Angetriebenes Fahrzeug (ja/nein)
Legende
Meldungselement
Ebene 1
Ebene 2
Ebene 3
Ebene 4
15

## Seite 16

3.4.3 Wertelisten
Die folgenden Wertebereiche für die Elemente TrainCC-System (Zugsicherungssysteme) und BrakeType (Bremsstellung) aus der TCM/PTCM werden von DB
InfraGO verwendet. Dies ist analog zu den in der Trassenbestellung möglichen Werte. Die weiteren im der europäischen Meldungsschema (TAF/TAP-xsd)
enthaltenen Werte für diese Elemente können ebenfalls an DB InfraGO gesendet werden, sind für den vorliegenden Anwendungsfall jedoch nicht relevant. Im
Falle BrakeType erfolgt seitens DB InfraGO ein Mapping auf die unten genannten Werte. Im Falle der TrainCC-System werden diese zusätzlichen (hier nicht
aufgeführten) Werte ignoriert.
Element BrakeType Übrige Wert gem. europäischer Tabelle Mapping bei DB InfraGO Element TrainCC-System
verwendete Codes DB InfraGO BrakeType verwendete Codes DB InfraGO
0 Bremsstellung G 4 Bremsstellung G+E Bremsstellung G 07 CIR 1
1 Bremsstellung P 5 Bremsstellung G+H Bremsstellung G 08 CIR 1+2
3 Bremsstellung R 6 Bremsstellung P+E Bremsstellung P 09 CIR 2
8 Bremsstellung P+Mg 7 Bremsstellung P+H Bremsstellung P 17 ETCS L2 SRS 2.3.0d
11 Bremsstellung R+Mg 9 Bremsstellung R+E Bremsstellung R 18 ETCS L2 SRS 3.3.0 *
12 Bremsstellung R+WB 10 Bremsstellung R+H Bremsstellung R 19 ETCS L2 SRS 3.4.0
13 Bremsstellung R+E+Mg Bremsstellung R+Mg 20 ETCS L2 SRS 3.6.0
14 Bremsstellung R+E+WB Bremsstellung R+WB 40 LZB
44 PZB 90
Hinweise zum Element BrakeType (Bremsstellung Gesamtzug)
Bremsstellung „2=X=keine/defekte Bremse“ der europäischen Liste ist bei der Angabe Bremsstellung Gesamtzug nicht zulässig (Zug ohne Bremse ist nicht
möglich). Für die Anwendung im Kontext der TCM/PTCM ist die folgende Unterscheidung relevant:
1. Bremsstellung „G“
2. Bremsstellung „R/P“ – analog zum Verfahren in der Trassenanmeldung werden die Werte P, R, P+Mg, R+Mg hierauf übertragen
3. Bremsstellung „R+WB“ – dieser Wert ist für die Streckenkompatibilität relevant und ist demnach zu setzen, wenn mindestens ein Fahrzeug des Zuges
über eine Wirbelstrombremse verfügt.
Zu 2. „R/P“:
Im Sinne eines im Zusammenhang mit Bremsgewicht/Bremshundertstel sinnhaften Wertes ist eine genaue Angabe auch aus dem Wertebereich „R/P“ (P, R,
P+Mg, R+Mg) wünschenswert, zur regelkonformen Abgabe der TCM/PTCM ist dies jedoch nicht zwingend. Es ist zulässig, wenn für „R/P“ unabhängig von
der tatsächlichen Bremsstellung des Zuges ein beliebiger Wert P, R, P+Mg oder R+Mg übertragen wird, also zB im Meldungsausgang des EVU fest einge-
stellt ist.
* Wurde zurückgezogen, in Deutschland keine zuglässige Fahrzeugausrüstung
16

## Seite 17

3.4.4 Hinweise zum Element TractionMode
Zwar ist dieses Element im europäische TAF/TAP-Meldungsschema (xsd) beschrieben, da sein Inhalt jedoch etwas komplexer ist, sollen diese Hinweise eine
weitere Hilfestellung geben. Das Element TractionMode besteht aus zwei numerischen Stellen und dient der Beschreibung der Rolle und Position, die arbei-
tende Triebfahrzeug (Tfz) im Zug besitzen. Dabei gibt die erste Stelle die Rolle des Tfz an (die zweite Stelle wird im Weiteren beschrieben und hier durch „x“
ersetzt):
• 1x = Tfz an der Spitze des Zuges (es erfolgt keine direkte Unterscheidung zwischen Zuglok/Doppeltraktion und Zuglok mit Vorspannlok)
• 2x = Tfz in der Mitte des Zuges (also zwischen Wagen eingereiht bzw. weder ganz vorne, noch ganz hinten)
• 3x = Tfz am Ende des Zuges (Schublok, gekuppelt)
• 4x = Tfz am Ende des Zuges (Schublok, nicht gekuppelt)
• 5x = Tfz als Regelbespannung am Ende des Zuges (Steuerung aus Tfz oder Steuerwagen an der Spitze des Zuges). Im Gegensatz zu Schubloks
(TractionMode 3x, 4x) ergeben sich hieraus keine Implikationen für die Höchstgeschwindigkeit des Zuges.
Die zweite Stelle des Elements TractionMode wird für jedes in einer Rolle eingesetzte Tfz hochgezählt:
• x1 = Erstes Tfz in einer Rolle
• x2 = Zweites Tfz in einer Rolle
• usw.
In Kombination ergibt sich damit eine Aussage wie viele arbeitende Tfz in welcher Rolle im Zug vorhanden sind. Hier einige (theoretische) Beispiele zum
Verständnis:
• 11, 12, 13, 41, 42 = Zug mit drei Tfz an der Spitze und zwei ungekuppelten Schubloks am Zugende
• 11, 51 = Zug mit einem führenden Tfz und einem Tfz als Regelbespannung am Zugende.
• 21, 51, 52 = Zug mit führendem Steuerwagen, einem Tfz in der Zugmitte und zwei Tfz am Zugende.
Dieser Zug wäre nach einem Fahrtrichtungswechsel (zB nach Halt in einem Kopfbahnhof) mit „11, 12, 21“ anzugeben, da die beiden Tfz dann an der
Spitze verkehren und der Steuerwagen nicht genutzt wird.
17

## Seite 18

4 Beschreibung MBR Funktion
4.1 Bremshundertstel elektronisch übermitteln
Zugeigenschaften, die sich unmittelbar vor oder während der Fahrt ändern, können zu reduzier-
ten Bremshundertstel führen. Diese sind DB InfraGO zu melden und können zur Neuberech-
nung der Geschwindigkeiten sowie zur Veröffentlichung eines angepassten Fahrplans führen.
Die jeweiligen Meldungen TAF Train Composition Message und TAP Passenger Train Compo-
sition Message bieten die Möglichkeit eine Abweichung der Bremshundertstel des Zuges elekt-
ronisch an die DB InfraGO AG zu übermitteln. Durch diese elektronische Übermittlung wird die
Verarbeitung zur Berechnung der neuen Geschwindigkeiten automatisch angestoßen.
Folgende Voraussetzungen müssen zur automatischen Verarbeitung der abweichenden Brems-
hundertstel erfüllt sein:
 Der Wert der Bremshundertstel muss noch mindestens 90% vom ursprünglichen Wert
des Sollfahrplans betragen.
 Der Wert der Bremshundertstel muss mindestens 56 Bremshundertstel betragen.
Sind diese Voraussetzungen nicht erfüllt, ist die automatische Verarbeitung ausgeschlossen. In
diesen Fällen ist eine fernmündliche Meldung an den Bereichsdisponenten erforderlich.
Unabhängig von der Möglichkeit der automatischen Übermittlung, bleibt weiterhin die Möglich-
keit die aktuellen Bremshundertstel fernmündlich an den Bereichsdisponenten zu melden. Die
TCM kann auch ohne dieses Feld an DB InfraGO übermittelt werden.
Die DB InfraGO wird per Kund:inneninformation über diese Funktion und ihre Umsetzung infor-
mieren. Rückfragen können an [Kontaktangabe entfernt] gerichtet werden.
4.2 Bekanntgabe der Geschwindigkeiten
Die aktuellen Geschwindigkeiten auf Basis der vorhandenen Bremshundertstel werden dem
Triebfahrzeugführer als aktualisierter elektronischer Buchfahrplan (EBuLa) zur Verfügung ge-
stellt. Für den Fall, dass kein Bordgerät (EBuLa) vorhanden ist, erfolgt die Bekanntgabe als
Fahrplan-Anordnung (Fplo) an das EVU. Diese enthält die entsprechenden Verweise auf die
Buchfahrplanhefte.
Technische Beschreibung Empfang von Zuginhaltsdaten gemäß TAF/TAP TSI
18

## Seite 19

5 Rahmenbedingungen
Neben den oben genannten Angaben sind die folgenden Rahmenbedingungen zu beachten:
 Der Versand der TCM durch einen Dienstleister oder anderes EVU im Auftrag des
ResponsibleRU ist zulässig. Dies ist der DB InfraGO AG bei Anmeldung zur Information
mitzuteilen.
 Sollten bei Zügen, welche durch den Trassenhalter (ResponsibleRU, für den betrieblichen
Datenaustausch mit dem EIU gemäß TAF/TAP TSI verantwortliches EVU) für den Bereich
der DB InfraGO übernommen werden, Datenelemente vom vorherigen EVU fehlen, so ist
dies mit der DB InfraGO AG abzustimmen.
 Die Zuverlässigkeit der Daten und Datenlieferung ist für die Akzeptanz in der Betriebsfüh-
rung unerlässlich.
 Werden gemäß obenstehenden Meldungsbeschreibungen optionale Datenelemente (zB
Angaben zum Triebfahrzeug) nicht gefüllt, so wird DB InfraGO die letzten vorliegenden
Daten verwenden. Dies sind in letzter Konsequenz die entsprechenden Angaben aus der
Trassenanmeldung.
 Sperrfahrten sind vom Versand einer TCM ausgenommen. Für Bau- und verwandte Züge
(zB Schienenschleifzüge) ist der Versand optional.
 Der Versand der TCM/PTCM stellt keinen Verantwortungsübergang der Sicherstellung
der Kompatibilität des Zuges zur Strecke und zu den Mindestanforderungen gemäß Fahr-
plan dar. Diese Verantwortung verbleibt wie bisher vollumfänglich beim EVU.
 Insbesondere ersetzt die TCM/PTCM keine Anträge auf Abweichung der aktuellen Zugei-
genschaft gemäß Ril 420 oder der Verfahren zu Neu- und Abbestellung von Trassen ge-
mäß Ril 402. Diese sollen vor Versand der TCM/PTCM mit entsprechend geänderter Zu-
geigenschaften erfolgen. Eine Ausnahme bildet die in der Ril 420.0240 für das Fahrplan-
jahr 2026 beschriebene Übermittlung verminderter Bremshundertstel.
 Sollte festgestellt werden, dass Züge die Mindestanforderungen gemäß Fahrplan nicht
erfüllen und für sie kein Antrag eingegangen ist, können diese durch DB InfraGO vor oder
währende der Fahrt zurückgehalten werden.
 Bei Inkonsistenzen der Daten behält sich die DB InfraGO AG vor, die TCM/PTCM des
entsprechenden EVU bis zur Klärung des Sachverhalts nicht mehr zu berücksichtigen.
Dazu gehört unter anderem auch die Passfähigkeit der in den TCM/PTCM genutzten
Stammdaten (z.B. Triebfahrzeugdaten) zu denen der Trassenanmeldung.
 In den TCM/PTCM sind die Zugeigenschaften zu verwenden, die den zum jeweiligen Zeit-
punkt finalen Stand der Planung repräsentieren. Ideal sind die realen Zugeigenschaften,
ansonsten möglichst aktuelle Planwerte (z.B. aus der Tagesplanung). Nicht-finalisierte
Arbeitsstände während laufender Planungen sollten nicht als TCM/PTCM gesendet wer-
den, um Unklarheiten zu vermeiden.
 Andere Eisenbahninfrastrukturunternehmen haben durch die Mitnutzung der Dispositi-
onssysteme Einsicht in die Zugeigenschaften.
 Der Datenversender benötigt eine statische im Internet sichtbare IP-Adresse oder einen
per öffentlichen DNS auflösbaren Hostnamen. Als Transportprotokoll ist https zu verwen-
den (Port standardmäßig 443). Der Empfang der Meldungen wird gemäß den europäi-
schen Spezifikationen des Common Interface quittiert.
 Gemäß den Vorgaben der European Railway Agency ist beim TAF/TAP-Meldungsver-
sand ein Sicherheitszertifikat erforderlich welches bei RailNet Europe (RNE) bezogen
werden kann (https://ccs.rne.eu/).

## Seite 20

6 Ansprechpartner und Impressum
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
