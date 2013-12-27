var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.emit('ticker', { last: 1234 });
});
