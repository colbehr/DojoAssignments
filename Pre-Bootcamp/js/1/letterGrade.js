function grade(num){
  if (num > 89) {
      console.log( "Score:" + num + " Grade: a");
  } else if (num < 89 && num >= 80) {
      console.log( "Score:" + num + " Grade: b");
  } else if (num < 80 && num >= 70) {
      console.log( "Score:" + num + " Grade: c");
  } else if (num < 70 && num >= 60) {
      console.log( "Score:" + num + " Grade: d");
  } else if (num < 60 ) {
      console.log( "Score:" + num + " Grade: f");
  }
}
