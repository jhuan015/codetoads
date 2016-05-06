var server = require('../server/server');
var request = require('supertest')(server);

describe('Server API Calls', function () {
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

  it('grabs a prompt', function (done) {
    var data = { challenge: 'easy' };
    request
      .post('api/grabPrompt')
        .send(data)
        .expect(200)
        .end(done);
  });
});
