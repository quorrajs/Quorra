/**
 * middleware.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */

var config = {
    'favicon': true,

    /*
     |--------------------------------------------------------------------------
     | Query Parser
     |--------------------------------------------------------------------------
     |
     | Disable query parsing by setting the value to false, or set the query
     | parser to use either “simple” or “extended” or a custom query string
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
    'bodyParser': true,
    'serveStatic': true,
    'cookieParser': true,
    'session': true,
    'httpMethodOverride': true,
    'localization': true
};

module.exports = config;