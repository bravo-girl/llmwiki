# Anlage 6: Technische Funktionsbeschreibung - Stammdatenbereitstellung

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13508614/122fdcab93fbc100d14c503512a30c70/Anlage-6-Technische-Funktionsbeschreibung-Stammdatenbereitstellung-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13508614/122fdcab93fbc100d14c503512a30c70/Anlage-6-Technische-Funktionsbeschreibung-Stammdatenbereitstellung-data.pdf)
- Quellen-Schlüssel: `src-a6f030827eb1ca9976c0`
- Abrufdatum: 2026-06-27
- Original: [[anlage-6-technische-funktionsbeschreibung-stammdatenbereitstellung--src-a6f030827eb1ca9976c0.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Anlage 6
Technische Funktionsbeschreibung
Stammdatenbereitstellung
EVU-Schnittstelle Bestellsystem („pathOS")
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
Version 4.6.2
−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−

## Seite 2

Historie / Änderungen
Version Bearbeitet/ geän- Beschreibung der Änderungen/Bemerkungen Datum
dert von
4.4.0 Initiale Version dokumentiert die neue REST-ba- 28.02.2022
sierte Version der Stammdatenbereitstellung.
4.4.1 Keine Anpassungen 22.08.2022
4.4.2 Umstellung der Stammdatenbereitstellung auf die 10.05.2023
Auswahl über einen Ordnungsrahmen
4.5.0 Keine Anpassungen 17.07.2024
4.6.0 Keine Anpassungen 17.04.2025
4.6.1 Keine Anpassungen 14.07.2025
4.6.2 DB InfraGO AG Keine Anpassungen 11.09.2025
Fabian Sommer
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 2

## Seite 3

Inhaltsverzeichnis
1 Einleitung 4
2 Kommunikation der Stammdaten-Bereitstellung 5
2.1 Offene Punkte 6
3 Technische Hinweise und Anforderungen 7
3.1 Spezifikation 7
3.2 Datenformat 7
3.3 Authentifizierung und Autorisierung 7
3.4 Sicherheit 7
3.5 Kodierung des Zeichensatzes 7
3.6 Timeout 7
3.7 Anforderungen an die Verfügbarkeit der Systeme 7
4 Testumgebung 8
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 3

## Seite 4

1 Einleitung
Wie im Hauptdokument Kapitel 11 „Stammdaten“ beschrieben, werden bestimmte Datenelemente
als Stammdaten hinterlegt. Die Struktur und die fachlichen Inhalte dieser Stammdaten beschreibt
die Anlage 1 (Anl1_Datenfelder_EVU-Schnittstelle_Bestellsystem V_4.x.x) Kapitel 4 „Bereitstellung
der Stammdaten“.
Dieses Dokument beschreibt die technische Funktionsweise der Stammdatenbereitstellung analog
zur Anlage 2 der Schnittstellendokumentation (Anl2_Technische Funktionsbeschreibung_EVU-
Schnittstelle_Bestellsystem_V4.x.x) für den Austausch der eigentlichen TAF/TAP Nachrichten.
Die Stammdaten werden nicht wie TAF/TAP Nachrichten über eine SOAP-Schnittstelle im XML-
Format bereitgestellt, sondern über eine REST-konforme Schnittstelle verfügbar gemacht. Die da-
zugehörige OpenAPI Spezifikation findet man in Anlage 7 der Schnittstellendokumentation
(Anl7_stammdatenEVU.openapi.yaml).
Der Aktualisierungszyklus der Stammdaten sowie die Plattform zum Download der entsprechen-
den Dateien wird Ihnen im Zuge der Beantragung des Zugangs zur EVU-Schnittstelle bekanntge-
geben.
Der Abruf der Stammdaten ist über eine Authentifizierung analog zur Nachrichtenübertragung ge-
schützt, es erfolgt aber keine Autorisierung.
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 4

## Seite 5

2 Kommunikation der Stammdaten-Bereitstellung
Im Gegensatz zum Common-Interface (s. Anlage 2 der Schnittstellendokumentation) handelt es
sich bei der Stammdatenbereitstellung um eine unidirektionale Kommunikation. Ein EVU kann bei
Bedarf die Stammdaten abrufen.
Über die REST-Schnittstelle müssen zunächst die verfügbaren Ordnungsrahmenstände abgerufen
werden, um in einem zweiten Schritt die tatsächlichen Stammdaten mit dem benötigten Ordnungs-
rahmenstand als Parameter herunterzuladen. Da die Datenmenge mit mehreren Megabyte relativ
groß ist, empfiehlt es sich, dies nur bei der Bekanntgabe der Stammdaten-Änderungen zu tun und
die Daten in den internen Systemen zwischenzuspeichern. Die Daten zu einem Ordnungsrahmen-
stand wie z.B. „Fahrplanjahr 2026 2. Berichtigung“ sind unveränderlich und müssen nicht laufend
aktualisiert werden.
Für den Abruf der Stammdaten benötigt ein EVU lediglich ein gültiges Zertifikat, ausgestellt von der
RNE CA (vgl. https://ccs.rne.eu/security/), die gültige OpenAPI-Spezifikation der Schnittstelle sowie
einen (noch nicht final festgelegten) Endpunkt.
Aktuell ist keine zusätzliche Autorisierung für den Stammdaten-Abruf vorgesehen. Allerdings kann
eine übermäßige Belastung der Schnittstelle, z.B. durch einen unnötig häufigen Abruf derselben
Stammdaten, unterbunden werden. Als Richtwert sollte ein Abruf der Stammdaten pro EVU nicht
häufiger als einmal am Tag notwendig sein, da neue Stände nur einige Male im Jahr veröffentlicht
werden.
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 5

## Seite 6

2.1 Offene Punkte
Die vorliegende Spezifikation ist nicht final, da einige fachliche und technische Aspekte noch aus-
detailliert werden müssen. Dazu gehören u.a.:
1. Bereitstellung der Deltas zwischen den verschiedenen Stammdatenständen
2. Bereitstellung anderer Formate als JSON
3. Datenkompression
4. Aufteilung der Stammdaten auf Teillieferungen
5. Empfehlungen für Cache-Control-Mechanismen
(vgl. https://developer.mozilla.org/de/docs/Web/HTTP/Caching)
6. Bereitstellung der OpenAPI-Spezifikation über den Daten-Endpunkt
7. Verfügbarkeitsgarantien
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 6

## Seite 7

3 Technische Hinweise und Anforderungen
3.1 Spezifikation
Die Schnittstelle wird im OpenAPI-Format (vgl. https://swagger.io/specification/) spezifiziert. Die
Datenstruktur und die Beschreibung der fachlichen Inhalte der Datenelemente können der Anlage
1 der Schnittstellendokumentation (Anl1_Datenfelder_EVU-Schnittstelle_Bestellportal V_4.x.x) Ka-
pitel 4 entnommen werden.
Bei Änderungen der Schnittstelle wird die OpenAPI-Datei aktualisiert.
3.2 Datenformat
Die Daten werden als JSON (vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Refe-
rence/Global_Objects/JSON) über eine REST-konforme (vgl. https://restfulapi.net/) Schnittstelle
bereitgestellt. Dadurch ist eine effiziente Verarbeitung mit den gängigen Tools und Frameworks
sichergestellt.
Prinzipiell ist auch ein Abruf aus dem Browser möglich, ein Client-Zertifikat der RNE vorausge-
setzt (wie zum Beispiel in Chrome https://support.google.com/chrome/a/answer/6080885?hl=de).
3.3 Authentifizierung und Autorisierung
Die Authentifizierung in beide Richtungen erfolgt über X.509-Zertifikate. Dies gilt für den WebServer
als auch den Client und erfolgt analog zum Common-Interface (s. Anlage 2 der Schnittstellendoku-
mentation).
Da die Stammdaten keine vertraulichen Informationen beinhalten ist keine Autorisierung vorgese-
hen, d.h. es findet keine Prüfung statt, ob der Aufrufer der DB InfraGObekannt ist. Es reicht ein
gültiges RNE Client Zertifikat.
3.4 Sicherheit
Der Aufrufer muss TLS (Transport Layer Security) Version 1.2, besser Version 1.3 unterstützen.
3.5 Kodierung des Zeichensatzes
Die Daten werden UTF-8 kodiert analog zu TAF/TAP Nachrichten (s. Anlage 2 der Schnittstellen-
dokumentation).
3.6 Timeout
Für genauere Timeout-Empfehlungen fehlen noch die Erfahrungswerte, eine Festlegung erfolgt
später.
3.7 Anforderungen an die Verfügbarkeit der Systeme
Es wird eine ähnliche Verfügbarkeit wie beim Common-Interface (s. Anlage 2 der Schnittstellen-
dokumentation) angestrebt.
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 7

## Seite 8

4 Testumgebung
Die Stammdaten werden in der gleichen Umgebung wie das Common-Interface (s. Anlage 2 der
Schnittstellendokumentation) bereitgestellt.
Anlage 6: Technische Funktionsbeschreibung Stammdaten-Bereitstellung, Version 4.6.2 8
