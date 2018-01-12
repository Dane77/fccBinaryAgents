function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];
  for (i = 0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  
  return uniString.join('');
}
