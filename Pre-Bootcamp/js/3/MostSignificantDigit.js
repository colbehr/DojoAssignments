function MostSignificantDigit (num) {
  var array = (num+"").split("");
  for (var i = 0; i <= array.length - 1; i++) {
      if(array[i] != "0" && array[i] != "." && array[i] != 0 ){
        return array[i]
      }
  }
}
