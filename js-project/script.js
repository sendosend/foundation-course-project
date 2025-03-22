function getComputerChoice (){
    let computerChoice = Math.random();
    if (computerChoice < 1/3) {
        return 'rock';
    } else if (computerChoice < 2/3) {
        return 'paper';
    } else {
        return 'scissors'; //no arrays
    }
}

function getHumanChoice () {
    let humanChoice = prompt('Pick rock, paper or scissors: ').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        return 'invalid choice!';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'invalid choice') {
        console.log('Invalid choice! Please pick rock, paper or scissors!');
        return 'Invalid choice!';
    }


    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}!`);
        return "It's a tie!";
}

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return 'You win!';
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return 'You lose!';
    }
}


for (let i = 0; i < 5; i ++) {
    let result = playRound(getHumanChoice(), getComputerChoice());
    console.log(`Round ${i + 1}: ${result}`);
    console.log(`Score: ${humanScore} - ${computerScore} computer`);
}

console.log(`Final score: Human ${humanScore} - ${computerScore}`);

if (humanScore > computerScore) {
    alert("Congratulations! You are the winner! 🏆");
} else if (humanScore < computerScore) {
    alert("You are a loser! ❌"); 
} else {
    alert("It's a tie! ☺️");
}


