let mainHeading = document.getElementById(`main-heading`);
let paragraph = document.getElementById(`paragraph`);

requestAnimationFrame(function() {
  // Note how we use an anonymous function so we can call fadeOut()
  // twice, once for each element that we want to fade
  fadeOut(mainHeading);
  fadeOut(paragraph);
});

function fadeOut(element) {
  // Get the opacity of the element
  let opacity = element.style[`opacity`];
  // Remember it's a string, so we need to convert it to a number
  // We will use a special function called parseFloat, that takes a string
  // and extracts a single floating-point number from it
  opacity = parseFloat(opacity);
  // We then need to check if the result is NaN (not a number), which it will be
  // if the string was empty
  if (isNaN(opacity)) {
    // If so, we'll set the opacity to 1, assuming that was the default starting point
    opacity = 1;
  }
  // Reduce the opacity
  opacity -= 0.01;
  // Set the opacity on the element
  element.style[`opacity`] = opacity;
  // Check if the opacity is still above 0
  if (opacity > 0) {
    // If it is, call fadeOut() again on the next frame
    // So we get an animation over time for the element
    requestAnimationFrame(function() {
      // Note how we use an anonymous function so we can pass the element
      // as an argument to the next call of fadeOut()
      fadeOut(element);
    });
  }
}