let images = Array.from(document.querySelectorAll("[data-choice]"));
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let draw = document.querySelector(".draw");
let computerChoiceImage = document.querySelector(".computerChoice")
let playerChoiceImage = document.querySelector(".playerChoice")




images.forEach(image => {
    image.addEventListener("click",e => {
    let playerSelection = image.dataset.choice;  
    getComputerChoice() 
    playRound(playerSelection, computerSelection)
    console.log (computerSelection)
    choicesImages(computerSelection,playerSelection)
    })
});

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3+1)
    computerSelection = computerChoice == 1 ? "Rock": computerChoice == 2 ? "Paper" : "Scissors"
    return computerSelection;
}



function choicesImages(computerSelection, playerSelection){
    if(computerSelection=="Rock"){
        computerChoiceImage.setAttribute("src", "images/R.png")
    } else if (computerSelection=="Scissors"){
        computerChoiceImage.setAttribute("src", "images/S.png")
    } else {
        computerChoiceImage.setAttribute("src", "images/P.png")
    }
    if(playerSelection=="Paper"){
        playerChoiceImage.setAttribute("src", "images/P.png")
    } else if (playerSelection=="Scissors"){
        playerChoiceImage.setAttribute("src", "images/S.png") 
    } else { 
        playerChoiceImage.setAttribute("src", "images/R.png") 
}}


/* 
confirm ("Do you want to play rock paper or scissors?");
console.info("Lets play Rock Paper Scissors");
console.log (playerInput())
console.log (getComputerChoice())
*/



function playRound (playerSelection, computerSelection) {
    if (playerSelection=="Paper" && computerSelection=="Rock"){
        playerScore.innerText= parseInt(playerScore.innerText) + 1
    } else if(playerSelection=="Scissors" && computerSelection=="Rock"){
        computerScore.innerText= parseInt(computerScore.innerText) + 1
    } else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        playerScore.innerText= parseInt(playerScore.innerText) + 1
    } else if (playerSelection=="Paper" && computerSelection=="Scissors"){
        computerScore.innerText= parseInt(computerScore.innerText) + 1
    } else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        playerScore.innerText= parseInt(playerScore.innerText) + 1
    } else if (playerSelection=="Rock" && computerSelection=="Paper"){
        computerScore.innerText= parseInt(computerScore.innerText) + 1
    } else {    
        draw.innerText= parseInt(draw.innerText) + 1
    }
} 

