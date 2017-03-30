function MessyMath (num) {
  var counter = 0;
  for(i = 0; i <= num; i++){
    if(num/3 % i == 0){
      counter = -1;
      break;
    }  else if(i % 3 == 0){
      continue;
    } else if(i % 7 == 0){
      counter += i*2;
    } else {
    counter += i;
    }
  }
  return counter;
}
