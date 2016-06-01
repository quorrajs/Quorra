var server;

before(function (done) {
    // Increase the Mocha timeout so that Quorra has enough time to run the application.
    this.timeout(5000);

    process.env.NODE_ENV = 'testing';

    require('../../bootstrap/start')(function (app) {
        app.listen(function (response) {
            server = response;

            // here you can load fixtures, etc.

            done();
        });
    });
});

after(function (done) {
    // here you can clear fixtures, etc.

    server.close(function () {
        done();
    })
});