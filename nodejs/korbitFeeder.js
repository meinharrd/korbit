var fs = require('fs');
var cheerio = require('cheerio');
var https = require("https");

var korbitPricesFile = 'korbitPrices.json';
var previousLast = 0;

function scrapeKorbit() {
  var html = download('https://www.korbit.co.kr/', function(data) {
    if (data) {
      $ = cheerio.load(data);

      // Get last KRW price from page, using a scraping one-liner from hell >:)
      var krwLast = $('small.usdkrw span').eq(1).html().split(' ')[1].slice(0, -1).replace(',','');

      if (krwLast != previousLast) {
        var json = {
          "krwlast": krwLast
        };
        writeJson(korbitPricesFile, json);
        previousLast = krwLast;
      }
    }
    
    // Scrape again after 1 minute
    setTimeout(scrapeKorbit, 5000);
  });
}

function writeJson(fileName, json) {
  fs.writeFile(fileName, JSON.stringify(json), function(error) {
    if (error) {
      console.log('Error writing JSON file: ' + error);  
    } else {
      console.log('Written to ' + fileName + ':');  
      console.log(json);
    }
  });
}

function download(url, callback) {
  https.get(url, function(resource) {
    var data = '';
    resource.on('data', function (chunk) {
      data += chunk;
    });
    resource.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

// Initiate loop
scrapeKorbit();
