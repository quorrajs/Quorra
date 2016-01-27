/**
 * database.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */


var config = {

    /*
     |--------------------------------------------------------------------------
     | Database Connections
     |--------------------------------------------------------------------------
     |
     | Here are each of the database connections setup for your application.
     | Of course, examples of configuring each database platform that is
     | supported by Quorra is shown below to make development simple.
     |
     |
     | All database work in Quorra is done through the Waterline adapters
     | so make sure you have the adapter for your particular database of
     | choice installed on your machine before you begin development.
     |
     | see https://github.com/balderdashy/waterline#community-adapters for community
     | developed adapters
     |
     */

    'connections': {

        /*
         |--------------------------------------------------------------------------
         | sails-disk adapter connection config
         |--------------------------------------------------------------------------
         |
         | Local disk storage for DEVELOPMENT ONLY
         | Installed by default.
         |
         */

        'localDiskDb': {
            'adapter': 'sails-disk'
        },

        /*
         |--------------------------------------------------------------------------
         | sails-mysql adapter connection config
         |--------------------------------------------------------------------------
         |
         | Run: npm install sails-mysql to install adapter
         |
         */

        'mysql': {
            'adapter': 'sails-mysql',
            'host': 'localhost',
            'user': 'tron',
            'password': '',
            'database': 'tron'
        },

        /*
         |--------------------------------------------------------------------------
         | sails-mongo adapter connection config
         |--------------------------------------------------------------------------
         |
         | Run: npm install sails-mongo to install adapter
         |
         */

        'mongo': {
            'adapter': 'sails-mongo',
            'host': 'localhost',
            'port': 27017,
            'user': 'tron',
            'password': '',
            'database': 'tron'
        }
    },

    /*
     |--------------------------------------------------------------------------
     | Model default configuration
     |--------------------------------------------------------------------------
     |
     |
     */

    'model': {

        /*
         |--------------------------------------------------------------------------
         | Default Database Connection Name
         |--------------------------------------------------------------------------
         |
         | Here you may specify which of the database connections above you wish
         | to use as your default connection for all database work.
         |
         */

        'connection': 'localDiskDb',

        /*
         |--------------------------------------------------------------------------
         | Migration
         |--------------------------------------------------------------------------
         |
         | How and whether Quorra will attempt to automatically rebuild the
         | tables/collections/etc. in your schema.
         |
         */

        'migrate': 'alter'
    }
};

module.exports = config;