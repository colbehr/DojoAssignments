class call(object):
    def __init__(self, name, id, number, time, reason):
        self.name = name
        self.id = id
        self.number = number
        self.time = time
        self.reason = reason

    def printAll(self):
        print self.name, self.id, self.number, self.time, self.reason


call1 = call("Tom", 12, 1111111111, "12:21", "help")
call2 = call("Tom2", 13, 2222222222, "12:22", "help")
call3 = call("Tom3", 14, 3333333333, "12:23", "help")

call1.printAll()
call2.printAll()
call3.printAll()


class callCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queue = len(calls)

    def newCall(self, newCall):
        self.calls.append(newCall)
        return self

    def removeCall(self):
        self.calls.pop(0)
        return self

    def printThings(self):
        for x in range(0, self.queue):
            print self.calls[x].name
            print self.calls[x].number
        print "Length", self.queue
        return self


callcenter = callCenter([call1, call2, call3])
call4 = call("Tom4", 15, 4444444, "12:25", "help")
callcenter.removeCall().newCall(call4).printThings()
