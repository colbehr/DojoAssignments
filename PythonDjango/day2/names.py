students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def readStudents(stu):
    for x in stu:
        print x["first_name"] + " " + x["last_name"]


readStudents(students)

users = {
    'Students': [
        {'first_name': 'Michael', 'last_name': 'Jordan'},
        {'first_name': 'John', 'last_name': 'Rosales'},
        {'first_name': 'Mark', 'last_name': 'Guillen'},
        {'first_name': 'KB', 'last_name': 'Tonel'}
    ],
    'Instructors': [
        {'first_name': 'Michael', 'last_name': 'Choi'},
        {'first_name': 'Martin', 'last_name': 'Puryear'}
    ]
}
print ""


def readStudents2(user):
    i = 0
    print "Students"
    for x in user["Students"]:
        i += 1
        print str(i) + " - " + x["first_name"] + " " + x["last_name"] + " - " + str(
            len(x["first_name"]) + len(x["last_name"]))
    i = 0
    print "Instructors"
    for x in user["Instructors"]:
        i += 1
        print str(i) + " - " + x["first_name"] + " " + x["last_name"] + " - " + str(
            len(x["first_name"]) + len(x["last_name"]))


readStudents2(users)
