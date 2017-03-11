// logger.js - exporteer verschillende algemene logging-methoden
module.exports = function () {
    this.log = function (msg) {
        console.log('>> Log: ' + msg);
    };
    this.info = function (msg) {
        console.info('>> Info: ' + msg);
    };
    this.error = function (msg) {
        console.error('>> Error: ' + msg);
    };
    return this;
};
