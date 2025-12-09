<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Ticket;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function AdminDashboardData(){
        
        $adminEmail = Auth::user()->email;
        $tickets = Ticket::with('assignment')->where('created_by',$adminEmail)->get();
        
        $users = User::where('is_admin', 0)->get();
        
        return Inertia::render('Admin/Dashboard',[
            'users' => $users,
            'tickets' => $tickets
        ]);
    }
}
