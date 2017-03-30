function countPos(array){
var counter= 0;
  for (i = 0; i <= array.length-1; i++){
    if(array[i] > 0){
      counter ++;
    }
  }
  array.pop();
  array.push(counter);
  return array;
}
