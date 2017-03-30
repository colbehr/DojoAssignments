function drawLeftStars(num) {
  var i = 0;
  var string= "";
  while(i < num){
    string += "*";
    i++;
  }
  while (i < 75){
    string += " ";
    i++;
  }
  return string;
}
function drawRightStars(num) {
  var i = 0;
  var string= "";
  var spaces = 75-num;
  while (i < spaces){
    string += " ";
    i++;
  }
  while(i < 75){
    string += "*";
    i++;
  }

  return string;
}

function drawCenterStars(num) {
  var i = 0;
  var string= "";
  var spaces = 75-num;
  while (i < spaces/2){
    string += " ";
    i++;
  }
  while(i < (spaces/2 + num)){
    string += "*";
    i++;
  }
  while (i < 75){
    string += " ";
    i++;
  }
  return string;
}
