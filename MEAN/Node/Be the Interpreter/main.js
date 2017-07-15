

var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
// //output
// underfined
// Yipee I was first!


var food = "Chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
eat();
console.log(food);
// //output
// half-chicken
// gone
// Chicken


var new_word = "NEW!";
function lastFunc() {
  var new_word;
  new_word = "old";
}
console.log(new_word);

// //output
// New!





//git fix
