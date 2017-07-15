function whatHappensToday() {
    var random = Math.random();
    if (random < .1) {
        console.log("volcano");
    } else if (random > .1 && random < .25) {
        console.log("tsunami");
    } else if (random > .25 && random < .45) {
        console.log("earthquake");
    } else if (random > .45 && random < .70) {
        console.log("blizzard");
    } else if (random > .70 && random < 1) {
        console.log("meteor strike");
    }
}
