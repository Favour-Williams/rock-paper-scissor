//getting the id's and storing them in variables 
let userScore = 0;
let playerScore = 0;
const userEl = document.getElementById("user_score");
const compEl = document.getElementById("comp_score");
const scoreBoard = document.getElementById("score_board");

const resultText = document.getElementById("text");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorEl = document.getElementById("scissor");

const plapicked = document.getElementById("what_player_picked");
const compicked = document.getElementById("what_computer_picked");


const restartEl = document.getElementById("restart");

//Creating a funtion for getting the computer choice
function compPicked(){
    const coption = ["rock", "paper", "scissor"];
    const pickedNum = Math.floor(Math.random() * coption.length);
    return coption[pickedNum];
}

function win(user, computer){
    userScore++;
    userEl.innerHTML = userScore;
    compEl.innerHTML = playerScore;
    resultText.innerHTML = "YOU WIN 😌";
}
function lose(user, computer){
    playerScore++;
    compEl.innerHTML = playerScore;
    userEl.innerHTML = userScore;
    resultText.innerHTML = "YOU LOSE 🤣";
}
function draw(user, computer){
    resultText.innerHTML = "IT IS A DRAW 🙄"
}

function game(playerpicked){
    const compChoice = compPicked();
    switch(playerpicked + compChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(playerpicked, compChoice);
            break;
        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            lose(playerpicked, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(playerpicked, compChoice);
            break;
    }
    if(playerpicked == "paper"){
        plapicked.innerHTML = "🤚";
    }
    else if(playerpicked == "rock"){
        plapicked.innerHTML = "✊";
    }
    else if(playerpicked == "scissor"){
        plapicked.innerHTML = "✌️";
    }
    else{
        console.log(1);
    }


    if(compChoice == "paper"){
        compicked.innerHTML = "🤚";
    }
    else if(compChoice == "rock"){
        compicked.innerHTML = "✊";
    }
    else if(compChoice == "scissor"){
        compicked.innerHTML = "✌️";
    }
    else{
        console.log(1);
    }
}
 //
function main(){
    //just like onclick but instead it is in js not html
    rockEl.addEventListener("click", function(){
        game("rock");
    })
    paperEl.addEventListener("click", function(){
        game("paper");
    })
    scissorEl.addEventListener("click", function(){
        game("scissor");
    })
    restartEl.addEventListener("click", function(){
        reStart();
    })
}
main();

function reStart(){
    userEl.innerHTML = 0;
    compEl.innerHTML = 0;
    playerScore = 0;
    userScore = 0;
    resultText.innerHTML = "PICK 😐";
    plapicked.innerHTML = "✊";
    compicked.innerHTML = "✊";
}
