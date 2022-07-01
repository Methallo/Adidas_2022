var util = require('util');
var events = require('events');

function apiPut () {}
util.inherits(apiPut, events.EventEmitter);

apiPut.prototype.command = function (apiUrl, updateBody, updateHeaders, updateAuth, success) {
    var request = require("request");

    var options = {
        uri: apiUrl,
        method: "PUT",
        json: updateBody
    };

    if (updateHeaders !== undefined) {
        options.headers = updateHeaders;
    }
    if (updateAuth !== undefined) {
        options.auth = updateAuth;
    }

    request(options, function (error, response) {
        if (error) {
            console.log(error);
            return;
        }

        success(response);
        this.emit('complete');
    }.bind(this));
};

module.exports = apiPut;
