<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = 'tickets';
    protected $primaryKey = 'ticket_id';

        protected $fillable = [
        'name',
        'description',
        'file',
        'created_by',
    ];

    public function assignment(){
        return $this->hasOne(
            TicketAssignment::class,
            'ticket_id',
            'ticket_id');
    }
    public function activities(){
        return $this->hasMany(
            TicketActivity::class,
            'ticket_id',
            'ticket_id'
    );
    }
}
