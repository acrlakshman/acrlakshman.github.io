### Facebook friends sentiment

Facebook app written during HackMadison2014 event at UW-Madison. Analyses emotions between friends by collecting their interactions through messages, comments, etc.

*Before going to the website, please go through the instructions below of how to use it or `readme` file on [github](https://github.com/acrlakshman/facebook-sentiment-analysis)*

[website](https://friendsenti.herokuapp.com/) ( ← hosted on heroku, make sure to turn off ghostery)

* Select a friend from the dropdown box and wait for the dial to become steady.
* Result is on the scale of 0 to 1, 0 for most negative emotion, 1 for the best.
* Model used here to unify emotions assigned to each word from [SentiWordNet3.0](http://sentiwordnet.isti.cnr.it/) is not affective or more wrong, which will be updated in future. For now consider this app as a fun project instead of taking results seriously.

Code: [@[github](https://github.com/acrlakshman/facebook-sentiment-analysis)]

-------------------------------

### Facebook chat with voice

A facebook app written during Midwest Regional Hackathon 2013 at UIUC organized by facebook, using which you can chat as you speak. It can post on your wall whatever you tell it to post.

*Before going to the website, please go through the instructions below of how to use it or `readme` file on [github](https://github.com/acrlakshman/facebook-speech2text-chat). Website has no useful help to guide you through…*

* Trigger word: `lucky` (you can change it in the source code)
* Whenever you want it to do, start that sentence with `lucky`. For instance, if you want it to connect to chat server, just say *`lucky connect me to chat`* or something similar… Then select any of your online friend and keep speaking, it will chat for you.
* *`lucky post on my wall`* or something similar… will enable you to type something that you want it to post on your wall… when you are done typing just say *`lucky done`* or *`lucky post`*, it will post for you on your facebook wall.
* To customize trigger word (`lucky`), edit line 780 in [index.php](https://github.com/acrlakshman/facebook-speech2text-chat/blob/master/index.php#L780). Also customize dialect in line 1387 which is set to recognize American english right now.

Code: [@[github](https://github.com/acrlakshman/facebook-speech2text-chat)]

-------------------------------

### Air Hockey (2-player game)

A dual player game written in Java using the shapes library provided at the hackathon event conducted by [The Hub](https://thehubclub.wordpress.com/) at [UW-Madison](https://wisc.edu). This was written in collaboration with two other UW-Madison Computer Science students (we did not get introduced properly, so I don’t know their names, pretty much we all had equal contribution to this game).

* 2D game for 2 players who can simultaneously play with a single keyboard.
* With each winning score to either player, speed of puck increases.

Keyboard controls:

* Player-1: W (Up), A (Left), D (Right), S (Down), Q-E-Z-C (Along diagonal directions).
* Player-2: I (Up), J (Left), L (Right), K (Down), U-O-N-<dot> (Along diagonal directions).

Code: [@ [github](https://github.com/acrlakshman/Air-Hockey-in-Java) repository]

Snapshots:

| | |
|-|-|
|![Starting shot](initial-apps/air-hockey-1.png)|![After player-2 scored a point](initial-apps/air-hockey-2.png)|