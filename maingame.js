const x = 100;
const y = 100;

//background//
background(46, 68, 130);

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

//ground//
rect(x - 100, y + 350, 800, 40);
