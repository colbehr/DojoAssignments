def readingD(dict):
    print "My name is " + dict["name"]
    print "My age is " + str(dict["age"])
    print "My country of birth is " + dict["place"]
    print "My favorite language is " + dict["lang"]


dict = {"name": "Anna", "age": 101, "place": "The United States", "lang": "python"}
readingD(dict)
