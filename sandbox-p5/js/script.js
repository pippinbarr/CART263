let threeDee;
let angle = 0;
let x;

function setup() {
  createCanvas(500, 500);
  x = -width / 2;

  threeDee = createGraphics(width, height, WEBGL);
}

function draw() {
  if (keyIsPressed && keyCode === 32) {
    angle += 0.01;
    x += 1;

    threeDee.background(0);
    threeDee.push();
    threeDee.fill(255, 0, 0);
    threeDee.translate(x, 0);
    threeDee.rotateY(angle);
    threeDee.sphere(150);
    threeDee.pop();

    image(threeDee, 0, 0);
  }
  else {
    background(255, 0, 0);
    push();
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
    pop();
  }
}