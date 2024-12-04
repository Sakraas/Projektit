// Haetaan HTML-elementit, joihin viitataan myöhemmin
var syotto = document.getElementById("td");  // Syöttökenttä
var ul = document.querySelector("ul");  // Lista, johon tehtävät lisätään

// Funktio luo uuden listan ja lisää sen 'ul' elementtiin
function luoLista() {
    var li = document.createElement("li");  // Luodaan uusi listaelementti
    li.setAttribute("id", "task-" + Date.now());  // Asetetaan uniikki ID käyttäen aikaleimaa
    li.setAttribute("draggable", "true");  // Määrätään listaelementti vedettäväksi

    if (syotto.value !== "") {  // Tarkistetaan, että syöttökenttä ei ole tyhjä
        li.appendChild(document.createTextNode(syotto.value));  // Lisätään syötetty teksti listan alkioihin
        ul.appendChild(li);  // Lisätään luotu listaelementti <ul>-listaan
        syotto.value = "";  // Tyhjennetään syöttökenttä uuden tehtävän lisäämisen jälkeen
        
        li.addEventListener("dragstart", dragstart);  // Lisätään tapahtumakuuntelija 'dragstart'-tapahtumaan
    }
}

// Funktio, joka kutsuu luoLista-funktiota uuden tehtävän lisäämiseksi
function lisaaTehtava() {
    luoLista();
}

// `dragstart`-tapahtumahandleri, joka käsittelee alkion vetämistä
function dragstart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);  // Asetetaan siirrettävän elementin ID tiedoksi
    setTimeout(() => {
        e.target.classList.add("hide");  // Piilotetaan elementti visuaalisesti vetämisen ajaksi
    }, 0);
}

// `dragenter`, `dragover`, `dragleave`, ja `drop`-tapahtumien kuuntelijat
const boxes = document.querySelectorAll(".box");  // Haetaan kaikki "box" -luokan elementit

// Lisätään jokaiselle laatikolle tarvittavat tapahtumankuuntelijat
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);  // Kuunnellaan, kun elementti tulee laatikkoon
    box.addEventListener('dragover', dragOver);  // Kuunnellaan, kun elementti kulkee laatikon päältä
    box.addEventListener('dragleave', dragLeave);  // Kuunnellaan, kun elementti poistuu laatikosta
    box.addEventListener('drop', drop);  // Kuunnellaan, kun elementti pudotetaan laatikkoon
});

// Funktio, joka käsittelee, mitä tapahtuu, kun elementti saapuu laatikkoon
function dragEnter(e) {
    e.preventDefault();  // Estetään oletustoiminto (esim. linkin avaaminen)
    e.target.classList.add('drag-over');  // Lisätään visuaalinen ilme, että elementti on vedettävissä laatikkoon
}

// Funktio, joka käsittelee, mitä tapahtuu, kun elementti liikkuu laatikon päällä
function dragOver(e) {
    e.preventDefault();  // Estetään oletustoiminto
    e.target.classList.add('drag-over');  // Päivitetään visuaalinen tila
}

// Funktio, joka käsittelee, mitä tapahtuu, kun elementti poistuu laatikosta
function dragLeave(e) {
    e.target.classList.remove('drag-over');  // Poistetaan visuaalinen ilme
}

// Funktio, joka käsittelee pudotetun elementin asettamisen laatikkoon
function drop(e) {
    e.preventDefault();  // Estetään oletustoiminto (esim. tekstin liittäminen)
    e.target.classList.remove('drag-over');  // Poistetaan visuaalinen ilme, että elementti on vedettävissä laatikkoon

    // Varmistetaan, että pudotettu kohde on laatikko
    if (e.target.classList.contains("box")) {
        const id = e.dataTransfer.getData('text/plain');  // Haetaan vedetyn elementin ID
        const draggable = document.getElementById(id);  // Haetaan elementti sen ID:llä

        e.target.appendChild(draggable);  // Lisätään vedetty elementti laatikkoon
        draggable.classList.remove('hide');  // Poistetaan visuaalinen piilotus
    }
}

// Haetaan roskakorin elementti
 const roskisKamaa = document.getElementById('roskis');

// Lisätään roskakorille tapahtumankuuntelijat
roskisKamaa.addEventListener('dragover', e => e.preventDefault());  // Estetään oletustoiminto, jotta 'drop' on mahdollinen

roskisKamaa.addEventListener('drop', e => {
e.preventDefault();  // Estetään oletustoiminto
const poistettavat = document.getElementById(e.dataTransfer.getData('text'));  // Haetaan pudotettu elementti ID:n perusteella

if (poistettavat) {
// Käynnistetään roskakorin pomppimisanimaatio
roskisKamaa.classList.add('roskis-pomppii');
        
// Poistetaan elementti
poistettavat.remove();

}
    
// Poistetaan animaatioluokka, jotta se voidaan käynnistää uudelleen
    setTimeout(() => {
       roskisKamaa.classList.remove('roskis-pomppii');
    }, 500);  // Animaation kesto (500ms), jotta luokka poistetaan animaation jälkeen
 });