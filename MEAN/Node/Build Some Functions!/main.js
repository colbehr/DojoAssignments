function runningLogger(){
  console.log("I am running");
}

function multiplyByTen(num){
  return num*10
}
multiplyByTen(5)



function stringReturnOne(){
  return "string1"
}
function stringReturnTwo(){
  return "string2"
}
function caller(arg){
  if(typeof(arg) == "function"){
    arg();
  }
}

function myDoubleConsoleLog(arg1, arg2){
  if(typeof(arg1) == "function" && typeof(arg2) == "function")
    console.log(arg1());
    console.log(arg2());
  }
}

function caller2(arg){
  console.log("Starting");
  setTimeout(function(){
      if(typeof(arg) == "function"){
        arg()
        console.log("ending");
        return "interesting"
      }

  }, 2000);
}
