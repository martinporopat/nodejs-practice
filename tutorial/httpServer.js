// load http module
var http = require('http');
// create http server
http.createServer(function (req, res) {
    
    res.writeHead(200, {'content-type': 'text/plain'});
    
    res.end("Hello, Lucia, how are you!\n");
    
}).listen(2368);

console.log('Server running on 2368/');

