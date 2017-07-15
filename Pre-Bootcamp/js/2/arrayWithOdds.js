function arrayWithOdds() {
  var array = [];
    for (i = 1; i <= 255; i++) {
        if (i % 2 != 0) {
            array.push(i);
        }
    }
    return array;
}
