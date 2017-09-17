var path = require('path');
var config = {

    /*
     |--------------------------------------------------------------------------
     | Application Debug Mode
     |--------------------------------------------------------------------------
     |
     | When your application is in debug mode, detailed error messages with
     | stack traces will be shown on every error that occurs within your
     | application. If disabled, a simple generic error page is shown.
     |
     */

    'debug': true,

    /*
     |--------------------------------------------------------------------------
     | Application URL
     |--------------------------------------------------------------------------
     |
     | Here you may specify your application url. This will be used by url
     | generator methods.
     |
     */

    'url': 'http://localhost:3000',


    /*
     |--------------------------------------------------------------------------
     | Application port
     |--------------------------------------------------------------------------
     |
     | The port setting determines which TCP port your app will be deployed on.
     | If you ignore this configuration Quorra uses port 3000 by default.
     |
     */

    'port': 3000,

    /*
     |--------------------------------------------------------------------------
     | Application Timezone
     |--------------------------------------------------------------------------
     |
     | Here you may specify the default timezone for your application, which
     | will be used by the JS date functions. We have gone
     | ahead and set this to a sensible default for you out of the box.
     |
     */

    'timezone': 'UTC',

    /*
     |--------------------------------------------------------------------------
     | Encryption Key
     |--------------------------------------------------------------------------
     |
     | This key is used by the Positron encrypter service and should be set
     | to a random, 32 character string, otherwise these encrypted strings
     | will not be safe. Please do this before deploying an application!
     |
     */

    'key': '768cb1e7a09d0a57a07ae6a36354514d',

    /*
     |--------------------------------------------------------------------------
     | Autoloaded Service Providers
     |--------------------------------------------------------------------------
     |
     | The service providers listed here will be automatically loaded on the
     | server lift and will attach the service provided, to the application
     | instance. Feel free to add your own services to this array to grant
     | expanded functionality to your applications.
     |
     */

    'providers': [
        /*
         * Quorra Framework Service Providers.
         */
        'positron/exception/ExceptionServiceProvider',
        'positron/log/LogServiceProvider',
        'positron/database/ModelServiceProvider',
        'positron/auth/AuthServiceProvider',
        'positron/routing/RoutingServiceProvider',
        'positron/routing/ControllerServiceProvider',
        'positron/view/ViewServiceProvider',
        'positron/encryption/EncryptionServiceProvider',
        'positron/cookie/CookieServiceProvider',
        'positron/session/SessionServiceProvider',
        'positron/translation/TranslationServiceProvider',
        'positron/mail/MailServiceProvider',
        'positron/hashing/HashServiceProvider',

        /*
         * Application Service Providers.
         */

        'app/providers/AuthServiceProvider'
    ],

    /*
     |--------------------------------------------------------------------------
     | Long Stack Trace
     |--------------------------------------------------------------------------
     |
     | A common problem when debugging event-driven JavaScript is stack traces
     | are limited to a single "event", so it's difficult to trace the code path
     | that caused an error. Quorra solves this by the use of longjohn module.
     |
     | It is not recommended to use this feature in production environments.
     | The data collection puts a lot of strain on V8's garbage collector
     | and can greatly slow down heavily-loaded applications. Hence by default
     | Quorra disables long stack trace in production environment even if you
     | enable it here.
     |
     */

    'longStackTrace': false,

    /*
     |--------------------------------------------------------------------------
     | Attribution text
     |--------------------------------------------------------------------------
     |
     | If true, enables the "X-Powered-By: Quorra" HTTP header.
     |
     */

    'attributionText': true,

    /*
     |--------------------------------------------------------------------------
     | Aliases
     |--------------------------------------------------------------------------
     |
     | You can define aliases to Quorra framework(Positron module) internal
     | classes/modules. To require a internal module now you can just pass the
     | alias name instead of full module namespace to the global use method.
     |
     | For example, you can do:
     |
     | var ServiceProvider =  use('ServiceProvider') ;
     |
     | instead of
     |
     | var ServiceProvider = use('positron/support/ServiceProvider');
     |
     */

    'aliases': {
        'ServiceProvider': 'positron/support/ServiceProvider',
        'AuthServiceProvider': 'positron/foundation/support/providers/AuthServiceProvider',
        'BaseUser': 'positron/foundation/auth/user'
    }

};

module.exports = config;