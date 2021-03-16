<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//items view
Route::get('/items', 'ItemController@items');
Route::get('/item/{pi?}', 'ItemController@item')->where("pi", ".*");


//galaxies view
Route::get('/galaxy/{pi?}', 'GalaxyController@galaxy')->where("pi", ".*");
Route::get('/galaxies', 'GalaxyController@galaxies');


//universes view
Route::get('/universes', 'UniverseController@universes');
Route::get('/universe/{pi?}', 'UniverseController@universe')->where("pi", ".*");


//subcategories view
Route::get('/subcategories', 'SubcategoryController@subcategories');
Route::get('/subcategory/{id}', 'SubcategoryController@subcategory');


//categories view
Route::get('/category/id/1', 'CategoryController@categories');
Route::get('/category/id/2', 'CategoryController@category');


//users view
Route::get('/users', 'UserController@users');
Route::get('/about', 'UserController@about');

//main page view
Route::get('/shop', 'MainPageController@mainPage');

//login
Route::view('/login', 'auth/react')->name('login');
Route::view('/register', 'auth/react')->name('register');


Route::get('/register', function() {

    if (Auth::check()) {
        return redirect('/');
    } else {
        return view('auth/react');
    }

})->name('register');

