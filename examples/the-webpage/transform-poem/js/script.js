/**
Transform Poem
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

addInteraction(`mover`, startTranslate);
addInteraction(`spinner`, startRotate);
addInteraction(`skewer`, startSkew);



function addInteraction(className, callback) {
  let elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(`mouseenter`, callback, {
      once: true
    });
  }
}

function startTranslate(event) {
  requestAnimationFrame(function() {
    let vx = 5 - (Math.random() * 10);
    let vy = Math.random() * 10;
    translate(event.target, 0, 0, vx, vy);
  });
}

function translate(element, x, y, vx, vy) {
  x += vx;
  y += vy;

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  requestAnimationFrame(function() {
    translate(element, x, y, vx, vy);
  });
}

function startRotate(event) {
  requestAnimationFrame(function() {
    rotate(event.target, 0);
  });
}

function rotate(element, angle) {
  element.style.transform = `rotate(${angle}deg)`;
  angle += 10;

  requestAnimationFrame(function() {
    rotate(element, angle);
  });
}

function startSkew(event) {
  requestAnimationFrame(function() {
    skew(event.target, 0);
  });
}

function skew(element, angle) {
  element.style.transform = `skew(${angle}deg)`;
  angle += 1;

  requestAnimationFrame(function() {
    skew(element, angle);
  });
}