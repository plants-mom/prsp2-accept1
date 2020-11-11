
define_ibex_controller({
      name: "MyPractice",

	  jqueryWidget: {
	      _init: function () {
		        this.options.transfer = null;
		        this.element.VBox({
			          options: this.options,
			          triggers: [1],
			          padding: "1em",
			          children: [
				            "Message", this.options,
      				      "AcceptabilityJudgment", this.options
                ]
                  });
          }
      },

      properties: { }
});
var exp = seq("practice", "startexp", sepWith("sep", seq(rshuffle(startsWith("target"), anyOf(startsWith("filler"), startsWith("control"))))));
var shuffleSequence = seq("intro","instructions", exp, "sr", "end");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next text fragment.",
        errorMessage: "Wrong. Please wait for the next text fragment.",
        ignoreFailure: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5"],
        q: "How does the text fragment sound?",
        leftComment: "(unnatural)", rightComment: "(natural)",
        presentAsScale: true
    },
    "Message", {
        hideProgressBar: true
    },

    "Question", {
        hasCorrect: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var manualSendResults = true;

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],


    ["intro", "Form", {html: { include: "intro.html" }}],
    ["instructions", "Message", {html: { include: "instructions.html" }}],
    ["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
    ["end", "Message", {html: { include: "end.html" }, transfer: null}],

    ["practice", "MyPractice", {html: "<div style=\"text-align: center;font-style: italic;\">Indicate on the scale below how natural the fragment sounds for you.</div>", s: "Ms Burnham has been a registered nurse for nine years. She worked in a hospital for the most of her life."},
     "Message", {html: "Some fragments will be clearly worse than others."}],


    ["practice", "MyPractice", {html: "<div style=\"text-align: center;font-style: italic;\">Indicate on the scale below how natural the fragment sounds for you.</div>", s: "Malamute is a dog breed. Malamutes is beautiful dogs."}],






[["target-1-too-short", 1], "AcceptabilityJudgment", {s: "Suzy had wine. She ate some chips but no ketchup. Lucy drank too, and was happy."}],
[["target-1-nil-short", 1], "AcceptabilityJudgment", {s: "Suzy talked excitedly. She ate some chips but no ketchup. Lucy drank wine and was happy."}],
[["target-1-too-long", 1], "AcceptabilityJudgment", {s: "Suzy had wine. She danced for a while. She laughed a lot. She ate some chips but no ketchup. Lucy drank too, and was happy."}],
[["target-1-nil-long", 1], "AcceptabilityJudgment", {s: "Suzy talked excitedly. She danced for a while. She laughed a lot. She ate some chips but no ketchup. Lucy drank wine and was happy."}],

[["target-2-too-short", 2], "AcceptabilityJudgment", {s: "John made a stew. He opened a bottle of wine. Peter was cooking too, blissfully unaware of anything."}],
[["target-2-nil-short", 2], "AcceptabilityJudgment", {s: "John set the table. He opened a bottle of wine. Peter was cooking stew, blissfully unaware of anything."}],
[["target-2-too-long", 2], "AcceptabilityJudgment", {s: "John made a stew. He washed the dishes. He cleaned the counter. He opened a bottle of wine. Peter was cooking too, blissfully unaware of anything."}],
[["target-2-nil-long", 2], "AcceptabilityJudgment", {s: "John set the table. He washed the dishes. He cleaned the counter. He opened a bottle of wine. Peter was cooking stew, blissfully unaware of anything."}],

[["target-3-too-short", 3], "AcceptabilityJudgment", {s: "Ada read an essay. She stretched. Rita was reading too, completely lost to her surroundings."}],
[["target-3-nil-short", 3], "AcceptabilityJudgment", {s: "Ada finished her work. She stretched. Rita was reading maps, completely lost to her surroundings."}],
[["target-3-too-long", 3], "AcceptabilityJudgment", {s: "Ada read an essay. She stood up. She turned off the computer. She stretched. Rita was reading too, completely lost to her surroundings."}],
[["target-3-nil-long", 3], "AcceptabilityJudgment", {s: "Ada finished her work. She stood up. She turned off the computer. She stretched. Rita was reading maps, completely lost to her surroundings."}],

[["target-4-too-short", 4], "AcceptabilityJudgment", {s: "Tomas wrote a letter. He yawned. Lucy was writing too, sitting silently on the couch."}],
[["target-4-nil-short", 4], "AcceptabilityJudgment", {s: "Tomas tidied the desk. He yawned. Lucy was writing haikus, sitting silently on the couch."}],
[["target-4-too-long", 4], "AcceptabilityJudgment", {s: "Tomas wrote a sentence. He stretched his legs. He looked around. He yawned. Lucy was writing too, sitting silently on the couch."}],
[["target-4-nil-long", 4], "AcceptabilityJudgment", {s: "Tomas tidied the desk. He stretched his legs. He looked around. He yawned. Lucy was writing haikus, sitting silently on the couch."}],

[["target-5-too-short", 5], "AcceptabilityJudgment", {s: "Anne came first in her race. She burst into tears. Caroline won too, setting the lap record."}],
[["target-5-nil-short", 5], "AcceptabilityJudgment", {s: "Anne fell down in her race. She burst into tears. Caroline won gold, setting the lap record."}],
[["target-5-too-long", 5], "AcceptabilityJudgment", {s: "Anne came first in her race. She raised her hands. She screamed out loud. She burst into tears. Caroline won too, setting the lap record."}],
[["target-5-nil-long", 5], "AcceptabilityJudgment", {s: "Anne fell down in her race. She raised her hands. She screamed out loud. She burst into tears. Caroline won gold, setting the lap record."}],

[["target-6-too-short", 6], "AcceptabilityJudgment", {s: "Lucas ran to the barn. He was yelling. Peter was running too, trying to take care of the chickens."}],
[["target-6-nil-short", 6], "AcceptabilityJudgment", {s: "Lucas dashed from the house. He was yelling. Peter was running around, trying to take care of the chickens."}],
[["target-6-too-long", 6], "AcceptabilityJudgment", {s: "Lucas ran to the barn. He shut the door. He sealed the lock. He was yelling. Peter was running too, trying to take care of the chickens."}],
[["target-6-nil-long", 6], "AcceptabilityJudgment", {s: "Lucas dashed from the house. He shut the door. He sealed the lock. He was yelling. Peter was running around, trying to take care of the chickens."}],

[["target-7-too-short", 7], "AcceptabilityJudgment", {s: "Eve ate a piece. She put the plate down. Stephen was eating too, enjoying every mouthful."}],
[["target-7-nil-short", 7], "AcceptabilityJudgment", {s: "Eve examined the cake. She put the plate down.  Stephen was eating fish, enjoying every mouthful."}],
[["target-7-too-long", 7], "AcceptabilityJudgment", {s: "Eve ate a piece. She took a glass of water. She pondered. She put the plate down. Stephen was eating too, enjoying every mouthful."}],
[["target-7-nil-long", 7], "AcceptabilityJudgment", {s: "Eve examined the cake. She took a glass of water. She pondered. She put the plate down. Stephen was eating fish, enjoying every mouthful."}],

[["target-8-too-short", 8], "AcceptabilityJudgment", {s: "Mary lost a poker hand. She started feeling annoyed. Thomas lost too, and seemed very sad."}],
[["target-8-nil-short", 8], "AcceptabilityJudgment", {s: "Mary watched the roulette. She started feeling annoyed. Thomas lost money and seemed very sad."}],
[["target-8-too-long", 8], "AcceptabilityJudgment", {s: "Mary lost a poker hand. She took her coat from the cloakroom. She looked for her friend. She started feeling annoyed. Thomas lost too, and seemed very sad."}],
[["target-8-nil-long", 8], "AcceptabilityJudgment", {s: "Mary watched the roulette. She took her coat from the cloakroom. She looked for her friend. She started feeling annoyed. Thomas lost money and seemed very sad."}],

[["target-9-too-short", 9], "AcceptabilityJudgment", {s: "Suzy was steering a boat. She smiled. Natalie was sailing too, and looked slightly less happy."}],
[["target-9-nil-short", 9], "AcceptabilityJudgment", {s: "Suzy was cleaning the deck. She smiled. Natalie was sailing fast and looked slightly less happy."}],
[["target-9-too-long", 9], "AcceptabilityJudgment", {s: "Suzy was steering a boat. She shaded her eyes with her hand. She scanned the water. She smiled. Natalie was sailing too, and looked slightly less happy."}],
[["target-9-nil-long", 9], "AcceptabilityJudgment", {s: "Suzy was cleaning the deck. She shaded her eyes with her hand. She scanned the water. She smiled. Natalie was sailing fast and looked slightly less happy."}],

[["target-10-too-short", 10], "AcceptabilityJudgment", {s: "John pulled out of the race. He was upset. Peter quit too, saddened by the whole experience."}],
[["target-10-nil-short", 10], "AcceptabilityJudgment", {s: "John got out of the building. He was upset. Peter quit playing, saddened by the whole experience."}],
[["target-10-too-long", 10], "AcceptabilityJudgment", {s: "John pulled out of the race. He stopped nearby. He started calling his friend. He was upset. Peter quit too, saddened by the whole experience."}],
[["target-10-nil-long", 10], "AcceptabilityJudgment", {s: "John got out of the building. He stopped nearby. He started calling his friend. He was upset. Peter quit playing, saddened by the whole experience."}],

[["target-11-too-short", 11], "AcceptabilityJudgment", {s: "Sophie finished her watercolor. She looked a bit upset. Ashley was painting too, concentrating hard on her work."}],
[["target-11-nil-short", 11], "AcceptabilityJudgment", {s: "Sophie finished her part. She looked a bit upset. Ashley was painting walls, concentrating hard on her work."}],
[["target-11-too-long", 11], "AcceptabilityJudgment", {s: "Sophie finished her watercolor. She sighed with exhaustion. She slumped into a couch. She looked a bit upset. Ashley was painting too, concentrating hard on her work."}],
[["target-11-nil-long", 11], "AcceptabilityJudgment", {s: "Sophie finished her part. She sighed with exhaustion. She slumped into a couch. She looked a bit upset. Ashley was painting walls, concentrating hard on her work."}],

[["target-12-too-short", 12], "AcceptabilityJudgment", {s: "Jennifer sketched an orange with crayons. She looked at her friend with a smile. James was drawing too, and showed relentless dedication."}],
[["target-12-nil-short", 12], "AcceptabilityJudgment", {s: "Jennifer made an orange from clay. She looked at her friend with a smile. James was drawing shoes and showed relentless dedication."}],
[["target-12-too-long", 12], "AcceptabilityJudgment", {s: "Jennifer sketched an orange with crayons. She moved to the cupboard for some water. She opened a bottle. She looked at her friend with a smile. James was drawing too, and showed relentless dedication."}],
[["target-12-nil-long", 12], "AcceptabilityJudgment", {s: "Jennifer made an orange from clay.  She moved to the cupboard for some water. She opened a bottle. She looked at her friend with a smile. James was drawing shoes and showed relentless dedication."}],

[["target-13-too-short", 13], "AcceptabilityJudgment", {s: "Bob was watching a movie. He started sobbing. Jack was watching too, completely in silence."}],
[["target-13-nil-short", 13], "AcceptabilityJudgment", {s: "Bob was reading a story. He started sobbing. Jack was watching movies, completely in silence."}],
[["target-13-too-long", 13], "AcceptabilityJudgment", {s: "Bob was watching a movie. It was touching. It made him recall a personal tragedy. He started sobbing. Jack was watching too, completely in silence."}],
[["target-13-nil-long", 13], "AcceptabilityJudgment", {s: "Bob was reading a story. It was touching. It made him recall a personal tragedy. He started sobbing. Jack was watching movies, completely in silence."}],

[["target-14-too-short", 14], "AcceptabilityJudgment", {s: "Ella smoked a cigarette. She felt sleepy. Anne was smoking too, and felt relaxed."}],
[["target-14-nil-short", 14], "AcceptabilityJudgment", {s: "Ella finished her assignments. She felt sleepy. Anne was smoking cigars and felt relaxed."}],
[["target-14-too-long", 14], "AcceptabilityJudgment", {s: "Ella smoked a cigarette. She went into the kitchen. She washed the dishes. She felt sleepy. Anne was smoking too, and felt relaxed."}],
[["target-14-nil-long", 14], "AcceptabilityJudgment", {s: "Ella finished her assignments. She went into the kitchen. She washed the dishes. She felt sleepy. Anne was smoking cigars and felt relaxed."}],

[["target-15-too-short", 15], "AcceptabilityJudgment", {s: "Jason clapped his hands. He was excited. Harry clapped too, as his favorite forward had just scored a goal."}],
[["target-15-nil-short", 15], "AcceptabilityJudgment", {s: "Jason jumped from his seat. He was excited. Harry clapped hands, as his favorite forward had just scored a goal."}],
[["target-15-too-long", 15], "AcceptabilityJudgment", {s: "Jason clapped his hands. He was watching a soccer game. He shouted out. He was excited. Harry clapped too, as his favorite forward had just scored a goal."}],
[["target-15-nil-long", 15], "AcceptabilityJudgment", {s: "Jason jumped from his seat. He was watching a soccer game. He shouted out. He was excited. Harry clapped hands, as his favorite forward had just scored a goal."}],

[["target-16-too-short", 16], "AcceptabilityJudgment", {s: "Charlie climbed the wall. He wanted to escape the school. William was climbing too, but got caught by the principal."}],
[["target-16-nil-short", 16], "AcceptabilityJudgment", {s: "Charlie ran out of the classroom. He wanted to escape the school. William was climbing fences, but got caught by the principal."}],
[["target-16-too-long", 16], "AcceptabilityJudgment", {s: "Charlie climbed the wall. He hated studying here. He missed his parents. He wanted to escape the school. William was climbing too, but got caught by the principal."}],
[["target-16-nil-long", 16], "AcceptabilityJudgment", {s: "Charlie ran out of the classroom. He hated studying here. He missed his parents. He wanted to escape the school. William was climbing fences, but got caught by the principal."}],

[["target-17-too-short", 17], "AcceptabilityJudgment", {s: "Emma drove a car. She was not hurrying. Mary was driving too, and she wanted to pick up her daughter."}],
[["target-17-nil-short", 17], "AcceptabilityJudgment", {s: "Emma took a bus. She was not hurrying. Mary was driving home and she wanted to pick up her daughter."}],
[["target-17-too-long", 17], "AcceptabilityJudgment", {s: "Emma drove a car. She went to the grocery store. She felt relaxed. She was not hurrying. Mary was driving too, and she wanted to pick up her daughter."}],
[["target-17-nil-long", 17], "AcceptabilityJudgment", {s: "Emma took a bus. She went to the grocery store. She felt relaxed. She was not hurrying. Mary was driving home and she wanted to pick up her daughter."}],

[["target-18-too-short", 18], "AcceptabilityJudgment", {s: "Michael sang an aria. He was practicing for a concert. Richard was singing too, trying to impress his friends."}],
[["target-18-nil-short", 18], "AcceptabilityJudgment", {s: "Michael was playing guitar. He was practicing for a concert. Richard was singing scales, trying to impress his friends."}],
[["target-18-too-long", 18], "AcceptabilityJudgment", {s: "Michael sang an aria. He loved music. It was his passion. He was practicing for a concert. Richard was singing too, trying to impress his friends."}],
[["target-18-nil-long", 18], "AcceptabilityJudgment", {s: "Michael was playing guitar. He loved music. It was his passion. He was practicing for a concert. Richard was singing scales, trying to impress his friends."}],

[["target-19-too-short", 19], "AcceptabilityJudgment", {s: "Riku washed his clothes. He felt exhausted. Haruki was washing too, singing songs at the same time."}],
[["target-19-nil-short", 19], "AcceptabilityJudgment", {s: "Riku cleaned the dishes. He felt exhausted. Haruki was washing clothes, singing songs at the same time."}],
[["target-19-too-long", 19], "AcceptabilityJudgment", {s: "Riku washed his clothes. He used up the detergent. He bought some from the store. He felt exhausted. Haruki was washing too, singing songs at the same time."}],
[["target-19-nil-long", 19], "AcceptabilityJudgment", {s: "Riku cleaned the dishes. He used up the detergent. He bought some from the store. He felt exhausted. Haruki was washing clothes, singing songs at the same time."}],

[["target-20-too-short", 20], "AcceptabilityJudgment", {s: "Liam typed his name. He submitted the application form. Joseph was typing too, trying to finish his assignments before the deadline."}],
[["target-20-nil-short", 20], "AcceptabilityJudgment", {s: "Liam sent the email. He submitted the application form. Joseph was typing fast, trying to finish his assignments before the deadline."}],
[["target-20-too-long", 20], "AcceptabilityJudgment", {s: "Liam typed his name. He was applying for a master program. He wanted to study abroad. He submitted the application form. Joseph was typing too, trying to finish his assignments before the deadline."}],
[["target-20-nil-long", 20], "AcceptabilityJudgment", {s: "Liam sent the email. He was applying for a master program. He wanted to study abroad. He submitted the application form. Joseph was typing fast, trying to finish his assignments before the deadline."}],

[["target-21-too-short", 21], "AcceptabilityJudgment", {s: "Evelyn crawled forward. She was doing her best. Christina was crawling too, feeling regretful that she joined the army."}],
[["target-21-nil-short", 21], "AcceptabilityJudgment", {s: "Evelyn climbed the wall. She was doing her best. Christina was crawling forward, feeling regretful that she joined the army."}],
[["target-21-too-long", 21], "AcceptabilityJudgment", {s: "Evelyn crawled forward. She felt hungry. The training was harsh. She was doing her best. Christina was crawling too, feeling regretful that she joined the army."}],
[["target-21-nil-long", 21], "AcceptabilityJudgment", {s: "Evelyn climbed the wall. She felt hungry. The training was harsh. She was doing her best. Christina was crawling forward, feeling regretful that she joined the army."}],

[["target-22-too-short", 22], "AcceptabilityJudgment", {s: "Joe sang a song. He drank some water. David was singing too, and felt very confident about his voice."}],
[["target-22-nil-short", 22], "AcceptabilityJudgment", {s: "Joe danced at the party. He drank some water. David was singing songs and felt very confident about his voice."}],
[["target-22-too-long", 22], "AcceptabilityJudgment", {s: "Joe sang a song. He was with his friends. He felt thirsty. He drank some water. David was singing too, and felt very confident about his voice."}],
[["target-22-nil-long", 22], "AcceptabilityJudgment", {s: "Joe danced at the party. He was with his friends. He felt thirsty. He drank some water. David was singing songs and felt very confident about his voice."}],

[["target-23-too-short", 23], "AcceptabilityJudgment", {s: "Jeffrey whistled through his teeth. He wanted to show off. Austin whistled too, because he didn’t want to be looked down upon."}],
[["target-23-nil-short", 23], "AcceptabilityJudgment", {s: "Jeffrey performed a magic show. He wanted to show off. Austin whistled melodies because he didn’t want to be looked down upon."}],
[["target-23-too-long", 23], "AcceptabilityJudgment", {s: "Jeffrey whistled through his teeth. He learned it from his father. He felt proud. He wanted to show off. Austin whistled too, because he didn’t want to be looked down upon."}],
[["target-23-nil-long", 23], "AcceptabilityJudgment", {s: "Jeffrey performed a magic show. He learned it from his father. He felt proud. He wanted to show off. Austin whistled melodies because he didn’t want to be looked down upon."}],

[["target-24-too-short", 24], "AcceptabilityJudgment", {s: "Lily babysat her friends’ children. They fell asleep. Madeline was babysitting too, and she felt quite annoyed."}],
[["target-24-nil-short", 24], "AcceptabilityJudgment", {s: "Lily looked after some kittens. They fell asleep. Madeline was babysitting kids and she felt quite annoyed."}],
[["target-24-too-long", 24], "AcceptabilityJudgment", {s: "Lily babysat her friends’ children. She fed them some milk. They stopped complaining. They fell asleep. Madeline was babysitting too, and she felt quite annoyed."}],
[["target-24-nil-long", 24], "AcceptabilityJudgment", {s: "Lily looked after some kittens. She fed them some milk. They stopped complaining. They fell asleep. Madeline was babysitting kids and she felt quite annoyed."}],


[["filler-25", 25], "AcceptabilityJudgment", {s: "Emica went out with friends. They decided to go to a bar. Emica did not like the music there. She stayed outside and started talking with strangers and having fun on her own."}],

[["filler-26", 26], "AcceptabilityJudgment", {s: "Itsuki was not happy about a skirt that he was sewing. He had a dream about colors last night. The dream made him very unsure about the colors he had chosen initially."}],

[["filler-27", 27], "AcceptabilityJudgment", {s: "Gerel was anxious. She and Sarnai decided to work on the present. They wanted to keep it a secret. The door was closed and the girls were painting. Suddenly the door creaked. Gerel screamed and so did Sarnai."}],

[["filler-28", 28], "AcceptabilityJudgment", {s: "Batu took his bike out of the appartment. The apartment was small and dirty. His roommates were not exactly the tidiest people on earth."}],

[["filler-29", 29], "AcceptabilityJudgment", {s: "Aurora, a surgeon, pricked herself with a needle during surgery. She was worried. She knew there would be an investigation soon."}],

[["filler-30", 30], "AcceptabilityJudgment", {s: "Jimmy felt bad. A week ago his colleague was injured at work. Jimmy knew he should visit her at the hospital but he could not force himself to do it."}],

[["filler-31", 31], "AcceptabilityJudgment", {s: "Kima was mad at herself. She suspected the package would fall off without the additional tape. Now it was too late."}],

[["filler-32", 32], "AcceptabilityJudgment", {s: "Roland got used to office work. It shocked him when it turned out he was recommended for fieldwork."}],

[["filler-33", 33], "AcceptabilityJudgment", {s: "Ronnie shut the door behind her. She was extremely proud of herself. She would remember this conversation for a long time."}],

[["filler-34", 34], "AcceptabilityJudgment", {s: "Bill sat in the corner. He was very lucky his employee did not see him."}],

[["filler-35", 35], "AcceptabilityJudgment", {s: "Alyson finished her drink. She waited another quarter of an hour. Jake did not show up. She started realizing her client must have been hiding something."}],

[["filler-36", 36], "AcceptabilityJudgment", {s: "Tanya who her mother sent to do the groceries was angry. She felt it was her sister's turn to do them."}],

[["filler-37", 37], "AcceptabilityJudgment", {s: "Phil had been driving for hours. He badly needed to sleep. But he was nowhere near home yet."}],

[["filler-38", 38], "AcceptabilityJudgment", {s: "Raj who Sneha woke up in the morning was tired. Sneha knew it would turn out like that but she had no choice."}],

[["filler-39", 39], "AcceptabilityJudgment", {s: "Louis went to his favorite coffee place. He ordered a cappuccino and drank it on his way to work. He was disappointed that the coffee wasn't really hot."}],

[["filler-40", 40], "AcceptabilityJudgment", {s: "Shruti felt very good this morning. Shruti's sister who her friend drove to the house yesterday was finally here."}],

[["filler-41", 41], "AcceptabilityJudgment", {s: "Frank picked up his daughter from kindergarten. He had planned to take her to the mall to buy her an ice-cream. But the weather turned and he decided to go home instead."}],

[["filler-42", 42], "AcceptabilityJudgment", {s: "Joanna walked out the door. She felt powerful. The boss who she handed her resignation letter to had really tried to make her stay. But she had no intention of staying."}],

[["filler-43", 43], "AcceptabilityJudgment", {s: "Milena was crying. She had fallen off her bike. Her knee was bleeding a little bit."}],

[["filler-44", 44], "AcceptabilityJudgment", {s: "Omkar was amazed. The peanuts his brother who worked at a farm brought today were spectacular. He never ate anything like that."}],

[["filler-45", 45], "AcceptabilityJudgment", {s: "The chickens that Sally who was easily excited observed were spectacular. Everyone should look at them."}],

[["filler-46", 46], "AcceptabilityJudgment", {s: "It turned out there was no road work ahead. Vivek who his mother let drive was a little disappointed. He wanted to see the hole in the ground."}],

[["filler-47", 47], "AcceptabilityJudgment", {s: "Marc loves reading. He reads several books a week. He rarely buys books though. He frequently visits his local library."}],

[["filler-48", 48], "AcceptabilityJudgment", {s: "Eve was sad. The glass that she thought she put somewhere safe had fallen down and was now broken. She did not have any glasses anymore which was ridiculous."}],


[["control-49", 49], "AcceptabilityJudgment", {s: "Alice lives at the outskirts on her own. Alice has no neighbor. The neighbor hates her."}],

[["control-50", 50], "AcceptabilityJudgment", {s: "Johnny loves pancakes. He ate a pancake for breakfast this morning. When the pancake was gone completely he fried it using a pan."}],

[["control-51", 51], "AcceptabilityJudgment", {s: "The group gathered this morning. After a while they started chatting. Mostly the chat was about herself."}],

[["control-52", 52], "AcceptabilityJudgment", {s: "Wirrin liked rain but he had to accept that the forecast was correct: it wasn't raining. Wirrin knew that it was raining."}],

[["control-53", 53], "AcceptabilityJudgment", {s: "Akari has speak with Sanne about their wedding. He also did spoken about it with his daughter."}],

[["control-54", 54], "AcceptabilityJudgment", {s: "This time she won. This was the reason to be very proud of himself."}],

[["control-55", 55], "AcceptabilityJudgment", {s: "And and Stark to Mrs. trying clap crying hug was Jean. Was do to trying same all she this the at time."}],

[["control-56", 56], "AcceptabilityJudgment", {s: "Sana, Suzy, Jacques and Waru were having a great time. They were crying each other the whole afternoon."}],

[["control-57", 57], "AcceptabilityJudgment", {s: "Suzan isn't very talented manually. But she had to dance herself how to do braids. To make the experience more enjoyable she transgressed some music in the background."}],

[["control-58", 58], "AcceptabilityJudgment", {s: "Lucy was wearing a dress today. In fact she despised pants. She didn't have any pants and she never wore them in any combination possible. So, when she was asked to pay she took the wallet out of a pocket of the pants she had on her."}],

];
