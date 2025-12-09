<?php

namespace App\Http\Controllers;

use App\Models\TicketAssignment;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function UserDashboardData(){
        $userEmail = Auth::user()->email;
        $tickets = TicketAssignment::with('ticket')->where('assigned_to', $userEmail)->get();

        return Inertia::render('Users/Dashboard',[
            'tickets' => $tickets,
        ]);
    }
}
