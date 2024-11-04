let vastaus = Math.floor(Math.random() * 10 + 1);
let arvaustenMaara = 0;
let arvaukset =[];

window.onload = window.alert(vastaus);

function guessNumber(arvo) {
    if (arvaustenMaara == 3) {
        window.alert("Hävisit pelin!")
    } else 

        if (vastaus < arvo.value) {
            window.alert("Arvasit liian suuren numeron")
            arvaukset.push(arvo.value);
            arvaustenMaara++
        } else if (vastaus > arvo.value) {
            window.alert("Arvasit liian pienen numeron")
            arvaukset.push(arvo.value);
            arvaustenMaara++
    }   else {
        window.alert("Arvasit oikein!")
        
    }
}
window.alert(arvaus);