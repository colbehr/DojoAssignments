var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');

var CommentSchema = new mongoose.Schema({
 name: String,
 comment: String,
 date: String
})
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'User'
var Comment = mongoose.model('Comment')
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Comment.find({}, function(err, comments) {
      if(err) {
        console.log("error");
        res.redirect("/")
      }
      console.log(comments);
      res.render('quotes', {quotes: comments});
    })
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body, getCurrentTime());
    var newComment = new Comment({
      name: req.body.name,
      comment: req.body.comment,
      date: getCurrentTime()
    })
    newComment.save(function(err) {
   // if there is an error console.log that something went wrong!
   if(err) {
     res.redirect("/")
     console.log('something went wrong');
   } else { // else console.log that we did well and then redirect to the root route
     console.log('successfully added a user!');
     res.redirect('quotes');
   }
 })
})

app.listen(8000, function() {
    console.log("Listening on port 8000");
})
function getCurrentTime(){
  date = new Date();
  return date.toLocaleString();
}
