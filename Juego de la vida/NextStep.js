function nextStep() {
    let columns = 3;
    let rows = 3;
    let board = new Array(rows);
    let boardTemp = new Array(rows);
    const rowsLimit = rows;
    const colsLimit = columns;


    for (let r = 0; r < board.length; r++) {
        board[r] = new Array(columns);
    }

    for (let r = 0; r < boardTemp.length; r++) {
        boardTemp[r] = new Array(columns);
    }
    

    //Estado inicial
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if ((r == 0 && c == 1) || (r == 1 && c == 0) || (r == 2 && c == 1))
                board[r][c] = "V";
            else
                board[r][c] = "M";
        }
    }



   

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let cellNow = board[row][col];
            let neighbours = [];
            let newStateCellNow;
            neighbours.push(col + 1 == colsLimit ? board[row][0] : board[row][col + 1]);
            neighbours.push(col == 0 ? board[row][colsLimit - 1] : board[row][col - 1]);
            neighbours.push(row == 0 ? board[rowsLimit - 1][col] : board[row - 1][col]);
            neighbours.push(row + 1 == rowsLimit ? board[0][col] : board[row + 1][col]);
            neighbours.push(getVecinoEsquinaInferiorDerecha(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaSuperiorDerecha(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaSuperiorIzquierda(board, row, col, rowsLimit, colsLimit));
            neighbours.push(getVecinoEsquinaInferiorIzquierda(board, row, col, rowsLimit, colsLimit));

            if (cellNow == "M")
                newStateCellNow = validationRule1(neighbours);
            else
                newStateCellNow = validationRule2(neighbours);

            boardTemp[row][col] = newStateCellNow ? "V" : "M";
        }

    }

    console.log(board);
    console.log(boardTemp);
}

function validationRule2(neighbours) {
    let contLife = 0;
    neighbours.forEach(n => {
        if (n == "V")
            contLife++;
    });

    return contLife == 3 || contLife == 2 ? true : false;
}

function validationRule1(neighbours) {
    let contLife = 0;
    neighbours.forEach(n => {
        if (n == "V")
            contLife++;
    });

    return contLife == 3 ? true : false;
}

function getVecinoEsquinaInferiorIzquierda(board, row, col, rowsLimit, colsLimit) {
    var vecEsqSupL = null;
    if (row > 0) {
        if (col > 0)
            vecEsqSupL = board[row - 1][col - 1];
        else
            vecEsqSupL = board[row - 1][colsLimit - 1];
    }
    else {
        if (col > 0)
            vecEsqSupL = board[rowsLimit - 1][col - 1];
        else
            vecEsqSupL = board[rowsLimit - 1][colsLimit - 1];
    }

    return vecEsqSupL;
}


function getVecinoEsquinaSuperiorIzquierda(board, row, col, rowsLimit, colsLimit) {
    var vecEsqSupL = null;
    if (row > 0) {
        if (col > 0)
            vecEsqSupL = board[row - 1][col - 1];
        else
            vecEsqSupL = board[row - 1][colsLimit - 1];
    }
    else {
        if (col > 0)
            vecEsqSupL = board[rowsLimit - 1][col - 1];
        else
            vecEsqSupL = board[rowsLimit - 1][colsLimit - 1];
    }

    return vecEsqSupL;
}

function getVecinoEsquinaSuperiorDerecha(board, row, col, rowsLimit, colsLimit) {
    var vecEsqSupR = null;
    if (row > 0) {
        if (col + 1 == colsLimit)
            vecEsqSupR = board[row - 1][0];
        else
            vecEsqSupR = board[row - 1][col + 1];
    }
    else {
        if (col + 1 == colsLimit)
            vecEsqSupR = board[rowsLimit - 1][0];
        else
            vecEsqSupR = board[rowsLimit - 1][col + 1];
    }

    return vecEsqSupR;
}

function getVecinoEsquinaInferiorDerecha(board, row, col, rowsLimit, colsLimit) {
    var vecEsqInfR = null;
    if (row + 1 == rowsLimit) {
        if (col + 1 == colsLimit)
            vecEsqInfR = board[0][0];
        else
            vecEsqInfR = board[0][col + 1];
    }
    else {
        if (col + 1 == colsLimit)
            vecEsqInfR = board[row + 1][0];
        else
            vecEsqInfR = board[row + 1][col + 1];
    }

    return vecEsqInfR;
}


