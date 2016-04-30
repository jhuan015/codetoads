var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/codetodes';

var connection = mongoose.connect(mongoURI);

var User = require('./user/user');

module.exports.User = User;
