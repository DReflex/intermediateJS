function steamrollArray(arr) {
  var result = [];

  function flatten (item) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      for (var a in item) {
        flatten(item[a]);
      }
    }
  }

  arr.forEach(flatten);
  return result;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
