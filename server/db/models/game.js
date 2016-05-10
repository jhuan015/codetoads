var thinky = require('./../thinky');
var type = thinky.type;

var Game = thinky.createModel('Game', {
  id: type.string(),
  users: type.object(),
  roomname: type.string(),
  password: type.string(),
  winner: type.string(),
  creator: type.string()
});


module.exports = Game;

// Must come after export
var User = require('./user');

Game.hasAndBelongsToMany(User, 'users', 'id', 'id');
