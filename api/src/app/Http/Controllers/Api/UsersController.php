<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function store(Request $request)
    {
        //
    }

    public function login()
    {
        //
    }

    public function logout()
    {
        //
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect('/user');
    }
}
