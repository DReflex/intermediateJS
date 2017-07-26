function sumFibs(num) {
  var base = 0;
  var current =1;
  var result =0;
  while( current <= num){

    if (current % 2 !== 0) {
            result += current;
        }

    current += base;
    base = current - base;

  }
  console.log(result);
  return result;
}

sumFibs(4);
