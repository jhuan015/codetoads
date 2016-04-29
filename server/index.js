// ROUTING
var app = require('./server');
var http = require('http').Server(app);
// ENV variables
var port = process.env.PORT || 3000;


http.listen(port, function () {
  console.log('ROUTING server listening on port: ' + port);
});
