
function uniteUnique(arr) {
var result =[];
for(var i = 0; i < arguments.length; i++){

  arguments[i].forEach(function(item){

    if(result.indexOf(item) < 0){
      result.push(item);
    }
  });


 }
  console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
