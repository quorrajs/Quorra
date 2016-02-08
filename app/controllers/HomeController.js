
var BaseController = require('./BaseController');

var HomeController = BaseController.extend(function(){
    this.getIndex = function(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World \n');
    };
});

module.exports = HomeController;