# Anleitung Testzugang auf BauFplo API

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/fahren_und_bauen/BauFplo-13377708`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13378010/f4458bb8ed4751b1bfdd4473513e6611/Anleitung-Testzugang-auf-BauFplo-API-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13378010/f4458bb8ed4751b1bfdd4473513e6611/Anleitung-Testzugang-auf-BauFplo-API-data.pdf)
- Quellen-Schlüssel: `src-9f8c0b9f5b714b5929fe`
- Abrufdatum: 2026-06-28
- Original: [[anleitung-testzugang-auf-baufplo-api--src-9f8c0b9f5b714b5929fe.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

DB
Anleitung Zugriff auf BauFplo-API auf
dem DB API Marketplace V 1.2
Inhaltsverzeichnis
1. Einleitung. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
2. Zugriff auf die unterschiedlichen Umgebungen . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
3. Registrierung. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
3.1. Registrieren und Anmelden . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
4. Organisation erstellen und verwalten. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
5. Anwendung erstellen . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
6. Erstellte Anwendungen finden. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
7. Zugriff auf die BauFplo API beantragen . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
8. Nutzung der BauFplo API. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
8.1. Erstellung json . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
9. Änderungshistorie . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
1. Einleitung
Die Bedienungsanleitung für den "DB API Marketplace" dient als Leitfaden zur Nutzung der
API-Dienste zur Digitale Baufahrplananordnung (BauFplo) in der Test- und
Produktionsumgebung:
▮ API-Marketplace Test: Der Test-API Endpunkt der Digitalen BauFplo soll EVUs dazu
dienen, die Schnittstelle der Digitalen BauFplo vor dem produktiven Einsatz zu
verproben.
▮ API-Marketplace Produktion: Der produktive API-Endpunkt der Digitalen BauFplo ist
für die produktive Nutzung durch die EVU vorgesehen. Hier können die EVU-
spezifischen versendeten BauFplo im Format der Digitalen BauFplo abgerufen
werden.
Diese Anleitung erklärt den Zugriff auf die beiden APIs
▮ "BauFplo API Test V2 dev develop"
▮ "BauFplo API V2"
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 1

## Seite 2

DB
Abbildung 1. Zugriff Test & Produktion
Sollten Fragen auftreten, können Sie sich gerne per E-Mail an [Kontaktangabe entfernt]
wenden.
Um Zugang zu einer der beiden Umgebungen zu erhalten, folgen Sie bitte den
nachfolgenden Schritten.
2. Zugriff auf die unterschiedlichen Umgebungen
Um Zugriff zum API-Marketplace Test zu erhalten, rufen Sie die folgende Webseite auf
https://developers.deutschebahn.com/db-api-marketplace/apis-test/
Um Zugriff zum API-Marketplace Produktion zu erhalten, rufen Sie die folgende Webseite
auf https://developers.deutschebahn.com/db-api-marketplace/apis
In den folgenden Kapiteln wird die Nutzung beider APIs erklärt. Soweit nicht anders
angegeben, gelten alle beschriebenen Schritte für beide Umgebungen.
3. Registrierung
Rufen Sie die jeweilige Website (Test oder Produktion) auf und registrieren Sie sich dort für
ein Benutzerkonto.
3.1. Registrieren und Anmelden
Um sich zu registrieren, klicken Sie auf den Button „Los geht’s“ im Bereich „Getting Started“.
Dadurch gelangen Sie zur Anleitung der Registrierung des Marketplace.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 2

## Seite 3

DB
Abbildung 2. Registrieren und Anmelden
Sie haben bereits eine BahnID?
Wenn Ihnen bereits eine BahnID vorliegt, können Sie den Registrierungsvorgang
überspringen und direkt oben rechts auf den Button „Anmelden“ klicken.
Sie haben noch keine BahnID?
Falls Ihnen keine BahnID vorliegt, klicken Sie zunächst auf „Registrieren“, um den Prozess
zu starten. Anschließend wählen Sie die Option „Weiter mit BahnID“, woraufhin Sie zu einer
Eingabemaske der Registrierung weitergeleitet werden.
Abbildung 3. Registrieren oder Anmelden mit BahnID
Folgen Sie den Anweisungen in der Maske, um Ihre Registrierung erfolgreich
abzuschließen.
4. Organisation erstellen und verwalten
Sie können für die Nutzung der API Dienste eine Organisation erstellen.
Eine Organisation ist eine Art Arbeitsbereich, in dem die Anwendungen und Abonnements
verwaltet werden. Sie sind der Eigner dieser Organisation und zunächst das einzige
Mitglied. Wenn Sie in einem Team arbeiten, legen Sie sich am besten eine neue
Organisation z.B. mit einem Teamnamen oder dem Namen Ihrer Firma an. Dort können
dann weitere Personen als Mitglieder in diese Organisation einladen werden.
Mitglieder einer Organisation können gemeinsam Anwendungen und Abonnements
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 3

## Seite 4

DB
verwalten und Testaufrufe abonnierter APIs durchführen.
Um eine Organisation zu erstellen, klicken Sie oben rechts auf das Feld links neben Ihrem
Icon.
Abbildung 4. Organisation erstellen
Klicken Sie auf "Organisation erstellen" und es öffnet sich folgende Ansicht:
Abbildung 5. Speichern einer Organisation
Wählen Sie einen Titel für Ihre Organisation und klicken Sie auf "Speichern".
Es erscheint eine Meldung auf der Startseite mit der Bestätigung, dass ihre Organisation
erstellt wurde. Klicken Sie erneut auf das Feld links neben Ihrem Icon und wählen Sie
"Organisation verwalten".
Abbildung 6. Organisation verwalten
An dieser Stelle können Sie Mitglieder einladen, in dem Sie auf oben rechts auf den Button
"Einladen" klicken.
5. Anwendung erstellen
Um die API nutzen zu können, ist die Erstellung einer Anwendung erforderlich. Diese
Anwendung entspricht einem technischen Client. Um eine Anwendung zu erstellen, rufen
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 4

## Seite 5

DB
Sie folgende Seite auf:
▮ API-Marketplace Test: https://developers.deutschebahn.com/db-api-marketplace/apis-
test/application
▮ API-Marketplace Produktion: https://developers.deutschebahn.com/db-api-
marketplace/apis/application
Unter "Neue Anwendung erstellen" können Sie starten.
Abbildung 7. Neue Anwendung erstellen
Geben Sie wie im Marketplace erklärt einen Titel an. Der Titel sollte für eine korrekte
Zuordnung zu der API wie folgt gewählt werden: BEAM-ID (falls internes EVU, sonst leer) +
Kundennummer + Kundenname, Beispiel A-123456 Z9876 DB Regio
Das Feld "OAuth-Umleitungs-URL(s) der Anwendung" muss nicht ausgefüllt werden.
Außerdem ist es wichtig das Client Secret (API Key) aufzubewahren. Dieses wird nur an
dieser Stelle des Vorgangs angezeigt. Speichern Sie sich das Client Secret in Ihren
Unterlagen.
Nach Klicken auf "Neue Anwendung erstellen" öffnet sich ein neuer Tab in Ihrem Browser.
Abbildung 8. Maske Neue Anwendung erstellen
Geben Sie der Anwendung einen Titel und bei Bedarf eine Beschreibung.
Klicken Sie auf den Button "Speichern".
Es erscheint folgende Darstellung.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 5

## Seite 6

DB
Abbildung 9. Anwendung erfolgreich erstellt
Es ist wichtig, das Client Secret Ihrer Anwendung an einem sicheren Ort aufzubewahren.
Nachdem Sie die Informationen sicher gespeichert haben, klicken Sie auf den Button "OK".
Es erscheint folgende Darstellung:
Abbildung 10. Berechtigungsnachweise für die erstellte Anwendung
Wenn Sie auf beide Umgebungen zugreifen können, achten Sie darauf, in

welcher Sie eine Anwendung erstellen. Anwendungen sind jeweils nur in
der Umgebung nutzbar, in der sie angelegt wurden.
6. Erstellte Anwendungen finden
Um Ihre erstellte Anwendung zu finden, kehren Sie bitte zur Startseite zurück. Dort klicken
Sie oben in der Mitte auf "Anwendungen".
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 6

## Seite 7

DB
Abbildung 11. Startseite
Hier können Sie Ihre Anwendungen verwalten.
Abbildung 12. Anwendungen verwalten
Wenn Sie eine erstellte Anwendung nicht finden, prüfen Sie bitte, ob Sie in
 der richtigen Umgebung (Test oder Produktion) angemeldet sind.
Anwendungen werden ausschließlich in der Umgebung angezeigt, in der
sie erstellt wurden.
7. Zugriff auf die BauFplo API beantragen
Um auf die BauFplo API zuzugreifen, navigieren Sie zurück zur Startseite und klicken oben
in der Mitte auf "Katalog". Daraufhin wird Ihnen die entsprechende Ansicht angezeigt:
Abbildung 13. API Katalog
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 7

## Seite 8

DB
Sie können nun unter "Name" BauFplo eingeben und nachdem Sie auf "Anwenden"
geklickt haben, erscheint folgende Ansicht:
Abbildung 14. BauFplo-API
Klicken Sie auf das Kästchen "BauFplo API […]" und es öffnet sich die Detailansicht zur API.
Achten Sie hier darauf auf welchem Endpunkt Sie sich befinden. Für den
 API-Marketplace Test sollte "BauFplo API Test V2 dev develop"
erscheinen und für den API-Marketplace Produktion die folgende API
"BauFplo API V2".
Anschließend gelangen Sie zum Punkt "Nutzungspläne".
Abbildung 15. API Detailansicht
Klicken Sie auf "Abonnieren" und es erscheint folgende Ansicht.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 8

## Seite 9

DB
Abbildung 16. Anwendung auswählen
Wählen Sie Ihre zuvor erstellte Anwendung aus. Klicken Sie dafür auf das Kästchen Ihrer
Anwendung und Sie erreichen den nächsten Menüpunkt.
Abbildung 17. Abonnement bestätigen
Hier klicken Sie auf "Weiter".
Abbildung 18. Abonnement abgeschlossen
Ihre Abonnementanforderung wurde erfolgreich erstellt und steht nun zur Genehmigung an.
Bitte senden Sie zusätzlich eine E-Mail an [Kontaktangabe entfernt] mit folgenden
Informationen:
▮ Name der Anwendung
▮ Hauptkundennummer und den Kundennamen
▮ Client-ID der Anwendung, mit der der Zugriff beantragt wurde
▮ Kontaktdaten - inklusive E-Mail-Adresse - von mindestens zwei aussagefähigen, dem
EVU zugehörigen und fachlich zuständigen Personen (um Personalwechsel zu
umgehen, bei denen dann der Ansprechpartner fehlt)
▮ Grund des Zugriffs auf die API
Bei Rückfragen werden wir uns mit Ihnen in Verbindung setzen.
Sobald Sie das Abonnement abgeschlossen haben, erhalten Sie eine E-Mail mit der
Bestätigung, dass eine API-Abonnementanforderung für Ihre Anwendung eingegangen ist.
Nach Genehmigung der Abonnementanforderung erhalten Sie eine weitere E-Mail mit einem
Token, welches zur Authentifizierung gegenüber dem Endpunkt dient.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 9

## Seite 10

DB
8. Nutzung der BauFplo API
Navigieren Sie über den Katalog zur Detailansicht der BauFplo API. Nun klicken Sie auf das
Kästchen unter "Zugehörige APIs". Es erscheint folgende Ansicht:
Abbildung 19. BauFplo-API Überblick
Hier klicken Sie auf "GET/api/baufplos" und es erscheint folgende Ansicht. Eine
Beschreibung der Abfrageparameter wird ebenfalls angezeigt.
Abbildung 20. API Endpunkt
Um die API nun selbst zu nutzen, klicken Sie auf "Versuch' es!" oben rechts. Sie kommen
in eine neue Ansicht.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 10

## Seite 11

DB
Abbildung 21. API Endpunkt nutzen
Sie können unter "Client ID" Ihre Anwendung auswählen, mit welcher Sie die API nutzen
wollen. Des Weiteren brauchen Sie ihr "Client Secret", welches Sie bei der Generierung
der Anwendung erhalten haben.
8.1. Erstellung json
Bitte geben Sie den zur Verfügung gestellten Token unter "Parameter" >
"bizhubConsumerToken" ein und wählen Ihre Abfrage Daten. Dabei ist zu beachten, dass
"verkehrstagVon" und "verkehrstagBis" Pflichtfelder sind.
Wenn Sie alle Felder eingegeben haben, können Sie die Abfrage abschicken, indem Sie
unten auf "Senden" klicken.
Abbildung 22. Parameter Eingabe
Sobald Sie auf "Senden" geklickt haben, erscheint eine Antwort in einer JSON oder xml
Struktur. Sollten keine Daten gefunden worden sein, erweitern Sie bitte den
Abfragezeitraum.
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 11

## Seite 12

DB
Abbildung 23. Antwort JSON Struktur
Die JSON-Datei enthält die von Ihnen angeforderten Informationen. Wir hoffen, dass diese
Daten für Sie von Nutzen sind. Vielen Dank, dass Sie unsere API verwenden. Bei weiteren
Fragen schicken Sie gerne eine E-Mail an: [Kontaktangabe entfernt]
9. Änderungshistorie
Änderungshistorie des Dokuments
Version Datum Autor Durchgeführte
Änderung
V 1.2 19.01.2026 Team Digitale BauFplo Überarbeitung Titel,
Änderung Bezeichnung
der API zum Testzugriff
V 1.1 07.11.2025 Team Digitale BauFplo Abgrenzung API-
Marketplace Test und
API-Marketplace
Produktion,
redaktionelle
Änderungen
V 1.0 04.04.2025 Team Digitale BauFplo Aktualisierung und
Anpassung Dokument
Anleitung Zugriff auf BauFplo-API auf dem DB API Marketplace V 1.2 12
