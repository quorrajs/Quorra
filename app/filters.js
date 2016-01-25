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

/*
 |--------------------------------------------------------------------------
 | CSRF Protection Filter
 |--------------------------------------------------------------------------
 |
 | The CSRF filter is responsible for protecting your application against
 | cross-site request forgery attacks. If this special token in a user
 | session does not match the one given in this request, we'll bail.
 |
 */

Route.filter('csrf', function(request, response, next) {
    if (App.session.getToken() !== request.input.get('_token'))
    {
        throw new Error('Token mismatch');
    } else {
        next();
    }
});