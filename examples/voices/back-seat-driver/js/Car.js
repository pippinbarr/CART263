// Car
// A specific sized vehicle

class Car {
  // constructor(x,y)
  // Creates a car
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speed = 0;

    // Specify dimensions
    this.width = 30;
    this.height = 10;
    // Randomise starting rotation
    this.angle = random(0, TWO_PI);
    // Define maximum speed of movement
    this.maxSpeed = 2;
    // Maximum turning rate
    this.turnMax = 0.5;
  }

  turnLeft() {
    this.angle -= this.turnMax;
  }

  turnRight() {
    this.angle += this.turnMax;
  }

  drive() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update() {
    this.move();
    this.wrap();
    this.display();
  }

  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);

    this.x += vx;
    this.y += vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width;
    }

    if (this.y > height) {
      this.y -= height;
    }
    else if (this.y < 0) {
      this.y += height;
    }
  }

  // displayVehicle()
  // It's a rectangle rotated to point in the right direction
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}