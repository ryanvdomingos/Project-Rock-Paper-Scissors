let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const str = ["rock", "paper", "scissors"];
    return str[Math.floor(Math.random() * str.length)];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    return choice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You Win!");
            humanScore++;
        } else if (humanChoice === computerChoice ) {
            console.log("Draw!");
        } else {
            console.log("You Lose!");
            computerScore--;
        }
        
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function playGame(playRound, humanScore, computerScore) {
    for(let i = 0; playRound <= 5; i++) {
        playRound(humanSelection, computerSelection);
        if (humanScore > computerScore) {
            console.log("Human Wins");
        } else {
            console.log("Computer Win");
        }
    }
}

