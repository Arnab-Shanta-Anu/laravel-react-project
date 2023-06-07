<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('items');
});

Route::get('/items/{id}', function ($id) {
    echo ('single item view');
});

Route::get('/cart', function () {
    echo ('cart view');
});

Route::get('/auth/login', function () {
    echo ('login view');
});

Route::get('/auth/signup', function () {
    echo ('signup view');
});

Route::get('/auth', function () {
    response()->redirectTo('/auth/login');
});

Route::get('/inventory', function () {
    echo ('inventory view');
});

