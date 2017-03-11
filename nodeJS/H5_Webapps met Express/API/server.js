/**
 * Created by switch87 on 20/02/17.
 */
var express = require('express');
var app = express();

// Body-parser toevoegen en configureren
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoder({
    extended: true
}));

// Haal de gegevens binnen de app
var auteurs = require('./auteurs.json');
var boeken = require('./boeken.json');


// Werken met middleware

// met volgende functie wordt elke opgevraagde url in de console weergegeven
app.use(function (req, res, next) {
    console.log('Requested file: '.req.url);
    next();
});

app.get('/', function (req, res) {
    console.log('Homepage opgevraagd: ', new date());
    next()
});
app.get('/boeken', function (req, res) {

});


app.get('/api/', function (req, res) {
    var msg = '<h1>Express API</h1>';
    msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
    msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
    res.send(msg);
});

app.get('/api/auteurs', function (req, res) {
    res.json(auteurs);
});

app.get('/api/boeken', function (req, res) {
    res.json(boeken);
});

app.get('/api/boeken/:id', function (req, res) {
    var id = req.params.id;
    var gezochtBoek;
    boeken.forEach(function (boek) {
        if(boek.id === parseInt(id)){
            gezochtBoek = boek;
        }
    });
    res.json(gezochtBoek);
});


app.listen(3000);
console.log('Express-server gestart op http://localhost:3000');