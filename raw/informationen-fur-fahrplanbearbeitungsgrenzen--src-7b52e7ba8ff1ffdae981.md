# Informationen für Fahrplanbearbeitungsgrenzen –

- Quellenart: PDF
- Discovery-URL: `https://www.dbinfrago.com/web/schienennetz/leistungen/trassen/trassenbestellung/pathOS-neues-Bestellsystem--13003480`
- Quellen-ID: `https://www.dbinfrago.com/resource/blob/13501726/98781a2e02050f8e3b3e0a80e5a65ee9/Informationen-zu-Fahrplanbearbeitungsgrenzen-Planning-Handover-data.pdf`
- Original-URL: [PDF beim Herausgeber öffnen](https://www.dbinfrago.com/resource/blob/13501726/98781a2e02050f8e3b3e0a80e5a65ee9/Informationen-zu-Fahrplanbearbeitungsgrenzen-Planning-Handover-data.pdf)
- Quellen-Schlüssel: `src-7b52e7ba8ff1ffdae981`
- Abrufdatum: 2026-06-27
- Original: [[informationen-fur-fahrplanbearbeitungsgrenzen--src-7b52e7ba8ff1ffdae981.pdf]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

## Seite 1

Informationen zu Fahrplanbearbeitungs-
grenzen/ planning handover
Grenzen zu EIU im Ausland
Stand: 28.08.2025
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 1

## Seite 2

Fahrplanbearbeitungsgrenzen/planning handover in der
Fahrplanung für Grenzen ins Ausland
Auszug aus der Schnittstellenbeschreibung:
Version 4.6.1., Abschnitt 10.4
Für internationale Trassen stehen die anzugebenen planning handover an den Grenzen zu
ausländischen EIU auf der Website zu TAF/TAP TSI in der Kachel „Fahrplan: EVU-Schnittstelle“
zum Download bereit (Spalten J-M)
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 2

## Seite 3

Wichtige Informationen zur Anmeldung von
grenzüberschreitenden Zügen (Inland und Ausland)
Informationen aus TAF/TAP – Schnittstellenpartner JF Fahrplan/Trassenanmeldung – 12.06.2025
Fachliche Ausprägung Abbildung in TTT-Nachrichten Kommentar / Hinweis
Zug beginnt im Ausland und endet im Netz der Ein Train mit zwei PathRequests, der zweite Angabe der planning handover zwingend
DB InfraGO PathRequest an DB InfraGO erforderlich
Zug beginnt im Netz der DB InfraGO und endet Ein Train mit zwei PathRequests, der erste Angabe der planning handover zwingend
im Ausland PathRequest an DB InfraGO erforderlich
Angabe der planning handover zwingend
Zug beginnt im Ausland, durchfährt Netz der DB Ein Train mit drei PathRequests, der zweite
erforderlich
InfraGO und endet im Ausland PathRequest an DB InfraGO
Zug beginnt im Netz der DB InfraGO, durchfährt DB InfraGO unterstützt das Vorgehen nach
einen oder mehrere Fremdnetze innerhalb ERegG §51
Ein Train mit einem PathRequest an DB InfraGO
Deutschlands und endet im Netz der DB InfraGO
mit gleichbleibender OTN Angabe der planning handover optional
• Kombinationen der oben genannten Ausprägungen – auch in Teilen – möglich
• Ausprägungen bei Anzahl der betroffenen Länder vereinfacht auf direkte Nachbachländer
• Bei gleichbleibender OTN an einem Verkehrstag erlaubt DB InfraGO vorläufig nur einen PathRequest!
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 3

## Seite 4

Anwendung der Fahrplanbearbeitungsgrenze
Lage auf Netzgrenze & auf Dritt-Infrastruktur
planning
Lage auf Netzgrenze
handover für PR
• Der PathRequest an die DB InfraGO erfolgt ab/bis zur DB InfraGO Dritt-EIU
Fahrplanbearbeitungsgrenze/Netzgrenze
ReferenceTrain
PR an InfraGO
PR bzw. TA an Dritt-EIU
planning
Lage auf Dritt-Infrastruktur
handover für PR
• Der PathRequest an die DB InfraGO ab/bis zur Fahrplanbearbeitungsgrenze DB InfraGO Dritt-EIU
auf dem Netz des Dritt-EIU
ReferenceTrain
• Welche Besonderheiten bei der Trassenanmeldung/dem PathRequest an das
PR an InfraGO
Dritt-EIU zu beachten sind, ist mit dem betroffenen EIU abzustimmen
PR bzw. TA an Dritt-EIU
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 4

## Seite 5

Anwendung der Fahrplanbearbeitungsgrenze
Lage auf DB InfraGO Netz
Temporäre Besonderheit für Übergabepunkte im Netz der InfraGO planning
Übergang Verantwortung
handover für PR
Fahrplanung
• Dort, wo der Übergang der Verantwortung für die Fahrplanerstellung DB InfraGO Dritt-EIU
nach Grenzvereinbarung in dem Netz der InfraGO liegt, ist im
ReferenceTrain
PathRequest der Handoverpoint an der Netzgrenze anzugeben. Grund
dafür sind technische Abhängigkeiten zu Betrieb und Abrechnung und PR an InfraGO
PR bzw. TA an Dritt-EIU
fehlende Integration der IT-Systeme beteiligter EIUs auf europäischer
Ebene.
• Die Betriebsstelle, an der die Verantwortung zur Fahrplanerstellung
Sonderfall: RefTrain beginnt/endet am
übergeht (Spalten E-H in Excel), ist in der PathRequest als Laufpunkt mit
anzugeben, um eine internationale Absprache der Grenzzeiten zu Übergabepunkt
ermöglichen. Übergang Verantwortung planning
handover für PR
Fahrplanung
• Die Trassenanmeldung/der PathRequest an das ausländische EIU muss
DB InfraGO Dritt-EIU
bis/ab der Betriebsstelle, an der die Verantwortung zur
Fahrplanerstellung übergeht, erfolgen.
ReferenceTrain
PR an InfraGO
TA bzw. PR an Dritt-EIU
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 5

## Seite 6

Inland-Ausland-Inland
Auszug aus TAF/TAP TSI – Dialog - 07.08.2025
• Wenn kein planning handover vorhanden und die DB InfraGO somit
vollständig fahrplanbildend für den Laufweg ist, stellt das EVU den
PathRequest (PR) für den vollständigen Laufweg an DB InfraGO
• InfraGO kann keine zwei PR unter einer OTN für den gleichen Verkehrstag
verarbeiten
• Der Zug muss im Ausland gebrochen werden und das EVU muss zwei
PathRequest mit zwei unterschiedlichen internationalen OTN stellen
• DB InfraGO geht auf die EVU zu, die in der diesjährigen NEP
Trassenanmeldungen getätigt haben, die diesem Fall entsprechen, um
potenzielle Workarounds zu finden
→ Für Laufwege über deutsche Dritt-EIU gilt: Auch hier kann InfraGO kann keine zwei PR unter einer OTN für den
gleichen Verkehrstag verarbeiten. Über EReG §51 (3) kann der vollständige Laufweg in einem PathRequest ohne
planning handover an die DB InfraGO gestellt werden, auch wenn sie nicht fahrplanbildend ist. DB InfraGO ist
dann dazu verpflichtet, die Trassenanmeldung an das Dritt-EIU weiterzuleiten.
DB InfraGO AG | TAF/TAP TSI | 28.08.2025 6
