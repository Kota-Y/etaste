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

        return response([], 201);
    }

    public function show($useId)
    {
        $user = new User();

        $user_id = $useId;

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

        $md = new Favorite();

        $datas = $md->getData($user_id);

        $data_json = [
            'userId' => $user_id,
            'favoriteNum' => count($datas),
            'favoriteStores' => self::toFavoriteArray($datas)
        ];

        return response()->json(
            $data_json,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function destroy($id)
    {
        $favorite = Favorite::find($id);
        $favorite->delete();
        return response([], 200);
    }

    private function toFavoriteArray($requet_obejct)
    {
        $response_arr = [];

        $i = 0;
        while(count($requet_obejct) > $i){
            $arr_data  = [
                'id' => $requet_obejct[$i]->id,
                'name' => $requet_obejct[$i]->name,
                'image' => $requet_obejct[$i]->image,
            ];
            $response_arr[] = $arr_data;

            ++$i;
        }

        return $response_arr;
    }
}
