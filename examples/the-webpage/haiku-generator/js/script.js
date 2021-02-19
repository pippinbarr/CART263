/**
Haiku Generator
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let haikuLines = {
  fiveSyllables: [
    `O, to be a tree`,
    `The cat does not know`,
    `We are all forests`,
    `You have done your best`,
    `They are all gone now`
  ],
  sevenSyllables: [
    `Say the things left unsaid`,
    `Never believe the wind's lies`,
    `The autumn stretches its legs`,
    `Nothing can satisfy you`,
    `They will not come back again`
  ]
};

let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

setupLines();
addListeners();

function setupLines() {
  line1.innerText = random(haikuLines.fiveSyllables);
  line1.style.opacity = 1;
  line2.innerText = random(haikuLines.sevenSyllables);
  line2.style.opacity = 1;
  line3.innerText = random(haikuLines.fiveSyllables);
  line3.style.opacity = 1;
}

function addListeners() {
  line1.addEventListener(`click`, changeLine);
  line2.addEventListener(`click`, changeLine);
  line3.addEventListener(`click`, changeLine);
}

function changeLine(event) {
  window.requestAnimationFrame(function() {
    fadeOut(event.target);
  });
}

function fadeOut(element) {
  let newOpacity = changeOpacity(element, -0.01);
  if (newOpacity <= 0) {
    element.style[`opacity`] = 0;
    setNewLine(element);
    requestAnimationFrame(function() {
      fadeIn(element);
    });
  }
  else {
    requestAnimationFrame(function() {
      fadeOut(element);
    });
  }
}

function fadeIn(element) {
  let newOpacity = changeOpacity(element, 0.01);
  if (newOpacity >= 1) {
    element.style[`opacity`] = 1;
  }
  else {
    requestAnimationFrame(function() {
      fadeIn(element);
    });
  }
}

function changeOpacity(element, amount) {
  let opacity = parseFloat(element.style.opacity);
  opacity += amount;
  element.style.opacity = opacity;
  return opacity;
}

function setNewLine(element) {
  if (element === line1 || element === line3) {
    element.innerText = random(haikuLines.fiveSyllables);
  }
  else {
    element.innerText = random(haikuLines.sevenSyllables);
  }
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}