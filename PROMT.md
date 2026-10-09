# Aufgabe: Forgewise-Grundgerüst erstellen und ins Repository pushen

Du arbeitest am Repository:

https://github.com/Faillixxx/Forgewise

## Projekt

**Name:** Forgewise

**Claim:** Engineering, forged into understanding.

**Beschreibung:**

Forgewise is an open, multilingual engineering encyclopedia that turns complex technical ideas into clear explanations, practical calculations, and useful design knowledge. Its articles serve curious beginners, students, and practicing engineers.

Die Artikel und redaktionellen Inhalte sollen unter CC BY-SA 4.0 veröffentlicht werden. Behandle die Lizenzierung von Inhalten und die Lizenzierung des Programmcode getrennt. Erfinde keine Code-Lizenz. Wenn dafür noch keine Entscheidung im Repository dokumentiert ist, halte das offen fest.

## Ziel dieser Aufgabe

Erstelle zunächst das **technische und redaktionelle Grundgerüst** von Forgewise. Schreibe noch keine vollständigen technischen Fachartikel.

Das Grundgerüst soll die Basis dafür schaffen, später Artikel in mehreren Sprachen zu veröffentlichen. Ein Artikel soll Einsteiger verständlich abholen, Studierenden nachvollziehbare Formeln bieten und Ingenieuren Herleitungen, Annahmen und Grenzen zugänglich machen.

## Arbeitsregeln

1. Prüfe zuerst den bestehenden Repository-Inhalt, den aktuellen Branch, den Git-Status und vorhandene Projektanweisungen wie `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md` und `README.md`.
2. Folge vorhandenen Konventionen und erhalte bestehende Arbeit.
3. Überschreibe keine vorhandenen Dateien oder Änderungen, ohne vorher ihren Zweck zu verstehen.
4. Wenn das Repository bereits eine Technologie oder Projektstruktur verwendet, bleibe dabei.
5. Wenn das Repository leer ist und keine Stack-Vorgabe enthält, wähle eine schlanke, statisch veröffentlichbare Weblösung mit Markdown-Unterstützung und TypeScript. Begründe die Wahl kurz in der Projektdokumentation.
6. Arbeite in kleinen, nachvollziehbaren Änderungen. Prüfe die Änderungen vor dem Commit.
7. Pushe Änderungen in dieses Repository. Folge vorhandenen Branch- und Beitragsregeln. Wenn keine Regeln vorhanden sind, arbeite auf einem neuen Feature-Branch und pushe diesen.
8. Verwende niemals `git push --force` oder vergleichbare destruktive Git-Befehle.
9. Umgehe keine Branch-Schutzregeln oder Berechtigungen. Wenn ein Push technisch nicht möglich ist, committe die Arbeit lokal und nenne den konkreten Grund.
10. Erfinde keine Inhalte, Quellen, Normen, Kennwerte oder Prüfergebnisse.

## Anweisungen für Coding-Agenten und Claude Code

Richte die Anweisungen für Coding-Agenten so ein, dass künftige Arbeiten im Repository nachvollziehbar, klein und konsistent bleiben. Berücksichtige dabei auch Claude Code.

- Prüfe vorhandene Anweisungsdateien, bevor du neue anlegst. Erhalte bestehende Regeln und ergänze sie nur, wenn es für Forgewise nötig ist.
- Lege eine zentrale `AGENTS.md` an oder ergänze sie, sofern das Repository noch keine geeignete zentrale Anleitung enthält.
- Lege eine `CLAUDE.md` nur dann an oder ergänze sie, wenn sie für Claude Code benötigt wird. Halte sie knapp und verweise auf die zentrale Anleitung, statt Regeln unnötig zu duplizieren.
- Dokumentiere darin nur konkrete, projektspezifische Arbeitsregeln, etwa für Repository-Struktur, redaktionelle Inhalte, Quellen, Lizenzen, Mehrsprachigkeit, Formatierung und Prüfungen.
- Stelle sicher, dass Anweisungen für Agenten und Menschen einander nicht widersprechen.
- Nutze wiederverwendbare Vorlagen dort, wo sie tatsächlich helfen. Die Artikelvorlage und das Formel-Baustein-Schema sind verbindlich Teil dieser Aufgabe. Weitere Vorlagen sollen nur entstehen, wenn sie einen klaren Nutzen für den Forgewise-Workflow haben.
- Übernimm keine fremden Projektinhalte, Formulierungen, Codebeispiele, Marken, Bilder oder projektspezifischen Entscheidungen. Schreibe die Anweisungen und Vorlagen eigenständig für Forgewise.
- Halte Agenten-Anweisungen so knapp, dass sie im Arbeitsalltag verwendbar bleiben. Verweise auf ausführlichere Richtlinien, statt deren Inhalt mehrfach zu kopieren.

## Referenzliteratur

- Fachliteratur zur Gegenprüfung wird nur lokal verwendet und nicht im Repository genannt.
- Baue keine Buchinhalte, Tabellen, Abbildungen oder Formulierungen ein.
- Der initiale Scaffold muss ohne Referenzliteratur vollständig angelegt werden können.

## Umfang des Grundgerüsts

Erstelle eine einfache, nutzbare Projektbasis. Nutze passende bestehende Dateien und ergänze sie, statt unnötig parallele Strukturen anzulegen.

### 1. Projektübersicht

Die Startseite soll mindestens enthalten:

- Forgewise-Namen und Claim
- kurze Projektbeschreibung
- Erklärung, dass Forgewise eine offene, mehrsprachige Ingenieur-Enzyklopädie werden soll
- Einstieg in die Fachgebiete
- sichtbaren Hinweis, dass die Inhalte unter CC BY-SA 4.0 stehen sollen
- einen klar als Platzhalter gekennzeichneten Hinweis, dass Fachartikel nach und nach ergänzt werden

Erstelle keine fingierten Fachartikel, Referenzen oder technischen Behauptungen.

### 2. Mehrsprachigkeit

Lege eine Struktur an, mit der sich Oberflächentexte und Artikel in mehreren Sprachen pflegen lassen.

- Verwende Sprachcodes nach einem etablierten Schema, zum Beispiel `en` und `de`.
- Lege zunächst nur die tatsächlich benötigten Oberflächentexte an.
- Zeige nur Sprachen als verfügbar an, für die Inhalte vorhanden sind.
- Übersetze keine Inhalte automatisch.
- Erfinde keine Übersetzungen für fehlende Fachartikel.
- Dokumentiere, wie später eine weitere Sprache ergänzt wird.
- Trenne übersetzbare Oberflächentexte von Formeldefinitionen und anderen maschinenlesbaren Daten.

### 3. Fachgebiete und Navigation

Lege eine erweiterbare Struktur für Fachgebiete an, zum Beispiel:

- Maschinenelemente
- Technische Mechanik
- Festigkeitslehre
- Thermodynamik
- Elektrotechnik
- Werkstofftechnik
- Fertigungstechnik

Diese Einträge sind Kategorien beziehungsweise Platzhalter, keine Behauptung, dass bereits Artikel dazu vorhanden sind. Kennzeichne leere Kategorien als „Noch keine Artikel“ oder mit einer passenden Formulierung in der jeweiligen Oberflächensprache.

### 4. Artikelvorlage

Erstelle eine wiederverwendbare Artikelvorlage mit genau dieser Reihenfolge:

1. Einfach erklärt (für Laien)
2. Die Formeln (für Einsteiger)
3. Für Ingenieure (ausklappbar)
4. Gestaltungsregeln
5. Übungsaufgabe
6. Glossar
7. Quellen und weiterführende Literatur
8. Bitte fachlich prüfen
9. Maschinenlesbarer JSON-Block mit Formel-Bausteinen

Die Vorlage soll für einzelne Themen kopiert und ausgefüllt werden können. Sie darf keine erfundenen Formeln oder Beispielwerte enthalten. Verwende deutlich erkennbare Platzhalter wie `[Thema ergänzen]` und `[Formel mit Quelle ergänzen]`.

Der Abschnitt „Für Ingenieure“ soll im späteren Artikel als ausklappbarer Abschnitt dargestellt werden können. Dokumentiere das verwendete Markdown- oder HTML-Muster und stelle sicher, dass es semantisch und mit der Tastatur bedienbar ist.

### 5. Redaktionsrichtlinie

Erstelle eine kurze Richtlinie für künftige Autorinnen und Autoren. Sie soll mindestens festlegen:

- Zielgruppen und Verständlichkeitsstufen
- Artikelstruktur
- eigenständige Herleitung und Formulierung
- Quellenprüfung und Quellenangaben
- Umgang mit Normen: Normnummer nennen, keine Normtexte oder umfangreichen Normtabellen wiedergeben
- Umgang mit Werkstoffkennwerten: nur als Richtwerte kennzeichnen und auf Datenblätter verweisen
- Kennzeichnung offener Fragen und fachlicher Unsicherheiten
- CC BY-SA 4.0 für redaktionelle Inhalte
- keine ungeprüften Quellen, erfundenen Kennwerte oder behaupteten Prüfungen

### 6. Formel-Bausteine

Lege ein maschinenlesbares Schema oder eine Beispieldatei für Formel-Bausteine an.

- Verwende gültiges JSON oder ein klar dokumentiertes Schema für JSON.
- Verwende nur Platzhalter, keine vorgetäuschten technischen Daten.
- Dokumentiere, dass alle Formeln später auf Einheitenkonsistenz geprüft werden müssen.
- Dokumentiere, dass Formel-Umstellungen durch Einsetzen in die Grundformel geprüft werden müssen.
- Dokumentiere, dass SI-Einheiten und Anzeigeeinheiten getrennt behandelt werden.
- Halte Formeldefinitionen von Oberflächentexten getrennt, damit sie später von einer GUI verwendet werden können.

Implementiere in dieser Aufgabe noch keinen Formelrechner und keine interaktive Berechnungs-GUI. Lege die Datenstruktur so an, dass eine GUI später ergänzt werden kann.

### 7. Quellen- und Lizenzhinweise

Dokumentiere in README oder einer passenden Projektdatei:

- Redaktionelle Inhalte sind für CC BY-SA 4.0 vorgesehen.
- Inhalte und Softwarecode können unterschiedliche Lizenzen haben.
- Die Lizenz für den Softwarecode bleibt offen, sofern sie im Repository noch nicht festgelegt ist.
- Fremde Texte, Bilder, Tabellen und Diagramme dürfen nur nach Prüfung ihrer Lizenz und korrekter Zuschreibung übernommen werden.

Füge keine fremden Bilder oder geschützten Lehrbuchinhalte ein.

## Nicht Teil dieser Aufgabe

- Keine vollständigen technischen Fachartikel
- Keine konkreten Berechnungen oder Werkstoffauslegungen
- Keine erfundenen Formeln, Kennwerte, Normverweise oder Literaturquellen
- Keine Inhalte aus Referenzliteratur
- Kein Formelrechner
- Keine automatische Übersetzung
- Keine Veröffentlichung oder Bereitstellung außerhalb des angegebenen GitHub-Repositories

## Technische Qualität

- Halte die Implementierung klein und verständlich.
- Nutze vorhandene Werkzeuge und Abhängigkeiten, wenn sie passen.
- Vermeide unnötige Abhängigkeiten und unnötige Infrastruktur.
- Stelle sicher, dass die Seite auf schmalen und breiten Bildschirmen lesbar ist.
- Achte auf Tastaturbedienbarkeit, ausreichenden Farbkontrast, verständliche Linktexte und semantische HTML-Struktur.
- Stelle sicher, dass Platzhalter klar als Platzhalter erkennbar sind.
- Ergänze eine kurze Anleitung zum lokalen Starten und Prüfen des Projekts.
- Dokumentiere wichtige Architekturentscheidungen knapp und nachvollziehbar.

## Prüfung

Führe die im Repository vorgesehenen Format-, Build- und Testbefehle aus. Falls noch keine solchen Befehle existieren, führe mindestens einen Build oder eine gleichwertige Strukturprüfung aus und dokumentiere, was geprüft wurde.

Prüfe außerdem:

- Links zwischen Startseite, Fachgebieten, Richtlinie und Artikelvorlage
- Sprachumschaltung beziehungsweise Sprachkennzeichnung
- mobile Darstellung auf offensichtliche Layoutprobleme
- korrekte Kennzeichnung der Lizenz für redaktionelle Inhalte
- dass keine erfundenen Fachinhalte als Fakten erscheinen
- dass keine Datei oder Änderung aus dem bestehenden Repository verloren ging
- dass die Agenten- und Claude-Code-Anweisungen vorhanden, konsistent und knapp sind
- dass alle JSON-Dateien gültig sind
- dass ausklappbare Abschnitte semantisch und per Tastatur nutzbar sind

## Abschluss

Wenn die Prüfungen erfolgreich sind:

1. Committe die Änderungen mit einer kurzen, sachlichen Commit-Nachricht.
2. Pushe den Branch zum Repository `Faillixxx/Forgewise`.
3. Berichte anschließend:
   - welche Struktur und Dateien angelegt oder geändert wurden,
   - welche Prüfungen ausgeführt wurden und deren Ergebnis,
   - auf welchen Branch und Commit gepusht wurde,
   - welche offenen Entscheidungen bestehen, insbesondere zur Code-Lizenz.

Wenn Build, Tests oder Push scheitern, verschweige das nicht. Nenne den konkreten Fehler und den Stand der Änderungen.