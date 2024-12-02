const tehtava = document.getElementById("td");
const tehtavat = document.getElementsByTagName("li");
const li = document.createElement("li");
const valitse = document.querySelector("li");
var enter = document.getElementById("nappi");

function lisaaTehtava() {

    if (tehtava === "") {
        alert("Syötä tehtävä!");
        return;
    } else {
        li.appendChild(document.createTextNode(tehtava.value))
    }
    // document.getElementsByTagName("li")[0].innerHTML = tehtava;
}

function tehtavaPituus() {
    return tehtava.value.length;
}

function listaPituus() {
    return tehtavat.length;
}