<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\Assign;

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
        return $this->hasOne(TicketAssignment::class, 'ticket_id','ticket_id');
    }
}
