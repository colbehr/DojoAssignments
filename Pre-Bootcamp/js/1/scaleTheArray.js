function scaleTheArray(arr, num) {
    for (i = 0; i <= arr.length - 1; i++) {
      arr[i] = arr[i] * num;
    }
    return arr;
}
