import express from 'express';
import { Server } from 'http';
import socketIo from 'socket.io';

const app = express();
const http = Server(app);
const io = socketIo(http);

app.use('/', express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('sendMessage', message => {
  	console.log('Message Received: ' + message);
  	io.emit('addMessage', message);
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT || 3000);
