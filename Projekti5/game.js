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

<<<<<<< HEAD
// 		if (vaikeus === "easy") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level1.html";
//             getAllBefore('H');
// 		} else if (vaikeus === "medium") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level2.html";
//             getAllBefore('J');
// 		} else if (vaikeus === "hard") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level3.html";
//             getAllBefore('L');
// 		}
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const vaik = document.getElementById("vaik").value;
//     var pieni = 16;
//     var pienipeli = [];
//     var keski = 20;
//     var keskipeli = [];
//     var iso = 24;
//     var isopeli = [];
//     const cardsArray =[
//         "A","A",
//         "B","B",
//         "C","C",
//         "D","D",
//         "E","E",
//         "F","F",
//         "G","G",
//         "H","H",
//         "I","I",
//         "J","J",
//         "K","K",
//         "L","L"
//     ];


// function paivitaWindowLocation() {

//     const vaikeus = document.getElementById("taso").value;
// 		if (vaikeus === "easy") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level1.html";
// 		} else if (vaikeus === "medium") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level2.html"
// 		} else if (vaikeus === "hard") {
//             window.location.href = "http://127.0.0.1:5500/Projekti5/level3.html"
//         }
// }




document.addEventListener("DOMContentLoaded", ()  => {
        var pieni = 16;
        var pienipeli = [];
        var keski = 20;
        var keskipeli = [];
        var iso = 24;
        var isopeli = [];
        var kortit = [];
        const cardsArray =[
            "A","A",
            "B","B",
            "C","C",
            "D","D",
            "E","E",
            "F","F",
            "G","G",
            "H","H",
            "I","I",
            "J","J",
            "K","K",
            "L","L"
        ];

    for(var i = 0; i < pieni; i++)
    {
        pienipeli.push(cardsArray[i]);
    }

    for(var i = 0; i < keski; i++)
    {
        keskipeli.push(cardsArray[i]);
    }

    for(var i = 0; i < iso; i++)
    {
        isopeli.push(cardsArray[i]);
    }

function peli(){
    vaikeus = document.getElementById("taso").value;
    console.log(vaikeus)
    if(vaikeus === "easy") {
        kortit = pienipeli;
    } else if(vaikeus === "medium") {
        kortit = keskipeli;
    } else if(vaikeus === "hard") {
        kortit = isopeli;
        
    }
    console.log(kortit);
}

console.log(kortit);
=======
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
>>>>>>> 3099fad04a3c3093ddec3e82676fe0341f0ae842
    
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
