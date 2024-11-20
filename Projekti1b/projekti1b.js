// Funktio lomakkeen lähettämiselle
function lahetaTiedot() {
    // Haetaan lomakkeen kentät
    const nimi = document.getElementById('nimi').value;
    const email = document.getElementById('email').value;
    const ika = document.getElementById('ika').value;
    const puhelinKaytto = document.getElementById('pudotus').value;
    const sukupuoli = document.querySelector('input[name="gender"]:checked');
    const elaimet = document.querySelectorAll('input[name="koira"]:checked, input[name="kissa"]:checked, input[name="kani"]:checked, input[name="kilpikonna"]:checked');
    
    // Alustetaan virheviestit
    let virheViesti = '';

    // Tarkistetaan, että nimi on annettu
    if (nimi.trim() === '') {
        virheViesti += 'Nimi on pakollinen.\n';
    }

    // Tarkistetaan, että sähköposti on annettu ja se on oikeassa muodossa
    if (email.trim() === '') {
        virheViesti += 'Sähköposti on pakollinen.\n';
    } else if (!validateEmail(email)) {
        virheViesti += 'Sähköpostiosoite ei ole kelvollinen.\n';
    }

    // Tarkistetaan, että ikä on annettu ja se on järkevä luku
    if (ika.trim() === '' || isNaN(ika) || ika < 1 || ika > 120) {
        virheViesti += 'Ikä on pakollinen ja sen tulee olla välillä 1-120.\n';
    }

    // Tarkistetaan, että puhelimen käyttöaika on valittu
    if (puhelinKaytto === 'eiValittu') {
        virheViesti += 'Valitse kuinka paljon käytät puhelinta päivittäin.\n';
    }

    // Tarkistetaan, että sukupuoli on valittu
    if (!sukupuoli) {
        virheViesti += 'Valitse sukupuolesi.\n';
    }

    // Tarkistetaan, että ainakin yksi eläinvalinta on tehty
    if (elaimet.length === 0) {
        virheViesti += 'Valitse ainakin yksi eläin, josta pidät.\n';
    }

    // Jos on virheitä, näytetään ne ja estetään lomakkeen lähettäminen
    if (virheViesti !== '') {
        alert('Virheellisiä tietoja:\n' + virheViesti);
    } else {
        // Jos kaikki on kunnossa, voidaan lähettää lomake
        alert('Lomake lähetetty onnistuneesti!');
        document.getElementById('kyselylomake').submit(); // Lähetetään lomake
    }
}

// Funktio sähköpostin validointiin
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

// Funktio päivittää sivun
function resetTiedot() {
    location.reload();
}
