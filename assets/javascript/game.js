var wins=0;
var currentWord="";
var numGuess=9;
var guessesRemain=[];


// computer selects word from word bank
function randomWordChoice(){
  var veganWordBank= ["kale", "bean", "pear", "peanut"];

  var veganWordchoice = veganWordBank[Math.floor(Math.random() * veganWordBank.length)];

  return veganWordchoice;
  };

function textToHyphens(){
  var food = randomWordChoice();
  
  var hypenArr=[];

  for(var i = 0; i <food.length; i++){
    hypenArr.push("-");
  }

  return hypenArr;

  document.getElementByID("currentWord").innerHTML =textToHyphens();
  };


document.onkeyup= function(event){
  userGuess= event.key;
  };



console.log(textToHyphens());
