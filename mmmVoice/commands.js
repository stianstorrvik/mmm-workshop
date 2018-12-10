function initCommands(scope) {
    const commands = [
        {
            id: 'hideModule',
            keywords: ['skjul', 'gjem', 'fjern', 'ta bort', 'hjem', 'stop', 'stopp', 'hide'],
            action: function(input) {
                var moduleName = scope.getModuleName(input);
                scope.sendNotification("MODULE_TOGGLE", {hide: [moduleName], show: [], toggle:[]});
            }
        },
        {
            id: 'showModule',
            keywords: ['vis meg', 'vis', 'hvis meg', 'hvis', 'start', 'show'],
            action: function(input) {
                var moduleName = scope.getModuleName(input);
                scope.sendNotification("MODULE_TOGGLE", {hide: [], show: [moduleName], toggle:[]});
            }
        },
        {
            id: 'guessAge',
            keywords: ['guess my age', 'how old am i', 'hva er min alder', 'gjett min alder', 'hvor gammel er jeg', 'gjett alder', 'hvor ung er jeg'],
            action: function(input) {
                scope.sendNotification("GUESS_AGE");
            }
        },
        {
            id: 'youtube',
            keywords: ['youtube'],
            action: function(input) {
                if (input) {
                    scope.sendNotification("YOUTUBE_SEARCH", input);
                }
            }
        },
        {
            id: 'updateYr',
            keywords: ['været hos', 'været på', 'været i', 'vær på', 'vær i', 'været', 'vær'],
            action: function(input) {
                scope.sendNotification("UPDATE_YR", input);
            }
        }
    ];

    var thumbsUp = function() {
        scope.sendNotification("REACTION", {reactionPositive: true});
    };

    var thumbsDown = function() {
        scope.sendNotification("REACTION", {reactionPositive: false});
    };
    var wildcard = function(casedInput) {
        const input = casedInput.toLowerCase();
        scope.registerCommand(input);
        for (var i = 0; i < commands.length; i++) {
            const keywords = commands[i].keywords;

            for (var j = 0; j < keywords.length; j++) {
                if (new RegExp(keywords[j]).test(input)) {
                    var afterKeywordIndex = input.indexOf(keywords[j]) + keywords[j].length;
                    const actionInput =  input.substring(afterKeywordIndex, input.length).trim();
                    commands[i].action(actionInput);
                    return;
                }
            }
        }
    };

    
    return {
        '*wildcard': wildcard
    };
}