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
Route::post('auth/register', [\App\Http\Controllers\Api\Auth\AuthController::class, 'register']);
Route::post('auth/login', [\App\Http\Controllers\Api\Auth\AuthController::class, 'login']);

Route::middleware('auth:api') -> group(function () {
    Route::get('auth/getInfoUser', [\App\Http\Controllers\Api\Auth\AuthController::class, 'getInfoUser']);
    Route::post('auth/updateChangePassword', [\App\Http\Controllers\Api\Auth\AuthController::class, 'updateChangePassword']);
    Route::get('auth/logout', [\App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);
});


Route::group(['namespace' => 'User', 'prefix' => 'user'], function(){
    Route::post('sendMailForgotPassword', [\App\Http\Controllers\Api\User\UserController::class, 'sendMailForgotPassword']);
    Route::get('getPassForgot/{id}/{token}', [\App\Http\Controllers\Api\User\UserController::class, 'getPassForgot']) -> name('user.getPassForgot');
    Route::post('resetPassword', [\App\Http\Controllers\Api\User\UserController::class, 'resetPassword']);
    Route::post('updateInfo', [\App\Http\Controllers\Api\User\UserController::class, 'updateInfo']) -> middleware('auth:api');
});



