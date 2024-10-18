const playerChoice = document.getElementById('player-display');
const computerChoice = document.getElementById('computer-display');

const playerScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

const gameText = document.getElementById('result');

let player;
let computer;

let playerScore = 0;
let computerScore = 0;

function userChoice(choice){
    console.log(choice);
    if (choice == 'rock'){
        player = 'rock';
        playerChoice.innerHTML = '🪨';
    }
    else if (choice == 'paper'){
        player = 'paper';
        playerChoice.innerHTML = '🧻';
    }
    else if (choice == 'scissors'){
        player = 'scissors';
        playerChoice.innerHTML = '✂️';
    }
    computerPlaying();
}

computerPlaying = () => {
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        computer = 'rock';
        computerChoice.innerHTML = '🪨';
    }
    else if (random == 1){
        computer = 'paper';
        computerChoice.innerHTML = '🧻';
    }
    else if (random == 2){
        computer = 'scissors';
        computerChoice.innerHTML = '✂️';
    }
    checkWinner();
}

checkWinner = () => {
    if (player == computer){
        gameText.innerHTML = 'It is a tie!';
    }

    else if (player == 'rock' && computer == 'scissors'){
        gameText.innerHTML = 'You win!';
        playerWin();
    }

    else if (player == 'paper' && computer == 'rock'){
        gameText.innerHTML = 'You win!';
        playerWin();
    }

    else if (player == 'scissors' && computer == 'paper'){
        gameText.innerHTML = 'You win!';
        playerWin();
    }

    else {
        gameText.innerHTML = 'You Lose!';
        computerWin();
    }
}

playerWin = () => {
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
}

computerWin = () => {
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
}