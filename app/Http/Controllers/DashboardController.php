<?php

namespace App\Http\Controllers;

use App\Models\BotCatch;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function showBotCatches()
    {
        $botCatches = BotCatch::orderBy('id', 'desc')->makeVisible(['invalid', 'id'])->get();
        return Inertia::render('Dashboard/BotCatches', [
            'botcatches' => $botCatches
        ]);
    }

    public function toggleInvalid(Request $request, BotCatch $botCatch)
    {
        $botCatch->invalid = !$botCatch->invalid;
        $botCatch->save();

        return redirect()->back();
    }
}
