const scores = document.querySelector("#scores");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const flavour = document.querySelector(".flavour");

const container = document.querySelector(".container");

const choice = document.querySelectorAll("button");


const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    
    if (num === 0){
        return "rock";        
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};


let playerWins = 0;
let computerWins = 0;


const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        flavour.textContent = `You both chose the same player.`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerWins++;
            flavour.textContent = `You win - the stone injures the bird.`
        } else {
            computerWins++;
            flavour.textContent =  `You lose - the stone sinks in the water.`
        };
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            flavour.textContent =  `You win - the stone sinks in the water.`
        } else {
            computerWins++;
            flavour.textContent =  `You lose - the bird drinks the water.`
        };
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerWins++;
            flavour.textContent =  `You win - the bird drinks the water.`
        } else {
            computerWins++;
            flavour.textContent =  `You lose - the stone injures the bird.`
        };
    };
    
};


choice.forEach((button) => {
    button.addEventListener("click", () => {
        let computerTurn = getComputerChoice();
        let playerTurn = button.id;

        playRound(playerTurn, computerTurn);
        game();
    })
})


const game = () => {
    scores.textContent = `${playerWins} - ${computerWins}`;
    
    if (playerWins === 5) {
        header.textContent = "You won.";
        footer.textContent = "Refresh the page to play again.";
        container.style.display = "none";
        flavour.style.display = "none";
    } else if (computerWins === 5) {
        header.textContent = "You lost.";
        footer.textContent = "Refresh the page to play again."
        container.style.display = "none";
        flavour.style.display = "none";
    };
};