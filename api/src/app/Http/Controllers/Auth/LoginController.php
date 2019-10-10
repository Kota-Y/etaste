<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/home';
    private $authManager;

    public function __construct(AuthManager $authManager)
    {
        $this->authManager = $authManager;
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $guard = $this->authManager->guard('api');

        $credentials = $request->only('mail', 'password');
        $token = $guard->attempt($credentials);

        if (!$token) {
            $data_json = [
                'code' => 1,
                'message' => 'Login auth failed.'
            ];

            return response()->json(
                $data_json,
                401,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }

        $id = $request->input('id');
        $user = User::find($id);
        $user->is_login = true;
        $user->save();

        return response()->json(
            $token,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
