function send(event)
{
    event.preventDefault();
    //Tietojen haku taulukosta
    let nimi = document.getElementById("user").value;
    let pass = document.getElementById("pw").value;
    let idea = document.getElementById("kehitysidea").value;

    //Tietojen täytön tarkistus + ilmoitus puuttuvista tiedoista
    if(nimi.trim() == "")
    {
        alert("Anna sähköposti");
    }
    else if(pass.trim() == "")
    {
        alert("Anna salasana!");
    }

    else if(pass.length < 6){
        alert("Salasanan pitää olla vähintään 6 merkkiä pitkä!");
    }
    else if(idea.trim() == "") {
        alert("Anna jokin palaute tai -");
    }

    else{
        alert("Kirjautumisesi on vastaanotettu!");
    }

}

function reset()
{
    formElement.reset()  
}