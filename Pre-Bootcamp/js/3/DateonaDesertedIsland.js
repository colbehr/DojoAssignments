function weekdayName(weekdayNum) {
    switch (weekdayNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Not a Number");
            break;
    }
}



function weekdayName2(weekdayNum) {
    weekdayNum = weekdayNum % 7;
    switch (weekdayNum) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
        case 0:
            return "Saturday";
        default:
            return "Not a Number";
    }
}

function someDays() {
    for (i = 0; i <= 17; i++) {
        var rand = Math.floor(Math.random * 365);
        weekdayName2(rand);
        if (rand == 2 || rand == 3 || rand == 4 || rand == 5 || rand == 6) {
            console.log("Work hard!");
        } else {
            console.log("Enjoy your day off!");
        }
    }
}

function monthName(monthNum) {
    array = ["January", "February ", "March ", "April ", "May", "June", "July", "August", "September", "October", "November", "December"];
    switch (monthNum) {
        case 1:
            return array[0];
        case 2:
            return array[1];
        case 3:
            return array[2];
        case 4:
            return array[3];
        case 5:
            return array[4];
        case 6:
            return array[5];
        case 7:
            return array[6];
        case 8:
            return array[7];
        case 9:
            return array[8];
        case 10:
            return array[9];
        case 11:
            return array[10];
        case 12:
        case 0:
            return array[11];
        default:
            return "Not a Number";

    }
}

function monthNameDays(monthNum) {
    array = ["31", "28 ", "31 ", "30 ", "31", "30", "31", "31", "30", "31", "30", "31"];
    switch (monthNum) {
        case 1:
            return array[0];
        case 2:
            return array[1];
        case 3:
            return array[2];
        case 4:
            return array[3];
        case 5:
            return array[4];
        case 6:
            return array[5];
        case 7:
            return array[6];
        case 8:
            return array[7];
        case 9:
            return array[8];
        case 10:
            return array[9];
        case 11:
            return array[10];
        case 12:
        case 0:
            return array[11];
        default:
            return "Not a Number";
    }
}


function dayToMonth(dayName) {
    if (dayName >= 0 && dayName <= 31) {
        return monthName(1)
    } else if ((dayName >= 31 && dayName <= 59)) {
        return monthName(2)
    } else if ((dayName >= 59 && dayName <= 90)) {
        return monthName(3)
    } else if ((dayName >= 90 && dayName <= 120)) {
        return monthName(4)
    } else if ((dayName >= 120 && dayName <= 151)) {
        return monthName(5)
    } else if ((dayName >= 151 && dayName <= 181)) {
        return monthName(6)
    } else if ((dayName >= 181 && dayName <= 213)) {
        return monthName(7)
    } else if ((dayName >= 213 && dayName <= 244)) {
        return monthName(8)
    } else if ((dayName >= 244 && dayName <= 274)) {
        return monthName(9)
    } else if ((dayName >= 274 && dayName <= 305)) {
        return monthName(10)
    } else if ((dayName >= 305 && dayName <= 335)) {
        return monthName(11)
    } else if ((dayName >= 335 && dayName <= 365)) {
        return monthName(12)
    }

}


function dayToMonth2(dayName) {
    if (dayName >= 0 && dayName <= 31) {
        return dayName;
    } else if ((dayName >= 31 && dayName <= 59)) {
        return dayName - 31;
    } else if ((dayName >= 59 && dayName <= 90)) {
        return dayName - 59;
    } else if ((dayName >= 90 && dayName <= 120)) {
        return dayName - 90;
    } else if ((dayName >= 120 && dayName <= 151)) {
        return dayName - 120;
    } else if ((dayName >= 151 && dayName <= 181)) {
        return dayName - 151;
    } else if ((dayName >= 181 && dayName <= 213)) {
        return dayName - 181;
    } else if ((dayName >= 213 && dayName <= 244)) {
        return dayName - 213;
    } else if ((dayName >= 244 && dayName <= 274)) {
        return dayName - 244;
    } else if ((dayName >= 274 && dayName <= 305)) {
        return dayName - 274;
    } else if ((dayName >= 305 && dayName <= 335)) {
        return dayName - 305;
    } else if ((dayName >= 335 && dayName <= 365)) {
        return dayName - 335;
    }

}

function fullDate(dayNum) {
    return weekdayName2(dayNum) + ", " + dayToMonth(dayNum) + " " + dayToMonth2(dayNum) + ", 2017"
}

function fullDate2(dayNum) {
  var daynumTemp = dayNum;
  var years = 1;
    while (daynumTemp >= 365) {
        daynumTemp -= 365;
        years += 1;
    }
    return weekdayName2(dayNum) + ", " + dayToMonth(daynumTemp) + " " + dayToMonth2(daynumTemp) + ", " + (2016 + years)
}
function fullDate3(dayNum) {
  return fullDate2(dayNum)
}
