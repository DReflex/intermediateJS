
function binaryAgent(str) {
    binary = str.split(' ');
    converted = [];
//parseInt to convert binary to unicode and char code at to convert uni to letter
  for(i=0;i < binary.length;i++){
    converted.push(String.fromCharCode(parseInt(binary[i], 2)));
  }

  return converted.join('');
}



binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
