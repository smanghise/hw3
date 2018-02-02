function SashaPatch(x, y) {
  //noFill();
  //stroke(238);
  //rect(x, y, 300, 300);
  
  background(255);
	colorMode(HSB);
	noStroke();

	while(true) {
  	background(0, 0, 255, 0.1);
  	fill(random(200,280), 255, 255);
  	ellipse(x, y, random(10,200));
	}
}
background(255);
SashaPatch(150,150); // draw patch at upper-left

background(255);
SashaPatch(width-301, height-301); // draw patch at lower-right
