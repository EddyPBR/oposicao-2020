<?php

use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['auth']], function() {
    Route::prefix('/admin')->name('admin.')->namespace('Admin')->group(function() { 
        Route::resource('candidates', 'CandidatesController');
        Route::resource('posts', 'PostsController');
    });
});
Auth::routes();

Route::get('/admin', 'Admin\CandidatesController@index')->name('admin');

Route::get('/', 'HomeController@index');
Route::get('/blog', 'HomeController@blog');
Route::get('/post/{post}', 'HomeController@post');
Route::get('/candidate/{post}', 'HomeController@candidate');
