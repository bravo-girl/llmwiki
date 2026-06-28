# Änderungsübersicht

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13509058/dfaf8b81e1c5f2639de300c22500c7ba/Aenderungsuebersicht-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13509058/dfaf8b81e1c5f2639de300c22500c7ba/Aenderungsuebersicht-data.pdf)
- Quellen-Schlüssel: `src-25920c0295e3a8208712`
- Abrufdatum: 2026-06-27
- Original: [[anderungsubersicht--src-25920c0295e3a8208712.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Übersicht der Änderungen zu Version 4.6.2
der SST-Dokumentation
des Bestellsystems der DB InfraGO AG für
EVU-Systeme
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
Version 1
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
1

## Seite 2

Inhaltsverzeichnis
1 Änderungen am Hauptdokument 4
2 Änderungen an Anlage 1 5
3 Änderungen an Anlage 3 9
4 Änderungen an Anlage 10 13
2

## Seite 3

3

## Seite 4

1 Änderungen am Hauptdokument
Referenz Version 4.6.1 Version 4.6.2
Kap 3.4 Der Prozess beginnt mit der Ankündigung einer Bau- Absatz gestrichen
betroffenheiten von Trassen durch baubedingte Kapa-
zitätseinschränkungen (BKE) mit dem in Anlage 1
aufgeführten CaseReference-Objekt „Baubetroffen-
heit“
Kap 4.5.1, Regel 3 Regel 3 der Zugnummern wird nicht angewendet, Details siehe
Anlage 3
Regel 5 Entfall des Beispiels bei Änderungen der Trassierung
Abbildung 11, Netzaus- Keine Abbildung des weiteren Vorgehens bei Frist- Aufnahme der Wahlmöglichkeit zur impliziten Annahme oder Ab-
gelöster Änderungs- und überschreitung lehnung durch das EIU nach europäischem Vorbild aus dem
Stornierungsprozess TAF/TAP TSI-SectorHandbook der JointSectorGroup
4

## Seite 5

2 Änderungen an Anlage 1
Referenz Version 4.6.1 Version 4.6.2
Kap 3.2.2, Tab 14 Aufnahme der ID 45 für die Kommunikation mit der KOMBau
Attribut MessageRoutingID
Kap 3.4.1 Aufnahme der Beschreibung der TemporaryCapacityRestric-
tionID
Übersicht Identifier
Kap 3.8.2, ResponsibleIM Aufnahme eines Hinweises zur Beachtung der Anlage 3
Kap. 3.8.2 BrakeType Ergänzung:
Die Angabe von hydrodynamischen (Zusatz H) und elektrody-
nami-schen (Zusatz E) Bremsen ist nicht gestattet. Bei Ver-
wendung die-ser Bremsart in der Bestellung ist das jeweilige
Äquivalent ohne entsprechenden Zusatz zu verwenden.
BrakingRatio Garantiert vorhandene Bremshundertstel des Garantiert vorhandene Bremshundertstel des Zuges, die vom
Zuges, die vom Kunden in der PathRequest- Kunden in der PathRequestMessage anzugeben und Grundla-
Message anzugeben sind. ge für die Trassenkonstruktion sind.
Definition als Mussfeld in der PDM
ExceptionalGaugingCode 1. Als Dauer-LÜ ist nur die Angabe „DA-1110“ in 1. Dauerbeförderungsanordnungen sindin der Form „DA-xxxx“
der PRM zu-gelassen anzugeben.
Muster ergänzt für Eingabe Dauerbeförderungsanordnung
Kap 3.9.3 und Kap 3.12.2 Ergänzung: Der Defaultwert ist „0“.
OffsettoReference
5

## Seite 6

Referenz Version 4.6.1 Version 4.6.2
Kap 3.14.6 „richtungswech- Ergänzende Angabe einer Begründung bei Rich- Ergänzende Angabe einer Begründung bei Richtungswechsel;
selgrund tungswechsel; kann in Verbindung mit der Nut- kann in Verbindung mit der Nutzung der TrainActivityCodes
zung der TrainActivityCodes 0005 bis 0007 für 0005 bis 0007 für erforderliche Richtungswechsel angegeben
erforderliche Richtungswechsel bzw. bei Nut- werden.
zung des TrainActivityCodes DE02 (für „Weitere
Die Angabe gilt lokal am ZLP/TLP
konstruktivbedingte Rich-tungswechsel zugelas-
sen“) angegeben werden.
Die Angabe gilt lokal am ZLP/TLP
haltabweichendText Dieses Feld darf gefüllt werden, wenn das Attri- Änderung:
but <TrainActivity-Code> mit dem Code 0004,
Dieses Feld darf gefüllt werden, wenn das Attribut <TrainActivi-
0009, 0020 oder 0027 gefüllt ist.
ty-Code> mit dem Code 0009, 0020 oder 0027 gefüllt ist.
Alternative Zugcharakteristik Ergänzung:
Alle Angaben zur Bespannung in der alternativen Zugcharakte-
ristik sind in der hier aufgeführten Reihenfolge anzugeben,
damit eine eindeutige Zuordnung zwischen azchLocoTy-
peNumber, azchTrac-tionMode, azchTrainWeight und az-
chTrainLength gewährleistet ist. Die Angaben zur Bespannung
sind gemäß den Einschränkungen in der TractionMode als
Gruppe wiederholbar
azchLocoTypeNumber Vorkommen 1..2 Vorkommen 1..N
azchTracthon Mode Für alternative Bespannungen sind nur die Rol- Für alternative Bespannungen sind nur die Rollen (Traction-
len (TractionMode) 1x und 5x zulässig Mode) 1x, 2x und 5x zulässig
Vorkommen 1..2 Vorkommen 1..N
etcsZugartGueltigBis Ergänzung:
Der PLC wird als 24-stelliger String geliefert.
Kap 3.16.1, JourneyLocation- Angabe muss an einem vom EVU bestellten Vorgabe nicht mehr erforderlich
TypeCode 05 „Interchange“ Verkehrshalt er-folgen
ReasonOfReferenceCode Hinweis auf Beachtung von Anlage 3 und 8
1006 und 1007
6

## Seite 7

Referenz Version 4.6.1 Version 4.6.2
ReasonofReferenceCode Nur Nutzung im unterjährigen Gelegenheitsver- Nur Nutzung im unterjährigen Gelegenheitsverkehr, Verwen-
1009 kehr. dung im Rahmen des ujBau Prozesses
Kap 3.16.2 TrainActivit Systemwechselhalt Systemwechsel(-halt)
Code 0004 Angabe des konkreten Haltegrundes kann im Darf als zusätzliche Information in Verbindung mit TypeCode
Textfeld „haltabwText“ erfolgen (vgl. Kapitel 0001, 0002 oder 0040 angegeben werden. Ist für den Wechsel
3.14.6). Darf als zusätzliche Information in Ver- der Antriebsart bei Hybrid-Tfz anzugeben. (weitere Details sie-
bindung mit TypeCode 0001, 0002 oder 0040 he Anlage 3)
angegeben werden. Ist für den Wechsel der An-
triebsart bei Hybrid-Tfz anzugeben.
Code DE02 Weitere konstruktivbedingte Richtungswechsel Weitere konstruktivbedingte Richtungswechsel nicht zuge-
zugelassen lassen
An dem Zuglaufpunkt, an welchem der Code An dem Zuglaufpunkt bis zum nächsten, sind ausschließlich
angegeben ist, sind nicht bestellte, aber kon- bestellte Richtungswechsel zugelassen. Richtungswechsel in
struktionsbedingte Richtungswechsel zugelas- Kopfbahnhöfen sind immer möglich.
sen. Richtungswechsel in Kopfbahnhöfen sind
unabhängig von der Bestätigung der Zulässigkeit
durch den ResponsibleApplicant immer möglich
und müssen nicht explizit angegeben werden
DE13 Ergänzung:
Verwendung ausschließlich im ujBau Prozess nach Anlage 10
Kap 4.3.1 Ergänzung
locationNameASCII Ist der Wert in der CRD nicht gefüllt, wird der Wert mit „unbe-
kannt“
Kap 4.3.6 Ergänzung:
verkehrsartKundeZusatz BaubedingteZusatzleistung
7

## Seite 8

8

## Seite 9

3 Änderungen an Anlage 3
Thema Referenz Beschreibung Vorübergehende Lösung
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
eingehalten werden, beibehalten werden.
Die gesamte Einschränkung gilt nicht für netz-
ausgelöste Änderungen aus dem unterjährigen
Baufahrplan.“
Ermittlung der Gesamt- Anlage 1, Anlage 10 Laut TAF/TAP TSI ist vom Besteller die Last Die Last und Länge des Triebfahrzeugs wird
länge und Gesamtlast und Länge von Triebfahrzeug, Wagenzug durch die Stammdaten bei der DB InfraGO über-
und Gesamtzug zu übermitteln und dies für schrieben und führt dann auch womöglich zu ei-
die Konstruktion zu verwenden. ner geänderten Gesamtzuglast und -länge.
Antriebsart von Hybrid- Anlage 1, Anlage 10 Der Wechsel der verwendeten Antriebsart ist Das bisherige Verfahren (Darstellung der An-
Tfz mit der Angabe im Feld „TypeOfUsedHybrid- triebsart über Tfz-Baureihenvarianten) bleibt bis
PowerUnit“ anzugeben. Ein Wechsel des auf Weiteres bestehen. Dabei wird ein Wechsel
Triebfahrzeugs ist nicht notwendig. der Antriebsart als Triebfahrzeugwechsel darge-
stellt, was auch bei Durchfahrt erfolgen kann. Die
Angabe im Feld „TypeofUsedHybridPowerUnit“ ist
9

## Seite 10

Thema Referenz Beschreibung Vorübergehende Lösung
ebenfalls anzugeben. Bei Abweichung ist die ver-
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
neyLocation Datenfel- zeichnet das für den nachfolgenden Abschnitt InfraGO den Laufpunkt konstruiert hat. Hierzu
der” verantwortliche EIU. wird der Company Code/Organisation Code der
DB InfraGO an jedem Laufpunkt abweichend zur
aktuellen Spezifikation wiederholt statt nur am
ersten Laufpunkt.
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
10

## Seite 11

Thema Referenz Beschreibung Vorübergehende Lösung
mit Hilfe der ObjectIn- 7.1 können zu einem Objekt alle beim jeweiligen PathIDs die jeweiligen Informationen bei der DB
foMessage Partner vorhandenen Informationen abgefragt InfraGO AG abzurufen. Eine Abfrage über ein
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
11

## Seite 12

12

## Seite 13

4 Änderungen an Anlage 10
Anpassungen welche analog zu Anlage 1 vorgenommen wurden, werden an dieser Stelle nicht erneut aufgelistet.
Referenz Version 4.6.1 Version 4.6.2
Kap 2.2 Ergänzung:
Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI
Standard senden.
Kap 3.1.1 und 3.1.2 Anpassungen an den Ablaufdiagrammen
Hinzunahme einer PathConfirmedMessage im Prozessschritt
GPE nach Stellungnahme
Kap 3.4 Zeitliche Brüche sind zu akzeptieren.
Trassenentwurf (fein)
Kap 3.6 Änderung:
Zustimmung zum GPE Eine Zustimmung bedeutet dabei nicht, dass das FPE iden-
tisch zum GPE oder GPEnS sein wird. Insbesondere die zeit-
liche Feinkonstruktion erfolgt erst zum FPE.
13

## Seite 14

Referenz Version 4.6.1 Version 4.6.2
Kap 3.7 Änderung:
Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI
Standard senden. Die von Seiten der DB InfraGO AG zwin-
gend erforderlichen Inhalte sind gegenüber den notwendigen
Angaben für vollwertige Trassenbestellungen (s. Anlage 1)
stellenweise reduziert. Die Fahrlage muss beizubehaltende
Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der
Stellungnahme analog einer Änderungsbestellung beinhal-
ten, ansonsten wird von einer nicht mehr vorliegenden Not-
wendigkeit dieser Zwangspunkte ausgegangen. Zusätzliche
Zwangspunkte beispielsweise zur Abbildung weiterer Ver-
kehrshalte oder gewünschter abweichender Laufwege kön-
nen bei Notwendigkeit ergänzt werden. Laufwegspunkte vom
Typ Durchfahrt dürfen nur angegeben werden, wenn sie auf
einem gegenüber dem GPE abweichenden Laufweg lauf-
wegsbestimmend sind, oder eine andere Regelung dies er-
fordert.
14

## Seite 15

Referenz Version 4.6.1 Version 4.6.2
Kap 3.10. Kapitel gesamthaft neu geschrieben
Einfluss von verfristeten Baumaß- Besondere Varianten des Prozesses können dazu führen,
nahmen und Aufteilung auf Pa- dass die skizzierten Prozesse nach Abschnitt 3.1.1 oder
thes auf den Prozess 3.1.2 mit jeder der drei Nachrichten GPE, GPE nach Stel-
lungnahme und FPE beginnen kann. Die Behandlung legiti-
mer verfristeter Baumaßnahmen kann unter Umständen da-
zu führen, dass der Prozess erst mit der FPE-Nachricht be-
ginnt. Ebenfalls kann ihre Behandlung dazu führen, dass zu
einer über die pathIDold identifizierte Regeltrasse für nicht
überschneidungsfreie Zeiträume mehrere Nachrichten vom
Typ GPE und/oder GPE nach Stellungnahme mit unter-
schiedlichen pathIDs gleichzeitig existieren. Dies tritt auf,
wenn zu einem bereits versendeten GPE oder GPE nach
Stellungnahme in einem anteiligen Zeitraum eine andere
Behandlung der Trasse durch eine verfristete Baumaßnahme
notwendig wird. Das ursprüngliche GPE oder GPE nach Stel-
lungnahme wird dann nicht korrigiert. Ein überschneidungs-
freier Zustand wird aber immer spätestens mit dem Prozess-
abschluss durch die zugehörigen FPE hergestellt. Eine bau-
bedingte Änderung kann jedoch auch durch eine weitere
baubedingte Änderung erneut geändert werden. Im Prozess
notwendige Aufteilungen von Paths die an denselben Ver-
kehrstagen gültig sind, die nicht zum Zeitpunkt des GPE be-
reits erfolgen können, führen ebenfalls dazu, dass Prozesse
mit dem GPE nach Stellungnahme oder FPE beginnen kön-
nen. Dies tritt unter anderem im Falle eines mittigen Teilaus-
falls (mit Schienenersatzverkehr (SEV)) auf, wo die Auftei-
lung in zwei Pathes mit jeweils eigener PathID (und OTN)
aber identischen Verkehrstagen und pathIDold erst im GPE
nach Stellungnahme oder FPE erfolgt.
15

## Seite 16

Referenz Version 4.6.1 Version 4.6.2
Tabelle 2 Nicht verwendete Attribute:
PathDetailsMessage • ReferenceTrainIDSubCalender
• TypeofRUHarmonization
• TypeofRUHarmonization
• CoordinatingIM
• ProcessType
• RequestedCalender
Kap 4.2.2 Ergänzung:
PathNotAvailableMessage Sie wird ebenfalls dazu verwendet, das vorzeitige Prozess-
ende zu übermitteln.
Tabelle 3 Beschreibung geändert:
RelatedPlannedTransportIdentifier Enthält zum einen eine Referenz auf die PathID, die entste-
hen würde, falls im Stellungnahmeprozess doch eine tras-
sierbare Trasse entstünde, und zum anderen den Bezug auf
die relevanten BKEen des GPE / FPE in Form einer TCID.
Bemerkung geändert:
Die referenzierte möglicherweise entstehende PathID ist in
Antworten des EVU auf eine PathNotAvailableMessage ge-
mäß Prozessschaubild wieder mitzugeben, um eine eindeu-
tige Zuordnung der Antwort beim EIU herstellen zu können.
16

## Seite 17

Referenz Version 4.6.1 Version 4.6.2
Kap 4.2.3 Änderung:
PathRequestMessage Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI
Standard senden. Die von Seiten der DB InfraGO AG zwin-
gend erforderlichen Inhalte sind gegenüber den notwendigen
Angaben für vollwertige Trassenbestellungen (s. Anlage 1)
stellenweise reduziert. Die Fahrlage muss beizubehaltende
Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der
Stellungnahme analog einer Änderungsbestellung beinhal-
ten, ansonsten wird von einer nicht mehr vorliegenden Not-
wendigkeit dieser Zwangspunkte ausgegangen. Zusätzliche
Zwangspunkte beispielsweise zur Abbildung weiterer Ver-
kehrshalte oder gewünschter abweichender Laufwege kön-
nen bei Notwendigkeit ergänzt werden. Laufwegspunkte vom
Typ Durchfahrt dürfen nur angegeben werden, wenn sie auf
einem gegenüber dem GPE abweichenden Laufweg lauf-
wegsbestimmend sind, oder eine andere Regelung dies er-
fordert.
Tabelle 4 Die Struktur TrainInformation muss zur Wahrung des
TAF/TAP TSI Standards gesendet werden, kann aber mit
Dummywerten befüllt werden:
Kap 5.1 Ergänzung:
Spalten der Datenfelder-Tabellen Die Codierungen müssen additiv zur aufgeführten Kardinali-
tät betrachtet werden. Insbesondere müssen Datenfelder mit
einer Kardinalität von „1“ und einer Codierung „n/a“ befüllt
werden, da ansonsten gegen die zugrundeliegende TAF/TAP
TSI xsd-Struktur verstoßen wird. In diesen Fällen ist in dieser
Sst-Beschreibung aber explizit darauf hingewiesen, dass hier
datenfeldkonforme Dummy-Werte eingetragen werden kön-
nen, die in der Bearbeitung ignoriert werden.
Kap 5.4.4 Veränderung Befüllung Variant:
Identifier der BKEen Immer gefüllt mit „01“. Der Wert „00“ wird im Allgemeinen für
Gruppierungen genutzt und daher hier nicht verwendet.
17

## Seite 18

Referenz Version 4.6.1 Version 4.6.2
Kap 5.5 Ergänzung:
Oberstruktur TrainInformation Die Informationen innerhalb der TrainInformation werden
innerhalb des ujBau Prozesses nicht verarbeitet. Aufgrund
des TAF/TAP TSI-Standards muss die Struktur jedoch befüllt
werden. Hierzu können Dummy-Werte verwendet werden.
Kap 5.6.1 Ergänzung:
Übersicht über die Oberstruk- Das EVU muss hier eine Fahrlage analog zum TAF/TAP-TSI
tur“PathInformation“ Standard senden. Die von Seiten der DB InfraGO AG zwin-
gend erforderlichen Inhalte sind gegenüber den notwendigen
Angaben für vollwertige Trassenbestellungen (s. Anlage 1)
stellenweise reduziert. Die Fahrlage muss beizubehaltende
Zwangspunkte wie Verkehrshalte/Zugcharakteristik in der
Stellungnahme analog einer Änderungsbestellung beinhal-
ten, ansonsten wird von einer nicht mehr vorliegenden Not-
wendigkeit dieser Zwangspunkte ausgegangen. Zusätzliche
Zwangspunkte beispielsweise zur Abbildung weiterer Ver-
kehrshalte oder gewünschter abweichender Laufwege kön-
nen bei Notwendigkeit ergänzt werden. Laufwegspunkte vom
Typ Durchfahrt dürfen nur angegeben werden, wenn sie auf
einem gegenüber dem GPE abweichenden Laufweg lauf-
wegsbestimmend sind, oder eine andere Regelung dies er-
fordert.
Kap 5.7.2 Vorkommen „0..1“ Vorkommen „1“
Tabelle 16
PlannedTrainData
18

## Seite 19

Referenz Version 4.6.1 Version 4.6.2
BrakingRatio Änderung:
Attribut wird abweichend zur Anlage 1 verwendet:
1. Das EVU gibt in der PathRequestMessage die garantiert
vorhandenen Bremshundertstel des Zuges an
2. In der PathDetailsMessage werden die ursprünglich be-
stellten oder in der Konstruktion als voraussichtlich erforder-
lich ermittelten höheren Bremshundertstel angegeben.
Vorkommen PDM „M“
DangerousGoodsIndication und Vorkommen analog zu Anlage 1 gesetzt
Unterstruktur
Kap 5.8.2 Änderung:
Struktur „ReferenceTrainIDSub- Der Kalender selbst wird in der Kommunikation zwischen
Calender“ und Attribut „Offset- EVU und EIU nur indirekt ausgetauscht. Im Bauprozess kann
ToReference” sich der Kalender seitens des EVU nicht ändern, daher wird
hier auch auf den Austausch des ReferenceTrainIDSub-
Calendar verzichtet. Verkehrstagesänderungen des Refe-
renceTrains müssen außerhalb des Bauprozesses in ande-
ren Geschäftsprozessen kommuniziert werden. Die Angaben
in der Struktur PlannedCalendar in Verbindung mit der An-
gabe im Element „OffsetToReference“ referenzieren somit
immer den aus dem ursprünglichen PathRequest bekannten
ReferenceTrainIDSubCalendar. Jeder in einem „Plan-
nedCalendar“ enthaltene Verkehrstag muss unter Berück-
sichtigung der Angabe in OffsetToReference immer ein Pen-
dant im ursprünglichen ReferenceTrainIDSubCalendar ha-
ben. Anderenfalls liegt ein Fehler vor.
19

## Seite 20

Referenz Version 4.6.1 Version 4.6.2
Kap 5.9.2 Änderung
Datenfelder der Struktur “Affect- Wenn die Trasse des GPE / FPE nicht konstruiert werden
edSection” konnte, ist der gesamtePath betroffen. Es dürfen keine
Teillaufwegen angegeben werden
Tabelle 19, “AffectedSection”
• Angabe ist im Rahmen dieser Schnittstelle Pflicht für die
Nachricht PathNotAvailable
Kap 5.11.4 Ergänzung:
Befüllung der Struktur
Alle nicht verwendeten NSP sind aktuell noch in der Liste
enthalten, werden beim nächsten Update jedoch entfernt.
Kap 5.11.6 Kennzeichnung nicht verwendeter Attribute:
Attribute der Struktur „Network- • Gleisnummer
SpecificParameter“ Location-
• Traktiondampg
Ebene
• Fahrtrichdampf
• hgRueckDampf
• abstellung
• entfernungzumnaechstenZLP
• veroeffentlichungsArt
• geplanteBetriebsstelle
• gefahrgutGanzzug
• tfzOderLeerfahrt
• kundennummerDurchfuehrendesEVU
• etcsZugartGueltigbis
• etcsZugdate
20

## Seite 21

21
