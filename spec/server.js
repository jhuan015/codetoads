var server = require('../server/server');
var request = require('supertest')(server);
var assert = require('chai').assert;

describe('Main Page Calls', function () {
  it('responds to /', function testSlash(done) {
  request
    .get('/')
    .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request
      .get('/foo/bar')
      .expect(404, done);
  });

});

describe('makeGame calls', function() {
  var data = {
    difficulty: 'easy',
    numPrompt: 5
  };

  it('make a game with 5 prompts', function (done) {
    request
      .post('/api/makeGame')
        .send(data)
        .expect(200)
        .end(function (err, res) {
          assert.equal(res.body.length, 5);
          done();
        });
  });


  // it('grab a prompt with code', function (done) {
  //   request
  //     .post('/api/makeGame')
  //       .send(data)
  //       .expect(200)
  //       .end(function (err, res) {
  //         assert.property(res.body[0].session, 'code', "has code property");
  //         assert.property(res.body[0].session, 'setup', "has setup property");
  //         done();
  //       });
  // });

});

describe('submitAttempt calls', function () {
  it('should allow submission attempts', function (done) {
    this.timeout(5000);

    var attempt = {
      project_id: '5727dcf97fc662c6970009e2',
      solution_id: '5727dcf90838ffce0f000918',
      code: 'function greet(){return \'hello world!\'}'
    }
    request
      .post('/api/submitAttempt')
        .send(attempt)
        .expect(200)
        .end(function (err, res) {
          assert.property(res.body, 'response', 'has response property');
          assert.property(res.body, 'setup', 'has setup property');
          // console.log(JSON.parse(res.body.response).success);
          // console.log(JSON.parse(res.body.response));
          // assert.isTrue(JSON.parse(res.body.response).success);
          done();
        });
  });

});

