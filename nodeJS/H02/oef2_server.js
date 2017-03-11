var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write(JSON.stringify(
        {
            "voornaam": "Peter",
            "achternaam": "Kasselaar",
            "email": "info@kasselaar.com"
        }
    ));
    response.end();
});
server.listen(8080);
console.log('Server gestart op http://84.195.153.246:8080');
