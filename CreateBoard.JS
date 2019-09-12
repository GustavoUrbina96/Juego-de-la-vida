function createBoard() {
    clearBoard();
    const rows = document.getElementById("Rows").value;
    const columns = document.getElementById("Colums").value;
    const board = document.getElementById("Board");//get div for the board
    board.innerHTML = "";
    if (rows < 3 || columns < 3) {
        alert("Las columnas y las filas no pueden ser menor a 3");
        return;
    }
    if (rows > 100 || columns > 100) {
        alert("Las columnas y las filas no pueden ser mayores a 100");
        return;
    }

    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {

        let tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            td.setAttribute("height", "10px");
            td.setAttribute("width", "10px");
            td.id = "C" + j + "R" + i;
            td.className = "Dead"
            //td.onclick(changeState(td.id));
            td.setAttribute("onclick", "changeState(" + td.id + ")");
            tr.appendChild(td);

        }

        tblBody.appendChild(tr);

    }

    table.appendChild(tblBody);
    board.appendChild(table);
    table.setAttribute("border", "1");
}

function get(url) {
    //promise.
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = () => {
            if (req.status == 200) {//status ok
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror =  () => {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

function getAPI() {
    const urlEndPoint = "https://api.noopschallenge.com/automatabot/challenges/new";
    get(urlEndPoint).then((response) => {
        let objRespone = JSON.parse(response);
        const rows = objRespone.challenge.cells;
        document.getElementById("Rows").value = rows.length;
        document.getElementById("Colums").value = rows[0].length;
        createBoard();
        fillBoard(rows);
        console.log("Success!", objRespone.challenge);
    }, (error) => {
        console.error("Failed!", error);
    })
}

