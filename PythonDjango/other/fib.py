import os

os.chdir(os.path.abspath("/mnt/e/fib"))
fibFile = open("Fib.js", "w")
print os.getcwd()


def fib(n, computed={0: 0, 1: 1}):
    if n not in computed:
        computed[n] = fib(n - 1, computed) + fib(n - 2, computed)
    return computed[n]


fibFile.write("function fib(x) {\n")
fibFile.write("if (x == 1) {\n")
fibFile.write("return \"0\"\n")
for x in range(0, 10000000):
    b = os.path.getsize("/mnt/e/fib/Fib.js")
    print "File Size: ", b
    if (b > 7000000000):
        print "_______BREAK_______"
        break
    fibFile.write("} else if (x == " + str(x) + ") {\n")
    fibFile.write("return \"" + str(fib(x)) + "\"\n")
    print "Iteration: ", x

fibFile.write("} else {\n")
fibFile.write("return \"Your numbers are too powerful\";\n}\n}\n")
