const tehtava = document.getElementById("td");
tehtava.addEventListener("keypress",lisaaTehtava);
const tehtavat = document.getElementsByTagName("li");
const ul = document.querySelector("ul");
var enter = document.getElementById("nappi");
enter.addEventListener("click",lisaaTehtava);

function lisaaTehtava() {
    var li = document.createElement("li");
    if(tehtava.value != "") {
        li.appendChild(createTextNode(tehtava.value));
        ul.appendChild(li);
        tehtava.value = "";
    }
    function vari() {
        li.classList.toggle()
    }

}

function tehtavaPituus() {
    return tehtava.value.length;
}

function listaPituus() {
    return tehtavat.length;
}