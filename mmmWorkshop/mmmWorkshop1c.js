Module.register('mmmWorkshop',  {
    defaults: {
        view: {
            text: 'Workshop text with css'
        }
    },
    
    getTemplate: function () {
        return 'template/mmmWorkshop1c.html';
    },
    
    getStyles: function () {
        return [this.file('styles/mmmWorkshop1c.css')];
    },

    getTemplateData: function () {
        return this.config.view;
    }
});
