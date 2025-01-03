

// Create a function that will get computer's choice
function getComputerChoice(){
    // Generate a Random number from 1-3
    let randomNumber = Math.floor(Math.random()*3) + 1
    // IF randomNumber == 1 THEN Rock
    if(randomNumber == 1){
        return console.log("Computer: ROCK")
    }
    // IF randomNumber == 2 THEN Paper
    else if(randomNumber == 2){
        return console.log("Computer: Paper")
    }
    // IF randomNumber == 3 THEN scissor
    else{
        return console.log("Computer: Scissor")
    }
}
// Create a function that will get the user's choice
// create a function that will compare the answer and decide the winner

getComputerChoice()