
function fearNotLetter(str) {

  for(var i = 0; i< str.length -1; i++){
    //check if they are in range, dont loop trough last char
    if(str[i].charCodeAt(0) != (str[i +1].charCodeAt(0) -1)){
      //make missing charCode and convert it to letter
      var missing= str[i].charCodeAt(0) + 1;
      console.log(String.fromCharCode(missing));
      return String.fromCharCode(missing);
    }
  }
  return undefined;

}

fearNotLetter("abcf");
