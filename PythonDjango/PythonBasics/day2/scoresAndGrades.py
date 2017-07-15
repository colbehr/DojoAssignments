import random

print "scores and grades"

def getGrade(num):
    if num > 90:
        return "A"
    elif num < 89 and num > 80:
        return "B"
    elif num < 79 and num > 70:
        return "C"
    elif num < 69 and num > 60:
        return "D"
    else:
        return "F"
def scoresAndGrades(end):
    for x in range(0,end):
        random_num = random.randint(60,100)
        print "Score: " + str(random_num) + "; Your Grade is " + getGrade(random_num)

scoresAndGrades(20)

print "End of the program. Bye!"