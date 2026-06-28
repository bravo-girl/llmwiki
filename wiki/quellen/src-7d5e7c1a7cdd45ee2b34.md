# Fordert die ETCS-Streckeneinrichtung, dass das ETCS-Fahrzeuggerät permanent eine gültige Position während des Startlaufs haben muss?

[Original-URL](https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634#llmwiki-section=fordert-die-etcs-streckeneinrichtung-dass-das-etcs-fahrzeuggerat-permane) · [Vollständige lokale Originalquelle](../../raw/grundwissen-etcs-fordert-die-etcs-streckeneinrichtung-dass-d--src-7d5e7c1a7cdd45ee2b34.md)

> Diese Seite wird abschnittsweise und append-only aus der vollständigen Originalquelle aufgebaut.
## Quellenteil 1 von 1

<!-- llmwiki-chunk: chunk-4659788491a9c770de26 -->

# ETCS-Fahrzeuggerät: Positionierung beim Startlauf (Start of Mission)

Die Anforderungen an die Verfügbarkeit einer gültigen Position des ETCS-Fahrzeuggeräts während des Startlaufs (Start of Mission, SoM) variieren je nach ETCS-Level und technischem Umsetzungsstand.

## ETCS-Level 1
- Keine spezifische Anforderung in diesem Kontext (Abdeckung erfolgt über U_CR1313 / NTR 17).

## ETCS-Level 2
Beim Startlauf wird zwischen der aktuellen und der zukünftigen Umsetzung unterschieden:

### Aktuelle Umsetzung
- **Anforderung:** Es besteht keine generelle Forderung nach einer permanenten gültigen Position beim Start.
- **Betriebsart:** Der Start erfolgt generell im ETCS-Level NTC (PZB/LZB).
- **Ausnahmen:** Abweichungen sind durch das Streckenbuch geregelt. Ein Beispiel hierfür sind Bahnhöfe auf Strecken mit ETCS-Level 2 ohne Hauptsignale; in diesen Fällen ist ETCS-Level 2 als Betriebsart zu wählen.

### Zukünftige Umsetzung
- **Verfahren:** Es wird ein spezielles, von der ETCS-Zentrale gesteuertes Verfahren implementiert.
- **Informationsbasis:** Das Verfahren nutzt externe Informationen, die der ETCS-Zentrale bereitgestellt werden.
- **Einschränkung:** Ein Start in der ETCS-Betriebsart SR (Staffelregelung) ist nur an Stellen möglich, an denen die vorhandenen Balisen dies zulassen.

---
**Quellen-Informationen:**
- **Quellen-ID:** `https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634#llmwiki-section=fordert-die-etcs-streckeneinrichtung-dass-das-etcs-fahrzeuggerat-permane`
- **Quellen-Schlüssel:** `src-7d5e7c1a7cdd45ee2b34`
- **Original-URL:** [https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634](https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634)
