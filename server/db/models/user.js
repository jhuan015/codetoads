var thinky = require('./../thinky');
var type = thinky.type;
var r = require('rethinkdb');

var User = thinky.createModel('User', {
  id: type.string(),
  user_id: type.string(),
  username: type.string(),
  firstname: type.string(),
  lastname: type.string(),
  winStreak: type.number(),
  lostTo: type.string(),
  gamesPlayed: type.number(),
  quits: type.number(),
  completed: type.number(),
  fastest: type.number(),
  email: type.string(),
  picture: type.string(),
  createdAt: type.date().default(r.now())
});

module.exports = User;

// Must come after export
var Game = require('./game');

User.hasAndBelongsToMany(Game, 'games', 'id', 'id');
