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

console.log("hello world!")