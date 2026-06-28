# 3. Informationen für Schnittstellen-Nutzer (und die jeweiligen IT-Firmen)

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480#llmwiki-section=3-informationen-fur-schnittstellen-nutzer-und-die-jeweiligen-it-firmen`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480)
- Quellen-Schlüssel: `src-8e1dd3ee22915d4d35aa`
- Abschnitts-Slug: `3-informationen-fur-schnittstellen-nutzer-und-die-jeweiligen-it-firmen`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

### Informationen für Kund:innen, die die Schnittstelle benutzen

Die folgenden Informationen sind für Sie relevant, wenn Sie für die Trassenanmeldung entweder eigene IT oder das Angebot eines IT-Dienstleisters nutzen. Denn diese muss zukünftig TAF/TAP TSI-fähig sein. Die dazu benötigten technischen Informationen zur Implementierung finden Sie in der aktuell geltenden [Schnittstellendokumentation](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/evu_schnittstelle-11089208). Hier finden Sie neben dem Schnittstellen-Hauptdokument, alle Anhänge und die jeweils aktuellen Stammdaten.

Jedes EVU, dass die neue TAF/TAP konforme Schnittstelle zur Trassenanmeldung nutzen möchte, muss sich vorab bei der DB InfraGO AG melden und freigeschaltet werden. Vor der produktiven Nutzung der neuen Schnittstelle durchlaufen wir gemeinsam mit jedem Schnittstellenpartner einen standardisierten Onboarding-Prozess, um die technischen Voraussetzungen zu schaffen und eine effiziente Qualitätssicherung sicherzustellen.

Selbstverständlich können bisherige Schnittstellenkunden künftig auch im pathOS Portal bestellen. Die Userverwaltung erfolgt dabei über das Infraportal.

### Details zur Durchführung von Tests für IT-Partner

- Bitte kontaktieren Sie uns so früh wie möglich über unser bekanntes Postfach: [Kontaktangabe entfernt].
- Wir benötigen von Ihnen Konfigurationsparameter Ihrer Schnittstelle und geben Ihnen dann die aktuellen CI-Konfigurationsparameter von unserer Schnittstelle mit. Bitte benutzen Sie dafür das Antragsformular für die Testumgebung.
- Der Nachrichtenaustausch findet verschlüsselt über SSL/TLS statt. Die Kommunikation mit dem „CI_Planning_DBInfraGO“ wird über X.509 Zertifikate abgesichert werden. Dadurch werden die Integrität und Vertraulichkeit der Nachrichten sichergestellt. Es werden nur Zertifikate akzeptiert, die von der RNE CA ([Certificate Authority](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Frne.eu%2Fit%2Fproducts%2Fccs%2F&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C17ab9d19cffa42a9ec8508de04d1cc47%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638953496590347352%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Klj6OJdZmYjXzKAgS6obZSWb4Uindios0XF4SiLQqAo%3D&reserved=0)) ausgestellt wurden. Diese erhält man von der RNE ([Link zum Common Components System](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Frne.eu%2Fit%2Fproducts%2Fccs%2F&data=05%7C02%7Credaktion.DBInfraGo%40deutschebahn.com%7C17ab9d19cffa42a9ec8508de04d1cc47%7Ca1a72d9c49e64f6d9af65aafa1183bfd%7C0%7C0%7C638953496590371101%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=IkM1XvQ1HZEKu6D27tFnBommrwa8k%2FnxJGJAX1U0PZk%3D&reserved=0)). Die DB InfraGO AG erwartet, dass Sie TLS (Transport Layer Security) Version 1.2, besser Version 1.3 unterstützen. Weitere Informationen findet man hierzu in der Anlage 2, Kapitel 3 der Schnittstellendokumentation.

Testfälle CI Test (Stand 01.2026)
(XLSX | 60,2 KB)

### Onboarding Schnittstellennutzer

- Für das Onboarding und damit einhergehend die Berechtigung später auch über die Schnittstelle von pathOS Trassen anzumelden, benötigen wir von jedem Schnittstellenpartner (inkl. IT-Dienstleister) ein ausgefülltes Antragsformular. Die Dokumente finden Sie unter diesem Text, für EVU differenziert nach Testumgebung und Produktion.
- Jedes verwendete Common Interface (CI) benötigt ein eigenes SSL-Zertifikat der RNE, dieses kann später von mehreren Kunden (identifiziert durch die Company Codes) verwendet werden.
- Die Dokumente senden Sie bitte an unser Postfach [Kontaktangabe entfernt].

Antrag Schnittstellennutzung für EVU (Prod-Umgebung) – Stand 10.2025
(PDF | 182,4 KB)

Antrag Schnittstellennutzung für EVU/IT-Dienstleister (Test-Umgebung) – Stand 10.2025
(PDF | 182,4 KB)
