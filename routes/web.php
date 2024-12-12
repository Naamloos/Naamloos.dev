<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Models\Message;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(PortfolioController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'contact')->name('contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'messages' => Message::orderBy('created_at', 'desc')->get()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
