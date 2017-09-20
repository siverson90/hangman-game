var wins=0;
var numGuess=9;
var guessesRemain=[];

var selectedWord = [];
var placeholder = ["_","_","l","l"];

//check to see if letter exist with array selctedWord (push word from randomWordChoice function to selctedWord array and separate into letters, maybe the split
//if it does then examine the indices of the letter occurance(s) and replace the '_' with letter on placeholder
// assign the value of the placeholder to a variable and send it to html


// computer selects word from word bank
function randomWordChoice(){
  var veganWordBank= ["kale", "bean", "pear", "peanut"];

  var veganWordchoice = veganWordBank[Math.floor(Math.random() * veganWordBank.length)];

    return veganWordchoice;
  };

    console.log(randomWordChoice());
  
  function selectedWordToArray(){
    var word = randomWordChoice();

    selectedWord= Array.from(word);
    
    return selectedWord;
  }
    console.log(selectedWordToArray());
    console.log(selectedWord);

// function textToHyphens(){
//   var food = randomWordChoice();
  
//   var hypenArr=[];

//   for(var i = 0; i <food.length; i++){
//     hypenArr.push("-");
//   }

//   return hypenArr;

//   document.getElementByID("currentWord").innerHTML =textToHyphens();
//   };



