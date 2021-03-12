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
Route::get('/item', 'ItemController@item');


//galaxies view
Route::get('/galaxy', 'GalaxyController@galaxy');
Route::get('/galaxies', 'GalaxyController@galaxies');


//universes view
Route::get('/universes', 'UniverseController@universes');
Route::get('/universe', 'UniverseController@universe');


//subcategories view
Route::get('/subcategories', 'SubcategoryController@subcategories');
Route::get('/subcategory', 'SubcategoryController@subcategory');


//categories view
Route::get('/categories', 'CategoryController@categories');
Route::get('/category', 'CategoryController@category');


//users view
Route::get('/users', 'UserController@users');


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

