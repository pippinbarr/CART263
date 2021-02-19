/**
Transform Poem
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let specimen = document.getElementById(`specimen`);
let specimenInput = document.getElementById(`specimen-input`);
let fontColorInput = document.getElementById(`specimen-font-color`);
let fontSizeInput = document.getElementById(`specimen-font-size`);


specimenInput.addEventListener(`keydown`, function(event) {
  if (event.keyCode === 13) {
    specimen.innerText = specimenInput.value;
  }
});

fontColorInput.value = specimen.style[`font-color`]; // doesn't work
fontColorInput.addEventListener(`input`, function(event) {
  specimen.style[`color`] = fontColorInput.value;
});

console.log(specimen.style[`font-size`]); // doesn't work
fontSizeInput.value = parseInt(specimen.style[`font-size`]);
fontSizeInput.addEventListener(`input`, function(event) {
  specimen.style[`font-size`] = `${fontSizeInput.value}rem`;
});