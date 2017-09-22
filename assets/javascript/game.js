var wins=0;
var numGuess=9;
var guesses=[];

var selectedWord = [];
var placeholder = [];

//check to see if letter exist with array selctedWord (push word from randomWordChoice function to selctedWord array and separate into letters, maybe the split
//if it does then examine the indices of the letter occurance(s) and replace the '_' with letter on placeholder
// assign the value of the placeholder to a variable and send it to html

// *********FUNCTIONS ********

// computer selects word from word bank
function randomWordChoice() {
  var veganWordBank= ["kale", "bean", "pear", "peanut", "hummmus"];

  var veganWordchoice = veganWordBank[Math.floor(Math.random() * veganWordBank.length)];

  return veganWordchoice;
  };

  
  // Convert word into comma separated format & hyphens
  function selectedWordToArray(){
    var word = randomWordChoice();

    toHyphens(word);
// have arr in name 
    selectedWord= Array.from(word);
    
    return selectedWord;
    console.log(word);
  }
  

 function toHyphens(wordToConvert) {
  for (var i= 0; i < wordToConvert.length; i++){
    placeholder.push("-")
    }

  };
    // use a for loop to iterate through eat letter, validate its not already been guessed and push to its position on the placeholder array.
  function loopThroughWord(letter){
    for (var i = 0; i < selectedWord.length; i++){
      if(selectedWord[i] === letter ){
        // placeholder.splice(i, 0, letter);
        placeholder[i] = letter;
      }
    }
  };

function render(){
  document.getElementById("numberOfGuesses").innerHTML = numGuess;
  document.getElementById("guessBank").innerHTML = guesses;
  document.getElementById("fillInBlanks").innerHTML = placeholder;

}

function reset(){
    numGuess=9;
    guesses=[];
    selectedWord = [];
    placeholder = [];
    selectedWordToArray();
    confirm("Press spacebar to play");
}

// LOOK up function syntax********
function win(){
  document.getElementById("wins").innerHTML = wins;

  reset();
}

// function loose(){
//   prompt("You loose");
// }

// function decreaseNumGuess(){
//   numGuess
// }

// ******** MAIN SECTION**********
reset();
console.log(selectedWord);

    // on each keystroke, check 1.) has this letter been guessed? If YES alert user. If NO push userGuess to array so that the user can see they guessed the letter. also if YES 
  document.onkeyup=function(event) {
    
    var userGuess= event.key

    if (guesses.indexOf(userGuess) === -1 && numGuess > 0) {
       guesses.push(userGuess);
       loopThroughWord(userGuess);
       numGuess--;
       render();

         if(selectedWord.toString() === placeholder.toString()){
          alert("You win");
          wins++;
          win();
          reset();
        }
      }
      else if( numGuess < 1) {
        alert("game over");
        reset();
      }

    else {
      alert("already guessed that letter")
    }
   
    
    console.log("guesses " + guesses);
    console.log("placeholder " + placeholder);
    console.log("selected word " + selectedWord);
    console.log(selectedWord.toString() === placeholder.toString())
    console.log(numGuess);
    console.log(wins);
  // add conditional logic for counting wins, losses, update number of guesses
  // create reset function
  // create function for updating DOM

  };



 





