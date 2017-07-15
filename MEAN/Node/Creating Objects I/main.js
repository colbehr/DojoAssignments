function VehicleConstructor(name, wheelNum, passengers) {
    return {
      name:name,
      wheelNum: wheelNum,
      passengers: passengers,
      makeNoise : function () {
           console.log("Noise");
           return this
      },
    }
}

var bike = VehicleConstructor("Bike",2,1)
bike.makeNoise = function () {
     console.log("Ring Ring");
     return this
}

var sedan = VehicleConstructor("sedan",4,5)
sedan.makeNoise = function () {
     console.log("Honk Honk");
     return this
}

var bus = VehicleConstructor("bus",4,30)
bus.addPeople = function(num){
  bus.passengers += num
}
