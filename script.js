var btn = document.querySelector("#start");
var startEl = document.querySelector("#start-screen");
var questionsEl = document.querySelector("#questions");
//var testEl = document.querySelector("#test");
var possAnswersEl = document.querySelector("#possible-answers");
var answersEl = document.querySelector("#answers");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var modalQuestEl = document.querySelector("#questions");
var closeEl = document.querySelector(".close");
var nextBtn = document.querySelector("#next");

let questions = [
  {
    Q1: "Commonly used data types DO Not include",
    Q2: "The Condition in an if/else statementis enclosed within____.",
    Q3: "Arrays in JavaScript can be used to store____.",
    Q4:
      "String Values must be enclosed within____when being assigned to variables.",
    Q5:
      "A very useful tool used during developement and debugging for printing content to the debugger is: ",
  },
];
let possibleAnswers = [
  {
    possA1: ["string", "booleans", "alerts", "numbers"],
    possA2: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    possA3: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    possA4: ["commas", "curly brackets", "quotes", "parentheses"],
    possA5: ["JavaScript", "terminal / bash", "for loops", "console.log"],
  },
];
let answers = [
  {
    A1: ["alerts"],
    A2: ["parentheses"],
    A3: ["all of the above"],
    A4: ["quotes"],
    A5: ["console.log"],
  },
];
// // modalEl.setAttribute("style");
// var modal = document.getElementById("modal-container");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function () {
//   modal.style.display = "block";
// };
// span.onclick = function () {
//   modal.style.display = "none";
// };

// var currentId = 0;
// function addQuestions(event) {
//   event.preventDefault();
//   var name = testEl.value;
//   var li = document.createElement("li");
//   li.id = people.length;
//   li.innerHTML = name + " <button>start quiz</button>";
//   people.push({ name: name });
//   peopleListEl.append(li);
// }

// function close() {
//   modalEl.getElementsByClassName.display = "none";
// }
// function handleClick(event) {
//   if (event.target.matches("button")) {
//     event.preventDefault();
//     modalEl.style.display = "block";
//     currentId = parseInt(event.target.parentElement.id);
//     var Q1 = questions[currentId].Q1;
//     var description = questions[currentId].description;
//     modalNameEl.textContent = Q1;
//     if (description) {
//       descriptionEl.value = "";
//     } else {
//       descriptionEl.value = "";
//     }
//   }
// // }
// closeEl.addEventListener("click", close);
// nextBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   questions[currentId].description = descriptionEl.value;
//   close();
// });
// btn.addEventListener("click", addQuestions);
// questionsEl.addEventListener("click", handleClick);
// document.addEventListener("click", function (event) {
//   if (event.target === modalEl) {
//     close();
//   }
// });

// var h3 = document.createElement("h3");
// h3.innerHTML.textContent = Q1;
// questions.push({ Q1 });
// questionsEl.append(h3);
// var
