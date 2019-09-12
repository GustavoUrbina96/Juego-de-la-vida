function nextStep() {
    if (document.getElementsByTagName("table").length == 0) {
        alert("Por favor crea un tablero para poder continuar");
        return;
    }

    let table = document.getElementsByTagName("table")[0];
    let rows = table.rows;
    const rowsLimit = document.getElementsByTagName("table")[0].rows.length;
    const colsLimit = rows[rowsLimit - 1].childElementCount;
    let board = new Array(rowsLimit);
    let boardTemp = new Array(rowsLimit);


    for (let r = 0; r < board.length; r++) {
        board[r] = new Array(colsLimit);
        boardTemp[r] = new Array(colsLimit);
    }

    //Estado inicial
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {

            let classCell = rows[r].cells[c].className; //Get nameClass "Live" or "Dead"
            board[r][c] = classCell == "Dead" ? "D" : "L";
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let cellNow = board[row][col];
            let neighbours = [];
            let newStateCellNow;
            neighbours.push(col + 1 == colsLimit ? board[row][0] : board[row][col + 1]);//Derecha
            neighbours.push(col == 0 ? board[row][colsLimit - 1] : board[row][col - 1]);//Izquierda
            neighbours.push(row == 0 ? board[rowsLimit - 1][col] : board[row - 1][col]);//Arriba
            neighbours.push(row + 1 == rowsLimit ? board[0][col] : board[row + 1][col]);//Abajo
            neighbours.push(getVecinoEsquinaSuperiorDerecha(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaSuperiorIzquierda(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaInferiorIzquierda(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaInferiorDerecha(board, row, col, rowsLimit, colsLimit));


            if (cellNow == "D")
                newStateCellNow = validationRule1(neighbours);
            else
                newStateCellNow = validationRule2(neighbours);

            boardTemp[row][col] = newStateCellNow ? "L" : "D";
        }

    }

    //Save the new state
    for (let r = 0; r < boardTemp.length; r++) {
        for (let c = 0; c < boardTemp[r].length; c++) {
            rows[r].cells[c].className = boardTemp[r][c] == "D" ? "Dead" : "Live"
        }
    }
}



function validationRule2(neighbours) {
    let contLife = 0;
    neighbours.forEach(n => {
        if (n == "L")
            contLife++;
    });

    return contLife == 3 || contLife == 2 ? true : false;
}

function validationRule1(neighbours) {
    let contLife = 0;
    neighbours.forEach(n => {
        if (n == "L")
            contLife++;
    });

    return contLife == 3 ? true : false;
}

function getVecinoEsquinaSuperiorIzquierda(board, row, col, rowsLimit, colsLimit) {
    let newRow = row == 0 ? rowsLimit - 1 : row - 1;
    let newCol = col == 0 ? colsLimit - 1 : col - 1;
    return board[newRow][newCol];
}

function getVecinoEsquinaSuperiorDerecha(board, row, col, rowsLimit, colsLimit) {
    let newRow = row == 0 ? rowsLimit - 1 : row - 1;
    let newCol = col + 1 == colsLimit ? 0 : col + 1;
    return board[newRow][newCol];
}

function getVecinoEsquinaInferiorIzquierda(board, row, col, rowsLimit, colsLimit) {
    let newRow = row + 1 == rowsLimit ? 0 : row + 1;
    let newCol = col == 0 ? colsLimit - 1 : col - 1;
    return board[newRow][newCol];
}
function getVecinoEsquinaInferiorDerecha(board, row, col, rowsLimit, colsLimit) {
    let newRow = row + 1 == rowsLimit ? 0 : row + 1;
    let newCol = col + 1 == colsLimit ? 0 : col + 1;
    return board[newRow][newCol];
}


