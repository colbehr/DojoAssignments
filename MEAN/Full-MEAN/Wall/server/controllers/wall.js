var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

module.exports = {
  showAllMessages: (req, res) => {
      Message.find({}, function(err, messages) {
          res.json(messages);
      });
    },
    newMessage: (req, res) => {
        console.log("NewMessage:   ",req.body);
        let newMessage = new Message({
            name: req.body.name,
            message: req.body.message,
            created_at: new Date(),
            comments: []
        })
        newMessage.save(function(err) {
            if (err) {
                console.log("There was an error");
                console.log(err);
            } else{
                console.log("Message Saved");
            }
        })
        res.redirect('/getAll');

    },
    newComment: (req, res) => {
        console.log("NewComment:   ",req.body);
        Message.findOne({_id: req.body.id}, function(err, message) {
            var newComment = new Comment({
                name: req.body.name,
                commentText: req.body.comment,
                created_at: new Date()
            });
    		newComment.save(function(err) {
    			console.log("Comment Saved");
    		});
            Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err) {
    			if (err) {
    				console.log("There was an error, couldnt update?");
    				console.log(err);
    			} else {
    	            console.log('Comment Added');
    	        }
            });
            if(err){
                console.log("Missing Comment?");
            }
        });
        res.redirect('/getAll');
    },
    clear: (req, res) => {
        Message.find({}).remove().exec();
        User.find({}).remove().exec();

        res.redirect('/getAll');
    }

}
