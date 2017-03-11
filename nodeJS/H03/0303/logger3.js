// logger3.js - require een andere module
var time = require('./getTime');
module.exports = function () {
    this.log = function (msg) {
        console.log(time() + ', log >>' + msg);
    };
    return this;
};
