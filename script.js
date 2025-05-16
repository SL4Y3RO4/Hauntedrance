let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let l = Math.log10(10);
let loss = Math.log10(10);
let l2 = 30;
let auto;
let size;
let scoretext = document.createElement("h1");
let timertext = document.createElement("h1");
let audio = new Audio();
let time;
let losstext = document.createElement("h1");


function drawtext() {

scoretext.innerHTML = "score:0";
timertext.innerHTML = "seconds:30";
losstext.innerHTML = "loss:0";

scoretext.style.position = "absolute";
timertext.style.position = "absolute";
losstext.style.position = "absolute";

timertext.style.left = "45%";
losstext.style.left = "45%";
losstext.style.top = "5%";

document.body.append(scoretext);
document.body.append(timertext);
document.body.append(losstext);

}

drawtext();

//style
canvas.style.position = "absolute"; 


function drawCircle() {

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(80, 50, 30, 0, Math.PI * 2);
ctx.fill();
ctx.lineWidth = 6;
ctx.strokeStyle = "cyan";
ctx.stroke(); 

}

drawCircle();

function changepos() {

canvas.addEventListener("mouseover", function() {
    
x = Math.floor(Math.random() * 1400) + 1;
y = Math.floor(Math.random() * 700) + 1;
    
canvas.style.left = x + "px";
canvas.style.top = y + "px";
    
l += 1000;
scoretext.innerHTML = "score:" + l; 
    
audio.src = "119415__joedeshon__rocker-switch.ogg";
audio.play();
    
clearInterval(auto);
return changeposauto();
    
});
    
}
    
changepos();


function changeposauto() {

if(l != 0) {
    
auto = setInterval(function() {
    
x = Math.floor(Math.random() * 1400) + 1;
y = Math.floor(Math.random() * 700) + 1;
    
canvas.style.left = x + "px";
canvas.style.top = y + "px";
    
l -= 251;
scoretext.innerHTML = "score:" + l; 
    
loss += 1;
losstext.innerHTML = "loss:" + loss;
    
audio.src = "63531__florian-reinke__click1.ogg";
audio.play();
    
}, 250);
    
}
    
}
    
changeposauto();


function timer() {
    time = setInterval(function() {
     
    l2--;
    timertext.innerHTML = "seconds:" + l2;
    if(l2 == -1) {
        timertext.innerHTML = "Game Over";
        canvas.remove();
        clearInterval(auto);
        clearInterval(time);
    }

    }, 1000);
}

timer();


document.addEventListener("keydown", (ev) => {

if(ev.key == "r" || ev.key == " ") {
    window.location.reload();
}

});

