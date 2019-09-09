function createBoard(){
    const rows = document.getElementById("Rows").value;
    const columns = document.getElementById("Colums").value;
    const board = document.getElementById("Board");//get div for the board
    board.innerHTML="";
    if(rows<3 || columns<3){
        alert("Las columnas y las filas no pueden ser menor a 3");
        return;
    }
    if(rows>100 || columns>100){
        alert("Las columnas y las filas no pueden ser mayores a 100");
        return;
    }

    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        //crear las ileras
        var tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            var td = document.createElement("td");
            td.setAttribute("height","10px");
            td.setAttribute("width","10px");
            td.id = "C"+j+"R"+i;
            td.className = "Dead"
            //td.onclick(changeState(td.id));
            td.setAttribute("onclick","changeState("+td.id+")");
            tr.appendChild(td);         
            
        }

        tblBody.appendChild(tr);
        
    }

    table.appendChild(tblBody);
    board.appendChild(table);
    table.setAttribute("border","2");
}

function changeState(celule){
    celule.className = celule.className == "Live" ? "Dead" : "Live";    
}
