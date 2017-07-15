//
//  ViewController.swift
//  agingPeople
//
//  Created by Colby Behrndt on 5/15/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var people = ["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10","name11","name12"]
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.delegate = self
        tableView.dataSource = self
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}


extension ViewController: UITableViewDataSource,UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return people.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        // set text label to the model that is corresponding to the row in array
        cell.textLabel?.text = people[indexPath.row]
        cell.detailTextLabel?.text = "Age \(arc4random_uniform(90)+5)"
        // return cell so that Table View knows what to render in each row
        return cell
    }
}
