"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/


// setup()
// Description of setup
function setup() {

}


// draw()
// Description of draw()
function draw() {

}

function mousePressed() {
  say(`That's it. Press my mouse.`);
}

function mouseDragged() {
  say(`Drag me anywhere you want.`);
}

function mouseReleased() {
  say(`Don't let me go.`);
}

function doubleClicked() {
  say(`Never stop clicking.`);
}

function mouseWheel() {
  say(`Roll my wheel`);
}

function mouseMoved() {
  say(`Move my mouse.`);
}

function keyPressed() {
  say(`Keycode ${keyCode} is my favourite key.`);
}

function say(speech) {
  responsiveVoice.cancel();

  responsiveVoice.speak(speech, `UK English Male`, {
    rate: 0.5,
    pitch: 0.5
  });
}