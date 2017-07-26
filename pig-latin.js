function translatePigLatin(str) {
  //beta added new rule which is no vowels
  //what below statement does, it cheks for first set of cons in str
  //learn more about regEx and how this works

  var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');
  console.log(consChars);
  //if no consonants found (i.e. str starts with vowels)
  //use replace to remove consonants and construct newStr else add 'way' in the end
  if (consChars !== ''){
    newStr = str.replace(consChars, '') + consChars + "ay";
  } else {
    newStr = str + "way";
  }
  console.log(newStr);
  return newStr;
}

// test here
//it brakes if you add symbols, returns --bbbccc+ null+ ay
translatePigLatin("--bbbcccc");
