

// Create a function that will get computer's choice
function getComputerChoice(){
    // Generate a Random number from 1-3
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice = "";
    // IF randomNumber == 1 THEN Rock
    if(randomNumber == 1){
        computerChoice = "Rock";
        return computerChoice;
    }
    // IF randomNumber == 2 THEN Paper
    else if(randomNumber == 2){
        computerChoice = "Paper";
        return computerChoice;
    }
    // IF randomNumber == 3 THEN scissor
    else{
        computerChoice = "Scissor";
        return computerChoice;
    }
}
// Create a function that will get the user's choice
function getHumanChoice(){
    // Get the human choice using Prompt
    let humanChoice = prompt("Rock, Paper, Scissor?: ");
    // Capitalize the choices to make it easier to compare to computer choice
    humanChoice = (humanChoice.charAt(0)).toUpperCase() + humanChoice.slice(1).toLowerCase();
    // IF humanChoice is within the choices(Rock,Paper, Scissor) THEN return humanChoice ELSE try again
    if (humanChoice == "Rock" || humanChoice == "Paper" || humanChoice == "Scissor"){
        return humanChoice;
    }
    else{
        return "Rock, Paper, or Scissor ONLY!";
    }
        
}

// create a function that will compare the answer and decide the winner

console.log(getComputerChoice())
console.log(getHumanChoice())