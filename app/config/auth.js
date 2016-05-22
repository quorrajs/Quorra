
var config = {

    /*
     |--------------------------------------------------------------------------
     | Authentication Model
     |--------------------------------------------------------------------------
     |
     | Waterline models identity, that should be used for retrieving users
     |
     */

    'model': 'user',

    /*
     |--------------------------------------------------------------------------
     | Session auth identifier
     |--------------------------------------------------------------------------
     |
     | Unique identifier for the auth session value.
     |
     */

    'sessionAuthIdentifier': 'login_quorra',

    /*
     |--------------------------------------------------------------------------
     | Remember me cookie identifier name
     |--------------------------------------------------------------------------
     |
     | Name of the cookie used to store the "recaller"
     |
     */

    'rememberMeCookieIdentifier': 'remember_quorra'

};

module.exports = config;