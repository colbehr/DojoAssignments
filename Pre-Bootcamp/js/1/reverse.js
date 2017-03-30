function reverse(arr) {
    var newarray = [];
    for (i = 0; i <= arr.length - 1; i++) {
        newarray[i] = arr[arr.length-i-1];
    }
    arr = newarray;
    return arr;
}
