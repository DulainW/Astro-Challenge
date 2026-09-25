const questionBank = [
    {
        difficulty: "observer",
        image: "moon.jpg",
        question: "Which object is shown in this image?",
        answers: ["The Moon", "Mars", "Mercury", "Venus"],
        correct: 0,
        explanation: "This is Earth's Moon, our natural satellite. Its surface is covered with craters created by impacts over billions of years.",
        hint: "This object orbits Earth.",
        fact: "The Moon is about 384,400 km from Earth on average."
    },

    {
        difficulty: "observer",
        image: "jupiter.jpg",
        question: "Which planet is shown in this image?",
        answers: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1,
        explanation: "This is Jupiter, the largest planet in our Solar System. The Great Red Spot is a giant storm in its atmosphere.",
        hint: "It is the largest planet in our Solar System.",
        fact: "Jupiter is so large that more than 1,000 Earths could fit inside it by volume."
    },

    {
        difficulty: "observer",
        image: "mars.jpg",
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Mercury", "Earth"],
        correct: 0,
        explanation: "Mars is known as the Red Planet because iron minerals in its surface have oxidised, producing a reddish appearance.",
        hint: "Its surface contains a lot of iron oxide.",
        fact: "Mars has the largest volcano in the Solar System, Olympus Mons."
    },

    {
        difficulty: "observer",
        image: "saturn.jpg",
        question: "Which planet is famous for its prominent ring system?",
        answers: ["Jupiter", "Uranus", "Saturn", "Neptune"],
        correct: 2,
        explanation: "Saturn is famous for its spectacular ring system, which is made mostly of ice particles and rocky debris.",
        hint: "It is often considered the most recognisable ringed planet.",
        fact: "Saturn's rings are made mostly of water ice."
    },

    {
        difficulty: "observer",
        image: "earth.jpg",
        question: "Which planet is shown in this image?",
        answers: ["Earth", "Venus", "Mars", "Neptune"],
        correct: 0,
        explanation: "This is Earth, the third planet from the Sun and the only planet currently known to support life.",
        hint: "It is our home planet.",
        fact: "About 71% of Earth's surface is covered by water."
    },

    {
        difficulty: "astronomer",
        image: "andromeda.jpg",
        question: "What type of object is the Andromeda Galaxy?",
        answers: [
            "Spiral galaxy",
            "Planetary nebula",
            "Globular cluster",
            "Supernova remnant"
        ],
        correct: 0,
        explanation: "Andromeda is a large spiral galaxy and the nearest major galaxy to the Milky Way.",
        hint: "It has a broad disk with spiral arms.",
        fact: "Andromeda is approximately 2.5 million light-years from Earth."
    },

    {
        difficulty: "astronomer",
        image: "orion.jpg",
        question: "What is the bright reddish region in this image?",
        answers: [
            "Orion Nebula",
            "Andromeda Galaxy",
            "Horsehead Galaxy",
            "Crab Nebula"
        ],
        correct: 0,
        explanation: "The Orion Nebula is a massive star-forming region located in the constellation Orion.",
        hint: "It is one of the most famous star-forming regions in the night sky.",
        fact: "The Orion Nebula is roughly 1,300 light-years from Earth."
    },

    {
        difficulty: "astronomer",
        image: "black-hole.jpg",
        question: "What is a black hole?",
        answers: [
            "A region where gravity is so strong that light cannot escape",
            "A completely empty region of space",
            "A very cold planet",
            "A type of galaxy"
        ],
        correct: 0,
        explanation: "A black hole is a region of spacetime where gravity is so strong that nothing, including light, can escape once it passes the event horizon.",
        hint: "Think about extremely strong gravity.",
        fact: "The boundary around a black hole beyond which escape is impossible is called the event horizon."
    },

    {
        difficulty: "cosmologist",
        image: "cmb.jpg",
        question: "What does the Cosmic Microwave Background represent?",
        answers: [
            "Radiation left over from the early universe",
            "Light produced by modern stars",
            "Radiation from Earth's atmosphere",
            "Light from the Sun"
        ],
        correct: 0,
        explanation: "The Cosmic Microwave Background is ancient radiation released when the early universe became transparent to light.",
        hint: "It is often described as a 'snapshot' of the early universe.",
        fact: "The Cosmic Microwave Background dates from roughly 380,000 years after the Big Bang."
    },

    {
        difficulty: "cosmologist",
        image: "deep-field.jpg",
        question: "What does a deep-field image allow astronomers to study?",
        answers: [
            "Distant galaxies across the universe",
            "Only planets in our Solar System",
            "Earth's weather",
            "The surface of the Moon"
        ],
        correct: 0,
        explanation: "Deep-field observations allow astronomers to see extremely distant and faint galaxies, helping us study the history and evolution of the universe.",
        hint: "Look at the many faint galaxies in the background.",
        fact: "Some galaxies visible in deep-field images are billions of light-years away."
    }
];


// ==============================
// GAME VARIABLES
// ==============================

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
let hintUsed = false;
let selectedDifficulty = "observer";
let gameQuestions = [];


// ==============================
// PAGE ELEMENTS
// ==============================

const homeScreen = document.getElementById("homeScreen");
const difficultyScreen = document.getElementById("difficultyScreen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");
const reviewScreen = document.getElementById("reviewScreen");

const startButton = document.getElementById("startButton");

const questionNumber = document.getElementById("questionNumber");
const difficultyLabel = document.getElementById("difficultyLabel");
const questionText = document.getElementById("questionText");
const questionImage = document.getElementById("questionImage");

const answersContainer = document.getElementById("answers");

const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const hintButton = document.getElementById("hintButton");
const hintText = document.getElementById("hintText");

const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const finalScore = document.getElementById("finalScore");
const finalAccuracy = document.getElementById("finalAccuracy");
const finalRank = document.getElementById("finalRank");

const reviewContainer = document.getElementById("reviewContainer");
const restartButton = document.getElementById("restartButton");


// ==============================
// START BUTTON
// ==============================

startButton.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    difficultyScreen.classList.add("active");
});


// ==============================
// DIFFICULTY SELECTION
// ==============================

const difficultyCards = document.querySelectorAll(".difficulty-card");

difficultyCards.forEach(card => {

    card.addEventListener("click", () => {

        selectedDifficulty = card.dataset.difficulty;

        startGame();

    });

});


// ==============================
// START GAME
// ==============================

function startGame() {

    score = 0;
    currentQuestion = 0;

    clearInterval(timer);

    const selectedQuestions = questionBank.filter(
        question => question.difficulty === selectedDifficulty
    );

    const remainingQuestions = questionBank.filter(
        question => question.difficulty !== selectedDifficulty
    );

    shuffleArray(selectedQuestions);
    shuffleArray(remainingQuestions);

    gameQuestions = [
        ...selectedQuestions,
        ...remainingQuestions
    ].slice(0, 10);

    shuffleArray(gameQuestions);

    difficultyScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
    reviewScreen.classList.remove("active");
    quizScreen.classList.add("active");

    loadQuestion();
}


// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    clearInterval(timer);

    const question = gameQuestions[currentQuestion];

    hintUsed = false;

    questionNumber.textContent =
        `OBJECT ${currentQuestion + 1} / ${gameQuestions.length}`;

    difficultyLabel.textContent =
        question.difficulty.toUpperCase();

    questionText.textContent = question.question;

    questionImage.src = question.image;

    questionImage.alt = "Astronomical object";

    questionImage.onerror = () => {
        console.error("Image could not be loaded:", question.image);
        questionImage.alt = "Astronomical image unavailable";
    };

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answer-button");

        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answersContainer.appendChild(button);

    });

    feedback.textContent = "";
    feedback.className = "feedback";

    nextButton.style.display = "none";

    hintText.textContent = "";
    hintButton.disabled = false;

    const progress =
        (currentQuestion / gameQuestions.length) * 100;

    progressBar.style.width = `${progress}%`;

    startTimer();
}


// ==============================
// TIMER
// ==============================

function startTimer() {

    timeLeft = 20;

    updateTimer();

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }

    }, 1000);
}


function updateTimer() {

    timerDisplay.textContent = timeLeft;

}


// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer(selectedIndex) {

    clearInterval(timer);

    const question = gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const selectedButton = buttons[selectedIndex];
    const correctButton = buttons[question.correct];

    correctButton.classList.add("correct");

    if (selectedIndex === question.correct) {

        let points = 500 + (timeLeft * 10);

        if (hintUsed) {
            points -= 100;
        }

        score += points;

        selectedButton.classList.add("correct");

        feedback.textContent =
            `CORRECT — +${points} points`;

        feedback.classList.add("correct-feedback");

    } else {

        selectedButton.classList.add("incorrect");

        feedback.textContent =
            `INCORRECT — ${question.explanation}`;

        feedback.classList.add("incorrect-feedback");

    }

    nextButton.style.display = "block";
}


// ==============================
// TIME OUT
// ==============================

function timeOut() {

    const question = gameQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    buttons[question.correct].classList.add("correct");

    feedback.textContent =
        `TIME'S UP — ${question.explanation}`;

    feedback.classList.add("incorrect-feedback");

    nextButton.style.display = "block";
}


// ==============================
// NEXT QUESTION
// ==============================

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= gameQuestions.length) {

        showResults();

    } else {

        loadQuestion();

    }

});


// ==============================
// HINT
// ==============================

hintButton.addEventListener("click", () => {

    const question = gameQuestions[currentQuestion];

    hintText.textContent =
        `HINT: ${question.hint}`;

    hintUsed = true;

    hintButton.disabled = true;

});


// ==============================
// RESULTS
// ==============================

function showResults() {

    clearInterval(timer);

    quizScreen.classList.remove("active");
    resultsScreen.classList.add("active");

    const totalQuestions = gameQuestions.length;

    const maximumPossibleScore =
        totalQuestions * 700;

    const accuracy =
        Math.round((score / maximumPossibleScore) * 100);

    finalScore.textContent = score;

    finalAccuracy.textContent = `${accuracy}%`;

    let rank;

    if (accuracy >= 90) {

        rank = "COSMOLOGIST";

    } else if (accuracy >= 70) {

        rank = "ASTRONOMER";

    } else if (accuracy >= 50) {

        rank = "SPACE EXPLORER";

    } else {

        rank = "SPACE CADET";

    }

    finalRank.textContent = rank;

    progressBar.style.width = "100%";
}


// ==============================
// REVIEW
// ==============================

const reviewButton =
    document.getElementById("reviewButton");

reviewButton.addEventListener("click", () => {

    resultsScreen.classList.remove("active");
    reviewScreen.classList.add("active");

    reviewContainer.innerHTML = "";

    gameQuestions.forEach((question, index) => {

        const reviewItem =
            document.createElement("div");

        reviewItem.classList.add("review-item");

        reviewItem.innerHTML = `
            <div class="review-number">
                OBJECT ${index + 1}
            </div>

            <h3>${question.question}</h3>

            <p>
                <strong>Correct answer:</strong>
                ${question.answers[question.correct]}
            </p>

            <p>
                ${question.explanation}
            </p>

            <p class="review-fact">
                <strong>ASTRONOMY FACT:</strong>
                ${question.fact}
            </p>
        `;

        reviewContainer.appendChild(reviewItem);

    });

});


// ==============================
// RESTART
// ==============================

restartButton.addEventListener("click", () => {

    clearInterval(timer);

    reviewScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
    quizScreen.classList.remove("active");

    difficultyScreen.classList.add("active");

});


// ==============================
// SHUFFLE QUESTIONS
// ==============================

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];

    }

    return array;
}
