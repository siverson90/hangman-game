# hangman-game

Theme:
Vegan Friendly Foods

1. User should see starting screen, with a message asking them to press anyway to get started.
2. The screen contains 
    1. Wins
    2. the current word, 
    3. hyphens representing the length of the word
    4. number of guesses the user has remaining
    5. The letters that the user has already guessed
3. When user strokes keyboard the game will
    1. Check to see if that letter has already been guessed
        1. If letter has been guessed don’t log letter and decrement number of guesses
    2. if letter hasn’t been selected
        1. check to see if letter is contained in selected word
            1. If letter is contained in word then show on screen where letter is shown (be careful of multiples)
            2. If letter isn’t contained in word then place letter on already guessed and decrement number of guesses by 1
    3. User wins when all hyphens are filled in with letter.

un-seen Logic:
Create an array that contains all letter in alphabet assign to var alphabet

Create an array that contains possible words and assign to var veganWordBank

Create var wins to keep count of wins
Create an empty array and assign var guessedLetters

Create a global var for guesses remaining named guessesRemain

On page load, have computer pick a random number that is assigned to a word in veganWordBank. Random number will need to correspond to an index number. Assign to currentWord[i]

Create function to contain onkeyup event, that holds the letter pressed by user

Pass in currentWord[i]

Uses indexOf to see if that letter is contained in varGuessedLetters

If letter is not contained, pass

seen logic-

Use document.getElementById for wins

Current word:
* wrap each hyphen in a span
* 
