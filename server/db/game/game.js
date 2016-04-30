var mongoose = require('mongoose');
var relationship = require('mongoose-relationship');

var gameSchema = mongoose.Schema({
  game_id: { type: String, required: true },
  users: { type: String },
  title: { type: String },
  winner: {type: mongoose.Schema.ObjectId, ref: 'User', childPath: 'gamesPlayed'},
});

var User = mongoose.model('Game', userSchema);

module.exports = Game;
