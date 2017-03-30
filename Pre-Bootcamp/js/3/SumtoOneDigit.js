function sumtoOne(num) {
    var array = (num + "").split("");
    var sum = 0;
    while (array.length > 1) {
        for (i = 0; i <= array.length - 1; i++) {
            sum += parseInt(array[i]);
        }
        array = (sum + "").split("");
    }
    return parseInt(array[0]);
}
