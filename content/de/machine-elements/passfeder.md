# Passfeder

Status: Entwurf, fachliche Prüfung offen (siehe Abschnitt 8).

## 1. Einfach erklärt (für Laien) {#einfach-erklaert}

Eine Passfeder ist ein kleines, längliches Stahlstück, das ein Zahnrad, eine Riemenscheibe oder eine Kupplung auf einer Welle mitdrehen lässt. Sie liegt halb in einer Nut der Welle und halb in einer Nut der Nabe, also des Teils, das auf die Welle gesteckt ist.

Dreht sich die Welle, drückt die Seitenwand ihrer Nut gegen die Passfeder, und die Passfeder drückt ihrerseits gegen die Nut der Nabe. So wird das Drehmoment durch Formschluss übertragen: Welle, Passfeder und Nabe greifen ineinander, ähnlich wie ein Riegel, der zwei Teile gegeneinander sperrt.

Die Passfeder hält die Nabe nicht in Längsrichtung der Welle fest; dafür sind andere Elemente nötig, zum Beispiel ein Wellenabsatz oder ein Sicherungsring.

Bei der Auslegung lautet die wichtigste Frage: Halten die Seitenflächen, die aufeinander drücken, diese Belastung aus? Das beschreibt die Flächenpressung, also die Kraft je Fläche, mit der die Flächen aufeinander drücken.

## 2. Die Formeln (für Einsteiger) {#formeln}

Die Rechnung läuft in vier Schritten: Aus dem Drehmoment folgt die Umfangskraft an der Passfeder, aus den Abmessungen die tragende Fläche, aus beiden die Flächenpressung, und diese wird mit einem zulässigen Wert verglichen.

Die Formeln sind Größengleichungen und gelten in jedem kohärenten Einheitensystem. Beim Einsetzen müssen alle Längen dieselbe Einheit haben: Mit $T$ in N·mm und $d$, $h_\mathrm{tr}$, $l_\mathrm{tr}$ in mm ergibt Gleichung (4) die Pressung direkt in N/mm².

Umfangskraft an der Welle, also die Kraft, mit der die Welle über die Seitenwand ihrer Nut gegen die Passfeder drückt:

$$F_\mathrm{t} = \dfrac{2\,T}{d} \tag{1}$$

- $F_\mathrm{t}$: Umfangskraft in N
- $T$: zu übertragendes Drehmoment in N·m
- $d$: Wellendurchmesser in m

Tragende Länge einer rundstirnigen Passfeder (Form A). Die runden Enden tragen nicht mit, deshalb zählt nur der gerade Teil:

$$l_\mathrm{tr} = l - b \tag{2}$$

- $l_\mathrm{tr}$: tragende Länge in mm
- $l$: Gesamtlänge der Passfeder in mm
- $b$: Breite der Passfeder in mm

Tragende Höhe auf der Nabenseite, also der Teil der Passfeder, der aus der Wellennut in die Nabennut ragt (vereinfacht, ohne Fasen und Rundungen):

$$h_\mathrm{tr} = h - t_1 \tag{3}$$

- $h_\mathrm{tr}$: tragende Höhe in der Nabe in mm
- $h$: Höhe der Passfeder in mm
- $t_1$: Wellennuttiefe in mm

Mittlere Flächenpressung an der Nabennut, also die Kraft geteilt durch die tragende Fläche $h_\mathrm{tr}\,l_\mathrm{tr}$:

$$p = \dfrac{F_\mathrm{t}}{h_\mathrm{tr}\,l_\mathrm{tr}} = \dfrac{2\,T}{d\,h_\mathrm{tr}\,l_\mathrm{tr}} \tag{4}$$

- $p$: mittlere Flächenpressung in N/mm²

Vereinfachte Bedingung gegen Fließen, also gegen bleibende Verformung der Tragfläche:

$$p \le p_\mathrm{zul} = \dfrac{R_\mathrm{eH}}{S_\mathrm{F}} \tag{5}$$

- $p_\mathrm{zul}$: zulässige Flächenpressung in N/mm²
- $R_\mathrm{eH}$: Mindeststreckgrenze des schwächeren Werkstoffs (meist Nabe) in N/mm²
- $S_\mathrm{F}$: geforderte Sicherheit gegen Fließen, ohne Einheit

Gültigkeit: Gleichungen (1) bis (5) gelten für eine einzelne Passfeder unter ruhendem Drehmoment und setzen eine gleichmäßig verteilte Pressung voraus. Sie sind eine Überschlagsrechnung, kein Normnachweis.

## 3. Für Ingenieure (ausklappbar) {#fuer-ingenieure}

<details>
<summary>Herleitung, Annahmen und Grenzen anzeigen</summary>

### Herleitung

Das Drehmoment wird als Kräftepaar über die Seitenflächen der Passfeder übertragen. Wird angenommen, dass die resultierende Kraft am Wellenradius $d/2$ angreift, folgt aus dem Momentengleichgewicht $T = F_\mathrm{t} \cdot d/2$ und damit Gleichung (1).

Bei Form A sind beide Stirnseiten halbkreisförmig mit dem Radius $b/2$. Nur der gerade, prismatische Teil hat ebene Seitenflächen; seine Länge ist $l - 2 \cdot b/2 = l - b$, also Gleichung (2).

Die Passfeder ragt um $h - t_1$ aus der Wellennut heraus. Nur dieser Teil kann gegen die Nabennut drücken, daraus folgt Gleichung (3). Fasen an Passfeder und Nut verkleinern die tatsächlich tragende Höhe; Gleichung (3) überschätzt sie daher.

Verteilt sich $F_\mathrm{t}$ gleichmäßig auf die Fläche $h_\mathrm{tr} \cdot l_\mathrm{tr}$, ergibt sich Gleichung (4). Setzt man (1) ein, erhält man die rechte Form von (4).

Umgestellt nach dem übertragbaren Drehmoment und nach der mindestens nötigen Länge:

$$T = \dfrac{p\,d\,h_\mathrm{tr}\,l_\mathrm{tr}}{2} \tag{6}$$

$$l = \dfrac{2\,T}{d\,h_\mathrm{tr}\,p_\mathrm{zul}} + b \tag{7}$$

Probe durch Einsetzen: (6) in (4) ergibt $p = 2\,(p\,d\,h_\mathrm{tr}\,l_\mathrm{tr}/2)/(d\,h_\mathrm{tr}\,l_\mathrm{tr}) = p$. Mit $l_\mathrm{tr} = l - b$ aus (2) ergibt (7) in (4) eingesetzt genau $p = p_\mathrm{zul}$.

### Annahmen

- Eine Passfeder, ruhendes Drehmoment, keine Stöße.
- Gleichmäßige Pressung über die tragende Fläche.
- Kraftangriff am Wellenradius $d/2$.
- Fasen und Rundungen werden vernachlässigt.
- Reibung aus einer Presspassung zwischen Welle und Nabe wird nicht angerechnet.

### Grenzen

- Schwellende oder wechselnde Drehmomente und Stöße erfordern den ausführlichen Nachweis nach DIN 6892:2025-10.
- Lange Passfedern tragen wegen der Verdrillung von Welle und Nabe ungleichmäßig; die Annahme gleichmäßiger Pressung wird dann unsicher.
- Die Pressung an der Wellennut und in der Passfeder selbst ist gesondert zu prüfen, ebenso die Scherung der Passfeder.
- Die Nut schwächt die Welle als Kerbe. Der Festigkeitsnachweis der Welle ist nicht Teil dieses Artikels.

</details>

## 4. Gestaltungsregeln {#gestaltungsregeln}

- Breite und Höhe der Passfeder richten sich nach dem Wellendurchmesser und werden aus DIN 6885-1:2021-11 gewählt. Beispiel: Für Wellen über 38 mm bis 44 mm ist der Querschnitt 12 mm × 8 mm vorgesehen [Q3], [Q4].
- Die Länge wird aus der genormten Längenstufung gewählt; für den Querschnitt 12 mm × 8 mm reicht der Bereich von 28 mm bis 140 mm [Q4].
- Die Nutbreite in der Welle erhält für festen Sitz die Toleranzklasse P9 und für leichten Sitz N9; in der Nabe P9 bzw. JS9. Für eine längsverschiebbare Nabe (Gleitfeder) gelten H9 in der Welle und D10 in der Nabe [Q4].
- Bei Form A trägt nur der gerade Teil der Passfeder; die Länge wird deshalb mit Gleichung (2) bewertet.
- Wenn die Nabe aus dem schwächeren Werkstoff besteht, ist die Nabenseite maßgebend; bei gleichen Werkstoffen ist es wegen $h - t_1 < t_1$ ebenfalls meist die Nabe.

## 5. Übungsaufgabe {#uebungsaufgabe}

Gegeben (Annahmen des Beispiels, außer den mit Quelle gekennzeichneten Werten):

| Größe | Wert | Herkunft |
| --- | --- | --- |
| Drehmoment $T$ (ruhend) | 300 N·m | Annahme |
| Wellendurchmesser $d$ | 40 mm | Annahme |
| Passfeder Form A, $b \times h$ | 12 mm × 8 mm | DIN 6885-1 [Q3], [Q4] |
| Wellennuttiefe $t_1$ | 5 mm | DIN 6885-1 [Q4] |
| Passfederlänge $l$ | 50 mm | Annahme, aus Längenstufung [Q4] |
| Nabenwerkstoff | S355J2, Erzeugnisdicke über 16 mm bis 40 mm | Annahme |
| Mindeststreckgrenze $R_\mathrm{eH}$ | 345 N/mm² | EN 10025-2 [Q5], [Q6] |
| geforderte Sicherheit $S_\mathrm{F}$ | 1,5 | Annahme |

Gesucht: Flächenpressung $p$ an der Nabennut, Nachweis nach Gleichung (5) und die mindestens nötige Passfederlänge.

Lösung:

Umfangskraft nach (1):

$$
\begin{aligned} F_\mathrm{t} &= 2 \cdot 300\,000\ \mathrm{N{\cdot}mm} / 40\ \mathrm{mm} \\ &= 15\,000\ \mathrm{N} \end{aligned}
$$

Tragende Länge nach (2):

$$l_\mathrm{tr} = 50\ \mathrm{mm} - 12\ \mathrm{mm} = 38\ \mathrm{mm}$$

Tragende Höhe nach (3):

$$h_\mathrm{tr} = 8\ \mathrm{mm} - 5\ \mathrm{mm} = 3\ \mathrm{mm}$$

Flächenpressung nach (4):

$$
\begin{aligned} p &= 15\,000\ \mathrm{N} / (3\ \mathrm{mm} \cdot 38\ \mathrm{mm}) \\ &= 131{,}6\ \mathrm{N/mm^2} \end{aligned}
$$

Zulässige Pressung nach (5):

$$p_\mathrm{zul} = 345\ \mathrm{N/mm^2} / 1{,}5 = 230\ \mathrm{N/mm^2}$$

Ausnutzungsgrad:

$$p / p_\mathrm{zul} = 131{,}6 / 230 = 0{,}57$$

Mindestlänge nach (7):

$$
\begin{aligned} l &= \frac{2 \cdot 300\,000\ \mathrm{N{\cdot}mm}}{40\ \mathrm{mm} \cdot 3\ \mathrm{mm} \cdot 230\ \mathrm{N/mm^2}} \\ &\quad + 12\ \mathrm{mm} \\ &= 21{,}7\ \mathrm{mm} + 12\ \mathrm{mm} = 33{,}7\ \mathrm{mm} \end{aligned}
$$

Ergebnis: Die Flächenpressung beträgt rund 132 N/mm² bei zulässigen 230 N/mm²; der Ausnutzungsgrad ist 0,57 (57 %). Nachweis erfüllt (vereinfachte Abschätzung). Die nächste Länge der Stufung über 33,7 mm wäre 36 mm; die gewählten 50 mm bieten Reserve.

Die Zahlen wurden per Skript nachgerechnet.

## 6. Glossar {#glossar}

- Passfeder: prismatisches Mitnehmerelement zwischen Welle und Nabe, das ohne Anzug (ohne Keilwirkung) eingelegt wird.
- Welle-Nabe-Verbindung: Verbindung, die Drehmoment von einer Welle auf ein aufgesetztes Bauteil überträgt.
- Formschluss: Kraftübertragung durch ineinandergreifende Formen statt durch Reibung.
- Nabe: der auf der Welle sitzende Teil eines Bauteils, zum Beispiel eines Zahnrads.
- Flächenpressung: Druck zwischen zwei sich berührenden Flächen, Kraft je Fläche.
- Tragende Länge, tragende Höhe: Abmessungen der Seitenfläche, die tatsächlich Kraft überträgt.
- Wellennuttiefe $t_1$: Tiefe der Nut in der Welle.
- Form A: Passfeder mit beidseitig runden Stirnseiten.

## 7. Quellen und weiterführende Literatur {#quellen}

- [Q1] DIN 6885-1:2021-11 Mitnehmerverbindungen ohne Anzug, Passfedern, Nuten – Hohe Form – Teil 1: Maße, Toleranzen, Masse. Status laut DIN: gültig. Normtext nicht eingesehen; Werte stammen aus [Q3] und [Q4].
- [Q2] DIN 6892:2025-10 Mitnehmerverbindungen ohne Anzug – Passfedern – Berechnung und Gestaltung. Ersetzt DIN 6892:2012-08. Normtext nicht eingesehen; hier zitiert für den ausführlichen Nachweis.
- [Q3] GANTER: Datenblatt DIN 6885 Passfedern, Stand 2/2024: Breite, Höhe, Länge und Wellendurchmesserbereich. [PDF](https://reiman.pt/pub/media/technical_data/GANTER/datasheets/DIN%206885.pdf)
- [Q4] TU Dortmund, Fakultät Maschinenbau: Beispielklausur WS 2009/10, Anhang „Abmessungen der Passfedern nach DIN 6885 T1 (Auszug)“, mit Längenstufung und Toleranzen. Auszug einer älteren Normausgabe. [PDF](https://lkp.mb.tu-dortmund.de/storages/me-mb/r/dokumente/Klausuren/Beispielklausuren/Klausur_bspl_TZ_WS0910.pdf)
- [Q5] DIN EN 10025-2:2019-10 Warmgewalzte Erzeugnisse aus Baustählen – Teil 2: Technische Lieferbedingungen für unlegierte Baustähle.
- [Q6] British Steel: Leistungserklärung (Declaration of Performance) Section S355J2 / 1.0577 nach EN 10025-2, Tabelle Mindeststreckgrenze nach Nenndicke. [PDF](https://www.britishsteel.co.uk/wp-content/uploads/2026/01/S355J2.pdf)

## 8. Bitte fachlich prüfen {#fachlich-pruefen}

- Offene Fragen: Wellennuttiefe $t_1$ = 5 mm stammt aus einem Auszug einer älteren Ausgabe von DIN 6885-1; gegen DIN 6885-1:2021-11 prüfen.
- Offene Fragen: Tragende Höhe – der vereinfachte Ansatz $h_\mathrm{tr} = h - t_1$ ist gegen den Ansatz in DIN 6892:2025-10 zu prüfen.
- Offene Fragen: Begrenzung der rechnerisch tragenden Länge bei langen Passfedern gegen DIN 6892:2025-10 prüfen.
- Offene Fragen: Normverweis für die Kerbwirkung der Passfedernut am Wellenfestigkeitsnachweis ergänzen.
- Zu prüfende Annahmen: Sicherheit $S_\mathrm{F} = 1{,}5$ ist eine Annahme des Beispiels, kein Normwert.
- Zu prüfende Annahmen: Der Kennwert für S355J2 gilt laut [Q6] für Profile; für Rundstahl oder Schmiedeteile als Nabe ist das Datenblatt des konkreten Erzeugnisses maßgebend.
- Fachprüfung: offen.

## 9. Maschinenlesbarer JSON-Block mit Formel-Bausteinen {#json}

```json
{
  "id": "passfeder-flaechenpressung",
  "topic": "Passfeder",
  "status": "draft",
  "baseFormula": "p = \\frac{2T}{d\\,h_\\mathrm{tr}\\,l_\\mathrm{tr}}",
  "variables": [
    { "symbol": "p", "name": "mittlere Flächenpressung an der Nabennut", "siUnit": "Pa", "displayUnits": ["N/mm²", "MPa"], "source": "hergeleitet, Gleichung (4)" },
    { "symbol": "T", "name": "Drehmoment", "siUnit": "N·m", "displayUnits": ["N·m", "N·mm"], "source": "Eingangsgröße" },
    { "symbol": "d", "name": "Wellendurchmesser", "siUnit": "m", "displayUnits": ["mm"], "source": "Eingangsgröße" },
    { "symbol": "h_tr", "name": "tragende Höhe in der Nabe, h - t1", "siUnit": "m", "displayUnits": ["mm"], "source": "hergeleitet, Gleichung (3); h und t1 nach DIN 6885-1" },
    { "symbol": "l_tr", "name": "tragende Länge, l - b (Form A)", "siUnit": "m", "displayUnits": ["mm"], "source": "hergeleitet, Gleichung (2); l und b nach DIN 6885-1" }
  ],
  "rearrangements": [
    { "solveFor": "T", "formula": "T = \\frac{p\\,d\\,h_\\mathrm{tr}\\,l_\\mathrm{tr}}{2}", "check": "In die Grundformel eingesetzt ergibt sich p = p." },
    { "solveFor": "l", "formula": "l = \\frac{2T}{d\\,h_\\mathrm{tr}\\,p_\\mathrm{zul}} + b", "check": "Mit l_tr = l - b in die Grundformel eingesetzt ergibt sich p = p_zul." }
  ],
  "assumptions": [
    "eine Passfeder, ruhendes Drehmoment",
    "gleichmäßige Pressung über die tragende Fläche",
    "Kraftangriff am Wellenradius d/2",
    "Fasen und Rundungen vernachlässigt"
  ],
  "limits": [
    "Überschlagsrechnung, kein Nachweis nach DIN 6892:2025-10",
    "nicht für schwellende oder wechselnde Drehmomente und Stöße"
  ],
  "sources": [
    "DIN 6885-1:2021-11",
    "DIN 6892:2025-10",
    "GANTER Datenblatt DIN 6885, Stand 2/2024",
    "TU Dortmund, Beispielklausur WS 2009/10, Auszug DIN 6885 T1"
  ]
}
```
