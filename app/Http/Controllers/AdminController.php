<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Ticket;
use App\Models\User;
use App\Models\Role;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function AdminDashboardData(){
        
        $adminEmail = Auth::user()->email;
        $tickets = Ticket::with('assignment','activities')->where('created_by',$adminEmail)->get();
        
        return Inertia::render('Admin/Dashboard',[
            'users' => User::with('roles')->get(),
            'roles'=> Role::all(),
            'tickets' => $tickets
        ]);
    }
}
