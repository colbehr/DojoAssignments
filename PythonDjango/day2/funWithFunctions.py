def odd_Even():
    for x in range(1, 2001):
        if x % 2 == 0:
            print "Number is " + str(x) + ".  This is an even number."
        else:
            print "Number is " + str(x) + ".  This is an odd number."

odd_Even()
a = [2, 4, 6, 8, 10]

def multiply(arr):
    newarr = []
    for x in arr:
        newarr.append(x * 2)
    return newarr

print multiply([1, 2, 3, 5])

def hacker(arr, num):
    newarr = []
    for x in range(1, len(arr) + 1):
        newarr.append(returnarr1(x * num))
    return newarr

def returnarr1(num):
    arr = []
    for x in range(0, num):
        arr.append(1)
    return arr

print hacker([1, 2, 3, 4], 2)
