const mix = require('laravel-mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});


if (!mix.inProduction()) {
    mix.webpackConfig({
            devtool: 'source-map'
        })
        .sourceMaps()
}
mix.sass('resources/scss/eshop.scss', 'public/css');


mix.js('resources/js/auth/index.jsx', 'public/js/auth.js').react();
mix.js('resources/js/item/index.jsx', 'public/js/item.js').react();
mix.js('resources/js/galaxy/index.jsx', 'public/js/galaxy.js').react();
mix.js('resources/js/universe/index.jsx', 'public/js/universe.js').react();
mix.js('resources/js/category/index.jsx', 'public/js/category.js').react();
mix.js('resources/js/subcategory/index.jsx', 'public/js/subcategory.js').react();

mix.browserSync({
    host: 'localhost',
    port: 3000,
    proxy: {
        target: process.env.APP_URL // Yay! Using APP_URL from the .env file!
    }
});

// add versioning
mix.version();