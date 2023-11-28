let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const scores = document.querySelector("#scores");

const playerTotal = document.createElement('div');
playerTotal.classList.add('playerTotal');
playerTotal.textContent = `YOUR SCORE = ${playerScore}`;

scores.appendChild(playerTotal);

const computerTotal = document.createElement('div');
computerTotal.classList.add('computerTotal');
computerTotal.textContent = `YOUR SCORE = ${computerScore}`;

scores.appendChild(computerTotal);

const rounds = document.querySelector('.rounds');
const bothChoices = document.querySelector('.bothChoices');
const result = document.querySelector('.result');

const arr = ["rock", "paper", "scissors"];

const rock = document.querySelector('#Rock');
rock.addEventListener('click', function() {
    game('rock');
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', function() {
    game('paper');
});

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', function() {
    game('scissors');
});

function game(playerChoice){
    if (playerScore === 5 || computerScore === 5){
        endGame();
        return;
    }

    let computerSelection = getComputerChoice(arr);

    let round = playRound(playerChoice, computerSelection);

    roundNumber += 1;

    if (round === "win"){
        playerScore += 1;
        result.textContent = "you won this round!";
    }
    else if (round === "lose"){
        computerScore += 1;
        result.textContent = "you lost this round!";
    }
    else {
        result.textContent = "you tied this round."
    }

    playerTotal.textContent = `Your Score = ${playerScore}`;
    computerTotal.textContent = `Computer's Score = ${computerScore}`;

    rounds.textContent = `Round ${roundNumber}`;
    bothChoices.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}.`;

    if (playerScore === 5 || computerScore === 5){
        endGame();
    }
}

function endGame(){
    if (playerScore > computerScore){
        rounds.textContent = " ";
        result.textContent = " ";
        bothChoices.textContent = "You are the winner";
    }
    else {
        rounds.textContent = '';
        result.textContent = '';
        bothChoices.textContent = "You lost";
    }
}

function playRound(playerChoice, computerSelection){
    if (playerChoice === computerSelection){
        return playerChoice = "tie";
    }
    else if ((playerChoice === "rock" && computerSelection === "scissors") || 
    (playerChoice === "paper" && computerSelection === "rock") || 
    (playerChoice === "scissors" && computerSelection === "paper")){
        return playerChoice = "win";
    }
    else {
        return playerChoice = "lose";
    }
}

function getComputerChoice(arr){
    return arr = arr[Math.floor(Math.random() * arr.length)];
}