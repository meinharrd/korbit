var fs = require('fs');
var io = require('socket.io').listen(8080);
var watch = require('node-watch');

var mtgoxPricesFile = 'mtgoxPrices.json';

function broadcastFile(socket, filename) {
  fs.readFile(filename, 'utf8', function(error, data) {
    if (error) {
      console.log(error);
    } else {
      socket.emit('price update', JSON.parse(data));
    }
  });
}

io.sockets.on('connection', function(socket) {
  broadcastFile(socket, mtgoxPricesFile);
  watch(mtgoxPricesFile, function(filename) {
    broadcastFile(socket, filename);
  });
});
