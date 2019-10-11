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
        $md = new User();

        $md->first_name = $request->input('firstName');
        $md->last_name = $request->input('lastName');
        $md->first_name_kana = $request->input('firstNameKana');
        $md->last_name_kana = $request->input('lastNameKana');
        $md->mail = $request->input('mail');
        $md->password = bcrypt($request->input('password'));
        $md->is_login = false;
        $md->is_store = false;

        $md->save();

        return response([], 201);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response([], 200);        
    }
}
