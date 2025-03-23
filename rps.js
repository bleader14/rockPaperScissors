
let userScore = 0;
let compScore = 0;

// This function returns a random integer, either 0, 1 or 2 and will correspond to rock paper or scissors
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        
        default:
            return "error";
    }
}

function getHumanChoice() {
    let choice = prompt("Make your choice").toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
        return choice
    } else {
        return "invalid"
    }
}

function getScore() {
    return `Human = ${userScore} Computer = ${compScore}`;
}

function playRound(humanChoice, compChoice) {
    let winner = ""
    if (humanChoice === "invalid") {
        return "Invalid user choice"
    }

    if (humanChoice === compChoice) {
        return `The result is a draw: ${getScore()}` ;
    }

    switch (humanChoice) {
        case "ROCK":
            if (compChoice === "PAPER") {
                ++compScore;
                winner = "Computer";
            } else {
                ++userScore;
                winner = "User";
            }
            break
        case "PAPER":
            if (compChoice === "SCISSORS") {
                ++compScore;
                winner = "Computer";
            } else {
                ++userScore;
                winner = "User";
            }
            break
        case "SCISSORS":
            if (compChoice === "ROCK") {
                ++compScore;
                winner = "Computer";
            } else {
                ++userScore;
                winner = "User";
            }
            break
    }
    return `${winner} wins this round: ${getScore()}`;
}

function playGame() {
    //initialise scores
    userScore = 0;
    compScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
    }
    
    console.log(getScore());

    if (userScore === compScore) {
        return "The match is a draw";
    } else if (userScore > compScore) {
        return "You win this match";
    } else {
        return "The computer wins this match";
    }
}