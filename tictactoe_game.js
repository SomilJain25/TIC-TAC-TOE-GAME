let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_button");
let newGamebtn=document.querySelector("#new_btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame =()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        
        }
        box.disabled = true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
   
    });
    
});

const gamedraw=()=>{
    msg.innerText="Game was DRAW!! , TRY AGAIN";
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};


const checkwinner = ()=>{
    for(let pattern of winpattern){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1===position2 && position2===position3){
                showwinner(position1);
                return true;
            }
        }
        
    }
};


newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);