"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let sportsData;
let newSport = `Click to generate a sport.`;

// preload()
// Description of preload
function preload() {
  sportsData = loadJSON(`assets/data/sports.json`);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);
}


// draw()
// Description of draw()
function draw() {
  background(0);

  push();
  fill(255, 255, 0);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER);
  text(newSport, width / 2, height / 2);
  pop();
}

function mousePressed() {
  let words1 = random(sportsData.sports).split(` `);
  let words2 = random(sportsData.sports).split(` `);

  let word1 = random(words1);
  let word2 = random(words2);

  word1 = capitalizeFirstLetter(word1);
  word2 = capitalizeFirstLetter(word2);

  newSport = `${word1} ${word2}`;
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}