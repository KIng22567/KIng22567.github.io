// The main file

const API_BASE =
  "https://terrychessapi-cvdqgqe0esedcvh3.southafricanorth-01.azurewebsites.net";

// const API_BASE = "http://localhost:5135";

async function LoadBoard() {
  const response = await fetch(`${API_BASE}/game/new`);
  return await response.json();
}
const boardDiv = document.getElementById("board");

document.getElementById("newGameBtn").addEventListener("click", () => {
  (async () => {
    const board = await generateEmptyBoard();
    renderBoard(board);
  })();
});

async function generateEmptyBoard() {
  // Simple placeholder: 8x8 grid with letters for pieces
  const initialBoard = await LoadBoard();
  return initialBoard;
}

function convertBoard(board) {
  let cBoard = [];

  board.forEach((row, r) => {
    cBoard[r] = [];
    row.forEach((piece, c) => {
      if (piece) {
        
        const color = piece.color === 1 ? "white" : "black";

        const cP = Pieces[`${color}_${piece.pieceType.toLowerCase()}`];

        cBoard[r][c] = cP;
      } else cBoard[r][c] = null;
    });
  });

  return cBoard;
}
function renderBoard(board) {
  board = convertBoard(board);

  if (!board || board.length !== 8) {
    console.error("Board is empty or not 8x8:", board);
    return;
  }
  boardDiv.innerHTML = ""; // clear previous board
  for (let r = 0; r < 8; r++) {
    if (!Array.isArray(board[r]) || board[r].length !== 8) {
      console.error(`Row ${r} is invalid:`, board[r]);
      continue;
    }
    for (let c = 0; c < 8; c++) {
      const square = document.createElement("div");
      square.className = `square ${(r + c) % 2 === 0 ? "white" : "black"}`;
      if (board[r][c]) {
        const img = document.createElement("img");
        img.className = "piece";
        img.src = board[r][c].src;

        square.appendChild(img);
      }

      boardDiv.appendChild(square);
    }
  }
}

(async () => {
  renderBoard(await generateEmptyBoard());
})();
