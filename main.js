var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

var background = new Image();
background.src = "./images/web.png";
background.onload = function(){
   ctx.drawImage(background,0,0);
}

console.log("working")

var config = {
  images: [
    {name: 'character', url: 'images/spider.png'}
  ]
}

var state = {
  character: {
    xPos: 100,
    yPos: 100
  },
    keys: {
      up: false,
      down: false,
      right: false,
      left: false,
    }
  };
