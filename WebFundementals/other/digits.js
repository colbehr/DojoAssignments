
function digits(str){
  newstr="";
  for (var i = 0; i < str.length; i++){
  if(!isNaN(parseInt(str[i]))){
    newstr += str[i];
  }
}
return newstr;
}
