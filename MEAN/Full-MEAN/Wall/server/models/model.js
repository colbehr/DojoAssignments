var mongoose = require('mongoose');
// create the schema
var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    commentText: {type: String, required: true},
    created_at: Date,
});

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    created_at: Date,
    _comments: [CommentSchema],
});

var UserSchema = new mongoose.Schema({
    userName: {type: String, required: true, minlength: 2}
});
// register the schema as a model
var User = mongoose.model('User', UserSchema);
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model("Comment", CommentSchema);
