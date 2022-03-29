 //Create variables first, reference them from html doc using DOM 
   // - StartQuizBtn, StartScreenEl, timerEl, HighscoreEl
    //- QuestionEl, questionTitleEl, AnswerChoicesEl

    var startQuizBtn = document.querySelector('.startQuizBtn button');
    var infoBox = document.querySelector('.rulesBox');
    var quitBtn = document.querySelector('.buttons .quitQuiz');
    var continueBtn = document.querySelector('.buttons .continue');
    var StartQuizBtn = document.querySelector('.startQuizBtn button');
    var quizBox = document.querySelector('.quizBox');

    //If start quiz button is pressed
    startQuizBtn.onclick = ()=>{
       infoBox.classList.add("activeInfo"); // Shows info box
    }

    //if quit button is pressed
    quitBtn.onclick = ()=>{
      infoBox.classList.remove("activeInfo"); //hides the info box
   }

   //if continue button is pressed
    continueBtn.onclick = ()=>{
      infoBox.classList.remove("activeInfo"); //hides the info box
      quizBox.classList.add("activeQuiz"); //Shows the quiz
   }

//Create an array of objects that hold all questions
  //  - Answer AnswerChoices 
   // - Quuestion text 
    // - Correct answer

    let questions = [
       {
          numb: 1,
          question: "What does CSS do?",
          answer: "Style an HTML Page",
          options: [
             "Style an HTML Page",
             "Make the website functionable",
             "Create dynamic webpage",
             "None of the above"
          ]
       },
       {
         numb: 2,
         question: "What does HTML stand for?",
         answer: "Hyper Text Preprocessor",
         options: [
            "Hyper Text Multiple Language",
            "Hyper Text Markup Language",
            "Hyper Text Preprocessor",
            "Hyper Tool Multi Language"
         ]
      },
      {
         numb: 3,
         question: "What data type is true/false?",
         answer: "Boolean",
         options: [
            "JQuery",
            "Boolean",
            "String",
            "Number"
         ]
      },
      {
         numb: 4,
         question: "What is JQuery?",
         answer: "Javascript Library",
         options: [
            "Javascript Library",
            "An Element",
            "DOM",
            "A Data Type"
         ]
      },
      {
         numb: 5,
         question: "How do I turn a String, into an Array",
         answer: ".split() Function",
         options: [
            ".concat() Function",
            ".splice() Function",
            ".join() Function",
            ".split() Function"
         ]
      },
    ]

    let questionCount = 0;




// Create a startQuiz() function triggered by the StartQuizBtn
   // -Hide start screen
   // -unhide questions screen 
   // -Starts timer 
   // -grab first question in the array

// Create a function to getQuestion()
   // -Renders title, choices and buttons

// Create a function to check if an answer is Correct
   // -if answer is correct, move to next question
    // -if answer is wrong, decrement the timer, move on to next question
    // -Keep track of points 
    // -Increment index in array of questions to move to next question

// Create a function to end the quiz 
   // -Hide the question Element,
   // -unhide the end of quiz Element
   // -unhide final score element , form, submitbtn

// Create functionality to save high scores to localStorage //