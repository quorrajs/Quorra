
var config = {
    /*
     |--------------------------------------------------------------------------
     | Use Polling
     |--------------------------------------------------------------------------
     |
     | Use polling to watch file changes. slower but sometimes needed for VM
     | environments
     |
     */

    usePolling: false,

    /*
     |--------------------------------------------------------------------------
     | Directories
     |--------------------------------------------------------------------------
     |
     | Directories to be watched for file system events
     |
     */

    dirs: [
        'app/*.js',
        'app/config',
        'app/start',
        'app/models',
        'app/controllers'
    ],

    /*
     |--------------------------------------------------------------------------
     | Ignored Paths
     |--------------------------------------------------------------------------
     |
     | Ignored paths, passed to anymatch. String to be directly matched, string
     | with glob patterns, regular expression test, function or an array of any
     | number and mix of these types
     |
     */

    ignored: []
};

module.exports = config;
