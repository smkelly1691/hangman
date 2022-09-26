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
    correctGuesses

/*----- cached elements  -----*/
let underScoreEl = document.getElementsByClassName("underscore");
let displayMessageEl = document.getElementById("display-message");
let resetBtnEl = document.getElementById("reset");
let numGuessEl = document.getElementsByClassName("guesses");
let boardEl = document.getElementsByClassName("buttons");
let guessesLeftEl = document.getElementById("numGuessesLeft");
let answerArrayEl = document.getElementById("answer-array")


/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);


/*----- functions -----*/
// Create initial game state (Initialize Game)
function init() {
  displayMessageEl.innerHTML="Pick A Letter!";
  guesses = [];
  remGuesses=10;
  guessesLeftEl.innerHTML="You have " + remGuesses + " guesses left";
  secretWord = null;
  pickWord();
  underscore = [];
  playerGuess = [];
  correctGuesses = 0;
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
  
  function createKeyboard() {
      myButtons = document.getElementById('buttons');
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

    function resultMessage() {
      displayMessageEl.innerHTML = "You have " + remGuesses + " guesses left";
      if (remGuesses < 1) {
        displayMessageEl.innerHTML = "Game Over";
      }
      for (let m = 0; m < guesses.length; m++) {
        if (numGuesses + remainingLetters === guesses.length)
    {
          displayMessageEl.innerHTML = "You Win!";
        }
      }
    }

    function check() {
      list.onclick = function () {
        let playerGeuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let k = 0; k < secretWord.length; k++) {
          if (secretWord[k] === playerGeuss) {
            guesses[k].innerHTML = playerGeuss;
            correctGuesses += 1;
          } 
        }
        let l = (secretWord.indexOf(playerGeuss));
        if (l === -1) {
          remGuesses -= 1;
          resultMessage();
        } else {
          resultMessage();
        }
      }
    }
  
    result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (let i = 0; i < secretWord.length; i++) {
        correct.setAttribute('id', 'my-word');
        playerGuess = document.createElement('li');
        playerGuess.setAttribute('class', 'guess');
        if (secretWord[i] === "-") {
          playerGuess.innerHTML = "-";
          remainingLetters = 1;
        } else {
          playerGuess.innerHTML = "_";
        }
  
        geusses.push(playerGuess);
        wordHolder.appendChild(correct);
        correct.appendChild(playerGuess);
      }
    }

function render() {
  generateUnderscores();
  createKeyboard();
}

function handleResetClick() {
  init();
  myButtons.removeChild(letters);
  letters.removeChild(list);
}


// GAME START
    init()