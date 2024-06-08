let btns = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let winner =document.querySelector(".win");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");

let playerX= true;
let player0=false;

winner.style.display="none";



btns.forEach(btn=>{
btn.addEventListener("click",()=>{
    if(playerX===true){
        btn.innerText="X";
        btn.disabled=true;
        playerX=false;
        player0=true;
    
    }

    else if(player0===true){
        btn.innerText="0";
        btn.disabled=true;
        playerX=true;
        player0=false;
       
    }
    WinPattern();
    
});



});

let WinPattern = ()=>{
    winPattern=[[0,1,2],[0,3,6],[6,7,8],[2,5,8],[1,4,7],[3,4,5],[0,4,8],[2,4,6]];
    for (let win of winPattern){        
        if(((btns[win[0]].innerText === btns[win[1]].innerText) && (btns[win[2]].innerText === btns[win[1]].innerText)) &&(
            btns[win[0]].innerText !="" && btns[win[1]].innerText !="" && btns[win[0]].innerText !="") && btns[win[0]].innerText ==="X"){
            winner.innerText="Victory! player 1 win";
            winner.style.display="block";
            Disable();
        }
        else if(((btns[win[0]].innerText === btns[win[1]].innerText) && (btns[win[2]].innerText === btns[win[1]].innerText)) &&(
            btns[win[0]].innerText !="" && btns[win[1]].innerText !="" && btns[win[0]].innerText !="") && btns[win[0]].innerText ==="0"){
            winner.innerText= "Victory! player 2 win";
            winner.style.display="block";
            Disable();
        };   
        
    }

}
function Disable(){
    btns.forEach(btn=>btn.disabled=true);
}
reset.addEventListener("click", ()=>{
    
    btns.forEach(btn=>{btn.innerText="";
        btn.disabled=false;
        winner.style.display="none";
        winner.innerText="";
});

});

newGame.addEventListener("click", ()=>{
    
    btns.forEach(btn=>{btn.innerText="";
        btn.disabled=false;
        winner.style.display="none";
        winner.innerText="";
});

});