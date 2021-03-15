//тоглогчдын ээлж хадаглах хувьсагч хэрэтэй
//onoog tsugluuldeg huwisagch 
// eeljiin onoo huwsagch 
//
var Activplayer = 0;
var scorce = [0 , 0];
var roundscore=0 ;
// var diceNumber =Math.floor(Math.random() * 6)+1; 
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

var DiceDom=document.querySelector(".dice");
DiceDom.style.display="none";
document.querySelector(".btn-roll").addEventListener("click" , function (){
    var diceNumber = Math.floor(Math.random() * 6)+1 ;
    DiceDom.style.display="block";
    DiceDom.src = "dice-"+diceNumber+".png";
  
//buusan too ni 1 ees ylgaatai toglogchiin eeljiin onoog uurchlun nemegduulj eelj solin 
if(diceNumber !== 1) {
    roundscore = roundscore + diceNumber;
    document.getElementById("current-"+Activplayer).textContent = roundscore ;
}

     else {
          roundscore=0;
        document.getElementById("current-" + Activplayer).textContent = 0;
  
           Activplayer === 0 ? (Activplayer = 1) : (Activplayer = 0);
  
         document.querySelector(".player-0-panel").classList.toggle("active");
  
         document.querySelector(".player-1-panel").classList.toggle("active");

         DiceDom.style.display="none";
        }
});
