/**
 * config.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2016, Harish Anchu. All rights reserved.
 * @license Licensed under MIT
 */

var config = {

    'driver': 'nodemailer-smtp-transport',

    'driverConfig': {
        'service': 'gmail',
        'auth': {
            'user': 'sender@gmail.com',
            'pass': 'password'
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Global "From" Address
     |--------------------------------------------------------------------------
     |
     | You may wish for all e-mails sent by your application to be sent from
     | the same address. Here, you may specify a name and address that is
     | used globally for all e-mails that are sent by your application.
     |
     */

    'from': {'address': null, 'name': null}


};

module.exports = config;