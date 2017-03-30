function fib(x) {
    if (x == 1) {
        return 0
    } else if (x == 2) {
        return 1
    } else if (x == 3) {
        return 1
    } else if (x == 4) {
        return 2
    } else if (x == 5) {
        return 3
    } else if (x == 6) {
        return 5
    } else if (x == 7) {
        return 8
    } else if (x == 8) {
        return 13
    } else if (x == 9) {
        return 21
    } else if (x == 10) {
        return 34
    } else if (x == 11) {
        return 55
    } else if (x == 12) {
        return 89
    } else if (x == 13) {
        return 144
    } else if (x == 14) {
        return 233
    } else if (x == 15) {
        return 377
    } else if (x == 16) {
        return 610
    } else if (x == 17) {
        return 987
    } else if (x == 18) {
        return 1597
    } else if (x == 19) {
        return 2584
    } else if (x == 20) {
        return 4181
    } else if (x == 21) {
        return 6765
    } else if (x == 22) {
        return 10946
    } else if (x == 23) {
        return 17711
    } else if (x == 24) {
        return 28657
    } else if (x == 25) {
        return 46368
    } else if (x == 26) {
        return 75025
    } else if (x == 27) {
        return 121393
    } else if (x == 28) {
        return 196418
    } else if (x == 29) {
        return 317811
    } else if (x == 30) {
        return 514229
    } else if (x == 31) {
        return 832040
    } else if (x == 32) {
        return 1346269
    } else if (x == 33) {
        return 2178309
    } else if (x == 34) {
        return 3524578
    } else if (x == 35) {
        return 5702887
    } else if (x == 36) {
        return 9227465
    } else if (x == 37) {
        return 14930352
    } else if (x == 38) {
        return 24157817
    } else if (x == 39) {
        return 39088169
    } else if (x == 40) {
        return 63245986
    } else if (x == 41) {
        return 102334155
    } else if (x == 42) {
        return 165580141
    } else if (x == 43) {
        return 267914296
    } else if (x == 44) {
        return 433494437
    } else if (x == 45) {
        return 701408733
    } else if (x == 46) {
        return 1134903170
    } else if (x == 47) {
        return 1836311903
    } else if (x == 48) {
        return 2971215073
    } else if (x == 49) {
        return 4807526976
    } else if (x == 50) {
        return 7778742049
    } else if (x == 51) {
        return 12586269025
    } else if (x == 52) {
        return 20365011074
    } else if (x == 53) {
        return 32951280099
    } else if (x == 54) {
        return 53316291173
    } else if (x == 55) {
        return 86267571272
    } else if (x == 56) {
        return 139583862445
    } else if (x == 57) {
        return 225851433717
    } else if (x == 58) {
        return 365435296162
    } else if (x == 59) {
        return 591286729879
    } else if (x == 60) {
        return 956722026041
    } else if (x == 61) {
        return 1548008755920
    } else if (x == 62) {
        return 2504730781961
    } else if (x == 63) {
        return 4052739537881
    } else if (x == 64) {
        return 6557470319842
    } else if (x == 65) {
        return 10610209857723
    } else if (x == 66) {
        return 17167680177565
    } else if (x == 67) {
        return 27777890035288
    } else if (x == 68) {
        return 44945570212853
    } else if (x == 69) {
        return 72723460248141
    } else if (x == 70) {
        return 117669030460994
    } else if (x == 71) {
        return 190392490709135
    } else if (x == 72) {
        return 308061521170129
    } else if (x == 73) {
        return 498454011879264
    } else if (x == 74) {
        return 806515533049393
    } else if (x == 75) {
        return 1304969544928657
    } else if (x == 76) {
        return 2111485077978050
    } else if (x == 77) {
        return 3416454622906707
    } else if (x == 78) {
        return 5527939700884757
    } else if (x == 79) {
        return 8944394323791464
    } else if (x == 80) {
        return 14472334024676220
    } else if (x == 81) {
        return 23416728348467684
    } else if (x == 82) {
        return 37889062373143900
    } else if (x == 83) {
        return 61305790721611590
    } else if (x == 84) {
        return 99194853094755500
    } else if (x == 85) {
        return 160500643816367100
    } else if (x == 86) {
        return 259695496911122600
    } else if (x == 87) {
        return 420196140727489660
    } else if (x == 88) {
        return 679891637638612200
    } else if (x == 89) {
        return 1100087778366101900
    } else if (x == 90) {
        return 1779979416004714200
    } else if (x == 91) {
        return 2880067194370816000
    } else if (x == 92) {
        return 4660046610375530000
    } else if (x == 93) {
        return 7540113804746346000
    } else if (x == 94) {
        return 12200160415121877000
    } else if (x == 95) {
        return 19740274219868220000
    } else if (x == 96) {
        return 31940434634990100000
    } else if (x == 97) {
        return 51680708854858330000
    } else if (x == 98) {
        return 83621143489848430000
    } else if (x == 99) {
        return 135301852344706740000
    } else if (x == 100) {
        return 218922995834555170000
    } else {
        return "Your numbers are too powerful";
    }
}



function fibGen() {
    var arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135, 308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464, 14472334024676221, 23416728348467685, 37889062373143906, 61305790721611591, 99194853094755497, 160500643816367088, 259695496911122585, 420196140727489673, 679891637638612258, 1100087778366101931, 1779979416004714189, 2880067194370816120, 4660046610375530309, 7540113804746346429, 12200160415121876738, 19740274219868223167, 31940434634990099905, 51680708854858323072, 83621143489848422977, 135301852344706746049, 218922995834555169026];
    i = 0;
    while (i < arr.length) {
        var fib = fib + "else if (x == " + (i + 1) + "){return " + arr[i] + " } \n"
        i++
    }
    return fib
}

6
