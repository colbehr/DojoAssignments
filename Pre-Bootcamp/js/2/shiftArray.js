function shiftArray(array) {
    for (i = 0; i <= array.length-2; i++) {
        array[i] = array[i+1];
    }
    array[array.length-1] = 0;
    return array;
}
