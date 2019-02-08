
function setup() {
  createCanvas(700, 700, WEBGL);
	frameRate(30);
}

function draw() {
	background(255, 255, 255);
	angleMode(DEGREES);
	rotateY(((millis() % 5000)/5000)*360);
  // rotateX();
	// rotateZ();
	translate(0, 0, 0);
	fill('#faf096');
  cone(40, 70, 20, 20, true);
	
	rotateY(((millis() % 10000)/10000)*360);
  // rotateX();
	// rotateZ();
	translate(70, 0, 70);
	fill('#c5f8c8');
  cone(40, 70, 20, 20, true);
	
	rotateY(((millis() % 1000)/1000)*360);
  rotateX(((millis() % 2000)/2000)*360);
	rotateZ(((millis() % 3000)/3000)*360);
	translate(50, 50, 50);
	fill('#faf096');
  cone(20, 30, 20, 20, true);
	
	rotateY(((millis() % 3000)/3000)*360);
  rotateX(((millis() % 2000)/2000)*360);
	rotateZ(((millis() % 1000)/1000)*360);
	translate(50, 50, 50);
	fill('#c5f8c8');
  cone(20, 30, 20, 20, true);
};