"use strict";

const NUM_CATS = 20000;

let animal;
let cat;

function setup() {
  createCanvas(windowWidth, windowHeight);

  animal = new Animal(500, 500);
  cat = new Cat(600, 500);
}

function draw() {
  background(255, 255, 0);

  animal.update();
  cat.update();
}