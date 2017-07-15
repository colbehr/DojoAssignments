function Factorial (num) {
  var i = 1;
  var factorial = 1;
  while(i <= num){
    factorial = factorial * i;
      i++;
  }
  return factorial;
}
