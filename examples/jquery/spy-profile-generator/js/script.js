"use strict";

const TOP_SECRET_DATA_SAVE_NAME = `top-secret-data`;
let userData = {
  users: []
};

const TAROT_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const OBJECTS_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const INSTRUMENTS_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
let profileGenerationDataLoaded = false;

let tarotData;
let objectsData;
let instrumentsData;

$.when(
  $.getJSON(TAROT_URL),
  $.getJSON(OBJECTS_URL),
  $.getJSON(INSTRUMENTS_URL)
).then(function(loadedTarotData, loadedObjectsData, loadedInstrumentsData) {
  tarotData = loadedTarotData[0];
  objectsData = loadedObjectsData[0];
  instrumentsData = loadedInstrumentsData[0];

  setupLoginUI();
  setupNewUserUI();
});

let loadedData = JSON.parse(localStorage.getItem(TOP_SECRET_DATA_SAVE_NAME));
if (loadedData) {
  userData = loadedData;
}



/************************************
Login Interface
************************************/

function setupLoginUI() {
  $(`#login-submit-button`).on(`click`, login);
  $(`#login-new-user-button`).on(`click`, newUser);
}

function login() {
  let username = $(`#login-username`).val();
  let password = $(`#login-password`).val();
  let users = userData.users.filter((user) => user.username === username);
  if (users.length === 0) {
    // The user doesn't exist
    alert("No such user");
    resetLogin();
  }
  else {
    if (users[0].password === password) {
      // Password correct
      $(`#login`).hide();
      loadProfile(users[0]);
      $(`#profile`).show();
    }
    else {
      // Incorrect password
      alert("Password incorrect");
      resetLogin();
    }
  }
}

function resetLogin() {
  $(`#login-username`).val(``);
  $(`#login-password`).val(``);
}

function newUser() {
  $(`#login`).hide();
  $(`#new-user`).show();
}


/************************************
New User Interface
************************************/

function setupNewUserUI() {
  $(`#new-user-submit-button`).on(`click`, createUser);
}

function createUser() {
  let username = $(`#new-user-username`).val();

  if (username === ``) {
    alert(`Please enter a username`);
  }
  else if (userData.users.filter(user => user.username === username).length > 0) {
    alert(`Username taken`);
  }
  else {
    let user = {
      username: username,
      password: random(instrumentsData.instruments),
      alias: random(tarotData.tarot_interpretations).name,
      secretWeapon: random(objectsData.objects)
    };
    userData.users.push(user);
    localStorage.setItem(TOP_SECRET_DATA_SAVE_NAME, JSON.stringify(userData));

    $(`#new-user`).hide();
    loadProfile(user);
    $(`#profile`).show();
  }
}


/************************************
Helpers
************************************/

function loadProfile(user) {
  $(`#profile-username`).text(user.username);
  $(`#profile-password`).text(user.password);
  $(`#profile-alias`).text(user.alias);
  $(`#profile-secret-weapon`).text(user.secretWeapon);
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}