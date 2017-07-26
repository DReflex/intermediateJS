
function rot13(str) { // LBH QVQ VG!
//split string into char and call map
  return str.split('').map(function(c) {
    //convert char to int
     var i = c.charCodeAt(0);
    //check if its letter
      if (i < 65 || i > 90) {
        return String.fromCharCode(i);
      }
    //convert i into key add 65 to convert it to letter
      return String.fromCharCode(((i-52)%26)+65);
    }).join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
