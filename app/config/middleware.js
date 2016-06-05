
var config = {

    /*
     |--------------------------------------------------------------------------
     | Favicon
     |--------------------------------------------------------------------------
     |
     | Middleware to respond to /favicon.ico requests with favicon.ico file from
     | /public directory.
     |
     */

    'favicon': true,

    /*
     |--------------------------------------------------------------------------
     | Query Parser
     |--------------------------------------------------------------------------
     |
     | Disable query parsing by setting the value to false, or set the query
     | parser to use either `simple` or `extended` or a custom query string
     | parsing function.
     |
     | The simple query parser is based on Node’s native query parser,
     | querystring.
     |
     | The extended query parser is based on qs.
     |
     | A custom query string parsing function will receive the complete query
     | string, and must return an object of query keys and their values.
     |
     */

    'queryParser': 'extended',

    /*
     |--------------------------------------------------------------------------
     | Body Parser
     |--------------------------------------------------------------------------
     |
     | This middleware parses request input data.
     |
     | bodyParser middleware internally wraps package `body-parser`
     | (https://npmjs.org/package/body-parser) module.
     |
     | Disable body parsing by setting the value to false.
     |
     | This middleware provides the following parsers:
     |
     |  - JSON body parser(https://github.com/expressjs/body-parser#bodyparserjsonoptions)
     |  - Raw body parser(https://github.com/expressjs/body-parser#bodyparserrawoptions)
     |  - Text body parser(https://github.com/expressjs/body-parser#bodyparsertextoptions)
     |  - URL-encoded form body parser(https://github.com/expressjs/body-parser#bodyparserurlencodedoptions)
     |
     | To enable any or all of these parsers set the value of bodyParser attribute
     | to an object with any or all of these keys `json`, `raw`, `text`,
     | `urlencoded` with value as `true` or options object.
     |
     | for example:
     |
     | 'bodyParser': {
     |      `json`: true,
     |      `raw`: {
     |          `inflate`: true,
     |          `limit`: '200kb'
     |      },
            `urlencoded`: true
     |  }
     |
     | To find out all available options for each parser checkout body-parser
     | docs: https://www.npmjs.com/package/body-parser#api
     |
     */

    'bodyParser': {
        'json': true,
        'urlencoded': {
            'extended': false
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Serve Static
     |--------------------------------------------------------------------------
     |
     | Serves all file's in your application's public directory as static files.
     | Behind the scene it uses serve-static(https://www.npmjs.com/package/serve-static)
     | module.
     |
     | You can enable or disable this middleware with boolean values. When
     | enabled with option `true` it will work with default `serve-static` module
     | options. If you want to set custom options you can set it right away as
     | an object instead of `true`
     |
     */

    'serveStatic': true,

    /*
     |--------------------------------------------------------------------------
     | Cookie Parser
     |--------------------------------------------------------------------------
     |
     | Parse Cookie header and populate req.cookies with an object keyed by the
     | cookie names.
     |
     */

    'cookieParser': true,

    /*
     |--------------------------------------------------------------------------
     | Session middleware
     |--------------------------------------------------------------------------
     |
     | Provides session support.
     |
     */

    'session': false,

    /*
     |--------------------------------------------------------------------------
     | Authentication middleware
     |--------------------------------------------------------------------------
     |
     | Provides authentication support.
     |
     */

    'auth': false,

    /*
     |--------------------------------------------------------------------------
     | HTTP Method Override
     |--------------------------------------------------------------------------
     |
     | Lets you use HTTP verbs such as PUT or DELETE in places where the client
     | doesn't support it.
     |
     | If the X-HTTP-Method-Override header is set, and if
     | the method is a POST, then it is used to determine the "real" intended
     | HTTP method.
     |
     | The _method request parameter can also be used to determine the HTTP method
     |
     */

    'httpMethodOverride': true,

    /*
     |--------------------------------------------------------------------------
     | Translation
     |--------------------------------------------------------------------------
     |
     | Provides localization/translation support
     |
     */

    'translation': false
};

module.exports = config;