//
//  AddItemTableViewControllerDelegate.swift
//  BucketList2
//
//  Created by Colby Behrndt on 5/16/17.
//  Copyright © 2017 colbehr. All rights reserved.
//

import UIKit
protocol AddItemTableViewControllerDelegate: class {
    func itemSaved(controller: AddItemViewController, text: String, indexPath: NSIndexPath?)
    func cancelButtonPressed(controller: AddItemViewController)
}
