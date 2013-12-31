var fs = require('fs');
var io = require('socket.io').listen(8080);
var watch = require('node-watch');

/**
 * List of files to observe changes in, with IO event name and file name
 */
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

/**
 * Send contents of a JSON file to all connected clients
 *
 * @argument {String} eventName Name of broadcast event
 * @argument {String} fileName  Name of file to send
 */
function broadcastJsonFile(eventName, fileName) {
  fs.readFile(fileName, 'utf8', function(error, data) {
    if (error == null) {
      io.sockets.emit(eventName, JSON.parse(data));
    }
  });
}

/**
 * Send contents of a JSON file to one client
 *
 * @argument {io.Socket} socket    Socket to send to
 * @argument {String}    eventName Name of broadcast event
 * @argument {String}    fileName  Name of file to send
 */
function sendJsonFile(socket, eventName, fileName) {
  fs.readFile(fileName, 'utf8', function(error, data) {
    if (error == null) {
      socket.emit(eventName, JSON.parse(data));
    }
  });
}

/**
 * Send latest data to client on connect
 */
io.sockets.on('connection', function(socket) {
  files.forEach(function(file) {
    sendJsonFile(socket, file.event, file.name);
  });
});

/**
 * Set up file watchers on start-up
 */
files.forEach(function(file) {
  watch(file.name, function() {
    broadcastJsonFile(file.event, file.name);
  });
});
