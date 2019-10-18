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
        Route::get('/store/{id}', 'Api\StoresController@show');
        Route::get('/food', 'Api\FoodsController@index');
        Route::get('/food/{id}', 'Api\FoodsController@show');
        Route::post('/user', 'Api\UsersController@store');
        Route::post('/user/login', 'Auth\LoginController@login');
        Route::get('/verify/{active_code}', 'Api\MailVerificationsController@verify');
        // Route::post("/password/email", "Auth\ForgotPasswordController@sendResetLinkEmail");
        // Route::get('/mail', 'Api\TestMailController@send_mail');
        // Route::get('/email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify');
        // Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
    Route::group(['middleware' => ['jwt.auth']], function () {
        Route::get('/stores', 'Api\StoresController@index');
        Route::delete('/store/{id}', 'Api\StoresController@destroy');
        Route::post('/food', 'Api\FoodsController@store');
        Route::delete('/food/{id}', 'Api\FoodsController@destroy');
        Route::post('/trade', 'Api\TradesController@store');
        Route::get('/trade/{userId}', 'Api\TradesController@showUser');
        Route::patch('/trade/complete/{id}', 'Api\TradesController@complete');
        Route::get('/trade/store/{storeId}', 'Api\TradesController@showStore');
        Route::get('/favorite/{userId}', 'Api\FavoritesController@show');
        Route::post('/favorite', 'Api\FavoritesController@store');
        Route::delete('/favorite/{id}', 'Api\FavoritesController@destroy');
        Route::get('/user/logout', 'Auth\LogoutController@logout');
        Route::delete('/user/{id}', 'Api\UsersController@destroy');
        // Route::get('/home', 'ApiController@index');
    });
});
