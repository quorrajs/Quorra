
var User = {
    attributes: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true
        },
        remember_token: 'string'
    },

    //@todo: note
    migrate: 'drop'

    getRememberTokenName: function () {
        return 'remember_token';
    }
};

module.exports = User;

