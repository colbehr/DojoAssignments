//
//  ViewController.swift
//  customCell
//
//  Created by Colby Behrndt on 5/17/17.
//  Copyright © 2017 colbehr. All rights reserved.
//


import UIKit

class ViewController: UITableViewController {
    
    var total = 0
    
    @IBOutlet weak var totalLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        totalLabel.text = "Total: \(total)"
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    override var preferredStatusBarStyle: UIStatusBarStyle{
        return .lightContent
    }
}

extension ViewController{
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
           print("hi")
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        let decimal = pow(10, indexPath.row)
        cell.value = Int(NSDecimalNumber(decimal: decimal))
        cell.delegate = self
        cell.label.text = "\(cell.value!)"
        return cell
    }
}

extension ViewController: CustomCellDelegate{
    func buttonPressed(withValue value: Int){
        self.total += value
        totalLabel.text = "Total: \(total)"
    }
}
