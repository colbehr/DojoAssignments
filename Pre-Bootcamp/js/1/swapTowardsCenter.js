function swapTowardsCenter(arr) {
    var newarray = arr;
    var temp;
    for (i = 0; i <= arr.length/2 - 1; i++) {
        temp = newarray[i];
        newarray[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    arr = newarray;
    return arr;
}
