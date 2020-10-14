var btnEl = document.getElementById("start");

var questions = {
  questionOne: ["Q1- Commonly used data types DO Not include"],
  questionTwo: ["The Condition in an if/else statementis enclosed within____."],
  questionThree: ["Arrays in JavaScript can be used to store____."],
  questionFour: [
    "String Values must be enclosed within____when being assigned to variables.",
  ],
  questionFive: [
    "A very useful tool used during developement and debugging for printing content to the debugger is: ",
  ],
};

var possibleAnswers = {
  possibleAnswerOne: ["string", "booleans", "alerts", "numbers"],
  possibleAnswerTwo: [
    "quotes",
    "curly brackets",
    "parenthesis",
    "square brackets",
  ],
  possibleAnswerThree: [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above",
  ],
  possibleAnswerFour: ["commas", "curly brackets", "quotes", "parentheses"],
  possibleAnswerFive: [
    "JavaScript",
    "terminal / bash",
    "for loops",
    "console.log",
  ],
};
var answers = {
  answerOne: ["Alerts"],
  answerTwo: ["parentheses"],
  answerThree: ["all of the above"],
  answerFour: ["quotes"],
  answerFive: ["console.log"],
};
// btnEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   for (var i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
//   }
//   for (var i = 0; i < answers.length; i++) {
//     console.log(answers[i]);
//   }
//   //if (questions)
// });
