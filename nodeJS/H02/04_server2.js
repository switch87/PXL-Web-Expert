var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>De grvraagde URL: ' + url + '</h1>');
    response.end();
});
server.listen(8080);
console.log('Server gestart op http://84.195.153.246:8080');
