var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {

    if (request.method != 'POST')
        return response.end('error');

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
})

console.log('escuchando... puerto ' + process.argv[2] );
server.listen(process.argv[2]);