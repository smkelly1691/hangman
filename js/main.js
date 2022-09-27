/*----- constants -----*/
// Selection of words game will choose from at random for the player to guess
const  WORDS = [
    "javascript", 
    "object",
    "array",
    "function",
    "element", 
    "class"
];

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*----- state variables -----*/
let randomNum, //random number that will aid in grabbing a random word to guess
    secretWord, //random secret word selected by computer
    underscore, //used to represent the word to guess with an array of underscores
    playerGuess, //letter selected by player from letter button
    guesses, //array of stored guesses
    remGuesses, //remaining guesses until player loses game
    numGuesses, //number of guesses
    remainingLetters, //checking the length of the secret word to provide player status
    counter,
    space,
    correct

/*----- cached elements  -----*/
let underScoreEl = document.getElementsByClassName("underscore");
let displayMessageEl = document.getElementById("display-message");
let resetBtnEl = document.getElementById("reset");
let numGuessEl = document.getElementsByClassName("guesses");
let boardEl = document.getElementById("buttons");
let guessesLeftEl = document.getElementById("numGuessesLeft");
let answerArrayEl = document.getElementById("answer-array");
let wordHolder = document.getElementById("hold");


/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);


/*----- functions -----*/
// Create initial game state (Initialize Game)
function init() {
  displayMessageEl.innerHTML="Pick A Letter!";
  wordHolder = [ ];
  geusses = [ ];
  space = 0
  remGuesses=10;
  guessesLeftEl.innerHTML="You have " + remGuesses + " guesses left";
  secretWord = null;
  pickWord();
  underscore = [ ];
  playerGuess = [ ];
  counter = 0;
  remainingLetters = secretWord.length;
  render();
}


function pickWord() {
  randomNum = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[randomNum];
  console.log(secretWord);
}

function generateUnderscores() {
  for (let i = 0; i < secretWord.length; i++) {
    if(secretWord[i] != ' ') {
      underscore.push('_');
      underScoreEl[0].innerHTML = underscore.join(' ');
  } else {
      underscore.push(' ');
      }
  }
    console.log(underscore);
    return underscore;
  }
  
    let buttons = function() {
      myButtons = 
      document.getElementById('buttons');
      letters = document.createElement('ul');
      for (let j = 0; j < ALPHABET.length; j++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = ALPHABET[j];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }

    comments = function () {
      guessesLeftEl.innerHTML = "You have " + remGuesses + " lives";
      if (remGuesses < 1) {
        guessesLeftEl.innerHTML = "Game Over";
      }
      for (let i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          guessesLeftEl.innerHTML = "You Win!";
        }
      }
    }
  
    result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (let i = 0; i < secretWord.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (secretWord[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }

  check = function () {
    list.onclick = function () {
      let geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
          fillBlanks();
        } 
      }
      let j = (secretWord.indexOf(geuss));
      if (j === -1) {
        remGuesses -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

  function fillBlanks () {
    numGuessEl[0].innerHTML = underScoreEl;
  }
  
  

function render() {
  generateUnderscores();
  buttons();
  result();
  comments();
  // fillBlanks();
}

function handleResetClick() {
  init();
  myButtons.removeChild(letters);
  letters.removeChild(list);
  correct.removeChild(guess);
}


// GAME START
    init()