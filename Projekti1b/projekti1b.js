// Lomakkeen lähetyksen käsittely
function laheta() {
    // Haetaan syöteelementit
    const nimi = document.getElementById('nimi').value;
    const email = document.getElementById('email').value;
    const ika = document.getElementById('ika').value;
    const ruutuAika = document.getElementById('pudotus').value;
    const palaute = document.getElementById('palaute').value;
    const sukupuoli = document.getElementsByName("gender");

    // Tarkistetaan nimen pituus
    if (nimi.length < 2) {
        alert("Nimen tulee olla vähintään 2 merkkiä pitkä.");
        return;
    }

    // Tarkistetaan sähköpostin muoto
    if (!validateEmail(email)) {
        alert("Sähköposti on virheellisessä muodossa.");
        return;
    }

    // Tarkistetaan iän arvo
    if (ika < 1 || ika > 120) {
        alert("Iän tulee olla 1-120 vuotta.");
        return;
    }

    // Tarkistetaan ruutuajan määrä
    if (ruutuAika === "") {
        alert("Täytä sopiva vaihtoehto kohtaan: Puhelimen käyttö päivässä.");
        return;
    }

    // Tarkistetaan onko sukupuoli määritelty
    if (sukupuoli === "") {
        alert("Määritä sukupuoli");
        return;
    }

    // Näytetään onnistumisviesti ja tulostetaan tiedot
    alert("Lomake lähetetty onnistuneesti!\n\n" +
          "Nimi: " + nimi + "\n" +
          "Sähköposti: " + email + "\n" +
          "Ikä: " + ika + "\n" +
          "Palaute: " + palaute);
    
}

// Sähköpostin muotoa tarkistava funktio
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// // Haetaan kaikki sukupuoliradiopainikkeet
// var genderRadios = document.getElementsByName("gender");
// var selectedGender = false;

// // Tarkistetaan, onko mikään radiopainike valittuna
// for (var i = 0; i < genderRadios.length; i++) {
//     if (genderRadios[i].checked) {
//         selectedGender = true;
//         break;
//     }
// }

// // Jos sukupuolta ei ole valittu, näytetään virheilmoitus
// if (!selectedGender) {
//     document.getElementById("error-message").style.display = "block";


// <!-- Pudotusvalikko ja sen valinta vaihtoehdot -->
//             <tr>
//                 <td>
//                     <label for="" class="otsikko">Puhelimen käyttö päivässä</label>
//                     <div class="vastaukset">
//                     <select name="pudotus" id="pudotus">
//                         <option value="nolla">0-2</option>
//                         <option value="kolme" id="kolme">3-5h</option>
//                         <option value="kuusi" id="kuusi">6-8h</option>
//                         <option value="kahdeksan" id="kahdeksan">yli 8h</option>
//                     </select>
//                     </div>
//                 </td>
//             </tr>
//             <!-- Radio valinta ruutu -->
//             <tr>
//                 <td>
//                     <label for="gender" class="otsikko">Sukupuoli:</label>
//                     <div class="vastaukset">
//                     <input type="radio" id="nainen" name="gender" value="nainen" checked>
//                     <label for="nainen">Nainen</label><br>
//                     <input type="radio" id="mies" name="gender" value="mies">
//                     <label for="mies">Mies</label><br>
//                     <input type="radio" id="muu" name="gender" value="muu">
//                     <label for="muu">En halua kertoa</label>
//                     </div>
//                 </td>
//             </tr>
//             <!-- Checkbox valinnat -->
//             <tr>
//                 <td>
//                     <label for="elain" class="otsikko">Mistä eläimistä tykkäät?</label>
//                     <div class="vastaukset">
//                     <input type="checkbox" name="koira" id="koira" value="koira">
//                     <label for="koira">Koira</label><br>
//                     <input type="checkbox" name="kissa" id="kissa" value="kissa">
//                     <label for="kissa">Kissa</label><br>
//                     <input type="checkbox" name="kani" id="kani" value="kani">
//                     <label for="kani">Kani</label><br>
//                     <input type="checkbox" name="Kilpikonna" id="kilpikonna" value="kilpikonna">
//                     <label for="kilpikonna">Kilpikonna</label>
//                     </div>
//                 </td>
//             </tr>
//             <!-- Text area -->
//             <tr>
//                 <td>
//                     <label for="palaute" class="otsikko">Anna vapaamuotoinen palaute</label>
//                     <div class="vastaukset">
//                     <textarea name="palaute" id="palaute" rows="5" class="teksti"></textarea>
//                     </div>
//                 </td>
//             </tr>
//         </table>