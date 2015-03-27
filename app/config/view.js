/**
 * view.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

var engines = require('consolidate');

var config = {

    defaultEngine: 'ejs',

    engines: {
        'ejs': engines.ejs
    }
};

module.exports = config;