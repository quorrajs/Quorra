/*
 |--------------------------------------------------------------------------
 | Start the Engine
 |--------------------------------------------------------------------------
 |
 | We need to enlighten  Node.js development, so let's start the engine,
 | turn on the lights. This bootstraps the framework and gets it ready for use,
 | then it will load up this application so that we can run it and send
 | the responses back to the browser and delight these users.
 |
 */

require('./bootstrap/start')(function(app){

    /*
     |--------------------------------------------------------------------------
     | Listen for requests
     |--------------------------------------------------------------------------
     |
     | Once we have the application, we can simply call the listen method,
     | which will start to listen for user requests.
     |
     */

    app.listen();
});
