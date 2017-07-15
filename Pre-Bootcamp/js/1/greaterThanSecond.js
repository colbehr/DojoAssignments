
function greater(){
  var array = [1,3,5,7,9,13];

  var counter = 0;
  for (i = 0; i <= array.length; i++){
    if(array[i] > array[1]){
      counter++;
      console.log(array[i]);
    }
  }
  return(counter);
}
