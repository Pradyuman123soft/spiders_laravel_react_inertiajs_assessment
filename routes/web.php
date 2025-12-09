<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // User profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// for admins routes
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboardData'])
        ->name('admin.dashboard');
    Route::post('/tickets/create',[TicketController::class, 'store'])->name('tickets.store');
    Route::post('/admin/ticket/update/{id}',[TicketController::class,'updateTicket'])->name('admin.ticket.update');
});

// for users routes
Route::middleware(['auth','verified'])->group(function () {
    Route::get('/user/dashboard', [UserController::class, 'UserDashboardData'])->name('user.dashboard');
    Route::post('/user/ticket/update/{id}',[TicketController::class,'updateTicket'])->name('user.ticket.update'); 
});


require __DIR__.'/auth.php';