/**
 * lang.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2016, Harish Anchu. All rights reserved.
 * @license Licensed under MIT
 */

var config = {
    // setup some locales - other locales default to en silently
    locales:['en', 'de'],

    // fall back from Dutch to German
    fallbacks:{'nl': 'de'},

    // you may alter a site wide default locale
    defaultLocale: 'de',

    // whether to write new locale information to disk - defaults to true
    updateFiles: true,

    // enable object notation
    objectNotation: false
};

module.exports = config;