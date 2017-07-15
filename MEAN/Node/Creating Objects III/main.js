function VehicleConstructor(name, wheelNum, passengers, speed) {
      this.name = name;
      this.wheelNum = wheelNum;
      this.speed = speed;
      this.passengers = passengers;
      this.vin = Math.floor(Math.random() * (999999999))
      this.distance_traveled = 0;
      this.updateDistanceTraveled= function(){
          this.distance_traveled += this.speed
      }

}
VehicleConstructor.prototype.makeNoise = function(){
   var noise ="Honk Honk";
   console.log(noise)
   return this
}
VehicleConstructor.prototype.move = function(){
  this.updateDistanceTraveled()
  this.makeNoise()
  return this
}
VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_traveled);
  return this
}
var car = new VehicleConstructor('car', 4, 2, 40);
console.log(car);
car.move();
car.checkMiles();
console.log(car.speed);
