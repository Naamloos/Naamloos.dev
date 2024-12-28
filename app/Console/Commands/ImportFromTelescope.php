<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laravel\Telescope\EntryType;
use Laravel\Telescope\Storage\EntryModel;
use App\Models\BotCatch;

class ImportFromTelescope extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'naamloos:import-bot-catches';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // get 404s from telescope, and import them into the bot_catches table
        $entries = EntryModel::where('type', EntryType::REQUEST)
            ->where('content->response_status', 404)
            ->get();

        foreach ($entries as $entry) {
            $content = $entry->content;
            $endpoint = $content['uri'];
            $method = $content['method'];

            $botCatch = BotCatch::firstOrCreate(
                ['endpoint' => $endpoint, 'method' => $method],
                ['occurences' => 0]
            );

            $botCatch->incrementOccurences();
        }
    }
}
