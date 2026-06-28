# TAF/TAP TSI-Dialog – Dezember 2025 – Terminunterlage

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13705128/cd7c0289c5474d304090c58e7a1fc343/TAF-TAP-TSI-Dialog-Dezember-2025-Terminunterlage-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13705128/cd7c0289c5474d304090c58e7a1fc343/TAF-TAP-TSI-Dialog-Dezember-2025-Terminunterlage-data.pdf)
- Quellen-Schlüssel: `src-62458fd9e8ee2542ffa1`
- Abrufdatum: 2026-06-28
- Original: [[taf-tap-tsi-dialog-dezember-2025-terminunterlage--src-62458fd9e8ee2542ffa1.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

9. TAF/TAP TSI-Dialog der DB InfraGO
Austausch mit dem Markt
18.12.2025 – virtuell
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 1

## Seite 2

Agenda
1. Begrüßung
1. Begrüßung
2. Status TTT Einführung
3. Update TTT im Betrieb
4. Aktualisierung Schnittstellenbeschreibung
5. Vorbereitung EVUen
6. Fragen & Antworten
7. Termine zum Nachlesen
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 2

## Seite 3

Wir wollen mit Ihnen in den Dialog treten – Welche Fragen
haben Sie? Schreiben Sie diese bitte in den Chat
So können Sie eine Frage platzieren:
Bitte wählen Sie in MS Teams in der Menüleiste
das Icon „Chat“ aus und schreiben Ihre Frage
in das sich öffnende Fenster.
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 3

## Seite 4

2. Status TTT Einführung
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 4

## Seite 5

Fokus auf Einführung ab Januar mit begleitenden Schulungen
und Onboarding der Zugangsberechtigten
Wesentliche Fortschritte
• Intensives Schulungsangebot sowie Portaltesttage für pathOS im November durchgeführt
• Onboarding der Schnittstellenpartner und zugehörige Sprechstunden gestartet
• Markttests und Defect Behebung werden kontinuierlich fortgesetzt
• Folgende angekündigte Ergänzungen der Schnittstelle mit Version 4.6.3 veröffentlicht:
o Die Schnittstellenanpassung stellt sicher, dass Gleisangaben, insbesondere nach Abschnitt 8
Abs. 9 der Richtlinie 402.0305, enthalten sind.
o Error Code für fachliche Zurückweisung (aus letztem TTT-Dialog).
Nächste Schritte
• Abschlusslieferung Attribute in den Kundentest für Trassenanmeldung NEP: 19.1.2026
• Go Live pathOS: 19.1.2026
• Beginn Trassenanmeldung für Fahrplan 2027: 13.3.2026
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 5

## Seite 6

3. Update TTT im Betrieb
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 6

## Seite 7

Wichtige Infos zum BDV
Abschaltung der unverschlüsselten UIC-Verbindungen sowie 1-Way-SSL Verschlüsselung für TAF/P-
Schnittstellen (SOAP-XML) bis zum 30. Juni 2026
▪ Nach Ablauf der Übergangsfrist ist der Zugriff auf die UIC- und TAF/P-Schnittstellen (SOAP-XML) ausschließlich über
eine abgesicherte 2-way-ssl-Kommunikation (=„mutual TLS“) möglich.
→ Eine offizielle Kundeninfo wurde am 27.11.2025 auf DB InfraGO-Seite veröffentlicht (Link).
→ Ist im Dokument „BDV Kundenanbindungen – Verschlüsselung“ im Kapitel 1.1 beschrieben.
Derzeit keine Weiterverarbeitung P/TCM bei der DB InfraGO (Mail vom 05.12.2025)
▪ Neues Softwareproblem: In seltenen Fällen kann die Verarbeitung der aktuellen Zugcharakteristika aus TCM/PTCM zu
unschlüssigen Daten in der Disposition und Kommunikation an Geschäftspartner (z. B. Fplm) führen.
▪ Vorsorgliche Maßnahme: DB InfraGO hat am 04.12.2025 die Weiterverarbeitung der TCM/PTCM vorerst gestoppt.
▪ Geplanter Termin zur Wiederaufnahme: 19.01.2026, nach einem geplanten Software-Release.
▪ Hintergrund des Termins: Sicherstellung der Systemstabilität vor dem bevorstehenden Fahrplanwechsel.
▪ Geschäftspartner können bis dahin auf den Versand der TCM/PTCM bzw. die Eingabe der Zugcharakteristika im TCM-
Editor verzichten.
▪ Zwischenzeit wird genutzt, um laufende Testaktivitäten und Fehlerbehebungen im Zusammenspiel der Systeme von EVU
und EIU abzuschließen.
▪ Beantragung TCM/PTCM erfolgt über das InfraPortal (ehemals NeCo)
Ansprechpartner bei Störungen/Problemen mit dem BDV:
o Zentrale fachliche Betriebsführung (ZFBF) erreichbar unter:
− Hotline: [Telefonnummer entfernt] (Mo-Fr: 07:00 - 18:45 Uhr besetzt)
−
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 7

## Seite 8

4. Aktualisierung
Schnittstellenbeschreibung
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 8

## Seite 9

Version 4.6.3 der Schnittstellenbeschreibung liegt vor.
Die Dokumente zur Schnittstelle wurden ausschließlich in Bezug auf die folgenden zwei
Themen aktualisiert:
1. Gleisangaben: Information zu Gleisangaben, auf Basis der Änderung der Ril 402.0305,
wieder enthalten.
2. Fachliche Zurückweisung vs. Techn. Fehlermeldungen: In Abgrenzung zu technischen
Fehlermeldungen wird der Umgang mit fachlichen Zurückweisungen präzisiert. Hierzu
wird DB InfraGO wie vom Markt im TTT-Dialog am 27.11.2025 gefordert, die explizite
Kennzeichnung via eigenem Error Code schon für Fahrplan 2027 bereitstellen.
Betroffene Dokumente
Im Rahmen dieser Anpassung wurden folgende Schnittstellendokumente geändert:
• Hauptdokument, Kap 5.2.5, Kap 7.3 („Zurückweisung“ und „ErrorMessage“)
• Anlage 1 (Anpassung NSP „Gleisnummer“)
• Anlage 9 (Aufnahme Fehlercode)
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 9

## Seite 10

5. Vorbereitung EVUen
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 10

## Seite 11

Aktuelles zur Schulungsvorbereitung auf die Einführung von
pathOS – Go-Live: 19.01.2026, Beginn NEP 1: 13.03.2026
− Neue pathOS Schulungs- und Testumgebung ist live. Diese kann ausschließlich mit persönlichen Zugangsdaten über das
Infraportal erreicht werden (vgl. Kund:inneninformation 27.11.2025)
− Infraportal: https://infraportal.dbinfrago.com/
− Testumgebung pathOS: https://pathos-test.app.db.de/
− Hinweis: die Produktivumgebung erfordert eine separate Infraportal-Berechtigung und einen anderen Link. Diese
werden Anfang 2026 bereitgestellt und kommuniziert
− Schulungstermine (virtuell, 60min) auf pathOS-Webseite bis Ende Februar mitsamt ICS-Kalenderdateien veröffentlicht
(http://www.dbinfrago.com/pathOS - Kapitel 2.4) – Weitere Erklärvideos folgen ab Januar
− Buchungsplattform für Vertiefungsworkshops ist ab sofort online. Beginn ist der 20.01.2026 – alle Termine gehen
3:15h, finden virtuell statt und gehen mit kleinem TN-Kreis (maximal 25 TN je Termin) durch komplexe
Anwendungsbeispiele. Für die TN fallen keine Kosten an! Die Buchungsplattform ist auf der Schulungsplattform in Kapitel
2.4 verlinkt. Direktlink hier: https://www.db-training.de/courses/0009382
− Flyer mit wichtigen Terminen zum Netzfahrplan 2027 ist veröffentlicht (Kund:inneninfo vom 11.12.2025)
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 11

## Seite 12

Das standardisierte Onboarding schafft Grundlage für stabile
Trassenanmeldungen im Netzfahrplan und umfasst 4 Schritte
1 2 3 4
Durchführung
Anmeldung Fachliche Bestätigung Anbindung an Produktion
Prozessschritte
Anmeldung als Der Nachrichtenaustausch Drei produktionsnahe/ Verbindung zwischen
Schnittstellenpartner und für den Netzfahrplan (NEP1) realistische Züge zur Produktionsumgebungen
Verbindungsdaten wird in der pathOS Mock- Bestätigung der fachlich herstellen und technischen
bereitstellen Umgebung getestet und korrekten Kommunikation Durchstich via „Heartbeat“
damit bestätigt, dass alle werden mit „echtem“ bestätigen
Prozessschritte im NEP Konstruktionsergebnis (in Produktion finden keine
durchlaufen werden können getestet Tests statt)
(Fahrplankonstruktion ist
„nur“ gespiegelte Bestellung)
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 12

## Seite 13

Onboarding für Netzfahrplan 2027 (NEP 1) ist ab sofort möglich
– Abschluss mit Vorlauf zur Trassenanmeldung im März 2026
1 Anmeldung
Bis zum 15.02.2026
Durchführung
2
Prozessschritte
Bis zum 15.02.2026
Wöchentliche Sprechstunden
Bis zum 01.03.2026 (Mittwochvormittag, je 90 Minuten)
2025 | 2026
Nov. Dez. Jan. Feb. Mär. Apr. …
Fachliche
3
Bestätigung
Ab 05.01.2026 – 01.03.2026
Anbindung an
4
Produktion
Ab 19.01.2026 – 01.03.2026
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 13

## Seite 14

Unterstützung beim Onboarding vor Trassenanmeldung NEP 1
für Fahrplan 2027 erfolgt in offenen Sprechstunden
Wöchentliche Sprechstunden
Ab 03.12.2025 – 30.04.2026 (Mittwochvormittag, je 90 Minuten)
Termine werden auf pathOS Webseite
veröffentlicht (unter 3. Information für SST-
Nutzer → Onboarding für SST-User)
Ablauf:
• 30 Minuten:
Erklärung zum Onboarding
Mock-Umgebung, Testsheet, Vorgehen für die
fachliche Bestätigung
• 60 Minuten:
Offene Sprechstunde zum Onboarding
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 14

## Seite 15

TTT bringt Komplexität mit sich. Bitte bereiten Sie sich mit
dem Schulungsmaterial gut vor. Beispiel: OffsetToReference
(2) Abfahrt am Start ist am
Tag vor dem Einbruch ins
deutsche Netz -> Verkehrstag
des ReferenceTrain = 30.01.
(3) Unter Identifikatoren
(1) Zug kommt am 31.01. ins
(„erweiterter Modus“) muss
deutsche Netz
OffsetToReference = 1 angegeben
-> Verkehrstag des Path Request
werden. D.h. der Verkehrstag des
= 31.01.
Path Request ist 1 Tag nach dem
des Reference Trains
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 15

## Seite 16

5. Fragen & Antworten
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 16

## Seite 17

Zeit für Ihre Fragen!
Gerne beantworten wir Ihnen
Ihre Fragen direkt im Termin.
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 17

## Seite 18

6. Termine zum Nachlesen
Alle Informationen immer aktuell unter:
www.dbinfrago.com/taf-tap-tsi
DBD BIn IfnrafrGaOGO A GA G| T| ATFA/FT/ATPA PT STIS-ID-iDailaolgo ga mam 1 81.81.21.22.[Telefonnummer entfernt]

## Seite 19

Übersicht TAF/TAP TSI-Kommunikation
Arbeitsweise (A)/Turnus (T)
Teilnehmer: Management & Experten aller EVU u. deren IT-Partner A: online
TAF/TAP TSI -
1 Ziel: Überblick für GF-Ebene, allg. Infos (Betrieb + Fahrplan), T: ca. monatlich
Dialog
Nächster Termin: 22.01.2026
zzgl. Vertiefung aktueller Fokusthemen in Entwicklung/Testing
A: online
Sprechstunde Teilnehmer: Alle künftigen Schnittstellenpartner (EVU, ZB)
2 T: mittwochs (nach Weihnachten ab dem
Onboarding für Ziel: Informationen und Sprechstunde zum Onboarding der SST-Partner inkl.
14.01. - Details auf pathOS-Homepage in
Schnittstellenpartner Vorbereitung und Begleitung der Tests und Anbindung an die SST
Kapitel 3)
Teilnehmer: Alle künftigen Anwendenden von pathOS A: online
pathOS -
3 T: seit 23.10. – Termine auf pathOS-
Ziel: Erklärung der Grundlagen und wesentlichen Inhalte von pathOS in
Schulungen
e einzelnen Terminen. Regelmäßige Sprechstunde startet am 22.01.26 Homepage (in Kapitel 2.4)
g
o
la
A: online / in Präsenz
i D TAF/TAP TSI - Teilnehmer: Gesamtmarkt inkl. EIU
4 T: 4x jährlich
Sektormeeting Ziel: nationale Spiegelgruppe TTT (Infos zu TTT, Verordnungen, …)
Nächster Termin: 27.03.2026
A: in Präsenz
Runder Tisch Bau Teilnehmer: 35 Mitglieder aus SPNV, SPV, SGV, BNetzA und EBA
5 T: 4x p.a. + Expertensessions
(RTB) AG 3 Ziel: Beratung DB InfraGO bei Erarbeitung und Entwicklung für ujBau
Nächster Termin: 24.02.2026
Teilnehmer: Geschäftspartner mit G-INV A: online
6 BDV
Ziel: Informationen, To-Dos vermitteln Nächster Termin: 04.02.2026
Teilnehmer: für alle zugängliches Format, KI an Verteiler (inkl. IT-Partner, nicht
o Homepage + alle EVU) A: Homepage
f 7
n
I Newsletter (KI) Ziel: aktuelle Informationen/Entwicklungen zum Nachlesen: Testing-Zugang, T: kontinuierlich
Ansprechpartner, Updates
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 19

## Seite 20

[Kein extrahierbarer Text auf dieser Seite.]

## Seite 21

Anhang
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 2121

## Seite 22

Abkürzungsverzeichnis
BDV Betriebsdatenverteiler NEP (1 oder 2) Netzfahrplanentwurfsphase
BNetzA Bundesnetzagentur NSS Normierte Schnittstelle
EBA Eisenbahn-Bundesamt SGV Schienengüterverkehr
EIU Eisenbahninfrastrukturunternehmen SPFV Schienenpersonenfernverkehr
EVU Eisenbahnverkehrsunternehmen SPNV Schienenpersonennahverkehr
FBF Fachbetriebsführung SST Schnittstelle
FPE Feinplanungsergebnis ujBau unterjähriger Bau
GelV Gelegenheitsverkehr UI User Interface (Benutzeroberfläche, z.B. Portal)
G-INV Grundsatz-Infrastrukturnutzungsvertrag
GPE Grobplanungsergebnis
IBN Inbetriebnahme
IT-DL IT-Dienstleister
OTN operational train number
DB InfraGO AG | TAF/TAP TSI-Dialog am 18.12.2025 22
