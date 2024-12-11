function lahetaVastaukset(event) {
    event.preventDefault(); // Estää oletustoiminnon (lomakkeen lähetyksen)

    const yhteensa = 5; // Kysymysten kokonaismäärä
    let pisteet = 0;
    let huom = false;

    // Käyttäjän syöttämien vastausten haku
    const lomake = document.forms["kyselyLomake"];
    let vastaukset = ["b", "a", "c", "b", "d"]; // Oikeat vastaukset
    let tulokset = document.getElementById("tulokset");

    // Tarkista vastaukset
    for (let i = 1; i <= yhteensa; i++) {
        let vastaus = lomake[`k${i}`].value;
        if (!vastaus) {
            alert(`Et vastannut kysymykseen numero: ${i}`);
            huom = true;
        } else if (vastaus === vastaukset[i - 1]) {
            pisteet++; // Kasvata pistemäärää oikeista vastauksista
        }
    }

    if (huom) return; // Lopeta, jos jokin kysymys jäi vastaamatta

    // Näytä tulokset
    alert(`Sait ${pisteet} pistettä, kun maksimi pistemäärä oli ${yhteensa}`);
    tulokset.innerHTML = `<h3>Sait <span>${pisteet}</span> pistettä, kun maksimi pistemäärä oli <span>${yhteensa}</span></h3>`;
}
