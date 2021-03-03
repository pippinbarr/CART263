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

let $line1 = $(`#line-1`);
let $line2 = $(`#line-2`);
let $line3 = $(`#line-3`);

setupLines();

function setupLines() {
  $(`.line`).each(setNewLine);
  $(`.line`).on(`click`, changeLine);
}

function setNewLine() {
  if ($(this).hasClass(`five`)) {
    $(this).text(random(haikuLines.fiveSyllables));
  }
  else if ($(this).hasClass(`seven`)) {
    $(this).text(random(haikuLines.sevenSyllables));
  }
}

function changeLine(event) {
  $(this).fadeOut(1000, function(event) {
    $(this).each(setNewLine);
    $(this).fadeIn(1000);
  })
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}