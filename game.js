const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = []
let questions = [];

fetch('/capital/questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 7;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    // loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/capital/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    // progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    console.log(questionIndex);
    //imageWithQue.innerHTML = availableQuestions[questionIndex].image;
    

    // img.setAttribute("style", "width: 23rem");
    //document.getElementById("imageWithQue").appendChild(img);
    question.innerText = currentQuestion.question;



    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        nextButton.removeAttribute('disabled');
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        
        const selectedAnswer = selectedChoice.dataset['number'];
    
        
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        if(currentQuestion.answer == answer1.dataset['number'])
        {
            answer1.parentElement.classList.add('correct');
        }
        else if(currentQuestion.answer == answer2.dataset['number'])
        {
            answer2.parentElement.classList.add('correct');
        }
        else if(currentQuestion.answer == answer3.dataset['number'])
        {
            answer3.parentElement.classList.add('correct');
        }
        else
        {
            answer4.parentElement.classList.add('correct');
        }


        selectedChoice.parentElement.classList.add(classToApply);
        


        // next button code
        nextWorking = ()=>{
            window.scrollTo(0,0);
            selectedChoice.parentElement.classList.remove(classToApply);
            answer1.parentElement.classList.remove('correct');
            answer2.parentElement.classList.remove('correct');
            answer3.parentElement.classList.remove('correct');
            answer4.parentElement.classList.remove('correct');
            nextButton.setAttribute('disabled', 'disabled');
            getNewQuestion();
        }; 
    });
});

incrementScore = (num) => {
    score += num;
};