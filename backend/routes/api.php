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
Route::get('auth/getAllUser', [\App\Http\Controllers\Api\Auth\AuthController::class, 'getListUser']);
