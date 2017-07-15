var mongoose = require('mongoose');
// create the schema
var NoteSchema = new mongoose.Schema({
  note: String,
  created_at: Date,
  updated_at: Date
})
// register the schema as a model
var Note = mongoose.model('Note', NoteSchema);
