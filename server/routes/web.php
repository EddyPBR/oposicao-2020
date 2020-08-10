<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['auth']], function() {
    Route::prefix('/admin')->name('admin.')->namespace('Admin')->group(function() { 
        Route::resource('candidates', 'CandidatesController');
        Route::resource('posts', 'PostsController');
    });
});
Auth::routes();

Route::get('/admin', 'Admin\CandidatesController@index')->name('admin');
