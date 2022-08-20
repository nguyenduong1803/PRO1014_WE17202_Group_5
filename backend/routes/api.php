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
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\Product\ProductController::class, 'deleteProduct']);
        Route::post('update/{id}', [\App\Http\Controllers\Api\Product\ProductController::class, 'update']);
    });
    Route::get('getLists', [\App\Http\Controllers\Api\Product\ProductController::class, 'getListProduct']);
    Route::get('detail/{id}', [\App\Http\Controllers\Api\Product\ProductController::class, 'getDetailProduct']);
});

Route::group(['namespace' => 'Tables', 'prefix' => 'tables'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\Tables\TablesControllers::class, 'create']);
        Route::post('update', [\App\Http\Controllers\Api\Tables\TablesControllers::class, 'update']);
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\Tables\TablesControllers::class, 'deleteTable']);
    });
    Route::get('lists', [\App\Http\Controllers\Api\Tables\TablesControllers::class, 'getLists']);
});

Route::group(['namespace' => 'TableBook', 'prefix' => 'tableBook'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\TableBook\TableBookController::class, 'createBook']);
        Route::get('getTablesBookByUser', [\App\Http\Controllers\Api\TableBook\TableBookController::class, 'getTablesBookByUser']);
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\TableBook\TableBookController::class, 'deleteTableBook']);
        Route::post('update', [\App\Http\Controllers\Api\TableBook\TableBookController::class, 'updateTableBook']);
    });
    Route::get('getLists', [\App\Http\Controllers\Api\TableBook\TableBookController::class, 'getListsTableBook']);
});



Route::group(['namespace' => 'User', 'prefix' => 'user'], function(){
    Route::post('sendMailForgotPassword', [\App\Http\Controllers\Api\User\UserController::class, 'sendMailForgotPassword']);
    Route::get('getPassForgot/{id}/{token}', [\App\Http\Controllers\Api\User\UserController::class, 'getPassForgot']) -> name('user.getPassForgot');
    Route::post('resetPassword', [\App\Http\Controllers\Api\User\UserController::class, 'resetPassword']);
    Route::middleware('auth:api') -> group(function () {
        Route::post('updateInfo', [\App\Http\Controllers\Api\User\UserController::class, 'updateInfo']);
        Route::get('getAllUsers', [\App\Http\Controllers\Api\User\UserController::class, 'getAllUsers']);
        Route::delete('deleteUser/{id}', [\App\Http\Controllers\Api\User\UserController::class, 'deleteUser']);
    });
});

Route::group(['namespace' => 'Cart', 'prefix' => 'cart'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('save', [\App\Http\Controllers\Api\Cart\CartController::class, 'saveCart']);
        Route::post('updateOrder', [\App\Http\Controllers\Api\Cart\CartController::class, 'updateOrder']);
        Route::get('getCart', [\App\Http\Controllers\Api\Cart\CartController::class, 'getCart']);
        Route::delete('deleteOrder/{id}', [\App\Http\Controllers\Api\Cart\CartController::class, 'deleteOrder']);
        Route::get('clearAllOrderCartUser', [\App\Http\Controllers\Api\Cart\CartController::class, 'clearAllOrderCartUser']);
    });
});

Route::group(['namespace' => 'Invoices', 'prefix' => 'invoices'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\Invoices\InvoicesController::class, 'create']);
        Route::get('getInvoicesByUser', [\App\Http\Controllers\Api\Invoices\InvoicesController::class, 'getInvoicesByUser']);
        Route::get('getInvoicesByAdmin', [\App\Http\Controllers\Api\Invoices\InvoicesController::class, 'getInvoicesByAdmin']);
        Route::post('update/{id}', [\App\Http\Controllers\Api\Invoices\InvoicesController::class, 'updateInvoice']);
    });
});

Route::group(['namespace' => 'InvoiceDetail', 'prefix' => 'invoice-detail'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::get('getListDetailInvoice/{id_invoice}', [\App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController::class, 'getListDetailInvoice']);
        Route::get('getDetailInvoice/{id}', [\App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController::class, 'getDetailInvoice']);
        Route::post('update/{id}', [\App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController::class, 'updateDetailInvoice']);
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController::class, 'deleteDetailInvoice']);
        Route::post('create', [\App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController::class, 'createDetailInvoice']);
    });
});

Route::group(['namespace' => 'InvoiceDetailTableInvoice', 'prefix' => 'detail-table-invoice'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::get('getLists/{id_invoice}', [\App\Http\Controllers\Api\DetailTableInvoice\DetailTableInvoiceController::class, 'getLists']);
        Route::put('update', [\App\Http\Controllers\Api\DetailTableInvoice\DetailTableInvoiceController::class, 'updateTable']);
    });
});

Route::group(['namespace' => 'Directory', 'prefix' => 'directory'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\Directory\DirectoryController::class, 'createDirectory']);
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\Directory\DirectoryController::class, 'deleteDirectory']);
        Route::post('update', [\App\Http\Controllers\Api\Directory\DirectoryController::class, 'updateDirectory']);
    });
    Route::get('getLists', [\App\Http\Controllers\Api\Directory\DirectoryController::class, 'getLists']);
});

Route::group(['namespace' => 'Comments', 'prefix' => 'comments'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('create', [\App\Http\Controllers\Api\Comments\CommentsController::class, 'postComment']);
        Route::put('update/{id_comment}', [\App\Http\Controllers\Api\Comments\CommentsController::class, 'updateComment']);
        Route::delete('delete/{id}', [\App\Http\Controllers\Api\Comments\CommentsController::class, 'deleteComment']);
    });
    Route::get('getListByProduct', [\App\Http\Controllers\Api\Comments\CommentsController::class, 'getListByProduct']);
});

Route::group(['namespace' => 'Checkout', 'prefix' => 'checkout'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('vnpay', [\App\Http\Controllers\Api\Checkout\CheckoutController::class, 'paymentVnPay']);
        Route::post('saveInfoPaymentVNPay', [\App\Http\Controllers\Api\Checkout\CheckoutController::class, 'saveInfoPaymentVNPay']);
        Route::post('paymentCash', [\App\Http\Controllers\Api\Checkout\CheckoutController::class, 'checkoutPaymentCash']);
    });
});

Route::group(['namespace' => 'Statistical', 'prefix' => 'statistical'], function(){
    Route::middleware('auth:api') -> group(function () {
        Route::post('statisticalByInvoices', [\App\Http\Controllers\Api\Statistical\StatisticalController::class, 'statisticalByInvoices']);
        Route::get('statisticalByProduct', [\App\Http\Controllers\Api\Statistical\StatisticalController::class, 'statisticalByProduct']);
        Route::get('statisticalWithMostFrequent', [\App\Http\Controllers\Api\Statistical\StatisticalController::class, 'statisticalWithMostFrequent']);
    });
});





