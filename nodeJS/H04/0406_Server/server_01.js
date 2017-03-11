// Een eenvoudige webserver.
// 0. initialisatie en variabelen
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    root = __dirname + '/public/'; // magic variable

// 1. Maak de webserver
var server = http.createServer(function (req, res) {
    // 1a. Check of de root wordt opgevraagd.
    var fileName = '';
    var url = req.url;
    if (url === '/') {
        url = "index.html"; // rederect bij geen bestandsnaam opgegeven
    }
    fileName = root + url;
    console.log('Gevraagde bestand: ', path.basename(fileName));

    // 1b. Check of bestand bestaat.
    fs.exists(fileName, function (exists) {
        if (exists) {
            serveFile(fileName);
        } else {
            filename = root + '404.html';
            serve404(filename);
        }
    });

    // 1c. Serveer gevraagde bestanden.
    function serveFile(requestFile) {
        res.writeHead(200, {'Content-Type': mime.lookup(requestFile)});
        var stream = fs.createReadStream(requestFile);
        stream.on('data', function (chunk) {
            res.write(chunk);
        });
        stream.on('end', function () {
            res.end();
        });
        stream.on('error', function (err) {
            console.log('error: ' + err);
        });
    }

    function serve404(requestFile) {
        res.writeHead(404, {'Content-Type': mime.lookup(requestFile)});
        fs.readFile(requestFile, 'utf8', function (err, data) {
            if (err) {
                console.log('Error: ', err);
            } else {
                res.end(data);
            }
        });
    }
});

// 2. Start de server
server.listen(3000);
console.log('server gestart op http://84.195.153.246:3000');
