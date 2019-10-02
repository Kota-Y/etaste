<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(['middleware' => ['api']], function(){
//   Route::resource('stores', 'Api\StoresController');
// });

Route::get('/stores', 'Api\StoresController@index');
Route::get('/store/{id}', 'Api\StoresController@show');

Route::get('/food', 'Api\FoodsController@index');
Route::post('/food', 'Api\FoodsController@store');
Route::get('/food/{id}', 'Api\FoodsController@show');

Route::get('/favorite/{userId}', 'Api\FavoritesController@show');
Route::post('/favorite', 'Api\FavoritesController@store');

Route::post('/user', 'Api\UsersController@store');
Route::post('/user/login', 'Api\UsersController@login');
Route::get('/user/logout', 'Api\UsersController@logout');

