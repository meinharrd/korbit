var fs = require('fs');
var io = require('socket.io').listen(8080);
var watch = require('node-watch');

var files = [
  {
    event: 'korbit price update',
    name: 'korbitPrices.json'
  },
  {
    event: 'mtgox price update',
    name: 'mtgoxPrices.json'
  }
];

function broadcastFile(socket, eventName, filename) {
  fs.readFile(filename, 'utf8', function(error, data) {
    if (error == null) {
      socket.emit(eventName, JSON.parse(data));
    }
  });
}

io.sockets.on('connection', function(socket) {
  files.forEach(function(file) {
    broadcastFile(socket, file.event, file.name);
    watch(file.name, function() {
      broadcastFile(socket, file.event, file.name);
    });
  });
});
