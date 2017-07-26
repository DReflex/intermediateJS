console.log("hello");

function sumAll(arr) {
  var i = arr[0];
  var j = arr[1];
  var result = 0;
  if(i<j){
    for(v = i; v <= j; v++){
      result += v;
    }
  }else{
    for(v = j; v <= i; v++){
      result += v;
    }
  }
  console.log(result);
  return result;

}

sumAll([4, 2]);
