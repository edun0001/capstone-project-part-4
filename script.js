const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultContainer = document.getElementById('result');
const scoreContainer = document.getElementById('score');
const quizForm = document.getElementById('quiz-form');

let correctAnswers = 0;
let incorrectAnswers = 0;

// Quiz questions
const quizQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
        correctAnswer: 'Mitochondria'
    }
];

// Function to display a question
function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const currentQuestion = quizQuestions[randomIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'option';
        radioInput.value = option;

        const label = document.createElement('label');
        label.textContent = option;

        const optionDiv = document.createElement('div');
        optionDiv.appendChild(radioInput);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });
}

// Function to check the submitted answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an answer');
        return;
    }

    const userAnswer = selectedOption.value;
    const currentQuestion = quizQuestions.find(question => question.question === questionContainer.textContent);

    if (userAnswer === currentQuestion.correctAnswer) {
        resultContainer.textContent = 'Correct!';
        correctAnswers++;
    } else {
        resultContainer.textContent = `Incorrect! The correct answer is ${currentQuestion.correctAnswer}`;
        incorrectAnswers++;
    }

    // Update the score
    scoreContainer.textContent = `Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}`;

    // Display the next question
    setTimeout(() => {
        resultContainer.textContent = '';
        displayQuestion();
    }, 2000);
}

// Event listener for submitting the quiz form
quizForm.addEventListener('submit', event => {
    event.preventDefault();
    checkAnswer();
});

// Display all questions when the page loads
displayQuestion();