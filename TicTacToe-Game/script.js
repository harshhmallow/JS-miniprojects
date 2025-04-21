let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");

let turnO=true; //initially for player choosing O
let count=0; //to keep track of draw match

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach(box => {
    box.addEventListener("click",() => {
        //console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        count++;
        box.disabled=true;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const enabledBoxes= () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText = "";
    }
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled="true";
        
    }
    
};
const resetGame = () => {
    turnO=true;
    count =0;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

const gameDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disabledBoxes();

};


resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);



const showWinner = (winner) => {
    msg.innerText=(`${winner} is the winner, congratulations!`);
    msgContainer.classList.remove("hide");
};

const checkWinner = () =>{
    for (let pattern of winPatterns) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1===pos2 && pos2===pos3) {
                // console.log(pos1,pos2,pos3);
                // console.log("We got a winner.");
                showWinner(pos1);
                return true;
            }
        }
    }
};
    

