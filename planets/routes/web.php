<?php

use Illuminate\Support\Facades\Route;

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

//items api
Route::get('/home/all', 'ItemController@index');
Route::get('/home/{item_id}', 'ItemController@show');

//galaxies api
Route::get('/galaxy/all', 'GalaxyController@index');
Route::get('/galaxy/{item_id}', 'GalaxyController@show');

Route::view('/login', 'auth/react')->name('login');
Route::view('/register', 'auth/react')->name('register');


Route::get('/register', function() {

    if (Auth::check()) {
        return redirect('/');
    } else {
        return view('auth/react');
    }

})->name('register');