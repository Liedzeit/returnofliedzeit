---
layout: "layouts/simple.njk"
title:  "The Chinese Chess Room"
description: "Lecture at the 2017 Austrian Ludwig Wittgenstein Symposium"
tags: "philosophy"
backgroundImage: "/assets/img/kirchberg.jpg"

---


<br/>


##### Abstract
When DeepMind’s program AlphaGo beat one of the leading masters of the ancient board game Go Lee Sedol in March 2016 it was regarded as a major breakthrough in the development of Artificial Intelligence. In contrast to DeepBlue that relied on computing power to do extensive tree search and was designed to achieve one specific goal – excelling at chess, a program like AlphaGo by employing modern “Deep Learning” techniques should in principle be able to solve any problem at all without being taught first. That at least is the credo of its creators.
Do modern AI programs represent a step forward to “thinking machines”? And what becomes of old philosophical arguments that declare that such things are impossible? In a variant of Searle’s Chinese Room I am introducing a prisoner who has to do all learning and reasoning by himself to come up with answers to Chinese questions.

<br/>

#### 1. Deep Learning
In March 2016 AlphaGo, a program developed by a Google company called DeepMind, shocked the Go-playing community and at the same time developers of Artificial Intelligence when it beat one of the best players in the world the Korean Lee Sedol in a 5-game-match 4-1. Such a feat was not deemed possible for at least another decade. Ever since Kasparov lost against DeepBlue at chess in 1997 the game of Go has been regarded the new Holy Grail of Artificial Intelligence. Since Go is much more complex than chess and there are no practical heuristic evaluation methods for a given game position, it seemed that nothing less than true emulation of the Human mind would suffice for beating grand masters of the game. The magic word in the astonishing revolutionary leap in AI is “Deep Learning”.  In AlphaGo artificial neural networks “are trained by a novel combination of supervised and reinforcement learning”. (Silver et al., 2016, p. 484)

Neural networks helped to overcome the two basic obstacles that made classical tree search practically impossible for Go. By analysing millions of game positions in a similar way that is used in picture recognition a “policy network” is established, meaning the software learns to “guess” which move is likely to be played. And this is what is then optimised by self-play. A second “value network” is able to predict the outcome of a game, given a game position. This is combined with a statistical approach, the Monte Carlo tree search, to determine the likelihood of a move to lead to victory. The resulting software “evaluated thousands of times fewer positions than Deep Blue did in its match against Kasparow”. (Silver et al., 2016, p. 489)
In essence then, the game of AlphaGo in some respect mimics the human way of playing. To the expert human player only a couple of moves “suggest themselves”. And depending on what intuition says about the position on the board a more aggressive or cautious move will be picked for further evaluation, meaning the next probable answers to the move candidate will be “read” out and the resulting position again evaluated.
But just as we do not really understand how human intuition works the programmers of AlphaGo do not really understand what exactly it is the software is “learning”.

In contrast to GOFAI (“good old-fashioned AI”) algorithms that are hand-crafted and fully understood analytically, many algorithms using artificial neural networks are understood only at a heuristic level, where we empirically know that certain training protocols employing large data sets will result in excellent performance. (Lin and Tegmark, 2016, p. 1)


#### 2. The Chinese Room revisited
John Searle attempted in a series of articles to show that Artificial Intelligence was impossible, or more accurately, he stated that what he called the “strong” claim of AI that “computers given the right programs can be literally said to understand and have other cognitive states” is nonsense. (Searle, 1980, p. 417)
The “Gedankenexperiment” of the Chinese Room Searle introduced has been wildly discussed and although his conclusions are not universally accepted the Chinese Room still challenges proponents of the view that human thought can in principle be reproduced by artificial means.
Whether the argument of Searle is really valid I am not going to discuss here, but assuming he did establish, that for all machines one could imagine in the 1980s thinking was impossible, does Deep Learning AI change the picture?
It might be argued that Deep Learning methods are just new techniques not altering the principle difference between carbon based “real thinking” and silicon based simulation of thinking. But it would not be the first time that a quantitative technical advancement results in a qualitative change.
I am proposing a variant of the Chinese Room experiment that takes the ability of software to learn for granted.
In the classic Chinese Room (slightly simplified) we have a human being locked up in a room. She gets pieces of paper with some Chinese text from the outside. Not knowing any Chinese but having access to a book in which every “Chinese story” is represented together with an appropriate Chinese answer she is able to look it up, identifying “the symbols entirely by their shapes” (Searle, 1980, p. 418), and present the answer to the outside. To the outside it would look like the “the Room” knows Chinese since the correct answers are produced. 
The human agent, of course, together with the book represent a software program, and it certainly seems as if they still do not know Chinese although they succeed in communicating.
Now for the variant: In this we only have the human agent in the room, no book with previously implemented knowledge at all, but just a human being with the capability of learning.
The task remains basically the same. Get some Chinese text and produce the correct Chinese answer. Is it possible? 
Of course, the human being – or learning software – must be trained first. So, lets assume that together with the Chinese story our agent gets three answers, one of them is correct the others false. The object is to recognize patterns and in the end enough meaning to pick the right answer.
To make it more dramatic, let us say that our Chinese Room prisoner will be released if she chooses the correct answer but killed if she picks the wrong one.
An input story might start like this:

炮二平五 马2迸3 马二 迸三 炮8平6 车一平二 马8迸7
炮八平六 炮2平1 马八迸七 车丨平2 兵七迸一 卒7迸1 ...

And these are the possible answers:

<div style="padding-left: 30px;">

1. 炮七平二

2. 一I五平四

3. 兵五雄一
</div>


This looks quite difficult. But we are assuming that we get any number of story/answer examples. And after a while the Chinese prisoner will see that some of the Chinese “expressions” reoccur in the story as well as in the answer. Every expression is roughly the same length, as is the story. Under these conditions will it be possible to find a pattern?

### 3. Simplifying the Case
Maybe we should start with a more simple case. In real life you do not expect a beginner to be fluent in a new language. When a child is learning language and it babbles “ball” when presented a ball, we rightly take this as a first step in the learning process.
As we all know, learning a language is easier when we are presented words together with pictures. Let us view another scenario, then. Here, in the learning phase the prisoner is presented with three cards depicting a ball, a banana and a bicycle and three cards with pictures of children again with symbols beneath. The symbols on the cards presumably are denoting the objects. Of course, there is no guarantee, but it would be rational to suppose a simple relationship between picture and symbols. 
The next card shows one of the children riding a bike. The question on the picture reads:

谁骑自行车?

The given three possible answers are the three kid cards. There is surely not enough information to give a definitive answer, but one already can make an educated guess. Let us say the last three symbols of the question are the same as on the bicycle card. What can the question mean if the answer is the name of a kid? It might very well be: Who is riding the bicycle?
This could be repeated a couple of times. Always one of the children is shown eating a banana, riding a bicycle or playing ball. Then a question is asked with one of the names for the objects and always the correct answer turns out to be the name of the child on the card.
This bicycle-banana-ball language game is, to be sure, very simple. Mastering it hardly counts as having learnt a language. But it is easy to see, how the learning phase could be prolonged by introducing more picture-symbol cards. In principle a complete language could be learned this way.
But isn’t this completely obvious? We already know that a human being can learn any language. Being locked up in a room is not a serious handicap at all. Even deaf-blind people are capable of learning languages, and being deprived of vision and hearing surely constitutes a much more serious barrier.
And we also know, that unlike the prisoner in the Chinese Room, people can learn a language without any previous language. When a child is learning a language it does not use conscious reasoning power to guess the meaning of words. It does not translate.
To go back to the prisoner in the Chinese Room: To the outside it looks like the Room answers like a native.
And according to the original premises, since there is no previous programmed knowledge, no bootstrapping, doesn’t the fact, that after some training the agent (prisoner/program) can answer the questions, means, by definition, that he has mastered the (subset-) language?
But, Searle might response, the prisoner still does not “know” the language, all he has are some hypotheses and formal procedures to arrive at an “answer”. If one squiggle in the questions looks like the symbol on a card he “assumes” that the question asks “who” is “doing” something with the object. He has no way of being sure, so it would be wrong to say that he knows the answer. At best, it can be said, that he is able to simulate real understanding, even if his answers are always right. 

<br/>

### 4. Understanding without reasoning
The picture cards example was at the same time too simple and too complicated to clarify the epistemological position of our prisoner.
Now we take a look at a different language game.
This time the prisoner gets one of three cards with these strings of symbols.

<div style="padding-left: 30px;">

1. 石頭 

2. 紙

3. 剪刀

</div>
Every card again means a question. And all three cards are at the same time the three possible answers. In this case the correct answer to the first card is the second, to the second the third to the third the first. After only a couple of training sessions this pattern becomes transparent. 
The symbols in fact literally mean rock, paper, scissors. But even if the meaning were different, in this particular language game they certainly play the role of rock, paper, scissors in the well-known game. Knowing the answer to the question in this case is identical with knowing the meaning of the words.
And knowledge of the meaning does not at all involve consciousness. Imagine our prisoner being hungry.
To get food he has to click on a blue, yellow or green button. Above the buttons there is a small coloured plate that changes colours every day. It is blue, yellow or green. It does not matter which button he pushes he will always get food. But he will get slightly more food if he pushes the blue one if the plate is green, the yellow if it is blue, and the green if the plate is yellow. How long will it take till he always pushes the “right” button? 
That paper “beats” rock is a semantic property. It is syntactical correct to answer rock with scissors, it just would be – the wrong move.
And a very simple software program would be capable to figure out the solution. In fact, in this case we can reverse one of Searle’s battle cries. Instead of the computer has “a syntax but no semantics” (Searle, 1980, p. 423) we say: “it has only semantics”. The program would “know” the answer and it does not matter, that it has no idea how a rock feels like. It does not have to know that scissors “cut” paper.


<br/>
<br/>

### 5. Conclusion
Do modern AI programs relying on Deep Learning refute Searle’s argument? At first glance the answer is easy. In the Chinese Room the human agent is only blindly following some rules. The knowledge is in the book part of the system. What the agent extracts out of the book part and presents to the outside world might seem to the outside world as the correct answer but to the agent it is totally meaningless.
But in our Chinese Room variant as in the real Deep Learning world the book part of the system is missing. There is no predefined knowledge that just needs to be extracted by some rules. Instead the agent himself (or itself) must establish the knowledge base in the first place. So, by definition, everything that comes out of the system, comes out of the agent. If meaningful answers come out of the system, the meaning must be generated by the agent.
The Chinese Room picture closely resembles the language game Wittgenstein introduces in the very first section of his Philosophical Investigations. Someone gets a piece of paper with the sign “Five red Apples”.
He opens a drawer with the sign “Apple” (by comparing the squiggles), then he compares a colour chart labelled “red” with the colour of the apples, then he counts up the cardinal numbers (“I assume he knows them by heart”) up to the word “five”, “and for each number he takes an apple of the same colour as the sample out of the drawer.”
This is what Searle’s agent does, and this is what the agent in the variant does. Only, that in the variant the colour chart and the labelling of the drawer are not predefined but were created by the agent himself in the learning phase. 
Searle’s real puzzle then, is not how can a machine possibly think or “mean” something but rather how is meaning possible? This is what Wittgenstein’s lets his puzzled interrogator ask:

“But how does he know where and how he is to look up the word ‘red’ and what he is to do with the word ‘five’?” (PH, 1)

Wittgenstein’s answer to this: “Well, I assume that he acts as I have described. Explanations come to an end somewhere.” (PH, 1)
And the meaning of the word “five”? The subject just did not come up yet, Wittgenstein says. He only showed how the word is used.
But if the agent does not know the meaning, is he in the end not just “simulating” understanding?
In a way this is exactly true. But it is just like someone learning to play the piano. There are some dots on a piece of paper and by following some rules, the would-be-player just hits some keys in the sequence of the dots of the paper. This is at best first a simulation of piano playing. The point though is, that piano playing is nothing over and above hitting the keys in the right sequence – except practice.
Finally, to come back to the story presented to our prisoner in a Chinese Room. Let us reverse the situation and have a Chinese prisoner in an Austrian Room. He will get stories like this one:

<div style="padding-left: 30px;">
1. e2-e4, e7-e5.
2. d2-d4, e5xd4.
3. c2-c3, c7-c5.
...
</div>

This, of course, is the notation of a chess game. Possible answers to this story include the chess mate move.
Similarly the prisoner in our Chinese Room variant was presented a game of Chinese Chess. The rules are slightly different, but there again the mate move is the “correct” answer to the “story”. The challenge of extracting the rules out of examples of games should be equally hard. And it is for the reader to decide whether it is possible or not. 

<br/>

### References
Lin, Henry W.;  Tegmark, Max (2016) Why does deep and cheap learning work so well? arXiv:1608.08225v1 [cond-mat.dis-nn] 29 Aug 2016.

Searle, John (1980), “Minds, Brains and Programs” Behavioral and Brain Sciences, 3 (3), 417–424.

Silver, David; Huang, Aja; Maddison, Chris J.; Guez, Arthur; Sifre, Laurent; van den Driessche, George; Schrittwieser, Julian; Antonoglou, Ioannis; Panneershelvam, Veda; Lanctot, Marc; Dieleman, Sander; Grewe, Dominik; Nham, John; Kalchbrenner, Nal; Sutskever, Ilya; Lillicrap, Timothy; Leach, Madeleine; Kavukcuoglu, Koray; Graepel, Thore; Hassabis, Demis (2016) “Mastering the game of Go with deep neural networks and tree search” Nature, 529(7587), 484−489.

