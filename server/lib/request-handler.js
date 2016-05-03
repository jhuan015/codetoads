var db = require('./../db/config');
var request = require('request');
var Game = db.Game;
var User = db.User;

var easy = [
  'sum-of-multiples',
  'name-on-billboard',
  'fix-your-code-before-the-garden-dies',
  'printing-array-elements-with-comma-delimiters'
];

var med = [
  'wheel-of-fortune',
  'special-multiples',
  'dna-sequence-tester',
  'i-love-big-nums-and-i-cannot-lie'
];

var options = {
  headers: {
    'Authorization': process.env.cwKey
  }
}

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

module.exports.grabPrompt = function(req, res) {
  //randomly pick challenge based on choice posted
  if (req.body.challenge === 'easy') {
    var rand = easy[Math.floor(Math.random() * easy.length)];
  } else {
    var rand = med[Math.floor(Math.random() * med.length)];
  }
  //generate API url
  options.url = 'https://www.codewars.com/api/v1/code-challenges/' +
  rand + '/javascript/train',

  //grab prompt and send back
  request.post(options, function(err, response, body) {
    var info = JSON.parse(body);
    res.send(info);

    /*
      Front end needs to send choice.. easy or med currently
      '<p>Example:</p>' +
      '<h1>' + info.name + '</h1>' +
      '<p>' + info.description + '</p>' +
      '<p>' + info.session.setup + '</p>' +
      '<p>' + info.session.exampleFixture + '</p>' +
    */

  });
}
