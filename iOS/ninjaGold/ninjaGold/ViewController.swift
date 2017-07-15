//
//  ViewController.swift
//  ninjaGold
//
//  Created by Colby Behrndt on 5/9/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var totalScore: Int = 0
    @IBOutlet weak var ScoreLabel: UILabel!
    @IBOutlet weak var farmLabel: UILabel!
    @IBOutlet weak var caveLabel: UILabel!
    @IBOutlet weak var houseLabel: UILabel!
    @IBOutlet weak var casinoLabel: UILabel!
    @IBOutlet weak var actionList: UITextView!
    
    var actionArray: Array<String> = ["A thing"];
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        resetLabels()
        updateUI()
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func updateUI(){
        updatePicker()
        ScoreLabel.text = String(totalScore)
    }
    
    @IBAction func addFarm(_ sender: Any) {
        let temp: Int = 10
        totalScore += temp
        resetLabels()
        let tempText: String = "Added Farm, +\(temp)"
        farmLabel.text = tempText
        actionArray.append(tempText)
        updateUI()
    }
    
    @IBAction func addCave(_ sender: Any) {
        let temp: Int = 5
        totalScore += temp
        resetLabels()
        let tempText: String = "Added Cave, +\(temp)"
        caveLabel.text = tempText
        actionArray.append(tempText)
        updateUI()
    }
    
    @IBAction func addHouse(_ sender: Any) {
        let temp: Int = 2
        totalScore += temp
        resetLabels()
        let tempText: String = "Added House, +\(temp)"
        houseLabel.text = tempText
        actionArray.append(tempText)
        updateUI()
    }
    
    @IBAction func addCasino(_ sender: Any) {
        let temp: Int = 50
        totalScore += temp
        resetLabels()
        let tempText: String = "Added Casino, +\(temp)"
        casinoLabel.text = tempText
        actionArray.append(tempText)
        updateUI()
    }
    func resetLabels(){
        farmLabel.text = ""
        caveLabel.text = ""
        houseLabel.text = ""
        casinoLabel.text = ""
    }
    @IBAction func Reset(_ sender: Any) {
        totalScore = 0
        resetLabels()
        updateUI()
    }
    func updatePicker(){
        for i in 0...actionArray.count-1{
            actionList.text = actionList.text  + String(actionArray[i])
        }
    }

}

