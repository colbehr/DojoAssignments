function ThreesFives () {
  var i = 100;
  var counter = 0;
  while(i <= 4000000){
    var divby5 = false;
    var divby3 = false;
    if(i % 5 == 0){
      divby5 = true;
    }
    if(i % 3 == 0){
      divby3 = true;
    }
    if(divby3 != divby5){
      i+= counter;
    }
    i++;
  }
    console.log(counter);
}

function BetterThreesFives (start, end) {
  var i = start;
  var counter = 0;
  while(i <= end){
    var divby5 = false;
    var divby3 = false;
    if(i % 5 == 0){
      divby5 = true;
    }
    if(i % 3 == 0){
      divby3 = true;
    }
    if(divby3 != divby5){
      counter += i;
    }
    i++;
  }
  console.log(counter);
}
