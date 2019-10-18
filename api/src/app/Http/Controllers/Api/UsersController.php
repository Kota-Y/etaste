<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function store(Request $request)
    {
        $user = new User();

        $user->first_name = $request->input('firstName');
        $user->last_name = $request->input('lastName');
        $user->first_name_kana = $request->input('firstNameKana');
        $user->last_name_kana = $request->input('lastNameKana');
        $user->mail = $request->input('mail');
        $user->password = bcrypt($request->input('password'));
        $user->is_login = false;
        $user->is_store = false;

        $user->save();

        self::callMailVerificationStore($user);

        return response([], 201);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response([], 200);        
    }

    private function callMailVerificationStore($user)
    {
        $mail_varification = app()->make('App\Http\Controllers\Api\MailVerificationsController');
        $mail_varification->store($user->mail);
    }
}
