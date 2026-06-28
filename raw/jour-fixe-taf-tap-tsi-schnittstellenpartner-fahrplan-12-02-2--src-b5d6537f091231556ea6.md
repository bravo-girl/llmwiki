# Jour Fixe TAF/TAP TSI Schnittstellenpartner Fahrplan - 12.02.2026

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/events`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13751094/eaa2216177b111c7388c871f533d432b/JF-TTT-Schnittstellen-Partner-12-2-2026-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13751094/eaa2216177b111c7388c871f533d432b/JF-TTT-Schnittstellen-Partner-12-2-2026-data.pdf)
- Quellen-Schlüssel: `src-b5d6537f091231556ea6`
- Abrufdatum: 2026-06-28
- Original: [[jour-fixe-taf-tap-tsi-schnittstellenpartner-fahrplan-12-02-2026--src-b5d6537f091231556ea6.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Jour Fixe TAF/TAP TSI
Schnittstellenpartner Fahrplan
12.02.2026 – virtuell
Versand im Nachgang
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 1

## Seite 2

Agenda
1. Begrüßung
2. Testmöglichkeiten nach Start Trassenanmeldung (inkl.
Releaseinformation)
3. Fragen aus den Sprechstunden
4. Fragen & Antworten
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 2

## Seite 3

Begrüßung
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 3

## Seite 4

Ablauf und Zielsetzung des Schnittstellenpartner Jour Fixe für
Fahrplan und Trassenanmeldung
• Dieser Termin ist wie in den bisherigen Terminen auch als ein
Arbeitsmeeting gedacht – Fokus liegt auf operativer Vorbereitung der
Go-Live Termine, nicht auf Hochglanzfolien
• Wichtigstes Ziel ist die Klärung von Fragen der Schnittstellenpartner.
Wie immer gilt: sollten Sie Fragen haben, die Sie nicht in großer Runde
ansprechen möchten, schicken Sie uns diese per Mail im Nachgang
• Die Folien werden im Nachgang an die Teilnehmenden verteilt.
Teilnehmerkreis ist der aktuelle pathOS-Schnittstellenpartner-Verteiler mit
allen uns bekannten IT-Partnern. Wenn jemand fehlt, kurze Information an
[Kontaktangabe entfernt], dann ergänzen wir
• Haben Sie Fragen? Schreiben Sie diese bitte in den Chat
• So können Sie eine Frage platzieren: Bitte wählen Sie in MS Teams in
der Menüleiste das Icon „Chat“ aus und schreiben Ihre Frage in das
sich öffnende Fenster.
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 4

## Seite 5

2. Testmöglichkeiten nach Start
Trassenanmeldung (inkl.
Releaseinformation)
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 5

## Seite 6

Über 2 Stränge stellen wir den aktuellen TTT-Entwicklungs- und
den aktuellen Produktionsstand für Tests zur Verfügung
Kundentests
Kundentestumgebung
14-tägige Deployments
Release
Projekttestumgebung Entwicklungsstand
Strang
(pathOS Instanz ABN1)
14-tägiger stabiler Abzug
pathOS Schulungsumgebung
Entwicklungsstand
(pathOS Instanz ABN8,
Mock-Umgebung)
Hotfix
Deployments on Demand
Hotfix Integrative Abnahmeumgebung
Strang Testumgebung Produktionsstand
(pathOS Instanz ABN4)
Legende
Projektinterne Testumgebungen
Umgebungen für Kundentests
Bereitstellung der aktuellsten Entwicklungsversion
Bereitstellung von Hotfixes / Stabiler Produktionsstand
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 6

## Seite 7

DB InfraGO trennt strikt Produktions- und Testsysteme insb.
mit Blick auf IT-Sicherheit und Qualität
„Produktionsumgebung“ Testumgebungen
• Die genau eine Umgebung, in der die IT-Systeme der DB InfraGO sowie • Testumgebungen werden je nach Testziel aufgebaut und umfassen eine
angebundene Schnittstellen im „echten Betrieb“ verwendet werden Auswahl der IT-Systeme der DB InfraGO; sind technisch streng von der
Produktion abgekapselt
• umfasst die komplexe Systemlandschaft über alle Geschäftsprozesse der
DB InfraGO • Im Kontext TTT sind bis Start Trassenanmeldung NEP 1 folgende
Testumgebungen für Kunden relevant:
• verarbeitet die „echten“ Geschäftsdaten, u.a. Fahrpläne, Stammdaten
• „gemockte Testumgebung“ für Schulungen zu pathOS und Tests via
Schnittstelle gegen Mock (ABN8)
• Kundentestumgebung – E2E („KTU“, ABN1)
• TTT-Testumgebungen umfasst „Testfunktionalität“, um außerhalb der
eigentlichen Fristen in den verschiedenen Fahrplanphasen bestellen zu können.
Systemverbund (Aktuelle) Testumgebungen
DB InfraGO übernimmt zu bestimmten Stichtagen z.B.
„Produktionsumgebung“
Infrastrukturstammdaten aus Produktion in
Kundentestumgebung
Testumgebungen, um Tests produktionsnah zu
(KTU)
gestalten.
Schulung pathOS und
Datenflüsse aus Testumgebungen in die Produktion Mock-Umgebung
sind nicht zulässig. Damit wird z.B. verhindert, dass
eine Testbestellung „echte“ Kapazität blockiert und
deswegen Trassenbestellungen abgelehnt würden.
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 7

## Seite 8

Wie informieren wir unsere Schnittstellenpartner über
Veränderungen?
• Geplante Änderungen an der Schnittstelle werden im Regelfall mit 6 Monaten Vorlauf
kommuniziert und gemeinsame Integrationstests angeboten. Die Information erfolgt in den
bekannten Formaten wie TTT-Dialog und Kundeninformation sowie per Mail an die
angebundenen Schnittstellenpartner.
• Für den Zeitraum der Einführung von TAF/TAP TSI im Fahrplan 2027 ist aktuell keine
Änderung an der Schnittstellenbeschreibung geplant.
• Falls ein Schnittstellenpartner in Produktion einen Fehler findet:
• Fehler bitte an DB InfraGO melden
• DB InfraGO analysiert / behebt
• DB InfraGO informiert den Ersteller des Tickets über die Behebung (ab wann in Produktion
verfügbar) und führt ggf. Absprache über bilaterale Retests durch, falls der Fehler als Hotfix
und nicht im nächsten Produktionsrelease erfolgt.
• DB InfraGO nimmt auch die behobenen Produktionsfehler nachrichtlich in die Releasenotes
für die Kundentestumgebung mit auf, wenn diese auch dort behoben sind.
• Für die Kundentestumgebung werden weiterhin Releasenotes im bekannten Format erstellt.
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 8

## Seite 9

3. Fragen aus den Sprechstunden
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 9

## Seite 10

Umgang mit Trassenanmeldungen via PCS im Fahrplan 2027
• Infrastrukturnutzungsbedingungen der DB InfraGO AG (INB) 2027 umfassen in
Abschnitt 4.2.4 Grenzüberschreitende Trassenanmeldungen:
• Für die DB InfraGO interne Bearbeitung der PCS-Bestellungen wird DB InfraGO eine
Schnittstelle von PCS nach pathOS nutzen, die die Trassenanmeldungen übernimmt.
Das Ergebnis der Konstruktion wird manuell von DB InfraGO nach PCS
zurückgeschrieben.
• Die PCS-Bestellungen sind im pathOS Webportal einsehbar (siehe nächste Folie)
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 10

## Seite 11

Bestellungen mit PCS – Ansicht PCS
PAPs müssen über PCS bestellt werden
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 11

## Seite 12

Bestellungen mit PCS – Ansicht pathOS
Links in Maske analog zur Erfassung, rechts nach dem Versand
g
n
u
t
ie
b
r
a
e
B
n
I
|
d
n
r
e
B
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 12

## Seite 13

4. Fragen & Antworten
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 13

## Seite 14

Zeit für Ihre Fragen!
Gerne beantworten wir Ihnen
Ihre Fragen direkt im Termin.
DB InfraGO AG | TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung | 12.02.2026 14

## Seite 15

[Kein extrahierbarer Text auf dieser Seite.]
