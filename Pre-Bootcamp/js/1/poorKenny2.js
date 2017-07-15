function whatReallyHappensToday() {
    var random = Math.random();
    if (random < .1) {
        console.log("volcano");
    }
    var random = Math.random();
    if (random > .1 && random < .25) {
        console.log("tsunami");
    }
    var random = Math.random();
    if (random > .25 && random < .45) {
        console.log("earthquake");
    }
    var random = Math.random();
    if (random > .45 && random < .70) {
        console.log("blizzard");
    }
    var random = Math.random();
    if (random > .70 && random < 1) {
        console.log("meteor strike");
    }
}
