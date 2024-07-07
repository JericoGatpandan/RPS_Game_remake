function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.33){
        return "rock";
    } else if (randomNumber < 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector(".winLose");


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, ComputerChoice) {
    if (humanChoice == "rock" && ComputerChoice == "scissors"){
        console.log("YOU WIN");
        humanScore++;
    }
    else if (humanChoice == "paper" && ComputerChoice == "rock"){
        console.log("YOU WIN");
        humanScore++;
    }
    else if (humanChoice == "scissors" && ComputerChoice == "paper"){
        console.log("YOU WIN");
        humanScore++;
    }
    else if (humanChoice == ComputerChoice){
        console.log("IT'S A TIE")
    }
    else {
        console.log("YOU LOSE");
        computerScore++;
    }
}

rockbtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperbtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});


