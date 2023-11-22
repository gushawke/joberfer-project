<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $currentUser = $request->user();
        $users = User::with('tags') // Load tags
                    ->where('id', '!=', $currentUser->id)
                    ->get()
                    ->map(function ($user) use ($currentUser) {
                        $user->isConnected = $currentUser->connections()->where('connection_id', $user->id)->exists();
                        return $user;
                    });

        return Inertia::render('AllUsersPage', ['users' => $users]);
    }
}

