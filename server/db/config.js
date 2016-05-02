var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/codetoads';

var connection = mongoose.connect(mongoURI);

var User = require('./user/user');
var Game = require ('./game/game');

module.exports.User = User;
module.exports.Game = Game;
