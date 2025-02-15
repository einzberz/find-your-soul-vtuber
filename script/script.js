let currentQuestionIndex = 0;

const startButton = document.getElementById('start-button');
const landingContainer = document.querySelector('.landing-container');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const restartButton = document.getElementById('restart-button');
const randomResultButton = document.getElementById('random-result-button');

function showRandomResult() {
    showResult();
}
function startQuiz() {
    console.log('Quiz started!');
    currentQuestionIndex = 0;
    console.log(1);
    landingContainer.classList.add('hide');
    console.log(2);
    // resultContainer.classList.add('hide');
    console.log(3);
    quizContainer.classList.remove('hide');
    console.log(4);
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    questionText.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer());
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function getRandomPersonality() {
    const personalityTypes = Object.keys(personalities);
    const randomIndex = Math.floor(Math.random() * personalityTypes.length);
    return personalityTypes[randomIndex];
}

function showResult() {
    updateProgressBar();
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    // Get random personality
    const randomPersonality = getRandomPersonality();
    const result = personalities[randomPersonality];
    
    document.getElementById('result-image').src = result.image;
    document.getElementById('result-text').innerHTML = 
        `<h3>${result.type}</h3><p>${result.description}</p>`;
}

restartButton.addEventListener('click', () => {
    quizContainer.classList.add('hide');
    landingContainer.classList.remove('hide');
    resetQuiz();
});

function resetQuiz() {
    currentQuestionIndex = 0;
    resetState();
    updateProgressBar();
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
}

startButton.addEventListener('click', startQuiz);
