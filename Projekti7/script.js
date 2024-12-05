// Luodaan functio
function aanet(elain) {
    // Määritetään muuttuja jonka arvoksi tulee elaimen ID
    aani = elain.id;
    // Määritetään muuttuja joka soittaa aani muuttujan audion 
    let audio = new Audio('aanet/'+aani+'.mp3');
    // Toistetaan muuttujan audio
    audio.play()
}