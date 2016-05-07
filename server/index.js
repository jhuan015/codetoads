// ROUTING
var app = require('./server');
var http = require('http').Server(app);
// ENV variables
var port = process.env.PORT || 3000;

var io = require('socket.io').listen(http);
var socket = require('./socket.js');

io.on('connection', socket);

http.listen(port, function () {
  console.log('ROUTING server listening on port: ' + port);
});
