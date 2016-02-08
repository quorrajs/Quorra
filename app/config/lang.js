
var config = {
    // setup some locales - other locales default to en silently
    locales:['en', 'de'],

    // fall back from Dutch to German
    fallbacks:{'nl': 'de'},

    /*
     |--------------------------------------------------------------------------
     | Application Locale Configuration
     |--------------------------------------------------------------------------
     |
     | The application locale determines the default locale that will be used
     | by the translation service. You are free to set this value
     | to any of the locales which will be supported by the application.
     |
     */
    defaultLocale: 'de',

    // whether to write new locale information to disk - defaults to true
    updateFiles: true,

    // enable object notation
    objectNotation: false
};

module.exports = config;