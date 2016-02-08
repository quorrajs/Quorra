
var paths = {
    /*
     |--------------------------------------------------------------------------
     | Application Path
     |--------------------------------------------------------------------------
     |
     | Here we just defined the path to the application directory. Most likely
     | you will never need to change this value as the default setup should
     | work perfectly fine for the vast majority of all our applications.
     |
     */

    'app': __dirname + '/../app',

    /*
     |--------------------------------------------------------------------------
     | Public Path
     |--------------------------------------------------------------------------
     |
     | The public path contains the assets for your web application, such as
     | your JavaScript and CSS files.
     |
     */

    'public': __dirname + '/../public',

    /*
     |--------------------------------------------------------------------------
     | Base Path
     |--------------------------------------------------------------------------
     |
     | The base path is the root of the Quorra installation. Most likely you
     | will not need to change this value. But, if for some wild reason it
     | is necessary you will do so here, just proceed with some caution.
     |
     */

    'base' : __dirname + '/..',

    /*
     |--------------------------------------------------------------------------
     | Storage Path
     |--------------------------------------------------------------------------
     |
     | The storage path is used by Quorra to store cached views, logs
     | and other pieces of information. You may modify the path here when
     | you want to change the location of this directory for your apps.
     |
     */

    'storage' : __dirname + '/../app/storage'
};

module.exports = paths;
