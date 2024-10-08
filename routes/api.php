<?php

use App\Http\Controllers\TestUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [TestUserController::class, 'index']);
Route::get('/user/{id}', [TestUserController::class, 'show']);

Route::post('/users', [TestUserController::class, 'store']);

Route::put('/user/{id}', [TestUserController::class, 'update']);

Route::delete('/user/{id}', [TestUserController::class, 'destroy']);
