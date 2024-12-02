// const cardsArray =[
    //     "A","A",
    //     "B","B",
    //     "C","C",
    //     "D","D",
    //     "E","E",
    //     "F","F",
    //     "G","G",
    //     "H","H",
    //     "I","I",
    //     "J","J",
    //     "K","K",
    //     "L","L"
    // ];
    
    // if (vaikeus === "easy") {
    //     cardsArray = [
    //         "A","A",
    //         "B","B",
    //         "C","C",
    //         "D","D",
    //         "E","E",
    //         "F","F",
    //         "G","G",
    //         "H","H"
    //     ];
    // } else if (vaikeus === "medium") {
    //     cardsArray = [
    //         "A","A",
    //         "B","B",
    //         "C","C",
    //         "D","D",
    //         "E","E",
    //         "F","F",
    //         "G","G",
    //         "H","H",
    //         "I","I",
    //         "J","J"
    //     ];
    // } else if (vaikeus === "hard") {
    //     cardsArray = [
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
    // }


// function paivitaWindowLocation() {

// const vaikeus = document.getElementById("taso").value; //Vaikeusasteen haku

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

document.addEventListener("DOMContentLoaded", () => {
    var pieni = 16;
    var pienipeli = [];
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


    console.log(pienipeli);

// Korttien sekoitus
let shuffledCards = shuffleArray(cardsArray);
// Korttien käännön seuranta sekä useamman kuin kahden kortin käännön esto
let firstCard = null;
let secondCard = null;
let lockBoard = false;

const gameBoard = document.getElementById("game-board");

// Pelilaudan luonti ja korttien generointi

function createBoard() {
    shuffledCards.forEach((cardValue) => {
        const card = document.createElement("div");
        card.classList.add("card");  //luokka korttien ulkomuotoilua varten
        card.dataset.value = cardValue;
        card.addEventListener("click", flipCard); //Painallus efecktin luokka
        gameBoard.appendChild(card);
    });
}

/*Korttien kääntö funciton, funktio tarkistaa myös onko käännettävä kortti ensimmäinen vai toinen,
jotta peli tietää estää useamman kuin kahden kortin käännön*/

function flipCard() {
    if (lockBoard || this === firstCard) return; //Estää korttien käännön jos käännettynä on jo 2 korttia tai löydät parin
    this.classList.add("flipped"); //Luokka käännettyjä kortteja varten
    this.textContent = this.dataset.value; //Kortin arvo näkyviin
//Kortin tarkistus onko ensimmäinen kortti
    if (!firstCard) {
        firstCard = this;
        return;
    }
    //Toinen käännettävä kortti
    secondCard = this;
    checkForMatch(); //Tarkistaa onko käännetyt kortit samat
}

//Tarkistus funktio onko kortit samat
function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        disableCards(); //Löydettyjen parien poisto käytöstä
    } else {
        unflipCards(); //Kääntää kortit takaisin jos ne eivät olleet pari
    }
}

//Funkito kortti parien käytöstä poisoon

function disableCards() {
    firstCard.classList.add("matched"); //Ensimmäisen kortin merkkaus vastaavaksi
    secondCard.classList.add("matched");//Toisen kortin merkkaus vastaavaksi
    resedBoard(); //Pelilaudan nollaus
}

//Funktio korttien käännöstä takaisin jos eivät täsmää
function unflipCards() {
    lockBoard = true; //Estää useamman käännön function aikana
    setTimeout(() => {
        firstCard.classList.remove("flipped"); //Poistaa käännetty luokan ensimmäisestä
        secondCard.classList.remove("flipped"); //Poistaa käännetty luokan toisesta
        firstCard.textContent = ""; //Piilottaa kortin arvon
        secondCard.textContent = ""; //Piiloittaa kortin arvon
        resedBoard(); //Nollaa laudan seuraavaa kierrrosta varten
    }, 1000); //Luo sekunnin viiveen jotta kortit kerkeää nähdä ennen takaisin kääntöä
}

//Pöydän resetointi function
function resedBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; //Nollaa pelin
}

//Functio korttien sekoittamista varten
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    //Sekoittaa taulukon
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() *currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array; //Palauta taulukko
}
//Pelilaudan luonti sivun latautumisen jälkeen
createBoard();
});