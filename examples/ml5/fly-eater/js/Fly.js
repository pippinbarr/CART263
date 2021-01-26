class Fly {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.tx = random(0, 500);
    this.ty = random(500, 1000);
    this.buzziness = 0.005;
    this.size = 10;
    this.wingSize = this.size / 2;
    this.inMouth = false;
  }

  update() {
    this.move();
    this.display();
  }

  move() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);

    this.tx += this.buzziness;
    this.ty += this.buzziness;
  }

  display() {
    push();
    stroke(0);
    fill(255);
    ellipse(this.x - this.size / 2, this.y, this.wingSize);
    ellipse(this.x + this.size / 2, this.y, this.wingSize);

    fill(0);
    ellipse(this.x, this.y, this.size);
  }
}