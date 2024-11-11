function lahetaVastaukset(event) {
    
}

let yhteensa = 5;
let pisteet = 0;
let huom = 0;

//hakee käyttäjän syöttämät vastaukset
let k1 = document.forms["kyselyLomake"]["k1"].value;
let k2 = document.forms["kyselyLomake"]["k2"].value;
let k3 = document.forms["kyselyLomake"]["k3"].value;
let k4 = document.forms["kyselyLomake"]["k4"].value;
let k5 = document.forms["kyselyLomake"]["k5"].value;

//Lomakkeen tarkistus
for(i = 1; i <= yhteensa; i++)
{
    if(eval('k'+i) == null || eval('k'+i) == '')
    {
        alert('Et vastannut kysymykseen numero: ' + i);
        huom = 1;
    }
    if(huom == 1) return false;
}

//Oikeat vastaukset
let vastaukset = ["b", "a", "d", "b", "d"];

//Oikeiden vastauksien tarkistus
for(i = 1; i <= yhteensa; i++)
{
    if(eval('k'+i) == vastaukset[i-1])
    {
        pisteet++;
    }
}

//Tuloksien tulostus
let tulokset = document.getElementById('tulokset');
alert('Sait ' +pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);
tulokset.innerHTML = '<h3> Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' +yhteensa + '</span></h3>';
return false;
event.preventDefault;