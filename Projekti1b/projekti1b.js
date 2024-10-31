// Lomakkeen lähetyksen käsittely
function laheta() {
    // Haetaan syöteelementit
    const nimi = document.getElementById('nimi').value;
    const email = document.getElementById('email').value;
    const ika = document.getElementById('ika').value;
    const palaute = document.getElementById('palaute').value;

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
