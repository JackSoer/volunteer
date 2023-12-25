<?php

namespace App\Http\Controllers;

use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $userCount = User::count();

        return inertia('Home', compact('userCount'));
    }
}
