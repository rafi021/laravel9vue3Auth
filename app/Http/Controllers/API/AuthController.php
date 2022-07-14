<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
         $validation = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:4|confirmed',
         ]);

        if($validation->fails()){
            $response = [
                'status' => '400',
                'success' => 'false',
                'message' => $validation->errors()
            ];

            return response()->json($response, 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $response = [
            'status' => 200,
            'success' => 'true',
            'data' => [
                'token' => $user->createToken('MyApp')->plainTextToken,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'message' => 'User registration successfull!'
        ];

        return response()->json($response, 200);
    }

    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if(Auth::attempt($credentials, $request->filled('remember'))){
            $user = Auth::user();

            $response = [
                'status' => 200,
                'success' => 'true',
                'data' => [
                    'token' => $user->createToken('MyApp')->plainTextToken,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
                'message' => 'User login successfull!'
            ];

            return response()->json($response, 200);

        }else{
            $response = [
                'status' => 400,
                'success' => false,
                'message' => 'Unauthorized!'
            ];
            return response()->json($response);
        }
    }
}
