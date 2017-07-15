function VehicleConstructor(name, wheelNum, passengers, speed) {
      this.name = name;
      this.wheelNum = wheelNum;
      this.speed = speed;
      this.passengers = passengers;
      var distance_traveled = 0;
      function updateDistanceTraveled(){
          distance_traveled += this.speed
      }
      this.makeNoise = function(){
         var noise ="Honk Honk";
         console.log(noise)
      }
      this.move = function(){
        updateDistanceTraveled()
        this.makeNoise()
      }
      this.checkMiles = function(){
        console.log(distance_traveled);
      }
}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log(car.speed);
