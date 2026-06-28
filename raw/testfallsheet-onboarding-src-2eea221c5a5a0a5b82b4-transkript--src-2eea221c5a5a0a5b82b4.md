# TestfallSheet Onboarding

- Quellenart: XLSX
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13410136/8f572d975ef9e6d1eee59eccea00281c/TestfallSheet-Onboarding-data.xlsx`
- Original-URL: [XLSX beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13410136/8f572d975ef9e6d1eee59eccea00281c/TestfallSheet-Onboarding-data.xlsx)
- Quellen-Schlüssel: `src-2eea221c5a5a0a5b82b4`
- Abrufdatum: 2026-06-28
- Original: [[testfallsheet-onboarding--src-2eea221c5a5a0a5b82b4.xlsx]]

> Quellentreue Rohdaten-Transkription der verlinkten XLSX-Datei. Personenbezogene Kontaktwerte wurden entfernt; das unveränderte lokale Original bleibt maßgeblich.

## Arbeitsblatt: Testsheet (Template)

| Zeile | Spalte 1 | Spalte 2 | Spalte 3 | Spalte 4 | Spalte 5 | Spalte 6 | Spalte 7 | Spalte 8 | Spalte 9 | Spalte 10 | Spalte 11 | Spalte 12 | Spalte 13 | Spalte 14 | Spalte 15 | Spalte 16 | Spalte 17 | Spalte 18 | Spalte 19 | Spalte 20 | Spalte 21 | Spalte 22 | Spalte 23 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |  |  |  |  |  |  | Schritt 1: Vor Konstruktion: <br>TA, AEV, BB | Schritt 2: Konstruktion (VNP) - <br>Wenn nichts besonderes spezifiziert ist, <br>wird der VNP wie im produktiven Konstruktionsrahmen konstruiert  |  |  |  | Schritt 3: ENP |  |  | Schritt  4: Angebotsannahme, Ablehnung |  |  |
| 2 | EVU | Testfall | Teststep | Testziel | InfraGO Review | #PRM / #PDM | Trassenkonstruktion für DB InfraGO<br>Langname oder RiL100 in Pathinformation | Teststatus | Verkehrstag | OTN | PRM-ID | Datum/Zeit Ausführung | EVU-Auftrag | Anforderungen an Angebot | Konstrukteur Name | Path IDs | InfraGO<br>Status | Anforderungen an Angebot4 | Path Ids5 | InfraGO<br>Status6 | EVU-Auftrag8 | InfraGO<br>Status9 | Bemerkung (EVU, InfraGo) |
| 3 |  | 1 | 1 | Happy Path (Ziel: vertragsbestätigter Zug) Erstanmeldung erfolgt im synchronen Shakedowntest<br>Trassenanmmeldung mit Ziel eines vertragsbestätigten Zuges. <br>Im VNP, erwarten wir ein Angebot innerhalb des produktiven Konstruktionsrahmens . <br> |  | 1 PRM/1PDM | Frankfurt-Gelnhausen | Offen​ | NFPL 2025 -tgl |  |  |  | TA |  |  |  |  |  |  |  | AA |  |  |
| 4 |  | 2 | 1 | Änderung vor Angebotsabgabe<br><br>Trassenanmeldung mit 1 PR <br>Vor Empfang des VNP wird ohne spezfizierte Wartezeit eine Änderung gemacht: Abfahrt in Hanau statt Gelnhausen<br>Erwartetes Ergebnis: der folgende VNP hat die Änderung konstruiert<br>Prozess bis VB |  | 2 PRM / 1 PDM | Frankfurt-Gelnhausen | Offen​ | NFPL 2025 Sommer (Mitte Juni - Mitte Dezember) |  |  |  | TA |  |  |  |  |  |  |  | AA |  |  |
| 5 |  | 2 | 2 | Zweite Zeile für Änderung vor Angebot |  |  | Frankfurt-Hanau | Offen​ | NFPL 2025 Sommer (Mitte Juni - Mitte Dezember) |  |  |  | AEV |  |  |  |  |  |  |  | AA |  |  |
| 6 |  | 3 | 1 | EVU Beanstandung<br><br>Trassenanmeldung und Angebot enthält Abweichung von Konstruktionsspielraum (RiL402)<br>Zu diesem VNP soll dann vom EVU eine Berechtigte Beanstandung gemacht werden.<br>Daraufhin erwarten wir einen ENP zurück, der der Beanstandung folgt |  | 2 PRM / 2 PDM  | Hanau-Frankfurt | Offen​ | 2025-06-01 00:00:00 |  |  |  | TA | 1. Im VNP entfällt die  letzte BST, d.h. Angebot geht nur Gelnhs-Frankfurt<br>2. Weitere Abweichungen im VNP ggü TA, welche potentiell zu einer Berechtigten Beanstandung durch das EVU führen könnten<br> |  |  |  |  |  |  |  |  |  |
| 7 |  | 3 | 2 | Zweite Zeile Beanstandung |  |  | Hanau-Frankfurt | Offen​ | 2025-06-01 00:00:00 |  |  |  | BB |  |  |  |  | ENP wie TA |  |  | AA |  |  |

## Arbeitsblatt: DropDown Definitionen

| Zeile | Spalte 1 | Spalte 2 | Spalte 3 | Spalte 4 | Spalte 5 | Spalte 6 | Spalte 7 | Spalte 8 | Spalte 9 | Spalte 10 | Spalte 11 | Spalte 12 | Spalte 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PRIO | EVU | Auftrag |  |  | Teststatus Gesamt |  |  | InfragoStatus (Schritt 2+3) |  | Cluster fachlich | vrsl. testbar ab | Extern Testsession KW |
| 2 | 1 |  | Keine Erforderlich |  |  | Erfolgreich​ |  |  | TA in TPN eingegangen |  | ID02, ID08, ID10, ID11: Happy Path (TA-VNP-ENP-VB) |  | KW27 |
| 3 | 2 |  | TA | Trassenanmeldung |  | Offen​ |  |  | TA geprüft |  | ID03: Abmeldung während derAnmeldephase |  | KW27 |
| 4 | 3 |  | AEV | Änderung vor Angebotsabgabe | ok | Fehlgeschlagen InfraGO ​ |  |  | Angebot konstruiert |  | ID04: Änderung vor Angebotsabgabe |  | KW27 |
| 5 |  |  | AB | Abmeldung | ok | Fehlgeschlagen EVU​ |  |  | Angebot abgegeben |  | ID09: EVU Beanstandung Berechtigt::VNP abweichend |  | KW27 |
| 6 |  |  | BB | Berechtigte Beanstandung | ok |  |  |  | Folgeauftrag ausgelöst |  | ID09: EVU Beanstandung Unberechtigt::VNP abweichend |  | KW27 |
| 7 |  |  | Abl. o. Ü | Ablehnung ohne Überarbeitung |  |  |  |  | PDM (VNP) versendet |  | ID38: Netzausgelöste BB ::ENP abweichend::EVU akzeptiert |  | KW27 |
| 8 |  |  | AA | Annahme des Angebots |  |  |  |  | PDM (ENP/FPE) versendet |  | ID38+ID28b: Netzausgelöste BB::ENP abweichend::EVU lehnt ab |  | KW27 |
| 9 |  |  | VB | Vertragsbestätigung |  |  |  |  | PDM (üENP) versendet |  | ID51: MultiplePaths:: räumlich |  | KW30 |
| 10 |  |  | NKT | Nicht Konstruierbarkeit |  |  |  |  | PDM (VB) versendet |  | ID51: MultiplePaths:: zeitlich |  | KW30 |
| 11 |  |  | VNP | vorläufiger Netzfahrplan |  |  |  |  | PDM (NKT) versendet |  | ID51: MultiplePaths:: zeitlich:: neue OTN |  | KW30 |
| 12 |  |  | ENP | endgültiger Netzfahrplan |  |  |  |  | PDM (withdrawn) versendet |  | Inländische NE Züge::Ereg §51 |  | KW29 |
| 13 |  |  | üENP | endgültiger Netzfahrplan (überarbeitet) |  |  |  |  |  |  | Internationaler Zug, ausbrechend, HO Ausland |  | KW28 |
| 14 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, ausbrechend, HO Ausland, OffsetToReference::Negativ |  | KW28 |
| 15 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, ausbrechend, HO Deutschland |  | KW28 |
| 16 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, ausbrechend:: InfraGo ändert HO |  | KW28 |
| 17 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, einbrechend, HO Ausland |  | KW28 |
| 18 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, einbrechend, HO Ausland, OffsetToReference::Positiv |  | KW28 |
| 19 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, einbrechend, HO Grenze |  | KW28 |
| 20 |  |  |  |  |  |  |  |  |  |  | Internationaler Zug, einbrechend, HO Grenze |  | KW28 |
| 21 |  |  |  |  |  |  |  |  |  |  | Langlaufende Züge (min 2 RB):: Wechsel Zuggattung :: Wechsel Zugbeeinflussungssystem |  | KW29 |
| 22 |  |  |  |  |  |  |  |  |  |  | Langlaufende Züge (min 2 RB):: zeitl/örtl Abweichungen:: Mehrere RO-Objekte, mit mehreren PR-Objekten, Nachtsprung |  | KW29 |
| 23 |  |  |  |  |  |  |  |  |  |  | Langlaufende Züge (min 2 RB)::Nachtsprung::OTN |  | KW29 |
| 24 |  |  |  |  |  |  |  |  |  |  | Langlaufende Züge (min 2 RB)::ZCH Wechsel |  | KW29 |
| 25 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge:: Komplexe Bestellvorgaben |  | KW31/32/33/34/35 |
| 26 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge:: international :: InfraGo ändert HO |  | KW31/32/33/34/35 |
| 27 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge:: langlaufend:: international |  | KW31/32/33/34/35 |
| 28 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge:: Taktlage |  | KW31/32/33/34/35 |
| 29 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge::Entfall Start BST |  | KW31/32/33/34/35 |
| 30 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge::Netzausgelöstes Angebot mit neuer OTN::Ablehnung |  | KW31/32/33/34/35 |
| 31 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge::Netzausgelöstes Angebot mit neuer OTN::VB |  | KW31/32/33/34/35 |
| 32 |  |  |  |  |  |  |  |  |  |  | Produktionsnahe Züge::Rundflug |  | KW31/32/33/34/35 |
| 33 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Anschlüsse (TAC, RoR) | Q4/25 |  |
| 34 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Beförderungsbesonderheiten/ExceptionalGaug (TAC, RoR) | Q4/25 |  |
| 35 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::NSP::alternativeZugcharakteristiken |  | KW30 |
| 36 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::NSP::sonstige |  | KW30 |
| 37 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::PlannedTrainData |  | KW30 |
| 38 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Rangier&Sperrfahrt (TAC, RoR) | Q4/25 |  |
| 39 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Trainactivities (Haltegründe) |  | KW30 |
| 40 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Zugtrennung (TAC, RoR) | Q4/25 |  |
| 41 |  |  |  |  |  |  |  |  |  |  | Spezielle Attribute und Codierungen::Zugvereinigung (TAC, RoR) | Q4/25 |  |
| 42 |  |  |  |  |  |  |  |  |  |  | zeitl/örtl Abweichungen (aka Flügel) |  | KW28 |
| 43 |  |  |  |  |  |  |  |  |  |  | zeitl/örtl Abweichungen (aka Flügel):: ID52: Zurückweisung |  | KW28 |

## Arbeitsblatt: Schritte

| Zeile | Spalte 1 | Spalte 2 | Spalte 3 | Spalte 4 | Spalte 5 |
|---|---|---|---|---|---|
| 1 | Schritt 1 (Tag 1) |  |  |  |  |
| 2 | TA | AEV | AB | RCM | ZW |
| 4 | Schritt 2 (Tag 3) |  |  |  |  |
| 5 | VNPs | NKTs |  |  |  |
| 7 | Schritt 3 (Tag 4) |  |  |  |  |
| 8 | BB (Konstruktion der Kundenausgelösten BB zum VNP aus Schritt 2) |  |  |  |  |
| 9 | ENP überarbeiten (zu kundenausgelösten BBs) |  |  |  |  |
| 10 | Netzausgelöste ENP überarbeiten |  |  |  |  |
| 12 | Schritt 4 (Tag 5) |  |  |  |  |
| 13 | ENP versenden |  |  |  |  |
| 14 | AA | RCM | VB |  |  |
| 15 | Ablehnung  | RCM |  |  |  |
| 16 | Withdrawn |  |  |  |  |
