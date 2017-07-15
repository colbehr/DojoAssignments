var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for(item in x){
  console.log(x[item])
}
x.push(100)
x.push( ["hello", "world", "JavaScript is Fun"] )
console.log(x)
var sum = 0
for(var i = 0; i <= 500; i++){
  sum += i
}
console.log(sum)
var y =  [1, 5, 90, 25, -3, 0]
var sum = 0
var min = 100
for(item in y){
  if(y[item]< min){
    min = y[item]
  }
  sum+=y[item]
}
console.log(min)
console.log(sum/y.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for( item in newNinja){
  console.log(item + " : " + newNinja[item]);
}
