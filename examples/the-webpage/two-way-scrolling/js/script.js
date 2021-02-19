"use strict";

window.addEventListener('load', setup);

let rightDiv = {
  element: undefined,
  pScrollTop: undefined,
  autoScrolled: false
};

let leftDiv = {
  element: undefined,
  pScrollTop: undefined,
  autoScrolled: false
};

function setup() {
  leftDiv.element = document.getElementById(`left-div`);
  rightDiv.element = document.getElementById(`right-div`);

  rightDiv.element.scrollTop = rightDiv.element.scrollHeight;

  leftDiv.pScrollTop = leftDiv.element.scrollTop;
  rightDiv.pScrollTop = rightDiv.element.scrollTop;

  leftDiv.element.addEventListener('scroll', function(e) {
    oppositeScroll(leftDiv, rightDiv);
  });

  rightDiv.element.addEventListener('scroll', function(e) {
    oppositeScroll(rightDiv, leftDiv);
  });
}

function oppositeScroll(main, other) {
  if (main.autoScrolled) {
    main.autoScrolled = false;
    return;
  }

  let delta = main.element.scrollTop - main.pScrollTop;
  main.pScrollTop = main.element.scrollTop;
  other.element.scrollTop -= delta;
  other.autoScrolled = true;
}