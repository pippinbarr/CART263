"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let car;
// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(500, 500);

  car = new Car(width / 2, height / 2);

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    let commands = {
      'drive': function() {
        car.drive();
      },
      'stop': function() {
        car.stop();
      },
      'left': function() {
        car.turnLeft();
      },
      'right': function() {
        car.turnRight();
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
}


// draw()
// Description of draw()
function draw() {
  background(0);

  car.update();
}