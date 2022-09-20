  /*----- constants -----*/
const  WORDS = [
    "javascript", 
    "object",
    "array",
    "function",
]

const ALPHABET = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"
]


  /*----- state variables -----*/
let word 
    guesses 
    numGuesses 
    numGuessesLeft 
    numCorrectGuesses
    numChar

  /*----- cached elements  -----*/
const numGuessesLeftEl = document.getElementById("numGuessesLeft");
const messageDisplayEl = document.querySelector('h2')


  /*----- event listeners -----*/


  /*----- functions -----*/


  // GAME START
  init()