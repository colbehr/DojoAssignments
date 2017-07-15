function grade(num) {
    if (num >= 94) {
        console.log("Score:" + num + " Grade: a+");
    } else if (num <= 93 && num >= 90) {
        console.log("Score:" + num + " Grade: a-");
    } else if (num <= 89 && num >= 86) {
        console.log("Score:" + num + " Grade: b+");
    } else if (num <= 85 && num >= 83) {
        console.log("Score:" + num + " Grade: b");
    } else if (num <= 82 && num >= 80) {
        console.log("Score:" + num + " Grade: b-");
    } else if (num <= 79 && num >= 76) {
        console.log("Score:" + num + " Grade: c+");
    } else if (num <= 75 && num >= 73) {
        console.log("Score:" + num + " Grade: c");
    } else if (num <= 72 && num >= 70) {
        console.log("Score:" + num + " Grade: c-");
    } else if (num <= 69 && num >= 66) {
        console.log("Score:" + num + " Grade: d+");
    } else if (num <= 65 && num >= 63) {
        console.log("Score:" + num + " Grade: d");
    } else if (num <= 62 && num >= 60) {
        console.log("Score:" + num + " Grade: d-");
    } else if (num < 60) {
        console.log("Score:" + num + " Grade: f");
    }
}
