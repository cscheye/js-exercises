var range = function(start, end) {
  if (start === end) {
    return [start];
  } else {
    return [start].concat(range(start+1, end));
  }
};

var exp1 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exp1(base, exp - 1);
  }
};

var exp2 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if ( exp % 2 === 0) {
    return Math.pow(exp2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exp2(base, (exp - 1) / 2), 2);
  }
};


var fibs = function (n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  } else {
    var prev_fibs = fibs(n - 1);
    var prev_fibs_len = prev_fibs.length
    return prev_fibs.concat(
      prev_fibs[prev_fibs_len - 1] + prev_fibs[prev_fibs_len - 2]
    );
  }
}


var bsearch =  function (arr, target) {
  var mid_idx = Math.floor(arr.length / 2);
  if (target === arr[mid_idx]) {
    return mid_idx;
  } else if (target > arr[mid_idx]) {
    return mid_idx + bsearch(arr.slice(mid_idx), target);
  } else {
    return bsearch(arr.slice(0, mid_idx), target);
  }
}

// console.log(bsearch([0,1,2,3,4,5,6,7,8,9], 8));
var makeChangeHelper = function(amt, coins) {
  var last_idx = coins.length - 1;
  var first_coin = coins[0];

  if (amt === 0) {
    return [];
  } else if (amt === coins[last_idx]) {
    return [coins[last_idx]];
  } else if (Math.floor(amt / first_coin) >= 1) {
    return [first_coin].concat(makeChangeHelper(amt - first_coin, coins))
  } else {
    return makeChangeHelper(amt, coins.slice(1));
  }
};



var makeChange = function (amt, coins) {
  var results = [];

  for (var i = 0; i < coins.length; i++) {
    results.push(makeChangeHelper(amt, coins.slice(i)));
  }
  //console.log(results);
  var shortest = results[0];
  for (var i = 0; i < results.length; i++) {
    if (results[i].length < shortest.length) {
      shortest = results[i];
    }
  }
  return shortest;
}



var mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var mid = Math.floor(arr.length / 2);
    var lowerHalf = mergeSort(arr.slice(0, mid));
    var upperHalf = mergeSort(arr.slice(mid));
    return merge(lowerHalf, upperHalf);
  }
};


var merge = function (lower, upper) {
  var results = [];
  while (lower.length > 0 && upper.length > 0) {
    if (lower[0] <= upper[0]) {
      results.push(lower.shift());
    } else {
      results.push(upper.shift());
    }
  }
  return results.concat(upper).concat(lower);
};


// console.log(mergeSort([4,2,0,1,7]));

var subsets = function (arr) {
  if (arr.length === 0) {
    return [[]];
  } else {
    var prev = subsets(arr.slice(0, arr.length - 1));
    var curr_val = arr.pop();
    var results = [];
    for (i = 0; i < prev.length; i++) {
      results.push(prev[i].concat(curr_val));
    }
    return prev.concat(results);
  }
};

console.log(subsets([1,2,3]));









