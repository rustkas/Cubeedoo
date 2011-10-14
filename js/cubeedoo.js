var qbdoo = {
	currentLevel: 1,
	currentTheme: "numbers",
	defaultGameDuration: 120,
	board: document.querySelector("#board"),
	cards: 16,
	cardsEls: [],
	onceValue: [],
	twiceValue: [],
	init: function() {
	  qbdoo.setupGame();
  },
  setupGame: function() {
    // populate all the active blocks with data valuess
    for (var i=1; i<=qbdoo.cards;i++) {
      num = qbdoo.randomize();
      qbdoo.board.querySelectorAll("div[data-value]")[i-1].setAttribute("data-value", num);
    }
    qbdoo.cardEls = qbdoo.board.querySelectorAll("div[data-value]");
    qbdoo.events();
  },
  events: function() {
    for (var i=0; i<qbdoo.cardsEls.length; i++) {
      qbdoo.cards[i].addEventListener("click", qbdoo.turnCard );
    }
  },
  turnCard: function() {
    //turns the card by changing the className
    console.log("I pooped");
  },
  hideCard: function() {
    //removes card if poll returns true
  },
  poll: function() {
    // checks the value of the cards and returns boolean
  },
  getValue: function() {
    //get the data-value of the card
  },
  timer: function() {
    //the timer function.
    //accepts (none | start | stop)
  },
  randomize: function() {
    var num = Math.floor(Math.random() * (qbdoo.cards / 2) + 1);
    if (qbdoo.inArray(num, qbdoo.onceValue) === false) {
      qbdoo.onceValue.push(num);
      console.log(num);
      return num;
    } else if (qbdoo.inArray(num, qbdoo.twiceValue) === false) {
      qbdoo.twiceValue.push(num);
      console.log(num + ": second time!");
      return num;
    } else if (qbdoo.inArray(num, qbdoo.twiceValue)) {
      qbdoo.randomize();
      console.log("randomizer");
    } else {
      console.log("zero");
      return 0;
    }
  },
  pause: function() {
    // use dataset to get value for all the cards.
	
	// add theme to value set
	
	// add level to value set
	
	// add timeleft to value set
	
	// add score to value set
	
	// add to local storage

	// kill the timer
	
	// return
  },
  playGame: function(){
	// get local storage
	
	
	// set the theme
	
	// set the level
	
	// set the 24 cards
	
	// set the score back
	
	// start the time
	  
  },
  renderMenu: function() {
    
  },
  changeTheme: function(klass) {
	//change the theme by changing the class
    document.getElementById('game').setAttribute('class',klass);
  },
  inArray: function(needle, haystack, argStrict) {
    var key = '',
    strict = !! argStrict;
    
    if (strict) {
      for (key in haystack) {
        if (haystack[key] === needle) {
          return true;
        }
      }
    } else {
      for (key in haystack) {
        if (haystack[key] == needle) {
          return true;
        }
      }
    }
    return false;
  },
};

//Initialize the js
document.addEventListener("load", qbdoo.init());
