const questionBank = [
    {
        difficulty: "observer",
        image: "moon.jpg",
        question: "Which object is shown in this image?",
        answers: ["The Moon", "Mars", "Mercury", "Venus"],
        correct: 0,
        explanation: "This is Earth's Moon, our natural satellite.",
        hint: "This object orbits Earth.",
        fact: "The Moon is about 384,400 km from Earth on average."
    },

    {
        difficulty: "observer",
        image: "jupiter.jpg",
        question: "Which planet is shown in this image?",
        answers: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1,
        explanation: "This is Jupiter, the largest planet in our Solar System.",
        hint: "It is the largest planet in our Solar System.",
        fact: "Jupiter is the largest planet in our Solar System."
    },

    {
        difficulty: "observer",
        image: "mars.jpg",
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Mercury", "Earth"],
        correct: 0,
        explanation: "Mars is known as the Red Planet because of iron oxide on its surface.",
        hint: "Its surface contains iron oxide.",
        fact: "Mars has the largest volcano in the Solar System."
    },

    {
        difficulty: "observer",
        image: "saturn.jpg",
        question: "Which planet is famous for its prominent ring system?",
        answers: ["Jupiter", "Uranus", "Saturn", "Neptune"],
        correct: 2,
        explanation: "Saturn is famous for its spectacular ring system.",
        hint: "It is one of the most recognisable planets.",
        fact: "Saturn's rings are made mostly of ice particles."
    },

    {
        difficulty: "observer",
        image: "earth.jpg",
        question: "Which planet is shown in this image?",
        answers: ["Earth", "Venus", "Mars", "Neptune"],
        correct: 0,
        explanation: "This is Earth, the third planet from the Sun.",
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
        explanation: "Andromeda is a large spiral galaxy.",
        hint: "It has a broad disk with spiral arms.",
        fact: "Andromeda is approximately 2.5 million light-years away."
    },

    {
        difficulty: "astronomer",
        image: "orion.jpg",
        question: "What is shown in this image?",
        answers: [
            "Orion Nebula",
            "Andromeda Galaxy",
            "Crab Nebula",
            "Sombrero Galaxy"
        ],
        correct: 0,
        explanation: "The Orion Nebula is a famous star-forming region.",
        hint: "It is located in the constellation Orion.",
        fact: "The Orion Nebula is roughly 1,300 light-years away."
    },

    {
        difficulty: "astronomer",
        image: "black-hole.jpg",
        question: "What is a black hole?",
        answers: [
            "A region where gravity is so strong that light cannot escape",
            "An empty region of space",
            "A very cold planet",
            "A type of galaxy"
        ],
        correct: 0,
        explanation: "A black hole is a region of spacetime with extremely strong gravity.",
        hint: "Think about extremely strong gravity.",
        fact: "The boundary of a black hole is called the event horizon."
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
        explanation: "The Cosmic Microwave Background is ancient radiation from the early universe.",
        hint: "It is a snapshot of the early universe.",
        fact: "The CMB was released roughly 380,000 years after the Big Bang."
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
        explanation: "Deep-field images allow astronomers to study extremely distant galaxies.",
        hint: "Look at the many faint galaxies.",
        fact: "Some galaxies in deep-field images are billions of light-years away."
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
let hintUsed = false;
let selectedDifficulty = "observer";
let gameQuestions = [];

document.addEventListener("DOMContentLoaded", function () {

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
    const reviewButton = document.getElementById("reviewButton");
    const restartButton = document.getElementById("restartButton");


    // START BUTTON

    if (startButton) {
        startButton.addEventListener("click", function () {

            if (homeScreen) {
                homeScreen.classList.remove("active");
            }

            if (difficultyScreen) {
                difficultyScreen.classList.add("active");
            }
        });
    }


    // DIFFICULTY BUTTONS

    const difficultyCards =
        document.querySelectorAll(".difficulty-card");

    difficultyCards.forEach(function (card) {

        card.addEventListener("click", function () {

            selectedDifficulty =
                card.dataset.difficulty || "observer";

            startGame();

        });

    });


    // START GAME

    function startGame() {

        clearInterval(timer);

        score = 0;
        currentQuestion = 0;

        const selectedQuestions =
            questionBank.filter(function (question) {
                return question.difficulty === selectedDifficulty;
            });

        const otherQuestions =
            questionBank.filter(function (question) {
                return question.difficulty !== selectedDifficulty;
            });

        shuffleArray(selectedQuestions);
        shuffleArray(otherQuestions);

        gameQuestions = [
            ...selectedQuestions,
            ...otherQuestions
        ].slice(0, 10);

        shuffleArray(gameQuestions);

        if (homeScreen) {
            homeScreen.classList.remove("active");
        }

        if (difficultyScreen) {
            difficultyScreen.classList.remove("active");
        }

        if (resultsScreen) {
            resultsScreen.classList.remove("active");
        }

        if (reviewScreen) {
            reviewScreen.classList.remove("active");
        }

        if (quizScreen) {
            quizScreen.classList.add("active");
        }

        loadQuestion();
    }


    // LOAD QUESTION

    function loadQuestion() {

        clearInterval(timer);

        const question =
            gameQuestions[currentQuestion];

        if (!question) {
            return;
        }

        hintUsed = false;

        if (questionNumber) {
            questionNumber.textContent =
                `OBJECT ${currentQuestion + 1} / ${gameQuestions.length}`;
        }

        if (difficultyLabel) {
            difficultyLabel.textContent =
                question.difficulty.toUpperCase();
        }

        if (questionText) {
            questionText.textContent =
                question.question;
        }

        if (questionImage) {

            questionImage.onerror = function () {
                console.log(
                    "Could not load image:",
                    question.image
                );
            };

            questionImage.src = question.image;
            questionImage.alt = "Astronomical object";
        }


        // ANSWERS

        if (answersContainer) {

            answersContainer.innerHTML = "";

            question.answers.forEach(function (answer, index) {

                const button =
                    document.createElement("button");

                button.className = "answer-button";

                button.textContent = answer;

                button.addEventListener("click", function () {
                    checkAnswer(index);
                });

                answersContainer.appendChild(button);

            });
        }


        // RESET FEEDBACK

        if (feedback) {
            feedback.textContent = "";
            feedback.className = "feedback";
        }

        if (nextButton) {
            nextButton.style.display = "none";
        }

        if (hintText) {
            hintText.textContent = "";
        }

        if (hintButton) {
            hintButton.disabled = false;
        }

        if (progressBar) {

            const progress =
                (currentQuestion / gameQuestions.length) * 100;

            progressBar.style.width =
                progress + "%";
        }

        startTimer();
    }


    // TIMER

    function startTimer() {

        timeLeft = 20;

        updateTimer();

        timer = setInterval(function () {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timer);

                timeOut();
            }

        }, 1000);
    }


    function updateTimer() {

        if (timerDisplay) {
            timerDisplay.textContent =
                timeLeft;
        }
    }


    // ANSWER

    function checkAnswer(selectedIndex) {

        clearInterval(timer);

        const question =
            gameQuestions[currentQuestion];

        const buttons =
            document.querySelectorAll(".answer-button");

        buttons.forEach(function (button) {
            button.disabled = true;
        });

        if (buttons[question.correct]) {
            buttons[question.correct].classList.add("correct");
        }

        if (selectedIndex === question.correct) {

            let points =
                500 + (timeLeft * 10);

            if (hintUsed) {
                points -= 100;
            }

            score += points;

            if (buttons[selectedIndex]) {
                buttons[selectedIndex].classList.add("correct");
            }

            if (feedback) {
                feedback.textContent =
                    `CORRECT — +${points} points`;

                feedback.classList.add(
                    "correct-feedback"
                );
            }

        } else {

            if (buttons[selectedIndex]) {
                buttons[selectedIndex].classList.add("incorrect");
            }

            if (feedback) {
                feedback.textContent =
                    `INCORRECT — ${question.explanation}`;

                feedback.classList.add(
                    "incorrect-feedback"
                );
            }
        }

        if (nextButton) {
            nextButton.style.display = "block";
        }
    }


    // TIME OUT

    function timeOut() {

        const question =
            gameQuestions[currentQuestion];

        const buttons =
            document.querySelectorAll(".answer-button");

        buttons.forEach(function (button) {
            button.disabled = true;
        });

        if (buttons[question.correct]) {
            buttons[question.correct].classList.add("correct");
        }

        if (feedback) {

            feedback.textContent =
                `TIME'S UP — ${question.explanation}`;

            feedback.classList.add(
                "incorrect-feedback"
            );
        }

        if (nextButton) {
            nextButton.style.display = "block";
        }
    }


    // NEXT QUESTION

    if (nextButton) {

        nextButton.addEventListener("click", function () {

            currentQuestion++;

            if (currentQuestion >= gameQuestions.length) {

                showResults();

            } else {

                loadQuestion();

            }

        });
    }


    // HINT

    if (hintButton) {

        hintButton.addEventListener("click", function () {

            const question =
                gameQuestions[currentQuestion];

            if (hintText) {
                hintText.textContent =
                    `HINT: ${question.hint}`;
            }

            hintUsed = true;

            hintButton.disabled = true;

        });
    }


    // RESULTS

    function showResults() {

        clearInterval(timer);

        if (quizScreen) {
            quizScreen.classList.remove("active");
        }

        if (resultsScreen) {
            resultsScreen.classList.add("active");
        }

        const maximumScore =
            gameQuestions.length * 700;

        const accuracy =
            Math.round(
                (score / maximumScore) * 100
            );

        if (finalScore) {
            finalScore.textContent =
                score;
        }

        if (finalAccuracy) {
            finalAccuracy.textContent =
                accuracy + "%";
        }

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

        if (finalRank) {
            finalRank.textContent = rank;
        }

        if (progressBar) {
            progressBar.style.width = "100%";
        }
    }


    // REVIEW

    if (reviewButton) {

        reviewButton.addEventListener("click", function () {

            if (resultsScreen) {
                resultsScreen.classList.remove("active");
            }

            if (reviewScreen) {
                reviewScreen.classList.add("active");
            }

            if (!reviewContainer) {
                return;
            }

            reviewContainer.innerHTML = "";

            gameQuestions.forEach(function (question, index) {

                const item =
                    document.createElement("div");

                item.className = "review-item";

                item.innerHTML = `
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

                reviewContainer.appendChild(item);

            });

        });
    }


    // RESTART

    if (restartButton) {

        restartButton.addEventListener("click", function () {

            clearInterval(timer);

            if (reviewScreen) {
                reviewScreen.classList.remove("active");
            }

            if (resultsScreen) {
                resultsScreen.classList.remove("active");
            }

            if (quizScreen) {
                quizScreen.classList.remove("active");
            }

            if (difficultyScreen) {
                difficultyScreen.classList.add("active");
            }

        });
    }


    // SHUFFLE

    function shuffleArray(array) {

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] =
                [array[j], array[i]];
        }

        return array;
    }

});
