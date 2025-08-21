class Piece {
  constructor(config) {
    this.color = config.color || "b";
    this.type = config.type || "k";
    this.image = new Image();
    this.src = config.src || `/Assets/classic/${this.color}${this.type}.png`;
  }
}
const Pieces = {
    black_pawn: new Piece({
        color: "b",
        type: "p",
    }),
    white_pawn: new Piece({
        color: "w",
        type: "p",
    }),
    black_rook: new Piece({
        color: "b",
        type: "r",
    }),
    white_rook: new Piece({
        color: "w",
        type: "r",
    }),
    black_knight: new Piece({
        color: "b",
        type: "n",
    }),
    white_knight: new Piece({
        color: "w",
        type: "n",
    }),
    black_bishop: new Piece({
        color: "b",
        type: "b",
    }),
    white_bishop: new Piece({
        color: "w",
        type: "b",
    }),
    black_queen: new Piece({
        color: "b",
        type: "q",
    }),
    white_queen: new Piece({
        color: "w",
        type: "q",
    }),
    black_king: new Piece({
        color: "b",
        type: "k",
    }),
    white_king: new Piece({
        color: "w",
        type: "k",
    }),
};
