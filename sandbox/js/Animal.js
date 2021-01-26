class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.sound = `...`;
  }

  update() {
    this.display();
    this.makeSound();
  }

  display() {
    push();
    fill(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  makeSound() {
    console.log(this.sound);
  }
}