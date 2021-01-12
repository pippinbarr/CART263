"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let loves = [
  `JavaScript`,
  `Object-Oriented Programming`,
  `destructuring`,
  `variables`,
  `arrow functions`,
  `functions`,
  `anonymous functions`,
  `programming`,
  `to code`,
  `JavaScript libraries`,
  `the Atom text editor`,
  `Creative Computation`,
  `debugging`
];

let currentLove = ``;
let displayText = ``;


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(64);
  textStyle(BOLD);
  textAlign(CENTER);

  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I love..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {
      "I love *lovedThing": handleUserSpeech,
    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();

    // Choose a phrase for the user to say first
    newAffirmation();
  }

}

// draw()
// Description of draw()
function draw() {
  background(255);

  text(displayText, width / 2, height / 2);
}

function handleUserSpeech(lovedThing) {
  console.log(lovedThing);
  if (lovedThing.toLowerCase() === currentLove.toLowerCase()) {
    displayText = `That's right. You do love ${currentLove}.`;
    annyang.pause();
    setTimeout(newAffirmation, 5000);

  }
}

function newAffirmation() {
  currentLove = random(loves);
  displayText = `Say "I love ${currentLove}."`;
  annyang.resume();
}