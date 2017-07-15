function personConstructor(name) {
    return {
      name:name,
      distance_traveled: 0,
      say_Name : function () {
           console.log(this.name);
           alert(this.name)
           return this
      },
      say_Something : function (param) {
           console.log(this.name + " says " + param);
           return this
      },
      walk : function () {
           console.log(this.name + " is walking");
           this.distance_traveled += 3
           return this
      },
      run : function () {
           console.log(this.name + " is running");
           this.distance_traveled += 10
           return this
      },
      crawl : function () {
           console.log(this.name + " is crawling");
           this.distance_traveled += 1
           return this
      }}
}


function ninjaConstructor (name, cohort) {
    return {
      name:name,
      cohort: cohort,
      belt: "Yellow Belt",
      levelUp : function () {
           if(this.belt == "Yellow Belt"){
             this.belt = "Red Belt"
           } else if (this.belt == "Red Belt") {
             this.belt = "Black Belt"
           }
           return this
      }
    }
}


//I only read the 'this' part after the fact, you would just put the objects into variables and return those instead
