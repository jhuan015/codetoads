var db = require('./../db/config');
var request = require('request');
var User = require('./../db/db').User;
var Game = require('./../db/db').Game;

//easy, medium, hard, insane
var easy = [
  'sum-of-multiples',
  'name-on-billboard',
  'fix-your-code-before-the-garden-dies',
  'printing-array-elements-with-comma-delimiters',
  'function-1-hello-world'
];

var medium = [
  // 'wheel-of-fortune',
  // 'special-multiples',
  'multiply',
  'jennys-secret-message',
  'dna-sequence-tester',
  'i-love-big-nums-and-i-cannot-lie',
  'exes-and-ohs'
];

module.exports.saveUser = function(req, res) {
    console.log(req.body);
    var newUser = {
       user_id: req.body.user_id,
       username: req.body.nickname,
       firstname: req.body.given_name,
       lastname: req.body.family_name,
       email: req.body.email,
       picture: req.body.picture
    }

    User.filter({user_id: req.body.user_id}).run()
      .then(function (users) {
        var user = users[0];
        if(user) {
          return new Error('User already exists');
        } else {
          User.save(newUser)
            .then(function (user) {
              return user;
            })
            .catch(function (err) {
              return null;
            });
        }
      });
}

var grabPrompt = function(level, index, iterator) {
  //randomly pick challenge based on choice posted
  if (level === 'easy') {
    var prompt = easy[index];
  } else {
    var prompt = medium[index];
  }
  //generate query
  var options = {
    headers: {
      Authorization: process.env.cwKey
    },
    url : 'https://www.codewars.com/api/v1/code-challenges/' +
    prompt + '/javascript/train'
  };
  //grab prompt and send back
  request.post(options, function(err, response, body) {
    if(err){
      iterator(err, null, null);
    } else if (body.indexOf('!DOCTYPE')<0){
      var info = JSON.parse(body);
      //async data
      iterator(null, null, info)
    } else {
      iterator(null, 500, null)
    }
  });
};

//Used to shuffle promptS
var shuffle = function(array) {
  var arr = Array.prototype.slice(array);

  array.forEach(function(value, index){
    //generates random whole number with range 0 to array length
    var random = Math.max(0,(Math.floor(Math.random() * arr.length)));
    //swaps current index/value with random index/value
    arr[index] = arr[random];
    arr[random] = value;
  });

  return arr;
};

module.exports.makeGame = function(req, res) {
  var result = [];
  var randomArray = [];
  //generate random indexes for prompts
  //currently use 4 because only 4 prompts each difficulty
  for (var i = 0; i < 5; i++) {
    randomArray.push(i);
  }
  //randomize the prompts
  randomArray = shuffle(randomArray);
  for (var i = 0; i < req.body.numPrompt; i++) {
    index = randomArray[i];
    //make the calls to generate prompts
    grabPrompt(req.body.difficulty, index, function(err, status, info) {
      if(err){
        res.send({error: err})
      }
      else if(status){
        res.send({statusCode: 500});
      } else {
        result.push(info);
        //send result array when prompt amount is hit
        if (result.length === req.body.numPrompt) {
          res.send(result);
        }
      }
    });
  }
};

module.exports.submitAttempt = function(req, res) {
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
       authorization: process.env.cwKey
     },
    body: { code: req.body.code }, // 'function greet(){return \'hello world\'}'
    json: true };
  //post
  request.post(options, function(err, response, body) {
    if (err) {
      return console.error('failed', err);
    }
    if (body.success) {
      var innerOptions = {
        url: 'https://www.codewars.com/api/v1/deferred/' +
        body.dmid,
        headers: {
          Authorization: process.env.cwKey
        }
      }
      setTimeout(function() {
          request.get(innerOptions, function(err, response, innerBody) {
            if (err) {
              return console.error('failed defer', err);
            }
          res.send({response: innerBody, setup: req.body.code});
        });
      }, 1500);
    }
  });
};
