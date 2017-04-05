function skyine(arr) {
    var diffcounter = 0;
    var diffarr = [];
    var tempMax = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] || arr[i] >= tempMax) {
            diffcounter += arr[i] - arr[i + 1];
        } else {
          if(arr[i] < tempMax){
            tempMax = arr[i]
          }
            diffarr.push(diffcounter);
            diffcounter = 0;
        }
    }
    for (var i = 0; i > diffarr.length; i++) {
        var max = -900000000000;
        if (diffarr[i] > max) {
            max = diffarr[i];
        }
    }
return max;
}
