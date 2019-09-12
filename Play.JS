function play() {
    if (document.getElementsByTagName("table").length == 0) {
        alert("Por favor crea un tablero para poder continuar");
        return;
    }
    let btnPlay = document.getElementById("play");
    let btnStop = document.getElementById("stop");
    let state = false;
    if (btnPlay.style.display == "inline-block") {
        btnPlay.style.display = "none";
        btnStop.style.display = "inline-block";
        state = false;
    }
    else {
        btnPlay.style.display = "inline-block";
        btnStop.style.display = "none";
        state = true;
    }
    
    if (state) {
        setTimeout(function () {
            nextStep();
        }, 1000);
    }


}