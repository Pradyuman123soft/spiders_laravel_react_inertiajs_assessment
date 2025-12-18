<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\TicketAssignment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SuperAdminController extends Controller
{
    public function SuperAdminDashboardData(){
        return Inertia::render('superAdmin/Dashboard',[
            'users' => User::with('roles')->get(),
            'roles'=> Role::all(),
        ]);
    }
    public function makeAdmin(User $user){
        $adminRole = Role::where('name', 'admin')->first();

    // Remove old roles (optional but clean)
    $user->roles()->sync([$adminRole->id]);

    return back()->with('success', 'User promoted to Admin successfully');
    }
    public function removeAdmin(User $user)
{
    //  Prevent touching superadmin
    if ($user->roles->contains('name', 'superadmin')) {
        return back()->withErrors(['You cannot remove superadmin']);
    }

    // Get user role
    $userRole = Role::where('name', 'user')->first();

    // Replace roles (admin → user)
    $user->roles()->sync([$userRole->id]);

    return back()->with('success', 'Admin role removed successfully');
}

    public function DeleteUser(User $user){
        if($user->id === Auth::user()->id){
            return back()->withErrors(['you can not delete your account']);
        }
        if($user->roles->contains('name','superadmin')){
            return back()->withErrors(['you cannot delete any other superadmin']);
        }
        // 1️⃣ Delete assigned tickets
        TicketAssignment::where('assigned_to', $user->email)->delete();
        // detach the role first
        $user->roles()->detach();
        $user->delete();

        return back()->with('success','User deleted successfully');
    }

}
