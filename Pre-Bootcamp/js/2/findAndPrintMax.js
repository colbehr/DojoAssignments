function findPrintMax(array){
  var max = 0;
  for (i = 0; i <= array.length - 1; i++) {
      if (array[i] > max) {
          max = array[i];
      }
  }

  console.log(max);
}
