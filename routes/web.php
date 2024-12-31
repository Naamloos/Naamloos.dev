<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Models\BotCatch;
use App\Models\Message;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

Route::get('/attacker-endpoints', function () {
    return response()->json(BotCatch::where('invalid', 0)->get(), 200, [], JSON_PRETTY_PRINT);
})->name('bot-catches');

Route::prefix('bot-catches')->middleware(['auth', 'verified'])->group(function ()
{
    Route::get('/', [DashboardController::class, 'showBotCatches'])->name('bot-catches-list');
    Route::patch('/{botCatch}/toggle-invalid', [DashboardController::class, 'toggleInvalid'])->name('bot-catches-list.toggle');
});

Route::fallback(function (Request $request)
{
    $catch = BotCatch::where('endpoint', $request->path())->where('method', $request->method())->first();
    if($catch)
    {
        $catch->incrementOccurences();
    }
    else
    {
        BotCatch::create([
            'endpoint' => $request->path(),
            'method' => $request->method(),
            'occurences' => 1
        ]);
    }

    return abort(404);
});

require __DIR__.'/auth.php';
