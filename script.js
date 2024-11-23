var time=60;
var score=0;
var hitrn=0; // we can keep it as var hitrun both are same
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
var clutter="";
for(var i=1;i<=133;i++){
    var store=Math.floor(Math.random()*10)
    clutter+= `<div class="bubble">${store}</div>`
}
document.querySelector("#panelbtm").innerHTML=clutter;
}

function timer(){
var int=setInterval(function(){
    if(time>0){
        time--;
        document.querySelector("#timerval").textContent=time;
    }else{
        clearInterval(int);
        document.querySelector("#panelbtm").innerHTML=`<h1>Game Over &#127881;</h1>`
    }
},1000)
}

document.querySelector("#panelbtm").addEventListener("click",function(dets){
var clickedNumber=Number(dets.target.textContent);
if(clickedNumber===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})
timer();
makeBubble();
getNewHit();
