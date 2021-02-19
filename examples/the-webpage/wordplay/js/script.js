/**
Transform Poem
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const MAX_SPEED = 10;
let words = `That was the last time I saw him.`;

setup();

function setup() {
  let text = document.getElementById(`text`);
  let chars = words.split(``);
  for (let i = 0; i < chars.length; i++) {
    let span = document.createElement(`span`);
    if (chars[i] === ` `) {
      span.innerHTML = `&nbsp`;
    }
    else {
      span.innerHTML = chars[i];
    }
    span.classList.add(`character`);
    span.addEventListener(`mouseenter`, fly, {
      once: true
    });
    text.appendChild(span);
  }
}

function fly(event) {
  console.log(event);
  let vx = MAX_SPEED / 2 - Math.random() * MAX_SPEED;
  let vy = MAX_SPEED / 2 - Math.random() * MAX_SPEED;
  requestAnimationFrame(function() {
    move(event.target, 0, 0, vx, vy);
  })
}

function move(element, x, y, vx, vy) {
  x += vx;
  y += vy;
  element.style[`transform`] = `translate(${x}px,${y}px)`;
  requestAnimationFrame(function() {
    move(element, x, y, vx, vy);
  });
}