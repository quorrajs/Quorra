
var config = {

    /*
     |--------------------------------------------------------------------------
     | Quorra App object
     |--------------------------------------------------------------------------
     |
     | Expose the Positron instance representing your Quorra app. If this is
     | disabled, you can still get access require('positron')
     |
     */

    'App': true,

    /*
     |--------------------------------------------------------------------------
     | Database models
     |--------------------------------------------------------------------------
     |
     | Expose each of your app's models as global variables (using their
     | "globalId"). E.g. a model defined in app/models/User.js would have a
     | globalId of User by default. If this is disabled, you can still access
     | your models via App.models.<model identity>.
     |
     */

    'models': true
};

module.exports = config;
