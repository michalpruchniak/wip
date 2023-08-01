<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(Request $request)
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

    public function userDetails(Request $request)
    {
        return $request->user();
    }
}
