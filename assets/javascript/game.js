var wins=0;
var numGuess=9;
var guesses=[];

var selectedWord = [];
var placeholder = [];

//check to see if letter exist with array selctedWord (push word from randomWordChoice function to selctedWord array and separate into letters, maybe the split
//if it does then examine the indices of the letter occurance(s) and replace the '_' with letter on placeholder
// assign the value of the placeholder to a variable and send it to html


// computer selects word from word bank
function randomWordChoice(){
  var veganWordBank= ["kale", "bean", "pear", "peanut"];

  var veganWordchoice = veganWordBank[Math.floor(Math.random() * veganWordBank.length)];

    return veganWordchoice;
  };

  
  // Convert word into comma separated format
  function selectedWordToArray(){
    var word = randomWordChoice();

    selectedWord= Array.from(word);
    
    return selectedWord;
  }
    console.log(selectedWordToArray());
    console.log(selectedWord);

    // on each keystroke, check 1.) has this letter been guessed? If YES alert user. If NO push userGuess to array so that the user can see they guessed the letter. also if YES 
  document.onkeyup=function(event){
    
    var userGuess= event.key

    if (guesses.indexOf(userGuess) === -1){
       guesses.push(userGuess);
       loopThroughWord(userGuess);
    } 
    else {
      alert("already guessed that letter")
    }
    console.log(guesses);
    console.log(placeholder);
    console.log(selectedWord);
  };

   

// use a for loop to iterate through eat letter, validate its not already been guessed and push to its position on the placeholder array.
function loopThroughWord(letter){
  for (var i = 0; i < selectedWord.length; i++){
    if(selectedWord[i] === letter ){
      placeholder.splice(i, 0, letter);
    }
  }
};

// Need to create a reset function






