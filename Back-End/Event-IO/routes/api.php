<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/test', function(){
    return response()->json(['message' => 'Sanctum is working']);
});
Route::post('login/user', [AuthController::class, 'loginUser']);
Route::post('register/user', [AuthController::class, 'registerUser']);
Route::post('register/eventOrg', [AuthController::class, 'registerEventOrganizer']);
Route::post('login/eventOrg', [AuthController::class, 'loginEventOrg']);
Route::get('categories', [CategoryController::class, 'GetCategories']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout/', [AuthController::class, 'logout']);
    Route::post('update/password', [AuthController::class, 'updatePassword']);
});

Route::middleware(['auth:sanctum', 'event_organizer'])->group(function () {
    Route::post('add/categories', [CategoryController::class, 'CreateCategory']);
    Route::put('update/categories/{id}', [CategoryController::class, 'UpdateCategory']);
    Route::delete('delete/categories/{id}', [CategoryController::class, 'DeleteCategory']);
});


