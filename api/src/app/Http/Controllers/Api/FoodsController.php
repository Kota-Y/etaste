<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Food;
use App\Http\Controllers\Controller;

class FoodsController extends Controller
{
    public function index()
    {
        $md = new Food();
        $datas = $md->getAllData();

        $data_json = [
            'id' => 1,
            'foodNum' => count($datas),
            'foods' => self::toFoodArray($datas)
        ];

        return response()->json(
            $data_json,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function store(Request $request)
    {
        $md = new Food();

        $md->name = $request->input('name');
        $md->original_price = $request->input('originalPrice');
        $md->sale_price = $request->input('salePrice');
        $md->start_time = $request->input('startTime');
        $md->end_time = $request->input('endTime');
        $md->amount = $request->input('amount');
        $md->allergy = self::toStringforAllergys($request);
        $md->image_url = $request->input('image');
        $md->store_id = $request->input('storeId');

        $md->save();

        return response([], 201);
    }

    public function show($id)
    {
        $md = new Food();
        $data = $md->getData($id);

        $data_json = [
            'id' => 1,
            'isSaling' => 'true',
            'foodInfo' => [
                'id' => $data[0]->foodId,
                'name' => $data[0]->foodName,
                'originalPrice' => $data[0]->originalPrice,
                'salePrice' => $data[0]->salePrice,
                'startTime' => $data[0]->startTime,
                'endTime' => $data[0]->endTime,
                'allergy' => self::toArray($data[0]->allergy),
                'whySale' => $data[0]->whySale,
                'image' => $data[0]->foodImage,
                'mapLatitude' => $data[0]->mapLatitude,
                'mapLongitude' => $data[0]->mapLongitude,
            ],
            'storeInfo' => [
                'id' => $data[0]->storeId,
                'name' => $data[0]->storeName,
                'image' => $data[0]->storeImage,
                'openTime' => $data[0]->openTime,
                'closeTime' => $data[0]->closeTime,
                'areaPref' => $data[0]->areaPref,
                'areaCity' => $data[0]->areaCity,
                'areaOther' => $data[0]->areaOther,
                'zip' => $data[0]->zip,
                'address' => $data[0]->address,
                'tel' => $data[0]->tel,
                'holiday' => $data[0]->holiday,
                'parking' => $data[0]->parking,
                'access' => $data[0]->access,
                'mapLatitude' => $data[0]->mapLatitude,
                'mapLongitude' => $data[0]->mapLongitude,
                'url' => $data[0]->url,
            ]
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
        $food = Food::find($id);
        $food->delete();
        return response([], 200);
    }

    private function toFoodArray($requet_obejct)
    {
        $response_arr = [];

        $i = 0;
        while(count($requet_obejct) > $i){
            $arr_data  = [
                'id' => $requet_obejct[$i]->id,
                'name' => $requet_obejct[$i]->name,
                'originalPrice' => $requet_obejct[$i]->originalPrice,
                'salePrice' => $requet_obejct[$i]->salePrice,
                'startTime' => $requet_obejct[$i]->startTime,
                'endTime' => $requet_obejct[$i]->endTime,
                'image' => $requet_obejct[$i]->image,
                'mapLatitude' => $requet_obejct[$i]->mapLatitude,
                'mapLongitude' => $requet_obejct[$i]->mapLongitude,
            ];
            $response_arr[] = $arr_data;

            ++$i;
        }

        return $response_arr;
    }

    private function toArray($requet_obejct)
    {
        if(empty($requet_obejct)) return '';

        $arr = explode(',', $requet_obejct);

        $response_arr = [];

        foreach($arr as $key => $value){
            $arr_data  = [
                'id' => $key+1,
                'name' => $value,
            ];
            $response_arr[] = $arr_data;
        }

        return $response_arr;
    }

    private function toStringforAllergys($requet_obejct)
    {
        $allergys = $requet_obejct->input('allergys');

        $response_str = '';
        
        $i = 0;
        while(count($allergys) > $i){
            if($i == 0) $response_str = $allergys[$i]['name'];
            else $response_str = $response_str . ',' . $allergys[$i]['name'];
            ++$i;
        }

        return $response_str;
    }
}
