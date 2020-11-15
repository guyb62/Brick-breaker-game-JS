import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

//ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

// let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
// let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// paddle.draw(ctx);

// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(380, 220, 50, 50);

// new InputHandler(paddle); //instantiate the class

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  game.update(deltaTime);
  game.draw(ctx);

  // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // paddle.update(deltaTime);
  // paddle.draw(ctx);

  // ball.update(deltaTime);

  // ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
