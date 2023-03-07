function setup() {
  createCanvas(800, 480);
  frameRate(35);
}
let xBalloonAxis = 100;
let xBackground = 100;
let yBalloonAxis = 100;
let yBackground = 100;
let speedBalloonX = 0;
let speedBalloonY = 5;
let velocity = 1;
let isGameActive = true;
const rightArrow = 39;
const leftArrow = 37;
const upArrow = 38;
const spaceBar = 32;
const startScreenState = "startScreen";
const winScreenState = "winScreen";
const lostScreenState = "lostScreen";
const gameScreenState = "gameScreen";
function balloon(x, y) {
  push();
  scale(0.6);
  //Fire Balloon//

  fill(252, 100, 0);
  noStroke(0);
  triangle(x - 50, y, x, y + 75, x + 50, y);

  fill(215, 53, 2);
  noStroke(0);
  triangle(x - 40, y, x, y + 75, x + 40, y);

  fill(199, 0, 57);
  noStroke(0);
  triangle(x - 30, y, x, y + 75, x + 30, y);

  fill(255, 255, 0);
  noStroke(0);
  triangle(x - 10, y, x, y + 75, x + 10, y);

  fill(0, 255, 255);
  noStroke(0);
  triangle(x - 1, y, x, y + 75, x + 1, y);

  //Red balloon//

  fill(199, 0, 57);
  noStroke();
  ellipse(x, y, 100, 110);

  //Lines connecting to Balloon from left side + ropes between with curves//
  strokeWeight(2);
  stroke(255, 195, 0);
  curve(x - 80, y - 100, x - 40, y, x + 40, y, x + 80, y - 100);
  curve(x - 70, y - 100, x - 30, y, x + 30, y, x + 70, y - 100);
  curve(x - 60, y - 100, x - 20, y, x + 20, y, x + 60, y - 100);
  line(x - 40, y, x - 30, y + 80);
  line(x - 30, y, x - 20, y + 80);
  line(x - 20, y, x - 10, y + 80);
  line(x - 10, y, x, y + 80);
  ellipse(x - 40, y, 2, 2);
  ellipse(x - 30, y, 2, 2);
  ellipse(x - 20, y, 2, 2);
  ellipse(x - 10, y, 2, 2);

  //Lines connecting to Balloon from right side//
  strokeWeight(2);
  stroke(255, 195, 0);
  line(x + 40, y, x + 30, y + 80);
  line(x + 30, y, x + 20, y + 80);
  line(x + 20, y, x + 10, y + 80);
  line(x + 10, y, x, y + 80);
  ellipse(x + 40, y, 2, 2);
  ellipse(x + 30, y, 2, 2);
  ellipse(x + 20, y, 2, 2);
  ellipse(x + 10, y, 2, 2);

  //Carriage under Balloon
  strokeWeight(2);
  stroke(255, 195, 0);
  line(x - 33, y + 80, x + 33, y + 80);
  line(x - 33, y + 83, x + 33, y + 83);
  line(x - 33, y + 86, x + 33, y + 86);
  line(x - 33, y + 89, x + 33, y + 89);
  line(x - 33, y + 92, x + 33, y + 92);
  line(x - 33, y + 95, x + 33, y + 95);
  line(x - 33, y + 98, x + 33, y + 98);
  line(x - 33, y + 101, x + 33, y + 101);
  line(x - 33, y + 104, x + 33, y + 104);
  line(x - 33, y + 107, x + 33, y + 107);
  line(x - 33, y + 110, x + 33, y + 110);
  line(x - 33, y + 113, x + 33, y + 113);
  line(x - 33, y + 116, x + 33, y + 116);

  //sandbags//
  fill(101, 56, 24);
  noStroke();
  ellipse(x - 20, y + 100, 15, 20);
  ellipse(x, y + 100, 15, 20);
  ellipse(x + 20, y + 100, 15, 20);
  pop();
}
//speed of balloon//
function gameScreen() {
  gameBackground(xBackground, yBackground);
  balloon(xBalloonAxis, yBalloonAxis);

  if (isGameActive) {
    if (keyIsDown(rightArrow)) {
      speedBalloonX = 3;
    } else if (keyIsDown(leftArrow)) {
      speedBalloonX = -3;
    } else if (keyIsDown(upArrow)) {
      velocity = velocity - 0.5;
    } else {
      speedBalloonX = 0;
      speedBalloonY = 0.1;
    }
    xBalloonAxis = xBalloonAxis - 0.1;
    yBalloonAxis = yBalloonAxis + velocity;
    velocity = velocity + acceleration;
    xBalloonAxis = xBalloonAxis + speedBalloonX;
    yBalloonAxis = yBalloonAxis + speedBalloonY;
  }
  if (yBalloonAxis > 560 && xBalloonAxis < 630) {
    isGameActive = false;
    state = "lostScreen";
  }
  if (yBalloonAxis > 629 && xBalloonAxis > 631) {
    isGameActive = false;
    if (velocity > 3) {
      state = "lostScreen";
    } else {
      state = "winScreen";
    }
  }
  //sun//
  function gameBackground(x, y) {
    background(46, 68, 130);
    fill(253, 184, 19);
    noStroke();
    ellipse(x + 660, y - 60, 150, 150);

    //ground//
    fill(82, 55, 48);
    noStroke();
    rect(x - 100, y + 350, 800, 40);

    //trees + stones//
    function tree(x, y) {
      fill(70, 31, 0);
      rect(x - 5, y + 330, 10, 20);
      fill(20, 51, 6);
      noStroke(0);
      triangle(x - 10, y + 320, x, y + 300, x + 10, y + 320);
      triangle(x - 12, y + 330, x, y + 300, x + 12, y + 330);
      triangle(x - 14, y + 340, x, y + 300, x + 14, y + 340);
    }
    function stones(x, y) {
      fill(145, 142, 133);
      noStroke();
      ellipse(x + 100, y + 425, 30, 30);

      fill(165, 162, 153);
      noStroke();
      ellipse(x + 110, y + 430, 20, 20);

      fill(125, 122, 113);
      noStroke();
      ellipse(x + 90, y + 430, 20, 20);
    }
    stones(10, 10);
    stones(100, 10);
    stones(200, 10);
    stones(300, 10);
    stones(400, 10);
    tree(10, 100);
    tree(40, 100);
    tree(70, 100);
    tree(140, 100);
    tree(170, 100);
    tree(240, 100);
    tree(270, 100);
    tree(330, 100);
    tree(360, 100);
    tree(440, 100);
    tree(470, 100);
    tree(540, 100);
    tree(570, 100);
    tree(600, 100);
    tree(620, 100);

    //Ground checkered flag//
    function goalWhite(x, y) {
      fill(255, 255, 255);
      noStroke();
      rect(x + 540, y + 350, 10, 10);
    }

    function goalBlack(x, y) {
      fill(0, 0, 0);
      noStroke();
      rect(x + 550, y + 350, 10, 10);
    }
    goalWhite(x, y);
    goalWhite(x + 20, y);
    goalWhite(x + 40, y);
    goalWhite(x + 60, y);
    goalWhite(x + 80, y);
    goalWhite(x + 100, y);
    goalWhite(x + 120, y);
    goalWhite(x + 140, y);
    goalBlack(x, y);
    goalBlack(x + 20, y);
    goalBlack(x + 40, y);
    goalBlack(x + 60, y);
    goalBlack(x + 80, y);
    goalBlack(x + 100, y);
    goalBlack(x + 120, y);
    goalBlack(x + 140, y);
  }
}
function startScreen() {
  background(46, 68, 130);
  textSize(30);
  text("Flying Balloon Game!", 250, 100);
  text("Press SpaceBar to play!", 235, 150);
  text("Control the Balloon with < ^ > keys!", 160, 200);
  text("Land smoothly on the checkers ground.", 130, 250);
  text("If you try to land in forest, you will crash!", 125, 300);
  text("Press SpaceBar to play, Good Luck!", 150, 350);
}

function winScreen() {
  background(1, 50, 32);
  textSize(30);
  text("YOU WON!", 320, 200);
  text("Press SpaceBar to play again!", 200, 250);
}

function lostScreen() {
  background(255, 0, 0);
  textSize(30);
  text("You crashed!", 310, 200);
  text("Press SpaceBar to play again!", 200, 250);
}
let state = winScreenState;

function resetGame() {
  if (keyIsDown(spaceBar)) {
    state = "gameScreen";
  }
  xBalloonAxis = 100;
  xBackground = 100;
  yBalloonAxis = 100;
  yBackground = 100;
  y = 100;
  speedBalloonX = 0;
  speedBalloonY = 5;
  velocity = 1;
  acceleration = 0.2;
  isGameActive = true;
}
function draw() {
  if (state === startScreenState) {
    startScreen();
    resetGame();
  } else if (state === gameScreenState) {
    gameScreen();
  } else if (state === winScreenState) {
    winScreen();
    resetGame();
  } else if (state === lostScreenState) {
    lostScreen();
    resetGame();
  }
}
