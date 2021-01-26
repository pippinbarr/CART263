"use strict";

// 13,14 are top lip and bottom lip

let start;
let handpose;
let video;
let predictions = [];
let bullets = [];
let canShoot = true;


function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width, height);
  // Hide the video element, and just show the canvas
  video.hide();


  handpose = ml5.handpose(video, modelReady);

  handpose.on("predict", gotResults);
}

function gotResults(results) {
  start = true;
  predictions = results;
  // console.log(predictions);
}

function modelReady() {
  console.log("Handpose model is ready!");
}

function draw() {
  if (!start) {
    waiting();
  }
  else {
    image(video, 0, 0, width, height);

    pewpew();
    debug();
  }
}

function waiting() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Waiting for Handpose...", width / 2, height / 2);
  pop();
}

function pewpew() {

  if (predictions.length > 0) {
    const landmarks = predictions[0].landmarks;

    // 4 : tip of thumb
    // 5 : base of index
    // 8 : tip of index
    let thumbTip = {
      x: landmarks[4][0],
      y: landmarks[4][1]
    };
    let indexBase = {
      x: landmarks[5][0],
      y: landmarks[5][1]
    };
    let indexTip = {
      x: landmarks[8][0],
      y: landmarks[8][1]
    };

    if (!canShoot && dist(thumbTip.x, thumbTip.y, indexBase.x, indexBase.y) > 100) {
      // Reload
      canShoot = true;
    }

    if (canShoot && dist(thumbTip.x, thumbTip.y, indexBase.x, indexBase.y) < 50) {
      // Shoot
      // Calculate angle
      // const v1 = createVector(indexBase.x, indexBase.y);
      // const v2 = createVector(indexTip.x, indexTip.y);
      const angle = atan2(indexTip.y - indexBase.y, indexTip.x - indexBase.x);
      let bullet = createBullet(indexTip.x, indexTip.y, angle);
      bullets.push(bullet);
      canShoot = false;
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    updateBullet(bullets[i]);
  }
}

function createBullet(x, y, angle) {
  let bullet = {
    x: x,
    y: y,
    angle: angle,
    speed: 5,
    size: 10
  };
  return bullet;
}

function updateBullet(bullet) {
  const vx = bullet.speed * cos(bullet.angle);
  const vy = bullet.speed * sin(bullet.angle);
  bullet.x += vx;
  bullet.y += vy;

  push();
  fill(0);
  ellipse(bullet.x, bullet.y, bullet.size);
  pop();
}

/**
Displays the array indexes of the landmarks at their corresponding
position on any located hand
*/
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