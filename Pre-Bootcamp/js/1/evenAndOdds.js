function evenAndOdds(array){
  var oddcounter= 0;
  var evencounter= 0;
  for (i = 0; i <= array.length-1; i++){
    if(array[i] %2 != 0){
      oddcounter ++;
    }
    if(array[i] %2 == 0){
      evencounter ++;
    }
    if(evencounter >= 3){
    console.log("Even more so!");
    evencounter = 0;
    }
    if(oddcounter >= 3){
    console.log("That’s odd!");
    oddcounter = 0;
    }
  }
}
