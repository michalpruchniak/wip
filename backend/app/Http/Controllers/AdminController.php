<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(function (Request $request, $next) {
            if (Auth::check() && Auth::user()->is_admin) {
                return $next($request);
            }
            return response('Unauthorized', 401);
        });
    }

    public function allUsers()
    {

        $users = User::with('profile')->orderBy('created_at', 'asc')->get();

        return $users;
    }

    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->profile()->delete();
            $user->delete();
            return json_encode(['status' => 'success']);
        } catch (Exception $e) {
            return response('Błąð', 404);
        }
    }
}
