<h1>Hangman</h1>
<h2>Hangman is a word-guessing game where the player chooses letters of the alphabet to populate a random word. The goal is to populate all the letters in the word prior to running out of guesses.</h2>

<h3>Game Images</h3>
<ul>
  <li><a href="https://i.imgur.com/RIrn9h7.png"><img src="https://i.imgur.com/RIrn9h7.png" title="source: imgur.com" /></a></li>
  <li>As a user, I want to see a gallow and a blank space where the hangman will be built as wrong guesses are chosen</li>
  <li>As a user, I want to see how many guesses I have left until I lose the game and the hangman will be complete</li>
  <li>As a user, I want to see blank spaces/dashes that populate when I guess a correct letter of the word.</li>
  <li>As a user, I want to be able to click a reset button so I can reset the game and play again at any time.</li>
  <li>As a user, I want to see all the possible letters I can choose from (alphabet) at the bottom of the page as buttons that when clicked either populate a letter in the word above or tell me i've already guessed that letter and to try again.</li>
</ul>


<h3>Design (UI)</h3>
<p>Minimalist design as if drawn on piece of paper (old school)</p>
<p>Display messages will be simple and tell the player what to do next</p>

<h3>Pseudocode</h3>
<h4>When we start a game of Hangman:</h4>
  <ul>
    <li>Initialize board state to be empty (hangman image/letters) [init()]</li>
    <li>Generate word from random list of words provided [generateWord()]</li>
    <li>Display initial message of instructions [displayMessage()]</li>
    <li>Render game state to DOM (blank board/playing space) [render()]</li>
  </ul>
<h4>When player picks a letter:</h4>
  <ul>
    <li>Update board state [handleClick()]</li>
    <li>Check if letter has been picked already [checkLetter()]</li>
    <li>Check if letter is contained within generated word [checkWord()]</li>
    <li>Populate word space if letter is within word [populateWord()]</li>
    <li>If incorrect guess, update hangman (add body part) [updateHangman()]</li>
    <li>Display message of result and instructions [displayMessage()]</li>
    <li>Update number of guesses left (-1) [updateNumGuesses()]</li>
    <li>Check the state of the game (win/loss) [checkWin()]</li>
    <li>Render game state to the Dom [render()]</li>
  </ul>
<h4>When game is over:</h4>
  <ul>
    <li>Display message of result [displayMessage()]</li>
    <li>ReInitialize the state of the game if the player clicks the reset button [init()]</li>
  </ul>

<h3> Wireframe Image</h3
<a href="https://imgur.com/8u0I1b2"><img src="https://i.imgur.com/8u0I1b2.jpg" title="source: imgur.com" /></a>

<h3>Application State Data</h3>
    <ul>What does the application need to "remember" throughout its execution:</ul>
      <li>words</li>
        <ul>
          <li>We will use an array with words that can be pulled at random to choose a word for the player to guess</li>
        </ul>
      <li>guesses</li>
        <ul>
          <li>The application must keep track of how many guesses are left and update the hangman picture and the value of number of guesses left on the screen
          </li>
          <li>We will use a variable called guessesLeft that decreases with each guess the player makes and if reaches zero will cause the game to be over</li>
        </ul>
      <li>letters</li>
      <ul>
        <li>We will use an array with all the letters from the alphabet which represent the letters a player can choose from to guess the letter</li>
      </ul>