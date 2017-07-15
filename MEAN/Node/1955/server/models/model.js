var mongoose = require('mongoose');
// create the schema
var PeopleSchema = new mongoose.Schema({
  name: String
})
// register the schema as a model
var People = mongoose.model('People', PeopleSchema);
