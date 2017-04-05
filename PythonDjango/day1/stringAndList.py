str = "It's thanksgiving day. It's my birthday too!"
str2 = str.replace("day", "month")
print str2
xList = [2, 54, -2, 7, 12, 98]
xmin = 1000000
xmax = -10000000
for x in xList:
    if x > xmax:
        xmax = x
    if x < xmin:
        xmin = x
print xmin
print xmax
xFirstLast = ["hello", 2, 54, -2, 7, 12, 98, "world"]
newArr = [xFirstLast[0], xFirstLast[len(xFirstLast) - 1]]
print newArr
xNewList = [19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]
xNewList.sort()
xNewList2 = xNewList[:len(xNewList) / 2]
xNewList = xNewList[(len(xNewList)-2)/2:]
xNewList[0] = xNewList2
print xNewList
