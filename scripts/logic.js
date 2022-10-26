let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
let boardSize = 3;


function startGame() {
    board = [];
    for (let i = 0; i < boardSize; i++) {
        board [i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = '';
        }
    }
    activePlayer = 1;
    renderBoard(board);
}

function click (row, column) {
    board[row][column] = players[activePlayer];
    renderBoard(board);
    if (checkWinner (players[activePlayer])) {
        showWinner(activePlayer);
    }
    if (activePlayer === 1) {
        activePlayer = 0
    } else {
        activePlayer = 1
    }
}

function checkDiagonal(symbol) {
    let toright = true;
    let toleft = true;
    for (let i=0; i<boardSize; i++) {
        toright &= (board[i][i] === symbol);
        toleft &= (board[boardSize-i-1][i] === symbol);
    }
    return toright || toleft;

}

function checkLanes(symbol) {
    let cols;
    let rows;
    for (let col=0; col<boardSize; col++) {
        cols = true;
        rows = true;
        for (let row=0; row<boardSize; row++) {
            cols &= (board[col][row] === symbol);
            rows &= (board[row][col] === symbol);
        }
        if (cols || rows) {
            return true;
        }
    }

    return false;
}

function checkWinner (symbol) {
    return (checkDiagonal(symbol)) || (checkLanes(symbol));

}