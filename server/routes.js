var handler = require('./lib/request-handler');
var jwt = require('express-jwt');

module.exports = function(app) {
  var authenticate = jwt({
    secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'),
    audience: process.env.AUTH0_CLIENT_ID
  });

  app.post('/api/saveUser', authenticate, handler.saveUser);

  app.post('/api/submitAttempt', handler.submitAttempt);

  app.post('/api/makeGame', handler.makeGame);

  app.post('/api/joinGame', authenticate, handler.joinGame);

  app.post('/api/saveGame', authenticate, handler.saveGame);

  app.post('/api/getUserInfo', authenticate, handler.getUserInfo);

  app.put('/api/incrementGames/:id', authenticate, handler.incrementGames);
}
