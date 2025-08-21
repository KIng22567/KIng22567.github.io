// The main file

const API_BASE =
  "https://terrychessapi-cvdqgqe0esedcvh3.southafricanorth-01.azurewebsites.net";

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

function renderBoard(board) {
  console.log(board);
  if (!board || board.length === 0) {
    console.error("Board is empty or undefined");
    return;
  }
  boardDiv.innerHTML = ""; // clear previous board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.className = `square ${(i + j) % 2 === 0 ? "white" : "black"}`;
      square.innerText = board[i][j];
      boardDiv.appendChild(square);
    }
  }
}
