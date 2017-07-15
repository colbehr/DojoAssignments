function rollOne(){
  return Math.ceil(Math.random()*6);
}

function playFives(num){
  for(i = 0; i <= num; i++){
    var val = rollOne();
    if(val == 5){
      console.log("Thats good luck!");
    }
  }
}

function playStatistics(){
  var min = Number.MAX_SAFE_INTEGER;
  var max = -Number.MAX_SAFE_INTEGER;
  for(i = 0; i <= 8; i++){
    var val = rollOne();
    if(val < min){
      min = val;
    }
    if(max < val){
      max = val;
    }
  }
  console.log("Min: " + min + "\nMax: "+ max);
}


function playStatistics2(){
  var min = Number.MAX_SAFE_INTEGER;
  var max = -Number.MAX_SAFE_INTEGER;
  var sum = 0;
  for(i = 0; i <= 8; i++){
    var val = rollOne();
    if(val < min){
      min = val;
    }
    if(max < val){
      max = val;
    }
    val += sum;
  }
  console.log("Min: " + min + "\nMax: "+ max + "\nSum: " + sum);
}

function playStatistics3(num){
  var min = Number.MAX_SAFE_INTEGER;
  var max = -Number.MAX_SAFE_INTEGER;
  var sum = 0;
  for(i = 0; i <= num; i++){
    var val = rollOne();
    if(val < min){
      min = val;
    }
    if(max < val){
      max = val;
    }
    val += sum;
  }
  console.log("Min: " + min + "\nMax: "+ max + "\nSum: " + sum);
}

function playStatistics4(num){
  var min = Number.MAX_SAFE_INTEGER;
  var max = -Number.MAX_SAFE_INTEGER;
  var sum = 0;
  var count = 0;
  for(i = 0; i <= num; i++){
    var val = rollOne();
    if(val < min){
      min = val;
    }
    if(max < val){
      max = val;
    }
    sum += val;
    count++;
  }
  console.log("Min: " + min + "\nMax: "+ max + "\nAvg: " + (sum/count));
}
