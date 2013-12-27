var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.emit('ticker', {
    usdkrw: 1058.398346,
    usdlast: 797.00000,
    usdhigh: 829.80000,
    usdlow: 733.00000,
    usdvwap: 791.82502
  });
});
