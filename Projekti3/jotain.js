function updateDisplay() {                              // Päivitetään näyttö
    if (operaattori !== null) {
        display.textContent = edellinenOperaattori + " " + operaattori + " " + nykyinenOperaattori;
    } else {
        display.textContent = nykyinenOperaattori || "0";   // Näytetään nykyinen arvo tai nolla, jos ei ole numeroa
    }
}