var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {

    if (request.method != 'GET')
        return response.end('error');

    response.writeHead(200, {'content-type': 'application:json'})

    urlParsed = url.parse(request.url, true);

    if (urlParsed.pathname == '/api/parsetime') {
        date = new Date(urlParsed.query.iso);

        response.end(
                JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }));
    }
    if (urlParsed.pathname == '/api/unixtime') {

        response.end(
                JSON.stringify({
                    unixtime: new Date(urlParsed.query.iso).getTime()
                }));
    }
})

server.listen(process.argv[2]);