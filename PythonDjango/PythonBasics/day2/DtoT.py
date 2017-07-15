my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def dTot(dictionary):
    list = []
    for x in dictionary:
        list.append((x, dictionary[x]))
    return list
print str(dTot(my_dict))