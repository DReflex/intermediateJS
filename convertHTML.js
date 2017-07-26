
function convertHTML(str) {
  // &colon;&rpar;
  //simple replacemant
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;") ;
}

convertHTML("Dolce & Gabbana");
