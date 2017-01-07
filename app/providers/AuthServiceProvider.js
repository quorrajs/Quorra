/**
 * AuthServiceProvider.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright Copyright (c) 2016-2017, QuorraJS.
 * @license See LICENSE.txt
 */

var ServiceProvider = use('AuthServiceProvider');

var AuthServiceProvider = ServiceProvider.extend(function() {

    // Add application policy mappings below
    this.__policies = {
        //'policyType': 'policyClassPath'
    };
});

AuthServiceProvider.prototype.boot = function (done) {
    this.registerPolicies();

    // Define application gates below
    this.__app.gate.define('update-post', function (user, post, callback) {
        callback(user.id == post.userId);
    });

    done();
};

module.exports = AuthServiceProvider;