function game() {
    var name = prompt("What is your name?");
    var running = true;
    var correct = 0;
    var notCorrect = 0;
    var counter = 0;
    var questions = ["What is 10 + 2", "What is 90 - 39", "How many questions have you been asked?"];
    var answers = ["12", "51", "2"];
    while (running && counter < questions.length) {
        answer = prompt("Okay, " + name + ", \n" + questions[counter] + "\n type q to quit");
        if (answer == "q") {
            console.log("Play again soon!");
            total = notCorrect + correct;
            console.log("Stats: \nCorrect: " + correct + "\nNot Correct: " + notCorrect + "\nTotal: " + total);
            running = false;
        } else if (answer == answers[counter]) {
            correct++;
            console.log("Nice One! Another!");
        } else {
            notCorrect++;
            console.log("Sorry, that doesnt look right.");
        }
        counter++;
    }
    if (answer != "q") {
        console.log("That is the end.");
        total = notCorrect + correct;
        console.log( name + "'s Stats: \nCorrect: " + correct + "\nNot Correct: " + notCorrect + "\nTotal: " + total);
    }
}
