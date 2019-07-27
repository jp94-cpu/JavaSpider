//CALLING CANVAS

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

//CALLING OUR SPIDER character

var state = {
  character: {
    xPos: 300,
    yPos: 200,
    size: 30,
  },
    keys: {
      up: false,
      down: false,
      right: false,
      left: false,
    }
  };

//DEFINING THE DRAWING SPIDER FUNCTION

function drawCharacter() {
  var character = document.querySelector("#character");
  ctx.drawImage(character, state.character.xPos, state.character.yPos, state.character.size, state.character.size)
}

//CALLING THE BACKGROUND IMAGE + CALLING DRAWCHARACTER FUNCTION
var background = new Image();
background.src = "./images/web.png";
background.onload = function(){
   ctx.drawImage(background,0,0);
   drawCharacter();
}



console.log("working")


// //BELOW TRYING TO MAKE THE CHARACTER APPEAR ON CANVAS
// var config = {
//   images: [
//     {name: 'character', url: './images/spider.png'}
//   ]
// }
//
//
//
//   function runGame(game) {
//     console.log(game);
//
//     // This function should be run repeatedly by a
//     // timer so we can have animations
//     function animate() {
//       console.log('animating');
//       // All the drawing to the canvas should happen in here
//
//       game.drawTileToPos("character", 0, state.character.xPos, state.character.yPos);
//
//     if (state.keys.up === true) {
//     //state.character.yPos = state.character.yPos +1;
//     }
//
//     }
//     setInterval(animate, 40);
//
//
//   }
//   window.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowUp') {
//       console.log('The up arrow has been pressed');
//       state.keys.up = true;
//     }
//   });


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
