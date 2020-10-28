var size=2000;
function setup() {
  createCanvas(size, size);
}

function draw() {
	background(255, 0, 255);
  rLine();
  rShape();
  rBezier();
  noLoop();
}

function rColor() {
  let rC = color(random(255), random(255), random(255));
  fill(rC);
  stroke(rC);
  strokeWeight(2*random(size/100))
}

function rShape() {
  let rounds = round(3*random(3));
  for (let i = 0; i < rounds; i++) {
    let num = round(random(2));
    rColor();
    noStroke();
    console.log("num:", num)
    switch(num) {
    case 0:
      ellipse(random(size), random(size), random(size), random(size));
      break;
    case 1:
      quad(random(size), random(size), random(size), random(size), random(size), random(size), random(size), random(size));
      break;
    case 2:
      triangle(random(size), random(size), random(size), random(size), random(size), random(size));
      break;
    }
  }
}

function rBezier() {
  let rounds = round(12*random(4));
  for (let i = 0; i < rounds; i++) {
    rColor();
    noFill();
    bezier(random(size), random(size), random(size), random(size), random(size), random(size), random(size), random(size));
  }
}

function rLine() {
  let rounds = round(6*random(2));
  for (let i = 0; i < rounds; i++) {
    rColor();
    noFill();
    line(random(size), random(size), random(size), random(size));
  }
}