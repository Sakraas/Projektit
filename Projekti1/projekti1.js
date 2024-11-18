function send(event)
{
    event.preventDefault();
    //Tietojen haku taulukosta
    let nimi = document.getElementById("user").value;
    let pass = document.getElementById("pw").value;
    let idea = document.getElementById("kehitysidea").value;
    let radio = document.getElementsByName("radio");
    let check = document.getElementsByName("checkbox");
    let aine = document.getElementById("lempiaine");

    //Tietojen täytön tarkistus + ilmoitus puuttuvista tiedoista
    if(nimi.trim() == "")
    {
        alert("Anna Nimi!");
    }
    else if(pass.trim() == "")
    {
        alert("Anna salasana!");
    }
    else if(pass.length < 6){
        alert("Salasanan pitää olla vähintään 6 merkkiä pitkä!");
    }
    else if(idea.trim() == "") {
        alert("Anna jokin kehitysehdotus tai laita kenttään -");
    }
    //Radio valinnan tarkistus
    var vastaus = false;
    for(var r = 0; r < radio.length; r++)
    {
        if(radio[r].checked == true)
        {
            vastaus = true;
        }
    }
        if(vastaus == false)
        {
            alert('Et ole valinnut mitään koneen käytön valinnoista.');
            return false;
        }
    //Checkbox valinnan tarkistus
    var checkvastaus = false;
    for(var c = 0; c < check.length; c++)
    {
        if(check[c].checked == true)
        {
            checkvastaus = true;
        }
    }
        if(checkvastaus == false)
        {
            alert("Et ole valinnut mielipidettäsi sivusta.");
            return false;
        }
    //Dropdown valikon tarkistus
    var selectedValue = aine.options[aine.selectedIndex].value;
       if (selectedValue == "")
      {
       alert("Valitse lempiaineesi!");
      }
    //Ilmoitus kirjautumislomakkeen lähetyksestä
    else{
        alert("Kirjautumisesi on vastaanotettu!");
    }
}

function reset()
{
    formElement.reset()  
}