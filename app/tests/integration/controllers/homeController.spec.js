var request = require('supertest')('http://localhost:3000');

describe('HomeController', function () {
    describe('#getIndex()', function () {
        it('should respond with 200', function (done) {
            request
                .get('/users/')
                .expect(200)
                .expect('Content-Type', 'text/plain')
                .end(function (err, res) {
                    if (err) {
                        return done(err);
                    }

                    // some other tests

                    done();
                });
        });
    });
});