var Piece = require("./piece.js").Piece;

function Board() {
  this.grid = Array(8);
  for (var i = 0; i < 8; i++) {
    this.grid[i] = Array(8);
  }

  this.grid[3][3] = new Piece("white");
	this.grid[3][4] = new Piece("black");
  this.grid[4][3] = new Piece("black");
  this.grid[4][4] = new Piece("white");
}

Board.prototype.pos = function(pos) {
  return this.grid[pos[0]][pos[1]];
}

Board.prototype.full = function () {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if(this.grid[i][j] == null) {
        return false;
      }
    }
  }
  return true;
};

// Other helper methods may be helpful!
Board.prototype.capturedPieces = function (placePos, color) {
  var pieces = [];

  for (var i = 0; i < 8; i++) {
    var currDelta = DELTAS[i];
    pieces.concat(this.deltaCaptures(currDelta, placePos, color));
  }
  console.log(pieces);
  return pieces;
}

Board.prototype.deltaCaptures = function (delta, currPos, color) {
  var enemyColor = ( color === "white" ? "black" : "white" );
  var captures = [];
  var nextPos = [delta[0] + currPos[0], delta[1] + currPos[1]]
  while ( this.pos(nextPos) != null && this.pos(nextPos).color === enemyColor ) {
    captures.push(nextPos);
    nextPos = [delta[0] + nextPos[0], delta[1] + nextPos[1]]
  }

  if (this.pos(nextPos).color === color) {
    return captures;
  } else {
    return [];
  }
}

var DELTAS = [
    [-1,-1],
    [0,-1],
    [1,-1],
    [-1,0],
    [1,0],
    [-1,1],
    [0,1],
    [1,1]
  ];


exports.Board = Board;
