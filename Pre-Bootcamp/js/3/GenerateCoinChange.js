function GenerateCoinChange(cents) {
    c = cents;
    f = 0;
    h = 0;
    q = 0;
    d = 0;
    n = 0;
    p = 0;
    while (c >= 100) {
        c -= 100;
        f += 1;
    }
    while (c >= 50) {
        c -= 50;
        h += 1;
    }
    while (c >= 25) {
        c -= 25;
        q += 1;
    }
    while (c >= 10) {
        c -= 10;
        d += 1;
    }
    while (c >= 5) {
        c -= 5;
        n += 1;
    }
    while (c >= 1) {
        c -= 1;
        p += 1;
    }
    console.log("F: " + f +  " H: " + h + " Q: " + q + " D: " + d + " N: " + n + " P: " + p);
}
