/**
 * bootstrap
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */



before(function(done) {

    // Increase the Mocha timeout so that Quorra has enough time to run the application.
    this.timeout(5000);

    process.env.NODE_ENV = 'testing';

    require('../../bootstrap/start')(function(app){
        app.listen();

        // here you can load fixtures, etc.
    });
});

after(function(done) {
    // here you can clear fixtures, etc.

});