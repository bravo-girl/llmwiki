# ETCS Level NTC PZB/LZB

[Original-URL](https://www.dbinfrago.com/web/schienennetz/etcs/grundlagen-etcs/grundwissen-etcs-12285634#llmwiki-section=etcs-level-ntc-pzb-lzb) · [Vollständige lokale Originalquelle](../../raw/grundwissen-etcs-etcs-level-ntc-pzb-lzb--src-8ccb26c33c5abeb79288.md)

> Diese Seite wird abschnittsweise und append-only aus der vollständigen Originalquelle aufgebaut.
## Quellenteil 1 von 1

<!-- llmwiki-chunk: chunk-b356feccf8ea47906395 -->

# ETCS-Level NTC (National Train Control)

## Definition und Zweck
Der ETCS-Level NTC dient der Interoperabilität, indem er es ETCS-ausgerüsteten Fahrzeugen ermöglicht, Strecken zu befahren, die nicht mit ETCS, sondern mit einem **nationalen Zugbeeinflussungssystem** (auch als **Klasse B System** bezeichnet) ausgestattet sind.

## Terminologie und Entwicklung
* **Frühere Bezeichnung:** Bis zum Spezifikationsstand (Baseline) 3 wurde dieser Level als **ETCS-Level STM** (*Specific Transmission Module*) bezeichnet.
* **Aktuelle Bezeichnung:** Ab Baseline 3 wird die Bezeichnung **ETCS-Level NTC** (*National Train Control*) verwendet.

## Technische Funktionsweise und Schnittstellen

### Funktionsprinzip
Im ETCS-Level NTC PZB/LZB erfolgt die Übergabe der Überwachung vom ETCS-Fahrzeuggerät an das jeweilige nationale Zugbeeinflussungssystem.

### Das Specific Transmission Module (STM)
Das STM fungiert als die technische Schnittstelle, die ein nationales Zugbeeinflussungssystem unter der ETCS-Oberfläche darstellt.

| Komponente | Funktion |
| :--- | :--- |
| **STM** | Schnittstelle zum nationalen System; stellt dieses unter ETCS dar. |
| **Fahrzeugausrüstung** | Muss mit den erforderlichen STM ausgestattet sein, um auf Strecken mit unterschiedlichen nationalen Systemen operieren zu können. |

Die Industrie stellt für die meisten in Europa eingesetzten nationalen Zugbeeinflussungssysteme entsprechende STM zur Verfügung.
