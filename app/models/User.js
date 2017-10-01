var BaseUser = use('BaseUser');
var User = BaseUser.extend({
    attributes: {
        email: {
            required: true,
            type: 'email'
        },
        password: {
            required: true,
            type: 'string'
        },
        remember_token: 'string'
    },

    migrate: 'drop',

    /**
     * Get model remember token field name.
     * Used by quorra auth service.
     *
     * @returns {string}
     */
    getRememberTokenName: function () {
        return 'remember_token';
    }
});

module.exports = User;

