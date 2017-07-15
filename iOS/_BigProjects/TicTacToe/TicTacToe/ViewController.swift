//
//  ViewController.swift
//  TicTacToe
//
//  Created by colbehr on 5/10/17.
//  Copyright (c) 2017 colbehr. All rights reserved.
//

import UIKit
class tttButton: UIButton {
    var ownedByPlayer: Int = 0
    func toPlayer1(){
        self.backgroundColor = UIColor(red: 0.4, green: 0.7, blue: 1, alpha: 1)
        self.setTitle("X", for: .normal)
        ownedByPlayer = 1
    }
    
    func toPlayer2(){
        self.backgroundColor = UIColor(red: 1, green: 0.4, blue: 0.4, alpha: 1)

        self.setTitle("O", for: .normal)
        ownedByPlayer = 2
    }
    func reset(){
        self.backgroundColor = UIColor.lightGray
        ownedByPlayer = 0
        self.setTitle("", for: .normal)
    }
}
class ViewController: UIViewController {
    var player1Turn: Bool = true
    var movesNum: Int = 0
    var winner: Bool = false
    @IBOutlet weak var button3: tttButton!
    @IBOutlet weak var button2: tttButton!
    @IBOutlet weak var button1: tttButton!
    @IBOutlet weak var button4: tttButton!
    @IBOutlet weak var button5: tttButton!
    @IBOutlet weak var button6: tttButton!
    @IBOutlet weak var button7: tttButton!
    @IBOutlet weak var button8: tttButton!
    @IBOutlet weak var button9: tttButton!
    
    @IBOutlet weak var resetButton: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        button1.layer.cornerRadius = 10
        button2.layer.cornerRadius = 10
        button3.layer.cornerRadius = 10
        button4.layer.cornerRadius = 10
        button5.layer.cornerRadius = 10
        button6.layer.cornerRadius = 10
        button7.layer.cornerRadius = 10
        button8.layer.cornerRadius = 10
        button9.layer.cornerRadius = 10
        resetButton.layer.cornerRadius = 25
        resetButton.backgroundColor = UIColor(red: 1, green: 0.4, blue: 0.4, alpha: 1)
       
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBOutlet weak var winnerLabel: UILabel!
    
    func changePlayerTurn(){
        if (player1Turn){
            player1Turn = false
            winnerLabel.text = "Player 2 Turn"
        }else{
            player1Turn = true
            winnerLabel.text = "Player 1 Turn"
        }
    }
    @IBAction func ButtonClick(_ sender: tttButton) {
        print(String(movesNum))
        if(!winner){
            if(player1Turn){
                if(sender.ownedByPlayer == 0){
                    movesNum += 1
                    sender.toPlayer1()
                    
                    changePlayerTurn()
                }
            }else{
                if(sender.ownedByPlayer == 0){
                    movesNum += 1
                    sender.toPlayer2()
                    changePlayerTurn()
                }
            }
            checkForWinner()
        }
        if(movesNum >= 9){
            winnerLabel.text = "You both loose!"
        }
    }
    func winner(player: Int){
        winnerLabel.text = "Congrats, Player \(player)"
        winner = true
    }
    func checkForWinner(){
       
        if(button1.ownedByPlayer == button2.ownedByPlayer && button3.ownedByPlayer == button2.ownedByPlayer && button1.ownedByPlayer > 0){
            winner(player: button1.ownedByPlayer)
             print("1")
        }
        if(button4.ownedByPlayer == button5.ownedByPlayer && button6.ownedByPlayer == button5.ownedByPlayer && button4.ownedByPlayer > 0){
            winner(player: button4.ownedByPlayer)
             print("2")
        }
        if(button7.ownedByPlayer == button8.ownedByPlayer && button9.ownedByPlayer == button8.ownedByPlayer && button7.ownedByPlayer > 0){
            winner(player: button7.ownedByPlayer)
             print("3")
        }
        if(button1.ownedByPlayer == button4.ownedByPlayer && button7.ownedByPlayer == button4.ownedByPlayer && button1.ownedByPlayer > 0){
            winner(player: button1.ownedByPlayer)
             print("4")
        }
        if(button2.ownedByPlayer == button5.ownedByPlayer && button8.ownedByPlayer == button5.ownedByPlayer && button2.ownedByPlayer > 0){
            winner(player: button2.ownedByPlayer)
             print("5")
        }
        if(button3.ownedByPlayer == button6.ownedByPlayer && button9.ownedByPlayer == button6.ownedByPlayer && button3.ownedByPlayer > 0){
            winner(player: button3.ownedByPlayer)
             print("6")
        }
        if(button1.ownedByPlayer == button5.ownedByPlayer && button9.ownedByPlayer == button5.ownedByPlayer && button1.ownedByPlayer > 0){
            winner(player: button1.ownedByPlayer)
             print("7")
        }
        if(button3.ownedByPlayer == button5.ownedByPlayer && button7.ownedByPlayer == button5.ownedByPlayer && button3.ownedByPlayer > 0){
            winner(player: button3.ownedByPlayer)
             print("8")
        }
        
    }
    
    @IBAction func reset(_ sender: Any) {
        button1.reset()
        button2.reset()
        button3.reset()
        button4.reset()
        button5.reset()
        button6.reset()
        button7.reset()
        button8.reset()
        button9.reset()
        winner = false
        movesNum = 0
        player1Turn = true
        winnerLabel.text = "Make a move Player 1"
    }
    

}

