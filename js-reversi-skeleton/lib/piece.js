function Piece(color) {
  this.color = color;
}

Piece.prototype.flip = function () {
  this.color = ( this.color === "white" ? "black" : "white" );
};

exports.Piece = Piece;
