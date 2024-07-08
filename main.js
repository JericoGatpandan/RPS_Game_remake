function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector(".winLose");
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");
const start = document.querySelector(".start");
const humanChoiceImg = document.querySelector("#humanChoice")
const computerChoiceImg = document.querySelector("#computerChoice")


function playGame(){
rockbtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperbtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    const choices = {
        rock: './assets/rock.png',
        paper: './assets/paper.png',
        scissors: './assets/scissors.png'
    }
    humanChoiceImg.src = choices[humanChoice];
    computerChoiceImg.src = choices[computerChoice];

    if (humanChoice === computerChoice) {
        result.textContent = "IT'S A TIE";
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        result.textContent = "YOU WIN";
        humanScore = humanScore + 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        result.textContent = "YOU LOSE";
        computerScore = computerScore + 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.textContent = "YOU LOSE";
        computerScore = computerScore + 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        result.textContent = "YOU LOSE";
        computerScore = computerScore + 1;
    }
    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
}

}
start.addEventListener('click', () => {
    playGame();
    start.textContent = "PLAY AGAIN";
})


