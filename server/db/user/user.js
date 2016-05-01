var mongoose = require('mongoose');
var relationship = require('mongoose-relationship');

var userSchema = mongoose.Schema({
  auth_id: { type: String, unique: true, required: true },
  username: { type: String },
  firstname: {type: String },
  lastname: {type: String },
  winStreak: { type: Number },
  lostTo: { type: String },
  gamesPlayed: { type: mongoose.Schema.ObjectId, ref: 'Game' },
  quits: { type: Number },
  fastest: { type: Number }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
