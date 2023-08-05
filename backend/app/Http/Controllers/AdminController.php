<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function allUsers()
    {
        $users = User::with('profile')->orderBy('created_at', 'asc')->get();

        return $users;
    }
}
