//тоглогчдын ээлж хадаглах хувьсагч хэрэтэй
//onoog tsugluuldeg huwisagch 
// eeljiin onoo huwsagch 
newGame();
var Activplayer , score , roundscore;
var DiceDom=document.querySelector(".dice");











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
        eeljSolihFunctoin();

         DiceDom.style.display="none";
        }});
        document.querySelector(".btn-hold").addEventListener("click",function(){

            scorce[Activplayer]=scorce[Activplayer] + roundscore
            document.getElementById("score-"+Activplayer).textContent = scorce[Activplayer];
            
if(scorce[Activplayer] >= 20)
{
document.getElementById("name-"+Activplayer).textContent="!!!winner!!!"
document.querySelector(".player-" + Activplayer +"-panel").classList.add('winner');
document.querySelector(".player-" + Activplayer +"-panel").classList.remove("active");

}
else
{
    eeljSolihFunctoin();
}

           





    })
    //eelj solih functoin
    function eeljSolihFunctoin(){
        roundscore=0;
        document.getElementById("current-" + Activplayer).textContent = 0;

           Activplayer === 0 ? (Activplayer = 1) : (Activplayer = 0);
  
         document.querySelector(".player-0-panel").classList.toggle("active");
  
         document.querySelector(".player-1-panel").classList.toggle("active");

    }
    //new game iig tohiruulah
    document.querySelector(".btn-new").addEventListener('click',newGame);
    function newGame(){
        Activplayer = 0;
       scorce = [0 , 0];
       roundscore=0 ;
        
      // var diceNumber =Math.floor(Math.random() * 6)+1; 
      document.getElementById("score-0").textContent=0;
      document.getElementById("score-1").textContent=0;
      document.getElementById("current-0").textContent=0;
      document.getElementById("current-1").textContent=0;
       
         
      document.getElementById("name-0").textContent = "БЯМБАНЯМ";
      document.getElementById("name-1").textContent = "БЯМБАДОРЖ";
      document.querySelector(".player-0-panel").classList.remove("winner");
      document.querySelector(".player-1-panel").classList.remove("winner");

      document.querySelector(".player-0-panel").classList.add("winner");

      
      
      }