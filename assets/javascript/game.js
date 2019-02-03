var computerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var yourGuessesSoFar = document.getElementById("yourGuessesSoFar");
var winTotal = 0;
var lossTotal = 0;
var reset = 9;
var guessesRemaining = reset;
var guesses = [];
var randomComputerLetter = function() {
  randomLetter =
    computerLetters[Math.floor(Math.random() * computerLetters.length)];
  return randomLetter;
};
var display = function() {
  wins.innerHTML = "Wins: " + winTotal;
  losses.innerHTML = "Losses: " + lossTotal;
  guessesLeft.innerHTML = "Guesses Left: " + guessesRemaining;
  yourGuessesSoFar.innerHTML = "Your Guesses So Far: " + guesses;
};
var userWin = function(userLetter) {
  return userLetter === newLetter;
};
var userLoss = function() {
  return guessesRemaining === 0;
};
var newLetter = randomComputerLetter();
display();
var restartGame = function() {
  guesses = [];
  guessesRemaining = reset;
  newLetter = randomComputerLetter();
};
document.onkeyup = function(event) {
  var userLetter = event.key;
  guessesRemaining--;
  guesses.push(userLetter);
  if (userWin(userLetter)) {
    winTotal++;
    restartGame();
  }
  if (userLoss()) {
    lossTotal++;
    restartGame();
  }
  display();
};
