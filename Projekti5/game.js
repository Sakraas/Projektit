document.addEventListener("DOMContentLoaded", () => {
    const pieni = 16;
    const keski = 20;
    const iso = 24;

    const cardsArray = [
        "A", "A", "B", "B", "C", "C", "D", "D",
        "E", "E", "F", "F", "G", "G", "H", "H",
        "I", "I", "J", "J", "K", "K", "L", "L"
    ];

    let kortit = [];
    let shuffledCards = [];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    let clicks = 0; // Napautusten määrä
    let startTime = null; // Pelin aloitusaika
    let timerInterval = null; // Aikaseurannan intervalli

    const gameBoard = document.getElementById("game-board");
    const clicksDisplay = document.getElementById("clicks"); // Napautusten näyttö
    const timeDisplay = document.getElementById("time"); // Ajan näyttö

    function peli() {
        const vaikeus = document.getElementById("taso").value;

        // Nollataan edellisen pelin tiedot
        clicks = 0;
        startTime = new Date();
        clearInterval(timerInterval);
        updateClicksDisplay();
        startTimer();

        if (vaikeus === "easy") {
            kortit = cardsArray.slice(0, pieni);
        } else if (vaikeus === "medium") {
            kortit = cardsArray.slice(0, keski);
        } else if (vaikeus === "hard") {
            kortit = cardsArray.slice(0, iso);
        }
        shuffledCards = shuffleArray(kortit);
        createBoard();
    }

    function createBoard() {
        gameBoard.innerHTML = ""; // Tyhjennä pelilauta ennen uuden luontia
    
        // Aseta ruudukon sarakkeiden määrä vaikeustason mukaan
        const vaikeus = document.getElementById("taso").value;
        let columns;
        if (vaikeus === "easy") {
            columns = 4; // 4x4
        } else if (vaikeus === "medium") {
            columns = 5; // 4x5
        } else if (vaikeus === "hard") {
            columns = 6; // 4x6
        }
    
        // Päivitä CSS-ruudukon sarakkeiden määrä
        gameBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
        // Luo kortit ja lisää ne pelilautaan
        shuffledCards.forEach((cardValue) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = cardValue;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;
        this.classList.add("flipped");
        this.textContent = this.dataset.value;

        clicks++;
        updateClicksDisplay();

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        if (firstCard.dataset.value === secondCard.dataset.value) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetBoard();
        checkGameOver(); // Tarkista pelin loppuminen
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.textContent = "";
            secondCard.textContent = "";
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((new Date() - startTime) / 1000);
            timeDisplay.textContent = `Aika: ${elapsedTime}s`;
        }, 1000);
    }

    function updateClicksDisplay() {
        clicksDisplay.textContent = `Napautukset: ${clicks}`;
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function checkGameOver() {
        const matchedCards = document.querySelectorAll(".matched");
        if (matchedCards.length === kortit.length) {
            stopTimer(); // Pysäytä ajastin
            alert(`Peli valmis! Aika: ${timeDisplay.textContent}, Napautukset: ${clicks}`);
        }
    }

    // Aloitusnappi kutsuu peliä
    document.getElementById("start-game").addEventListener("click", peli);
});
