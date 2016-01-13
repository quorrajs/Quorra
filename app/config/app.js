/**
 * app.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

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
     |
     */

    'url': 'http://localhost:3000',

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

    'key': '3duyXY4Yzd586UlJ21kzYuqaIQiKiVIH',

    'trustProxy': false

};

module.exports = config;