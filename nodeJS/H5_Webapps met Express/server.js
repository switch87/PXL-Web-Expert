/**
 * Created by switch87 on 20/02/17.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World - dit is Express!');
});;

// JSON retout zenden
var persoon = {
    voornaam: "peter",
    achternaam: "Kassenaar"
};
app.get('/json', function (req, res) {
    res.json(persoon);
});

app.listen(3000);
console.log('Express-server gestart op http://localhost:3000');