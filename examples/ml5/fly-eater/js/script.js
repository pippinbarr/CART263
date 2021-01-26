"use strict";

// 13,14 are top lip and bottom lip

let start;
let facemesh;
let video;
let predictions = [];

const NUM_FLIES = 10;
let flies = [];

let mouth;

function setup() {
  createCanvas(640, 480);

  mouth = new Mouth();

  for (let i = 0; i < NUM_FLIES; i++) {
    let fly = new Fly();
    flies.push(fly);
  }

  video = createCapture(VIDEO);
  video.size(width, height);
  // Hide the video element, and just show the canvas
  video.hide();


  facemesh = ml5.facemesh(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new predictions are made
  facemesh.on("predict", gotResults);
}

function gotResults(results) {
  start = true;
  predictions = results;
}

function modelReady() {
  console.log("Facemesh model is ready!");
}

function draw() {
  if (!start) {
    push();
    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Waiting for Facemesh...", width / 2, height / 2);
    pop();
  }
  else {
    // const flippedVideo = ml5.flipImage(video);
    image(video, 0, 0, width, height);

    mouth.update(predictions);

    for (let i = flies.length - 1; i >= 0; i--) {
      let fly = flies[i];
      fly.update();
      if (!mouth.open && fly.inMouth) {
        console.log("Eat!")
        flies.splice(i, 1);
      }
      else {
        fly.inMouth = mouth.overlap(fly);
      }
    }
  }
}