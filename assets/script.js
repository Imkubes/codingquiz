 //Create variables first, reference them from html doc using DOM 
   // - StartQuizBtn, StartScreenEl, timerEl, HighscoreEl
    //- QuestionEl, questionTitleEl, AnswerChoicesEl

//Create an array of objects that hold all questions
  //  - Answer AnswerChoices 
   // - Quuestion text 
    // - Correct answer 

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