function extractDigit (num, digitNum) {
  var negative = 1;
  if(num < 0){
    var negative = 2;
  }
  num = Math.abs(num);
  var containsNeg = false
  if ((digitNum+"").includes("-")){
    var containsNeg = true
  }
  if (containsNeg == false){
    return "-" + (num+"".split(""))[digitNum-negative];
  } else if (containsNeg == true){
    var tenths = (num+"").split(".")[1];
    return "-" + (tenths + "")[Math.abs(digitNum)-1];
  }
}
