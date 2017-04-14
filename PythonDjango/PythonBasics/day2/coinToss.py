import random


def coinToss(num):
    print "Starting the program..."
    headCount = 0
    tailCount = 0
    for x in range(0, num):
        toss = random.random()
        if round(toss) > 0:
            headCount += 1
            print "Attempt #" + str(x+1) + " Throwing a coin... It's a Head! ... Got " + str(
                headCount) + " head(s) so far and " + str(tailCount) + " tail(s) so far"
        else:
            tailCount += 1
            print "Attempt #" + str(x+1) + " Throwing a coin... It's a Tail! ... Got " + str(
                headCount) + " head(s) so far and " + str(tailCount) + " tail(s) so far"
    print "Ending the program, thank you!";
coinToss(4)
