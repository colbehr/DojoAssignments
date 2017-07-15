function greater2(array){
  var counter = 0;
  var newArray = [];
  for (i = 0; i <= array.length; i++){
    if(array[i] > array[1]){
      counter++;
      newArray.push(array[i]);
      console.log(counter);
    }
  }
  return newArray;
}
