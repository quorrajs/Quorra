/**
 * HomeController.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 * @todo: remove after development
 */
var BaseController = require('./BaseController');

var PhotoController = BaseController.inherits(function(){

    /**
     * Display a listing of the resource.
     *
     * @param request
     * @param response
     */
    this.index = function(request, response)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Show the form for creating a new resource.
     *
     * @param request
     * @param response
     */
    this.create = function(request, response)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Store a newly created resource in storage.
     *
     * @param request
     * @param response
     */
    this.store = function(request, response)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Display the specified resource.
     *
     * @param request
     * @param response
     * @param  {number}  id
     */
    this.show = function(request, response, id)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Show the form for editing the specified resource.
     *
     * @param request
     * @param response
     * @param  {number}  id
     */
    this.edit = function(request, response, id)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Update the specified resource in storage.
     *
     * @param request
     * @param response
     * @param  {number}  id
     */
    this.update = function(request, response, id)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };


    /**
     * Remove the specified resource from storage.
     *
     * @param request
     * @param response
     * @param  {number}  id
     */
    this.destroy = function(request, response, id)
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World \n');
    };
});

module.exports = PhotoController;