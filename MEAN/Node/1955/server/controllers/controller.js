var mongoose = require('mongoose');

var People = mongoose.model('People');

module.exports = {
  showAll: (req, res) => {
      People.find({}, function(err, messages) {
          res.json(messages);
      });
  },
  new:(req, res) => {
      var newPerson = new People({name: req.params.name})
      newPerson.save(function(err) {
          if (err) {
              console.log("There was an error");
              console.log(err);
          }

          res.redirect("/")
      })
  },
  remove:(req, res) => {
      People.remove({name:  req.params.name}, function(err){})
      res.redirect("/")
  },
  show:(req, res) => {
      People.find({name: req.params.name}, function(err, messages) {
          res.json(messages);
      });
  }
}
