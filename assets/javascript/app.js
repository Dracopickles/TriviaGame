// create variables for you stuff

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var sumbitButton = document.getElementById('submit');

// create a function to create the quiz

function buildQuiz(){
  var output = [];

  quizQuestions.forEach(
  (currentQustion, questionNumber) => {
     var answer = [];

     for(letter in currentQustion.answers){
       answers.push(
         `<label>
         <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
           </label>`
       );
     }

     output.push(
       `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
     );
     }
  );
  
  quizContainer.innerHTML = output.join('');
    }
  



function showResults(){}

buildQuiz();

sumbitButton.addEventListener('click', showResults);

// create a array to hold all your questions in.

var quizQuestions = [
  {
    question: "What monster has two horns and lives in the desert regions?",
    answers: {
      a: "Rathian",
      b: "Diablos",
      c: "Deviljo",
      d: "Barroth"
    },
    correctAnswer: "b"
},
{
  question: "Which of these weapons could 'not' cut off a monster tail?",
  answers: {
    a: "Switch-Axe",
    b: "Heavy-Bowgun",
    c: "Hammer",
    d: "Greatsword"
  },
  correctAnswer: "c"
},
{
  question: "What item do you get when you combine a potion with honey?",
  answers: {
    a: "Max-potion",
    b: "Immunizzer",
    c: "Antidote",
    d: "Mega-Potion"
  },
  correctAnswer: "d"
},
]
