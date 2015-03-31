/**
 * database.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 */


var config = {

    'connections': {

        /**
         * Local disk storage for DEVELOPMENT ONLY
         * Installed by default.
         */
        'localDiskDb': {
            'adapter': 'sails-disk'
        },

        /**
         * Run: npm install sails-mysql to install
         */
        'mysql': {
            'adapter': 'sails-mysql',
            'host': 'localhost',
            'user': 'tron',
            'password': '',
            'database': 'tron'
        },

        /**
         * Run: npm install sails-mongo to install
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
         | Here you may specify which of the database connections below you wish
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