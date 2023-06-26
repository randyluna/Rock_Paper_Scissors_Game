let userScore=0;

const userScoreSpain=document.getElementbyId('user-score');
const computerScoreSpan= document.getElementbyId("computer-score");
const scoresDiv=document.querySelector(".scores");
const resultDiv=document.querySelector(".result>p");
const resetButton=document.getElementbyId("reset-button");

const rockDiv= document.getElementbyId("rock");
const paperDiv= document.getElementbyId("paper");
const scissorsDiv= document.getElementbyId("scissors");

//Computer generating random choices 

const getComputerChoice=()=>{
    const choiceList=[ "rock", "paper", "scissors"];
    const randomNumber= Math.floor(Math.random()*3)
    return (choiceList[randomNumber]);
};

//converting lowercase choice to uppercase
const converToUp=(word)=> {
    switch(word) {
        case "rock":
        return "Rock";
        break;
        case "paper":
        return "Paper";
        break;
        case "scissors":
            return "Scissors";
            break;
    }
};

//Output for user win 
const win=(userChoice, computerChoice)=>{
    userScore++;
    userScoreSpan.innerHTML=userScore;
    const randomWin=["beats", "destorys", "smashes", "obliterates"];
    const randomNumber= Math.floor(Math.random()*4);
    const winEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 6);
}

resultDiv.innerHTML = `${convertToUp(userChoice)} ${randomWin[randomNumber]} ${convertToUp(computerChoice)}. You win! ${winEmojis[randomNumberEmoji]}`;

document.getElementById(userChoice).classList.add('win-border')
setTimeout(() => document.getElementById(userChoice).classList.remove('win-border'), 600);
};

// Out for user Lose/computer win 
const lose=(userChoice, computerChoice)=>{
    computerScore++;
    computerScoreSpan.innerHTML=computerScore;
    const randomWin=["beats", "destorys", "smashes", "obliterates"];
    const randomNumber= Math.floor(Math.random()*4);
    const loseEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 7);
}

resultDiv.innerHTML = `${convertToUp(computerChoice)} ${randomWin[randomNumber]} ${convertToUp(userChoice)}. You lose! ${loseEmojis[randomNumberEmoji]}`;

document.getElementById(userChoice).classList.add('lose-border')
setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);
};

// Output for Tie 
const tie=(userChoice, computerChoice)=>{
    computerScore++;
    const tieEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 7);
resultDiv.innerHTML = `${convertToUp(computerChoice)} ${randomWin[randomNumber]} ${convertToUp(userChoice)}. You lose! ${loseEmojis[randomNumberEmoji]}`;

document.getElementById(userChoice).classList.add('lose-border')
setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);
};

//Comparing computerChoice and userChoice 
const game=(userChoice)=> {
    const computerChoice=getComputerChoice();

    switch(userChoice+computerChoice){
        case "paperrock":
            case "rockscissors":
                case "scissorspaper":
                    win(userchoice,computerChoice);
                    break;

                    case "rockpaper":
            case "scissorsrock":
                case "paperscissors":
                    lose(userChoice,computerChoice);
                    break;

                case "rockrock":
                case "paperpaper":
                case "scissorsscissors":
                    tie(userChoice, computerChoice);
                    break;
    }
};

const resetScores=() =>{
    computerScore=0;
    computerScoreSpan.innerHTML=computerScore
    userScore=0;
    userScoreSpan.innerHTML=userScore;
}

const main=()=> {
    rockDiv.addEventListener('click',()=> game("rock"));
    paperDiv.addEventListener('click',()=> game("paper"));
    scissorsDiv.addEventListener('click',()=> game("scissors"));
    resetDiv.addEventListener('click',()=> resetScores());
};

main();



