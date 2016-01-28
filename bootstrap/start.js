/**
 * start.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

var app = require('positron');

function start(CB){
    /*
     |--------------------------------------------------------------------------
     | Detect The Application Environment
     |--------------------------------------------------------------------------
     |
     | Quorra takes a dead simple approach to your application environments
     | so you can just specify a machine name for the host that matches a
     | given environment, then we will automatically detect it for you.
     |
     */
    var env = app.detectEnvironment({

        local: ['clu']

    });

    /*
     |--------------------------------------------------------------------------
     | Bind Paths
     |--------------------------------------------------------------------------
     |
     | Here we are binding the paths configured in paths.js to the app. You
     | should not be changing these here. If you need to change these you
     | may do so within the paths.js file and they will be bound here.
     |
     */
    app.bindInstallPaths(require('./paths'));

    /*
     |--------------------------------------------------------------------------
     | Load The Application
     |--------------------------------------------------------------------------
     |
     | Here we will load this Positron application.
     |
     */

    app.load(CB, env);
}

module.exports = start;