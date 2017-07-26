function smallestCommons(arr) {

  arr.sort(function(a, b) {
    return b - a;
  });
  var big = arr[0];
  var small = arr[1];


  var newArr = [];
  for (var i = big; i >= small; i--) {
    newArr.push(i);
  }


  var base = 0;
  var step = 1;
  var n;

  do {
    base = big * step * (big -1);
    for (n = 2; n < newArr.length; n++) {
      if (base % newArr[n] !== 0) {
        break;
      }
    }

    step++;
  } while (n !== newArr.length);

  return base;
}

// test here
smallestCommons([1,5]);
