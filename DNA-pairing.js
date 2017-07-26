
function pairElement(str) {
  //make object for pairs
  var DNA = {T:'A', A:'T', G:'C', C:'G'};
  var split = str.split('');
  for(var i = 0; i < split.length; i++){
    //for each letter make 2d array
    split[i] = [split[i], DNA[split[i]]];
  }
  console.log(split);
  return split;
}

pairElement("GCG");
