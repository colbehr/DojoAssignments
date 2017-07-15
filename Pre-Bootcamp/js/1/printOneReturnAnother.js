function printOne(array){
  console.log(array[array.length-2]);
  for (i = 0; i <= array.length; i++){
    if(array[i] % 2 != 0){
      return array[i];
    }
  }
}
