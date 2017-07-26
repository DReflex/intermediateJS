function destroyer(arr) {
  // Remove all the values

  for(var i = 0; i<arr.length; i++){
    for(var j = 1; j < arguments.length; j++){
      if(arr[i] == arguments[j]){
        delete arr[i];

      }
    }
  }
  return(arr.filter(Boolean));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
