var d = new Date();
var net = require('net');
//YYYY-MM-DD hh:mm

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var server = net.createServer(function (socket) {
    //handle socket
    var fdate = d.getFullYear() + '-' +
            addZero(d.getMonth()+1) + '-' +
            addZero(d.getDate()) + ' ' +
            addZero(d.getHours()) + ':' +
            addZero(d.getMinutes());
    socket.write(fdate + '\n');
    socket.end();
})

server.listen(process.argv[2])