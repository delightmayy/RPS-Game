
let playerDisplay = document.querySelector(".player")
let computerDisplay = document.querySelector(".computer")
let winnerDisplay = document.querySelector(".winner")
let computerOption = document.querySelector(".computeroption")
let countP= 0
let countC= 0
console.log( typeof countP);

document.querySelector("#paper").addEventListener("click", playerpaper) ;
document.querySelector("#rock").addEventListener("click", playerrock) ;
document.querySelector("#scissors").addEventListener("click", playerscissors) ;

function playerpaper(){
    let player=`paper`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];
    let countP1= 0
     

    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
        
    }else if(computer == "rock") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` player win`
        countP1 +=1
        
        playerDisplay.innerHTML=countP1
       
    
    } else if (computer == "scissors"){
        computerOption.innerHTML=` Computer option: ${computer}`
        winnerDisplay.innerHTML= ` computer win`
    
    }
}
function playerrock(){
    let player=`rock`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];
     
    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
    }else if(computer == "paper") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` computer win`
    
    } else if (computer == "scissors"){
        computerOption.innerHTML=` Computer option: ${computer}`
        winnerDisplay.innerHTML= ` player win`
    
    }
}
function playerscissors(){
    let player=`scissors`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];

    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
    }else if(computer == "rock") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` computer win`
    
    } else if (computer == "paper"){
        computerOption.innerHTML=` Computer option: ${computer}`
        winnerDisplay.innerHTML= ` player win`
    
    }
}







