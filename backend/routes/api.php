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


// Authentication



Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::get('getInfoUser', [\App\Http\Controllers\Api\Auth\AuthController::class, 'getInfoUser']);
        Route::post('updateChangePassword', [\App\Http\Controllers\Api\Auth\AuthController::class, 'updateChangePassword']);
        Route::get('logout', [\App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);
    });
    Route::post('register', [\App\Http\Controllers\Api\Auth\AuthController::class, 'register']);
    Route::post('login', [\App\Http\Controllers\Api\Auth\AuthController::class, 'login']);
});

Route::group(['namespace' => 'Product', 'prefix' => 'product'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\Product\ProductController::class, 'create']);
    });
    Route::get('getLists', [\App\Http\Controllers\Api\Product\ProductController::class, 'getListProduct']);
});


Route::group(['namespace' => 'User', 'prefix' => 'user'], function(){
    Route::post('sendMailForgotPassword', [\App\Http\Controllers\Api\User\UserController::class, 'sendMailForgotPassword']);
    Route::get('getPassForgot/{id}/{token}', [\App\Http\Controllers\Api\User\UserController::class, 'getPassForgot']) -> name('user.getPassForgot');
    Route::post('resetPassword', [\App\Http\Controllers\Api\User\UserController::class, 'resetPassword']);
    Route::post('updateInfo', [\App\Http\Controllers\Api\User\UserController::class, 'updateInfo']) -> middleware('auth:api');
});



