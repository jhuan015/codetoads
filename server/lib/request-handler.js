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
  //generate query
  var options = {
    headers: {
      Authorization: process.env.cwKey
    },
    url : 'https://www.codewars.com/api/v1/code-challenges/' +
    rand + '/javascript/train'
  }

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

module.exports.submitAnswer = function(req, res) {
  // var project_id = '5727dcf97fc662c6970009e2';
  // var solution_id = '5727dcf90838ffce0f000918';

  //add to options for post query
  var options = { method: 'POST',
    url: 'https://www.codewars.com/api/v1/code-challenges/projects/' +
          req.body.project_id +
          '/solutions/' +
          req.body.solution_id +
          '/attempt',
    headers:
     {
       'cache-control': 'no-cache',
       'content-type': 'application/json',
       output_format: 'raw',
       authorization: '8YMabNyQ6jsivYrFoCfh' },
    body: { code: 'function greet(){return \'hello world\'}' },
    json: true };

  console.log(options.url);
  //post
  console.log('before post');
  request.post(options, function(err, response, body) {
    if (err) {
      return console.log('failed', err);
    }
    //res.send(body);
    //need to make this async or delayed
    if (body.success) {
      console.log(body.dmid);
      var innerOptions = {
        headers: {
          Authorization: process.env.cwKey
        },
        url: 'https://www.codewars.com/api/v1/deferred/' +
              body.dmid
      }

      request.get(innerOptions, function(err, response, innerBody) {
        if (err) {
          return console.log('failed defer', err);
        }
        res.send(innerBody);
      });
    }
  });
}
// }
