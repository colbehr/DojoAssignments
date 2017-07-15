function alwaysHungry(arr) {
  var nofood = true;
    for (i = 0; i <= arr.length - 1; i++) {
        if(arr[i] == "food"){
          console.log("yummy");
          nofood = false;
        }
    }
    if (nofood){
          console.log("I'm hungry");
    }
}
