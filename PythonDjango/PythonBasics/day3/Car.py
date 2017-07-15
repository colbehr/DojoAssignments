class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if (price > 10000):
            self.tax = .15
        else:
            self.tax = .12

    def displayAll(self):
        print self.price
        print self.speed
        print self.fuel
        print self.mileage
        print self.tax

car1 = Car(2000,35,"full",15)
print "car1________"
car1.displayAll()
car2 = Car(2000,5,"Not Full",105)
print "car2________"
car2.displayAll()
car3 = Car(2000,15,"Kinda",95)
print "car3________"
car3.displayAll()
car1 = Car(2000,25,"full",25)
print "car4________"
car1.displayAll()
car1 = Car(2000,45,"Empty",25)
print "car5________"
car1.displayAll()
car1 = Car(20000000,35,"Empty",15)
print "car6________"
car1.displayAll()
