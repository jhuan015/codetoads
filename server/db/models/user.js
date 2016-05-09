var thinky = require('./../thinky');
var type = thinky.type;

var User = thinky.createModel('User', {
  user_id: type.string(),
  username: type.string(),
  firstname: type.string(),
  lastname: type.string(),
  winStreak: type.number(),
  lostTo: type.string(),
  quits: type.number(),
  fastest: type.number(),
  email: type.string(),
  picture: type.string()
});

module.exports = User;

// Must come after export
var Game = require('./game');

User.hasAndBelongsToMany(Game, 'games', 'id', 'id');
