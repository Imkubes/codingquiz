 //Create variables first, reference them from html doc using DOM 
   // - StartQuizBtn, StartScreenEl, timerEl, HighscoreEl
    //- QuestionEl, questionTitleEl, AnswerChoicesEl

    var startQuizBtn = document.querySelector('.startQuizBtn button');
    var infoBox = document.querySelector('.rulesBox');
    var quitBtn = document.querySelector('.buttons .quitQuiz');
    var continueBtn = document.querySelector('.buttons .continue');
    var StartQuizBtn = document.querySelector('.startQuizBtn button');
    var quizBox = document.querySelector('.quizBox');
    var optionList = document.querySelector('.optionList');

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
      showQuestions(0);
      questionCounter(1);
   }

//Create an array of objects that hold all questions
  //  - Answer AnswerChoices 
   // - Quuestion text 
    // - Correct answer


    let questionCount = 0;
    let questionNum = 1;
    let score = 0;
    var nextBtn = quizBox.querySelector('.nextQuestionBtn');

    //If next button is clicked
    nextBtn.onclick = ()=>{
       if(questionCount < questions.length - 1){
         questionCount++;
         questionNum++;
         showQuestions(questionCount);
         questionCounter(questionNum);
       }else {
          console.log("Questions Completed");
       }
    }

    //Getting questions and options from array
    function showQuestions(index) {
       var questionText = document.querySelector('.questionText');
       let questionTag = '<span>'+ questions[index].question +'</span>';
       let optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                       + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                       + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                       + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
       questionText.innerHTML = questionTag;
       optionList.innerHTML = optionTag;
       var option = optionList.querySelectorAll('.option');
       for (let i = 0; i < option.length; i++) {
          option[i].setAttribute("onclick", "optionSelected(this)");
       }
    }

    function optionSelected(answer){
       let userAns = answer.textContent;
       let correctAns = questions[questionCount].answer;
       let allOptions = optionList.children.length;
       if (userAns === correctAns){
          score++;
          answer.classList.add("correct");
          console.log("yas");
       } else {
         answer.classList.add("incorrect");
          console.log("no");
          console.log(score);

          for (let i = 0; i < allOptions; i++) {
             if (optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class", "option correct");
             }
          }
       }

       //once user picks an option, all others are disabled
       for (let i = 0; i < allOptions.length; i++) {
          optionList.children[i].classList.add('disabled');
       }
    }

    function questionCounter(index){   
    var bottomQuestionCounter = document.querySelector('.totalQuestions');
    let totalQuestionTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottomQuestionCounter.innerHTML = totalQuestionTag;
    }



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