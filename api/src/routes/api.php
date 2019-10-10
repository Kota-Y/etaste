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

Route::group(["middleware" => "api"], function () {
        Route::get('/stores', 'Api\StoresController@index');
        Route::get('/store/{id}', 'Api\StoresController@show');
        Route::post('/user/login', 'Auth\LoginController@login');
    Route::group(['middleware' => ['jwt.auth']], function () {
        Route::delete('/store/{id}', 'Api\StoresController@destroy');
        Route::get('/home', 'ApiController@index');
    });
});

// Route::get('/stores', 'Api\StoresController@index');
// Route::get('/store/{id}', 'Api\StoresController@show');
// Route::delete('/store/{id}', 'Api\StoresController@destroy');

Route::get('/food', 'Api\FoodsController@index');
Route::post('/food', 'Api\FoodsController@store');
Route::get('/food/{id}', 'Api\FoodsController@show');
Route::delete('/food/{id}', 'Api\FoodsController@destroy');

Route::post('/trade', 'Api\TradesController@store');
Route::get('/trade/{userId}', 'Api\TradesController@showUser');
Route::patch('/trade/complete/{id}', 'Api\TradesController@complete');
Route::get('/trade/store/{storeId}', 'Api\TradesController@showStore');

Route::get('/favorite/{userId}', 'Api\FavoritesController@show');
Route::post('/favorite', 'Api\FavoritesController@store');
Route::delete('/favorite/{id}', 'Api\FavoritesController@destroy');

Route::post('/user', 'Api\UsersController@store');
Route::get('/user/logout', 'Api\UsersController@logout');
Route::delete('/user/{id}', 'Api\UsersController@destroy');
