"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let lyrics = "Twinkle twinkle little star, How I wonder what you are. Up above the world so high, Like a diamond in the sky. Twinkle twinkle little star,  How I wonder what you are.";
let lyricsArray = lyrics.split(' ');
let currentWordIndex = 0;
let currentWord = ``;

let pitch = 1;

// setup()
// Description of setup
function setup() {
  createCanvas(500, 500);

  sing();
}


// draw()
// Description of draw()
function draw() {
  background(0);

  fill(255);
  textSize(64);
  textAlign(CENTER);
  text(currentWord, width / 2, height / 2);

  pitch = map(mouseY, height, 0, 0.2, 2);
}

function sing() {
  currentWord = lyricsArray[currentWordIndex];
  responsiveVoice.speak(currentWord, undefined, {
    pitch: pitch,
    onend: sing
  });
  currentWordIndex++;
  if (currentWordIndex >= lyricsArray.length) {
    currentWordIndex = 0;
  }
}