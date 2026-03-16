let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const tesoura = document.querySelector("#scissors");
const result = document.querySelector("#result");

// Logica do vencedor

function winner() {
    if(humanScore === 5) {
        console.log("Humans Win!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        console.log("Computer Win!");
        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice() {
    const str = ["rock", "paper", "scissors"];
    return str[Math.floor(Math.random() * str.length)];
}

// Botao de escolha e logica do usuario

paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "paper"; 
    const resultado = playRound(humanSelection, computerSelection);
    console.log(resultado);

    winner();
});

rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "rock";
    const resultado = playRound(humanSelection, computerSelection);
    console.log(resultado);

    winner();
});

tesoura.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "scissors";
    const resultado = playRound(humanSelection, computerSelection);
    console.log(resultado);
    winner();
});

// Logica do Jogo

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

        return `You Win! ${humanChoice} beats ${computerChoice}. Placar: ${humanScore} a ${computerScore}`;
        
    } else if (humanChoice === computerChoice) {
        return `Draw! Both chose ${humanChoice}. Placar: ${humanScore} a ${computerScore}`;
        
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}. Placar: ${humanScore} a ${computerScore}`;
    }
}