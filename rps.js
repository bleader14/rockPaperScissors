// This function returns a random integer, either 0, 1 or 2 and will correspond to rock paper or scissors
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        
        default:
            return "error";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Make your choice");
    let compChoice = getComputerChoice();

    if (humanChoice === compChoice) {
        return "draw";
    }

    switch (humanChoice) {
        case "Rock":
            if (compChoice === "Paper") {
                return "Computer wins";
            } else {
                return "User wins";
            }
        case "Paper":
            if (compChoice === "Scissors") {
                return "Computer wins";
            } else {
                return "User wins";
            }
        case "Scissors":
            if (compChoice === "Rock") {
                return "Computer wins";
            } else {
                return "User wins";
            } 
        default:
            return "No valid option entered";
    }
}
console.log("hello world!")