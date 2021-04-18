//variables
let playerScore = 0;
let compScore = 0;
let roundNum = 0;

//DOM cache
const playerBoard = document.getElementById("player");
const compBoard = document.getElementById("computer");

const playerWins = document.getElementById("playernum");
const compWins = document.getElementById("compnum");

const winnerAnnounce = document.getElementById("winner");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const compAnnounce = document.getElementById("compannounce");
const resetBtn = document.getElementById("resetbtn");

function reset() {
  playerScore = 0;
  compScore = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  resetBtn.disabled = true;
  playerWins.innerText = playerScore;
  compWins.innerText = compScore;
  console.log("reset")
  winnerAnnounce.innerText = "The Winner is..."
}

function endGame() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  resetBtn.disabled = false;
  resetBtn.addEventListener('click', () => reset());
  console.log("end")
  resetBtn.classList.add('white-glow');
  setTimeout(() => resetBtn.classList.remove('white-glow'), 2000);
}

function draw(playerChoice, computerChoice) {
  const playerChoice_box = document.getElementById(playerChoice);
  winnerAnnounce.innerText = "It's a Draw!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
  playerChoice_box.classList.add('gray-glow');
  setTimeout( () => playerChoice_box.classList.remove('gray-glow'), 1000);
}

function win(playerChoice, computerChoice) {  
  playerScore++;
  const playerChoice_box = document.getElementById(playerChoice);
  playerWins.innerText = playerScore;
  winnerAnnounce.innerText = "You Won!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
  playerChoice_box.classList.add('green-glow');
  setTimeout( () => playerChoice_box.classList.remove('green-glow'), 1000);
  playerBoard.classList.add('green-glow');
  setTimeout(() => playerBoard.classList.remove('green-glow'), 1000);
  if (playerScore == 5) {
    winnerAnnounce.innerText = "Congrats! You won the game! Play again!";
    endGame();
    }
  }

function lose(playerChoice, computerChoice) {
  compScore++
  const playerChoice_box = document.getElementById(playerChoice);
  compWins.innerText = compScore;
  winnerAnnounce.innerText = "The Computer Won!"
  compAnnounce.innerText = `The Computer chose ${computerChoice}.`;
  playerChoice_box.classList.add('red-glow');
  setTimeout( () => playerChoice_box.classList.remove('red-glow'), 1000);
  compBoard.classList.add('red-glow');
  setTimeout(() => compBoard.classList.remove('red-glow'), 1000);
  if (compScore == 5) {
    winnerAnnounce.innerText = "Oh no, you lost! Play again!";
    endGame();
    }
  }

function randomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
  }

function game(playerChoice) {
  let playerScore = 0;
  let compScore = 0;
  const computerChoice = randomChoice();
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

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));