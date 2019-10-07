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

    public function login(Request $request)
    {
        $mail = $request->input('mail');
        $password = $request->input('password');

        try{
            $storePassword = \App\User::where('mail', $mail)->first()->password;
        }
        catch (\Exception $e){
            $data_json = [
                'code' => 1,
                'message' => 'Mail does not exist.'
            ];

            return response()->json(
                $data_json,
                400,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }

        if(Hash::check($password, $storePassword)){
            $id = $request->input('id');
            $md = \App\User::find($id);
            $md->is_login = true;
            $md->save();

            return response([], 200);
        }
        else{
            $data_json = [
                'code' => 1,
                'message' => 'Login failed.'
            ];

            return response()->json(
                $data_json,
                401,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }
    }

    public function logout(Request $request)
    {
        $id = $request->input('id');

        $md = User::find($id);
        $md->is_login = false;
        $md->save();

        return response([], 200);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response([], 200);        
    }
}
