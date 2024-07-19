<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'currentYear' => date('Y'),
        ]);
    }

    public function projects()
    {
        return Inertia::render('Projects', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'currentYear' => date('Y'),
        ]);
    }

    public function donate()
    {
        return Inertia::render('Donate', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'currentYear' => date('Y'),
        ]);
    }
}
