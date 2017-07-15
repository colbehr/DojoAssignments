var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var path = require("path");
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect('mongodb://localhost/messageBoard');
mongoose.Promise = global.Promise;
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true},
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});
var Message = mongoose.model("Message", MessageSchema);

var CommentSchema = new mongoose.Schema({
    name:  String,
    commentText: String,
    _message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
});
var Comment = mongoose.model("Comment", CommentSchema);


app.get('/', function(req, res) {
    Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
        res.render('index.ejs', {
            messages: messages
        });
    });
})

app.post('/postMessage', function(req, res) {
    var newMessage = new Message({
        name: req.body.name,
        message: req.body.message,
        date: getCurrentTime(),
        comments: []
    })
    newMessage.save(function(err) {
        if (err) {
            console.log("There was an error");
            // console.log(err);
			Message.find({}, false, true).populate('_comments').exec(function(err, messages) {
				res.render('index', {title: 'You have errors!', errors: newMessage.errors, messages: messages})
			});
        } else {
            console.log('Message Added');
            res.redirect('/');
        }
    })
})

app.post('/postComment', function(req, res) {
    var message_id = req.body.id;
    Message.findOne({_id: message_id}, function(err, message) {
        var newComment = new Comment({
            name: req.body.name,
            commentText: req.body.comment
        });
        newComment._message = message._id;
		newComment.save(function(err) {
			console.log("Comment Saved");
		});
        Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err) {
			if (err) {
				console.log("There was an error");
				console.log(err);
			} else {
	            console.log('Comment Added');
	        }
        });
		res.redirect('/');
    });
});

app.listen(8000, function() {
    console.log("Listening on port 8000");
})

function getCurrentTime() {
    date = new Date();
    return date.toLocaleString();
}
