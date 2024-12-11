document.addEventListener("DOMContentLoaded", () => {
    const valinnat = document.querySelectorAll(".valinta");
    const tulosDiv = document.getElementById("tulos")
    const vaihtoehdot = ["kivi", "paperi", "sakset"];
    
    function tietokoneenValinta() {
        const satunnainenIndexi = Math.floor(Math.random() * vaihtoehdot.length);
        return vaihtoehdot[satunnainenIndexi];
    }
    
    

    valinnat.forEach((valinta) => {
        valinta.addEventListener("click", () => {
          const pelaajaValinta = valinta.getAttribute("data-valinta");
          const tietokoneValinta = tietokoneenValinta();
          const tulos = maaritaVoittaja(pelaajaValinta, tietokoneValinta);
          displayResult(pelaajaValinta, tietokoneValinta, tulos);
        });
      });

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
    /**
     * Funktio näyttää pelin tuloksen resultDiv-elementissä.
     * @param {string} userChoice - Käyttäjän valinta.
     * @param {string} computerChoice - Tietokoneen valinta.
     * @param {string} result - Pelin tulos.
     */
    function displayResult(pelaajaValinta, tietokoneValinta, tulos) {
        tulosDiv.innerHTML = `
        Sinä valitsit: ${pelaajaValinta}<br>
        Tietokone valitsi: ${tietokoneValinta}<br>
        ${tulos}
        `;
      }
})

