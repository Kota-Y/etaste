<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use App\Models\User;

class LogoutController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/home';
    private $authManager;

    public function __construct(AuthManager $authManager)
    {
        $this->authManager = $authManager;
        $this->middleware('guest')->except('logout');
    }

    public function logout(Request $request)
    {
        $guard = $this->authManager->guard('api');

        $guard->logout();

        $id = $request->input('id');
        $user = User::find($id);
        $user->is_login = false;
        $user->save();

        return response([], 200);
    }
}
