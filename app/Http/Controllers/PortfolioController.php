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

        // send message to Discord webhook
        $webhook = env('DISCORD_WEBHOOK');
        if ($webhook) {
            $embed = [
            'title' => 'New Contact Message',
            'fields' => [
                [
                'name' => 'Name',
                'value' => $validated['name'],
                'inline' => true
                ],
                [
                'name' => 'Email',
                'value' => $validated['email'],
                'inline' => true
                ],
                [
                'name' => 'Phone',
                'value' => $validated['phone'] ?? 'N/A',
                'inline' => true
                ],
                [
                'name' => 'Message',
                'value' => $validated['message'],
                'inline' => false
                ],
                [
                'name' => 'IP Address',
                'value' => $validated['ip'],
                'inline' => true
                ],
                [
                'name' => 'User Agent',
                'value' => $validated['user_agent'],
                'inline' => false
                ]
            ],
            'timestamp' => now()->toIso8601String()
            ];

            $data = ['embeds' => [$embed]];
            $options = [
            'http' => [
                'header' => 'Content-Type: application/json',
                'method' => 'POST',
                'content' => json_encode($data)
            ]
            ];
            $context = stream_context_create($options);
            file_get_contents($webhook, false, $context);
        }

        return redirect()->back()->with('messageSent', true);
    }
}
