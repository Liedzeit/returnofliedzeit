---
title: "Vibe-Coding"
date: "2025-09-05"
tags: ["levity","code"]
keywords: [""]
---
Leider ist mein Rentner-Dasein hauptsächlich durch Nichtstun geprägt. Aber vor ein paar Tagen kam mir der Gedanke, mal zu schauen, was es eigentlich mit Vibe-Coding auf sich hat. Funktioniert das? Angeblich kann man ja nun zum Beispiel iPhone-Apps bauen, ohne eine Zeile Code schreiben zu müssen. Man sagt der AI, was man haben will, und ein paar Sekunden später hat man das Ergebnis.

Also habe ich mir ein Tutorial angesehen (was natürlich sinnloses Old-School-Vorgehen ist) und dann Cursor installiert. Cursor sieht genauso aus wie Visual Studio Code, hat nur rechts eine kleine Dialogoberfäche, wo man seine Wünsche eingibt. 

Ich wollte klein anfangen und bat Cursor darum, eine Python/Tkinter-Anwendung, die ich vor ein paar Monaten mal gebaut hatte, aufzupeppen. Das ist ein simples Programm, das meine Schallplattendaten aus einer sql-Datenbank holt und darstellt. Nix aufregendes. In der Liste gibt es eine Rating-Spalte und die sollte nun numerisch sortiertbar gemacht werden. Das hätte ich wahrscheinlich selbst auch noch hingekriegt, aber Cursor hat den Job klag- und anstandslos übernommen. Das funktionierte wunderbar. Der nächste Job allerdings nicht. Und zwar verliert die Anwendung immer den Fokus, und man muss immer auf die obere Leiste klicken, bevor dann Buttons und Textfelder den Klick erkennen. Sehr lästig. Cursor versprach zu helfen, hat auch jeden Menge Code produziert. (Man kann den, wenn man will, sich ansehen, oder einfach übernehmen.) Aber geholfen hat es nicht. Schade.

Als nächstes habe ich ein altes iPhone-Projekt ausgegraben. Das enthält meine Comics-Sammlung (bzw. den mir wichtigen Teil davon, also BSV-Sachen). Ich bin nicht sehr originell mit meinen Projekten.

Das hatte ich damals mühsam in Swift zusammengebaut, mich immer an einem Tutorial entlanghangelnd und Stack Overflow fragend. Was fehlte war eine Suchfunktion. Und schwupp, hat mir die Cursor eingebaut und zwar genauso wie ich es wollte. Die Aufforderung lautete genau so: Please add a simple search function. Mit Wiedereinarbeitung hätte ich dafür mindestens eine Woche gebraucht, schätze ich. So, zwanzig Sekunden. (Vielleicht etwas länger, weil ich vorher Cursor noch links zu den Apple Guidelines mitgegeben habe. - Ich bezweifle, dass das nötig gewesen wäre. In den Tutorials schreiben die Leute in ihre Prompts auch immer rein, dass Cursor clean Code erstellen soll. Habe ich nicht gemacht. Für mich ist das Ergebnis clean genug - besser jedenfalls als ich es selbst könnte.) Als nächstes habe ich das Ding editierbar machen lassen, das heißt die Daten werden nun auf das Anwender-Gerät kopiert. Wo liegen eigentlich die Daten? Cursor hat mir eine übersichtliche kleine Doku geschrieben, die nun im Readme liegt.

Sehr schön.

Und schließlich habe ich Cursor auf eleventy losgelassen, also der Software, die diesem Blog zurgrunde liegt. Can you help me with eleventy? fragte ich. Absolutely, war die Antwort, und er/sie/es fügte gleich eine Liste mit Vorschlägen hinzu. (Unter anderem bot er (der Cursor) an, einen Dark-Mode einzubauen. Wollen wir das?)

Vor ein paar Wochen habe ich den Versuch unternommen, die Tags (bzw. Kategorien, die jeder Eintrag hat, picpuzzle, cinema, havelock etc.) auf Klick reagieren zu lassen. Es sollte ein Liste mit den Blog-Einträgen mit dieser Kategorie erzeugt werden. Ich bin soweit gekommen, dass die Tags einen Link enthalten gekommen. Dann hat mich der Mut verlassen. Das hätte mit Wiedereinarbeitung bestimmt zwei Wochen gedauert. So ebenfalls nur ein paar Sekunden. 

Aber dann. Cursor schlug vor, pagination einzubauen, also nur jeweils x Beiträge auf einer Seite zu listen und Vorwärts- und Rückwärtsbuttons. Klar wollte ich das, und es sollte von der Gegenwart in die Vergangenheit gehen. Und das hat nun drei Stunden gedauert bis das funtioniert hat. Immer stimmte irgendwas nicht. Ich kam mir wie ein Idiot vor. Code von Cursor übernehmen, Projekt deployen, testen, Fehlermeldung kopieren, an Cursor weitergeben. Und nächste Runde. Das ist die Zukunft des Programmierens. Ein Elend. Zwischendurch war ich schon fast soweit, selbst nach dem Fehler zu suchen, aber das wollte ich auch nicht. Es gab ein paar Syntax-Probleme, z.B. funtioniert offenbar Chaining nicht in eleventy, aber im Wesentlichen stimmte leider die Logik nicht. Und wenn Cursor mich auffordert, ihn kurz mal lokal einen Server zum Testen aufsetzen zu lassen, ist das schon sehr spooky.

Fazit: Wie alle neuen Tools ist das wunderbar, aber auch erschreckend. Und eigentlich bin ich froh, dass mich kein Arbeitgeber zwingen kann, damit zu „arbeiten“. Wenn ich früher bei Stack Overflow nach Hilfe suchte, kam mir das schon immer unsportlich vor. Aber das heute geht schon in Richtung entfremdete Arbeit.

Aber für mich werde ich es nutzen. Eine App from scratch als Nächstes. Mal sehen, wohin das führt.

