//status variables
let playing = false;
let intervalID;

//Referencias
let btnPlay = document.getElementById("play");
let btnStop = document.getElementById("stop");

function play() {
    if (document.getElementsByTagName("table").length == 0) {
        alert("Por favor crea un tablero para poder continuar");
        return;
    }

    let delayTime = document.getElementById("delay").value;
    if (delayTime < 100) {
        alert("La velocidad no puede ser menor a 100")
        return;
    }

    //Only execute playing code if a tablero it's added
    if (playing) {//Stop
        playing = false;
        console.log("Deteniendo el ciclo... ", playing);
    }

    else {
        playing = true;//Start
        console.log("Iniciando el ciclo... ", playing);
    }

    if (playing) {
        //start interval
        intervalID = window.setInterval(nextStep, delayTime);

        // ocultar boton de play
        btnPlay.style.display = "none";

        //mostrar boton de pausa
        btnStop.style.display = "inline-block";
    } else {
        //Stop interval
        window.clearInterval(intervalID);

        // ocultar boton de pausa
        btnStop.style.display = "none";

        //mostrar boton de play
        btnPlay.style.display = "inline-block";
    }

}

function changeState(celule) {
    if (!playing)
        celule.className = celule.className == "Live" ? "Dead" : "Live";
}



function clearBoard() {
    if (document.getElementsByTagName("table").length == 0) {
        return;
    }

    let rows = document.getElementsByTagName("table")[0].rows;
    playing = true;
    play();
    for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < rows[r].childElementCount; c++) {
            rows[r].cells[c].className = "Dead";
        }
    }
}

function fillBoard(cells) {
    playing = true;
    play();
    let rows = document.getElementsByTagName("table")[0].rows;
    const rowsLimit = rows.length;
    const colsLimit = rows[rowsLimit - 1].childElementCount;
    for (let r = 0; r < rowsLimit; r++) {
        for (let c = 0; c < colsLimit; c++) {
            rows[r].cells[c].className = cells[r][c] == "0" ? "Dead" : "Live"
        }

    }

}