<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/post', [App\Http\Controllers\HomeController::class, 'postTodo'])->name('posting');

Route::get('/todo/{id}', [App\Http\Controllers\HomeController::class, 'getTodo'])->name('todo');
Route::put('/todo/{id}', [App\Http\Controllers\HomeController::class, 'editTodo']);
Route::delete('/todo/{id}', [App\Http\Controllers\HomeController::class, 'deleteTodo']);
