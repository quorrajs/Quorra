var ServiceProvider = use('AuthServiceProvider');

var AuthServiceProvider = ServiceProvider.extend(function(app) {
    this.__app = app;
    this.__policies = {};
});

/**
 * Register any application authentication / authorization services.
 *
 * @param {function} done
 */
AuthServiceProvider.prototype.boot = function (done) {
    this.registerPolicies();

    // define application gates below

    done();
};

module.exports = AuthServiceProvider;