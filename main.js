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
