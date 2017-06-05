
import Darwin

func tossCoin(){
    print("Tossing Coin")
    let temp: UInt32 = arc4random() % 2
    if(temp == 1){
        print("Heads")
    } else {
        print("Tails")
    }
    
}

func tossManyCoin(num: Int){
    for i in 1...num {
        print("Tossing Coin")
        let temp: UInt32 = arc4random() % 2
        if(temp == 1){
            print("Heads")
        } else {
            print("Tails")
        }
    }
}
tossCoin()

tossManyCoin(num: 3)