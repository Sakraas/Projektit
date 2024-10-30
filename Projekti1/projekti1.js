function laheta()
{
    //Tietojen haku taulukosta
    let sposti = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    console.log(sposti);
    //Tietojen tarkistus lomakkeesta
    let checkbox = document.getElementById("checkbox").isChecked;
    let radio = document.getElementsByName("käyttäjä").isChecked;
    let dropdown = document.getElementById("select").isChecked;

    //Tietojen täytön tarkistus + ilmoitus puuttuvista tiedoista
    if(sposti.trim() == "")
    {
        alert("Anna sähköposti");
    }
    else if(pass.trim() == "")
    {
        alert("Anna salasana!");
        return false;
    }

    else if(password.length < 8){
        alert("Salasanan pitää olla vähintään 8 merkkiä pitkä!")
    }
    else{
        alert("Kirjautumisesi on vastaanotettu!")
    }

    event.preventDefault();
}