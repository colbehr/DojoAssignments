function ClockHandAngles(seconds) {
    seconds =  Math.round(seconds);
    var weeks = 0;
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var leftOverSeconds = 0;

    while (seconds >= 604800) {
        seconds -= 604800;
        weeks += 1;
    }
    while (seconds >= 86400) {
        seconds -= 86400;
        days += 1;
    }
    while (seconds >= 3600) {
        seconds -= 3600;
        hours += 1;
    }
    while (seconds >= 60) {
        seconds -= 60;
        minutes += 1;
    }
    while (seconds >= 1) {
        seconds -= 60;
        leftOverSeconds += 1;
    }
    var dayAngle = 0.1 * days;
    var hourAngle = 6 * hours;
    var minuteAngle = 6 * minutes;
    var secondAngle = leftOverSeconds * 6;
    console.log("Day Hand: " + Math.round(dayAngle) + "deg.  Hour Hand: " +  Math.round(hourAngle) + "deg. Minute Hand: " +  Math.round(minuteAngle) + "deg.  Second Hand: " +  Math.round(secondAngle));
}
