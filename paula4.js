
function setup() {
  createCanvas(700, 700, WEBGL);
	frameRate(60);
}

function draw() {
  background(0, 0, 0);
  angleMode(DEGREES);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      translate(mouseX-350, mouseY-350, 0);
      fill('#f9989f');
      rotateX(mouseX);
      rotateY(mouseY);
      box(120, 120, 120, 5);
      rotateZ(((millis() % 3000)/3000)*360);
      translate(mouseX-350, mouseY-350, 100);
      fill('#34699a');
      cylinder(40, 50, 20, 20, false, false);

      rotateZ(((millis() % 2000)/2000)*360);
      translate(mouseX-350, mouseY-350, -200);
      fill('#34699a');
      cylinder(20, 20, 20, 20, false, false);
    }
    if (mouseButton === RIGHT) {
      translate(mouseX-350, mouseY-350, 0);
      fill('#faf096');
      rotateX(mouseX);
      rotateY(mouseY);
      cone(60, 80, 20, 20, true);
      rotateZ(((millis() % 3000)/3000)*360);
      translate(mouseX-350, mouseY-350, 100);
      fill('#34699a');
      cylinder(5, 50, 20, 20, false, false);
      
      rotateZ(((millis() % 2000)/2000)*360);
      translate(mouseX-350, mouseY-350, -200);
      fill('#34699a');
      cylinder(10, 10, 20, 20, false, false);
    }
  }
}