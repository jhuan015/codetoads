var thinky = require('./../thinky');
var type = thinky.type;

var Game = thinky.createModel('Game', {
  id: type.string(),
  users: type.string(),
  title: type.string(),
  winner: type.string()
});


module.exports = Game;

// Must come after export
var User = require('./user');

Game.hasAndBelongsToMany(User, 'users', 'id', 'id');
