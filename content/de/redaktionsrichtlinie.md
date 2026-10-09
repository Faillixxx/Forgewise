# Redaktionsrichtlinie

Forgewise ist eine offene, mehrsprachige Enzyklopädie für die Ingenieurwissenschaften. Diese Richtlinie regelt, wie Artikel aufgebaut, geschrieben, belegt und verlinkt werden. Sie gilt für alle Artikel unter `content/<Sprache>/`.

## Zielgruppen

- Laien: anschauliche Erklärung ohne versteckte Voraussetzungen.
- Studierende: nachvollziehbare Formeln, Formelzeichen, Einheiten und Annahmen.
- Ingenieurinnen und Ingenieure: Herleitungen, Grenzen, Gestaltungsregeln und offene Unsicherheiten.

## Artikelstruktur

- Jeder Artikel behandelt ein abgegrenztes Thema, zum Beispiel ein Maschinenelement, einen Werkstoff, ein Berechnungsverfahren oder eine Fertigungsart.
- Verwende `content/templates/article-template.md` ohne die Abschnitte umzusortieren. Die feste Gliederung hilft Lesern, sich in jedem Artikel zurechtzufinden.
- „Einfach erklärt“ beginnt mit einem Überblick: Was ist es, wofür wird es eingesetzt? Zwei bis vier Sätze.
- „Die Formeln“ enthält Wirkprinzip, Begriffe und die Grundformeln; „Für Ingenieure“ enthält Herleitungen, Nachweise, Auslegungsschritte und Gültigkeitsgrenzen.
- „Gestaltungsregeln“ nennt die einschlägigen Normen und Regelwerke sowie belegte Kennwerte.
- „Übungsaufgabe“ enthält mindestens ein vollständig durchgerechnetes Beispiel (siehe Berechnungsbeispiele).
- „Quellen und weiterführende Literatur“ enthält auch Verweise auf verwandte Artikel.
- Passt ein Abschnitt nicht zum Thema, bleibt die Überschrift stehen und erhält den Vermerk „Entfällt für dieses Thema“ mit kurzer Begründung. Die Abschnitte 7 bis 9 entfallen nie.
- Ein Artikel erklärt seine Begriffe beim ersten Auftreten oder verweist auf den Artikel, der sie erklärt.

## Größen, Einheiten und Zahlen

- Es gelten SI-Einheiten. In der Praxis übliche abgeleitete Einheiten (N/mm², kW, min⁻¹, bar) sind erlaubt; bar nur mit Hinweis auf Über- oder Absolutdruck.
- Formelzeichen folgen DIN EN ISO 80000; DIN 1304 gilt nur ergänzend, wo DIN EN ISO 80000 nichts festlegt. Wo ein Fachgebiet eigene etablierte Zeichen hat (z. B. Festigkeitslehre, Zahnradtechnik), werden diese verwendet und im Artikel einmal erklärt.
- Zwischen Zahl und Einheit steht ein geschütztes Leerzeichen: `12 mm`, `210 GPa`. Ausnahme: Grad bei Winkeln (`45°`).
- Dezimaltrennzeichen ist in deutschen Texten das Komma. Tausender werden mit schmalem Leerzeichen gegliedert (`10 000 N`), nie mit Punkt.
- Ergebnisse werden sinnvoll gerundet. Mehr Stellen, als die Eingangsdaten hergeben, sind nicht zulässig.
- Formelzeichen sind kursiv; Einheiten, Indizes aus Wörtern (`F_\mathrm{zul}`) und mathematische Konstanten wie `\mathrm{e}` sind aufrecht.

## Formeln

- Formeln werden in LaTeX-Notation gesetzt (`$...$` im Fließtext, `$$...$$` abgesetzt).
- Bevorzugt werden Größengleichungen, die in jedem kohärenten Einheitensystem gelten. Zahlenwertgleichungen (z. B. `P` in kW, `n` in min⁻¹) sind nur zulässig, wenn sie in der Praxis üblich sind, und werden ausdrücklich als solche gekennzeichnet, mit allen Einheiten.
- Unter jeder abgesetzten Formel steht eine Legende: jedes Formelzeichen mit Bedeutung und Einheit.
- Wichtige Formeln erhalten eine Gleichungsnummer, damit Beispiele und andere Artikel darauf verweisen können.
- Gültigkeitsgrenzen stehen direkt bei der Formel (z. B. „gilt nur im elastischen Bereich“).
- Jede Formel des Artikels erscheint auch im maschinenlesbaren JSON-Block; dort gelten die Regeln aus `docs/formula-blocks.md` (Einheitenprüfung, Umstellungen durch Einsetzen prüfen, SI- und Anzeigeeinheiten getrennt).

## Normen und Regelwerke

- Nenne Normen nur nach Prüfung und immer mit vollständiger Bezeichnung und Ausgabestand, z. B. `DIN EN 10025-2:2019-10`.
- Zurückgezogene oder ersetzte Normen werden als solche gekennzeichnet und mit ihrer Nachfolgenorm genannt. Ältere Bezeichnungen (z. B. alte Werkstoffkurznamen) dürfen in Klammern zur Orientierung stehen.
- Normtexte, Normtabellen und Normbilder werden nicht abgeschrieben oder nachgezeichnet; sie sind urheberrechtlich geschützt. Erkläre Inhalte in eigenen Worten und verweise für verbindliche Werte auf die Norm.
- Einzelne Kennwerte dürfen genannt werden, wenn die Quelle angegeben ist.

## Kennwerte, Tabellen und Quellen

- Jeder Zahlenwert, der nicht im Artikel selbst hergeleitet wird, braucht eine Quelle: Norm, Herstellerdatenblatt, Fachbuch oder Fachartikel mit Seiten- oder Tabellenangabe.
- Verwende keine ungeprüften Quellen, erfundenen Kennwerte oder behaupteten Prüfungen.
- Zu jedem Werkstoff- oder Bauteilkennwert gehören seine Randbedingungen: Temperatur, Erzeugnisdicke, Wärmebehandlungszustand, Prüfrichtung, Lastfall.
- Gib an, ob ein Wert ein Mindestwert, ein charakteristischer Wert oder ein typischer Wert ist. Typische Werte und Richtwerte werden nie als Auslegungswerte dargestellt; für Auslegungsentscheidungen wird auf aktuelle Datenblätter oder die Norm verwiesen.
- Tabellen werden aus eigenen Daten oder belegten Einzelwerten neu zusammengestellt. Ganze Tabellen aus Fachbüchern oder Normen werden nicht übernommen.
- Wo Fachquellen voneinander abweichen, werden die Werte nebeneinander genannt, statt stillschweigend einen zu wählen.
- Kennzeichne offene Fragen und fachliche Unsicherheiten direkt im Artikel und im Abschnitt „Bitte fachlich prüfen“.

## Berechnungsbeispiele

- Jedes Beispiel folgt dem Schema Gegeben → Gesucht → Lösung → Ergebnis.
- Eingangswerte sind als Annahmen des Beispiels gekennzeichnet; Werkstoff- und Bauteilkennwerte darin brauchen eine Quelle.
- Alle Zwischenergebnisse stehen mit Einheit da, damit Leser jeden Schritt nachrechnen können.
- Verwendete Formeln werden mit ihrer Gleichungsnummer referenziert.
- Nachweise enden mit einer klaren Aussage, z. B. Ausnutzungsgrad oder Sicherheit gegenüber dem zulässigen Wert, und „Nachweis erfüllt“ oder „Nachweis nicht erfüllt“.
- Die Zahlen werden vor dem Veröffentlichen nachgerechnet, am besten per Skript.

## Sicherheit und Verantwortung

- Forgewise ist ein Nachschlagewerk und ersetzt weder die geltenden Normen noch die Prüfung durch eine fachkundige Person.
- Artikel zu sicherheitsrelevanten Themen (z. B. Druckbehälter, Hebezeuge, Tragwerke, Schweißverbindungen unter Last) tragen einen kurzen Hinweis darauf und nennen die maßgeblichen Regelwerke.
- Vereinfachte Verfahren werden als solche benannt, mit Hinweis, wann das ausführliche Verfahren nötig ist.

## Bilder und Zeichnungen

- Grafiken werden selbst erstellt und als SVG angelegt. Scans oder Nachzeichnungen aus Büchern und Normen sind nicht zulässig.
- Technische Zeichnungen folgen den Grundregeln der technischen Zeichnung (DIN EN ISO 128 für Linienarten und Schnittdarstellung, DIN EN ISO 129-1 für Bemaßung; die zurückgezogene DIN 406 wird nicht mehr verwendet), soweit das für eine Prinzipskizze sinnvoll ist.
- Diagramme haben beschriftete Achsen mit Formelzeichen und Einheit, z. B. `σ in N/mm²`.
- Jede Abbildung hat eine Bildunterschrift und einen Alternativtext.

## Eigenständigkeit

- Schreibe eigenständige Erklärungen und Herleitungen für Forgewise.
- Forgewise orientiert sich an bewährten Nachschlagewerken, übernimmt aber weder deren Texte noch Tabellen, Bilder, detaillierte Gliederung oder Berechnungsbeispiele.
- Wer ein Fachbuch als Quelle nutzt, zitiert es für einzelne Aussagen oder Werte und formuliert alles Übrige selbst.
- Fremde Texte, Bilder, Tabellen und Diagramme werden nur nach Lizenzprüfung und mit korrekter Zuschreibung übernommen.
- Roloff/Matek wurde für dieses Grundgerüst nicht verwendet. Eine spätere fachliche Gegenprüfung mit bereitgestelltem Material kann dokumentiert werden, wenn sie tatsächlich erfolgt.

## Sprache und Stil

- Sachlich, knapp, im Präsens. Leser werden nicht direkt angesprochen, außer in Anleitungen.
- Fachbegriffe werden einheitlich verwendet und im Glossar-Abschnitt des Artikels erklärt.
- Aufzählungen von Werkstoffen, Herstellern oder Verfahren werden alphabetisch geordnet, außer die Reihenfolge hat eine fachliche Bedeutung (z. B. Fertigungsablauf, steigende Festigkeit).
- Keine Herstellerwerbung. Handelsnamen nur, wenn sie für das Verständnis nötig sind.

## Links und Querverweise

- Interne Links sind relativ und zeigen auf die erzeugte Seite, damit sie auch beim lokalen Öffnen von `dist/` funktionieren.
- Links werden als `[Text](seite.html)` geschrieben, Verweise auf Abschnitte mit Anker: `[Flächenpressung](seite.html#flaechenpressung)`.
- Überschriften erhalten automatisch einen Anker aus ihrem Text. Für Abschnitte, auf die oft verwiesen wird, wird ein fester Anker gesetzt: `## Flächenpressung {#flaechenpressung}`. Bestehende Anker bleiben beim Umbauen erhalten, damit Links eine Umformulierung der Überschrift überstehen.
- Öffentliche Seiten verlinken nie auf interne Notizen.
- Vor dem Einreichen läuft `npm run check`; es prüft unter anderem alle internen Links und Anker der erzeugten Seiten sowie die LaTeX-Syntax.

## Interne Dokumente

- Interne Notizen und Arbeitsstände liegen unter `docs/internal/`. Diese Seiten werden nicht veröffentlicht, nicht in die Navigation aufgenommen und nicht aus öffentlichen Artikeln verlinkt.

## Übersetzungen

- Die deutschen Artikel sind die maßgebliche Fassung. Inhaltliche Änderungen erfolgen zuerst im deutschen Original; Übersetzungen werden danach nachgezogen, nie umgekehrt.
- Übersetzungen werden von Menschen aus dem deutschen Original erstellt; keine automatische Übersetzung.
- Eine Sprache wird erst angezeigt, wenn gepflegte Inhalte in ihr vorhanden sind. Fehlende Übersetzungen werden nicht erfunden.
- Fachbegriffe mit fester Übersetzung (z. B. Passfeder → parallel key) werden vor einer Übersetzung in `content/i18n/glossary.<Sprache>.json` gepflegt.

## Lizenzierung

Redaktionelle Inhalte sind für CC BY-SA 4.0 vorgesehen. Softwarecode kann eine andere Lizenz haben; eine Code-Lizenz ist in diesem Repository noch nicht entschieden.
