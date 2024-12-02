// var lisaa = document.getElementById("nappi")
// lisaa.addEventListener("click", lisaaTehtava);

var syotto = document.getElementById("td");
// syotto.addEventListener("keypress", lisaaTehtavaEnter);

var ul = document.querySelector("ul");

function luoLista() {
    var li = document.createElement("li");
    if (syotto.value != "") {
        li.appendChild(document.createTextNode(syotto.value));
        ul.appendChild(li);
        syotto.value = "";
    }
}

function lisaaTehtava() {
    luoLista();
    // if (syotto.trim() !== "") {
    // } 
}

// function lisaaTehtavaEnter() {
//     if (syotto.trim() !== "" && event.which === 13) {
//         luoLista();
//     }
// }

const item = document.querySelector("scrumtaulu");
item.addEventListener("dragstart", dragstart);

function dragstart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.classList.add("hide");
    }, 0);
}

const boxes = document.querySelectorAll("box")

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove('hide');
}