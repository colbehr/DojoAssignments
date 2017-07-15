function makeItBig(array){
  for (i = 0; i <= array.length; i++){
    if(array[i] > 0){
      array[i] = "big";
    }
  }
  return array;
}
