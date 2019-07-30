//CALLING CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;
step = 5;
score = 0;

console.log("working")

var config = {
  images: [
    {name: 'spider', url: './images/spider.png'}
  ]
}

var state = {
  spider: {
    xPos: 100,
    yPos: 100,
    width: 40,
    height: 40,
  },

    fly: {
      xPos: 100,
      yPos: 100,
      width: 30,
      height: 30,
}
  };

  //CALLING BACKGROUND IMAGE
  // var background = new Image();
  // background.src = "./images/web.png";
  // background.onload = function(){
  //    ctx.drawImage(background,0,0);
  // }

  // OR ANOTHER WAY OF CALLING BACKGROUND ----- Defining the background - the #web id is specified within the HTML
  function drawBackground(){
    var background = document.querySelector("#web");
   ctx.drawImage(background,0,0);

  }

  //Defining the spider - the #spider id is specified within the HTML
  function drawspider() {
    var spider = document.querySelector("#spider");
    ctx.drawImage(spider, state.spider.xPos, state.spider.yPos, state.spider.width, state.spider.height)
  }

  //Defining the fly - the #web id is specified within the HTML
function drawFly() {
  var fly = document.querySelector("#fly");
  ctx.drawImage(fly, state.fly.xPos, state.fly.yPos, state.fly.width, state.fly.height)
}

//An animate function that will draw out the background, the spider, and the fly
function animate(){
   drawBackground();
   drawspider();
   drawFly();
}

//We call the animate() function and set a drawing interval for it to run every 40 milliseconds
animate();
setInterval(animate, 40);

//The function that detects the collision between the spider and the fly
function collision() {
  if (state.spider.xPos < state.fly.xPos + state.fly.width &&
     state.spider.xPos + state.spider.width > state.fly.xPos &&
     state.spider.yPos < state.fly.yPos + state.fly.height &&
     state.spider.height + state.spider.yPos > state.fly.yPos) {
     console.log("collision successful")
  }
    {window.location.href = "https://jp94-cpu.github.io/JavaSpider/index-answer.html";}
}

// We check if a key is being pressed
window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' && state.spider.yPos > 0) {
      state.spider.yPos = state.spider.yPos - step;
      collision();
    }

    if (event.key === 'ArrowLeft' && state.spider.xPos > 0) {
      state.spider.xPos = state.spider.xPos - step;
      collision();
    }

    if (event.key === 'ArrowDown' && state.spider.yPos < (canvas.height - state.spider.height)) {
      state.spider.yPos = state.spider.yPos + step;
      collision();
    }

    if (event.key === 'ArrowRight' && state.spider.xPos < (canvas.width - state.spider.width)) {
      state.spider.xPos = state.spider.xPos + step;
      collision();
    }
});



// The code below shows the logic behind the question pop up window.
// The pop up window will be defined by the questionPage function
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


// The code below shows the code for the fly image on page 2
