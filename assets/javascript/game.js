
//var for wins
//var for losses
//var for guessesLeft
//var for youGuessSoFar

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetter = [];

// references to HTML
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var youGuessSoFarText = document.getElementById("your-guess-so-far");

var restart = function () {
  guessedLetter = [];
  guessesLeft  = 9;
  computerGuess = options[Math.floor(Math.random() * options.length)];
  
}


var computerGuess = options[Math.floor(Math.random() * options.length)];
console.log(computerGuess);

document.onkeyup = function (event) {
  var userGuess = event.key;
  guessedLetter.push(" " + userGuess);



  if (userGuess === computerGuess) {

    wins++;
    alert("You won!");
    restart();

  } else if (userGuess !== computerGuess) {
    guessesLeft--;

    if(guessesLeft === 0) {
    
       alert("You lost!");
      restart();
      losses++;
    } 
    
  } 
  

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses left: " + guessesLeft;
  youGuessSoFarText.textContent = "Your guess so far: " + guessedLetter;

}

