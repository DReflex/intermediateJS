
function palindrome(str) {
  // Good luck!
  var newStr ="";
  var revStr="";
  newStr = str.replace(/[\W_]/g, "").toLowerCase();
  console.log(newStr);
  revStr = newStr.split("").reverse().join("");
  return revStr == newStr;
}



palindrome("eye");
