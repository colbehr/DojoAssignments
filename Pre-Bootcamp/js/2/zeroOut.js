function zeroOut(array) {
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}
