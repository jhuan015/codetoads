// Keep track of which names are used so that there are no duplicates
var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };


  // serialize claimed names as an array
  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get
  };
}());

// export function for listening to the socket
var users = [];
var people = {};
var gameStatus = {};

module.exports = function (socket) {
  socket.name = socket.handshake.query.user;
  var room = socket.handshake.query.chatroom;
  socket.join(room);
  people[socket.name] = socket.name;
  gameStatus[socket.name] = {
    name: socket.name,
    goal: 0
  };
  users.push(socket.name);


  console.log("joined room: " + room);
  // send the new user their name and a list of users
  this.to(room).emit('init', {
    name: socket.name,
    users: users
 //   users: people
  });

  // notify other clients that a new user has joined
  this.to(room).emit('user:join', {
    name: socket.name
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    console.log('send message in room: ' + room);
    this.to(room).emit('send:message', {
      user: socket.name,
      text: data.text
    });
  });


  socket.on('person:won', function (data, fn) {
    console.log(data.test + ' has won!');
  });

  socket.on('person:passed', function (data, fn) {
    console.log('pass ' + data.name);
    console.log(room);
    gameStatus[data.name].goal++;
    this.to(room).emit('update:game', {
      name: data.name,
      goal: gameStatus[data.name].goal
    });
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    this.to(room).emit('user:left', {
      name: socket.name
    });
    userNames.free(socket.name);
  });
};
