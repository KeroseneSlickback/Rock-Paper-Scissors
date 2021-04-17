/*
Psuedo-Code:

Wait for user input, direct input into game rules
Create computer logic for random choice

Depending on win/loss/draw: Announce winner/draw, update score boards,
and announce computer's choice

Highlight throw button if it was correct, wrong, or draw
Highlight scoreboard when score increases one second after match conclusion

At end of round, announce grand winner of the matches
Highlight Play Again! button in a pulse at the end
Reset game rules


Step by step:

X DOM cache for input buttons
X Set variables for scores and rounds

Reset function

Highlight player's choice

Update scoreboards, announce winner/draw

Computer choice

Game rules, win/loss/draw

Button inputs to functions


*/

//variables
let playerScore = 0;
let compScore = 0;
let roundNum = 0;

//DOM cache
const playerBoard = document.getElementById("player");
const compBoard = document.getElementById("computer");

const playerWins = document.getElementById("playernum");
const totalRounds = document.getElementById("totalnum");
const compWins = document.getElementById("compnum");

const winnerAnnounce = document.getElementById("winner");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const compAnnounce = document.getElementById("compannounce");
const resetBtn = document.getElementById("resetbtn");

function RandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function draw(playerChoice, computerChoice) {
  winnerAnnounce.innerText = "It's a draw!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
}

function win(playerChoice, computerChoice) {  
  playerScore++;
  playerWins.innerText = playerScore;
  winnerAnnounce.innerText = "The User Won!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
}

function lose(playerChoice, computerChoice) {
  compScore++
  compWins.innerText = compScore;
  winnerAnnounce.innerText = "The Computer Won!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
}

function game(playerChoice) {
  const computerChoice = RandomChoice();
  switch (playerChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(playerChoice, computerChoice);
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(playerChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(playerChoice, computerChoice);
      break;
  }
}

rockBtn.addEventListener('click', () => game("rock"))
paperBtn.addEventListener('click', () => game("paper"))
scissorsBtn.addEventListener('click', () => game("scissors"))
// resetBtn.addEventListener('click', )