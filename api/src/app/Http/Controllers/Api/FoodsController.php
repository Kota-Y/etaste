<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Food;
use App\Http\Controllers\Controller;

class FoodsController extends Controller
{
    public function index()
    {
        $md = new Food();
        $datas = $md->getData();
        return response()->json(
            $datas,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $food = Food::find($id);
        $food->delete();
        return redirect('/foods');
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
            array_push($response_arr,$arr_data);
        }

        return $response_arr;
    }
}
