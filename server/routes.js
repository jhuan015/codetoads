var handler = require('./lib/request-handler');
var jwt = require('express-jwt');

module.exports = function(app) {
  var authenticate = jwt({
    secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
    audience: process.env.AUTH0_CLIENT_ID
  });

  app.get('/secured', authenticate);

  app.get('/ping', function(req, res) {
    res.send("All good. You don't need to be authenticated to call this");
  });

  app.get('/secured/ping', authenticate, function(req, res) {
    res.status(200).send("All good. You only get this message if you're authenticated");
  });

}
