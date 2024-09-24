<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ChapaController;

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


Route::get('/test', function(){
    return response()->json(['message' => 'Sanctum is working']);
});
Route::post('login/user', [AuthController::class, 'loginUser']);
Route::post('check-email', [AuthController::class, 'checkEmail']);
Route::post('register/user', [AuthController::class, 'registerUser']);
Route::post('register/eventOrg', [AuthController::class, 'registerEventOrganizer']);
Route::post('login/eventOrg', [AuthController::class, 'loginEventOrg']);
Route::get('categories', [CategoryController::class, 'GetCategories']);
Route::get('events', [EventController::class, 'events']);
Route::get('event/{id}', [EventController::class, 'getEvent']);
Route::get('/events/search', [EventController::class, 'searchEventByTitle']);
Route::get('/search/',[EventController::class, 'search']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout/', [AuthController::class, 'logout']);
    Route::post('update/password', [AuthController::class, 'updatePassword']);
    Route::get('user', [AuthController::class, 'getUser']);
    Route::post('update/profile', [AuthController::class, 'UpdateProfile']);
});
Route::middleware(['auth:sanctum', 'user'])->group(function () {
    Route::post('select/ticket/{eventId}', [TicketController::class, 'selectTicket']);
    Route::post('ticket/{eventId}', [TicketController::class, 'createTicket']);
});
Route::middleware(['auth:sanctum', 'event_organizer'])->group(function () {
    Route::post('add/categories', [CategoryController::class, 'CreateCategory']);
    Route::put('update/categories/{id}', [CategoryController::class, 'UpdateCategory']);
    Route::delete('delete/categories/{id}', [CategoryController::class, 'DeleteCategory']);
    Route::post('create/event', [EventController::class, 'CreateEvent']);
    Route::put('update/event/{id}', [EventController::class, 'UpdateEvent']);
    Route::delete('delete/event/{id}', [EventController::class, 'DeleteEvent']);
});


Route::post('/payment/initialize', [ChapaController::class, 'initializeTransaction']);
Route::get('/chapa/webhook', [ChapaController::class, 'handleWebhook'])->name('chapa.webhook');
Route::post('/chapa/webhook', [ChapaController::class, 'handleWebhook'])->name('chapa.webhook');