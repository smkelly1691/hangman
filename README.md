<h1>Hangman</h1>
<h2>User Stories, Wireframe, and Pseudocode for Hangman Game</h2>

<h3>User Stories / MVP</h3>
<ul>
  <li>As a user, I want to be able to see a display message that tells me what to do next (ex. Pick a letter!, Try again!, Good Job! Pick another Letter!, etc. )</li>
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
