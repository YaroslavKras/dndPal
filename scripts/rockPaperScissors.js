const SCISSORS= "SCISSORS";
const ROCK = "ROCK";
const PAPER = "PAPER";
const OPTIONS = [SCISSORS, ROCK, PAPER];
let computerChoice, playerChoice;

function play() {
    computerChoice = getRandomOption();
    console.log(computerChoice);
    do {
        playerChoice = prompt("Please choose: scissors, rock or paper?");
    } while (!(OPTIONS.includes(playerChoice.toUpperCase())));
    alert(calculateResult(computerChoice, playerChoice))
}

function getRandomNumberFromTo(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomOption(){
    let optionIndex = getRandomNumberFromTo(1, 4);
    return OPTIONS[optionIndex];
}

function getOptionToBeat(choice){
    switch (choice) {
        case SCISSORS:
            return PAPER;
        case ROCK:
            return SCISSORS;
        case PAPER:
            return ROCK;
        default:
            return null;
    }
}

function getOptionToLoseTo(choice){
    switch (choice) {
        case SCISSORS:
            return ROCK;
        case ROCK:
            return PAPER;
        case PAPER:
            return SCISSORS;
        default:
            return null;
    }
}
function calculateResult(aiChoice, userChoice){
    if(aiChoice === getOptionToBeat(userChoice.toUpperCase())){
        return "You won! " + userChoice + " beats " + aiChoice + "! ";
    } else if (aiChoice === getOptionToLoseTo(userChoice.toUpperCase())) {
        return "Lo-ho-hoo-ser! "  + aiChoice + " beats " + userChoice + "! "
    } else {
        return "Draw. How exciting."
    }
}
play()