const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const user = document.querySelector('.userScore');
const computer = document.querySelector('.computerScore');
const computerPick = document.querySelector('.computerPick');
const restartGameButton = document.querySelector('button');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

let roundNumber = 1;
let userScore = 0;
let computerScore = 0;

const round = document.querySelector('.round');

round.textContent = roundNumber;
user.textContent = userScore;
computer.textContent = computerScore;

rock.addEventListener('click', () => {
    const computerChoice = getRandomInt(3);

    if (computerChoice === 0) {
        // User picks rock and Computer picks rock
        computerPick.textContent = '✊'
    } else if (computerChoice === 1) {
        // User picks rock and Computer picks paper
        computerPick.textContent = '🖐️'
        computerScore++;
    } else {
        // User picks rock and Computer picks Scissors
        computerPick.textContent = '✌️'
        userScore++;
    }

    user.textContent = userScore;
    computer.textContent = computerScore;
    roundNumber++;
    round.textContent = roundNumber;
})

paper.addEventListener('click', () => {
    const computerChoice = getRandomInt(3);

    if (computerChoice === 0) {
       // User picks paper and Computer picks rock
       computerPick.textContent = '✊'
       userScore++;
    } else if (computerChoice === 1) {
       // User picks paper and Computer picks paper
       computerPick.textContent = '🖐️'
    } else {
        // User picks paper and computer picks scissors
        computerPick.textContent = '✌️'
        computerScore++;
    }

    user.textContent = userScore;
    computer.textContent = computerScore;
    roundNumber++;
    round.textContent = roundNumber;
})

scissors.addEventListener('click', () => {
    const computerChoice = getRandomInt(3);

    if (computerChoice === 0) {
       // User picks scissors and Computer picks rock
       computerPick.textContent = '✊'
       computerScore++;
    } else if (computerChoice === 1) {
       // User picks scissors and Computer picks paper
       computerPick.textContent = '🖐️'
       userScore++;
    } else {
        // User picks scissors and computer picks scissors
        computerPick.textContent = '✌️'
    }

    user.textContent = userScore;
    computer.textContent = computerScore;
    roundNumber++;
    round.textContent = roundNumber;
})

// Restart game
restartGameButton.addEventListener('click', () => {
    roundNumber = 1;
    userScore = 0;
    computerScore = 0;
    
    computerPick.textContent = '';
    round.textContent = roundNumber;
    user.textContent = userScore;
    computer.textContent = computerScore;
})