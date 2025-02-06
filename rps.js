let UserAnwser = prompt("pease choose rock paper or sizzors");
function getComAnswer(){
    let rn = Math.floor(Math.random() * 3);
    let rpsword = "";
    if(rn === 1){
        rpsword = "rock";
    }
    if(rn === 2){
        rpsword = "paper";
    }
    if(rn === 3){
        rpsword = "sizzors";
    }
    return rpsword
}
let computerAnswer = getComAnswer();
console.log(computerAnswer);