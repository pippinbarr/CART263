"use strict";

/**
Raving Redactionist
Pippin Barr

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don`t let all the
secrets become revealed!
*/

// The chance a span will be revealed per update
const REVEAL_PROBABILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;

setup();

/**
Sets the click handler and starts the time loop
*/
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $(`span`);
  // Set a click handler on the spans (so we know when they`re clicked)
  $spans.on(`click`, redact);
  // Set an interval of 500 milliseconds to attempt the revelation of secrets
  setInterval(revelation, UPDATE_FREQUENCY);
};

/**
When a span is clicked we remove its revealed class and add the redacted class
thus blacking it out
*/
function redact() {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

/**
Update is called every 500 milliseconds and it updates all the spans on the page
using jQuery`s each() function which calls the specified function on _each_ of the
elements in the selection
*/
function revelation() {
  $spans.each(attemptReveal);
}

/**
With random chance it unblanks the current span by removing the
redacted class and adding the revealed class. Because this function is called
by each(), "this" refers to the current element that each has selected.
*/
function attemptReveal() {
  let r = Math.random();
  if (r < REVEAL_PROBABILITY) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}