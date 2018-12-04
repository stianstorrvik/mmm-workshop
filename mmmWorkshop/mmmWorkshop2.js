Module.register('mmmWorkshop',  {
    defaults: {
        contentForTwin: ['katt', 'hund', 'undulat', 'bie', 'marsvin', 'skilpadde'],
        view: {
            text: 'Workshop2'
        }
    },

    start: function () {
        Log.info(`Module ${this.name} loaded. Rendering`);

        this.startUpdateToggle();
    },

    startUpdateToggle: function() {
        setInterval(function() {

            var randomInt = Math.floor(Math.random() * Math.floor(this.defaults.contentForTwin.length));
            var contentToSend = this.defaults.contentForTwin[randomInt];
            this.sendNotification('UPDATE_WORKSHOP_TWIN', {content: contentToSend});
        }.bind(this), 2000)
    },

    getTemplate: function () {
        return 'template/mmmWorkshop2.html';
    },

    getTemplateData: function () {
        return this.config.view;
    }
});