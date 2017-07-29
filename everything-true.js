
function truthCheck(collection, pre) {
  // Is everyone being true?
  //run function for every if one returns false break
    return collection.every(function (item) {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
