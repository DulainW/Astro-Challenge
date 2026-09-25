// ============================================================
// ASTRONOMY QUIZ
// COMPLETE JAVASCRIPT
// ============================================================


// ============================================================
// QUESTION BANK
// ============================================================

const questionBank = [

    // ========================================================
    // OBSERVER
    // ========================================================

    {
        difficulty: "observer",
        image: "",
        question: "Why does the Moon appear to change shape during the month?",
        answers: [
            "Because we see different portions of its sunlit side",
            "Because the Moon physically changes shape",
            "Because Earth's shadow covers it every night",
            "Because clouds cover different parts of it"
        ],
        correct: 0,
        explanation: "The Moon does not actually change shape. As it orbits Earth, we see different portions of its sunlit half, creating the phases of the Moon.",
        hint: "Think about how sunlight illuminates the Moon.",
        fact: "The complete cycle of Moon phases takes about 29.5 days."
    },

    {
        difficulty: "observer",
        image: "jupiter.jpg",
        question: "Which planet is shown in this image?",
        answers: [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Uranus"
        ],
        correct: 1,
        explanation: "This is Jupiter, the largest planet in our Solar System.",
        hint: "It is the largest planet in our Solar System.",
        fact: "Jupiter is the largest planet in the Solar System."
    },

    {
        difficulty: "observer",
        image: "mars.jpg",
        question: "Which planet is known as the Red Planet?",
        answers: [
            "Mars",
            "Venus",
            "Mercury",
            "Earth"
        ],
        correct: 0,
        explanation: "Mars is known as the Red Planet because iron minerals on its surface have oxidised, producing its reddish appearance.",
        hint: "Its surface contains iron oxide.",
        fact: "Mars has the largest volcano in the Solar System, Olympus Mons."
    },

    {
        difficulty: "observer",
        image: "saturn.jpg",
        question: "Which planet is famous for its prominent ring system?",
        answers: [
            "Jupiter",
            "Uranus",
            "Saturn",
            "Neptune"
        ],
        correct: 2,
        explanation: "Saturn is famous for its spectacular ring system, which is made mostly of ice particles and rocky debris.",
        hint: "It is one of the most recognisable planets.",
        fact: "Saturn's rings are made mostly of water ice."
    },

    {
        difficulty: "observer",
        image: "earth.jpg",
        question: "Which planet is shown in this image?",
        answers: [
            "Earth",
            "Venus",
            "Mars",
            "Neptune"
        ],
        correct: 0,
        explanation: "This is Earth, the third planet from the Sun and our home planet.",
        hint: "It is the planet where we live.",
        fact: "About 71% of Earth's surface is covered by water."
    },


    // ========================================================
    // ASTRONOMER
    // ========================================================

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
        explanation: "Andromeda is a large spiral galaxy and one of the nearest major galaxies to the Milky Way.",
        hint: "Think about its large rotating disk and spiral arms.",
        fact: "The Andromeda Galaxy is approximately 2.5 million light-years away."
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
        fact: "The boundary surrounding a black hole is called the event horizon."
    },


    // ========================================================
    // COSMOLOGIST
    // ========================================================

    {
        difficulty: "cosmologist",
        image: "",
        question: "What is the Cosmic Microwave Background mainly evidence of?",
        answers: [
            "The hot, dense early universe",
            "The formation of Earth's atmosphere",
            "The activity of modern stars",
            "The magnetic field of the Sun"
        ],
        correct: 0,
        explanation: "The Cosmic Microwave Background is leftover radiation from the early universe. It provides important evidence about the universe when it was much younger, hotter and denser.",
        hint: "This radiation comes from the very early universe.",
        fact: "The CMB was released about 380,000 years after the Big Bang."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "Why are deep-field images important to astronomers?",
        answers: [
            "They reveal extremely distant galaxies",
            "They show the surface of distant planets",
            "They measure the temperature of Earth's oceans",
            "They show only objects inside the Solar System"
        ],
        correct: 0,
        explanation: "Deep-field observations use long exposures to reveal extremely faint and distant galaxies that would normally be invisible.",
        hint: "Think about objects that are very faint and very far away.",
        fact: "Some galaxies visible in deep-field images are billions of light-years away."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "Why is the Orion Nebula important to astronomers?",
        answers: [
            "It is a region where new stars are forming",
            "It is the largest planet in the Solar System",
            "It is a black hole at the centre of Orion",
            "It is a galaxy outside the Milky Way"
        ],
        correct: 0,
        explanation: "The Orion Nebula is a stellar nursery, meaning it is a region of gas and dust where new stars are actively forming.",
        hint: "Think about where stars are born.",
        fact: "The Orion Nebula is roughly 1,300 light-years from Earth."
    }

];


// ============================================================
// GAME VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer = null;
let hintUsed = false;
let selectedDifficulty = "observer";
let gameQuestions = [];


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener("DOMContentLoaded", function () {


    // ========================================================
    // GET HTML ELEMENTS
    // ========================================================

    const homeScreen =
        document.getElementById("homeScreen");

    const difficultyScreen =
        document.getElementById("difficultyScreen");

    const quizScreen =
        document.getElementById("quizScreen");

    const resultsScreen =
        document.getElementById("resultsScreen");

    const reviewScreen =
        document.getElementById("reviewScreen");


    const startButton =
        document.getElementById("startButton");


    const questionNumber =
        document.getElementById("questionNumber");

    const difficultyLabel =
        document.getElementById("difficultyLabel");

    const questionText =
        document.getElementById("questionText");

    const questionImage =
        document.getElementById("questionImage");

    const answersContainer =
        document.getElementById("answers");


    const timerDisplay =
        document.getElementById("timer");

    const progressBar =
        document.getElementById("progressBar");


    const hintButton =
        document.getElementById("hintButton");

    const hintText =
        document.getElementById("hintText");


    const feedback =
        document.getElementById("feedback");


    const finalScore =
        document.getElementById("finalScore");

    const finalAccuracy =
        document.getElementById("finalAccuracy");

    const finalRank =
        document.getElementById("finalRank");


    const reviewContainer =
        document.getElementById("reviewContainer");

    const reviewButton =
        document.getElementById("reviewButton");

    const restartButton =
        document.getElementById("restartButton");


    // ========================================================
    // FIND OR CREATE NEXT BUTTON
    // ========================================================

    let nextButton =
        document.getElementById("nextButton");


    /*
        If the HTML does not contain a next button,
        create one automatically.
    */

    if (!nextButton) {

        nextButton =
            document.createElement("button");

        nextButton.id =
            "nextButton";

        nextButton.type =
            "button";

        nextButton.textContent =
            "NEXT QUESTION →";


        /*
            Put it after the answers.
        */

        if (answersContainer) {

            answersContainer.parentNode.insertBefore(
                nextButton,
                answersContainer.nextSibling
            );

        }

    }


    // ========================================================
    // BASIC NEXT BUTTON SETTINGS
    // ========================================================

    nextButton.style.display =
        "none";

    nextButton.style.visibility =
        "visible";

    nextButton.style.opacity =
        "1";


    // ========================================================
    // START BUTTON
    // ========================================================

    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {

                if (homeScreen) {

                    homeScreen.classList.remove(
                        "active"
                    );

                }


                if (difficultyScreen) {

                    difficultyScreen.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    // ========================================================
    // DIFFICULTY BUTTONS
    // ========================================================

    const difficultyCards =
        document.querySelectorAll(
            ".difficulty-card"
        );


    difficultyCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    selectedDifficulty =
                        card.dataset.difficulty ||
                        "observer";


                    startGame();

                }
            );

        }
    );


    // ========================================================
    // START GAME
    // ========================================================

    function startGame() {

        clearInterval(timer);


        score = 0;

        currentQuestion = 0;


        // ----------------------------------------------------
        // GET QUESTIONS FOR SELECTED DIFFICULTY
        // ----------------------------------------------------

        const selectedQuestions =
            questionBank.filter(
                function (question) {

                    return (
                        question.difficulty ===
                        selectedDifficulty
                    );

                }
            );


        const otherQuestions =
            questionBank.filter(
                function (question) {

                    return (
                        question.difficulty !==
                        selectedDifficulty
                    );

                }
            );


        shuffleArray(
            selectedQuestions
        );


        shuffleArray(
            otherQuestions
        );


        /*
            Put the selected difficulty questions first,
            then fill the remaining places with other questions.
        */

        gameQuestions = [
            ...selectedQuestions,
            ...otherQuestions
        ].slice(0, 10);


        shuffleArray(
            gameQuestions
        );


        // ----------------------------------------------------
        // CHANGE SCREENS
        // ----------------------------------------------------

        if (homeScreen) {

            homeScreen.classList.remove(
                "active"
            );

        }


        if (difficultyScreen) {

            difficultyScreen.classList.remove(
                "active"
            );

        }


        if (resultsScreen) {

            resultsScreen.classList.remove(
                "active"
            );

        }


        if (reviewScreen) {

            reviewScreen.classList.remove(
                "active"
            );

        }


        if (quizScreen) {

            quizScreen.classList.add(
                "active"
            );

        }


        // ----------------------------------------------------
        // LOAD FIRST QUESTION
        // ----------------------------------------------------

        loadQuestion();

    }


    // ========================================================
    // LOAD QUESTION
    // ========================================================

    function loadQuestion() {

        clearInterval(timer);


        const question =
            gameQuestions[currentQuestion];


        if (!question) {

            console.error(
                "No question found:",
                currentQuestion
            );

            return;

        }


        hintUsed = false;


        // ====================================================
        // QUESTION NUMBER
        // ====================================================

        if (questionNumber) {

            questionNumber.textContent =
                `OBJECT ${currentQuestion + 1} / ${gameQuestions.length}`;

        }


        // ====================================================
        // DIFFICULTY
        // ====================================================

        if (difficultyLabel) {

            difficultyLabel.textContent =
                question.difficulty.toUpperCase();

        }


        // ====================================================
        // QUESTION TEXT
        // ====================================================

        if (questionText) {

            questionText.textContent =
                question.question;


            /*
                Force question text to remain visible.
            */

            questionText.style.display =
                "block";

            questionText.style.visibility =
                "visible";

            questionText.style.opacity =
                "1";

        }


        // ====================================================
        // IMAGE
        // ====================================================

        if (questionImage) {

            if (
                question.image &&
                question.image.trim() !== ""
            ) {

                /*
                    QUESTION HAS AN IMAGE
                */

                questionImage.src =
                    question.image;

                questionImage.alt =
                    "Astronomical object";

                questionImage.style.display =
                    "block";

            }

            else {

                /*
                    QUESTION HAS NO IMAGE

                    We hide ONLY the image.
                    The question text remains visible.
                */

                questionImage.removeAttribute(
                    "src"
                );

                questionImage.style.display =
                    "none";

            }

        }


        // ====================================================
        // ANSWERS
        // ====================================================

        if (answersContainer) {

            answersContainer.innerHTML =
                "";


            question.answers.forEach(
                function (answer, index) {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.type =
                        "button";


                    button.className =
                        "answer-button";


                    button.textContent =
                        answer;


                    button.addEventListener(
                        "click",
                        function () {

                            checkAnswer(
                                index
                            );

                        }
                    );


                    answersContainer.appendChild(
                        button
                    );

                }
            );

        }


        // ====================================================
        // RESET FEEDBACK
        // ====================================================

        if (feedback) {

            feedback.textContent =
                "";

            feedback.className =
                "feedback";

        }


        // ====================================================
        // RESET HINT
        // ====================================================

        if (hintText) {

            hintText.textContent =
                "";

        }


        if (hintButton) {

            hintButton.disabled =
                false;

        }


        // ====================================================
        // HIDE NEXT BUTTON
        // ====================================================

        if (nextButton) {

            nextButton.style.display =
                "none";


            nextButton.disabled =
                false;


            if (
                currentQuestion ===
                gameQuestions.length - 1
            ) {

                nextButton.textContent =
                    "VIEW RESULTS →";

            }

            else {

                nextButton.textContent =
                    "NEXT QUESTION →";

            }

        }


        // ====================================================
        // PROGRESS
        // ====================================================

        if (progressBar) {

            const progress =
                (
                    currentQuestion /
                    gameQuestions.length
                ) * 100;


            progressBar.style.width =
                progress + "%";

        }


        // ====================================================
        // START TIMER
        // ====================================================

        startTimer();

    }


    // ========================================================
    // TIMER
    // ========================================================

    function startTimer() {

        clearInterval(timer);


        timeLeft =
            20;


        updateTimer();


        timer =
            setInterval(
                function () {

                    timeLeft--;


                    updateTimer();


                    if (timeLeft <= 0) {

                        clearInterval(
                            timer
                        );


                        timeOut();

                    }

                },
                1000
            );

    }


    // ========================================================
    // UPDATE TIMER
    // ========================================================

    function updateTimer() {

        if (timerDisplay) {

            timerDisplay.textContent =
                timeLeft;

        }

    }


    // ========================================================
    // CHECK ANSWER
    // ========================================================

    function checkAnswer(
        selectedIndex
    ) {

        clearInterval(timer);


        const question =
            gameQuestions[
                currentQuestion
            ];


        const buttons =
            document.querySelectorAll(
                ".answer-button"
            );


        // ----------------------------------------------------
        // DISABLE ALL ANSWERS
        // ----------------------------------------------------

        buttons.forEach(
            function (button) {

                button.disabled =
                    true;

            }
        );


        // ----------------------------------------------------
        // SHOW CORRECT ANSWER
        // ----------------------------------------------------

        if (
            buttons[
                question.correct
            ]
        ) {

            buttons[
                question.correct
            ].classList.add(
                "correct"
            );

        }


        // ----------------------------------------------------
        // CORRECT ANSWER
        // ----------------------------------------------------

        if (
            selectedIndex ===
            question.correct
        ) {

            let points =
                500 +
                (
                    timeLeft *
                    10
                );


            if (hintUsed) {

                points -=
                    100;

            }


            score +=
                points;


            if (feedback) {

                feedback.textContent =
                    `CORRECT — +${points} points`;


                feedback.className =
                    "feedback correct-feedback";

            }

        }


        // ----------------------------------------------------
        // INCORRECT ANSWER
        // ----------------------------------------------------

        else {

            if (
                buttons[
                    selectedIndex
                ]
            ) {

                buttons[
                    selectedIndex
                ].classList.add(
                    "incorrect"
                );

            }


            if (feedback) {

                feedback.textContent =
                    `INCORRECT — ${question.explanation}`;


                feedback.className =
                    "feedback incorrect-feedback";

            }

        }


        // ----------------------------------------------------
        // SHOW NEXT BUTTON
        // ----------------------------------------------------

        showNextButton();

    }


    // ========================================================
    // SHOW NEXT BUTTON
    // ========================================================

    function showNextButton() {

        if (!nextButton) {

            console.error(
                "NEXT BUTTON DOES NOT EXIST"
            );

            return;

        }


        nextButton.style.display =
            "block";


        nextButton.style.visibility =
            "visible";


        nextButton.style.opacity =
            "1";


        nextButton.disabled =
            false;


        /*
            Change text on final question.
        */

        if (
            currentQuestion ===
            gameQuestions.length - 1
        ) {

            nextButton.textContent =
                "VIEW RESULTS →";

        }

        else {

            nextButton.textContent =
                "NEXT QUESTION →";

        }

    }


    // ========================================================
    // TIME OUT
    // ========================================================

    function timeOut() {

        const question =
            gameQuestions[
                currentQuestion
            ];


        const buttons =
            document.querySelectorAll(
                ".answer-button"
            );


        buttons.forEach(
            function (button) {

                button.disabled =
                    true;

            }
        );


        // ----------------------------------------------------
        // SHOW CORRECT ANSWER
        // ----------------------------------------------------

        if (
            buttons[
                question.correct
            ]
        ) {

            buttons[
                question.correct
            ].classList.add(
                "correct"
            );

        }


        // ----------------------------------------------------
        // FEEDBACK
        // ----------------------------------------------------

        if (feedback) {

            feedback.textContent =
                `TIME'S UP — ${question.explanation}`;


            feedback.className =
                "feedback incorrect-feedback";

        }


        // ----------------------------------------------------
        // SHOW NEXT
        // ----------------------------------------------------

        showNextButton();

    }


    // ========================================================
    // NEXT QUESTION BUTTON
    // ========================================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                console.log(
                    "Next question clicked"
                );


                currentQuestion++;


                // ------------------------------------------------
                // END OF QUIZ
                // ------------------------------------------------

                if (
                    currentQuestion >=
                    gameQuestions.length
                ) {

                    showResults();

                }


                // ------------------------------------------------
                // NEXT QUESTION
                // ------------------------------------------------

                else {

                    loadQuestion();

                }

            }
        );

    }


    // ========================================================
    // HINT
    // ========================================================

    if (hintButton) {

        hintButton.addEventListener(
            "click",
            function () {

                const question =
                    gameQuestions[
                        currentQuestion
                    ];


                if (hintText) {

                    hintText.textContent =
                        `HINT: ${question.hint}`;

                }


                hintUsed =
                    true;


                hintButton.disabled =
                    true;

            }
        );

    }


    // ========================================================
    // RESULTS
    // ========================================================

    function showResults() {

        clearInterval(timer);


        // ----------------------------------------------------
        // CHANGE SCREEN
        // ----------------------------------------------------

        if (quizScreen) {

            quizScreen.classList.remove(
                "active"
            );

        }


        if (resultsScreen) {

            resultsScreen.classList.add(
                "active"
            );

        }


        // ----------------------------------------------------
        // CALCULATE SCORE
        // ----------------------------------------------------

        /*
            Maximum possible score is:

            700 points per question

            500 base
            + 200 maximum time bonus
        */

        const maximumScore =
            gameQuestions.length *
            700;


        const accuracy =
            Math.round(
                (
                    score /
                    maximumScore
                ) * 100
            );


        // ----------------------------------------------------
        // DISPLAY SCORE
        // ----------------------------------------------------

        if (finalScore) {

            finalScore.textContent =
                score;

        }


        if (finalAccuracy) {

            finalAccuracy.textContent =
                accuracy + "%";

        }


        // ----------------------------------------------------
        // RANK
        // ----------------------------------------------------

        let rank;


        if (accuracy >= 90) {

            rank =
                "COSMOLOGIST";

        }

        else if (accuracy >= 70) {

            rank =
                "ASTRONOMER";

        }

        else if (accuracy >= 50) {

            rank =
                "SPACE EXPLORER";

        }

        else {

            rank =
                "SPACE CADET";

        }


        if (finalRank) {

            finalRank.textContent =
                rank;

        }


        // ----------------------------------------------------
        // COMPLETE PROGRESS BAR
        // ----------------------------------------------------

        if (progressBar) {

            progressBar.style.width =
                "100%";

        }

    }


    // ========================================================
    // REVIEW
    // ========================================================

    if (reviewButton) {

        reviewButton.addEventListener(
            "click",
            function () {

                // ------------------------------------------------
                // CHANGE SCREEN
                // ------------------------------------------------

                if (resultsScreen) {

                    resultsScreen.classList.remove(
                        "active"
                    );

                }


                if (reviewScreen) {

                    reviewScreen.classList.add(
                        "active"
                    );

                }


                if (!reviewContainer) {

                    return;

                }


                reviewContainer.innerHTML =
                    "";


                // ------------------------------------------------
                // CREATE REVIEW ITEMS
                // ------------------------------------------------

                gameQuestions.forEach(
                    function (
                        question,
                        index
                    ) {

                        const item =
                            document.createElement(
                                "div"
                            );


                        item.className =
                            "review-item";


                        item.innerHTML = `

                            <div class="review-number">
                                OBJECT ${index + 1}
                            </div>

                            <h3>
                                ${question.question}
                            </h3>

                            <p>
                                <strong>
                                    Correct answer:
                                </strong>

                                ${question.answers[
                                    question.correct
                                ]}
                            </p>

                            <p>
                                ${question.explanation}
                            </p>

                            <p class="review-fact">

                                <strong>
                                    ASTRONOMY FACT:
                                </strong>

                                ${question.fact}

                            </p>

                        `;


                        reviewContainer.appendChild(
                            item
                        );

                    }
                );

            }
        );

    }


    // ========================================================
    // RESTART
    // ========================================================

    if (restartButton) {

        restartButton.addEventListener(
            "click",
            function () {

                clearInterval(timer);


                // ------------------------------------------------
                // HIDE OTHER SCREENS
                // ------------------------------------------------

                if (reviewScreen) {

                    reviewScreen.classList.remove(
                        "active"
                    );

                }


                if (resultsScreen) {

                    resultsScreen.classList.remove(
                        "active"
                    );

                }


                if (quizScreen) {

                    quizScreen.classList.remove(
                        "active"
                    );

                }


                // ------------------------------------------------
                // SHOW DIFFICULTY
                // ------------------------------------------------

                if (difficultyScreen) {

                    difficultyScreen.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    // ========================================================
    // SHUFFLE ARRAY
    // ========================================================

    function shuffleArray(array) {

        for (
            let i =
                array.length - 1;

            i > 0;

            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                array[i],
                array[j]
            ] = [
                array[j],
                array[i]
            ];

        }


        return array;

    }

});
