var mongoose = require('mongoose');
var controller = require('../controllers/controller.js');

module.exports = function(app) {
  app.get('/', (req, res) => {controller.showAll(req, res)})

  app.get('/new/:name', (req, res) => {controller.new(req, res)})
  app.get('/remove/:name', (req, res) => {controller.remove(req, res)})
  app.get('/:name', (req, res) => {controller.show(req, res)})
}
