function paivitaWindowLocation() {

    const vaikeus = document.getElementById("taso").value;

		if (vaikeus === "easy") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level1.html";
		} else if (vaikeus === "medium") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level2.html"
		} else if (vaikeus === "hard") {
            window.location.href = "http://127.0.0.1:5500/Projekti5/level3.html"
		}
}



//Korttien arvot, kaksi jokaista
// const vaikeus = document.getElementById("vaikeus").value;

//     if (vaikeus === "keskivaikea") {
//         const cardsArray = [
//             "A","A",
//             "B","B",
//             "C","C",
//             "D","D",
//             "E","E",
//             "F","F",
//             "G","G",
//             "H","H"
//     ];} else if (vaikeus === "vaikea") {
//         const cardsArray = [
//             "A","A",
//             "B","B",
//             "C","C",
//             "D","D",
//             "E","E",
//             "F","F",
//             "G","G",
//             "H","H",
//             "I","I",
//             "J","J",
//             "K","K",
//             "L","L",
//             "M","M",
//             "N","N"
//         ];
//     } else if (vaikeus === "helppo") {
//         const cardsArray = [
//             "A","A",
//             "B","B",
//             "C","C",
//             "D","D",
//             "E","E",
//             "F","F",
//             "G","G",
//             "H","H"
//         ];
//     }