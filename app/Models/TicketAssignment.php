<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketAssignment extends Model
{
    protected $table = 'ticket_assignments';
    protected $primaryKey = 'assign_id';
        protected $fillable = [
        'ticket_id',
        'assigned_to',
        'status',
    ];
    public function ticket(){
        return $this->belongsTo(Ticket::class, 'ticket_id','ticket_id');
    }
}
