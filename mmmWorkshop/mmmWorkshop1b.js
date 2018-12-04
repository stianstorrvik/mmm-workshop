Module.register('mmmWorkshop',  {
    defaults: {
        view: {
            text: 'Workshop text with template'
        }
    },
    
    getTemplate: function () {
        return 'template/mmmWorkshop1b.html';
    },

    getTemplateData: function () {
        return this.config.view;
    }
});