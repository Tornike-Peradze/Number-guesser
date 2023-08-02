let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (
    Math.abs(Math.abs(humanGuess) - generateTarget()) >=
    Math.abs(Math.abs(humanGuess) - generateTarget())
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
