import UIKit

protocol CustomCellDelegate: class {
    func buttonPressed(withValue value: Int)
}

class CustomCell: UITableViewCell {
    @IBOutlet weak var label: UILabel!
    
    var value: Int?
    var delegate: CustomCellDelegate?
    
    @IBAction func buttonPress(_ sender: UIButton) {
        let val: Int
        if sender.titleLabel?.text == "+"{
            val = self.value!
        } else{
            val = -self.value!
        }
        
        delegate?.buttonPressed(withValue: val)
    }
}
