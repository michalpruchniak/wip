<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Libraries\UserBuilder\UserBuilder;
use App\Mail\Register;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return \response([
                'error' => 'Invalid Credentialis!'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 48);

        return \response([
            'jwt' => $token,
            'user' => User::with('profile')->findOrFail($user->id)
        ])->withCookie($cookie);
    }

    public function register(RegisterRequest $request)
    {
        try {
            $user = new UserBuilder();
            $data = $request->all();
            $data['password'] = Str::random(10);
            $user->setElements($data);
            $user->build();

            Mail::to($data['email'])->send(new Register($data));

            return json_encode(['success' => true]);
        } catch (Exception $e) {
            \abort(403);
        }
    }

    public function users(Request $request)
    {
        return $request->user();
    }
}
