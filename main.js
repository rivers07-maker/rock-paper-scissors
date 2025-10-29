let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const paraOutputRound = document.querySelector('.output-round');
const spanPlayerScore = document.querySelector('#player-score');
const spanComputerScore = document.querySelector('#computer-score');
const h2OutputWinner = document.querySelector('.output-winner');

function getComputerChoice() {
  const arrOfChoices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return arrOfChoices[randomNum];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    paraOutputRound.textContent = `It's a tie! You both chose ${playerChoice}`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    paraOutputRound.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    paraOutputRound.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }
}

function updateScore(playerScore, computerScore) {
  spanPlayerScore.textContent = playerScore;
  spanComputerScore.textContent = computerScore;
}

function checkWinner(playerScore, computerScore) {
  if (playerScore > computerScore && playerScore === 5) {
    h2OutputWinner.textContent = `Congratulations! You've won the game.`;
  } else if (computerScore > playerScore && computerScore === 5) {
    h2OutputWinner.textContent = `Sorry, the computer has won the game. Better luck next time!`;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.id}`;
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkWinner(playerScore, computerScore);
  })
});