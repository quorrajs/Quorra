
var App = require('positron');

var config = {
    /*
     |--------------------------------------------------------------------------
     | Default Session Driver
     |--------------------------------------------------------------------------
     |
     | This option controls the default session "driver" that will be used on
     | requests. By default, we will use the lightweight native driver but
     | you may specify any of the other wonderful drivers provided here.
     |
     | Supported: "memory", "file", "database"
     |
     | Warning: Memory session driver is purposely not designed for a production
     | environment. It will leak memory under most conditions, does not scale past
     | a single process, and is meant for debugging and developing.
     |
     */

    'driver': 'memory'
};

module.exports = config;