var db = require('./../db/config');
var Game = db.Game;
var User = db.User;


module.exports.saveUser = function(req, res) {
  User.create({
      auth_id: req.body.user_id,
      username: req.body.nickname,
      firstname: req.body.given_name,
      lastname: req.body.family_name
    }, function(error, doc) {
      console.log(doc);
    });

}
