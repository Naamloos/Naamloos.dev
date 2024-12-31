<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BotCatch extends Model
{
    // table bot_catches
    protected $table = 'bot_catches';
    use HasFactory;

    protected $fillable = [
        'endpoint',
        'method',
        'occurences',
        'invalid'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'id',
        'invalid'
    ];

    protected $casts = [
        'occurences' => 'integer',
        'invalid' => 'boolean',
        'id' => 'integer'
    ];

    public function incrementOccurences()
    {
        $this->occurences++;
        $this->save();
    }
}
