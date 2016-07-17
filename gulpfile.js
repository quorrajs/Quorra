var elixir = require('@positron/elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Quorra application.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});
