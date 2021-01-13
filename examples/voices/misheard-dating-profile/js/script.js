"use strict";

// Questions and answers for the dating profile
let data = [{
    category: `Name`,
    question: `What is your name?`,
    answer: ``
  },
  {
    category: `Age`,
    question: `How old are you?`,
    answer: ``,
  },
  {
    category: `Eyes`,
    question: `What color are your eyes?`,
    answer: ``,
  },
  {
    category: `Favorite food`,
    question: `What is your favourite food?`,
    answer: ``
  }
];
// Which question are we asking?
let currentQuestion = 0;

function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Start annyang
    annyang.start();
    // Rather than using specific commands, we'll just listen for any time
    // the user says something because we want to mishear it on purpose.
    // To do this we add the result callback and tell it to call our
    // heardSpeech() function when it hears something
    annyang.addCallback(`result`, heardSpeech);
  }
}

// heardSpeech(options)
// Called by annyang whenever the user says something.
// options: an array of possible things the user said, in order of likelihood
function heardSpeech(options) {
  // Get the least likely thing they said by using pop() to get the last element
  // in the array of options
  let worstAnswer = options.pop();
  // Set that as the answer to the current question
  data[currentQuestion].answer = worstAnswer;
  // Go to the next question
  currentQuestion++;
  // If that was the last question already (we went to the end of the array)
  // then stop listening to the user by removing the callback
  if (currentQuestion >= data.length) {
    annyang.removeCallback(`result`);
  }
}

// draw()
// Display the questions and dating profile
function draw() {
  background(0);

  displayQuestion();
  displayProfile();
}

// displayQuestion()
// Displays the current question or nothing if we're finished
function displayQuestion() {
  // Make sure our current question is still valid
  if (currentQuestion < data.length) {
    // If so, display the question
    push();
    fill(255);
    textStyle(BOLD);
    textFont(`Helvetica`);
    textSize(24);
    let question = data[currentQuestion].question;
    text(question, 100, 100);
    pop();
  }
}

// displayProfile()
// Displays the current state of the dating profile
function displayProfile() {
  push();
  fill(255);
  textFont(`Courier`);
  textSize(18);
  // A header
  let dataString = `Dating profile\n\n`;
  // Loop through the data array to display the categories and answers
  for (let i = 0; i < data.length; i++) {
    // Add the current category and answer to our string to display
    dataString += `${data[i].category}: ${data[i].answer}\n`;
  }
  // Display the string
  text(dataString, 100, 200);
  pop();
}