<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Libraries\UserBuilder\UserBuilder;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

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
        $user = User::findOrFail($id);
        try {

            if (Auth::user()->id === $user->id) {
                \abort(500);
            } else {
                $user->profile()->delete();
                $user->delete();
                return json_encode(['status' => Auth::user()->id . ' ' . $id]);
            }
        } catch (Throwable) {
            \abort(500);
        }
    }

    public function user($id)
    {
        $user = User::with('profile')->findOrFail($id);
        return $user;
    }

    public function update(RegisterRequest $request, $id)
    {
        try {
            $user = new UserBuilder();
            $user->setElements($request->all());
            $user->update($id);

            return json_encode(['success' => true]);
        } catch (Throwable) {
            \abort(403);
        }
    }
}
