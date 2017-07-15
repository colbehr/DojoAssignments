function addSeventoMost(arr) {
  var newarray = [];
    for (i = 0; i <= arr.length - 1; i++) {
            newarray[i - 1] = arr[i] + 7;
    }
    return newarray;
}
