var mongoose = require('mongoose');

var Note = mongoose.model('Note');

module.exports = {
  showAll: (req, res) => {
      Note.find({}, function(err, messages) {
          res.json(messages);
      });
  },
  new:(req, res) => {
      var newNote = new Note({note: req.body.note, created_at: new Date(), updated_at: new Date()})
      newNote.save(function(err) {
          if (err) {
              console.log("There was an error");
              console.log(err);
          }
          res.redirect("/")
      })
  },
}
