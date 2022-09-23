/*----- constants -----*/
// Selection of words game will choose from at random for the player to guess
const  WORDS = [
    "javascript", 
    "object",
    "array",
    "function",
    "array",
];

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*----- state variables -----*/
let secretWord, //random secret word selected by computer
    randomNum, //random number that will aid in grabbing a random word to guess
    underscore, //used to represent the word to guess with an array of underscores
    playerGuess, //letter selected by player from letter button
    guesses, //array of stored guesses
    remGuesses, //remaining guesses until player loses game
    numCorrectGuesses, //number of correct guesses
    numChar //number of spaces in secret word

/*----- cached elements  -----*/
const underScoreEl = document.getElementsByClassName("underscore");
const rightGuessEl = document.getElementsByClassName("goodGuess");
const wrongGuessEl = document.getElementsByClassName("badGuess");

/*----- event listeners -----*/
resetBtnEl.addEventListener("click", handleResetClick)

/*----- functions -----*/
// Create initial game state (Initialize Game)
function init() {
   randomNum = Math.floor(Math.random() * WORDS.length);
    secretWord = WORDS[randomNum];
    console.log(secretWord);
    rightWord = [];
    wrongWord = [];
  }


  function handleResetClick() {
    init();
  }


// GAME START
    init()