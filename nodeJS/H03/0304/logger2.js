// logger.js - exporteer verschillende algemene logging-methoden
var moment = require("moment");
module.exports = function () {
    moment.locale('nl');
    this.log = function (msg) {
        console.log(moment().format('lll') + ', >> Log: ' + msg);
    };
    this.info = function (msg) {
        console.info(moment().format('lll') + ', >> Lnfo: ' + msg);
    };
    this.error = function (msg) {
        console.error(moment().format('lll') + ', >> Error: ' + msg);
    };
    return this;
};
