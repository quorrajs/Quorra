/**
 * global.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */
var app = require('positron');

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

app.error(function(error, code, request, response, next)
{
    // log error
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

app.down(function(req, res, next){
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

require(app.path.app + '/filters');