let userScore=0;
let compScore=0;

let u=document.querySelector("#user");
let c=document.querySelector("#computer");

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
    
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "rgb(44, 162, 70)";
        userScore= userScore+1;
    }
    else {
        
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#b1473f";
        compScore=compScore+1;
    }
    u.innerText=userScore;
    c.innerText=compScore;

}
const playGame = (userChoice) => {
   
    const compChoice= genCompChoice();
    

    if (userChoice===compChoice) {
        
        msg.innerText="Draw match! Play again."
        msg.style.backgroundColor="#f6d365";
    }
    else {

        let userWin=true;
        if(userChoice==="rock") {
            userWin= compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper") {
            userWin= compChoice==="scissors"?false:true;
        }
        else {
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

    

    
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});