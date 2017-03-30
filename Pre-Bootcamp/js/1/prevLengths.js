function prevLengths(arr) {
    for (i = 0; i <= arr.length - 1; i++) {
        if (i > 0) { // error if finding legth that doesnt exist
            arr[i] = arr[i - 1].length;
        }
    }
    return arr;
}
