
var Route = App.router;

Route.get('/', function(req, res){
    res.view('index', { title: 'Quorra' });
});

Route.controller('users', 'HomeController');