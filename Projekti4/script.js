function lisaaTehtava() {
    let tehtava = document.getElementById("td"); // Hakee tekstikentän
    let arvo = tehtava.value; // Hakee tekstikentän arvon

    if (arvo.trim() !== "") { // Varmistetaan, että syöte ei ole tyhjä
        let tehtavaListaan = document.createElement("li"); // Luodaan uusi <li> elementti

        // Luodaan tehtävän teksti ja poistopainike
        let tehtavanTeksti = document.createElement("span");
        tehtavanTeksti.textContent = arvo;
        
        // Lisätään tapahtumankuuntelija, joka yliviivaa tekstin klikkaamalla
        tehtavanTeksti.addEventListener("click", function() {
            tehtavanTeksti.style.textDecoration = (tehtavanTeksti.style.textDecoration === "line-through") ? "" : "line-through";
        });

        // Luodaan poisto-nappi
        let poistaNappi = document.createElement("button");
        poistaNappi.textContent = "X";
        poistaNappi.onclick = function() {
            tehtavaListaan.remove(); // Poistaa tehtävän
        };

        // Liitetään tehtävän teksti ja poisto-nappi <li>:hen
        tehtavaListaan.appendChild(tehtavanTeksti);
        tehtavaListaan.appendChild(poistaNappi);

        // Lisätään tehtävä listaan
        document.getElementById("tehtavaLista").appendChild(tehtavaListaan);

        // Tyhjennetään syöttökenttä
        tehtava.value = "";
    } else {
        alert("Kirjoita tehtävä!");
    }
}
