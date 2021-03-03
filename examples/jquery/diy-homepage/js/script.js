"use strict";

let data = JSON.parse(localStorage.getItem(`diy-homepage`));
console.log(data);
if (data) {
  $(`#homepage`).html(data.html);
}

$(`h1,h2,p,li`).attr(`contenteditable`, `true`);
$(`img`).on(`click`, function() {
  let newImageURL = prompt(`What is the URL of your profile picture?`);
  $(this).attr(`src`, newImageURL);
});

$(`#save-button`).on(`click`, function() {
  let data = {
    html: $(`#homepage`).html()
  };
  localStorage.setItem(`diy-homepage`, JSON.stringify(data));
});