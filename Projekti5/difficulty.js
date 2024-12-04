function paivitaWindowLocation() {

    const vaikeus = document.getElementById("taso").value;

		if (vaikeus === "easy") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level1.html";
		} else if (vaikeus === "medium") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level2.html"
		} else if (vaikeus === "hard") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level3.html"
		}
            peli()
}