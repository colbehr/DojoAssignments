function drawLeftChars(num, char) {
  var i = 0;
  var string= "";
  while(i < num){
    string += char;
    i++;
  }
  while (i < 75){
    string += " ";
    i++;
  }
  return string;
}
function drawRightChars(num, char) {
  var i = 0;
  var string= "";
  var spaces = 75-num;
  while (i < spaces){
    string += " ";
    i++;
  }
  while(i < 75){
    string += char;
    i++;
  }

  return string;
}

function drawCenterChar(num, char) {
  var i = 0;
  var string= "";
  var spaces = 75-num;
  while (i < spaces/2){
    string += " ";
    i++;
  }
  while(i < (spaces/2 + num)){
    string += char;
    i++;
  }
  while (i < 75){
    string += " ";
    i++;
  }
  return string;
}
