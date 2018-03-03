let words = [ "git", "commit", "documentobjectmodel", "dorks", "array", "flexbox", "scottawesome"];
let lettersGuessed = [];
let numberSpaces = [];
let wrongLetters = [];
let guessRemain = 10;
let wins = 0; 
let randomNumber ;
let computerChoice ;
let computerArray ;

function init() {
  numberSpaces = [];
  guessRemain = 10;
  document.getElementById("guesses-remaining").innerHTML = guessRemain;
  lettersGuessed = [];
  document.getElementById("already-guessed").innerHTML = lettersGuessed;
  randomNumber = Math.floor((Math.random() * 5));
  computerChoice = words[randomNumber]; 
  computerArray = Array.from(computerChoice);
  console.log(computerArray);
  for (var i=0; i < computerArray.length; i++) {
    numberSpaces.push("_");
    document.getElementById("blanks").innerHTML = numberSpaces.join(" ");
  }
}
document.onkeyup = function(event) { 
  userText = event.key;
    if (computerArray.includes(userText) === true) {
      for (var i=0; i < computerArray.length; i++) {
        if (computerArray[i] === userText) {
        numberSpaces[i] = userText; 
        document.getElementById("blanks").innerHTML = numberSpaces.join(" ");
        } 
      }
    } else {
      lettersGuessed.push(userText);
      console.log(lettersGuessed);
      document.getElementById("already-guessed").innerHTML = lettersGuessed;
      console.log(computerArray.includes(userText));
      guessRemain--;
      document.getElementById("guesses-remaining").innerHTML = guessRemain;
    }
  if (guessRemain === 0 ) {
    // alert("you lose");
    init();
  }
  if (computerArray.toString() == numberSpaces.toString()) {
    wins++;
    document.getElementById("win-win").innerHTML = wins;
    init();
  } 


}