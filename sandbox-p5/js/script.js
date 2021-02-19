for (let i = bubbles.length - 1; i >= 0; i--) {
  let bubble = bubbles[i];
  // bounce, make sounds, etc.
  let d = dist();
  if (d < bubble.width / 2) {
    // Pop!
    bubbles.splice(i, 1);
  }
}