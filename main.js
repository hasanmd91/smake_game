const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// we can update the screen using setTimeout and setInterval
//using settime out we can manupulate the screen how often we can update the screen

let speed = 5;
let tiltcount = 20; // on x and y axis 20 tiles
let headx = 10; // using x and y direction making the snake head on the middle
let heady = 10;
let tilesize = canvas.width / tiltcount - 2; // drwing snake inside of this tile a bit smaller

let Xvelocity = 0;
let Yvelocity = 0;

// game loop
const drawGame = () => {
  clearScreen();
  changeSnakePosition();
  drawSnake();
  setTimeout(drawGame, 1000 / speed);
};

// clearscreen

const clearScreen = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// draw sanke

const drawSnake = () => {
  ctx.fillStyle = "orange";
  ctx.fillRect(headx * tiltcount, heady * tiltcount, tilesize, tilesize);
};

const changeSnakePosition = () => {
  headx = headx + Xvelocity;
  heady = heady + Yvelocity;
  console.log(" i called changeSnakePosition");
};

const keyDown = (event) => {
  console.log("i called keydown");
  //up
  if (event.keyCode === 38) {
    if (Yvelocity == 1) return;
    Yvelocity = -1;
    Xvelocity = 0;
    //down
  } else if (event.keyCode === 40) {
    if (Yvelocity == -1) return;
    Yvelocity = 1;
    Xvelocity = 0;
    //left
  } else if (event.keyCode === 37) {
    if (Xvelocity == 1) return;
    Yvelocity = 0;
    Xvelocity = -1;
    //right
  } else if (event.keyCode === 39) {
    if (Xvelocity == -1) return;
    Yvelocity = 0;
    Xvelocity = 1;
  }
};

document.addEventListener("keydown", keyDown);

drawGame();
