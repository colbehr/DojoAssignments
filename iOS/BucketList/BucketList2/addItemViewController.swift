//
//  addItemViewController.swift
//  BucketList2
//
//  Created by Colby Behrndt on 5/16/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit

class AddItemViewController: UITableViewController {
    weak var delegate: AddItemTableViewControllerDelegate?
    var items: String?
    var indexPath: NSIndexPath?
    @IBOutlet weak var textField: UITextField!
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        if textField.text != nil{
            let text = textField.text
            delegate?.itemSaved(controller: self, text: text!, indexPath: indexPath)
        }
        
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(controller: self)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = items
        
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
}
