// logger.js - exporteer verschillende algemene logging-methoden
var moment = require("moment"),
    colors = require("colors");
module.exports = function () {
    moment.locale('nl');
    this.log = function (msg) {
        var prefixString = moment().format('lll') + ', >> Log: ';
        console.log(prefixString.green + msg);
    };
    this.info = function (msg) {
        var prefixString = moment().format('lll') + ', >> Info: ';
        console.info(prefixString.yellow + msg);
    };
    this.error = function (msg) {
        var prefixString = moment().format('lll') + ', >> Error: ';
        console.error(prefixString.red + msg);
    };
    return this;
};
