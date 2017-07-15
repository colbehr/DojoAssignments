function onlyKeep(arr, num) {
  var tempArray = [];
  tempArray = arr.slice(0);
  arr.length = num;
    for (i = 0; i <= arr.length - 1; i++) {
      arr[i] = tempArray[tempArray.length - num + i];
    }
    return arr;
}
