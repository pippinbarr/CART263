"use strict";

// Object list scraped from: https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts

let state = `init`;
let cocossd;
let video;
let predictions = [];
let desire = ``;
let topResult = undefined;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  cocossd = ml5.objectDetector('cocossd', {}, modelReady);
}

function gotResults(results) {
  predictions = results;
}

function modelReady() {
  startChallenge();
}

function startChallenge() {
  state = `challenge`;
  desire = random(cocossdObjects);

  setTimeout(function() {
    state = `guessing`;
  }, 2000);
}

function draw() {
  if (state === `init`) {
    waiting();
  }
  else if (state === `challenge`) {
    challenge();
  }
  else if (state === `guessing`) {
    guessing();
  }
}

function waiting() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Waiting for CocoSsd...", width / 2, height / 2);
  pop();
}

function challenge() {
  background(255);

  console.log(desire);
  let article = getArticle(desire);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Feed me ${article} ${desire}.`, width / 2, height / 2);
  pop();
}

function getArticle(word) {
  let firstLetter = word.charAt(0).toLowerCase();
  const vowels = "aeiou";
  if (vowels.indexOf(firstLetter) !== -1) {
    return `an`;
  }
  else {
    return `a`;
  }
}

function guessing() {
  cocossd.detect(video, gotResults);

  image(video, 0, 0, width, height);
  if (topResult) {
    let success = (topResult.label === desire);

    push();
    noFill();
    if (success) {
      stroke(0, 255, 0);
    }
    else {
      stroke(255, 0, 0);
    }
    strokeWeight(10);
    rect(topResult.x, topResult.y, topResult.width, topResult.height);
    pop();

    let result = `No.`;
    if (topResult.label === desire) {
      result = `Yes.`;
    }

    push();
    if (success) {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0, 0);
    }
    textAlign(CENTER, CENTER);
    textSize(32);
    textStyle(BOLD);
    text(result, topResult.x + topResult.width / 2, topResult.y + topResult.height / 2);
    pop();

    if (success) {
      noLoop();
    }
  }
}

function gotResults(err, results) {
  topResult = undefined;

  if (err) {
    console.error(err);
  }
  else {
    if (results.length > 0) {
      topResult = results[0];
    }
  }
}