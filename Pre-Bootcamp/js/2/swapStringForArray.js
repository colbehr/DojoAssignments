function swapString(array) {
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] < 0) {
            array[i] = 'Dojo';
        }
    }
    return array;
}
