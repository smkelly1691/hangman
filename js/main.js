/*----- constants -----*/
const  WORDS = [
    "javascript", 
    "object",
    "array",
    "function",
    "array",
];

/*----- state variables -----*/
let randomNum, //random number that will aid in grabbing a random word to guess
    secretWord, //random secret word selected by computer
    underscore, //used to represent the word to guess with an array of underscores
    playerGuess, //letter selected by player from letter button
    answerArray, //array of stored guesses
    numCorrectGuesses //number of correct guesses
    

/*----- cached elements  -----*/
const underScoreEl = document.getElementsByClassName("underscore");
const displayMessageEl = document.getElementsByClassName("display-message");
const resetBtnEl = document.getElementById("reset");
const startbtnEl = document.getElementsByClassName("start");
const goodGuessEl = document.getElementsByClassName("good-guess");
const badGuessEl = document.getElementsByClassName("bad-guess");
const boardEl = document.getElementById("alphabet");


/*----- event listeners -----*/
resetBtnEl.addEventListener("click", handleResetClick);
boardEl.addEventListener("click", (event) => {
  let letter = event.target;
  let char = String.fromCharCode(letter);
  if (secretWord.indexOf(char) > -1) {
    right.push(char);
    underscore[secretWord.indexOf(char)] = char;
    underScoreEl[0].innerHTML = underscore.join('');
    underScoreEl[0].innerHTML = rightWord.join('');
  if(underscore.join('') == secretWord) {
    displayMessageEl.innerText = ("You Win!");
    }
  }
  else {
    wrongWord.push(char);
    badGuessEl[0].innerHTML = wrongWord.join('');
  }
  });

/*----- functions -----*/
// Create initial game state (Initialize Game)
let init = () => {
  //pick a random word from words array
   randomNum = Math.floor(Math.random() * WORDS.length);
    secretWord = WORDS[randomNum];
    console.log(secretWord);
    remainingLetters = secretWord.length;
    rightWord = [];
    wrongWord = [];
    underscore = [];
    render();
  }

  // handleResetClick () 
  // init();



  let render = () => {
    if (remainingLetters > 0) {
      displayMessageEl.innerText = 
      ("Pick a letter! Or press the Reset button to stop playing");
      if (playerGuess === null) {
        displayMessageEl.innerText = ("Pick a letter button");
       } else if (playerGuess.length !==1) {
        displayMessageEl.innerText = ("Please enter a single letter");
        } else {
          for (let j = 0; j < secretWord.length; j++) {
            answerArray.join[playerGuess];
            answerArray[j] = playerGuess; remainingLetters--;
          }
        }
      }
    }


// GAME START
    init()