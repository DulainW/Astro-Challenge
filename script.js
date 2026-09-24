/* =========================================
   ASTRO // CHALLENGE
   GAME LOGIC
========================================= */


/* =========================================
   QUESTION DATABASE
========================================= */

const questionBank = [

    /* =========================
       OBSERVER
    ========================== */

    {
        difficulty: "observer",

        image:
            "https://images.unsplash.com/photo-1534791547706-2c4b3b5e5b8f?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "The Moon",
            "Mars",
            "Venus",
            "Mercury"
        ],

        correct: 0,

        explanation:
            "The Moon is Earth's natural satellite and is the fifth-largest moon in the Solar System.",

        hint:
            "This object orbits Earth.",

        fact:
            "The Moon is gradually moving away from Earth at approximately 3.8 centimetres per year."
    },


    {
        difficulty: "observer",

        image:
            "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Uranus"
        ],

        correct: 0,

        explanation:
            "Jupiter is the largest planet in our Solar System and is a gas giant.",

        hint:
            "This is the largest planet in the Solar System.",

        fact:
            "Jupiter is so large that more than 1,300 Earths could fit inside it by volume."
    },


    {
        difficulty: "observer",

        image:
            "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
        ],

        correct: 0,

        explanation:
            "Mars is known as the Red Planet because iron minerals in its soil have oxidised.",

        hint:
            "Look for the planet commonly called the Red Planet.",

        fact:
            "Mars has the largest volcano in the Solar System: Olympus Mons."
    },


    {
        difficulty: "observer",

        image:
            "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "Saturn",
            "Jupiter",
            "Uranus",
            "Neptune"
        ],

        correct: 0,

        explanation:
            "Saturn is a gas giant famous for its extensive system of rings.",

        hint:
            "Look carefully at the rings.",

        fact:
            "Saturn's rings are made primarily from particles of water ice and rocky material."
    },


    /* =========================
       ASTRONOMER
    ========================== */

    {
        difficulty: "astronomer",

        image:
            "https://images.unsplash.com/photo-1532978379173-523e16f371f2?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "Andromeda Galaxy",
            "Orion Nebula",
            "Whirlpool Galaxy",
            "Sombrero Galaxy"
        ],

        correct: 0,

        explanation:
            "The Andromeda Galaxy is the nearest major galaxy to the Milky Way.",

        hint:
            "This object is approximately 2.5 million light-years away.",

        fact:
            "Andromeda is approaching the Milky Way and the two galaxies are expected to interact in the distant future."
    },


    {
        difficulty: "astronomer",

        image:
            "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "Orion Nebula",
            "Andromeda Galaxy",
            "Crab Nebula",
            "Ring Nebula"
        ],

        correct: 0,

        explanation:
            "The Orion Nebula is a vast region of gas and dust where new stars are forming.",

        hint:
            "This is a stellar nursery in the constellation Orion.",

        fact:
            "The Orion Nebula is visible to the naked eye under dark skies."
    },


    {
        difficulty: "astronomer",

        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "A Nebula",
            "A Black Hole",
            "A Planet",
            "An Asteroid"
        ],

        correct: 0,

        explanation:
            "A nebula is a large cloud of gas and dust found in space.",

        hint:
            "These structures can be locations where stars form.",

        fact:
            "Some nebulae are created from material expelled by dying stars."
    },


    /* =========================
       COSMOLOGIST
    ========================== */

    {
        difficulty: "cosmologist",

        image:
            "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "A Supernova Remnant",
            "A Planetary Ring",
            "A Comet",
            "A Galaxy"
        ],

        correct: 0,

        explanation:
            "A supernova remnant is the expanding material left behind after a massive star explodes.",

        hint:
            "Think about what remains after a massive star dies violently.",

        fact:
            "Supernovae can distribute heavy elements into space, contributing material for future stars and planets."
    },


    {
        difficulty: "cosmologist",

        image:
            "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80",

        answers: [
            "A Galaxy",
            "A Nebula",
            "A Comet",
            "A Star Cluster"
        ],

        correct: 0,

        explanation:
            "Galaxies are enormous gravitationally bound systems containing stars, gas, dust and dark matter.",

        hint:
            "This structure can contain billions of stars.",

        fact:
            "The observable universe contains an enormous number of galaxies, many of which are billions of light-years away."
    }

];


/* =========================================
   GAME VARIABLES
========================================= */

let questions = [];

let currentIndex = 0;

let score = 0;

let timer = 20;

let timerInterval = null;

let hintUsed = false;

let answered = false;

let selectedDifficulty = "observer";

let playerAnswers = [];


/* =========================================
   ELEMENTS
========================================= */

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


/* =========================================
   SCREEN MANAGEMENT
========================================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    document
        .getElementById(screenId)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   START
========================================= */

function showDifficulty() {

    showScreen("difficultyScreen");

}


/* =========================================
   START GAME
========================================= */

function startGame(difficulty) {

    selectedDifficulty = difficulty;


    /*
        Filter questions according
        to selected difficulty.
    */

    questions = questionBank.filter(
        question =>
            question.difficulty === difficulty
    );


    /*
        Shuffle the questions
        so they appear differently
        each time.
    */

    questions = shuffle([...questions]);


    /*
        If there are fewer than 10
        questions, duplicate/randomly
        fill them.
    */

    while (questions.length < 10) {

        const randomQuestion =
            questionBank[
                Math.floor(
                    Math.random() *
                    questionBank.length
                )
            ];

        questions.push({
            ...randomQuestion
        });

    }


    /*
        Limit to 10 questions.
    */

    questions =
        questions.slice(0, 10);


    currentIndex = 0;

    score = 0;

    playerAnswers = [];


    document.getElementById(
        "scoreDisplay"
    ).textContent = score;


    document.getElementById(
        "totalQuestions"
    ).textContent = questions.length;


    showScreen("quizScreen");


    loadQuestion();

}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
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


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    answered = false;

    hintUsed = false;

    timer = 20;


    const question =
        questions[currentIndex];


    /*
        Question number
    */

    document.getElementById(
        "currentQuestion"
    ).textContent =
        String(currentIndex + 1)
            .padStart(2, "0");


    /*
        Difficulty
    */

    document.getElementById(
        "difficultyLabel"
    ).textContent =
        question.difficulty
            .toUpperCase();


    /*
        Image
    */

    document.getElementById(
        "questionImage"
    ).src =
        question.image;


    /*
        Reset timer
    */

    document.getElementById(
        "timerDisplay"
    ).textContent =
        timer;


    /*
        Progress bar
    */

    const progress =
        ((currentIndex) /
            questions.length) *
        100;


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";


    /*
        Create answer buttons
    */

    const answersContainer =
        document.getElementById(
            "answersContainer"
        );


    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.innerHTML = `

                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${answer}
                </span>

            `;


            button.onclick =
                () =>
                    selectAnswer(
                        index,
                        button
                    );


            answersContainer.appendChild(
                button
            );

        }
    );


    /*
        Reset hint
    */

    const hintButton =
        document.getElementById(
            "hintButton"
        );


    hintButton.disabled = false;

    hintButton.style.opacity = "1";

    hintButton.innerHTML =
        "? NEED A HINT <span>−100 PTS</span>";


    /*
        Reset feedback
    */

    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.className =
        "feedback";


    feedback.style.display =
        "none";


    /*
        Start timer
    */

    startTimer();

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    timerInterval =
        setInterval(() => {

            timer--;


            document.getElementById(
                "timerDisplay"
            ).textContent =
                timer;


            if (timer <= 0) {

                clearInterval(
                    timerInterval
                );


                if (!answered) {

                    timeExpired();

                }

            }

        }, 1000);

}


/* =========================================
   TIME EXPIRED
========================================= */

function timeExpired() {

    answered = true;


    const question =
        questions[currentIndex];


    playerAnswers.push({
        selected: -1,
        correct: question.correct
    });


    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.add(
                "disabled"
            );


            if (
                index ===
                question.correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    showFeedback(false, true);

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedIndex,
    button
) {

    if (answered) return;


    answered = true;


    clearInterval(
        timerInterval
    );


    const question =
        questions[currentIndex];


    const correct =
        selectedIndex ===
        question.correct;


    /*
        Save answer
    */

    playerAnswers.push({
        selected: selectedIndex,
        correct: question.correct
    });


    /*
        Get all buttons
    */

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    /*
        Disable buttons
    */

    buttons.forEach(
        (btn, index) => {

            btn.classList.add(
                "disabled"
            );


            if (
                index ===
                question.correct
            ) {

                btn.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedIndex &&
                !correct
            ) {

                btn.classList.add(
                    "incorrect"
                );

            }

        }
    );


    /*
        Calculate score
    */

    if (correct) {

        const timeBonus =
            timer * 10;


        let points =
            500 + timeBonus;


        if (hintUsed) {

            points -= 100;

        }


        score += points;


        if (score < 0) {

            score = 0;

        }


        document.getElementById(
            "scoreDisplay"
        ).textContent =
            score;

    }


    showFeedback(correct, false);

}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(
    correct,
    timedOut
) {

    const question =
        questions[currentIndex];


    const feedback =
        document.getElementById(
            "feedback"
        );


    const heading =
        document.getElementById(
            "feedbackHeading"
        );


    const title =
        document.getElementById(
            "feedbackTitle"
        );


    const explanation =
        document.getElementById(
            "feedbackExplanation"
        );


    const fact =
        document.getElementById(
            "feedbackFact"
        );


    if (correct) {

        feedback.className =
            "feedback show correct";


        heading.textContent =
            "✓ CORRECT";


    } else {

        feedback.className =
            "feedback show incorrect";


        heading.textContent =
            timedOut
                ? "TIME EXPIRED"
                : "× NOT QUITE";

    }


    title.textContent =
        question.answers[
            question.correct
        ];


    explanation.textContent =
        question.explanation;


    fact.textContent =
        question.fact;


    /*
        Change next button text
        on final question.
    */

    const nextButton =
        feedback.querySelector(
            ".next-button"
        );


    if (
        currentIndex ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "VIEW RESULTS →";

    } else {

        nextButton.textContent =
            "NEXT OBJECT →";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (
        currentIndex >=
        questions.length - 1
    ) {

        finishGame();

        return;

    }


    currentIndex++;

    loadQuestion();

}


/* =========================================
   HINT
========================================= */

function useHint() {

    if (
        hintUsed ||
        answered
    ) {

        return;

    }


    hintUsed = true;


    score -= 100;


    if (score < 0) {

        score = 0;

    }


    document.getElementById(
        "scoreDisplay"
    ).textContent =
        score;


    const question =
        questions[currentIndex];


    const hintButton =
        document.getElementById(
            "hintButton"
        );


    hintButton.innerHTML =
        "HINT: " +
        question.hint;


    hintButton.style.color =
        "var(--accent)";


    hintButton.disabled =
        true;

}


/* =========================================
   FINISH GAME
========================================= */

function finishGame() {

    clearInterval(
        timerInterval
    );


    const correctAnswers =
        playerAnswers.filter(
            answer =>
                answer.selected ===
                answer.correct
        ).length;


    const accuracy =
        Math.round(
            (correctAnswers /
                questions.length) *
            100
        );


    /*
        Rank
    */

    let rank = "";

    let message = "";


    if (accuracy >= 90) {

        rank = "COSMOLOGIST";

        message =
            "Exceptional. You have a serious understanding of the universe.";

    } else if (accuracy >= 70) {

        rank = "ASTRONOMER";

        message =
            "Excellent work. You know your way around the night sky.";

    } else if (accuracy >= 50) {

        rank = "SPACE EXPLORER";

        message =
            "A solid mission. There is still plenty of the universe to explore.";

    } else {

        rank = "SPACE CADET";

        message =
            "Every astronomer starts somewhere. Keep exploring.";

    }


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    document.getElementById(
        "accuracy"
    ).textContent =
        accuracy + "%";


    document.getElementById(
        "finalQuestions"
    ).textContent =
        questions.length;


    document.getElementById(
        "rank"
    ).textContent =
        rank;


    document.getElementById(
        "resultRankTitle"
    ).textContent =
        rank;


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    showScreen(
        "resultsScreen"
    );

}


/* =========================================
   REVIEW
========================================= */

function showReview() {

    const reviewList =
        document.getElementById(
            "reviewList"
        );


    reviewList.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const result =
                playerAnswers[index];


            const wasCorrect =
                result.selected ===
                result.correct;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "review-item";


            const status =
                wasCorrect
                    ? "CORRECT"
                    : "INCORRECT";


            const statusClass =
                wasCorrect
                    ? "correct"
                    : "incorrect";


            item.innerHTML = `

                <div class="review-item-header">

                    <span>
                        OBJECT ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="review-status ${statusClass}">
                        ${status}
                    </span>

                </div>

                <h3>
                    ${question.answers[question.correct]}
                </h3>

                <p>
                    ${question.explanation}
                </p>

            `;


            reviewList.appendChild(
                item
            );

        }
    );


    showScreen(
        "reviewScreen"
    );

}


/* =========================================
   RESTART
========================================= */

function restartGame() {

    showScreen(
        "difficultyScreen"
    );

}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showScreen(
            "homeScreen"
        );

    }
);
