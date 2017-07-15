//
//  ViewController.swift
//  BucketList2
//
//  Created by Colby Behrndt on 5/16/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit
import CoreData

class BucketListViewController: UITableViewController, AddItemTableViewControllerDelegate {
    
    var listItems = [BucketListItem]()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchAllItems()
        // Do any additional setup after loading the view, typically from a nib.
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    //DELEGATE STUFF ************************************************************
    func cancelButtonPressed(controller: AddItemViewController) {
        dismiss(animated: true, completion: nil)
    }
    func itemSaved(controller: AddItemViewController, text: String, indexPath: NSIndexPath?) {
        if indexPath != nil {
            let item = listItems[indexPath!.row]
            item.text = text
        }else{
            let item = NSEntityDescription.insertNewObject(forEntityName: "BucketListItem", into: managedObjectContext) as! BucketListItem
            item.text = text
            listItems.append(item)
        }
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return listItems.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = listItems[indexPath.row].text!
        return cell
    }
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        let item = listItems[indexPath.row]
        managedObjectContext.delete(item)
        do{
            try managedObjectContext.save()
        } catch
        {
            print("\(error)")
        }
        
        listItems.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "EditItemSegue", sender: "test")
    }
    
    
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "EditItemSegue", sender: indexPath)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddItemSegue"{
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! AddItemViewController
            controller.delegate = self
        }else {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! AddItemViewController
            controller.delegate = self
            let indexPath = sender as! NSIndexPath
            let item = listItems[indexPath.row]
            controller.items = item.text!
            controller.indexPath = indexPath
        }
        
    }
    func fetchAllItems(){
        let request = NSFetchRequest<NSFetchRequestResult> (entityName: "BucketListItem")
        do{
            let result = try managedObjectContext.fetch(request)
            listItems = result as! [BucketListItem]
        } catch{
            print("\(error)")
        }
        
    }
}
