class Product(object):
    def __init__(self, price, itemName, Weight, Brand, Cost, Status):
        self.price = price
        self.itemName = itemName
        self.Weight = Weight
        self.Brand = Brand
        self.Cost = Cost  # dupe?
        self.Status = Status

    def displayInfo(self):
        print self.price
        print self.itemName
        print self.Weight
        print self.Brand
        print self.Cost
        print self.Status
        return self

    def Sell(self):
        self.Status = "Sold"
        return self

    def AddTax(self, tax):
        print self.price + tax
        return self

    def Return(self, reason):
        if (reason == "defective"):
            self.Status = "defective"
            self.price = 0
        elif (reason == "like new"):
            self.Status = "for Sale"
        elif (reason == "opened"):
            self.Status = "Discount"
            self.price = self.price - (self.price / 5)
        return self


product = Product(100, "Cheese", 10, "CheeseCO", 100, "for Sale")
product.AddTax(2).Sell().displayInfo()
