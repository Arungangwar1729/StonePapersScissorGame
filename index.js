"use strict";
let playerScore = 0;
let computerScore = 0;
function palyerRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `you selected${playerSelection} computer selected ${computerSelection}: you win`
    );
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(
      `you selected${playerSelection} computer selected ${computerSelection}: you win`
    );
  } else {
    console.log(`DRAW`);
  }
}

const playerSelection = prompt(`choose between rock paper scissors`);
const computerSelection = function getcomputerChoice() {
  const choice = Math.trunc(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else choice === 3;
  {
    return "scissors";
  }
};
palyerRound(playerSelection, computerSelection);
