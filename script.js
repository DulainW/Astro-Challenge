// ============================================================
// ASTRO CHALLENGE
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
        fact: "Jupiter's Great Red Spot is a storm larger than Earth that has raged for centuries."
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
        question: "Name the planet shown in this image.",
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

    {
        difficulty: "observer",
        image: "",
        question: "Which planet is closest to the Sun?",
        answers: [
            "Venus",
            "Mercury",
            "Mars",
            "Earth"
        ],
        correct: 1,
        explanation: "Mercury is the innermost planet, orbiting the Sun at an average distance of about 58 million kilometres.",
        hint: "It is also the smallest planet in the Solar System.",
        fact: "A year on Mercury lasts only 88 Earth days."
    },

    {
        difficulty: "observer",
        image: "",
        question: "What is the closest star to Earth?",
        answers: [
            "Sirius",
            "Proxima Centauri",
            "The Sun",
            "Polaris"
        ],
        correct: 2,
        explanation: "The Sun is a star, and at about 150 million kilometres away it is by far the closest star to Earth.",
        hint: "You can see it every day.",
        fact: "After the Sun, the next closest star is Proxima Centauri, about 4.2 light-years away."
    },

    {
        difficulty: "observer",
        image: "",
        question: "What is the name of the galaxy we live in?",
        answers: [
            "The Andromeda Galaxy",
            "The Milky Way",
            "The Triangulum Galaxy",
            "The Whirlpool Galaxy"
        ],
        correct: 1,
        explanation: "Our Solar System is located in the Milky Way, a barred spiral galaxy.",
        hint: "Its name comes from the pale band of light it makes across the night sky.",
        fact: "The Milky Way contains an estimated 100 to 400 billion stars."
    },

    {
        difficulty: "observer",
        image: "",
        question: "What causes day and night on Earth?",
        answers: [
            "Earth orbiting the Sun",
            "The Moon blocking the Sun",
            "Earth rotating on its axis",
            "The Sun switching on and off"
        ],
        correct: 2,
        explanation: "Earth spins on its axis roughly once every 24 hours. The side facing the Sun has day, while the side facing away has night.",
        hint: "Think about Earth spinning.",
        fact: "Earth's equator rotates at about 1,670 kilometres per hour."
    },

    {
        difficulty: "observer",
        image: "",
        question: "About how long does it take Earth to orbit the Sun once?",
        answers: [
            "24 hours",
            "30 days",
            "365 days",
            "10 years"
        ],
        correct: 2,
        explanation: "Earth takes about 365.25 days to complete one orbit around the Sun, which defines one year.",
        hint: "This length of time is called a year.",
        fact: "The extra quarter day each year is why we add a leap day every four years."
    },


    // ========================================================
    // ASTRONOMER
    // ========================================================

    {
        difficulty: "astronomer",
        image: "",
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
    },

    {
        difficulty: "astronomer",
        image: "orion.jpg",
        question: "Which constellation is outlined in this image?",
        answers: [
            "Ursa Major",
            "Cassiopeia",
            "Scorpius",
            "Orion"
        ],
        correct: 3,
        explanation: "This is Orion, the Hunter, recognisable by the three stars of Orion's Belt, red Betelgeuse and blue-white Rigel.",
        hint: "Look for three bright stars in a row forming a belt.",
        fact: "Betelgeuse, Orion's red shoulder star, is a red supergiant that will one day explode as a supernova."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "What does a light-year measure?",
        answers: [
            "Time",
            "Distance",
            "Brightness",
            "Speed"
        ],
        correct: 1,
        explanation: "A light-year is the distance light travels in one year, about 9.46 trillion kilometres.",
        hint: "Despite the name, it is not a unit of time.",
        fact: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "What is the brightest star in the night sky?",
        answers: [
            "Polaris",
            "Betelgeuse",
            "Sirius",
            "Vega"
        ],
        correct: 2,
        explanation: "Sirius, in the constellation Canis Major, is the brightest star in the night sky.",
        hint: "It is often called the Dog Star.",
        fact: "Sirius is actually a binary system: a bright star with a faint white dwarf companion."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "Which element do stars mainly fuse in their cores for most of their lives?",
        answers: [
            "Hydrogen",
            "Carbon",
            "Iron",
            "Oxygen"
        ],
        correct: 0,
        explanation: "Main-sequence stars fuse hydrogen into helium in their cores, releasing the energy that makes them shine.",
        hint: "It is the lightest and most abundant element in the universe.",
        fact: "The Sun converts about 600 million tonnes of hydrogen into helium every second."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "What is a supernova?",
        answers: [
            "A newly formed planet",
            "The explosive death of a star",
            "A very bright comet",
            "A cluster of young stars"
        ],
        correct: 1,
        explanation: "A supernova is a powerful explosion that occurs when a massive star collapses or when a white dwarf is pushed past its mass limit.",
        hint: "It happens at the end of some stars' lives.",
        fact: "A single supernova can briefly outshine an entire galaxy."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "What is a pulsar?",
        answers: [
            "A rapidly rotating neutron star that emits beams of radiation",
            "A planet with a very short orbit",
            "A star that changes colour every night",
            "A comet that returns every year"
        ],
        correct: 0,
        explanation: "A pulsar is a highly magnetised, rapidly spinning neutron star. Its beams of radiation sweep past Earth like a lighthouse, appearing as regular pulses.",
        hint: "Think of a cosmic lighthouse.",
        fact: "Some pulsars spin more than 700 times per second."
    },

    {
        difficulty: "astronomer",
        image: "",
        question: "What is an exoplanet?",
        answers: [
            "A planet with no atmosphere",
            "A dwarf planet beyond Neptune",
            "A planet that orbits a star other than the Sun",
            "A moon that has escaped its planet"
        ],
        correct: 2,
        explanation: "An exoplanet is any planet outside our Solar System, usually orbiting another star.",
        hint: "\"Exo\" means outside.",
        fact: "More than 5,000 exoplanets have been confirmed so far."
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
        difficulty: "cosmologist",
        image: "",
        question: "Approximately how old is the universe?",
        answers: [
            "4.6 billion years",
            "13.8 billion years",
            "100 billion years",
            "6,000 years"
        ],
        correct: 1,
        explanation: "Measurements of the Cosmic Microwave Background and the expansion of the universe give an age of about 13.8 billion years.",
        hint: "It is roughly three times the age of Earth.",
        fact: "The Solar System formed about 4.6 billion years ago."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "What does the redshift of a distant galaxy tell us?",
        answers: [
            "The galaxy is very hot",
            "The galaxy is made of red stars",
            "The galaxy is moving away from us",
            "The galaxy is about to collide with us"
        ],
        correct: 2,
        explanation: "Redshift means light has been stretched to longer wavelengths, showing that the galaxy is receding as the universe expands.",
        hint: "Think about the Doppler effect.",
        fact: "Edwin Hubble used galaxy redshifts in 1929 to show that the universe is expanding."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "What does Hubble's Law describe?",
        answers: [
            "Distant galaxies recede faster the farther away they are",
            "Planets orbit the Sun in ellipses",
            "Stars burn hotter as they age",
            "Black holes slowly evaporate"
        ],
        correct: 0,
        explanation: "Hubble's Law states that a galaxy's recession velocity is proportional to its distance, which is key evidence for an expanding universe.",
        hint: "It links a galaxy's speed with its distance.",
        fact: "The constant in Hubble's Law, the Hubble constant, is about 70 km/s per megaparsec."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "What is dark matter?",
        answers: [
            "Clouds of black dust between stars",
            "Matter that does not emit light but has gravitational effects",
            "The material inside black holes",
            "Burnt-out stars that no longer shine"
        ],
        correct: 1,
        explanation: "Dark matter does not emit, absorb or reflect light, but its gravity affects how galaxies rotate and how light bends around galaxy clusters.",
        hint: "We detect it only through its gravity.",
        fact: "Dark matter makes up about 85% of all the matter in the universe."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "What is thought to be causing the expansion of the universe to accelerate?",
        answers: [
            "Dark energy",
            "Dark matter",
            "Black holes",
            "Cosmic rays"
        ],
        correct: 0,
        explanation: "Dark energy is the name given to the unknown influence driving the accelerating expansion of the universe, discovered in 1998 using distant supernovae.",
        hint: "It is not the same as dark matter.",
        fact: "Dark energy makes up roughly 68% of the total energy content of the universe."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "Which elements were mainly produced in the first few minutes after the Big Bang?",
        answers: [
            "Carbon and oxygen",
            "Iron and nickel",
            "Hydrogen and helium",
            "Gold and uranium"
        ],
        correct: 2,
        explanation: "Big Bang nucleosynthesis produced mostly hydrogen and helium, with tiny traces of lithium. Heavier elements were forged later inside stars.",
        hint: "They are the two lightest elements.",
        fact: "About 75% of ordinary matter in the universe is hydrogen and about 25% is helium by mass."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "What is cosmic inflation?",
        answers: [
            "The slow cooling of stars over time",
            "An extremely rapid expansion in the first fraction of a second",
            "The growth of galaxies by merging",
            "The increase in the number of black holes"
        ],
        correct: 1,
        explanation: "Inflation theory proposes that the universe expanded exponentially for a tiny fraction of a second after the Big Bang, explaining why it looks so uniform.",
        hint: "It happened in the very earliest moments of the universe.",
        fact: "Inflation is thought to have lasted less than 10⁻³² seconds."
    },

    {
        difficulty: "cosmologist",
        image: "",
        question: "Why are Type Ia supernovae called \"standard candles\"?",
        answers: [
            "They always occur in the same galaxy",
            "They have a known peak brightness, so they can be used to measure distance",
            "They burn for exactly one year",
            "They are the brightest objects in the universe"
        ],
        correct: 1,
        explanation: "Type Ia supernovae reach a predictable peak luminosity. Comparing how bright they look with how bright they really are reveals their distance.",
        hint: "Think about how brightness can be used to measure distance.",
        fact: "Observations of Type Ia supernovae led to the discovery of dark energy and the 2011 Nobel Prize in Physics."
    }

];


// ============================================================
// SETTINGS
// ============================================================

const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 20;
const BASE_POINTS = 500;
const TIME_BONUS_PER_SECOND = 10;
const HINT_PENALTY = 100;


// ============================================================
// GAME VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let timeLeft = TIME_PER_QUESTION;
let timer = null;
let hintUsed = false;
let answered = false;
let selectedDifficulty = "observer";
let gameQuestions = [];
let playerAnswers = [];


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // GET HTML ELEMENTS
    // ========================================================

    const screens = {
        home: document.getElementById("homeScreen"),
        difficulty: document.getElementById("difficultyScreen"),
        quiz: document.getElementById("quizScreen"),
        results: document.getElementById("resultsScreen"),
        review: document.getElementById("reviewScreen")
    };

    const startButton = document.getElementById("startButton");
    const difficultyCards = document.querySelectorAll(".difficulty-card");

    const questionNumber = document.getElementById("questionNumber");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");
    const progressBar = document.getElementById("progressBar");

    const imageContainer = document.getElementById("questionImageContainer");
    const questionImage = document.getElementById("questionImage");
    const difficultyLabel = document.getElementById("difficultyLabel");
    const questionText = document.getElementById("questionText");
    const answersContainer = document.getElementById("answers");

    const hintButton = document.getElementById("hintButton");
    const hintText = document.getElementById("hintText");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextButton");

    const finalRank = document.getElementById("finalRank");
    const finalScore = document.getElementById("finalScore");
    const correctAnswers = document.getElementById("correctAnswers");
    const totalQuestions = document.getElementById("totalQuestions");
    const accuracyDisplay = document.getElementById("accuracy");

    const reviewButton = document.getElementById("reviewButton");
    const restartButton = document.getElementById("restartButton");
    const reviewList = document.getElementById("reviewList");
    const reviewBackButton = document.getElementById("reviewBackButton");


    // ========================================================
    // SCREENS
    // ========================================================

    function showScreen(name) {

        Object.values(screens).forEach(function (screen) {
            screen.classList.remove("active");
        });

        screens[name].classList.add("active");

        window.scrollTo(0, 0);

    }


    // ========================================================
    // START BUTTON
    // ========================================================

    startButton.addEventListener("click", function () {
        showScreen("difficulty");
    });


    // ========================================================
    // DIFFICULTY BUTTONS
    // ========================================================

    difficultyCards.forEach(function (card) {

        card.addEventListener("click", function () {

            selectedDifficulty = card.dataset.difficulty || "observer";

            startGame();

        });

    });


    // ========================================================
    // START GAME
    // ========================================================

    function startGame() {

        clearInterval(timer);

        score = 0;
        correctCount = 0;
        currentQuestion = 0;
        playerAnswers = [];

        /*
            Use questions from the selected difficulty first.
            If there are not enough, fill the remaining places
            with questions from the other difficulties.
        */

        const selectedQuestions = shuffleArray(
            questionBank.filter(function (question) {
                return question.difficulty === selectedDifficulty;
            })
        );

        const otherQuestions = shuffleArray(
            questionBank.filter(function (question) {
                return question.difficulty !== selectedDifficulty;
            })
        );

        gameQuestions = shuffleArray(
            [...selectedQuestions, ...otherQuestions].slice(0, QUESTIONS_PER_GAME)
        );

        updateScore();

        showScreen("quiz");

        loadQuestion();

    }


    // ========================================================
    // LOAD QUESTION
    // ========================================================

    function loadQuestion() {

        clearInterval(timer);

        const question = gameQuestions[currentQuestion];

        hintUsed = false;
        answered = false;


        // ----------------------------------------------------
        // QUESTION NUMBER AND PROGRESS
        // ----------------------------------------------------

        questionNumber.textContent =
            `${pad(currentQuestion + 1, 2)} / ${pad(gameQuestions.length, 2)}`;

        progressBar.style.width =
            (currentQuestion / gameQuestions.length) * 100 + "%";


        // ----------------------------------------------------
        // IMAGE
        // ----------------------------------------------------

        /*
            Questions without an image hide the whole image
            area so the question text is shown on its own.
        */

        if (question.image && question.image.trim() !== "") {

            questionImage.src = question.image;
            questionImage.alt = "Image for the question: " + question.question;
            imageContainer.classList.remove("hidden");

        } else {

            questionImage.removeAttribute("src");
            questionImage.alt = "";
            imageContainer.classList.add("hidden");

        }


        // ----------------------------------------------------
        // QUESTION TEXT
        // ----------------------------------------------------

        difficultyLabel.textContent = question.difficulty.toUpperCase();

        questionText.textContent = question.question;


        // ----------------------------------------------------
        // ANSWERS
        // ----------------------------------------------------

        answersContainer.innerHTML = "";

        question.answers.forEach(function (answer, index) {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "answer-button";
            button.textContent = answer;

            button.addEventListener("click", function () {
                checkAnswer(index);
            });

            answersContainer.appendChild(button);

        });


        // ----------------------------------------------------
        // RESET HINT, FEEDBACK AND NEXT BUTTON
        // ----------------------------------------------------

        hintButton.disabled = false;

        hintText.textContent = "";
        hintText.classList.add("hidden");

        feedback.innerHTML = "";
        feedback.className = "feedback hidden";

        nextButton.classList.add("hidden");


        // ----------------------------------------------------
        // START TIMER
        // ----------------------------------------------------

        startTimer();

    }


    // ========================================================
    // IMAGE FAILED TO LOAD
    // ========================================================

    /*
        If an image file is missing, hide the image area
        so the question can still be read and answered.
    */

    questionImage.addEventListener("error", function () {

        if (questionImage.getAttribute("src")) {
            imageContainer.classList.add("hidden");
        }

    });


    // ========================================================
    // TIMER
    // ========================================================

    function startTimer() {

        clearInterval(timer);

        timeLeft = TIME_PER_QUESTION;

        updateTimer();

        timer = setInterval(function () {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {
                finishQuestion(null);
            }

        }, 1000);

    }


    function updateTimer() {

        timerDisplay.textContent = timeLeft;

    }


    // ========================================================
    // CHECK ANSWER
    // ========================================================

    function checkAnswer(selectedIndex) {

        finishQuestion(selectedIndex);

    }


    /*
        Called when the player picks an answer,
        or with null when the time runs out.
    */

    function finishQuestion(selectedIndex) {

        if (answered) {
            return;
        }

        answered = true;

        clearInterval(timer);

        const question = gameQuestions[currentQuestion];
        const buttons = answersContainer.querySelectorAll(".answer-button");
        const isCorrect = selectedIndex === question.correct;

        let points = 0;


        // ----------------------------------------------------
        // DISABLE ANSWERS AND HINT
        // ----------------------------------------------------

        buttons.forEach(function (button) {
            button.disabled = true;
        });

        hintButton.disabled = true;


        // ----------------------------------------------------
        // HIGHLIGHT ANSWERS
        // ----------------------------------------------------

        buttons[question.correct].classList.add("correct");

        if (selectedIndex !== null && !isCorrect) {
            buttons[selectedIndex].classList.add("incorrect");
        }


        // ----------------------------------------------------
        // SCORE
        // ----------------------------------------------------

        if (isCorrect) {

            points = BASE_POINTS + timeLeft * TIME_BONUS_PER_SECOND;

            if (hintUsed) {
                points -= HINT_PENALTY;
            }

            score += points;
            correctCount++;

            updateScore();

        }


        // ----------------------------------------------------
        // FEEDBACK
        // ----------------------------------------------------

        let title;

        if (isCorrect) {
            title = `CORRECT — +${points} POINTS`;
        } else if (selectedIndex === null) {
            title = "TIME'S UP";
        } else {
            title = "INCORRECT";
        }

        feedback.innerHTML = "";

        const feedbackTitle = document.createElement("strong");
        feedbackTitle.textContent = title;

        const feedbackExplanation = document.createElement("p");
        feedbackExplanation.textContent = question.explanation;

        feedback.append(feedbackTitle, feedbackExplanation);

        feedback.className =
            "feedback " + (isCorrect ? "correct-feedback" : "incorrect-feedback");


        // ----------------------------------------------------
        // SAVE ANSWER FOR REVIEW
        // ----------------------------------------------------

        playerAnswers.push({
            question: question,
            selectedIndex: selectedIndex,
            isCorrect: isCorrect,
            points: points
        });


        // ----------------------------------------------------
        // SHOW NEXT BUTTON
        // ----------------------------------------------------

        nextButton.textContent =
            currentQuestion === gameQuestions.length - 1
                ? "VIEW RESULTS →"
                : "NEXT QUESTION →";

        nextButton.classList.remove("hidden");

        nextButton.focus({ preventScroll: true });

        nextButton.scrollIntoView({ behavior: "smooth", block: "nearest" });

    }


    // ========================================================
    // NEXT QUESTION BUTTON
    // ========================================================

    nextButton.addEventListener("click", function () {

        if (!answered) {
            return;
        }

        currentQuestion++;

        if (currentQuestion >= gameQuestions.length) {
            showResults();
        } else {
            loadQuestion();
        }

    });


    // ========================================================
    // HINT
    // ========================================================

    hintButton.addEventListener("click", function () {

        if (answered || hintUsed) {
            return;
        }

        const question = gameQuestions[currentQuestion];

        hintText.textContent = "HINT: " + question.hint;
        hintText.classList.remove("hidden");

        hintUsed = true;

        hintButton.disabled = true;

    });


    // ========================================================
    // SCORE DISPLAY
    // ========================================================

    function updateScore() {

        scoreDisplay.textContent = pad(score, 4);

    }


    // ========================================================
    // RESULTS
    // ========================================================

    function showResults() {

        clearInterval(timer);

        progressBar.style.width = "100%";

        const accuracy = Math.round(
            (correctCount / gameQuestions.length) * 100
        );

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
        finalScore.textContent = score;
        correctAnswers.textContent = correctCount;
        totalQuestions.textContent = gameQuestions.length;
        accuracyDisplay.textContent = accuracy + "%";

        showScreen("results");

    }


    // ========================================================
    // REVIEW
    // ========================================================

    reviewButton.addEventListener("click", function () {

        reviewList.innerHTML = "";

        playerAnswers.forEach(function (entry, index) {

            const question = entry.question;

            const item = document.createElement("div");
            item.className =
                "review-item " + (entry.isCorrect ? "review-correct" : "review-incorrect");

            const number = document.createElement("div");
            number.className = "review-number";
            number.textContent = pad(index + 1, 2);

            const content = document.createElement("div");
            content.className = "review-content";

            const title = document.createElement("strong");
            title.textContent = question.question;

            const yourAnswer = document.createElement("p");
            yourAnswer.className = "review-answer";
            yourAnswer.textContent =
                "Your answer: " +
                (entry.selectedIndex === null
                    ? "No answer (time ran out)"
                    : question.answers[entry.selectedIndex]) +
                (entry.isCorrect ? ` ✓ (+${entry.points})` : " ✗");

            const correctAnswer = document.createElement("p");
            correctAnswer.textContent =
                "Correct answer: " + question.answers[question.correct];

            const explanation = document.createElement("p");
            explanation.textContent = question.explanation;

            const fact = document.createElement("p");
            fact.className = "review-fact";
            fact.textContent = "Astronomy fact: " + question.fact;

            content.append(title, yourAnswer);

            if (!entry.isCorrect) {
                content.append(correctAnswer);
            }

            content.append(explanation, fact);

            item.append(number, content);

            reviewList.appendChild(item);

        });

        showScreen("review");

    });


    reviewBackButton.addEventListener("click", function () {
        showScreen("results");
    });


    // ========================================================
    // RESTART
    // ========================================================

    restartButton.addEventListener("click", function () {

        clearInterval(timer);

        showScreen("difficulty");

    });


    // ========================================================
    // HELPERS
    // ========================================================

    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

        return array;

    }


    function pad(number, length) {

        return String(number).padStart(length, "0");

    }

});
