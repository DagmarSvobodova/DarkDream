<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/token', 'Api\UserController@token');

//                                              only if authenticated through Sanctum
Route::get('/user', 'Api\UserController@user')->middleware('auth:sanctum');

//                                                   only if authenticated through Sanctum
Route::post('/logout', 'Api\UserController@logout')->middleware('auth:sanctum');

Route::get('/galaxy/all', 'GalaxyController@show');