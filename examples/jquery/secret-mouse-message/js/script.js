"use strict";

let message = "THIS IS THE TIME AND THIS IS THE RECORD OF THE TIME.";
let reverseMessage = message.split(``).reverse().join(``);

$(document).on(`mousemove`, showSecret);

function showSecret(event) {
  let character = map(event.clientX, 0, $(window).width(), 0, reverseMessage.length);
  character = Math.floor(character);
  $(`#secret-letter`).text(reverseMessage.charAt(character));
}

function map(value, min, max, newMin, newMax) {
  let normalized = value / (max - min);
  let newValue = newMin + normalized * (newMax - newMin);
  return newValue;
}