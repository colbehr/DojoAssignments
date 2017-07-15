function sum(x,y){
  var sum = 0
  for(var i = x; i < y; i++){
    sum += i
  }
}
console.log(sum)

function min(arr){
  var avg = 0;
  for(item in arr){
    if(arr[item] < min){
      min = arr[item]
    }
  }
  return min
}

function avg(arr){
  var avg = 0;
  for(item in arr){
    avg += arr[item]
  }
  return avg/arr.length
}


var sum = function (x,y){
  var sum = 0
  for(var i = x; i < y; i++){
    sum += i
  }
}
var min = function(arr){
  var avg = 0;
  for(item in arr){
    if(arr[item] < min){
      min = arr[item]
    }
  }
  return min
}

var avg = function (arr){
  var avg = 0;
  for(item in arr){
    avg += arr[item]
  }
  return avg/arr.length
}

var person = {
  name: "Colby",
  distance_traveled: 0,
  say_Name : function () {
       console.log(person.name);
       return person
  },
  say_Something : function (param) {
       console.log(person.name + "says" + param);
       return person
  },
  walk : function () {
       console.log(person.name + "is walking");
       person.distance_traveled += 3
       return person
  },
  run : function () {
       console.log(person.name + "is running");
       person.distance_traveled += 10
       return person
  },
  crawl : function () {
       console.log(person.name + "is crawling");
       person.distance_traveled += 1
       return person
  }
}

//return person to chain function calls
