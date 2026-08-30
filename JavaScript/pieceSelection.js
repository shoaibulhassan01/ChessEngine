const board = document.querySelector(".board");

let selectedSquare = null;
let selectedPiece = null;
let currentTurn = "white";

function highlightPiece() {
  board.addEventListener("click", (event) => {
    const square = event.target.closest(".square");

    if (!square) return;

    if (selectedSquare) {
      selectedSquare.classList.remove("highlight");
    }

    const piece = square.querySelector(".piece");

    if (!piece) {
      selectedSquare = null;
      selectedPiece = null;
      return;
    }

    const pieceName = piece.src.split("/").pop().replace(".svg", "");
    const pieceColor = pieceName.startsWith("w") ? "white" : "black";
    if (pieceColor !== currentTurn) return;

    square.classList.add("highlight");

    selectedSquare = square;
    selectedPiece = piece;
  });
}

function switchTurn() {
  if (currentTurn === "white") {
    currentTurn = "black";
  }
  else {
    currentTurn = "white";
  }
}

highlightPiece();
