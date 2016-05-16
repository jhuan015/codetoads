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

var typing = [
  'for (var i = 0; i<array.length; i++)',
  '`Hello, ${name}. Welcome to ${city}, ${country}!`',
  'var args = Array.prototype.slice.call(arguments);',
  "var exclaim = function(statement) { return statement.toUpperCase() + '!';}",
  'BlinkyDancer.prototype = Object.create(Dancer.prototype);',
  "var str = Object.keys(array).join('')",
  'const pipe = (...args) => args.reduce((final, arg) => (item) => arg(final(item)));'
];

var questions = [
  {
    question: 'What kind of scoping does JavaScript use?',
    choices: ['Literal', 'Lexical', 'Segmental', 'Sequential'],
    answer: 'b',
    explanation: 'Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.',
    type: 'multichoice'
  },
  {
    question: 'What must be done in order to implement Lexical Scoping?',
    choices: ['Get the object', 'Dereference the current scope chain', 'Reference the current scope chain', 'one of the mentioned'],
    answer: 'c',
    explanation: 'In order to implement lexical scoping, the internal state of a JavaScript function object must include not only the code of the function but also a reference to the current scope chain.',
    type: 'multichoice'
  },
  {
    question: 'What is a closure?',
    choices: ['Function objects', 'Scope where function’s variables are resolved', 'Both a and b', 'None of the mentioned'],
    answer: 'c',
    explanation: 'A combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure.',
    type: 'multichoice'
  },
  {
    question: 'Which of the following are examples of closures?',
    choices: ['Objects', 'Variables', 'Functions', 'All of the mentioned'],
    answer: 'd',
    explanation: 'Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them.',
    type: 'multichoice'
  },

];

module.exports.saveUser = function(req, res) {
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
        if (result.length === req.body.numPrompt-3) {
          var typeTest = {
            name: 'Typing Challenge!',
            description: 'Complete the following phrase as quickly as you can.',
            session: {
              type: 'typing',
              expression: typing[Math.floor(Math.random() * typing.length)]
            }
          }
          result.push(typeTest);
          var multiChoice = {
            name: 'Multiple Choice Challenge!',
            description: 'Answer the question by submitting the correct answer.',
            session: questions[Math.floor(Math.random() * questions.length)]
          }
          result.push(multiChoice);
          var multiChoice2 = {
            name: 'Multiple Choice Challenge!',
            description: 'Answer the question by submitting the correct answer.',
            session: questions[Math.floor(Math.random() * questions.length)]
          }
          result.push(multiChoice2);
          var shuffled = shuffle(result);
          res.send(shuffled);
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

module.exports.joinGame = function(req, res) {

};

module.exports.createGame = function(req, res) {
  var player = {
    user_id: req.body.user_id,
    progress: 0,
    prompt: '',
    code: ''
  }
  var newGame = {
     roomname: req.body.roomname,
     password: req.body.password,
     players: [player],
     creator: req.body.user_id,
     difficulty: req.body.difficulty,
     prompts:[]
  }

  var result = [];
  var randomArray = [];
  //generate random indexes for prompts
  //currently use 4 because only 4 prompts each difficulty
  for (var i = 0; i < 5; i++) {
    randomArray.push(i);
  }
  //randomize the prompts
  randomArray = shuffle(randomArray);
  for (var i = 0; i < req.body.numPrompts; i++) {
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
        if (result.length === req.body.numPrompts) {
          newGame.prompts = result;
          Game.filter({roomname: req.body.roomname}).run()
          .then(function (games) {
            var game = games[0];
            if(game) {
              return new Error('Game already exists');
            } else {
              Game.save(newGame)
              .then(function (game) {
                res.send(game);
              })
              .catch(function (err) {
                res.send({statusCode: 500});
              });
            }
          });
        }
      }
    });
  }


};

module.exports.getUserInfo = function(req, res) {
  User.filter({user_id: req.body.user_id}).run()
    .then(function (users) {
      var user = users[0];
      if(user) {
        res.send(user);
      } else {
        res.send(null);
      }
    })
    .catch(function (err) {
      return null;
    });
};
