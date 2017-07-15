//
//  ViewController.swift
//  BinaryCounter
//
//  Created by Colby Behrndt on 5/17/17.
//  Copyright © 2017 colbehr. All rights reserved.
//


import UIKit

class ViewController: UIViewController {
    
    var total = 0
    
    @IBOutlet weak var totalLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        totalLabel.text = "Total: \(total)"
    }
    
}

extension ViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BinaryCell", for: indexPath) as! BinaryTableViewCell
        let decimal = pow(10, indexPath.row)
        cell.number = Int(NSDecimalNumber(decimal: decimal))
        cell.delegate = self
        cell.valueTextLabel.text = "\(cell.number!)"
        return cell
    }
    
}

extension ViewController: BinaryTableViewCellDelegate {
    
    func buttonPressed(withValue value: Int) {
        self.total += value
        totalLabel.text = "Total: \(total)"
    }
    
}
