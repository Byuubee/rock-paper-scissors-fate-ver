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
        if (playerScore >= 5 || computerScore >= 5) return;
        return playRound('Saber',getComputerChoice());
});
archerBtn.addEventListener('click', function(e){
    if (playerScore >= 5 || computerScore >= 5) return;
    return playRound('Archer',getComputerChoice());
});
lancerBtn.addEventListener('click', function(e){
    if (playerScore >= 5 || computerScore >= 5) return;
    return playRound('Lancer',getComputerChoice());
});


//computer randomly chooses between saber archer or lancer
function getComputerChoice(){
    let result= Math.floor(Math.random()*3)+1;
    if(result==1){
        return "Saber";   
    }
    else if (result==2){
        return "Archer";
    }
    else{
        return "Lancer";
    }
}
//function for playing one round
function playRound(playerChoice, computerChoice){
  
//if its a tie
    if (playerChoice === computerChoice){
            draw();
    }
//if player is the winner
    else if ((playerChoice == "Saber") && (computerChoice =="Lancer")){
            win(playerChoice, computerChoice);
    }
    else if ((playerChoice == "Lancer") && (computerChoice =="Archer")){
            win(playerChoice, computerChoice);
    }
    else if((playerChoice == "Archer") && (computerChoice == "Saber")){
            win(playerChoice, computerChoice);
    }
//if computer is the winner
    else if ((computerChoice =="Saber") && (playerChoice =="Lancer")){
            lose(playerChoice, computerChoice);
             }
    else if ((computerChoice =="Lancer") && (playerChoice =="Archer")){
            lose(playerChoice, computerChoice);
             }
    else if((computerChoice =="Archer") && (playerChoice =="Saber")){
            lose(playerChoice, computerChoice);
             }
    }

// function convertChoice(){


// }

function win(playerChoice,  computerChoice ){
    updatePlayerScore();
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode(`You win! ${playerChoice} killed ${computerChoice}!`));
    resultText.after(para);
    checkWinner();
}
function lose(playerChoice, computerChoice){
    updateComputerScore();
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode(`Argh.. Computer Wins! ${computerChoice} killed ${playerChoice}!`));
    resultText.after(para);
    checkWinner();
}
function draw(){
    const para = document.createElement('p');
    para.classList = 'result-item';
    para.appendChild(document.createTextNode("It's a tie! They're evenly matched!"));
    resultText.after(para);

}

function checkWinner(){
    if (playerScore >= 5){
        const para = document.createElement('p');
        para.classList = 'result-item-winner';
        para.appendChild(document.createTextNode("Congratulations! You obtained the Holy Grail!"));
        resultText.after(para);
    }
    if (computerScore >= 5){
        const para = document.createElement('p');
        para.classList = 'result-item-winner';
        para.appendChild(document.createTextNode("You died. Computer wins the Holy Grail War."));
        resultText.after(para);
    }
}

