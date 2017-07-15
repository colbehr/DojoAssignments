var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var wall = require('../controllers/wall.js');

const path = require("path")

module.exports = function(app) {
  app.get('/getAll', wall.showAllMessages)
  app.post('/newMessage/', wall.newMessage)
  app.post('/newComment/', wall.newComment)
  app.get('/cleardb/', wall.clear)
  //users
  app.get('/currentUser', users.loggedInUser)
  app.get('/logout', users.logout)
  app.post('/loginUser', users.loginUser)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  })
}
