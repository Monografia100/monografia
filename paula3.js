
function setup() {
  createCanvas(700, 700, WEBGL);
	frameRate(60);
}

function draw() {
  background(255, 255, 255);
	angleMode(DEGREES);
	rotateY(((millis() % 5000)/5000)*360);
  rotateX(((millis() % 6000)/6000)*360);
	rotateZ(((millis() % 7000)/7000)*360);
	translate(0, 0, 0);
	fill('#113f67');
  cylinder(20, 50, 20, 20, false, false);
	
	rotateY(((millis() % 8000)/8000)*360);
  rotateX(((millis() % 9000)/9000)*360);
	rotateZ(((millis() % 10000)/10000)*360);
	translate(0, 0, 0);
	fill('#34699a');
  cylinder(40, 50, 20, 20, false, false);
	
	rotateY(((millis() % 10000)/10000)*360);
  rotateX(((millis() % 9000)/9000)*360);
	rotateZ(((millis() % 8000)/8000)*360);
	translate(0, 0, 0);
	fill('#408ab4');
  cylinder(80, 50, 20, 20, false, false);
	
	rotateY(((millis() % 7000)/7000)*360);
  rotateX(((millis() % 6000)/6000)*360);
	rotateZ(((millis() % 5000)/5000)*360);
	translate(0, 0, 0);
	fill('#65c6c4');
  cylinder(160, 50, 20, 20, false, false);

  var rotacion = ((millis() % 10000)/10000)*360;
  console.log(frameCount, rotacion);
};