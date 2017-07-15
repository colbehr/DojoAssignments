var _ = {
   map: function(arr, func) {
     var arr2 = []
     for (var i = 0; i < arr.length; i++) {
       arr2.push(func(arr[i]))
     }
     return arr2
   },
   find: function(arr, func) {
     for (var i = 0; i < arr.length; i++) {
        if(func(arr[i])){
          return arr[i]
        }
      }
      return undefined
   }
   ,
   filter: function(arr, func) {
     var arr2= []
     for (var i = 0; i < arr.length; i++) {
        if(func(arr[i])){
          arr2.push(arr[i])
        }
      }
      return arr2 || undefined
   },
   reject: function(arr, func) {
     var arr2= []
     for (var i = 0; i < arr.length; i++) {
        if(!func(arr[i])){
          arr2.push(arr[i])
        }
      }
      return arr2 || undefined
   }
 }

console.log(_.map([1, 2, 3], function(num){ return num * 3; }))
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
