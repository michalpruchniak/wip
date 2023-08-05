<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profile = Profile::create([
            'user_id' => 1,
            'name' => 'Admin',
            'lastname' => 'Admin',
            'email' => 'user@ser.pl',
            'job' => 1,
            'testing_systems' => 'Lorem ipsum',
            'raporting_systems' => 'Lorem ipsum',
        ]);

        User::create([
            'email' => 'user@user.pl',
            'password' => Hash::make('password'),
            'is_admin' => true,
        ]);
    }
}
