function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255,102, 102);
  } else if (key == 'G') {
    fill(178, 255, 102);
  } else if (key == 'B') {
    fill(153, 204, 255); 
  } else if (key == 'O') {
    fill(255, 153, 51); 
  } else if (key == 'P') {
    fill(255, 102, 178); 
  } else if (key == 'Y') {
    fill(255, 255, 0); 
  }
}
