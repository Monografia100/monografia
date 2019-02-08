
function setup() {
  createCanvas(700, 700, WEBGL);
	frameRate(24);
}

function draw() {
  background(255, 255, 255);
  angleMode(DEGREES);
	rotateY(((millis() % 12000)/12000)*360);
  rotateX(((millis() % 11000)/11000)*360);
	rotateZ(((millis() % 10000)/10000)*360);
	translate(0, 0, 0);
	fill('#f9989f');
  box(120, 120, 120, 5);
	
	rotateY(((millis() % 9000)/9000)*360);
  rotateX(((millis() % 8000)/8000)*360);
	rotateZ(((millis() % 7000)/7000)*360);
	translate(120, 120, 120);
	fill('#fccb8f');
  box(60, 60, 60, 5);
	
	rotateY(((millis() % 6000)/6000)*360);
  rotateX(((millis() % 5000)/5000)*360);
	rotateZ(((millis() % 4000)/4000)*360);
	translate(60, 60, 60);
	fill('#f9989f');
  box(30, 30, 30, 5);
	
	rotateY(((millis() % 3000)/3000)*360);
  rotateX(((millis() % 2000)/2000)*360);
	rotateZ(((millis() % 1000)/1000)*360);
	translate(30, 30, 30);
	fill('#fccb8f');
  box(15, 15, 15, 5);

  var rotacion = ((millis() % 10000)/10000)*360;
  console.log(frameCount, rotacion);
};