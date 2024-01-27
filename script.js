let playerDisplay = document.querySelector(".player");
let computerDisplay = document.querySelector(".computer");
let winnerDisplay = document.querySelector(".winner");
let computerOption = document.querySelector(".computeroption");
let quitbtn = document.querySelector("#quit-btn");
finalDisplay = document.querySelector("#scores");
pickDisplay = document.querySelector("#pickDisplay");
btn = document.querySelectorAll(".btn-sm");
let countP = 0;
let countC = 0;
console.log(typeof countP);
quitbtn.onclick = () => {
  let closeme = window.confirm("Do you want to exit this game?");

  if (closeme) {
    window.close();
  }
};

/// set and display the overall winner

 function finalWinner() {
  if (countC == 14) {
        finalDisplay.innerHTML = "you loose";
        finalDisplay.style = "font-family :sans sherif; font-style:italic";
        pickDisplay.style = "display:none";
        computerOption.style = "display:none";
        setTimeout(playagain, 300);
        function playagain() {
            alert("Play again?");
            if (playagain) {
                location.reload();
            }
        }
    }else if(countP == 14) {
        finalDisplay.innerHTML = "you win";
        finalDisplay.style = "font-family :sans sherif; font-style:italic";
        pickDisplay.style = "display:none";
        computerOption.style = "display:none";
        setTimeout(playagain, 300);
            function playagain() {
            alert("Play again?");
            if (playagain) {
                location.reload();
            }
        }
    }
}; 


document.querySelector("#paper").addEventListener("click", playerpaper) ;
document.querySelector("#rock").addEventListener("click", playerrock) ;
document.querySelector("#scissors").addEventListener("click", playerscissors) ;

function playerpaper(){
    let player=`paper`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];
    
    finalWinner()
     
    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
        
    }else if(computer == "rock") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` player win`
        countP +=1
        playerDisplay.innerHTML=countP
       
    
    } else if (computer == "scissors"){
        computerOption.innerHTML= `Computer option: ${computer}`
        winnerDisplay.innerHTML= `computer win`
        countC +=1
        computerDisplay.innerHTML= countC
    }
}

function playerrock(){
    let player=`rock`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];
    finalWinner()
     
    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
    }else if(computer == "paper") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` computer win`
        countC +=1
        computerDisplay.innerHTML= countC
    
    } else if (computer == "scissors"){
        computerOption.innerHTML=` Computer option: ${computer}`
        winnerDisplay.innerHTML= ` player win`
        countP +=1
        playerDisplay.innerHTML=countP
    
    }
}

function playerscissors(){
    let player=`scissors`
    let opt = ["rock", "paper", "scissors"];
    let cOption = Math.floor(Math.random() * 3);
    let computer = opt[cOption];
    finalWinner()

    if (computer==player) {
       winnerDisplay.innerHTML= "Draw! try again" ;
        computerOption.innerHTML=` Computer option: ${computer}`
        
        
    }else if(computer == "rock") {
        computerOption.innerHTML=` Computer option: ${computer}`   
        winnerDisplay.innerHTML=  ` computer win`
        countC +=1
        computerDisplay.innerHTML= countC
    
    } else if (computer == "paper"){
        computerOption.innerHTML=` Computer option: ${computer}`
        winnerDisplay.innerHTML= ` player win`
        countP +=1
        playerDisplay.innerHTML=countP
    
    }
}

