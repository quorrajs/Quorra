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
App.before(function (request, result, next) {
    next();
});

/*
 |--------------------------------------------------------------------------
 | Authentication Filters
 |--------------------------------------------------------------------------
 |
 | The following filters are used to verify that the user of the current
 | session is logged into this application. The "basic" filter easily
 | integrates HTTP Basic authentication for quick, simple checking.
 |
 */

Route.filter('auth', function (request, response, next) {
    request.auth.guest(function (result) {
        if (result) {
            if (request.xhr) {
                response.abort(401);
            } else {
                response.rediret('/login');
            }
        } else {
            next();
        }
    });
});

Route.filter('auth.basic', function (request, response, next) {
    req.auth.basic(function (result) {
        if (result) {
            next();
        } else {
            var error = new Error('Invalid credentials');

            error.status = 401;
            response.setHeader('WWW-Authenticate', 'Basic');
            response.abort(error);
        }
    });
});

/*
 |--------------------------------------------------------------------------
 | Guest Filter
 |--------------------------------------------------------------------------
 |
 | The "guest" filter is the counterpart of the authentication filters as
 | it simply checks that the current user is not logged in. A redirect
 | response will be issued if they are, which you may freely change.
 |
 */

Route.filter('guest', function (request, response, next) {
    request.auth.check(function (result) {
        if (result) {
            response.redirect('/');
        } else {
            next();
        }
    })
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

Route.filter('csrf', function (request, response, next) {
    if (request.session.getToken() !== request.input.get('_token')) {
        throw new Error('Token mismatch');
    } else {
        next();
    }
});