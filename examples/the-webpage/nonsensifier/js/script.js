/**
Nonsensifier
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const nonsense = [`☰`, `☱`, `☲`, `☳`, `☴`, `☵`, `☶`, `☷`];
const paras = document.getElementsByTagName(`p`);

setInterval(doNonsense, 50);

function doNonsense() {
  let para = random(paras);
  let text = para.innerText;
  let index = Math.floor(Math.random() * text.length);
  let nonsenseChar = random(nonsense);
  para.innerText = text.substring(0, index) + nonsenseChar + text.substring(index + 1, text.length);
}

function random(array) {
  let r = Math.floor(Math.random() * array.length);
  return array[r];
}