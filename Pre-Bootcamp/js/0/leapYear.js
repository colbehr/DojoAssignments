function leapYear(year){
var leapYear = false;
  if(year % 4 == 0){
    leapYear = true;
  }
  if(!year % 100 != 0){
    leapYear = false;
  }
  if(year % 400 == 0){
    leapYear = true;
  }

  if(leapYear){
      console.log("Leap year!");
  } else {
     console.log("Not a leap year.");
  }
}
