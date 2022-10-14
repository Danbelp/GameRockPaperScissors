let playerChoice;
let playerSelection;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3+1)
    computerSelection = computerChoice == 1 ? "Rock": computerChoice == 2 ? "Paper" : "Scissors"
    return console.log("The computer Choice is " + computerSelection );
}

function playerInput(){
    playerSelection = prompt (playerChoice = alert("what's your choice?"))
    userControlInput()
    return playerChoice = console.log("You'r choice is " + playerSelection);
}

function userControlInput (){
    if (playerSelection==("rock" || "Rock" || "ROCK")){
        return playerSelection = "Rock"}
    if (playerSelection==("scissors" || "Scissors" || "SCISSORS")){
        return playerSelection = "Scissors"}
    if (playerSelection==("paper" || "Paper" || "SCISSORS")){
        return playerSelection = "Paper" }
}

confirm ("Do you want to play rock paper or scissors?");
console.info("Lets play Rock Paper Scissors");


console.log (playerInput())
console.log (getComputerChoice())

/**
let playerSelection = playerChoice==("rock" || "Rock" || "ROCK")
let playerSelection = playerChoice==("scissors" || "Scissors" || "SCISSORS")
let playerSelection = playerChoice==("paper" || "Paper" || "SCISSORS")
*/

function playRound () {
    if (playerSelection=="Paper" && computerSelection=="Rock"){
        console.log ("Human player wins!")
    } else if(playerSelection=="Scissors" && computerSelection=="Rock"){
        console.log ("Computer player wins!")
    } else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        console.log ("Human player wins!")
    } else if (playerSelection=="Paper" && computerSelection=="Scissors"){
        console.log ("Computer player wins!")
    } else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        console.log ("Human player wins!")
    } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        console.log ("Computer player wins!")
    } else {    
        console.log ("Draw")
    }
} 

playRound()