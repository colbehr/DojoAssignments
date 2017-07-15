function negativeOutlook(arr) {
    var newarray = [];
    for (i = 0; i <= arr.length - 1; i++) {
        newarray[i] = -Math.abs(arr[i]);
    }
    return newarray;
}
