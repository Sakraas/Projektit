let vastaus = Math.floor(Math.random() * 10 + 1);
let arvaustenMaara = 0;
let arvaukset =[];
let voitot = 0;
let tappiot = 0;


function guessNumber(arvo) {
    if (arvaustenMaara >= 3) {
        for (var n = 1; n <= 10; n++)
            {
              document.getElementById(n).classList.add("disabled");
              document.getElementById(n).disabled = true;
            }
        tappiot++;
        arvaukset.push(arvo.value);
        document.getElementById("rivi1").innerHTML = "Hävisit pelin!";
        document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
        document.getElementById("losses").innerHTML = tappiot;
    } else {

        if (vastaus < arvo.value) {
            arvaukset.push(arvo.value);
            arvaustenMaara++
            for(var j = arvo.value; j <= 10; j++)
                {
                  document.getElementById(j).classList.add("disabled");
                  document.getElementById(j).disabled = true;
                }
            document.getElementById("rivi1").innerHTML = "Arvasit liian suuren numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
        } else if (vastaus > arvo.value) {
            arvaukset.push(arvo.value);
            arvaustenMaara++
            for(var i = 1; i <= arvo.value; i++)
                {
                  document.getElementById(i).classList.add("disabled");
                  document.getElementById(i).disabled = true;
                }
            document.getElementById("rivi1").innerHTML = "Arvasit liian pienen numeron!";
            document.getElementById("rivi2").innerHTML = "Arvatut numerot " + arvaukset;
            document.getElementById("rivi3").innerHTML = "Arvausten määrä " + arvaustenMaara;
    }   else {
        document.getElementById("rivi1").innerHTML = "Arvasit oikein!"
        document.getElementById(arvo.value).classList.add("oikein");
        document.getElementById(arvo.value).disabled = true;
        voitot++;
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
        document.getElementById("wins").innerHTML = voitot;
    }
}
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