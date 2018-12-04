Module.register('mmmWorkshop',  {
    defaults: {
        contentForTwin: ['katt', 'hund', 'undulat', 'bie', 'marsvin', 'skilpadde'],
        view: {
            text: 'Workshop2'
        }
    },

    start: function () {
        Log.info(`Module ${this.name} loaded. Rendering`);

        this.sendSocketNotification("WORKSHOP");
    },

    socketNotificationReceived: function(notification, payload) {
        Log.info("Socket notification received: " + notification);
        if (notification === 'WORKSHOP_UPDATE') {
            this.defaults.view.sessions = payload;
            this.updateDom();
        }
    },

    getTemplate: function () {
        return 'template/mmmWorkshop3.html';
    },

    getTemplateData: function () {
        return this.config.view.sessions;
    }
});