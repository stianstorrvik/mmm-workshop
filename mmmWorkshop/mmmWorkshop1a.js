Module.register('mmmWorkshop',  {
    defaults: {
        view: {
            text: 'Workshop text with DOM builder'
        }
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        
        var text = document.createElement("p");
        text.className = "bright";
        text.innerHTML = this.config.view.text;
        wrapper.appendChild(text);
        
        return wrapper;
    },
});