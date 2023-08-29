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
    const getPlayerChoice = window.prompt("Choose your move: ", "Rock, Paper, or Scissors?").toLowerCase()

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice;

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerWins++;
            return `You win - ${playerSelection} beats ${computerSelection}!`
        } else {
            computerWins++;
            return `You lose - ${computerSelection} beats ${playerSelection}!`
        };
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            return `You win - ${playerSelection} beats ${computerSelection}!`
        } else {
            computerWins++;
            return `You lose - ${computerSelection} beats ${playerSelection}!`
        };
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerWins++;
            return `You win - ${playerSelection} beats ${computerSelection}!`
        } else {
            computerWins++;
            return `You lose - ${computerSelection} beats ${playerSelection}!`
        };
    } else {
        return "Please write 'Rock', 'Paper', or 'Scissors' only!";
    };

};


const game = () => {
    for (let i = 0; i < 5; i++) {
        
            console.log(playRound());
        };

    

if (playerWins > computerWins) {
        return "You win the game! Refresh the page to let the computer have its rematch!";
    } else if (playerWins === computerWins) {
        return "The game ended in a tie! Refresh the page to try again!";
    } else {
        return "You lose! Refresh the page to try again!"
    }
};

console.log(game()); 