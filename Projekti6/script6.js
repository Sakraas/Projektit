function laheta() {

    // Muuttujat tiedoille
    const etuNimi = document.getElementById("enimi").value;         
    const sukuNimi = document.getElementById("snimi").value;
    const osoiteTieto = document.getElementById("osoite").value;
    const puhelinnumero = document.getElementById("puhnro").value;
    const postipaikka = document.getElementById("ptp").value;
    const postinumero = document.getElementById("pnro").value;
    const sahkoPosti = document.getElementById("sposti").value;

    // Luodaan objekti tiedoista
    const kayttajatiedot = {
        etunimi: etuNimi,
        sukunimi: sukuNimi,
        lahiosoite: osoiteTieto,
        puhelinnumero: puhelinnumero,
        postitoimipaikka: postipaikka,
        postinumero: postinumero,
        sahkoposti: sahkoPosti,
    }
    // Muunnetaan JSON
    localStorage.setItem('user', JSON.stringify(kayttajatiedot))
}
// Tyhjennettään localStorage
function reset() {
    localStorage.clear()
}
// Varmistetaan että sivu on kokonaan ladannut
window.onload =function() {
    document.getElementById("kayttajatiedot").onsubmit = laheta
    document.getElementById("reset").onclick = reset
}