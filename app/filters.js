/**
 * filters.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */
var App = require('positron');
var Route = App.router;

/*
 |--------------------------------------------------------------------------
 | Application & Route Filters
 |--------------------------------------------------------------------------
 |
 | Below you will find the "before" event for the application
 | which may be used to do any work before a request into your
 | application. Here you may also register your custom route filters.
 |
 */
App.before(function(request, result, next) {
    next();
});

Route.filter('auth', function(request, response, next, value, value1) {
    //console.log(value);
    //console.log(value1);
    next();
});
