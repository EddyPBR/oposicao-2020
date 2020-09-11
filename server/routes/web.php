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

Route::get('storage/posts/{filename}', function ($filename)
{
    $path = storage_path('app/public/posts/' . $filename);
    

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});

Route::get('storage/candidates/{filename}', function ($filename)
{
    $path = storage_path('app/public/candidates/' . $filename);
    

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});