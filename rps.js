

function getComAnswer(){
    let rn = Math.floor(Math.random() * 3);
    let rpsword = "";
    if(rn === 0){
        rpsword = "rock";
    }
    if(rn === 1){
        rpsword = "paper";
    }
    if(rn === 2){
        rpsword = "scissors";
    }
    return rpsword
}

function userRock(){
    let UserAnwser = 'rock';
    let computerAnswer = getComAnswer();
    if(UserAnwser === computerAnswer){
        document.getElementById("results").innerHTML = "its a draw. you both chose " + computerAnswer;
    }
    else if(UserAnwser === 'rock' & computerAnswer === 'paper'){
        document.getElementById("results").innerHTML = "You lose. computer chose: " + computerAnswer;
    }
    else if(UserAnwser === 'rock' & computerAnswer === 'scissors'){
        document.getElementById("results").innerHTML =" You win. computer chose: " + computerAnswer;
    }
}
function userPaper(){
    let UserAnwser = 'paper';
    let computerAnswer = getComAnswer();
    if(UserAnwser === computerAnswer){
        document.getElementById("results").innerHTML = "its a draw. you both chose " + computerAnswer;
    }
    else if(UserAnwser === 'paper' & computerAnswer === 'scissors'){
        document.getElementById("results").innerHTML = "You lose. computer chose: " + computerAnswer;
    }
    else if(UserAnwser === 'paper' & computerAnswer === 'rock'){
        document.getElementById("results").innerHTML =" You win. computer chose: " + computerAnswer;
    }
}
function userScissors(){
    let UserAnwser = 'scissors';
    let computerAnswer = getComAnswer();
    if(UserAnwser === computerAnswer){
        document.getElementById("results").innerHTML = "its a draw. you both chose " + computerAnswer;
    }
    else if(UserAnwser === 'scissors' & computerAnswer === 'rock'){
        document.getElementById("results").innerHTML = "You lose. computer chose: " + computerAnswer;
    }
    else if(UserAnwser === 'scissors' & computerAnswer === 'paper'){
        document.getElementById("results").innerHTML =" You win. computer chose: " + computerAnswer;
    }
}