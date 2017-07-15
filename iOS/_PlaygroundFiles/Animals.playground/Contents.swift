class Animal {
    var name: String
    var health: Int = 100
    init(myName: String){
        self.name = myName
    }
    func displayHealth(){
        print("Health:  \(self.health)")
    }
}

class Cat: Animal{

    func growl(){
        print("Rawr!")
    }
    func run (){
        print("Running")
        self.health -= 10
    }
    override init(myName: String){
        super.init(myName: myName)
        super.health = 150
    }
}
class Lion: Cat {
    override func growl(){
        print("ROAR!!!! I am the King of the Jungle!")
    }
    
    override init(myName: String){
        super.init(myName: myName)
        super.health = 200
    }
}
class Cheetah: Cat {
    override func run(){
        if(self.health > 51){
            print("Running Fast")
            self.health -= 50
        } else {
            print("Can't Run")
        }
    }
    func sleep(){
        print("sleeping")
        self.health += 50
        if(self.health > 200){
            self.health = 200
        }
        
    }
    override init(myName: String){
        super.init(myName: myName)
        super.health = 200
    }
}

var cheetah: Cheetah = Cheetah(myName: "Name1")
cheetah.run()
cheetah.run()
cheetah.run()
cheetah.run()
cheetah.displayHealth()

var lion: Lion = Lion(myName: "Name2")
lion.run()
lion.run()
lion.run()
lion.growl()
