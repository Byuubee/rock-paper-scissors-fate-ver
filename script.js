const playerScoreContainer = document.getElementById('player-score');
const computerScoreContainer = document.getElementById('computer-score');
const saberBtn = document.getElementById('player-saber-servant');
const lancerBtn = document.getElementById('player-lancer-servant');
const archerBtn = document.getElementById('player-archer-servant');
const resultDiv = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

//score updates
let playerScore=0;
let computerScore=0;

function updatePlayerScore(){
    playerScore++;
    playerScoreContainer.innerHTML= playerScore;
    
}
function updateComputerScore(){
    computerScore++;
    computerScoreContainer.innerHTML=computerScore;
}

//listen for player choice
saberBtn.addEventListener('click', function(e){
        return playRound('saber',getComputerChoice());
});
archerBtn.addEventListener('click', function(e){
    return playRound('archer',getComputerChoice());
});
lancerBtn.addEventListener('click', function(e){
    return playRound('lancer',getComputerChoice());
});


//computer randomly chooses between saber archer or lancer
function getComputerChoice(){
    let result= Math.floor(Math.random()*3)+1;
    if(result==1){
        return "saber";   
    }
    else if (result==2){
        return "archer";
    }
    else{
        return "lancer";
    }
}
//function for playing one round
function playRound(playerChoice, computerChoice){
  
//if its a tie
    if (playerChoice === computerChoice){
            draw();
    }
//if player is the winner
    else if ((playerChoice == "saber") && (computerChoice =="lancer")){
            win();
    }
    else if ((playerChoice == "lancer") && (computerChoice =="archer")){
            win();
    }
    else if((playerChoice == "archer") && (computerChoice == "saber")){
            win();
    }
//if computer is the winner
    else if ((computerChoice =="saber") && (playerChoice =="lancer")){
            lose();
             }
    else if ((computerChoice =="lancer") && (playerChoice =="archer")){
            lose();
             }
    else if((computerChoice =="archer") && (playerChoice =="saber")){
            lose();
             }
    }

// function convertChoice(){


// }

function win(){
    updatePlayerScore();
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode("You win!"))
    resultText.after(para);
}
function lose(){
    updateComputerScore();
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode("You lose!"))
    resultText.after(para);
}
function draw(){
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode("It's a tie! They're evenly matched!"))
    resultText.after(para);

}

