var passwordHash = require('password-hash');
// export function for listening to the socket
var roomStatus = {};
var socketRooms = {};

module.exports = function (socket) {

  socket.name = socket.handshake.query.user;
  var room = socket.handshake.query.chatroom;
  var type = socket.handshake.query.joinType;
  var password = socket.handshake.query.password;
  var difficulty = socket.handshake.query.difficulty;
  console.log(JSON.stringify(socket.handshake.query));

  socket.join(room);
  if (!roomStatus[room]){
    roomStatus[room] = {
      player:[],
      amount:0,
      started:false,
      password:password
    };
  }
  if (socket.name){
    var nameCheck = false;
    roomStatus[room].player.forEach(function(value, index){
      if(value.name === socket.name){
        nameCheck = true;
      }
    });
    if (!nameCheck){
      roomStatus[room].player.push({name:socket.name});
    }
  }

  //check game from lobby before redirect
  socket.on('gamecheck:status', function (data) {
    console.log('password:');
    console.log( data.password);
    var status = {type:data.type, value:true, passCheck:true,full:false};
    if (data.type === 'create'){
      if (roomStatus[data.room]){
        status.value = false;
      } else {
        var pass = passwordHash.generate(data.password);
        status.password = pass;
      }
    } else if (data.type === 'join'){
      if (roomStatus[data.room]){
        if (!passwordHash.verify(data.password, roomStatus[data.room].password)){
          console.log('hashedPass:');
          console.log(roomStatus[data.room].password);
          status.passCheck = false;
        } else {
          var found = false;
          for (var a = 0; a < roomStatus[data.room].player.length; a++){
            if (roomStatus[data.room].player[a].name === data.user){
              found = true;
            }
          }
          if (!found && roomStatus[data.room].player.length > 3 ){
            status.full = true;
            status.value = false;
          } else if(!found && roomStatus[data.room].player.length < 4) {
            status.password = roomStatus[data.room].password;
          }
        }
      } else {
        status.value = false;
      }
    }
    socket.emit('gamecheck:complete',status);
  });

  console.log("joined room: " + room);
  // send the new user their name and a list of users
  this.to(room).emit('init', {
    name: socket.name,
    users: roomStatus[room].player
  });
  socket.to(room).emit('init', {
    name: socket.name,
    users: roomStatus[room].player
  });

  // notify other clients that a new user has joined
  this.to(room).emit('user:join', {
    name: roomStatus[room].player[roomStatus[room].player.length - 1].name,
    users: roomStatus[room].player
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    this.to(room).emit('send:message',
    {
      user: data.message.user,
      text: data.message.text
    });
  });

  //person won
  socket.on('person:won', function (data, fn) {
    console.log(data.test + ' has won!');
  });

  //person Passed
  socket.on('person:passed', function(data) {
    for (var i = 0; i < roomStatus[room].player.length; i++) {
      if (data.name === roomStatus[room].player[i].name) {
        roomStatus[room].player[i].current++;
        //emit to everyone and socket that sent it
        this.to(room).emit('update:game', roomStatus[room]);
        socket.emit('update:game', roomStatus[room]);
        if (roomStatus[room].player[i].current === roomStatus[room].goal) {
          this.to(room).emit('winner', {
            winner: data.name
          });
          socket.emit('winner', {
            winner: data.name
          })
        }
        return;
      }
    }
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    this.to(room).emit('user:left', {
      name: socket.name
    });
  });
};
