
var config = {

    /*
     |--------------------------------------------------------------------------
     | Transport driver
     |--------------------------------------------------------------------------
     |
     | Here you may specify nodemailer transport driver you wish to use. If you
     | specify anything other  than the default driver you may have to install
     | that driver manually using npm install command
     | Find more drivers at https://github.com/nodemailer/nodemailer#send-using-a-transport-plugin
     |
     */

    'driver': 'nodemailer-smtp-transport',

    /*
     |--------------------------------------------------------------------------
     | Transport driver config
     |--------------------------------------------------------------------------
     |
     | Specify the configuration values for the driver you specified above.
     |
     */

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