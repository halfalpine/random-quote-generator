$(document).ready(function() {

  var dataX = {
    last: 100
  };

  var quotes = [{
    quote: "I find it fascinating that our planet still has areas where no modern technology can save you, where you are reduced to your most basic - and essential - self. This natural space creates demanding situations that can lead to suffering and death, but also generate a wild interior richness. Ultimately, there is no way of reconciling these contradictions. All I can do it try to live within their margins, in the narrow boundary between joy and horror.",
    author: "Jean-Cristophe Lafaille"
  }, {
    quote: "Push off from all the articles, guides, ratings, reputations, fads, teachers, and even friends; in good sense do what ever you will. Thus my ascents or yours, as well as this article, are actually no one’s business...",
    author: "Peter Haan"
  }, {
    quote: "To succeed at any price is fashionable. Fashion is conformity and thus the antithesis of art. Climbing only to acheive success eviscerates the meaning of a climber’s expression. Soloing is my art.",
    author: "Steve House"
  }, {
    quote: "My brain worked differently now, and I consciously tasted the sublime place to which we had come. The colors were hyper-vivid and the auditory hallucinations pleasant. I looked over at my companions' haggard faces. I wouldn't have traded this for anything in the world.",
    author: "Scott Backes"
  }, {
    quote: "Climbers are not crazy people. They are not trying to get themselves killed. They know what life is worth. They are in love with living.",
    author: "Werner Braun"
  }, {
    quote: "So, if you cannot understand why there is something in man which responds to the challenge of this mountain and goes out to meet it, that the struggle is the struggle of life itself upward and forever upward, then you won't see why we go. What we get from this adventure is just sheer joy. And joy is, after all, the end of life. We do not live to eat and make money. We eat and make money to be able to enjoy life. That is what life means and what life is for.",
    author: "George Leigh Mallory"
  }, {
    quote: "Climbing needs no justification, no more than does watching a sunrise, or listening to a great symphony, or falling in love…",
    author: "James Ramsey Ullman"
  }, {
    quote: "I remember Messener once on the top of the mountain feeling he really summited. He finally was at peace.He didn't need to do anymore. Then it came again... he had to do more. False summit...",
    author: "Werner Braun"
  }, {
    quote: "You cannot stay on the summit forever; you have to come down … So why bother in the first place?  Just this: What is above knows what is below, but what is below does not know what is above.  In climbing, take careful note of the difficulties along your way; for as you go up you can observe them.  Coming down you will no longer see them, but you will know they are there if you have observed them well. There is an   art of finding one's direction in the lower regions by the memory of what one saw higher up.When one can no longer see, one  can at least know.",
    author: "Rene Daumal"
  }, {
    quote: "The bivoac spots, the nesting places I make up this wall are more meaningful than most of the climbing I am doing. Reaching the end of the day and a place to take stock of the situation, to lie up against the wall childlike and tired. To wake to another blue morning, another day within days on this wall: this many days alone. Would this soulitude be unbearable without El Cap?",
    author: "Peter Haan"
  }, {
    quote: "I have always cringed when I heard the word \“conquer\” used in connection with climbing achievements. Conquer: master, subdue, over-power, defeat, subjugate..... Here on Half Dome our five defeats versus one still questionable success can hardly be rationalized into a “conquering.” What we have shown is an extension of man’s greatest natural gift: his adaptability. The ecology movement is beginning to remind man that in order for a species to survive it must adapt not only its physical characteristics but also its behavior to its surroundings. Man has turned the tables. He is trying to adapt his surroundings to himself. Climbing is an activity in which man works in surroundings far less adaptable than normal. Is the climber trying to adapt them to his needs...to conquer them? I think not. Possibly he finds something unconsciously satisfying in returning to a biologically proven situation where it is he who becomes adapted.",
    author: "Galen Rowell"
  }, {
    quote: "Climb the mountains and get their good tidings.Nature's peace will flow into you as the sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop off like autumn leaves.",
    author: "John Muir"
  }, {
    quote: "For us the mountains had been a natural field of activity where, playing on the frontiers of life and death, we had found the freedom for which we were blindly groping and which was as necessary to us as bread.",
    author: "Maurice Herzog"
  }, {
    quote: "Annapurna, to which we had gone empty-handed, was a treasure on which we should live the rest of our days. With this realization we turn the page: a new life begins. There are other Annapurnas in the lives of men.",
    author: "Maurice Herzog"
  }];

  function popitup(url) {
    newwindow = window.open(url, 'name', 'height=850, width=730');
    if (window.focus) {
      newwindow.focus();
    }
    return false;
  }

  function newQuote() {
    var random = newRandom(dataX.last);
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var quote = quotes[random].quote;
    var author = quotes[random].author;
    $("#quote-space").html(quote);
    $("#attribution-space").html("-" + author);
    $("body").css("background-color", randomColor);
    $("#quote-attribution, #twitter-button").css("color", randomColor);
    $("#quote-button").css({
      "background-color": randomColor,
      "border-color": randomColor
    });
  }

  function newRandom(num) {
    var random = Math.floor(Math.random() * quotes.length);
    if (random === num) {
      random++;
    }
    // random === num ? random++ : random;
    dataX.last = random;
    return random;
  }

  function tweet() {
    var text = $("#quote-space").html() + " " + $("#attribution-space").html();
    popitup("https://twitter.com/intent/tweet?text=" + text + "&hashtags=quotes");
  }

  // Function below copied from Twitter; populates pop-up window
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) {
      return t;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));


  $("#twitter-button").on("click", tweet);
  $("#quote-button").on("click", function(){
    newQuote();
  });

  newQuote();
});
