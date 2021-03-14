//тоглогчдын ээлж хадаглах хувьсагч хэрэтэй
//onoog tsugluuldeg huwisagch 
// eeljiin onoo huwsagch 
//
var Activplayer=1;
var scorce = [0 , 0];
var roudscore=0 ;
// var diceNumber =Math.floor(Math.random() * 6)+1; 
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;

var DiceDom=document.querySelector(".dice")
DiceDom.style.display="none";
document.querySelector(".btn-roll").addEventListener("click" , function (){
    var diceNumber =Math.floor(Math.random() * 6)+1 ;
    DiceDom.style.display="block";
    DiceDom.src = "dice-"+diceNumber+".png";
  
}
);
