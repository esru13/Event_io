<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_id',
        'transaction_reference',
        'amount',
        'status',
    ];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }
}