var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;

function Game() {
  this.board = new Board();
  // Other attributes?
}

// You will certainly need some more helper methods...

Game.prototype.won = function () {

};

Game.prototype.placePiece = function (pos, color) {
  if (this.validMove(pos, color)) {
    this.board.grid[pos[0]][pos[1]] = new Piece(color);
    // flip all the captured pieces
  } else {
    throw new Error("Invalid Move");
  }
};

Game.prototype.runLoop = function () {

};

Game.prototype.validMove = function(pos, color) {
  console.log(this.board.capturedPieces);
  if (this.board.grid[pos[0]][pos[1]] != null) {
    return false;
  } else if(this.board.capturedPieces.length === 0) {
    return false;
  } else {
    return true;
  }
}


exports.Game = Game;
