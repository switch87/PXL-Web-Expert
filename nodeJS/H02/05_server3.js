var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
    console.log(request.headers);
});
server.listen(8080);
console.log('Server gestart op http://84.195.153.246:8080');
