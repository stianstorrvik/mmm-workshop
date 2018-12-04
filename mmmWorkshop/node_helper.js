var NodeHelper = require("node_helper");
const https = require('https');

const JAVAZONE_URL = 'https://sleepingpill.javazone.no/public/allSessions/javazone_2018';

module.exports = NodeHelper.create({

    // Subclass start method.
    start: function () {
    },

    // Subclass socketNotificationReceived received.
    socketNotificationReceived: function (notification, payload) {
        console.log("helper received: " + notification)
        if (notification === 'WORKSHOP') {
            this.callHttp();
        }
    },

    callHttp: function () {
        console.log("callHttp");
        https.get(JAVAZONE_URL, function (resp) {
            var data = '';

            resp.on('data', function (chunk) {
                data += chunk;
            });

            resp.on('end', function () {
                console.log(data);
                this.sendSocketNotification("WORKSHOP_UPDATE", JSON.parse(data));
            }.bind(this))
        }.bind(this)).on('error', function (err) {
            Log.error(err.message);
        })
    }
});

