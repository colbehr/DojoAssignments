def drawStars(list):
    line = ""
    for x in list:
        for i in range(0, x):
            line += "*"
        print line
        line = ""


drawStars([1, 2, 3, 3])


def drawStarsStrings(list):
    line = ""
    for x in list:
        if type(x) is int or type(x) is float:
            for i in range(0, x):
                line += "*"
            print line
            line = ""
        else:
            for i in range(0, int(len(x))):
                line += x[0]
            print line
            line = ""
            

drawStarsStrings([1, 2, 3, "yom", 100, "fdsafasf"])
