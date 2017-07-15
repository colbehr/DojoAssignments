function StatisticsUntilDoubles() {
    var running = true;
    var numOfRolls = 0;
    var lastNum = 0;
    var total = 0;
    var min = 20;
    var max = 0;
    while (running) {
        var roll = Math.floor(Math.random() * 20);
        if (roll != lastNum) {
            lastNum = roll;
        } else {
            running = false;
        }
        if (roll < min) {
            min = roll
        }

        if (roll > max) {
            max = roll
        }
        total += roll;
        numOfRolls++;
    }
    console.log("Min; " + min + " Max; " + max + " numOfRolls; " + numOfRolls + " avg; " + total / numOfRolls)
}
