let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
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
    window.location.href = 'index.html';
});

// Start the quiz when the page loads
startQuiz();