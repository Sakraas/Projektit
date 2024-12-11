// Odottaa, että sivu latautuu kokonaan ennen scriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
    const valinnat = document.querySelectorAll(".valinta"); // Muuttuja valitsemaan kaikki valinta napit
    const tulosDiv = document.getElementById("tulos")   // Muuttuja tuloksen näyttämiseen
    const vaihtoehdot = ["kivi", "paperi", "sakset"];   // Taulukko mahdollisista valinnoista
    
    // Functio tietokoneen valinnalle
    // Satunnainen indexi numero generoidaan vaihtoehto taulukosta ja palautetaan se indexi.
    function tietokoneenValinta() {
        const satunnainenIndexi = Math.floor(Math.random() * vaihtoehdot.length);
        return vaihtoehdot[satunnainenIndexi];
    }
    
    
    // Lisää klikkaustapahtuman kuuntelija jokaiselle valintanapille
    valinnat.forEach((valinta) => {
        valinta.addEventListener("click", () => {
          const pelaajaValinta = valinta.getAttribute("data-valinta"); // Haetaan käyytäjän valinta 
          const tietokoneValinta = tietokoneenValinta();               // Haetaan tietokoneen satunnainen valinta
          const tulos = maaritaVoittaja(pelaajaValinta, tietokoneValinta); // Määrittää voittajan
          displayResult(pelaajaValinta, tietokoneValinta, tulos);   // Näytetään pelin tulos div näytöllä
        });
      });

    // Functio pelin voittajan määrittämiseksi
    // pelaajaValinta - Käyttäjän valinta (kivi, paperi tai sakset)
    // tietokoneValinta - Tietokoneen valinta (kivi, paperi tai sakset)  
    function maaritaVoittaja(pelaajaValinta, tietokoneValinta) {
        if (pelaajaValinta === tietokoneValinta) {
            return "Tasapeli!"

        } else if (
            (pelaajaValinta === "kivi" && tietokoneValinta === "sakset") ||
            (pelaajaValinta === "paperi" && tietokoneValinta === "kivi") ||
            (pelaajaValinta === "sakset" && tietokoneValinta === "paperi")
        ) {
            return "Voitit!"
        } else {
            return "Hävisit!"
        }
         
    }
    // Functio näyttämään pelin tulosDiv näytössä
    function displayResult(pelaajaValinta, tietokoneValinta, tulos) {
        tulosDiv.innerHTML = `
        Sinä valitsit: ${pelaajaValinta}<br>
        Tietokone valitsi: ${tietokoneValinta}<br>
        ${tulos}
        `;
      }
})

