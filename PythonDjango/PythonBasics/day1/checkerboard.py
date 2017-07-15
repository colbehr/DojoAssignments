line = ""
for x in range(1, 9):
    if x % 2 == 0:
        line += " "
    for y in range(1, 9):
        if y % 2 == 0:
            line += " "
        else:
            line += "*"
    print line
    line = ""