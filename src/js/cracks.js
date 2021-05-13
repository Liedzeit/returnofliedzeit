const cracks = [
    {
      "cracking": "Hann tekr sverthit Gram ok leggr i methal theira bert. ",
      "cracker": "Unknown",
      "language": "other"
    },
    {
      "cracking": "There is a moon in the sky, it is called the moon.",
      "cracker": "B52s",
      "language": "English"
    },
    {
      "cracking": "Reading maketh a full man; conference a ready man; and writing an exact man.",
      "cracker": "Frances Bacon",
      "language": "English"
    },
    {
      "cracking": "Selbst im Gähnen der Frommen ist unverkennbar die Andacht.",
      "cracker": "Jens Baggesen",
      "language": "German"
    },
    {
      "cracking": "Bela Lugosi\u2019s dead.",
      "cracker": "Bauhaus",
      "language": "English"
    },
    {
      "cracking": "One must think with the learned and speak with the vulgar.",
      "cracker": "George Berkeley",
      "language": "English"
    },
    {
      "cracking": "Eine große Wahrheit ist eine Wahrheit, dessen Gegenteil auch eine große Wahrheit ist.",
      "cracker": "Niels Bohr",
      "language": "German"
    },
    {
      "cracking": "Die Satire ist nicht weniger konventionell als ein Gespräch unter Brautleuten...Ihre Methode besteht darin, Sophismen einzuschmuggeln; ihr einziges Gesetz ist die simultane Erfindung zusammengewürfelter Argumente.",
      "cracker": "Jorge Luis Borges",
      "language": "German"
    },
    {
      "cracking": "There but for the grace of God go I.",
      "cracker": "John Bradford",
      "language": "English"
    },
    {
      "cracking": "The day broke grey and dull.",
      "cracker": "W. Somerset Maugham",
      "language": "English"
    },
    {
      "cracking": "Die Wörter »Onkel Toms Hütte« teilen uns möglicherweise nicht alle Einzelheiten der Geschichte mit.",
      "cracker": "J.L. Borges; Bioy Casares",
      "language": "German"
    },
    {
      "cracking": "It is a riddle wrapped in a mystery inside an enigma.",
      "cracker": "Winston S. Churchill",
      "language": "English"
    },
    {
      "cracking": "It would be hard to say whether music caused the death of human speech or whether it came to fill an already widening void.",
      "cracker": "Quentin Crisp",
      "language": "English"
    },
    {
      "cracking": "Und dann geh ich nochmal mit ihr um die Krumme Lanke herum.",
      "cracker": "Insterburg & Co.",
      "language": "German"
    },
    {
      "cracking": "Old Plato saw both Mind and Matter; Thomas Hobbes, naught but the latter. Now poor Tom\u2019s Soul doth fry in Hell:\u201A Shrugs GOD,\u2019Tis immaterial.",
      "cracker": "Ebenezer Cooke",
      "language": "English"
    },
    {
      "cracking": "I\u2019m alooking I\u2019m acooking, I me find me somebody. Shoot him down, he ain\u2019t no good.",
      "cracker": "Kevin Coyne",
      "language": "English"
    },
    {
      "cracking": "I talk to myself in private to prepare me for the pain.",
      "cracker": "Godley & Creme",
      "language": "English"
    },
    {
      "cracking": "Der einzige Unterschied zwischen mir und einem Verrückten ist der, daß ich nicht verrückt bin. ",
      "cracker": "Salvador Dali",
      "language": "German"
    },
    {
      "cracking": "Ich will mir nicht den Anschein geben, als sei ich für die Schwierigkeiten meiner Lage unempfänglich.",
      "cracker": "Benjamin Disraeli",
      "language": "German"
    },
    {
      "cracking": "\u2019t is all in pieces, all coherence gone. ",
      "cracker": "John Donne",
      "language": "English"
    },
    {
      "cracking": "Buhuhu, warum habe ich mich vom Glanz des Reichtums blenden lassen?",
      "cracker": "Donald Duck",
      "language": "German"
    },
    {
      "cracking": "George is innocent.",
      "cracker": "Patrick Fitzgerald",
      "language": "English"
    },
    {
      "cracking": "Woke up this morning, desparation a.m., the things I\u2019ve been doing, I won\u2019t do them again.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "And I feel like a beetle on its back and there is no way for me to get up.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "Love will get you like a case of anthrax and that\u2019s one thing I don\u2019t want to catch.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "Life is not always as simple as mathematics, Abraham!",
      "cracker": "Mrs. Abraham Fraenkel",
      "language": "English"
    },
    {
      "cracking": "Don\u2019t panic.",
      "cracker": "Douglas Adams",
      "language": "English"
    },
    {
      "cracking": "Neid: \u201EDir, o Verleumdung, ist keiner zu schlecht, Ich folge dem Edlen.\u201C Verleumdung: \u201EAber du stirbst mit ihm! Wen ich verleumd, überleb ich!\u201D ",
      "cracker": "Gerhard Anton von Halem",
      "language": "German"
    },
    {
      "cracking": "A lot of weather we have been having lately. ",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "This is no time for levity.",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "You vampire, you wrecker of man\u2019s happiness.",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "Compassion is a virtue but I don\u2019t have the time.",
      "cracker": "Talking Heads",
      "language": "English"
    },
    {
      "cracking": "I changed my mind to I think it\u2019s a miss now.",
      "cracker": "Ron Mael",
      "language": "English"
    },
    {
      "cracking": "There is only one thing money can\u2019t buy \u2013 poverty.",
      "cracker": "Groucho Marx",
      "language": "English"
    },
    {
      "cracking": "The philosopher is the one who will contribute a paper on the hangman paradox to a symposium on capital punishment.",
      "cracker": "James D. McCawley",
      "language": "English"
    },
    {
      "cracking": "Keine Angst vor unnötigen Pleonasmen.",
      "cracker": "Rabad Rabadabi",
      "language": "German"
    },
    {
      "cracking": "Wenn ich nicht weiter sah, dann weil so viele Riesen auf meinen Schultern standen.",
      "cracker": "Rabad Rabadabi",
      "language": "German"
    },
    {
      "cracking": "The referee has checked with the lines man.",
      "cracker": "Richard Nankivell",
      "language": "English"
    },
    {
      "cracking": "Was hat die Nachwelt je für mich getan?",
      "cracker": "Johann N. Nestroy",
      "language": "German"
    },
    {
      "cracking": "Das Schicksal nimmt manchmal, um nicht zu schrecken, die launige Miene des Zufalls an.",
      "cracker": "Johann N. Nestroy",
      "language": "German"
    },
    {
      "cracking": "Ich glaube von jedem Menschen das Schlechteste, selbst von mir, und ich habe mich noch selten getäuscht.",
      "cracker": "Johann N. Nestroy",
      "language": "German"
    },
    {
      "cracking": "And so to bed.",
      "cracker": "Samuel Pepys",
      "language": "English"
    },
    {
      "cracking": "Always look on the bright side of life.",
      "cracker": "Monty Python",
      "language": "English"
    },
    {
      "cracking": "Indocti discant, et ament meminisse periti.",
      "cracker": "Alexander Pope",
      "language": "other"
    },
    {
      "cracking": "I yam what I yam and that is all I yam.",
      "cracker": "Popeye",
      "language": "other"
    },
    {
      "cracking": "Klar nennt Ideen, die dasselbe Maß an Verwirrung haben wie der eigene Geist.",
      "cracker": "Proust",
      "language": "German"
    },
    {
      "cracking": "...die spielen für mich \u201EJesus meine Zuversicht\u201D, doch mit sehr viel Optimismus erfüllt mich das nicht.",
      "cracker": "Ulrich Roski",
      "language": "German"
    },
    {
      "cracking": "Die gaffende Menge hat inzwischen vielleicht die Einwohnerzahl von Castrop Rauxel erreicht.",
      "cracker": "Ulrich Roski",
      "language": "German"
    },
    {
      "cracking": "Was weiß ich noch von Tristam Shandy, was von Rousseaus Bekenntnissen, von Seumes Spaziergang? Nichts, nichts, nichts.",
      "cracker": "Patrick Süskind",
      "language": "German"
    },
    {
      "cracking": "Einstweilen, bis den Bau der Welt, Philosophie zusammenhält, Erhält sich das Getriebe Durch Hunger und durch Liebe.",
      "cracker": "Schiller",
      "language": "G erman"
    },
    {
      "cracking": "\"Why, perhaps the Prince and Princess may go to live in a country where there is a deep river, and perhaps they may have one only son, a little fair- haired boy with violet eyes like the Prince himself; and perhaps some day he may go out walk with his nurse\"",
      "cracker": "Oscar Wilde",
      "language": "English"
    },
    {
      "cracking": "Der einzige Unterschied, den ich im Laufe meines Lebens bei den Menschen bemerkt habe, ist der, daß einige ihren Kaffee schwarz trinken und die anderen mit Milch.",
      "cracker": "Albert Schweitzer",
      "language": "German"
    },
    {
      "cracking": "Love is my sin and thy dear virtue hate.",
      "cracker": "William Shakespeare",
      "language": "English"
    },
    {
      "cracking": "Misery acquaints a man with strange bedfellows.",
      "cracker": "William Shakespeare",
      "language": "English"
    },
    {
      "cracking": "Every Profession is a conspiracy against laity.",
      "cracker": "George Bernard Shaw",
      "language": "English"
    },
    {
      "cracking": "In order to, I mean, it\u2019s a new club.",
      "cracker": "Patty Smith",
      "language": "English"
    },
    {
      "cracking": "Non ridere, non lugere neque detestari, sed intelligere.",
      "cracker": "Baruch Spinoza",
      "language": "other"
    },
    {
      "cracking": "The last time I saw Georgie alive was in the summer of \u201975.",
      "cracker": "Rod Stewart",
      "language": "English"
    },
    {
      "cracking": "Georgie boy was gay I guess, but nothing more and nothing less the kindest guy I ever knew.",
      "cracker": "Rod Stewart",
      "language": "English"
    },
    {
      "cracking": "I am tired of tears and laughter, And men that laugh and weep.",
      "cracker": "A.C. Swinburne",
      "language": "English"
    },
    {
      "cracking": "Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high! Like a diamond in the sky!",
      "cracker": "Jane Taylor",
      "language": "En glish"
    },
    {
      "cracking": "Der Optimist glaubt, daß die Zukunft unbestimmt ist, der Pessimist nicht.",
      "cracker": "Edward Teller",
      "language": "German"
    },
    {
      "cracking": "Tis better to have loved and lost than never to have lost at all. ",
      "cracker": "Alfred Tennyson",
      "language": "English"
    },
    {
      "cracking": "Die Leute, die heute gegen die Erzeugung der Bombe reden, sind freilich der Auswurf der Intelligenz, aber auch das beweist nicht unbedingt, daß das zu preisen ist, was sie verabscheuen.",
      "cracker": "Ludwig Wittgenstein",
      "language": "German"
    },
    {
      "cracking": "Man kann vernünftigerweise nicht einmal auf Hitler eine Wut haben; wieviel weniger auf Gott.",
      "cracker": "Ludwig Wittgenstein",
      "language": "German"
    },
    {
      "cracking": "Wenn Weiß zu schwarz wird, sagen manche Menschen \u201EEs ist im wesentlichen immer noch dasselbe\u201D. Und andere, wenn die Farbe um einen grad dunkler wird, sagen \u201EEs hat sich ganz verändert\u201D. ",
      "cracker": "Ludwig Wittgenstein",
      "language": "German"
    }
  ];
    
    
    let rnd = Math.floor(Math.random() * Math.floor(cracks.length));
    console.log("rnd " + rnd);
    let crack = cracks[rnd].cracking;
    let cracker = cracks[rnd].cracker;
    let quote = `<div>${crack}</div><div><strong>${cracker}</strong></div>`;
    console.log(quote);

    document.querySelector("#wisecrack").insertAdjacentHTML('beforeend', quote);