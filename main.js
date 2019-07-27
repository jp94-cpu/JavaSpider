var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

var background = new Image();
background.src = "./images/web.png";

background.onload = function(){
    ctx.drawImage(background,0,0);
}
