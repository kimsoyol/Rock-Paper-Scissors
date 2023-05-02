// getting random selection for computer
function getComputerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// play a round and return winner
function playRound(playerSelection, computerSlection) {
  const cs = computerSlection;
  const ps = playerSelection.toLowerCase();
  if (cs == ps) {
    return `Its a tie. You both choose ${
      ps.charAt(0).toUpperCase() + ps.slice(1)
    }.`;
  } else if (cs == "rock") {
    if (ps == "paper") {
      return "You win! Paper beats Rock";
    } else {
      return "Computer win! Rock beats Scissors";
    }
  } else if (cs == "paper") {
    if (ps == "scissors") {
      return "You win! Scissors beats paper";
    } else {
      return "Computer win! Paper beats Rock";
    }
  } else if (cs == "scissors") {
    if (ps == "rock") {
      return "You win! Rock beats Scissors";
    } else {
      return "Computer win! Scissors beats Paper";
    }
  }
}

function reset() {
  let resetBtn = document.createElement("button");
  resetBtn.textContent = "Play Again";
  resetBtn.classList = "reset-btn";
  btn.appendChild(resetBtn);

  resetBtn = document.querySelector(".reset-btn");
  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;

    score.textContent = `You - ${playerScore}:${computerScore} - Computer`;
    result.textContent = "Result";
    round.textContent = `Round: ${gameCount}`;

    btn.removeChild(resetBtn);
  });
}

let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function game() {
  if (playerScore !== 5 && computerScore !== 5) {
    gameCount += 1;
    round.textContent = `Round: ${gameCount}`;
    let winner = playRound(this.id, getComputerSelection());

    switch (winner.slice(0, 3)) {
      case "You":
        if (playerScore == 4) {
          playerScore += 1;
          score.textContent = `You - ${playerScore}:${computerScore} - Computer`;
          result.textContent = "You Win!";
          reset();
          break;
        } else {
          playerScore += 1;
          score.textContent = `You - ${playerScore}:${computerScore} - Computer`;
          result.textContent = winner;
          break;
        }
      case "Com":
        if (computerScore == 4) {
          computerScore += 1;
          score.textContent = `You - ${playerScore}:${computerScore} - Computer`;
          result.textContent = "You Lose!";
          reset();
          break;
        } else {
          computerScore += 1;
          score.textContent = `You - ${playerScore}:${computerScore} - Computer`;
          result.textContent = winner;
          break;
        }
      default:
        result.textContent = winner;
        break;
    }
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector(".result");
const round = document.querySelector(".round");
const score = document.querySelector(".score");
const btn = document.querySelector(".btn");

rockBtn.addEventListener("click", game);
paperBtn.addEventListener("click", game);
scissorsBtn.addEventListener("click", game);
