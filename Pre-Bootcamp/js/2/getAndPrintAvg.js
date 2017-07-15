function findPrintAvg(array){
  var counter = 0;
  for (i = 0; i <= array.length - 1; i++) {
    counter += array[i];
  }

  console.log(counter/array.length);
}
