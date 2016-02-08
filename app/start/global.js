
var App = require('positron');
var Log = App.log;

var path = require('path');

/*
 |--------------------------------------------------------------------------
 | Application Logger
 |--------------------------------------------------------------------------
 |
 | Here we will configure the logger setup for the application which
 | is built on top of the wonderful Winston library. By default we will
 | build a basic log file setup which creates a single file for logs.
 |
 */

Log.useFiles({filename: path.join(App.path.storage, 'logs/quorra.log'), level: 'silly'});

/*
 |--------------------------------------------------------------------------
 | Application Error Handler
 |--------------------------------------------------------------------------
 |
 | Here you may handle any errors that occur in your application, including
 | logging them or displaying custom views for specific errors. You may
 | even register several error handlers to handle different types of
 | exceptions. If next callback is executed, it will end up executing default
 | error handler which shows the default error page and includes detailed stack trace
 | during debug.
 |
 */

App.error(function(error, code, request, response, next)
{
    Log.error(error);
    next();
});

/*
 |--------------------------------------------------------------------------
 | Maintenance Mode Handler
 |--------------------------------------------------------------------------
 |
 | The "down" Quorra command gives you the ability to put an application
 | into maintenance mode. Here, you will define what is displayed back
 | to the user if maintenance mode is in effect for the application.
 |
 */

App.down(function(req, res, next){
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end("Be right back!");
});

/*
 |--------------------------------------------------------------------------
 | Require The Filters File
 |--------------------------------------------------------------------------
 |
 | Next we will load the filters file for the application. This gives us
 | a nice separate location to store our route and application filter
 | definitions instead of putting them all in the main routes file.
 |
 */

require(path.join(App.path.app, 'filters'));