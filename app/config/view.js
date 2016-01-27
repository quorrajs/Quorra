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

    /*
     |--------------------------------------------------------------------------
     | Default view engine
     |--------------------------------------------------------------------------
     |
     | Here you may specify which of the engines below you wish to use as your
     | default engine for your views. ie, when you don't specify extension for
     | view file name in `res.view` method Quorra will assume it's gonna be
     | a view file with default template engine type.
     |
     */

    'defaultEngine': 'jade',

    /*
     |--------------------------------------------------------------------------
     | View engines
     |--------------------------------------------------------------------------
     |
     | Here you can list the template engines supported by the npm consolidate
     | module which you want to support in your application.
     |
     | Quorra comes pre-installed with jade template engine by default. Don't
     | forget to install any other template engine with `npm install` command
     | when use here.
     |
     | see https://github.com/tj/consolidate.js#supported-template-engines for
     | all the supported template engine.
     |
     */
    'engines': {
        'jade': engines.jade
    }
};

module.exports = config;