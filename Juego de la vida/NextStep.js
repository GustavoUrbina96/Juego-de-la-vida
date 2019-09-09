function nextStep() {
    let columns = 3;
    let rows = 3;
    let board = new Array(rows);

    for (let r = 0; r < board.length; r++) {
        board[r] = new Array(columns);
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

    let boardTemp = board;

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            var cellNow = board[row][col];
            var vecR = board[row].length > col+1 ? board[row][col] : board[row][col+1];
            var temp = 10;
        }
        
    }

    console.log(board);
}