//
//  BinaryTableViewCell.swift
//  BinaryCounter
//
//  Created by Colby Behrndt on 5/17/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit

protocol BinaryTableViewCellDelegate: class {
    func buttonPressed(withValue value: Int)
}

class BinaryTableViewCell: UITableViewCell {
    
    var number: Int?
    var delegate: BinaryTableViewCellDelegate?
    
    @IBOutlet weak var valueTextLabel: UILabel!
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        let val: Int
        
        if sender.titleLabel?.text == "+" {
            val = self.number!
        } else {
            val = -self.number!
        }
        
        delegate?.buttonPressed(withValue: val)
        
    }
    
}
