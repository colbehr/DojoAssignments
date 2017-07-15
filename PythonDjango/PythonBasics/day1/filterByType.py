input = [12]
if type(input) is int or type(input) is float:
    if input >= 100:
        print "That's a big number"
    else:
        print "That's a small number"
elif type(input) is str:
    if len(input) >= 50:
        print "Long sentence."
    else:
        print "Short sentence."
else:
    if len(input) >= 10:
        print "Big List."
    else:
        print "Small List."
