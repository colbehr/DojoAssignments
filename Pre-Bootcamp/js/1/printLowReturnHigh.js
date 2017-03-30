function printLow(array){
  var low = Number.MAX_SAFE_INTEGER;
  var high = -Number.MAX_SAFE_INTEGER;
  for (i = 0; i <= array.length; i++){
    if(array[i] < low){
      low = array[i];
    }
    if(high < array[i]){
      high = array[i];
    }
  }
  console.log(low);
  return high;
}
