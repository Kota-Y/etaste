<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Trade;
use App\User;
use App\Store;
use App\Food;
use App\Http\Controllers\Controller;

class TradesController extends Controller
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

        $food = new Food();
        $food_id = $request->input('foodId');

        if(!$food->hasFoodId($food_id)){
            $data_json = [
                'code' => 1,
                'message' => 'FoodId does not exist.'
            ];

            return response()->json(
                $data_json,
                500,
                [],
                JSON_UNESCAPED_UNICODE
            );
        }

        $md = new Trade();

        $md->user_id = $user_id;
        $md->store_id = $store_id;
        $md->food_id = $food_id;
        $md->amount = $request->input('amount');
        $md->recieve_time = $request->input('receiveTime');
        $md->is_completed = false;

        $md->save();

        return response([], 201);
    }

    public function showUser($userId)
    {
        $user = new User();

        $user_id = $userId;

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

        $md = new Trade();

        $datas = $md->getData($user_id);

        $data_json = [
            'id' => 1,
            'tradeNum' => count($datas),
            'trades' => self::toTradeArray($datas)
        ];

        return response()->json(
            $data_json,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function complete(Request $request, $id)
    {
        //
    }

    public function showStore($storeId)
    {
        //
    }

    private function toTradeArray($requet_obejct)
    {
        $response_arr = [];

        $i = 0;
        while(count($requet_obejct) > $i){
            $amount = $requet_obejct[$i]->amount;
            $arr_data  = [
                'id' => $requet_obejct[$i]->id,
                'foodId' => $requet_obejct[$i]->foodId,
                'storeId' => $requet_obejct[$i]->storeId,
                'foodName' => $requet_obejct[$i]->foodName,
                'storeName' => $requet_obejct[$i]->storeName,
                'amount' => $amount,
                'totalPrice' => $requet_obejct[$i]->sale_price * $amount,
                'recieveTime' => $requet_obejct[$i]->recieveTime,
                'isCompleted' => $requet_obejct[$i]->isCompleted,
                'foodImage' => $requet_obejct[$i]->foodImage,
            ];
            $response_arr[] = $arr_data;

            ++$i;
        }

        return $response_arr;
    }
}
