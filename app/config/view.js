/**
 * view.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

var engines = require('consolidate');
var path = require('path');

var config = {

    /*
     |--------------------------------------------------------------------------
     | View Storage Paths
     |--------------------------------------------------------------------------
     |
     | Most templating systems load templates from disk. Here you may specify
     | an array of paths that should be checked for your views. Of course
     | the usual Quorra view path has already been registered for you.
     |
     */

    'paths': [
        path.resolve(__dirname, '../../resources/views')
    ],

    'cache': false,

    'defaultEngine': 'jade',

    'engines': {
        'jade': engines.jade
    }
};

module.exports = config;