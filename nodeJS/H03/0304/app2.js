// app.js - laad de logger en test de drie functies
var logger = require('./logger2');
var myLog = logger();
myLog.log('Algemene melding');
myLog.info('Dit is een informatieve melding');
myLog.error('Dit is een foutmelding');
