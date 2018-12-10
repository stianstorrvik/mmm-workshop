# mmmVoice

mmmVoice er bygget på MMM-Voice-Control, og bruker annyang for å sende voice commands til moduler.

Følgende er hentet direkte fra MMM-Voice-Control README.md, og er relevant for denne modulen:


This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror) to allow use of voice commands. Currently it is a very minimal module with support only for [MMM-Dublin-Bus](https://github.com/dr4ke616/MMM-Dublin-Bus)

## Installation
1. Navigate into your MagicMirror's `modules` folder
2. Execute `git clone https://github.com/dr4ke616/MMM-Voice-Control.git`
3. Execute `npm install` in that folder to download external libraries
4. Navigate back to MagicMirror's root directory
5. Start magic mirror

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
    {
        module: 'mmmVoice',
        position: 'lower_third', // If you want to see the prompt and recognised speech, omit otherwise
        config: {
            // See 'Configuration options' for more information.
        }
    }
]
```

## Ekstra kommandoer:

- Legg til kommandoer i commands.js som skal broadcaste notification til de andre modulene via MagicMirrors notification system. Definer hva modulene skal gjøre i mottakende modul.
- Kommandoer defineres ved 'tekst' og kan også inneholde variabler som 'tekst *variabel' for å ta vare på speech-to-text stringen som sendes inn, f.eks som argumenter.
- Se hide/show modules kommandoene for å se et praktisk eksempel der nøkkelord og variabel sendes til modulen MODULE_TOGGLE, som har ansvar for å skjule/vise moduler.
- Moduler gjenkjennes ved hjelp av forhåndsdefinerte parametere i mmmVoice.js for å knytte modulnavn opp mot nøkkelord som gjenkjennes av annyang.
