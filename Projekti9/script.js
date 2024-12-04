//
// Sivun ladattaessa nämä functiot suoritetaan

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
    // Muuttuja API:n parametreille. Maa ja aikavyöhyke
    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

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
// Muuten sama, mutta API:n URL on eri
function nimipaivatHuomenna() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/tomorrow"
    );

    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

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
// Muuten sama, mutta API:n URL on eri
function nimipaivatEilen() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/yesterday"
    );

    const params = {
        "country": "fi",
        "timezone": "Europe/Prague",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

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
// Melkein sama, mutta API:n URL on eri
function nimipaivatValitse() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getdate"
    );
    // 
    // Muuttuja kalenterin päivämäärälle
    var paivamaara = document.getElementById("kalenteri").value;
    
    const params = {
        // Otetaan kalenterin arvosta pelkkä päivämäärä
        "day": paivamaara.substring(8, 10),
        // Otetaan kalenterin arvosta pelkkä kuukausi
        "month": paivamaara.substring(5, 7),
        "country": "fi",
        
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

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
    const params = {
        // Parametriksi syötetty nimi
        "name": kirjoitaNimi,
        "country": "fi",
        
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
    .then(data => {
        // 
        // Lisätään "p" elementtiin syötetyn nimen tiedot. Päivämäärä ja nimi.
        document.getElementById("kirjoitanimi").innerHTML = data[0][0].day + "." + data[0][0].month + " " + data[0][0].name;
    });
}