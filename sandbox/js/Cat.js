class Cat extends Animal {
  constructor(x, y) {
    super(x, y);

    this.size = 25;
    this.sound = `Meow!`;
  }

  display() {
    push();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}