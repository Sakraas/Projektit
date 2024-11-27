function lisaaTehtava() {
    let tehtava = document.getElementById("td"); // Hakee tekstikentän
    let arvo = tehtava.value; // Hakee tekstikentän arvon

    if (arvo.trim() !== "") { // Varmistetaan, että syöte ei ole tyhjä
        let tehtavaListaan = document.createElement("li"); // Luodaan uusi <li> elementti
        tehtavaListaan.innerHTML = arvo + ' <button onclick="poistaTama(this)">X</button>'; // Lisätään tehtävä ja poisto-nappi

        document.getElementById("tehtavalista").appendChild(tehtavaListaan); // Lisätään tehtävä listaan

        tehtava.value = ""; // Tyhjennetään syöttökenttä
    }
}

function poistaTama(nappi) {
    let listItem = nappi.parentElement; // Etsii listan kohteen, johon nappi kuuluu
    listItem.remove(); // Poistaa sen
}