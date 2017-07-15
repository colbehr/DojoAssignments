var mongoose = require('mongoose');
var controller = require('../controllers/controller.js');

module.exports = function(app) {
  app.get('/getNotes', (req, res) => {controller.showAll(req, res)})
  app.post('/new/', (req, res) => {controller.new(req, res)})
}
