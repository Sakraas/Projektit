function lisaaTehtava() {
    const toDo = document.getElementById("td").value;

    // Tarkistetaan, että elementti löytyy
    if (toDo) {
        console.log(toDo);
    } else {
        console.log("Elementtiä ei löytynyt.");
    }
    
}