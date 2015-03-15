/**
 * HomeController.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 * @todo: remove temporary routes after development
 */
var BaseController = require('./BaseController');

var HomeController = BaseController.inherits(function(){

    this.FilterRequests = function(req, res, next){
        console.log(23423423);
        next();
    };

    this.getShowProfile = function(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World \n');
    };

    this.getHello = function(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World \n');
    };

    this.getIndex = function(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World \n');
    };

    //@todo: check the filter and action matching function
//    this.beforeFilter('auth', {on: 'get'});

    /*$this->beforeFilter('csrf', array('on' => 'post'));

     $this->afterFilter('log', array('only' =>
     array('fooAction', 'barAction')));*/

    //this.beforeFilter('@filterRequests');
});

module.exports = HomeController;