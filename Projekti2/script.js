// Luodaan muuttujia pelille ja arvotaan satunnainen numero
let vastaus = Math.floor(Math.random() * 10 + 1); 
let arvaustenMaara = 0;
let arvaukset =[];
let voitot = 0;
let tappiot = 0;

// Luodaan funktio pelin toiminnolle
function guessNumber(arvo) {
      // Määritetään pelin pituus
    if (arvaustenMaara >= 3) {
      // Tehdään looppi ottamaan pois käytöstä laatikot jos arvaukset ovat 3 tai enemmän
        for (var n = 1; n <= 10; n++)
            {
              document.getElementById(n).classList.add("disabled");
              document.getElementById(n).disabled = true;
            }
      // Lisätään tappio laskurin ja lisätään arvaus taulokkoon
        tappiot++;
        arvaukset.push(arvo.value);
      // Näytetään tekstiä kun peli on päättynyt
        document.getElementById("rivi1").innerHTML = "Hävisit pelin!";
        document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
        document.getElementById("losses").innerHTML = tappiot;
    } else {
        // Määritetään mitä tehdään jos käyttäjä antaa liian suuren numeron
        if (vastaus < arvo.value) {
          // Lisätään arvaus taulukkoon ja lisätään arvausten määrän muuttujan arvoa
            arvaukset.push(arvo.value);
            arvaustenMaara++
          // Tehdään looppi ottamaan pois käytöstä liian suuret numero laatikot
            for(var j = arvo.value; j <= 10; j++)
                {
                  document.getElementById(j).classList.add("disabled");
                  document.getElementById(j).disabled = true;
                }
          // Näytetään tekstiä jos arvaus on liian suuri
            document.getElementById("rivi1").innerHTML = "Arvasit liian suuren numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
          // Määritetään mitä tehdään jos käyttäjä antaa liian pienen numeron
        } else if (vastaus > arvo.value) {
          // Lisätään arvaus taulukkoon ja lisätään arvausten määrän muuttujan arvoa
            arvaukset.push(arvo.value);
            arvaustenMaara++
          // Tehdään looppi ottamaan pois käytöstä liian pienet numero laatikot
            for(var i = 1; i <= arvo.value; i++)
                {
                  document.getElementById(i).classList.add("disabled");
                  document.getElementById(i).disabled = true;
                }
          // Näytetään tekstiä jos arvaus on liian pieni
            document.getElementById("rivi1").innerHTML = "Arvasit liian pienen numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
    }   else {
      // Näytetään tekstiä jos arvaa oikean numeron ja näytetään oikea vastaus laatikko
        document.getElementById("rivi1").innerHTML = "Arvasit oikein!"
        document.getElementById(arvo.value).classList.add("oikein");
        document.getElementById(arvo.value).disabled = true;
      // Lisätään voitto laskuriin piste
        voitot++;
      // Looppi ottamaan pois käytöstä laatikot kun arvaa oikein
        for(var k = 1; k <= 10; k++)
          {
            if(k == arvo.value && arvo.value !=10)
              {
                k++;
              }
              document.getElementById(k).classList.add("disabled");
              document.getElementById(k).disabled = true;
            }
          }
          arvaustenMaara++
        document.getElementById("wins").innerHTML = voitot;
    }
}
// Funktio uudelle pelille. Arvotaan uusi numero ja tyhjennetään muuttujia
function uusiPeli() {
    arvaustenMaara = 0;
    arvaukset.length = 0;
    vastaus = Math.floor(Math.random() * 10 + 1);
    for(var m = 1; m <= 10; m++)
        {
          document.getElementById(m).classList.remove("disabled");
          document.getElementById(m).classList.remove("oikein");
          document.getElementById(m).disabled = false;
          document.getElementById("rivi1").innerHTML = "";
          document.getElementById("rivi2").innerHTML = "";
          document.getElementById("rivi3").innerHTML = "";
    }
}