<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

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
            'jwt' => $token
        ])->withCookie($cookie);
    }

    public function users(Request $request)
    {
        return $request->user();
    }
}
