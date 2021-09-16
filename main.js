function game(){
    //play a 5 round game that keeps score and reports a winner or loser at the end.
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++){
        //get input from the user.
        let playerSelection = prompt(`Round ${i}. Please enter paper, rock or scissors`);  
        //display the results of each round
        roundResultMessage = playRound(playerSelection, computerPlay());
        console.log(roundResultMessage);
        //keep score. Only increases if player wins (tie case considered).
        if(roundResultMessage.indexOf(`You Win`) === 0) {
            playerScore++ ;
        } else if(roundResultMessage.indexOf(`You Lose`) === 0){
            computerScore++;
        }

    }
    
    //Game over. Print winner.
    console.log(`Game Over ---------------------------
         You Won ${playerScore}/5 rounds.`);

    if (playerScore > computerScore){
        console.log(`VICTORY !!`);
    }else if (playerScore = computerScore) {
        console.log(`It´s a tie.`);   
    }else if (playerScore < computerScore) {
        console.log(`You lost :(`);
    }
}

function playRound(playerSelection, computerSelection) {
    /* function that plays a single round
    **input** playerSelection*, computerSelection
        *case-insensitive (users can input rock, ROCK, RocK or any other variation).
    **output** a string that declares the winner of the round : "You Lose! Paper beats Rock"*/
    
    //case-insensitive user input
    playerSelection = playerSelection.toLowerCase();

    //create matrix [playerSelection computerSelection winner] for all possibilities
    matrix = [[`rock`,`rock`,`tie`], [`rock`,`paper`,`paper`], [`rock`,`scissors`,`rock`],
              [`paper`,`paper`,`tie`], [`paper`,`rock`,`paper`], [`paper`,`scissors`,`scissors`],
              [`scissors`,`rock`,`rock`], [`scissors`,`paper`,`scissors`],[`scissors`,`scissors`,`tie`]]
    
    //search in matrix vector that contains current playerSelection and computerSelection to get winner
    let winner;
    for (let i = 0; i < 9; i++) {
        if(playerSelection === matrix[i][0] && computerSelection === matrix[i][1]){
            winner = matrix[i][2];
        break;
        }
    } 
    //declare winner
    if(winner === `tie`){
        return `It´s a tie.`;
    } else if(playerSelection === winner) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection !== winner){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else{
        return `Game error`
    }
}

function computerPlay (){
    /*computer plays its turn
    **output** randomly either ‘Rock’, ‘Paper’ or ‘Scissors*/

    const options = [`rock`,`paper`,`scissors`];

    //Random random = new Random();
    const index = getRandomInt(3);
    return options[index];
}

function getRandomInt(max) {
  //inclusive of 0, but not 'max'
  return Math.floor(Math.random() * max);
}

//test game function
game();
//test function playRound 
/*
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
//*/