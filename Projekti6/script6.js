function laheta() {

    const etuNimi = document.getElementById("enimi").value;
    const sukuNimi = document.getElementById("snimi").value;
    const osoiteTieto = document.getElementById("osoite").value;
    const puhelinnumero = document.getElementById("puhnro").value;
    const postipaikka = document.getElementById("ptp").value;
    const postinumero = document.getElementById("pnro").value;
    const sahkoPosti = document.getElementById("sposti").value;


    const kayttajatiedot = {
        etunimi: etuNimi,
        sukunimi: sukuNimi,
        lahiosoite: osoiteTieto,
        puhelinnumero: puhelinnumero,
        postitoimipaikka: postipaikka,
        postinumero: postinumero,
        sahkoposti: sahkoPosti,
    }
    
    localStorage.setItem('user', JSON.stringify(kayttajatiedot))
}

function reset() {
    localStorage.clear()
}
window.onload =function() {
    document.getElementById("kayttajatiedot").onsubmit = laheta
    document.getElementById("reset").onclick = reset
}