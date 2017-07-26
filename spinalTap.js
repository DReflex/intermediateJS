
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
   //add space if its lower next to upper
  return newStr.replace(/\s+|_+/g, '-').toLowerCase();


}

spinalCase('This Is Spinal Tap');
