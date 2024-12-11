//
// HTML Sivun ladattaessa nämä functiot suoritetaan
function nimipaivat() {
    nimipaivatTanaan();
    nimipaivatHuomenna();
    nimipaivatEilen();
}
// 
//  Functio tämän päivän nimipäiville

function nimipaivatTanaan() {
    // 
    // Muuttuja API:n URL osoitteelle
    const url = new URL(
        "https://nameday.abalin.net/api/V1/today"
    );
    // 
    // Objekti muuttuja API:n parametreille. Maa ja aikavyöhyke
    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    // 
    // Määritellään HTTP-pyynnön otsikot. Näillä kerrotaan, että halutaan käsitellä JSON dataa
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    // 
    // Lähetetään GET-pyyntö API-osoitteeseen
    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
    .then(data => {
    // 
    // Lisätään "p" elementtii tämänpäivän tiedot ja nimi
 
    document.getElementById("tanaan").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
// 
// Functio nimipäiville huomenna
function nimipaivatHuomenna() {

    // 
    // Muuttuja API:n URL osoitteelle
    const url = new URL(
        "https://nameday.abalin.net/api/V1/tomorrow"
    );

    // 
    // Objekti muuttuja API:n parametreille. Maa ja aikavyöhyke
    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    //
    // Määritellään HTTP-pyynnön otsikot. Näillä kerrotaan, että halutaan käsitellä JSON dataa
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    // 
    // Lähetetään GET-pyyntö API-osoitteeseen
    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
    .then(data => {
    // 
    // Lisätään "p" elementtii huomisen päivän tiedot ja nimi
    document.getElementById("huomenna").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
// 
// Functio nimipäiville eilen
function nimipaivatEilen() {

    // 
    // Muuttuja API:n URL osoitteelle
    const url = new URL(
        "https://nameday.abalin.net/api/V1/yesterday"
    );

    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    // 
    // Määritellään HTTP-pyynnön otsikot. Näillä kerrotaan, että halutaan käsitellä JSON dataa
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    // 
    // Lähetetään GET-pyyntö API-osoitteeseen
    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
    .then(data => {
    // 
    // Lisätään "p" elementtii eilisen päivän tiedot ja nimi
    document.getElementById("eilen").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
// 
// Functio valitsemalle päivälle
function nimipaivatValitse() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getdate"
    );
    // 
    // Muuttuja kalenterin päivämäärälle
    var paivamaara = document.getElementById("kalenteri").value;
    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    const params = {
        // Otetaan kalenterin arvosta pelkkä päivämäärä
        "day": paivamaara.substring(8, 10),
        // Otetaan kalenterin arvosta pelkkä kuukausi
        "month": paivamaara.substring(5, 7),
        "country": "fi",
        
    };
    // 
    // Lisätään params-objektin avain-arvoparit osaksi url-osoitteen kyselyparametreja
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    // 
    // Määritellään HTTP-pyynnön otsikot. Näillä kerrotaan, että halutaan käsitellä JSON dataa
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    // 
    // Lähetetään GET-pyyntö API-osoitteeseen
    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
    .then(data => {
    // 
    // Lisätään "p" elementtii valittu päivämäärän ja nimi
        document.getElementById("valitsepv").innerHTML += " " + data.day + "." + data.month + " " + data.nameday.fi;
    });
}
// 
// Functio haettavaan nimeen
// Lähes sama, mutta API:n URL on eri
function nimipaivatNimi() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getname"
    );
    
    // Muuttuja syötetylle nimelle
    var kirjoitaNimi = document.getElementById("nimi").value    
    // 
    // Määritetään objektimuuttuja params, joka sisältää API-kyselyyn liittyvät parametrit
    const params = {
        "name": kirjoitaNimi,
        "country": "fi",
        
    };
    // 
    // Lisätään params-objektin avain-arvoparit osaksi url-osoitteen kyselyparametreja
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    // 
    // Määritellään HTTP-pyynnön otsikot. Näillä kerrotaan, että halutaan käsitellä JSON dataa
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    // 
    // Lähetetään GET-pyyntö API-osoitteeseen
    fetch(url, {
        method: "GET",
        headers,
    // 
    // Kun palvelin vastaa, vastaus muunnetaan JSON-muotoon.
    }).then(response => response.json())
    .then(data => {
        // 
        // Lisätään "p" elementtiin syötetyn nimen tiedot. Päivämäärä ja nimi.
        document.getElementById("kirjoitanimi").innerHTML = data[0][0].day + "." + data[0][0].month + " " + data[0][0].name;
    });
}
