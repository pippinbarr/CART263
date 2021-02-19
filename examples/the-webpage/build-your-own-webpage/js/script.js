/**
Build Your Own Website
Pippin Barr

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let htmlInput = document.getElementById(`html-input`);
let submitButton = document.getElementById(`submit-button`);

submitButton.addEventListener(`click`, addHTML);

function addHTML(event) {
  let html = htmlInput.value;
  let element = document.createElement(`span`);
  element.innerHTML = html;
  document.body.appendChild(element);
}