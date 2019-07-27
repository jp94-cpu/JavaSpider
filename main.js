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
    {name: 'character', url: './images/spider.png'}
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



// The code below shows the logic behind the question pop up window.
// The pop up window will be defined by the questionPage functionName
// But first we need to define the questionPageClose function as it is used by the questionPage funciton
//
//   function questionPageClose () {
//   -when "next" button is pressed, the pop window closes, and the canvas is reset
//   }
//
//   function questionPage () {
//   -define window ; width, height, how it looks
//   -logic, pick the next question on the list
//   -if answer is correct, show "Well done" message and show "Next" button)
//   questionPageClose();
//   }


  // Collision detector below. Prior to it we need to define the spider and fly objects
  function spiderMeetsFly () {
  if (spider.x + spider.width >= fly.x &&
  spider.x<=fly.x+fly.width &&
  spider.y+spider.height>= fly.y &&
  spider.y <= fly.y+fly.height);
  {questionPage()}
}
