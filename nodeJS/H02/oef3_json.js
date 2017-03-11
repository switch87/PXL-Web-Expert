var obj1 =
{
    "voornaam": "Peter",
    "achternaam": "Kasselaar",
    "email": "info@kasselaar.com"
};
var obj2 =
{
    "bol": "ooo",
    "bim": "boo"
};
var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    response.writeHead(200, {'Content-Type': 'text/json'});
    if (url === "/hallo")response.write(JSON.stringify(obj1));
    else response.write(JSON.stringify(obj2));
    response.end();
});
server.listen(8080);
console.log('Server gestart op http://84.195.153.246:8080');
