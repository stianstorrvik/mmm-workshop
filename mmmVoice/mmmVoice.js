Module.register("mmmVoice", {

    defaults: {
        registeredCommands: [],
        moduler: [
            {
                'module': 'webstep/mmmJavazone',
                'qualifiers': ['javazone', 'neste track', 'next track', 'schedule', 'talks']
            },
            {
                'module': 'clock',
                'qualifiers': ['klokke', 'klokka', 'klokken']
            },
            {
                'module': 'compliments',
                'qualifiers': ['compliments']
            },
            {
                'module': 'webstep/mmmGuessAge',
                'qualifiers': ['age', 'alder']
            },
            {
                'module': 'webstep/mmmInnlogget',
                'qualifiers': ['innlogget', 'bruker', 'current user', 'user']
            },
            {
                'module': 'webstep/mmmYoutube',
                'qualifiers': ['youtube', 'YouTube']
            },
            {
                'module': 'webstep/mmmWebstepPeople',
                'qualifiers': ['webstep', 'websteppere', 'ansatte']
            },
            {
                'module': 'MMM-google-route',
                'qualifiers': ['trafikk', 'traffikk', 'traffic', 'map', 'kart']
            },
            {
                'module': 'MMM-DailyDilbert',
                'qualifiers': ['daily dilbert', 'dilbert', 'gilbert', 'comic']
            },
            {
                'module': 'MMM-Fortune',
                'qualifiers': ['fortune', 'fortune cookie']
            },
            {
                'module': 'MMM-SoccerLivescore',
                'qualifiers': ['fotball', 'fotball-resultater', 'resultater', 'livescore', 'score']
            },
            {
                'module': 'webstep/mmmLogo',
                'qualifiers': ['logo']
            },
            {
                'module': 'MMM-YrNow',
                'qualifiers': ['vær', 'været', 'weather']
            },
            {
                'module': 'newsfeed',
                'qualifiers': ['nyheter', 'rssfeed', 'rss feed']
            },
            {
                'module': 'MMM-GoogleMapsTraffic',
                'qualifiers': ['kart', 'trafikk', 'traffic']
            }
        ],

        language: 'en-EN',

        view: {
            feedback: 'This is initial text'
        }
    },

    /**
     * Tar imot input, og forsøker å matche input string mot ordene definert som qualifiers for den gjeldende modulen.
     */
    getModuleName: function(casedInput) {
        const input = casedInput.toLowerCase();
        for (var i = 0; i <this.defaults.moduler.length; i++) {
            if (this.defaults.moduler[i].qualifiers.indexOf(input) > -1) {
                return this.defaults.moduler[i].module;
            }
        }

        return input;
    },

    registerCommand: function(input) {
        this.config.registeredCommand = input;
        this.updateDom();

        setTimeout(function() {
            this.config.registeredCommand = null;
            this.updateDom();
        }.bind(this), 5000);

    },
    start: function () {
        annyang.setLanguage(this.config.language);
        annyang.addCommands(initCommands(this));

        console.log("Starting annyang");
        annyang.debug(true);
        annyang.start({ autoRestart: true, continuous: false });
    },

    getTemplate: function () {
        return "mmmVoice.njk";
    },

    getTemplateData: function () {
        return this.config
    },

    getScripts: function () {
        return [this.file('node_modules/annyang/dist/annyang.js'), 'commands.js'];
    },

    getStyles: function () {
        return [this.file('mmmVoice.css')];
    }
});
