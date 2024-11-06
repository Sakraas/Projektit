let vastaus = Math.floor(Math.random() * 10 + 1);
let arvaustenMaara = 0;
let arvaukset =[];
let voitot = 0;
let tappiot = 0;

window.onload = window.alert(vastaus);

function guessNumber(arvo) {
    if (arvaustenMaara >= 3) {
        window.alert("Hävisit pelin!")
        for (var n = 1; n <= 10; n++)
            {
              document.getElementById(n).classList.add("disabled");
              document.getElementById(n).disabled = true;
            }
        tappiot++;
        document.getElementById("losses").innerHTML = tappiot;
    } else 

        if (vastaus < arvo.value) {
            arvaukset.push(arvo.value);
            arvaustenMaara++
            document.getElementById("rivi1").innerHTML = "Arvasit liian suuren numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
        } else if (vastaus > arvo.value) {
            arvaukset.push(arvo.value);
            arvaustenMaara++
            document.getElementById("rivi1").innerHTML = "Arvasit liian pienen numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
    }   else {
        window.alert("Arvasit oikein!")
        voitot++;
        document.getElementById("wins").innerHTML = voitot;
    }
}
window.alert(arvaus);