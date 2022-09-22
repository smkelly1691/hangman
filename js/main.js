/*----- constants -----*/
// Selection of words game will choose from at random for the player to guess
const  WORDS = [
    "javascript", 
    "object",
    "array",
    "function",
]

// String for each letter of the alphabet to create player choices
const LETTERS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"
]

/*----- state variables -----*/
let word, 
    guesses, 
    numGuesses, 
    numGuessesLeft, 
    numCorrectGuesses,
    numChar

/*----- cached elements  -----*/
const numGuessesLeftEl = document.getElementById("numGuessesLeft");
const messageDisplayEl = document.querySelector('h2')


/*----- event listeners -----*/
resetBtnEl.addEventListener("click", handleResetClick)
letterEl.addEventListener("click", handleLetterClick)

/*----- functions -----*/
// Create initial game state (Initialize Game)
function init() {
    word = ""
    guesses = [null]
    numGuesses = 0
    numGuessesLeft = 10
    numCorrectGuesses = 0
    numChar = 0
    render()
}

function render() {
// Choose a word from the WORDS array at random for the player to guess
const randomWord = Math.floor(Math.random() * this.WORDS.length);
return this.WORDS[randomWord];



// Make user input uppercase and check whether it is a single numeric value 
// and contained within the random word generated
function (checkLetter)



// Generate underscores that match the word length



}

function handleResetClick() {
    init()
}

// GAME START
    init()