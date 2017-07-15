var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
   response.render('');
})

app.get('/result', function(request, response) {
  response.redirect("/")
})

app.post('/result', function(request, response) {
  var data = {
    name: request.body.name,
    loc: request.body.loc,
    lang:request.body.lang,
    comment:request.body.comment
  }
   response.render('results', data);
})

app.listen(8000, function() {
  console.log("Listening on port 8000");
})
