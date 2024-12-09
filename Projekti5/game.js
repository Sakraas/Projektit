document.addEventListener("DOMContentLoaded", () => {
    const pieni = 16;
    const keski = 24;
    const iso = 36;

    const cardsArray = [
        "A", "A", "B", "B", "C", "C", "D", "D",
        "E", "E", "F", "F", "G", "G", "H", "H",
        "I", "I", "J", "J", "K", "K", "L", "L",
        "M", "M", "N", "N", "O", "O", "P", "P",
        "Q", "Q", "R", "R",
    ];

    let kortit = [];
    let shuffledCards = [];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    const gameBoard = document.getElementById("game-board");

    // Aloita peli ja valitse vaikeustaso
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

    // Luo pelilauta ja kortit
    function createBoard() {
        gameBoard.innerHTML = ""; // Tyhjennä pelilauta ennen uuden luontia

        const vaikeus = document.getElementById("taso").value;
        let columns;

        if (vaikeus === "easy") {
            columns = 4; // 4x4
        } else if (vaikeus === "medium") {
            columns = 4; // 4x6
        } else if (vaikeus === "hard") {
            columns = 6; // 6x6
        }

        gameBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Aseta sarakkeet

        shuffledCards.forEach((cardValue) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = cardValue;

            // Lisää kuva kortille (muista että kuvat ovat suurilla aakkosilla)
            const img = document.createElement("img");
            img.src = `/Projekti5/images/${cardValue}.png`; // Kuvan nimi on sama kuin kortin arvo, isolla
            img.alt = cardValue;
            img.style.display = "none"; // Aluksi kuva on piilotettu
            card.appendChild(img);

            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    }

    // Käännä kortti
    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add("flipped");
        const img = this.querySelector("img");
        img.style.display = "block"; // Näytä kuva

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    // Tarkista, ovatko kortit samanlaiset
    function checkForMatch() {
        if (firstCard.dataset.value === secondCard.dataset.value) {
            disableCards();
            checkGameOver(); // Tarkista pelin loppuminen, jos pari löytyy
        } else {
            unflipCards();
        }
    }

    // Estä korttien uudelleen valinta
    function disableCards() {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetBoard();
    }

    // Käännä kortit takaisin ympäri
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.querySelector("img").style.display = "none";
            secondCard.querySelector("img").style.display = "none";
            resetBoard();
        }, 1000);
    }

    // Nollaa peli ja varmista, että kortit eivät ole lukittuina
    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Sekoita kortit
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

    // Pelin lopetus tarkistus
    function checkGameOver() {
        const matchedCards = document.querySelectorAll(".matched");
        if (matchedCards.length === shuffledCards.length) {
            setTimeout(() => {
                alert("Onneksi olkoon, voitit pelin!");
            }, 500); // Viivästytä ilmoitusta hieman
        }
    }

    // Lisää tapahtumakuuntelija pelin aloitusnappiin
    document.getElementById("start-game").addEventListener("click", peli);
});
