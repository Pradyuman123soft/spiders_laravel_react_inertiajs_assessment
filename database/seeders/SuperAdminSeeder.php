<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $user = User::where('email', 'admin@gmail.com')->first();
        $role = Role::where('name', 'superadmin')->first();

        if ($user && $role) {
            $user->roles()->syncWithoutDetaching([$role->id]);
        }
    }
}
