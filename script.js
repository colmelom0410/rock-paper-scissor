

// Create a function that will get computer's choice
function getComputerChoice(){
    // Generate a Random number from 1-3
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice = "";
    // IF randomNumber == 1 THEN Rock
    if(randomNumber == 1){
        computerChoice = "rock";
        return computerChoice;
    }
    // IF randomNumber == 2 THEN Paper
    else if(randomNumber == 2){
        computerChoice = "paper";
        return computerChoice;
    }
    // IF randomNumber == 3 THEN scissor
    else{
        computerChoice = "scissor";
        return computerChoice;
    }
}
// Declare global variable for the scores
let humanScore = 0;
let computerScore = 0;
// create a function that will compare the answer and decide the winner
function playRound(event){
    const p = event.target.id;
    const com = getComputerChoice();
    let win = true;
    let draw = false;
    
    // Check the Winner
        //If player wins
    if (p==="rock" && com==="scissor" || p==="paper" && com==="rock" || p==="scissor" && com==="paper"){
        win = true;
    }   
        //If computer wins
    else if (com==="rock" && p==="scissor" || com==="scissor" && p==="paper" || com==="paper" && p==="rock"){
        win = false;
    }
        //if draw
    else{
        win = false;
        draw = true;
    }
    if(win){
        winner.textContent = `YOU WIN! Player: ${p} | Computer: ${com}`
        humanScore++;
    }
    else if(!win){
        winner.textContent = `YOU LOSE! Player: ${p} | Computer: ${com}`
        computerScore++;
    }
    else if(draw){
        winner.textContent = `ITS A DRAW! Player: ${p} | Computer: ${com}`
    }
    if(humanScore == 5 || computerScore == 5){
        if (humanScore == 5){
            finalWinner.textContent = "PLAYER WIN!";
        }
        else if(computerScore == 5){
            finalWinner.textContent = "COMPUTER WIN!";
        }
        container.insertBefore(resetButton,result);
        rpsButtons.forEach(button => {
            button.disabled = true;
        })  
    }
    score.textContent = `SCORE: Human: ${humanScore} | Computer: ${computerScore}`;  
}
     

function reset(){
    winner.textContent = "";
    finalWinner.textContent = "";
    score.textContent = "";
    humanScore = 0;
    computerScore = 0;
    humanWin = false;
    computerWin = false;
    rpsButtons.forEach(button => {
        button.disabled = false;
    })
    resetButton.remove();  
}

//declare variables to get html elemets
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const result = document.querySelector("#result")
const btnContainer = document.querySelector(".btnContainer")
const rpsButtons = document.querySelectorAll(".rpsButtons")
const container = document.querySelector(".container")

//create elemets
const winner = document.createElement("div");
const score = document.createElement("p");
const finalWinner = document.createElement("p");
const resetButton = document.createElement("button");
finalWinner.style.cssText = "color: red; font-weight: bold;"


rockBtn.addEventListener("click",playRound);
paperBtn.addEventListener("click",playRound);
scissorBtn.addEventListener("click",playRound);
resetButton.addEventListener("click",reset);
resetButton.textContent = "reset";

result.appendChild(winner);
result.appendChild(score);
result.appendChild(finalWinner);


