# 1. Aktuelles & Informationen

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480#llmwiki-section=1-aktuelles-informationen`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480)
- Quellen-Schlüssel: `src-70591d224241727ac395`
- Abschnitts-Slug: `1-aktuelles-informationen`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

Aktuelle Zeitplanung

- Zum Fahrplanjahr 2027 führt die DB InfraGO pathOS als das neue, TAF/TAP-konforme System zur Trassenanmeldung ein.
- Trassenanmeldungen in den Fahrplanjahren 2025 und 2026 sind wie gewohnt über TPN anzumelden.
- Dies bedeutet, dass alle Trassenanmeldungen für das Fahrplanjahr 2027 nur noch über pathOS laufen: Ab März 2026 in der Netzfahrplananmeldephase müssen also die ersten Trassen im neuen Format angemeldet werden.
- Für Anmeldungen bis einschließlich Fahrplanjahr 2026 werden weiterhin unsere heutigen Kanäle genutzt, somit kommt es im Kalenderjahr 2026 übergangsweise zu einem faktischen Parallelbetrieb – mit getrennten Inhalten: TPN für alles bis einschließlich Fahrplanjahr 2026 – pathOS für alles ab dem Fahrplanjahr 2027.

Wichtige Hinweise zur Userverwaltung:

- Das neue Trassenbestellsystem pathOS wird künftig für alle Kund:innen (außerhalb der DB InfraGO) über das Infraportal verwaltet. Damit folgen wir dem Standard, dass das Infraportal alle Anwendungen über einen Login bündelt.
- Für das Trassenportal Netz (TPN) gilt, solange es weiter benutzt wird, für alle Anwender die heutige Userverwaltung.
- Es werden keine heutigen TPN-User in pathOS migriert – jeder Anwendende, der künftig pathOS benutzen möchte, muss sich dazu im Infraportal berechtigen lassen.
- Im Infraportal muss zunächst ein personenscharfer Zugang beantragt werden. Anwendende, die z.B. durch eine andere Anwendung bereits einen Zugang besitzen, können diesen selbstverständlich verwenden. Anschließend muss für das neue Tool pathOS die Freischaltung beantragt werden (dies kann zusammen mit der Beantragung des Zugangs erfolgen). Die Erteilung der Berechtigung erfolgt dann wie im Infraportal gewohnt, durch den Superuser des jeweiligen Zugangsberechtigten selbst.
- Für pathOS ist darauf zu achten, sich für das korrekte Unternehmen (Hauptkundennummer, Company Code) berechtigen zu lassen und dann zwingend die relevanten Kundennummern auszuwählen, die benötigt werden. pathOS „denkt“ immer auf der Ebene einer Kundennummer.
- Bis das Produktivsystem im Infraportal hinterlegt wird, haben wir im Infraportal nur unsere Schulungs- und Testumgebung hinterlegt. Künftig wird es dann zwei Tools für pathOS geben – wir trennen hier nach „Schulung und Test“ und „Produktiv (live)“. Beide Berechtigungen müssen separat vergeben werden!
- Alle Fragen zum Infraportal und der Userverwaltung richten Sie bitte an den zugehörigen Support: [Kontaktangabe entfernt]

Wir empfehlen, sich frühzeitig mit der neuen Umgebung vertraut zu machen! Im Punkt 2 „Schulungsmaterial- und Unterlagen“ finden Sie alle wichtigen Informationen, um das neue Portal pathOS bedienen zu können.

TAF/TAP TSI Basics

TAF/TAP TSI setzt voraus, dass alle Zugangsberechtigten (z.B. EVU) einen eigenen Company Code für den Datenaustausch haben. Dies ist der eindeutige Identifikator des Absenders – ohne Company Code können keine Trassen angemeldet werden. Zudem ist der Company Code Teil jeder Identifikation eines Zuges – auch im operativen Betrieb.

Wer aktuell noch keinen Company Code hat, muss diesen bei der [UIC](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fuic.org%2Fsupport-activities%2Fit%2Frics&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C53c35c0ab10e40d17e7508dcc34371ba%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638599941648891904%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=O2YYafWBcVzxaV7YboE0pwH8S3%2Fr7GUzXyNDjNwUBQM%3D&reserved=0) beantragen, ab dem 01.01.2026 wird dieser innerhalb der EU direkt bei der [ERA](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.era.europa.eu%2Fdomains%2Fregisters%2Focr_en&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C53c35c0ab10e40d17e7508dcc34371ba%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638599941648899171%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=7ypFiFuQ8Ik1RvPiqYqUx3pNWsao8IKFhICgKOlELZU%3D&reserved=0) beantragt. Wer bereits einen Company Code (RICS Code) hat, kann diesen bei der ERA als einen gleichlautenden Organisation Code bestätigen lassen. Der Organisation Code ist erforderlich bei Nutzung von ERA-Anwendungen, wie z.B. dem Fahrzeugregister, derzeit allerdings noch losgelöst von TAF/TAP TSI. Künftig werden diese beiden Codes synchronisiert.

Details zu den verschiedenen Nachrichtentypen und weiterführende Informationen werden durch die RNE auf deren [Homepage](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Frne.eu%2Fit%2Ftaf-tap-tsi%2F&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C53c35c0ab10e40d17e7508dcc34371ba%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638599941648906189%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=id403HIAqkOuwpwlbGGCdXIHHYY%2BMbeCulfxdzSF49Q%3D&reserved=0) sowie auf der Seite der [Joint Sector Group (JSG)](https://eur03.safelinks.protection.outlook.com/?url=http%3A%2F%2Ftaf-jsg.info%2F&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C53c35c0ab10e40d17e7508dcc34371ba%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638599941648921558%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=Kez7DSJNy5%2BQ1%2F1NfSzxt6vMsuwRQ0ps0orvYWx%2Bh8s%3D&reserved=0) bereitgestellt.

Für allgemeine Themen rund um TAF/TAP TSI gibt es in Deutschland einen sogenannten „National Contact Point (NCP)“, der in unserem Fall in der DB InfraGO AG angehängt ist. Kontaktieren Sie bei übergreifenden Themen also gerne den NCP direkt über dessen E-Mail-Postfach ([Kontaktangabe entfernt]).
