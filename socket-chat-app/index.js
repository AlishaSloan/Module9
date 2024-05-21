const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
const userName = socket.handshake.query.nickname || "Anonymous";

io.emit('chat message',`${userName} has connected`);
socket.on('chat message', (msg) => {
io.emit('chat message',`${userName}: ${msg}`);

});

socket.on('disconnect', () => {
io.emit('chat message',`${userName} has disconnected`);

});

});

server.listen(3000, () => {
console.log('listening on *:3000');
});