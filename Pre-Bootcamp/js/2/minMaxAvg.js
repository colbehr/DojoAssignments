function minMaxAvg(array){
  var min = Number.MAX_SAFE_INTEGER;
  var max = -Number.MAX_SAFE_INTEGER;
  var counter = 0;
  for (i = 0; i <= array.length-1; i++){
    counter += array[i];
    if(array[i] < min){
      min = array[i];
    }
    if(max < array[i]){
      max = array[i];
    }
  }
  console.log(min);
  console.log(max);
  console.log(counter/array.length);
}
