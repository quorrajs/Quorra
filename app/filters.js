/**
 * filters.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */
var app = require('positron');

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
app.before(function(request, result, next) {
    next();
});
