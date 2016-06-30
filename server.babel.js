import express from 'express';
import { Server } from 'http';
import socketIo from 'socket.io';

const app = express();
const http = Server(app);
const io = socketIo(http);

let messageHistory = [];

app.use('/', express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('getMessageHistory', messageHistory);

  socket.on('sendMessage', message => {
  	messageHistory.push(message);
  	io.emit('addMessage', message);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT || 3000);
