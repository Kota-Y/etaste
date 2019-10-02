<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Favorite;
use App\User;
use App\Store;
use App\Http\Controllers\Controller;

class FavoritesController extends Controller
{
    public function store(Request $request)
    {
        $user = new User();
        $user_id = $request->input('userId');

        if(!$user->hasUserId($user_id)){
            $data_json = [
                'code' => 1,
                'message' => 'UserId does not exist.'
            ];

            return response()->json(
                $data_json,
                500,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }

        $store = new Store();
        $store_id = $request->input('storeId');

        if(!$store->hasStoreId($store_id)){
            $data_json = [
                'code' => 1,
                'message' => 'StoreId does not exist.'
            ];

            return response()->json(
                $data_json,
                500,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }

        $md = new Favorite();

        $md->user_id = $user_id;
        $md->store_id = $store_id;

        $md->save();

        $data_json = [];
        
        return response()->json(
            $data_json,
            201,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function show($id)
    {
        //
    }

    public function destroy($id)
    {
        $favorite = Favorite::find($id);
        $favorite->delete();
        return redirect('/favorite');
    }
}
