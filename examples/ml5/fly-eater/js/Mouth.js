class Mouth {
  constructor() {
    this.topLip = {
      x: undefined,
      y: undefined
    };
    this.bottomLip = {
      x: undefined,
      y: undefined
    };
    this.openSize = undefined;
    this.openThreshold = 10;
    this.open = false;
  }

  update(predictions) {
    if (!predictions || predictions.length === 0) {
      return;
    }

    const keypoints = predictions[0].scaledMesh;

    this.topLip.x = keypoints[13][0];
    this.topLip.y = keypoints[13][1];

    this.bottomLip.x = keypoints[14][0];
    this.bottomLip.y = keypoints[14][1];

    this.x = this.topLip.x + (this.bottomLip.x - this.topLip.x) / 2;
    this.y = this.topLip.y + (this.bottomLip.y - this.topLip.y) / 2;

    this.openSize = dist(mouth.topLip.x, mouth.topLip.y, mouth.bottomLip.x, mouth.bottomLip.y);
    this.open = mouth.openSize > this.openThreshold;
  }

  overlap(fly) {
    let d = dist(this.x, this.y, fly.x, fly.y);
    if (d < this.openSize / 2 + fly.size / 2) {
      return true;
    }
    else {
      return false;
    }
  }

  display() {
    push();
    fill(255, 0, 0, 50);
    ellipse(this.x, this.y, this.openSize);
    pop();
  }

}