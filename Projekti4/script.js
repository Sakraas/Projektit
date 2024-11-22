



// HUOM Ei toimi vielä toivotulla tavalla //




// Funktio, joka lisätään tehtävä listalle
function lisaaTehtava() {
    // Haetaan syöttökentän arvo
    const tehtava = document.getElementById("td").value;
    
    // Tarkistetaan, että kenttä ei ole tyhjä
    if (tehtava === "") {
        alert("Syötä tehtävä!");
        return;
    }

    // Luodaan uusi listaelementti
    const li = document.createElement("li");

    // Lisätään tehtävän teksti listalle
    li.textContent = tehtava;

    // Lisätään tehtävälle mahdollisuus merkitä se tehdyksi
    li.addEventListener("click", function () {
        li.classList.toggle("tehty"); // Vaihdetaan "tehty" luokka, joka voi muuttaa tyyliä
    });

    // Lisätään X-poistopainike
    const x = document.createElement("span");
    x.textContent = " X";
    x.classList.add("poista");
    
    // Lisätään poistopainikkeelle tapahtuma, joka poistaa tehtävän
    x.addEventListener("click", function (event) {
        event.stopPropagation(); // Estää klikkauksen leviämisen
        li.remove(); // Poistetaan tehtävä
    });

    // Lisätään poistopainike tehtävään
    li.appendChild(x);

    // Lisätään tehtävä lista-elementtiin
    document.getElementById("tehtavaLista").appendChild(li);

    // Tyhjennetään syöttökenttä lisäyksen jälkeen
    document.getElementById("td").value = "";
}



// HUOM Ei toimi vielä toivotulla tavalla //