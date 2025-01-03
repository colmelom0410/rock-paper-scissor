

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
    // Declare variable for humanChoice
    let humanChoice;
    let invalid = true;
    while (invalid){
        // Get the humanChoice value using Prompt
        humanChoice = prompt("Rock, Paper, Scissor?: ");
        // Capitalize the choices to make it easier to compare to computer choice
        humanChoice = (humanChoice.charAt(0)).toUpperCase() + humanChoice.slice(1).toLowerCase();
        // IF humanChoice is within the choices(Rock,Paper,Scissor) THEN return humanChoice ELSE try again
        if (humanChoice == "Rock" || humanChoice == "Paper" || humanChoice == "Scissor"){
            invalid = false;
        }
        
        else{
            alert("Rock, Paper, or Scissor ONLY!");  
        }
    }
    return humanChoice;
        
}
// Declare global variable for the scores
let humanScore = 0;
let computerScore = 0;
// create a function that will compare the answer and decide the winner
function playRound(humanChoice,computerChoice){
    let p = humanChoice;
    let com = computerChoice;
    // Check the Winner
    if (p==="Rock" && com==="Scissor"){
        console.log(`You win! ${p} beats ${com}`);
        humanScore++;
    }
    else if (p==="Paper" && com==="Rock"){
        console.log(`You win! ${p} beats ${com}`);
        humanScore++;
    }
    else if (p==="Scissor" && com==="Paper"){
        console.log(`You win! ${p} beats ${com}`);
        humanScore++;
    }
    else if (com==="Rock" && p==="Scissor"){
        console.log(`You Lose! ${com} beats ${p}`);
        computerScore++;
    }
    else if (com==="Scissor" && p==="Paper"){
        console.log(`You Lose! ${com} beats ${p}`);
        computerScore++;
    }
    else if (com==="Paper" && p==="Rock"){
        console.log(`You Lose! ${com} beats ${p}`);
        computerScore++;
    }
    else{
        console.log(`Draw! Player:${p} vs Computer:${com}`);
    }
}

// Create a function that will start the game repeatedly 5 times
function playGame(){
    let humanChoice;
    let computerChoice;
    for (count = 1;count <= 5;++count){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log(`Round:${count}`);
        console.log(`human:${humanScore} Computer:${computerScore}`);
    }
    if (humanScore>computerScore){
        console.log("Final Winner: Player!");
    }
    else if (computerScore > humanScore){
        console.log("Final Winner: Computer!");
    }
    else{
        console.log("DRAWWWW!!!");
    }
    playAgain();
}
// Create a function to play again
function playAgain(){
    let again = true;
    while (again){
        again = confirm("Do you want to play again?");
        if (again){
            playGame();
        }
    }
    console.log("Thanks for playing!")
}

playGame();
