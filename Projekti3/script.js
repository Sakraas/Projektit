// Tehty JSprojekteja kirjan koodin mukaan. Oli mielestäni hieno uusi tapa tehdä koodia
// Lisätty "C" toiminto laskimeen


document.addEventListener("DOMContentLoaded", () => {

    const edellinen = document.getElementById("edellinentulos");
    const display = document.getElementById("tulos");       // Tehdään laskimen näyttö muuttuja
    const buttons = document.querySelectorAll("button");    // Valitaan kaikki laskimen painikkeet

    let nykyinenOperaattori = "";       //
    let edellinenOperaattori = "";      // Muuttujat laskutoimituksille
    let operaattori = null;             //

    buttons.forEach((button) => {                                   // Käydään läpi kaikki painikkeet
        button.addEventListener("click", () => {                    // ja lisätään klikkaus "event" niille    
            
            if (button.hasAttribute("data-number")) {               //
                appendNumber(button.getAttribute("data-number"));   // Käsitellään numeronpainikkeet
            }
            else if (button.hasAttribute("data-operator")) {          //
                chooseOperator(button.getAttribute("data-operator")); // Käsitellään laskutoimituspainikkeet
            }
            else if (button.id === "yhtSuuri") {                      //
                laske();                                              // Yhtäsuuripainike
            }
            else if (button.id === "reset") {                         //
                nollaus();                                            // Nollauspainike
            }
            else if (button.id === "delete") {                        //
                nykyinenOperaattori = "";                             // Kumoa toimintopainike
            }
            updateDisplay();                                          // Päivittää toiminnon näkyviin näytölle
        })
    })

    function appendNumber(numero) {                                                 // Funktio lisää numeron arvoon
        if (numero === "0" && nykyinenOperaattori === "0") return;                  // Estetään ylimääräisien nollien lisäämine alkuun
        nykyinenOperaattori = nykyinenOperaattori.toString() + numero.toString();   // Lisää arvon nykyiseen tapahtumaan
    }
    function chooseOperator(valittuOperaattori) {       // Funktio operaattorin valitsimeksi
        if (nykyinenOperaattori === "") return;         // Ei tehdä mitään jos tyhjä
        if (edellinenOperaattori !== "") {              // Suoritetaan lasku jos nykyinen ja edellinen operaattorissa on arvo
            laske();
        }
        operaattori = valittuOperaattori;               //
        edellinenOperaattori = nykyinenOperaattori;     // Valmistellaan seuraavaa numeroa varten
        nykyinenOperaattori = "";                       //
    }
    function laske() {                                      // Funktio laskutoitukselle
        let computation;
        const prev = parseFloat(edellinenOperaattori);
        const current = parseFloat(nykyinenOperaattori);
        if (isNaN(prev) || isNaN(current)) return;          // Ei tehdä mitään jos arvot on tyhjä

        switch (operaattori) {                              
            case "+":
                computation = prev + current;
                break;                                      // Lasketaan valitun operaattorin mukaan
            case "-":                                       //
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break; 
            default:
                return;
        }
        nykyinenOperaattori = computation;              // Päivitetään nykyinen operand tuloksella ja nollataan muut arvot
        operaattori = null;
        edellinenOperaattori = "";
    }
        
    function nollaus() {                                // Nollattaan laskin
        nykyinenOperaattori = "";
        edellinenOperaattori = "";
        operaattori = null;
    }
    function updateDisplay() {                             // Päivitetään näyttö
        display.textContent = nykyinenOperaattori || "0";   // Näytetään nykyinenarvo tai nolla jos ei ole numeroa
        
    }

    nollaus();                            // Tyhjennetään laskin sovelluksen käynnistyessä

})