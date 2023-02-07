let value=confirm("Welcome! Let's Start our Game");

if(value===true){
    let turn=new Audio("ting.mp3");
let gameOver=new Audio("gameover.mp3");
let isGameOver=false;
let player="X";

// function to change turn
const changeTurn=()=>{
    return player==="X" ? "0" : "X";
}

// function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[[0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],];

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px";
            gameOver.play();
        }
    })
}

// Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=player;
            player=changeTurn();
            turn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText="Turn for " + player;
            }
        }
    })
})

// logic for reset button
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
    })
    player="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + player;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
})
}

else {
    alert("Okay! See You Soon. Have a Nice Day");
}