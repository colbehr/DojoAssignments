//
//  ToDoCellViewController.swift
//  TodoList
//
//  Created by Colby Behrndt on 5/24/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit
import CoreData

class ToDoCellViewController: UITableViewController {
    
    var listoftasks = Array<Any>()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let userRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "ToDoListItems")
        do{
            let results = try managedObjectContext.fetch(userRequest)
            listoftasks = results as! [ToDoListItems]
        } catch{
            print("\(error)")
        }
        tableView.reloadData()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    @IBAction func addItem(_ segue: UIStoryboardSegue){
        let controller = segue.source as! AddViewController
        let newItem = NSEntityDescription.insertNewObject(forEntityName: "ToDoListItems", into: managedObjectContext) as! ToDoListItems
        
        newItem.title = controller.titleTextField.text
        newItem.desc = controller.descTextField.text
        newItem.date = controller.DatePicker.date as NSDate
        newItem.checked = false
        do{
            try managedObjectContext.save()
            print("Saved")
        } catch{
            print("\(error)")
        }
        listoftasks.append(newItem)
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell") as! ToDoItem
        
        cell.cellTitle.text = (listoftasks[indexPath.row] as AnyObject).title!
        cell.cellDesc.text = (listoftasks[indexPath.row] as AnyObject).desc!
        
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        let mystring = formatter.string(from: ((listoftasks[indexPath.row] as AnyObject).date!! as Date))
        let mydate = formatter.date(from: mystring)
        formatter.dateFormat = "MMM-dd-YYYY"
        cell.cellDate.text = formatter.string(from: mydate!)
        
        if ((listoftasks[indexPath.row] as AnyObject).checked)! == true{
            cell.accessoryType = .checkmark
        }
        // return cell so that Table View knows what to draw in each row
        return cell
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return listoftasks.count
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {

        let updateItem = self.listoftasks[indexPath.row] as! ToDoListItems
        updateItem.checked = !updateItem.checked
        do{
            try managedObjectContext.save()
        }catch{
            print("\(error)")
        }
        if tableView.cellForRow(at: indexPath)?.accessoryType == .checkmark{
            let cell = tableView.cellForRow(at: indexPath)
            cell?.accessoryType = .none
        } else{
            let cell = tableView.cellForRow(at: indexPath)
            cell?.accessoryType = .checkmark
        }
    }
}


class ToDoItem: UITableViewCell{
    
    @IBOutlet weak var cellDate: UILabel!
    @IBOutlet weak var cellTitle: UILabel!
    @IBOutlet weak var cellDesc: UILabel!
}
