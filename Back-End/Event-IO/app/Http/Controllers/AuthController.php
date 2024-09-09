<?php

namespace App\Http\Controllers;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegistrationRequest;
use App\Http\Requests\EventOrgRegisterRequest;
use App\Http\Requests\EventOrgLoginRequest;
use App\Http\Requests\UpdatePassword;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registerUser(UserRegistrationRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $validated['role'] = 'user';

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'phone_number' => $validated['phone_number'],
            'date_of_birth' => $validated['date_of_birth'],
            'role' => $validated['role'],

        ]);

        return response()->json([
            'message' => 'user registered successfully',
            'user' => new UserResource($user),
        ],201);
    }
    public function loginUser(UserLoginRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid email or password'
        ], 401);
    }


     public function registerEventOrganizer(EventOrgRegisterRequest $request): JsonResponse

     {
        $validated = $request->validated();
        $validated['role'] = 'event_organizer';

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'phone_number' => $validated['phone_number'],
            'date_of_birth' => $validated['date_of_birth'],
            'role' => $validated['role'],

        ]);

        return response()->json([
            'message' => 'Event organizer registered successfully',
            'user' => new UserResource($user),
        ],201);
    }
    public function loginEventOrg(EventOrgLoginRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid email or password'
        ], 401);
    }

    public function logout(Request $request): JsonResponse
    {
    { $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout successful'
        ], 200);
     }
    }
    public function updatePassword(UpdatePassword $request): JsonResponse
    {
        $validated = $request->validated();

        $user = Auth::user();

        if (!Hash::check($validated['old_password'], $user->password)) {
            return response()->json([
                'message' => 'Old password is incorrect'
            ], 400);
        }

        $user->password = Hash::make($validated['new_password']);
        $user->save();

        return response()->json([
            'message' => 'Password updated successfully'
        ], 200);
    }
};