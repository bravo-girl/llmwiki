# Betrieb: Meldungen EVU an DB InfraGO AG

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212`
- Quellen-ID: `https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212#llmwiki-section=fachinformationen`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen](https://www.dbinfrago.com/web/schienennetz/netzzugang-und-regulierung/taf-tap-tsi/betrieb-meldungen-evu-an-db-infrago--11089212)
- Quellen-Schlüssel: `src-2caf703401e35f29205f`
- Abschnitts-Slug: `fachinformationen`
- Abrufdatum: 2026-06-28

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

*Hinweis: Ab Fahrplanwechsel im Dezember 2026 werden im betrieblichen TAF/TAP-Meldungsaustausch zusätzlich zur OTN (Zugnummer) auch die TAF/TAP-Identifier genutzt. Informationen hierzu finden Sie in der Grundlagen-Präsentation, den Erklär-Videos und einem Flyer („Über TAF/TAP“ > „6. TAF/TAP im Betrieb“ und „3. Flyer-Bibliothek“). Zusätzlich in den Technischen Beschreibungen unter den Kacheln Betrieb, insbesondere in der Beschreibung der betrieblichen PathDetails message (Dispositionsfahrplan).*

Ab **Ende Q2/2025** werden die folgenden TAF/TAP-Meldungen **produktiv** angeboten:

- Meldungen der aktuellen Zugeigenschaften:Zugbildungsmeldung für Güterverkehr (Train Composition message)Zugbildungsmeldung für Personenverkehr (Passenger Train Composition message)
- Meldungen zu Anschluss-/Umlaufdaten:Aktueller Anschlusswunsch (Object Info message)Aktuelle Umlaufinformation (Object Info message)
- Zugvorbereitungsmeldung (Train Ready message)

Ab **Netzfahrplan 2027 (Dezember 2026)** erfolgt der Meldungsaustausch auf Basis der **TAF/P-Identifier**, davor auf Basis der OTN (Operational Train Number, Zugnummer).

**Details**, technischen Voraussetzungen und Rahmenbedingung sind den nebenstehend zum Download verfügbaren technischen Beschreibungen zu entnehmen.

Die DB InfraGO empfiehlt den EVU ausdrücklich, die **Error message** zu empfangen und auszuwerten. Diese enthält zahlreiche **Informationen zu etwaigen Fehlern** in Meldungen an die DB InfraGO. Das EVU kann so kontrollieren, warum Meldungen seitens DB InfraGO nicht verarbeitet wurden.

Das auf dieser Seite zum Herunterladen verfügbare **DB-InfraGO-xsd-Schema** (TAF/TAP-Meldungsschema) kann zur Übermittlung der Object Info message sowie zusätzlicher, nicht verpflichtender Inhalte in der Train Composition- und Passenger Train Composition message (TCM/PTCM) verwendet werden. Weitere Details in den entsprechenden technischen Beschreibungen. Gleichwohl kann auch die DB InfraGO AG-xsd für den Austausch der anderen TAF/TAP-Meldungen verwendet werden, sie ist bis auf wenige Anpassungen kompatibel zur offiziellen europäischen xsd-Version 3.0.2.0. Die Anpassungen sind:

- Erweiterung der Train Activity um die Inhalte des europäischen Change Request 275
- Element Braking Ratio (Bremshundertstel) in den Gesamtzugdaten der TCM/PTCM
- Umbenennung der in der Location File Dataset message verwendeten „Valditiy Period“ in „Validity Period Type“ um Verwechslung mit dem gleichnamigen Element zu verhindern, welches in zahlreichen anderen Meldungen verwendet wird (notwendig bis zur Umsetzung Change Request 193/194)
- Anpassung namespace um der Erzeugung der xsd durch DB InfraGO AG Rechnung zu tragen

Alternativ kann für alle Meldungen inklusive der Object Info message sowie den zusätzlichen Inhalten in TCM/PTCM die offizielle europäische xsd-Version 3.4.1.0. genutzt werden. Hier sind die oben genannten Änderungen bereits enthalten.

Die **TCM/PTCM** (Train Composition message bzw. Passenger Train Composition message) sind als einzige betriebliche TAF/TAP-Meldungen ab Fahrplanwechsel im Dezember 2025 **verpflichtend** an die DB InfraGO zu senden. Die genauen Modalitäten sind aus der entsprechenden technischen Beschreibung auf dieser Seite ersichtlich. Alternativ kann die Zulieferung der Zugeigenschaften für Güter- und Personenverkehrszüge auch über den sogenannten TCM-Editor der DB InfraGO mittels manueller Eingabe oder dem Hochladen einer *.csv- bzw. *.xsd-Datei erfolgen. Dieser ist über das DB InfraGO Infraportal erreichbar. Weitere Informationen finden Sie in der technischen Beschreibung und dem Bedienerhandbuch TCM-Editor.

Die grundsätzlich erfolgreiche Übermittlung von Zugeigenschaften via TCM/PTCM bzw. über den TCM-Editor können Kunden in LeiDis-NK selbst überprüfen. Dort sind viele Angaben der Zugeigenschaften wie z. B. Gesamtzuglänge oder -gewicht ersichtlich. Nach erfolgreicher Verarbeitung neuer Zugeigenschaften mittels TCM/PTCM bzw. TCM-Editor werden hier dann die aktuellen Werte angezeigt.

**Anträge** zum Austausch der genannten TAF/TAP-Meldungen können im NetzCockpit mittels Tool zur [BDV Anmeldung](https://wafbasic-p-043.noncd.db.de/f?p=FORMULA_BDV_NECO) gestellt werden.

**Fragen** zur TAF/TAP-Schnittstelle für betriebliche Meldungen der DB InfraGO (Betriebsdatenverteiler, BDV), sowie zu **Testbedarfen** können Sie gerne an [Kontaktangabe entfernt] richten.

Für **allgemeine und inhaltliche Fragen** zur TAF/TAP TSI im Betrieb und darüber hinaus wenden Sie sich bitte weiterhin an die Kontaktadressen in der Rubrik Ansprechpartner:innen.
