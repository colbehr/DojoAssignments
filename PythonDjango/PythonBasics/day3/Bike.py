class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "reversing"
        self.miles -= 5
        return self

bike1 = Bike(100, 50, 0)
bike1.ride().ride().ride()
bike1.displayInfo()
bike2 = Bike(101, 50, 0)
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()
bike3 = Bike(102, 50, 0)
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()
