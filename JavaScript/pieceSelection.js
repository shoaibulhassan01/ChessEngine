const board = document.querySelector(".board");

let selectedSquare = null;
let selectedPiece = null;
let currentTurn = "white";

function highlightPiece() {
  board.addEventListener("click", (event) => {
    const square = event.target.closest(".square");

    if (!square) return;

    if (square) {
      console.log(square);
      if (selectedSquare) {
        selectedSquare.classList.remove("highlight");
      }

      const piece = square.querySelector(".piece");

       if (!piece) return;
      const pieceName = piece.src.split("/").pop().replace(".svg", "");
      const pieceColor = pieceName.startsWith("w") ? "white" : "black";

      if (pieceColor === currentTurn) {
        if (piece) {
          square.classList.add("highlight");
        }
        selectedSquare = square;
        selectedPiece = piece;
      }
    }
  });
}
highlightPiece();
