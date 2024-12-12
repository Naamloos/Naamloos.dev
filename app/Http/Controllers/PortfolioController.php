<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $messageSent = session('messageSent', false);
        return Inertia::render('Index', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'currentYear' => date('Y'),
            'messageSent' => $messageSent
        ]);
    }

    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email'],
            'message' => ['required', 'max:1000'],
            'phone' => ['nullable', 'max:20'],
        ]);

        $validated['ip'] = $request->ip();
        $validated['user_agent'] = $request->userAgent();

        Message::create($validated);

        return redirect()->back()->with('messageSent', true);
    }
}
