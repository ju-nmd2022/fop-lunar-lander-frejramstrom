const x = 100;
const y = 100;
let rotation = 0;
let speed = 0;

//background//
background(46, 68, 130);

function balloon(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
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
  line(x - 40, y, 70, 180);
  line(x - 30, y, 80, 180);
  line(x - 20, y, 90, 180);
  line(x - 10, y, 100, 180);
  ellipse(x - 40, y, 2, 2);
  ellipse(x - 30, y, 2, 2);
  ellipse(x - 20, y, 2, 2);
  ellipse(x - 10, y, 2, 2);

  //Lines connecting to Balloon from left side//
  strokeWeight(2);
  stroke(255, 195, 0);
  line(x + 40, y, 130, 180);
  line(x + 30, y, 120, 180);
  line(x + 20, y, 110, 180);
  line(x + 10, y, 100, 180);
  ellipse(x + 40, y, 2, 2);
  ellipse(x + 30, y, 2, 2);
  ellipse(x + 20, y, 2, 2);
  ellipse(x + 10, y, 2, 2);

  //Carriage under Balloon
  strokeWeight(2);
  stroke(255, 195, 0);
  line(x - 33, y + 80, 133, 180);
  line(x - 33, y + 83, 133, 183);
  line(x - 33, y + 86, 133, 186);
  line(x - 33, y + 89, 133, 189);
  line(x - 33, y + 92, 133, 192);
  line(x - 33, y + 95, 133, 195);
  line(x - 33, y + 98, 133, 198);
  line(x - 33, y + 101, 133, 201);
  line(x - 33, y + 104, 133, 204);
  line(x - 33, y + 107, 133, 207);
  line(x - 33, y + 110, 133, 210);
  line(x - 33, y + 113, 133, 213);
  line(x - 33, y + 116, 133, 216);

  //sandbags//
  fill(101, 56, 24);
  noStroke();
  ellipse(x - 20, y + 100, 15, 20);
  ellipse(x, y + 100, 15, 20);
  ellipse(x + 20, y + 100, 15, 20);
  pop();
}

function draw() {
  balloon(x, y, rotation);

  x = x + speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }
}

//sun//
fill(199, 0, 57);
noStroke();
ellipse(x, y, 100, 110);

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
goalBlack(x, y);
goalBlack(x + 20, y);
goalBlack(x + 40, y);
goalBlack(x + 60, y);
goalBlack(x + 80, y);
