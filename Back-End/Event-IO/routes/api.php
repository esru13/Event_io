<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout/user', [AuthController::class, 'logoutUser']);
    Route::post('logout/eventOrg', [AuthController::class, 'logoutEventOrg']);
});