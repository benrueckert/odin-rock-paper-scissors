function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (random) {
        case 0: 
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, scissors?");
    humanChoice.toLowerCase().trim();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {
    console.log(`Your Choice: ${humanChoice} \nComputer Choice: ${computerChoice}`)
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats scissors!");
        humanScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats rock!");
        computerScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a Draw!");
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats rock!");
        humanScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats paper!");
        computerScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a Draw!");
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats paper!");
        humanScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats scissors!");
        computerScore++;
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a Draw!");
        console.log(`Current Score: ${humanScore} : ${computerScore} (You : Computer)`)
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Game Finished – You win! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
    else if (humanScore < computerScore) {
        console.log(`Game Finished – You lose! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
    else if (humanScore == computerScore) {
        console.log(`Game Finished – It's a Draw!! Score: ${humanScore} : ${computerScore} (You : Computer)`);
    }
}

playGame();