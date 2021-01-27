"use strict";

let state = `loading`; // play
let video;
let handpose;
let modelName = `Handpose`
let predictions = [];

let bubble;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, modelReady);
  handpose.on("predict", gotResults);

  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}

function gotResults(results) {
  predictions = results;
}

function modelReady() {
  console.log(`${modelName} model is ready!`);
  state = `play`;
}

function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `play`) {
    play();
  }
}

function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Waiting for ${modelName}...`, width / 2, height / 2);
  pop();
}

function play() {
  // const flippedVideo = ml5.flipImage(video);
  // image(flippedVideo, 0, 0, width, height);
  background(0);

  // debug();

  if (predictions.length > 0) {
    const [indexTipX, indexTipY] = predictions[0].annotations.indexFinger[3];
    const [indexBaseX, indexBaseY] = predictions[0].annotations.indexFinger[0];

    // Check popping
    let d = dist(indexTipX, indexTipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      // Pop!
      resetBubble();
    }

    displayPin(indexTipX, indexTipY, indexBaseX, indexBaseY);
  }

  moveBubble();
  checkOutOfBounds();
  displayBubble();
}

function moveBubble() {
  // Move bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

function checkOutOfBounds() {
  if (bubble < 0) {
    resetBubble();
  }
}

function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

function displayBubble() {
  // Draw bubble
  push();
  noStroke();
  fill(100, 100, 200, 150);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

function displayPin(tipX, tipY, baseX, baseY) {
  // Draw pin
  push();
  stroke(255);
  strokeWeight(2);
  line(tipX, tipY, baseX, baseY);

  fill(255, 0, 0);
  noStroke();
  ellipse(baseX, baseY, 20);
  pop();
}

function debug() {
  if (predictions.length > 0) {
    const landmarks = predictions[0].landmarks;

    for (let i = 0; i < landmarks.length; i++) {
      push();
      textSize(18);
      textStyle(BOLD);
      fill(255, 0, 0, 100);
      textAlign(CENTER, CENTER);
      text(i, landmarks[i][0], landmarks[i][1]);
      pop();
    }
  }
}