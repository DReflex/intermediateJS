
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = collection.filter(function(object){
    for(var key in source){
      if(source[key] != object[key]){
        return false;
      }
    }
    return true;
  });

  return arr;

}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
