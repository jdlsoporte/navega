let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js(
    [
        'node_modules/jquery/dist/jquery.js',
        
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/popper.js/dist/popper.js'
        
    ], 'public/js/vendor.js')
.styles(
    [
        'node_modules/bootstrap/dist/css/bootstrap.css',
    ],'public/css/app.css')
.styles(
    [
        'node_modules/@fortawesome/fontawesome-free/css/all.css',
        'resources/assets/css/login.css'
    ],'public/css/login.css');
   //.sass('resources/assets/sass/app.scss', 'public/css');
