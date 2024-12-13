let gameseq = [];
let userseq = [];

let btns = ["red","yellow","blue","green"];
let highestlevel = 0;
let started = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game has started");
        started = true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText =`level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}
function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        highest();
        h2.innerText = `game over!  your score was ${level}Press any key to start  again. highest level: ${highestlevel}`;
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
 
    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    userseq=[];
    gameseq=[];
    level=0;
}
function highest(){
    if(level>highestlevel){
        highestlevel = level;
    }
}
