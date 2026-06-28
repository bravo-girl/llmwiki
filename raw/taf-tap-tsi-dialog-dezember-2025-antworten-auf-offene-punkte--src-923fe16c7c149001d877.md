# TAF/TAP TSI-Dialog – Dezember 2025 – Antworten auf offene Punkte

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13713982/ae4ccc080d739841dffce3bc2da72480/TAF-TAP-TSI-Dialog-Dezember-2025-Antworten-auf-offene-Punkte-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13713982/ae4ccc080d739841dffce3bc2da72480/TAF-TAP-TSI-Dialog-Dezember-2025-Antworten-auf-offene-Punkte-data.pdf)
- Quellen-Schlüssel: `src-923fe16c7c149001d877`
- Abrufdatum: 2026-06-28
- Original: [[taf-tap-tsi-dialog-dezember-2025-antworten-auf-offene-punkte--src-923fe16c7c149001d877.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

9. TAF/TAP TSI-Dialog der DB InfraGO
Follow-up: Klärung offener Punkte aus dem Termin
08.01.2026 Versand im
Nachgang

## Seite 2

Offene Punkte und Antworten (1)
Frage Antwort DB InfraGO
Ist die Bestellung von neuen RV über die TTT-konforme SST für Die zukünftige Gestaltung von Rahmenverträgen ist Teil von
FplJ 2027 möglich? laufenden Abstimmungen zu den Infrastrukturnutzungbedingungen
(INB) und unabhängig von der Einführung von TAF/TAP TSI.
Es ist nicht geplant, dass Bestellungen für zukünftige
Rahmenverträge über die TTT-konforme Schnittstelle zur
Trassenanmeldung erfolgen. Entsprechend sind Kapitel 5.4. der
Schnittstellenbeschreibung (bis auf die Unterkapitel 5.4.17 und
5.4.18) in den Vorbemerkungen sowie der Anlage 3 derzeit
ausgesetzt.
Welches Tool für die Bestellung von Rahmenverträgen eingesetzt
werden wird, wird nach der Festlegung über die Gestaltung der
Rahmenverträge allen Zugangsberechtigten kommuniziert.
Die Bestellung von Trassen mit Bezug auf bestehende
Rahmenverträge wird ab Fahrplan 2027 durch die neue TTT-
konforme Schnittstelle zur Trassenanmeldung unterstützt.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 18.12.2025 2

## Seite 3

Offene Punkte und Antworten (2)
Frage Antwort DB InfraGO
TrainActivityCode 0004 (Systemwechselhalt) TAC 0004 (Systemwechselhalt) beim Traktionsartwechsel:
Beim Traktionsartwechsel ist zwingend TAC 0004 zu verwenden –
Neu in der SST 4.6.2 darf kein Textfeld zusammen mit dem TAC ein Freitext (haltabwText) darf nicht mehr mitgegeben werden. Der
mitgesendet werden. entsprechende Hinweis („Traktionsartwechsel Mehrkraft-Tfz“) wird
Systemwechselhalt wird aber aus unserer Sicht in mehreren automatisch durch das System erzeugt. Andere Systemwechsel (z. B.
Fällen genutzt: zB Wechsel der Antriebsart (wird in der SST Wechsel ETCS/LZB) sind derzeit nicht gesondert kodiert und dürfen
vorgegeben) und bei Grenzüberschreitenden Verkehren wie nicht über TAC 0004 angegeben werden.
Wechsel zw. ETCS zu LZB DB InfraGO prüft derzeit, ob durch zusätzliche Auswertung des
Somit ist aus unserer Sicht eine Angabe der Begründung Feldes „TypeOfUsedHybridPowerUnit“ für den Traktionsartwechsel
sinnvoll. Mehrkraft-TFZ die Nutzung des TAC 0004 für andere Systemwechsel
Ist eine Angabe von TAC 0004 + 0027 (Systemwechselhalt und künftig wieder geöffnet werden kann.
Sonstiger Halt), zusammen mit zB 0001 zulässig, damit eine Kombination mit TAC 0027 (Sonstiger Halt):
Begründung mitgegeben werden darf? Eine Kombination von TAC 0004 und 0027 (um doch einen Freitext
via haltabwText mitzugeben) ist zwar technisch möglich, aber nicht
Was passiert, wenn man beim Wechsel der Traktionsart, nicht schnittstellenkonform. TAC 0027 mit Freitext sollten die EVU
wie in der SST genannt 0004 nutzt, sonst, wie heute auch, hierfür daher nicht verwenden. Sofern diese Option dennoch
0027? genutzt wird, ist der exakte Wortlaut im Kommentarfeld essenziell.
Die DB InfraGO wird diese Möglichkeit in der Zukunft –
insbesondere ab der Fahrplanperiode 2028 ff. – jedoch
gegebenenfalls unterbinden.
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 18.12.2025 3

## Seite 4

Offene Punkte und Antworten (3)
Frage Antwort DB InfraGO
Beim Vorhandensein von Im Regelentgeltverfahren können mehrere PathRequests eines Reference Trains berücksichtigt werden. Eine Zusammenrechnung der Entgelte mehrerer
Ergänzern im PathRequests unter demselben Reference Train ist im Rahmen der Regelentgeltberechnung möglich, sofern die in Ziffer 4.2.1.10. der INB genannten vier
Entscheidungsverfahren werden Voraussetzungen kumulativ erfüllt sind. Darüber hinaus kann jede PathRequest nur einem Reference Train zugeordnet werden.
vor TTT die Trassenkilometer von
Stamm und Ergänzern addiert. Auszug aus den INB – Ziffer 4.2.1.10 Regelentgeltverfahren (erste Phase der Netzfahrplanerstellung):
Dadurch ist es von Vorteil, wenn
das EVU nicht in Bauzeitscheiben "Ergibt die Anwendung der Vorrangregeln weiterhin eine Gleichrangigkeit, stellt die DB InfraGO AG die Entgelte der konfliktbehafteten Zugtrassen gem.
bestellt, sondern die gesamte § 52 Abs. 8 Satz 1 ERegG gegenüber. Hierbei werden alle Verkehrstage der Zugtrasse innerhalb der Netzfahrplanperiode und der gesamte Laufweg
Fahrlage, und die InfraGO die berücksichtigt. Dabei ist die Berücksichtigung mehrerer Trassenanmeldungen zulässig, sofern diese folgende vier Bedingungen kumulativ erfüllen:
Ergänzungsfahrpläne erstellt. Wie
ist das Verhalten unter TTT, wo 1. Trassenanmeldung(en) unter einem Reference Train gemäß Ril 402.0202 Abschnitt 1 Abs. 9
es Stamm und Ergänzer nicht 2. Die Verkehrszeitregelungen und Verkehrstage der einzelnen Trassenanmeldungen ergänzen sich überschneidungsfrei bis maximal für die Dauer einer
mehr gibt: Wird jeder Netzfahrplanperiode. Eine direkte, aufeinander folgende und vollständig lückenlose Komplettierung der Verkehrstage ist nicht erforderlich. Davon
PathRequest einzeln betrachtet ausgenommen sind Trassen, die das Netz der DB Infra-GO AG auf mehreren Teilabschnitten aufgrund einer Unterbrechung durch die Nutzung der
oder werden die Infrastruktur eines anderen EIU nutzen, sofern nicht dieselben Betriebsstellen angefahren werden.
Trassenkilometer je 3. Die Laufwege sind übereinstimmend. Dies liegt vor, wenn mindestens 50% der bestellten Verkehrshalte im Vergleich zu der Trassenanmeldung mit
ReferenceTrain aufsummiert? der höchsten Anzahl bestellter Verkehrshalte unter dem Reference Train identisch sind. Sofern nur 4 oder weniger Verkehrshalte bestellt sind,
müssen mindestens 2 bestellte Verkehrshalte identisch sein. Zu diesen beiden Verkehrshalten können auch die Start- und/oder Ziel-Betriebsstelle
oder Grenzbetriebsstellen zählen. Diese Verkehrshalte sind in der identischen Reihenfolge anzufahren. Davon ausgenommen sind Trassen, die das
Netz der DB InfraGO AG auf mehreren Teilabschnitten aufgrund einer Unterbrechung durch die Nutzung der Infrastruktur eines anderen EIU nutzen;
in diesen Fällen müssen in jedem Teilabschnitt mindestens 50% der bestellten Verkehrshalte der Trassenanmeldung mit der höchsten Anzahl
bestellter Verkehrshalte identisch sein. Sofern nur 4 oder weniger Verkehrshalte bestellt sind, müssen mindestens 2 bestellte Verkehrshalte identisch
sein.
4. Die Trassenzeiten sind übereinstimmend. Dies ist der Fall, wenn an mindestens den unter der vorstehenden Ziffer 3 benannten Verkehrshalten die
Trassenzeiten innerhalb des Spielraums von 30 Minuten im SPV und von 240 Minuten im SGV bestellt wurden.
Jede Trassenanmeldung darf nur einer Gruppe von Anmeldungen zugeordnet werden. Die Gruppen werden nach Maßgabe der maximal möglichen
Gemeinsamkeiten nach den vorstehenden Bedingungen unter 3. und 4. ermittelt.
Der Anmeldung mit dem höheren Regelentgelt wird der Vorrang eingeräumt."
DB InfraGO AG | Follow-up: TAF/TAP TSI-Dialog am 18.12.2025 4

## Seite 5

[Kein extrahierbarer Text auf dieser Seite.]
