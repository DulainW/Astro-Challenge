// ===============================
// ASTRO CHALLENGE
// ===============================

const questionBank = [

    {
        difficulty: "observer",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/FullMoon2010.jpg",
        answers: ["Moon", "Mars", "Venus", "Mercury"],
        correct: "Moon",
        explanation: "The Moon is Earth's natural satellite and is the fifth-largest moon in the Solar System.",
        hint: "It is Earth's only natural satellite.",
        fact: "The Moon is approximately 384,400 km from Earth."
    },

    {
        difficulty: "observer",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        correct: "Jupiter",
        explanation: "Jupiter is the largest planet in our Solar System.",
        hint: "It is the largest planet.",
        fact: "Jupiter has a mass more than twice that of all the other planets combined."
    },

    {
        difficulty: "observer",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        answers: ["Mars", "Venus", "Mercury", "Earth"],
        correct: "Mars",
        explanation: "Mars is known as the Red Planet because iron minerals in its soil give the surface its reddish appearance.",
        hint: "Look for the reddish planet.",
        fact: "Mars has two small moons: Phobos and Deimos."
    },

    {
        difficulty: "observer",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        answers: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        correct: "Saturn",
        explanation: "Saturn is famous for its extensive ring system.",
        hint: "Look for the planet with spectacular rings.",
        fact: "Saturn's rings are mainly made of ice particles and rocky debris."
    },

    {
        difficulty: "observer",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        answers: ["Earth", "Venus", "Mars", "Neptune"],
        correct: "Earth",
        explanation: "Earth is the third planet from the Sun and the only known planet with life.",
        hint: "This is our home planet.",
        fact: "About 71% of Earth's surface is covered by water."
    },

    {
        difficulty: "astronomer",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
        answers: ["Andromeda Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy", "Triangulum Galaxy"],
        correct: "Andromeda Galaxy",
        explanation: "The Andromeda Galaxy is the nearest major galaxy to the Milky Way.",
        hint: "It is the closest major galaxy to ours.",
        fact: "Andromeda is approximately 2.5 million light-years away."
    },

    {
        difficulty: "astronomer",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
        answers: ["Orion Nebula", "Crab Nebula", "Ring Nebula", "Eagle Nebula"],
        correct: "Orion Nebula",
        explanation: "The Orion Nebula is a huge cloud of gas and dust where new stars are forming.",
        hint: "It can be found in the constellation Orion.",
        fact: "The Orion Nebula is approximately 1,300 light-years away."
    },

    {
        difficulty: "astronomer",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg",
        answers: ["Black Hole", "Neutron Star", "White Dwarf", "Red Giant"],
        correct: "Black Hole",
        explanation: "A black hole is an object with gravity so strong that even light cannot escape from within its event horizon.",
        hint: "Nothing, not even light, can escape its event horizon.",
        fact: "The first image of a black hole was released in 2019."
    },

    {
        difficulty: "cosmologist",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/PIA23645-Planck-ESA-CMB-map.jpg",
        answers: [
            "Cosmic Microwave Background",
            "Solar Wind",
            "Aurora",
            "Interstellar Dust"
        ],
        correct: "Cosmic Microwave Background",
        explanation: "The Cosmic Microwave Background is radiation left over from the early universe.",
        hint: "It is ancient radiation from the early universe.",
        fact: "The CMB provides important evidence for the Big Bang model."
    },

    {
        difficulty: "cosmologist",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Hubble_ultra_deep_field.jpg",
        answers: [
            "Deep Field",
            "Solar System",
            "Asteroid Belt",
            "Star Cluster"
        ],
        correct: "Deep Field",
        explanation: "Deep-field images reveal thousands of distant galaxies across a tiny region of the sky.",
        hint: "It contains enormous numbers of distant galaxies.",
        fact: "Some galaxies in deep-field images are billions of light-years away."
    }

];


// ===============================
// GAME VARIABLES
// ===============================

let questions = [];
let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let timer;
let timeLeft = 20;
let hintUsed = false;
let selectedDifficulty = "";


// ===============================
// SCREEN MANAGEMENT
// ===============================

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

}


// ===============================
// START BUTTON
// ===============================

document.getElementById("startButton").addEventListener("click", () => {

    showScreen("difficultyScreen");

});


// ===============================
// DIFFICULTY SELECTION
// ===============================

document.querySelectorAll(".difficulty-card").forEach(card => {

    card.addEventListener("click", () => {

        selectedDifficulty = card.dataset.difficulty;

        startGame();

    });

});


// ===============================
// START GAME
// ===============================

function startGame() {

    currentQuestion = 0;
    score = 0;
    correctCount = 0;

    let selectedQuestions = questionBank.filter(
        question => question.difficulty === selectedDifficulty
    );

    // Shuffle selected questions
    selectedQuestions = shuffle(selectedQuestions);

    // If there are fewer than 10 questions,
    // add questions from the rest of the question bank.
    let remainingQuestions = questionBank.filter(
        question => !selectedQuestions.includes(question)
    );

    remainingQuestions = shuffle(remainingQuestions);

    questions = [
        ...selectedQuestions,
        ...remainingQuestions
    ].slice(0, 10);

    document.getElementById("score").textContent = "0000";

    showScreen("quizScreen");

    loadQuestion();

}


// ===============================
// SHUFFLE
// ===============================

function shuffle(array) {

    return array.sort(() => Math.random() - 0.5);

}


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    clearInterval(timer);

    hintUsed = false;
    timeLeft = 20;

    const question = questions[currentQuestion];

    // Question number
    document.getElementById("questionNumber").textContent =
        `${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

    // Difficulty
    document.getElementById("difficultyLabel").textContent =
        question.difficulty.toUpperCase();

    // Timer
    document.getElementById("timer").textContent = timeLeft;

    // Progress
    const progress =
        ((currentQuestion) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progress}%`;


    // ===============================
    // IMAGE
    // ===============================

    const image = document.getElementById("questionImage");

    image.src = question.image;

    image.onerror = function () {

        console.log("Image failed to load:", question.image);

        image.alt = "Astronomical image unavailable";

    };


    // ===============================
    // ANSWERS
    // ===============================

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    const shuffledAnswers = shuffle([...question.answers]);

    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = answer;

        button.addEventListener("click", () => {

            checkAnswer(answer, button);

        });

        answersContainer.appendChild(button);

    });


    // Reset buttons
    document.getElementById("hintButton").disabled = false;
    document.getElementById("hintButton").style.display = "block";

    document.getElementById("nextButton").classList.add("hidden");

    document.getElementById("feedback").classList.add("hidden");

    // Start timer
    startTimer();

}


// ===============================
// TIMER
// ===============================

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();

        }

    }, 1000);

}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(answer, clickedButton) {

    clearInterval(timer);

    const question = questions[currentQuestion];

    // Prevent multiple answers
    document.querySelectorAll(".answer-button").forEach(button => {
        button.disabled = true;
    });

    if (answer === question.correct) {

        correctCount++;

        let points = 500 + (timeLeft * 10);

        if (hintUsed) {
            points -= 100;
        }

        score += points;

        clickedButton.classList.add("correct");

        showFeedback(
            true,
            `CORRECT +${points}`,
            question.explanation
        );

    } else {

        clickedButton.classList.add("incorrect");

        // Show correct answer
        document.querySelectorAll(".answer-button").forEach(button => {

            if (button.textContent === question.correct) {
                button.classList.add("correct");
            }

        });

        showFeedback(
            false,
            "INCORRECT",
            `The correct answer was ${question.correct}. ${question.explanation}`
        );

    }

    updateScore();

    // IMPORTANT:
    // Show the next button after answering
    document.getElementById("nextButton").classList.remove("hidden");

}


// ===============================
// TIME OUT
// ===============================

function timeOut() {

    const question = questions[currentQuestion];

    document.querySelectorAll(".answer-button").forEach(button => {

        button.disabled = true;

        if (button.textContent === question.correct) {
            button.classList.add("correct");
        }

    });

    showFeedback(
        false,
        "TIME'S UP",
        `The correct answer was ${question.correct}. ${question.explanation}`
    );

    document.getElementById("nextButton").classList.remove("hidden");

}


// ===============================
// FEEDBACK
// ===============================

function showFeedback(correct, title, explanation) {

    const feedback = document.getElementById("feedback");

    feedback.classList.remove("hidden");

    feedback.innerHTML = `
        <strong>${title}</strong>
        <p>${explanation}</p>
    `;

}


// ===============================
// NEXT QUESTION
// ===============================

document.getElementById("nextButton").addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResults();

    } else {

        loadQuestion();

    }

});


// ===============================
// HINT
// ===============================

document.getElementById("hintButton").addEventListener("click", () => {

    if (hintUsed) return;

    hintUsed = true;

    const question = questions[currentQuestion];

    const feedback = document.getElementById("feedback");

    feedback.classList.remove("hidden");

    feedback.innerHTML = `
        <strong>HINT</strong>
        <p>${question.hint}</p>
    `;

    document.getElementById("hintButton").disabled = true;

});


// ===============================
// UPDATE SCORE
// ===============================

function updateScore() {

    document.getElementById("score").textContent =
        String(score).padStart(4, "0");

}


// ===============================
// RESULTS
// ===============================

function showResults() {

    clearInterval(timer);

    showScreen("resultsScreen");

    const percentage =
        Math.round((correctCount / questions.length) * 100);

    let rank;

    if (percentage >= 90) {
        rank = "COSMOLOGIST";
    } else if (percentage >= 70) {
        rank = "ASTRONOMER";
    } else if (percentage >= 50) {
        rank = "SPACE EXPLORER";
    } else {
        rank = "SPACE CADET";
    }

    document.getElementById("finalRank").textContent = rank;

    document.getElementById("finalScore").textContent = score;

    document.getElementById("correctAnswers").textContent =
        correctCount;

    document.getElementById("totalQuestions").textContent =
        questions.length;

    document.getElementById("accuracy").textContent =
        `${percentage}%`;

}


// ===============================
// REVIEW
// ===============================

document.getElementById("reviewButton").addEventListener("click", () => {

    showScreen("reviewScreen");

    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach((question, index) => {

        const item = document.createElement("div");

        item.className = "review-item";

        item.innerHTML = `
            <span class="review-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <div>
                <strong>${question.correct}</strong>
                <p>${question.explanation}</p>
            </div>
        `;

        reviewList.appendChild(item);

    });

});


// ===============================
// BACK TO RESULTS
// ===============================

document.getElementById("reviewBackButton").addEventListener("click", () => {

    showScreen("resultsScreen");

});


// ===============================
// RESTART
// ===============================

document.getElementById("restartButton").addEventListener("click", () => {

    clearInterval(timer);

    showScreen("difficultyScreen");

});
