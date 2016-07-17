/*
 |----------------------------------------------------------------
 | Master Configuration
 |----------------------------------------------------------------
 |
 | This file contains the proper paths and options for each and
 | and every Gulp task that Elixir wraps up.
 */

var config = {

    /*
     |----------------------------------------------------------------
     | Production Mode
     |----------------------------------------------------------------
     |
     | Elixir will trigger certain actions, dependent upon this flag.
     | You may enable this mode by triggering "gulp --production",
     | enabling things like CSS and JS minification. EasyPeasy!
     |
     */

    production: Elixir.inProduction,

    /*
     |----------------------------------------------------------------
     | Assets Path
     |----------------------------------------------------------------
     |
     | This assets path property is prefixed to all relevant assets
     | in your application. For example, "resources/assets/sass"
     | or "resources/assets/coffee." Change this if you must.
     |
     */

    assetsPath: 'resources/assets',

    /*
     |----------------------------------------------------------------
     | Public Path
     |----------------------------------------------------------------
     |
     | Much like assets path, this public path property is prefixed to
     | any paths in your application, that point to the public dir.
     | It's useful, when a server requires a unique public path.
     |
     */

    publicPath: 'public',

    /*
     |----------------------------------------------------------------
     | App Path
     |----------------------------------------------------------------
     |
     | The app path, you guessed it, specifies the path to the app
     | folder in your project.
     |
     */

    appPath: 'app',

    /*
     |----------------------------------------------------------------
     | View Path
     |----------------------------------------------------------------
     |
     | Very likely, you will never need/want to modify this property.
     | However, for the instances where your app's views directory
     | is located in a different spot, please modify as needed.
     |
     */

    viewPath: 'resources/views',

    /*
     |----------------------------------------------------------------
     | Notifications
     |----------------------------------------------------------------
     |
     | As a convenience, Elixir will, when available, automatically
     | display OS notifications upon the completion of any task.
     | But of course you're free to disable this, if needed.
     |
     */

    notifications: true,

    /*
     |----------------------------------------------------------------
     | Log Muted
     |----------------------------------------------------------------
     |
     | As a convenience, Elixir will, when available, automatically
     | display OS log upon the completion of any task.
     | But of course you're free to disable this, if needed.
     |
     */
    muted: false,

    /*
     |----------------------------------------------------------------
     | Sourcemaps
     |----------------------------------------------------------------
     |
     | A sourcemap is a JSON mapping, which declares a relationship
     | between a minified file and its original source location.
     | Quite useful for debugging, it's turned on by default.
     |
     */

    sourcemaps: !Elixir.inProduction,

    /*
     |----------------------------------------------------------------
     | File System Event Batching
     |----------------------------------------------------------------
     |
     | You likely won't need to modify this object. That said, should
     | you need to, these settings are exclusive to the watch task.
     | They set the limit and timeout for running batch-updates.
     |
     */

    batchOptions: {

        // https://github.com/floatdrop/gulp-batch#batchoptions-callback-errorhandler
        limit: undefined,
        timeout: 1000
    },

    css: {

        /*
         |----------------------------------------------------------------
         | CSS Source Folder
         |----------------------------------------------------------------
         |
         | This property declares the root folder for all vanilla CSS
         | files. Note that this is the folder name, not the path.
         | We'll stick with a general "css" name - makes sense.
         |
         */

        folder: 'css',

        /*
         |----------------------------------------------------------------
         | CSS Output Folder
         |----------------------------------------------------------------
         |
         | Generally, your source files will be stored outside of your
         | public directory, and then compiled/merged as necessary.
         | This property represents the public specific folder.
         |
         */

        outputFolder: 'css',

        /*
         |----------------------------------------------------------------
         | CSS3 Autoprefixing
         |----------------------------------------------------------------
         |
         | When working with any form of CSS, Elixir automatically runs
         | your file through a CSS autoprefixer, which automatically
         | adds or removes vendor-specific CSS3 prefixes. Useful!
         |
         */

        autoprefix: {
            enabled: true,

            // https://www.npmjs.com/package/gulp-autoprefixer#api
            options: {
                browsers: ['> 1%'],
                cascade: false
            }
        },

        /*
         |----------------------------------------------------------------
         | CSS3 Minification
         |----------------------------------------------------------------
         |
         | When running Gulp with the production flag, any CSS will
         | automatically be minified. This offers the benefit of
         | reduced file sizes. Adjust any plugin option here.
         |
         */

        minifier: {
            // https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
            pluginOptions: {}
        },

        /*
         |----------------------------------------------------------------
         | Sass Compilation
         |----------------------------------------------------------------
         |
         | Gone are the days of researching how to call Sass on a given
         | folder. Simply run `mix.sass('file.scss')` and you're all
         | set. This object sets the folder name and plugin opts.
         |
         */

        sass: {
            folder: 'sass',

            search: '/**/*.+(sass|scss)',

            // https://github.com/sass/node-sass#options
            pluginOptions: {
                outputStyle: Elixir.inProduction ? 'compressed' : 'nested',
                precision: 10
            }
        },

        /*
         |----------------------------------------------------------------
         | Less Compilation
         |----------------------------------------------------------------
         |
         | Gone are the days of researching how to call Less on a given
         | folder. Simply run `mix.less('file.less')` and you're all
         | set. This object sets the folder name and plugin opts.
         |
         */

        less: {
            folder: 'less',

            search: '/**/*.less',

            // https://github.com/plus3network/gulp-less#options
            pluginOptions: {}
        }
    },

    js: {

        /*
         |----------------------------------------------------------------
         | JavaScript Source Folder
         |----------------------------------------------------------------
         |
         | Much like the CSS folder option above, this property sets the
         | name of the folder, not the full path, for your JavaScript
         | source files. It then gets affixed to the "assetsPath".
         |
         */

        folder: 'js',

        /*
         |----------------------------------------------------------------
         | JavaScript Output Folder
         |----------------------------------------------------------------
         |
         | Once your vanilla JavaScript files have been compiled/merged,
         | they will be saved to your public directory. This property
         | represents the name of the folder within that location.
         |
         */

        outputFolder: 'js',

        /*
         |----------------------------------------------------------------
         | UglifyJS Parser/Compressor/Beautifier
         |----------------------------------------------------------------
         |
         | UglifyJS is a JavaScript parser/compressor/beautifier.
         | It'll minify your JavaScript with ease and has an option to
         | mangle your code.
         |
         */

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            }
        },

        /*
         |----------------------------------------------------------------
         | Rollup
         |----------------------------------------------------------------
         |
         | Rollup is a JavaScript module bundler. It allows you to write
         | your application or library as a set of modules – using modern
         | ES2015 import/export syntax – and bundle them up into a single
         | file
         |
         | @see {@link http://rollupjs.org/}
         |
         */

        rollup: {
            moduleName: 'QuorraElixirBundle'
        },

        /*
         |----------------------------------------------------------------
         | Webpack
         |----------------------------------------------------------------
         |
         | webpack is a module bundler. webpack takes modules with
         | dependencies and generates static assets representing those
         | modules
         |
         | @see {@link http://webpack.github.io/}
         |
         */

        webpack: {

        }
    },

    testing: {

        /*
         |----------------------------------------------------------------
         | Mocha Autotesting
         |----------------------------------------------------------------
         |
         | Want to automatically trigger your mocha tests. Not a problem.
         | This object stores mocha test command with options. For a
         | custom command, you may use the second arg to mix.mocha.
         |
         */

        mocha: {
            path: 'tests', // for watching
            search: '/**/*.js', // for watching
            command: 'mocha  --opts app/tests/mocha.opts'
        }
    },

    /*
     |----------------------------------------------------------------
     | File Versioning
     |----------------------------------------------------------------
     |
     | If you use aggressive assets caching on your server, then you
     | will need a way to cachebust, right? No querystring needed
     | this time. Here you may set the default "build" folder.
     |
     */

    versioning: {
        buildFolder: 'build'
    },

    /*
     |----------------------------------------------------------------
     | Browsersync
     |----------------------------------------------------------------
     |
     | Want to have your browser refresh instantly upon changing a bit
     | of Sass or modifying a view? With Elixir, it has never been
     | easier. This contains default options for the extension.
     |
     */

    browserSync: {
        // http://www.browsersync.io/docs/options/
        proxy: 'localhost:3000',
        reloadOnRestart: true,
        notify: true
    }
};

module.exports = config;