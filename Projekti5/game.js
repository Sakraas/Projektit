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

    const gameBoard = document.getElementById("game-board");

    function peli() {
        const vaikeus = document.getElementById("taso").value;
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

    // Aloitusnappi kutsuu peliä
    document.getElementById("start-game").addEventListener("click", peli);
});
