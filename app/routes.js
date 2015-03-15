/**
 * routes.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2015, QuorraJS. All rights reserved.
 * @license Licensed under MIT
 * @todo: remove temporary routes after development
 */
var Route = (require('positron').router);
Route.filter('auth1', function(request, response, next, value, value1) {
    console.log(value);
    console.log(value1);
    next();
});
Route.filter('auth', function(request, response, next, value, value1) {
   console.log(value);
   console.log(value1);
    next();
});

Route.filter('auth3', function(request, response, next, value, value1) {
    console.log(value);
    console.log(value1);
    next();
});
/*
Route.get('/', {before:'auth', uses:function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('root\n');
}});

//Route.when('/', 'auth:200,400|auth1:500');

Route.get('/hello', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello\n');
});

Route.get('/world', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('World\n');
});*/

/*
Route.get('/parameter/{id}/{id2?}', function(req, res, id){
    console.log(id);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("works");
});
Route.pattern('id', '[0-9]+');

Route.get('/parameter1/{id}/{id2?}', function(req, res, id){
    console.log(id);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("works");
});
Route.get('/parameter/{id1}/{id2}', function(req, res, id1, id2){
    console.log(id1);
    console.log(id2);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("hiii");
});

Route.get('/parameter/{id1}/{id}/{id3}', function(req, res, id1, id2, id3){
    console.log(id1);
    console.log(id2);
    console.log(id3);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("hiii");
});
*/

/*Route.group({namespace:'controllers', prefix:'kp'}, function(){
    //Route.get('/', 'HomeController@showProfile');
    Route.get('/as', {before:'auth', uses:function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('root\n');
    }});
});

Route.get('/kp', 'HomeController@showProfile');*/

Route.controller('users', 'HomeController');


//Route.resource('photos.comments', 'PhotoController');