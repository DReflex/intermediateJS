
function dropElements(arr, func) {
  // Drop them elements.
  //check for the first falsy
 for(var i = 0; i < arr.length; i++){
  if(!func(arr[i])){
   delete arr[i];

  }
   else
     break;
 }
  //filter undefined
  arr = arr.filter(function( element ) {
   return element !== undefined;
  });
  //return arr
  return arr;

}

dropElements([1, 2, 3], function(n) {return n < 3; });
