const boardDiv = document.getElementById('board');

document.getElementById('newGameBtn').addEventListener('click', () => {
    renderBoard(generateEmptyBoard());
});

function generateEmptyBoard() {
    // Simple placeholder: 8x8 grid with letters for pieces
    const initialBoard = [
        ["R","N","B","Q","K","B","N","R"],
        ["P","P","P","P","P","P","P","P"],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["p","p","p","p","p","p","p","p"],
        ["r","n","b","q","k","b","n","r"]
    ];
    return initialBoard;
}

function renderBoard(board) {
    boardDiv.innerHTML = ''; // clear previous board
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.className = `square ${(i + j) % 2 === 0 ? 'white' : 'black'}`;
            square.innerText = board[i][j];
            boardDiv.appendChild(square);
        }
    }
}
