var util = require('util');
var events = require('events');

function apiDelete () {}
util.inherits(apiDelete, events.EventEmitter);

apiDelete.prototype.command = function (apiUrl, deleteHeaders, deleteAuth, success) {
    var request = require("request");

    var options = {
        uri: apiUrl,
        method: "DELETE",
    };

    if (deleteHeaders !== undefined) {
        options.headers = deleteHeaders;
    }
    if (deleteAuth !== undefined) {
        options.auth = deleteAuth;
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

module.exports = apiDelete;
