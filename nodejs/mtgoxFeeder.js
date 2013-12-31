var io = require('socket.io-client');
var fs = require('fs');

var socket = io.connect('http://socketio.mtgox.com/mtgox');
console.log('Connecting...');

var MTGOX_CHANNELS = {
  trade: 'dbf1dee9-4f2e-4a08-8cb7-748919a71b21',
  depth: '24e67e0d-1cad-4cc0-9e7a-f8523ef460fe',
  ticker: 'd5f06780-30a8-4a48-a2f8-7ed181b4a13f'
}

var mtgoxPricesFile = 'mtgoxPrices.json';
var previousLast = 0;

socket.on('connect', function() {
  socket.emit('message', {
    op: 'unsubscribe', 
    channel: MTGOX_CHANNELS.trade
  });
  socket.emit('message', {
    op: 'unsubscribe', 
    channel: MTGOX_CHANNELS.depth
  });
  console.log('Connected. Waiting for ticker data...');
});

socket.on('message', function(data) {
  if (data.ticker != undefined) {
    var ticker = data.ticker;
    console.log('tick: ' + ticker.last.value);
    if (previousLast != ticker.last.value) {
      previousLast = ticker.last.value;
      var json = {
        "usdkrw": 1055,
        "usdlast": ticker.last.value,
        "usdhigh": ticker.high.value,
        "usdlow": ticker.low.value,
        "usdvwap": ticker.vwap.value
      };
      fs.writeFile(mtgoxPricesFile, json, function(error) {
        if (error) {
          console.log('Error writing JSON file: ' + error);  
        } else {
          console.log('Written to ' + mtgoxPricesFile + ':');  
          console.log(json);
        }
      });
    }
  }
});
