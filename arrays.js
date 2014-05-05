Array.prototype.dups = function () {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    if ( newArr.indexOf(this[i]) === -1 ) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

//
// var a = [1,2,3,3,4,1];
// console.log(a.dups());

var twoSum = function (arr) {
  var results = [];

  for (var i = 0; i < (arr.length - 1); i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if ( arr[i] + arr[j] === 0) {
        results.push([i,j]);
      }
    }
  }
  return results;
};


// var a = [-1, 0, 2, -2, 1];
// console.log(twoSum(a));

Array.prototype.transpose = function () {
  var results = [];

  for (var i = 0; i < this.length; i++) {
    var row = [];
    for (var j = 0; j < this[i].length; j++) {
      row.push(this[j][i]);
    }
    results.push(row);
  }
  return results;
}

var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];


Array.prototype.timesTwo = function () {
  var results = [];

  for(var i = 0; i < this.length; i++) {
    results.push(this[i] * 2);
  }
  return results;
}

var a = [1,9,8,2,3,4,1,5,6];
// console.log(a.timesTwo());

Array.prototype.each = function (fun) {
  for (var i = 0; i < this.length; i++) {
    fun(this[i]);
  }

  return this;
}


Array.prototype.map = function (func) {
  debugger
  var results = [];

  var pushFun = function (el) {
    results.push(func(el))
  };
  this.each(pushFun);

  return results;
}

// console.log(a.map(function(x) { return x * 2 } ));


Array.prototype.inject = function(func) {
  var total = this[0];

  var pushTotal = function (el) {
    total = func(el, total)
  }

  this.slice(1).each(pushTotal);
  return total;
}


// console.log(a.inject(function(x, y) { return x + y } ));


Array.prototype.bubble_sort = function() {
  var sorted = false;

  while (sorted === false) {
    sorted = true;

    for(var i = 0; i < this.length - 1; i++) {

      if (this[i] > this[i+1]) {
        var a = this[i];
        this[i] = this[i+1];
        this[i+1] = a;
        sorted = false;
      }

    }
  }

  return this;
}

// console.log(a.bubble_sort());


var substrings = function(string) {
  var result = [];

  for(var i = 0; i < string.length; i++) {
    for(var j = i + 1; j <= string.length; j++) {
      var sub = string.slice(i,j);

      if ( result.indexOf(sub) === -1 ) {
        result.push(sub);
      }
    }
  }

  return result;
}

console.log(substrings("samoa"));



















