function nimipaivat() {
    nimipaivatTanaan();
    nimipaivatHuomenna();
    nimipaivatEilen();
}

function nimipaivatTanaan() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/today"
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
    document.getElementById("tanaan").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
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
    document.getElementById("huomenna").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
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
    document.getElementById("eilen").innerHTML = data.day + "." + data.month + " " + data.nameday.fi;
    });
}
function nimipaivatValitse() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getdate"
    );

    var paivamaara = document.getElementById("kalenteri").value;
    console.log(paivamaara);
    const params = {
        "day": paivamaara.substring(8, 10),
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
        document.getElementById("valitsepv").innerHTML += " " + data.day + "." + data.month + " " + data.nameday.fi;
    });
}

function nimipaivatNimi() {

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getname"
    );

    var kirjoitaNimi = document.getElementById("nimi").value    
    const params = {
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
        document.getElementById("kirjoitanimi").innerHTML = data[0][0].day + "." + data[0][0].month + " " + data[0][0].name;
    });
}