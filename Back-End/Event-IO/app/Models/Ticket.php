<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',     // Added to allow mass assignment
        'user_id',      // Added to allow mass assignment
        'quantity',
        'total_price',  // Added to allow mass assignment
        'payment_status', // Added to allow mass assignment
    ];

    // Optional: Define relationships if needed
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
