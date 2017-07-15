class Mathdojo(object):
    def __init__(self):
        self.result = 0

    def add(self, addVal, addVal2=0):
        self.result += (addVal + addVal2)
        return self

    def subtract(self, subVal, subVal2=0):
        self.result -= (subVal + subVal2)
        return self


md = Mathdojo()
print md.add(2).add(2, 5).subtract(3, 2).result


class Mathdojo2(object):
    def __init__(self):
        self.result = 0

    def add(self, addVal, addVal2, addVal3):
        def evalList(list):
            sum = 0
            for x in list:
                sum += x
            return sum
        if (type(addVal) == list):
            addVal = evalList(addVal)
        if (type(addVal2) == list):
            addVal2 = evalList(addVal2)
        if (type(addVal3) == list):
            addVal3 = evalList(addVal3)
        self.result += (addVal + addVal2 + addVal3)
        return self

    def subtract(self, subVal, subVal2, subVal3):
        def evalList(list):
            sum = 0
            for x in list:
                sum += x
            return sum

        if (type(subVal) == list):
            subVal = evalList(subVal)
        if (type(subVal2) == list):
            subVal2 = evalList(subVal2)
        if (type(subVal3) == list):
            subVal3 = evalList(subVal3)
        self.result -= (subVal + subVal2 + subVal3)
        return self

md = Mathdojo2()
print md.add([1], 3, 4).add([3, 5, 7, 8], [2, 4.3, 1.25], 0).subtract(2, [2, 3], [1.1, 2.3]).result
