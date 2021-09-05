var highScoresCounter = counterTimer;
var startTime = 60;
var counterTimer;
var timer = document.getElementById("timer");

// created the start button 
var btnStart = document.getElementsByClassName("btn-start")[0];
var h1 = document.getElementById("h1");
var instructions = document.getElementById("instructions");


document.getElementById("timer").innerHTML = startTime;

function init() {
  highScores();
}

// starts the quiz and timer as well as added and event listener to the start button
btnStart.addEventListener("click", function () {
  // Set the text for our question
  h1.innerText = "Question:";
  instructions.remove();
  counterTimer = setInterval(myTimer, 1000);

  // removes the start button when quiz starts
  btnStart.remove();
});

// the questions start 
var questionsData = [
  {
    textOfQuestion: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
    correctIndex: 2,
  },
  {
    textOfQuestion: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cascading Style Scripts",
      "Cars Sit Still",
      "Cascading Script Sheets",
    ],
    correctIndex: 0,
  },
  {
    textOfQuestion:
      "In Java, a method is a container that holds classes",
    options: ["True", "False"],
    correctIndex: 1,
  },
];
// setting up the variables for the questions and options inthe questions
const questionsDisplayed = document.querySelector("#questions");
const optionsDisplayed = document.querySelector("#options");
let answerIndex = 0;

//added the funtions to read and record the questions 
btnStart.addEventListener("click", function () {
  // sets the text of the questions
  h1.innerText = "Question:";
  instructions.remove();
  // remove the start button
  btnStart.remove();

  renderQuestion();
});

optionsDisplayed.addEventListener("click", function (e) {
  const element = e.target;
  const question = questionsData[answerIndex];

  if (!element.matches("button")) return;

  // checks to see if the question is answered coorrectly and returns a pop up 
  if (element.textContent === question.options[question.correctIndex]) {
    // tells whether its answered correctly 
    alert("Correct!");
    startTime = startTime + 15;
  } else {
    alert("Incorrect!");
    startTime = startTime - 15;
  }
  //increase the question index
  answerIndex++;
  if (answerIndex == questionsData.length) {
    endGame();
  }
  renderQuestion();
});

function renderQuestion() {
  const question = questionsData[answerIndex];
  questionsDisplayed.textContent = question.textOfQuestion;
  optionsDisplayed.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    // reference the option text
    const option = question.options[i];
    //create a button
    const button = document.createElement("button");
    //set the button text
    button.textContent = option;
    //add the button to the options p
    optionsDisplayed.append(button);
  }
}

// added a funtion to create the highscores and questions answered

function endGame() {
  questionsDisplayed.remove();
  optionsDisplayed.remove();
  alert(`Completed!`);
  myStopFunction();
  h1.innerText = "High Scores:";
}

// Timer
function myTimer() {
  startTime = startTime - 1;
  document.getElementById("timer").innerHTML = startTime;
  if (startTime === 0) {
    alert(`Out of Time!`);
    myStopFunction();
  }
}

function myStopFunction() {
  clearInterval(counterTimer);
}
//

// records the highscores
function highScores() {
  // will store the highscore if there is storage for it
  var storedHighScores = localStorage.getElementById("highscores");
  // will set the counter to zero if the storage doesnt exist
  if (storedHighScores === null) {
    highScoresCounter = 0;
  } else {
    // will set the highscore from the client storage
    highScoresCounter = storedHighScores;
  }
  //will render the highscores to the page
  win.textContent = "high scores";
}
