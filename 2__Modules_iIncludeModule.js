// ----------------------------------------Include Your Own Module---------------------------------------------------------
// Now you can include and use the module in any of your Node.js files.

var http = require('http');
var dt = require('./2_Modules');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);