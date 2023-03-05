const x = 100;
const y = 100;

//Red balloon//
background(46, 68, 130);
fill(199, 0, 57);
noStroke();
ellipse(x, y, 100, 110);

//Lines connecting to Balloon from left side//
strokeWeight(2);
stroke(255, 195, 0);
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
