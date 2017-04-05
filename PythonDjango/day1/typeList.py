input = ['magical unicorns', 19, 'hello', 98.98, 'world']
strConcat = "String: "
sum = 0
multitype = 0;
for x in input:
    if type(x) is str:
        multitype += 1
        strConcat += x
    elif type(x) is int or type(x) is float:
        multitype += 1
        sum += x
if multitype > 1:
    print "The array you entered is of mixed type"
else:
    print "The array you entered is not mixed type"
print strConcat
print "Sum: " + str(sum)
